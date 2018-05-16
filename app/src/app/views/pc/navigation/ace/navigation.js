$.nav = ()=>{
	let $nav = $('#navigation');
	let $snav = $('#smallNav');
	// 展开收缩目录
	$nav.find('.js-one a').click(function(){
		var $menu = $(this).next('.js-menu');
		// 当一级目录有二级目录时
		if($menu[0]){
			// 打开时
			if($menu.css('display') === 'none'){
				$(this).parent('li').addClass('open');
				$menu.prev().removeClass('active');
				
				if($(this).parent().hasClass('js-one')){
					$(this).parent().siblings('.js-one').each(function(){
						if(!$(this).hasClass('active')){
							$(this).removeClass('open').find('.js-menu').slideUp();
							$(this).find('li').removeClass('open')
						}
					})
				}
			}else{
				// 关闭时
				$(this).parent('li').removeClass('open');
			}
		}
		
		// 当点击有链接的 a 时
		if($(this).attr('href')){
			if($(this).next('.js-menu')[0]){
				$(this).parents('.js-one').siblings().removeClass('active open').find('.js-menu').slideUp();
			}else{
				$(this).parents('.js-menu').parents('li').addClass('active').siblings('.js-one').find('li').removeClass('active open');
			}
		}else{
			// 判断是否有当前链接，没有则取消 li 的 active
			var stack = 0;
			var mtack = 0;
			// 取消本点击内的 active
			$(this).parents('li').find('a').each(function(){
				if($(this).hasClass('active') && $(this).attr('href')){
					stack++;
				}
			})
			if(stack === 0) $(this).next('.js-menu').parents('li').removeClass('active')
			
			// 取消兄弟节点的 active
			$(this).parents('li').siblings().find('a').each(function(){
				if($(this).hasClass('active') && $(this).attr('href')){
					mtack ++
				}
			})
			if(mtack === 0) $(this).next('.js-menu').parents('li').siblings('.active').removeClass('active open').find('.js-menu').slideUp()
		}
		
		$menu.stop(true,false).slideToggle();
	})
	// 刷新判断当前页面
	 $nav.find('li>a').each(function(){
		if($(this).hasClass('active')){
			$(this).parents('.js-one').addClass('open active')
			$(this).parents('.js-menu').slideDown();
		}
	})
	$nav.find('dd a').each(function(){
		if($(this).hasClass('active')){
			$(this).parents('li').addClass('open active')
			$(this).parents('.js-menu').slideDown();
		}
	})
	// 显示导航
	$snav.click(function(){
		$nav.addClass('show');
		return false;
	})
	// 隐藏导航
	$('body').click(function(){
		if($snav.css('display') !== 'none'){
			$nav.removeClass('show');
		}
	})
}
