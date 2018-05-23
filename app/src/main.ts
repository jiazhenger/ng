import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// ======================================================================== angular 多环境支持
import { environment } from './environments/environment';
// ======================================================================== 整个应用的主模块
import { AppModule } from './app/app.module';
// ======================================================================== 在生产模式下，关闭angular开发者模式
if (environment.production) { enableProdMode() }
// ======================================================================== 启动 AppModule 模块
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.log(err));
