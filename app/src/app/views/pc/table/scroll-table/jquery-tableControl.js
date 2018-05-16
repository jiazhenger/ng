/*
	func:	table 操作
	author:	j+2
	time:	2017-06-13
	use:	固定表格表头
	
	ps：
		有横向滚动条拖动：
			1、table 必须设置宽度，且宽度不能为 width:auto;
			2、th 必须设置一个合适的最小宽度： width:80px，设 min-width 不起作用
			
		没有横向滚动条的拖动，且fixed=false:	
			1、不能给 th,td 设置宽度，最好自动
		
 */

$.fn.tableControl = function (option) {
    var opt = {
			min : 60,		// 表格最小宽度
		 resize : true,
		  fixed : false
	}
	$.extend(opt,option);
	
	// 添加 style 样式
	var addStyle = function(obj,style){
		var ostyle = obj.attr('style');
		var flag = ostyle == undefined || ostyle == '';
		var newStyle = (flag ? '' : ostyle) + (flag ? '' : ';') + style;
		obj.attr('style',newStyle);
	}
	// 移除 style 样式
	var removeStyle = function(obj,style){
		var ostyle = obj.attr('style');
		var flag = ostyle == undefined || ostyle == '';
		
		flag ? obj.removeAttr('style') : obj.attr('style', ostyle.replace((flag ? '' : ';') + style,''));
		
		obj.removeAttr('style')
	}
	
	$(this).each(function(){
		var $this = $(this);
		var $wrap = $(this).parent();
		
		var hasCol = $this.find('colgroup')[0];
		var isScrollY = $wrap.css('overflow-y') == 'auto' || $wrap.css('overflow-y') == 'scroll';
		/* 固定表头 */
		function fixedTh(){
			if(isScrollY){
				if($this.siblings('table')[0]){
					$this.siblings('table').remove();
				}
				
				var $ntab = $('<table style="position:absolute;left:0;top:0;z-index:1;table-layout:fixed;"><colgroup></colgroup><thead></thead></table>');
				
				$ntab.attr('class',$this.attr('class'));
				$ntab.find('thead').html($this.find('thead').html());
				if(hasCol){
					$ntab.find('colgroup').html($this.find('colgroup').html());
				}else{
					$ntab.find('colgroup').remove();
				}
				$ntab.insertBefore($this);
				
				$this.css('table-layout') !='fixed' && $this.css({'table-layout':'fixed'});
				$this.find('th').css('overflow-x') != 'hidden' && $wrap.find('th,td').css('overflow-x','hidden');
				// 计算 top 位置
				
				$wrap.on('scroll',function(){
					$this.siblings('table').css('top',$(this).scrollTop());
				}).scroll();
			}
		}
		fixedTh();
		
		if(!opt.resize) return ;
		
		/* 拖动表单列 */
		var $col = $this.find('col');
		var isScroll = $wrap.css('overflow') == 'auto' || $wrap.css('overflow') == 'scroll'
		var isScrollX = $wrap.css('overflow-x') == 'auto' || $wrap.css('overflow-x') == 'scroll';
		
		var isScrollN = $wrap.css('overflow-x') == 'visible';
		
		if(opt.fixed){
			$wrap.css('overflow-x','hidden');
		}
		
		if($wrap.css('position') == 'static'){
			$wrap.css('position','relative');
		}
	
		if(isScrollX || opt.fixed){
			$(this).css('table-layout') !='fixed' && $(this).css({'table-layout':'fixed'})
			$(this).find('th').css('overflow-x') != 'hidden' && $wrap.find('th,td').css('overflow-x','hidden');
		}
		
		/* 拖动行dom准备 */
		var $handleWrap = $('<div class="rc-handle" style="width:100%;position:absolute;left:0;top:0;z-index:2;"></div>');
		var handle = '';
		var $th = $(this).find('thead th');
		var len = $th.length;
		var padding = parseInt($th.css('padding-left'))+parseInt($th.css('padding-right'));
		
		$th.each(function(i){
			var left = 0;
			if(i<len){
				for(var k=0;k<i+1;k++){
					left += $th.eq(k).width();
				}
				
				handle += '<div style="width:7px;margin-left:-3px;position:absolute;top:0;cursor: ew-resize;left:'+ left +'px"></div>';
			}
		})
		
		var $handle = $(handle);
		
		$handleWrap.append($handle);
		
		$handleWrap.insertBefore($(this));
		
		var $thisHandle = $(this).siblings('.rc-handle').children();
		
		$thisHandle.css('height',$(this).height());
		
		if(!isScrollX){
			$handleWrap.children().last().remove();
		}
		// 拖时添加样式
		$thisHandle.mousedown(function(){
			var index = $(this).index();
			$this.find('tr').each(function(){
				$(this).children().eq(index).addClass('active')
			})
			$this.siblings('table').find('tr').each(function(){
				$(this).children().eq(index).addClass('active');
			})
		})
		
		/* 计算鼠标线位置 */
		var resizeHandle = function(){
			$th.each(function(i){
				$thisHandle.eq(i).css('left',$(this).width() * (i+1));
			})
			$th.each(function(i){
				var left = 0;
				if(i<len){
					for(var k=0;k<i+1;k++){
						left += $th.eq(k).width();
					}
					$thisHandle.eq(i).css('left',left);
				}
			})
		}
		
		
		$(window).on('resize', (function() {
			resizeHandle();
		}));
		
		
		// 开始拖动
		
		var userStyle = '-webkit-user-select:none;-moz-user-select:none;user-select:none;';
		$thisHandle.on('mousedown',function(evt){
			var $rc = $(this);
			var i = $rc.index();
			
			var ox = parseInt($(this).parent().offset().left);
			
			$thisHandle.parent().width('100%');
			$thisHandle.parent().height($this.height());
			
			addStyle($('body'),userStyle);
			
			$(document).on('mousemove',function(evt){
				var mx = evt.pageX;
				
				var rx = mx-ox;
				var rw = 0;
			
				$th.each(function(k){
					if(k<i){
						rw += $(this).width();
					}
				})
				var result = rx-rw;
				
				if(result<=opt.min){return;}
				
				$rc.css('left',result);
			
				hasCol ? $col.eq(i).width(result) :  $th.eq(i).width(result-padding);
				
				resizeHandle();
				fixedTh();
				
			})
		})
		// 结束拖动
		$(document).on('mouseup',function(){
			$(this).off("mousemove");
			$thisHandle.parent().width(0);
			$thisHandle.parent().height(0);
			
			removeStyle($('body'),userStyle);
			
			$this.find('tr').children().removeClass('active');
			$this.siblings('table').find('tr').children().removeClass('active');
		});
	})
	
	// 添加当前样式
	$(this).find('tr').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
}

/*
 	$('.table-fixed').tableControl({
			min : 60,	// 表格最小宽度
		 resize : true,	// 是否拖动表格大小
		  fixed : false	// 是否固定表头
	});
 */