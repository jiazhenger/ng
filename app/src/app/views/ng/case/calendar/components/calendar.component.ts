// ===================================================== 
import { Component, Input, Output, EventEmitter } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
// ===================================================== 
@Component({
	selector:'calendar-component',
    templateUrl:'./calendar.html',
    styleUrls:['style.css']
})

export class CalendarComponent{
	@Input() isShow:boolean = false;
	@Input() wraperClass = '';	// 最外层日历的 class
	@Input() hasHeader = false;					// 是否显示头
	@Input() split = '-';						// 日期分隔线
	@Input() range = [2016,2018];				// 时间范围
	@Input() dayTxt:any = 0; 					// 选择星期显示文字
	@Input() hasthisero = true;					// 是否给不满10的数字前面加 0
	@Input() style = 3;							// 日历样式选择
	@Input() parent;							// 父级
	
	@Input() active = '';						// 当前选中时间
	
	@Output() clickTime = new EventEmitter<string>();
	
	// 判断是否是闰年，闰年 29 天，平年 28 天
	private isLeap(y) {
		return ( y%100 ==0 ? (y%400==0 ? 1:0) : (y%4==0 ? 1:0));
	}
	// 包含十二个月在内的月份总天数的数组
	private days(y){
		return new Array(31,28+this.isLeap(y),31,30,31,30,31,31,30,31,30,31);
	}
	// 计算处理月第一天是星期几
	private getDay(y,m,d){
		var date = new Date(y + '/'+ m + '/' + d);
		var day = date.getDay();
		return day;
	}
	// 表格所需行数
	private tr(y,m,d){
		return Math.ceil((this.days(y)[m-1] + this.getDay(y,m,d))/7);
	}
	// 获取当前时间
	private now(){
		var d = new Date();
		return {
				 year : d.getFullYear(),
				month : d.getMonth()+1,
				 date : d.getDate(),
				  day : d.getDay()
		};
	}
	// 给小于 10 的数字加 0
	private zero(v){
		if(!this.hasthisero) return v;
		return v < 10 ? '0'+v : v;
	}
	// 处理星期几显文字,
	private thead(){
		let a = ['日','一','二','三','四','五','六'];
		let b = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
		let c = ['周日','周一','周二','周三','周四','周五','周六'];
		let d = ['Su','Mo','Tu','We','Th','Fr','Sa'];
		let txt:any = a;
		switch(this.dayTxt){
			case 1:
				txt = b;
				break;
			case 2:
				txt = c;
				break;
			case 3:
				txt = d;
				break;
			default:
				txt = a;
		}
	
		
		return txt;
	}
	// 将星期几数字转为汉字或英语
	private dayToWord(num){
		var str = ['日','一','二','三','四','五','六'];
		return str[num];
	}
	// 核心,更新时间表
	private updateDate(y,m){
		this.tdList = [];
		let trlength = this.tr(y,m,1);
		let sp = this.split;
		for(let i=0; i< trlength; i++ ){
			this.tdList[i] = [];
			for(let k=0; k<7; k++){
				let idx = i * 7 + k;					// 单元格自然序列号
				let date = idx - this.getDay(y,m,1)+1; 	//计算日期
				let rel = y + sp + this.zero(m) + sp + this.zero(date);
				
				// 过滤无效时间
				if(date<=0){	
					if(m == 1){
						date = date + 31;
						rel = (y-1) + sp + 12 + sp + this.zero(date);
					}else{
						date = date + this.days(y)[m-2];
						rel = y + sp + this.zero((m-1)) + sp + this.zero(date);
					}
					this.tdList[i][k] = {rel:rel,time:date,disabled:true}
				}else if( date > this.days(y)[m-1]){ // 上个月与下个月的时间
					if(m == 12){
						date = date - 31;
						rel = (y+1) + sp + this.zero(1) + sp + this.zero(date);
					}else{
						date = date - this.days(y)[m-1];
						rel = y + sp + this.zero((m+1)) + sp + this.zero(date);
					}
					this.tdList[i][k] = {rel:rel,time:date,disabled:true}
				}else{
					if(date == this.now().date && y == this.now().year && m == this.now().month){ // 今天时间
						this.tdList[i][k] = {rel:rel,time:date,now:true}
					}else{
						this.tdList[i][k] = {rel:rel,time:date}
					}
				}
			}
		}
	}
	result:any = {};
	yearModel:any;
	monthModel:any;
	year:any[] = [];
	month:any[] = [];
	date:any = {}
	
	theadList:any[] = [];
	tdList:any = [];
	ngOnInit(){
		// 获取年列表
		for(let i=1;i<13;i++){
			this.month.push(i);
		}
		// 获取月列表
		for(let i=this.range[0];i<=this.range[1];i++){
			this.year.push(i);
		}
		
		this.reset();
	}
	// 初始化重置时间
	reset(){
		// 初始化为当天时间
		this.date = this.now();
		this.date.day = this.dayToWord(this.date.day);
		this.yearModel = this.date.year;
		this.monthModel = this.date.month;
		// 表格添加星期几
		this.theadList = this.thead();

		this.updateDate(this.date.year,this.date.month)
		
		this.result = {
			date: this.date.year + this.split + this.date.month + this.split + this.date.date,
			day : '星期' + this.date.day
		}
	}
	// 月带年递减
	leftChange(){
		this.monthModel --;
		if(this.monthModel<1){
			this.yearModel --;
			this.monthModel = 12;
		}
		this.yearChange();
	}
	// 月带年递增
	rightChange(){
		this.monthModel ++;
		if(this.monthModel > 12){
			this.yearModel ++;
			this.monthModel = 1;
		}
		this.yearChange();
	}
	// 年递增
	yearAddChange(){
		this.yearModel ++;
		this.yearChange();
	}
	// 年递减
	yearMinusChange(){
		this.yearModel --;
		this.yearChange();
	}
	// 月递增
	monthAddChange(){
		this.monthModel ++;
		if(this.monthModel > 12){
			//this.yearModel ++;
			this.monthModel = 1;
		}
		this.yearChange();
	}
	// 月递减
	monthMinusChange(){
		this.monthModel --;
		if(this.monthModel<1){
			//this.yearModel --;
			this.monthModel = 12;
		}
		this.yearChange();
	}
	// select year
	yearChange(){
		this.updateDate(this.yearModel,parseInt(this.monthModel));
		this.date = {
			year: this.yearModel,
			month: parseInt(this.monthModel)
		}
	}
	// select month
	monthChange(){
		this.yearChange();
	}
	// 获取时间结果
	getTime(time,disabled){
		
		let t = time.split(this.split);
		let y = t[0];
		let m = parseInt(t[1]);
		let d = parseInt(t[2]);
		
		let day = this.dayToWord(this.getDay(y,m,d));
		
		this.result = { date:time, day: '星期' + day };
		
		this.date = {
			year: y,
			month: m,
			date: d,
			day: day
		}
		this.yearModel = this.date.year;
		this.monthModel = this.date.month;
		
		this.active = time;
		
		if(disabled){
			this.updateDate(y,m);
		}
		
		this.clickTime.emit();
	}
	stopPrev(event){
		event.stopPropagation();
	}	
}
