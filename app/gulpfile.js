// ============================================================================================  引入模块
const gulp = require('gulp');					// 本地安装gulp所用到的地方
const less = require('gulp-less');				// 编译 less

const cssmin = require('gulp-clean-css');		// 压缩 css
const notify = require('gulp-notify');			// 异常处理：处理出现异常并不终止watch事件
	
// ============================================================================================  参数配置
var srcPath = 'src/app/';
var param = {
	less : {
		 src : srcPath + '**/**.less',
		dest : srcPath,
	   watch : srcPath + '**/**.less'
	}
}
var mainLess = 'src/assets/less/main.less';
var frameLess = 'src/assets/less/frame.less';
// ============================================================================================ 编译框架 less
gulp.task('frame',function(){
    gulp.src(frameLess)						// 选择编译文件，传入参数是文件路径
	    .pipe(less()) 								// 该任务调用的模块
		.pipe(cssmin({
			format: 'keep-breaks',
            compatibility: 'ie8'			//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
		},function(details) {
 			console.log(details.name + ': ' + details.stats.originalSize);	// 原始大小
			//console.log(details.name + ': ' + details.stats.minifiedSize);	// 修改大小
		}))
		.pipe(notify({message:'frame.less success'}))
		.pipe(gulp.dest('src/assets/css')) 			// 输出文件
});
// ============================================================================================ 编译公共 less
gulp.task('main',function(){
    gulp.src(mainLess)						// 选择编译文件，传入参数是文件路径
	    .pipe(less()) 								// 该任务调用的模块
		.pipe(cssmin({
			format: 'keep-breaks',
            compatibility: 'ie8'			//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
		},function(details) {
 			console.log(details.name + ': ' + details.stats.originalSize);	// 原始大小
			//console.log(details.name + ': ' + details.stats.minifiedSize);	// 修改大小
		}))
		.pipe(notify({message:'main.less success'}))
		.pipe(gulp.dest('src/assets/css')) 			// 输出文件
});
// ============================================================================================ 编译模板 less
gulp.task('less',function(){
    gulp.src(param.less.src)						// 选择编译文件，传入参数是文件路径
	    .pipe(less()) 								// 该任务调用的模块
		.pipe(cssmin({
			format: 'keep-breaks',		// beautify: 换行不去空格 
											// keep-breaks：换行去空格
											// 默认不换行且去掉空格
            compatibility: 'ie8',			//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
       		/*
			format:{
				breaks:{
					afterAtRule: true, 
				    afterBlockBegins: true,
				    afterBlockEnds: true,
			    	afterComment: true,
			    	afterProperty: true,
					afterRuleBegins: true,
					afterRuleEnds: true,
					beforeBlockEnds: true,
					betweenSelectors: true
				},
				indentBy : 1,	// css 内容缩进多少个 indentWith
				indentWith: 'tab'	// space | tab
			}*/
		},function(details) {
 			console.log(details.name + ': ' + details.stats.originalSize);	// 原始大小
			//console.log(details.name + ': ' + details.stats.minifiedSize);	// 修改大小
		}))
		.pipe(notify({message:'less success'}))
		.pipe(gulp.dest(param.less.dest)) 			// 输出文件
});
// ============================================================================================ 监听事件（自动编译文件）
gulp.task('auto', function () {
    gulp.watch(param.less.watch, ['less']);	// less
    gulp.watch('src/assets/less/frame.less', ['frame']);	// less
    gulp.watch('src/assets/less/**/**.less', ['main']);	// less
})
// ============================================================================================  定义默认任务，gulp 启动
gulp.task('default',['auto','less','main','frame']);
