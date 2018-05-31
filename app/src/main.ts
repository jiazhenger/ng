import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// ======================================================================== angular 多环境支持
import { environment } from './environments/environment';
// ======================================================================== 整个应用的主模块
import { AppModule } from './app/app.module';
// ======================================================================== 在生产模式下，关闭angular开发者模式
if (environment.production) { enableProdMode() }
// ======================================================================== 导入公共及常用方法
import './common/index';
// ======================================================================== 启动 AppModule 模块
const bootstrap = () => {
  return platformBrowserDynamic().bootstrapModule(AppModule, {
    defaultEncapsulation: ViewEncapsulation.Emulated,
    preserveWhitespaces: false,			// 配置是否保留空格，false：不保留，true：保留
  }).catch(err => console.log(err));
}
// ======================================================================== 启动后执行
bootstrap().then(()=>{
	const body = document.querySelector('body');
	body.style.overflow = 'hidden';
	
    setTimeout(()=>{
    	let preloader = document.querySelector('.preloader');
		if (!preloader) return;
		preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
		preloader.addEventListener('transitionend', function (){	// 监听动画是否结束
			preloader.className = 'preloader-hidden';
		});
		
    	body.style.overflow = '';
    },100)
})
