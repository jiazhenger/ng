(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2yPe":function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=function(){},s=function(){function l(l,n){this.elem=l,this.play=new t.m,this.title="@HostBinding \u7ed1\u5b9a\u5c5e\u6027\u5230\u6837\u5f0f\u4e0a",this.keyFrame=!0,this.elems=l.nativeElement,this.attr=n}return Object.defineProperty(l.prototype,"bg",{get:function(){return"#d6487e"},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"myClass",{get:function(){return"btn-default"},enumerable:!0,configurable:!0}),l.prototype.mouseenter=function(){this.parent.msg='@HostListener("mouseenter") mouseenter() \u7ed1\u5b9a\u4e8b\u4ef6',this.elems.style.backgroundColor="#ffb752"},l.prototype.mouseleave=function(){this.parent.msg='@HostListener("mouseleave") mouseleave() \u7ed1\u5b9a\u4e8b\u4ef6',this.parent.msg2="",this.parent.msg3="",this.parent.msg4="",this.elems.style.backgroundColor="#d6487e"},l.prototype.resize=function(){this.parent.msg="window.size\u76d1\u542c\u7a97\u53e3\u53d8\u5316"},l.prototype.click=function(){this.play.emit("\u8c03\u7528\u7236\u7ec4\u4ef6\u7684\u65b9\u6cd5"),this.parent.go(),this.parent.msg3="\u6307\u4ee4\u5e26\u7684\u53c2\u6570",this.parent.msg4=this.attr},l}(),a=u("Mzne"),o=function(){function l(l){this.router=l,this.msg="\u5c06\u53d8\u91cf\u4f20\u5165\u5230\u6307\u4ee4\u4e2d\u8fdb\u884c\u5904\u7406"}return l.prototype.start=function(l){this.msg=l},l.prototype.go=function(){this.msg2="\u7528 this.parent.go() \u8c03\u7528 \u7236\u7ec4\u4ef6\u65b9\u6cd5"},l.prototype.directive=function(){this.router.go({popup:"code"}),localStorage.code="views/ng/directive/directive/property.directive.ts"},l.prototype.component=function(){this.router.go({popup:"code"}),localStorage.code="views/ng/directive/property-directive.component.ts"},l}(),i=t.La({encapsulation:2,styles:[],data:{animation:[{type:7,name:"msgState",definitions:[{type:0,name:"inactive",styles:{type:6,styles:{backgroundColor:"red",color:"white",transform:"scale(2) translateX(100px) rotate(-45deg)"},offset:null},options:void 0},{type:0,name:"active",styles:{type:6,styles:{backgroundColor:"#cfd8dc",transform:"scale(1)"},offset:null},options:void 0},{type:1,expr:"inactive => active",animation:{type:4,styles:null,timings:"100ms ease-in"},options:null},{type:1,expr:"active => inactive",animation:{type:4,styles:null,timings:"100ms ease-out"},options:null}],options:{}},{type:7,name:"flyInOut",definitions:[{type:0,name:"in",styles:{type:6,styles:{transform:"translateX(0)"},offset:null},options:void 0},{type:1,expr:":enter",animation:[{type:6,styles:{transform:"translateX(-100%)"},offset:null},{type:4,styles:null,timings:"1000ms ease-in"}],options:null},{type:1,expr:":leave",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%)"},offset:null},timings:1e3}],options:null}],options:{}},{type:7,name:"keyFrame",definitions:[{type:0,name:"in",styles:{type:6,styles:{transform:"translateX(0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:0,transform:"translateX(-100%)",offset:0},offset:null},{type:6,styles:{opacity:1,transform:"translateX(15px)",offset:.8},offset:null},{type:6,styles:{opacity:1,transform:"translateX(0)",offset:1},offset:null}]},timings:1e3}],options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:5,steps:[{type:6,styles:{opacity:1,transform:"translateX(0)",offset:0},offset:null},{type:6,styles:{opacity:1,transform:"translateX(-15px)",offset:.7},offset:null},{type:6,styles:{opacity:0,transform:"translateX(100%)",offset:1},offset:null}]},timings:1e3}],options:null}],options:{}},{type:7,name:"group",definitions:[{type:0,name:"in",styles:{type:6,styles:{width:120,transform:"translateX(0)",opacity:1},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{width:300,transform:"translateX(50px)",opacity:0},offset:null},{type:3,steps:[{type:4,styles:{type:6,styles:{transform:"translateX(0)",width:500},offset:null},timings:"0.5s 0.1s ease"},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.5s ease"}],options:null}],options:null},{type:1,expr:"* => void",animation:[{type:3,steps:[{type:4,styles:{type:6,styles:{transform:"translateX(50px)",width:300},offset:null},timings:"0.5s ease"},{type:4,styles:{type:6,styles:{opacity:0},offset:null},timings:"0.5s 0.2s ease"}],options:null}],options:null}],options:{}},{type:7,name:"ngFor",definitions:[{type:0,name:"in",styles:{type:6,styles:{transform:"translateX(0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{transform:"translateX(-30%)"},offset:null},{type:4,styles:null,timings:"500ms 100ms ease-in"}],options:null},{type:1,expr:"* => void",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(50%)",opacity:0},offset:null},timings:300}],options:null}],options:{}},{type:7,name:"ngFor2",definitions:[{type:0,name:"inactive",styles:{type:6,styles:{transform:"translateX(0) scale(1)"},offset:null},options:void 0},{type:0,name:"active",styles:{type:6,styles:{transform:"translateX(0) scale(1.1)"},offset:null},options:void 0},{type:1,expr:"inactive => active",animation:{type:4,styles:null,timings:"100ms ease-in"},options:null},{type:1,expr:"active => inactive",animation:{type:4,styles:null,timings:"100ms ease-out"},options:null},{type:1,expr:"void => inactive",animation:[{type:6,styles:{transform:"translateX(-100%) scale(1)"},offset:null},{type:4,styles:null,timings:100}],options:null},{type:1,expr:"inactive => void",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(100%) scale(1)"},offset:null},timings:100}],options:null},{type:1,expr:"void => active",animation:[{type:6,styles:{transform:"translateX(0) scale(0)"},offset:null},{type:4,styles:null,timings:200}],options:null},{type:1,expr:"active => void",animation:[{type:4,styles:{type:6,styles:{transform:"translateX(0) scale(0)"},offset:null},timings:200}],options:null}],options:{}}]}});function r(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,4,"div",[["class","samebox btn-group"]],null,null,null,null,null)),(l()(),t.Na(1,0,null,null,1,"button",[["class","btn-default"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.component()&&t),t},null,null)),(l()(),t.fb(-1,null,["\u67e5\u770b\u672c\u7ec4\u4ef6"])),(l()(),t.Na(3,0,null,null,1,"button",[["class","btn-default"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.directive()&&t),t},null,null)),(l()(),t.fb(-1,null,["\u67e5\u770b\u6307\u4ee4"])),(l()(),t.Na(5,0,null,null,55,"div",[["class","lh30 mvvm-code mt10"]],null,null,null,null,null)),(l()(),t.Na(6,0,null,null,18,"dl",[["class","mvvm-list samebox"]],null,null,null,null,null)),(l()(),t.Na(7,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u5c5e\u6027\u578b\u6307\u4ee4( \u4e0e\u7ec4\u4ef6\u901a\u4fe1\u4e00\u6837\u5904\u7406 ): "])),(l()(),t.Na(9,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(10,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["ez"])),(l()(),t.fb(-1,null,[": \u65e0\u53c2\u6570\u7ed1\u5b9a\u6307\u4ee4"])),(l()(),t.Na(13,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(14,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,['[ez]="this"'])),(l()(),t.fb(-1,null,[": \u6709\u53c2\u6570\u7ed1\u5b9a\u6307\u4ee4"])),(l()(),t.Na(17,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,['[parnt]="this"'])),(l()(),t.fb(-1,null,[": \u7ed1\u5b9a\u5c5e\u6027"])),(l()(),t.Na(21,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(22,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,['(play)="start($event)"'])),(l()(),t.fb(-1,null,[": \u7ed1\u5b9a\u65b9\u6cd5, \u5982\u679c\u6709\u53c2\u6570\u4f20\u9012, \u5fc5\u987b\u6709 $event"])),(l()(),t.Na(25,0,null,null,8,"dl",[["class","mvvm-list samebox mt10"]],null,null,null,null,null)),(l()(),t.Na(26,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u5c5e\u6027\u578b\u6307\u4ee4\u4f5c\u7528: "])),(l()(),t.Na(28,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u4fee\u6539\u7236\u7ec4\u4ef6\u7684\u5c5e\u6027"])),(l()(),t.Na(30,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u4fee\u6267\u884c\u7236\u7ec4\u4ef6\u7684\u65b9\u6cd5"])),(l()(),t.Na(32,0,null,null,1,"dd",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u83b7\u53d6\u7236\u7ec4\u4ef6\u5143\u7d20\u7684 DOM \u5bf9\u8c61"])),(l()(),t.Na(34,0,null,null,26,"dl",[["class","mvvm-list samebox mt10"]],null,null,null,null,null)),(l()(),t.Na(35,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding: \u7ed1\u5b9a\u5c5e\u6027\u5230\u7ec4\u4ef6\u4e0a\u6216\u6307\u4ee4\u4e0a "])),(l()(),t.Na(37,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(38,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding('style.background') background=\"#d6487e\""])),(l()(),t.fb(-1,null,[": \u7ed1\u5b9astyle\u6837\u5f0f"])),(l()(),t.Na(41,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(42,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding('class') class=\"myClass\""])),(l()(),t.fb(-1,null,[": \u7ed1\u5b9a\u5c5e\u6027\u6837\u5f0f"])),(l()(),t.Na(45,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(46,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding('title') title=\"myname\""])),(l()(),t.fb(-1,null,[": \u7ed1\u5b9a\u5c5e\u6027\u6837\u5f0f"])),(l()(),t.Na(49,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(50,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding('style.background') get mySyle()\uff5b return 'red'\uff5d"])),(l()(),t.fb(-1,null,[": \u8ba1\u7b97\u540e\u8fd4\u56de\u6837\u5f0f"])),(l()(),t.Na(53,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(54,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding('class') get myClass()\uff5b return 'my-btn'\uff5d"])),(l()(),t.fb(-1,null,[": \u8ba1\u7b97\u540e\u8fd4\u56de\u6837\u5f0f"])),(l()(),t.Na(57,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(58,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["@HostBinding('class.btn-default') get myBtn()\uff5b return true \uff5d"])),(l()(),t.fb(-1,null,[": \u4e3a\u771f\u65f6\u6dfb\u52a0 class, \u53cd\u4e4b,\u4e0d\u6dfb\u52a0"])),(l()(),t.Na(61,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(62,0,null,null,9,"div",[["class","btn-group"]],null,null,null,null,null)),(l()(),t.Na(63,0,null,null,2,"button",[["ez",""]],[[4,"background",null],[8,"className",0],[8,"title",0],[24,"@keyFrame",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],["window","resize"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Xa(l,64).click()&&e),"mouseenter"===n&&(e=!1!==t.Xa(l,64).mouseenter()&&e),"mouseleave"===n&&(e=!1!==t.Xa(l,64).mouseleave()&&e),"window:resize"===n&&(e=!1!==t.Xa(l,64).resize()&&e),e},null,null)),t.Ma(64,16384,null,0,s,[t.k,[8,null]],{parent:[0,"parent"],ez:[1,"ez"]},null),(l()(),t.fb(-1,null,["\u4fee\u6539\u7236\u7ec4\u4ef6\u7684\u5c5e\u6027"])),(l()(),t.Na(66,0,null,null,2,"button",[["ez",""]],[[4,"background",null],[8,"className",0],[8,"title",0],[24,"@keyFrame",0]],[[null,"play"],[null,"click"],[null,"mouseenter"],[null,"mouseleave"],["window","resize"]],function(l,n,u){var e=!0,s=l.component;return"click"===n&&(e=!1!==t.Xa(l,67).click()&&e),"mouseenter"===n&&(e=!1!==t.Xa(l,67).mouseenter()&&e),"mouseleave"===n&&(e=!1!==t.Xa(l,67).mouseleave()&&e),"window:resize"===n&&(e=!1!==t.Xa(l,67).resize()&&e),"play"===n&&(e=!1!==s.start(u)&&e),e},null,null)),t.Ma(67,16384,null,0,s,[t.k,[8,null]],{parent:[0,"parent"],ez:[1,"ez"]},{play:"play"}),(l()(),t.fb(-1,null,["\u6267\u884c\u7236\u7ec4\u4ef6\u7684\u65b9\u6cd5"])),(l()(),t.Na(69,0,null,null,2,"button",[],[[4,"background",null],[8,"className",0],[8,"title",0],[24,"@keyFrame",0]],[[null,"click"],[null,"mouseenter"],[null,"mouseleave"],["window","resize"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Xa(l,70).click()&&e),"mouseenter"===n&&(e=!1!==t.Xa(l,70).mouseenter()&&e),"mouseleave"===n&&(e=!1!==t.Xa(l,70).mouseleave()&&e),"window:resize"===n&&(e=!1!==t.Xa(l,70).resize()&&e),e},null,null)),t.Ma(70,16384,null,0,s,[t.k,[8,null]],{parent:[0,"parent"],ez:[1,"ez"]},null),(l()(),t.fb(-1,null,["\u6307\u4ee4\u5e26\u53c2\u6570"])),(l()(),t.Na(72,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(73,0,null,null,3,"div",[["class","mvvm-pre"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u4fee\u6539\u7236\u7ec4\u4ef6\u7684\u5c5e\u6027: "])),(l()(),t.Na(75,0,null,null,1,"s",[],null,null,null,null,null)),(l()(),t.fb(76,null,["",""])),(l()(),t.Na(77,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(78,0,null,null,3,"div",[["class","mvvm-pre"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u6267\u884c\u7236\u7ec4\u4ef6\u7684\u65b9\u6cd5: "])),(l()(),t.Na(80,0,null,null,1,"s",[],null,null,null,null,null)),(l()(),t.fb(81,null,["",""])),(l()(),t.Na(82,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(83,0,null,null,3,"div",[["class","mvvm-pre"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u6307\u4ee4\u5e26\u7684\u53c2\u6570\u662f:"])),(l()(),t.Na(85,0,null,null,1,"s",[],null,null,null,null,null)),(l()(),t.fb(86,null,["",""])),(l()(),t.Na(87,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(88,0,null,null,3,"div",[["class","mvvm-pre"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u6307\u4ee4\u5e26\u7684\u53c2\u6570\u662f:"])),(l()(),t.Na(90,0,null,null,1,"s",[],null,null,null,null,null)),(l()(),t.fb(91,null,["",""])),(l()(),t.Na(92,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(93,0,null,null,3,"div",[["class","mvvm-pre"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u6307\u4ee4\u83b7\u53d6\u6307\u4ee4\u7ed1\u5b9a\u5143\u7d20\u4e0a\u6307\u5b9a\u5c5e\u6027\u7684\u5c5e\u6027\u503c: class="])),(l()(),t.Na(95,0,null,null,1,"s",[],null,null,null,null,null)),(l()(),t.fb(96,null,["",""]))],function(l,n){var u=n.component;l(n,64,0,u,""),l(n,67,0,u,""),l(n,70,0,u,"\u8fd9\u662f\u6307\u4ee4\u5e26\u7684\u53c2\u6570")},function(l,n){var u=n.component;l(n,63,0,t.Xa(n,64).bg,t.Xa(n,64).myClass,t.Xa(n,64).title,t.Xa(n,64).keyFrame),l(n,66,0,t.Xa(n,67).bg,t.Xa(n,67).myClass,t.Xa(n,67).title,t.Xa(n,67).keyFrame),l(n,69,0,t.Xa(n,70).bg,t.Xa(n,70).myClass,t.Xa(n,70).title,t.Xa(n,70).keyFrame),l(n,76,0,u.msg),l(n,81,0,u.msg2),l(n,86,0,u.msg3),l(n,91,0,u.msg3),l(n,96,0,u.msg4)})}var p=t.Ja("ng-component",o,function(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"ng-component",[],null,null,null,r,i)),t.Ma(1,49152,null,0,o,[a.a],null,null)],null,null)},{},{},[]),c=function(){function l(l,n){this.templateRef=l,this.viewContainer=n,this.hasView=!1}return Object.defineProperty(l.prototype,"myUnless",{set:function(l){l||this.hasView?l&&this.hasView&&(this.viewContainer.clear(),this.hasView=!1):(this.viewContainer.createEmbeddedView(this.templateRef),this.hasView=!0)},enumerable:!0,configurable:!0}),l}(),m=function(){},f=t.La({encapsulation:2,styles:[],data:{}});function y(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"div",[["style","font-size:30px;color:red;line-height:120%"]],null,null,null,null,null)),t.Wa(null,0)],null,null)}var d=function(){function l(l){this.router=l,this.condition=!1}return l.prototype.directive=function(){this.router.go({popup:"code"}),localStorage.code="views/ng/directive/directive/structure.directive.ts"},l.prototype.component=function(){this.router.go({popup:"code"}),localStorage.code="views/ng/directive/structure-directive.component.ts"},l.prototype.ngcontent=function(){this.router.go({popup:"code"}),localStorage.code="views/ng/directive/test-component/test.component.ts"},l}(),b=t.La({encapsulation:2,styles:[],data:{}});function v(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,2,"div",[["class","mvvm-pre"]],null,null,null,null,null)),(l()(),t.Na(1,0,null,null,1,"s",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u81ea\u5b9a\u4e49\u7ed3\u6784\u578b\u5c5e\u6027"]))],null,null)}function g(l){return t.hb(0,[(l()(),t.fb(-1,null,["ng-template \u7528\u6765\u6e32\u67d3HTML, \u5b83\u6c38\u8fdc\u4e0d\u4f1a\u76f4\u63a5\u663e\u793a\u51fa\u6765"]))],null,null)}function N(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,6,"div",[["class","samebox btn-group"]],null,null,null,null,null)),(l()(),t.Na(1,0,null,null,1,"button",[["class","btn-default"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.component()&&t),t},null,null)),(l()(),t.fb(-1,null,["\u67e5\u770b\u672c\u7ec4\u4ef6"])),(l()(),t.Na(3,0,null,null,1,"button",[["class","btn-default"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.directive()&&t),t},null,null)),(l()(),t.fb(-1,null,["\u67e5\u770b\u6307\u4ee4"])),(l()(),t.Na(5,0,null,null,1,"button",[["class","btn-default"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.ngcontent()&&t),t},null,null)),(l()(),t.fb(-1,null,["\u67e5\u770b ng-content"])),(l()(),t.Na(7,0,null,null,28,"div",[["class","lh30 mvvm-code samebox mt10"]],null,null,null,null,null)),(l()(),t.Na(8,0,null,null,27,"dl",[["class","mvvm-list"]],null,null,null,null,null)),(l()(),t.Na(9,0,null,null,1,"dt",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["\u7ed3\u6784\u6027\u6307\u4ee4(\u6bcf\u4e2a\u5bbf\u4e3b\u5143\u7d20\u4e0a\u53ea\u80fd\u6709\u4e00\u4e2a\u7ed3\u6784\u578b\u6307\u4ee4): "])),(l()(),t.Na(11,0,null,null,2,"dd",[],null,null,null,null,null)),(l()(),t.Na(12,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["*ngIf"])),(l()(),t.Na(14,0,null,null,2,"dd",[],null,null,null,null,null)),(l()(),t.Na(15,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["*ngFor"])),(l()(),t.Na(17,0,null,null,2,"dd",[],null,null,null,null,null)),(l()(),t.Na(18,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["ngSwitch"])),(l()(),t.Na(20,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(21,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["<ng-template></ng-template>"])),(l()(),t.fb(-1,null,[": \u7528\u6765\u6e32\u67d3 HTML, \u5b83\u6c38\u8fdc\u4e0d\u4f1a\u76f4\u63a5\u663e\u793a\u51fa\u6765\u3002 \u4e8b\u5b9e\u4e0a\uff0c\u5728\u6e32\u67d3\u89c6\u56fe\u4e4b\u524d\uff0cAngular \u4f1a\u628a ng-template \u53ca\u5176\u5185\u5bb9\u66ff\u6362\u4e3a\u4e00\u4e2a\u6ce8\u91ca"])),(l()(),t.Na(24,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(25,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,['<ng-container *ngFor="let h of heroes"></ng-container>'])),(l()(),t.fb(-1,null,[": \u628a\u4e00\u4e9b\u5144\u5f1f\u5143\u7d20\u5f52\u4e3a\u4e00\u7ec4, Angular \u4e0d\u4f1a\u628a\u5b83\u653e\u8fdb DOM \u4e2d"])),(l()(),t.Na(28,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(29,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["<ng-content></ng-content>"])),(l()(),t.fb(-1,null,[": \u5728\u7ec4\u4ef6\u4e2d\u5d4c\u5165\u5185\u5bb9"])),(l()(),t.Na(32,0,null,null,3,"dd",[],null,null,null,null,null)),(l()(),t.Na(33,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),t.fb(-1,null,["*myDirective='condition'"])),(l()(),t.fb(-1,null,[": \u81ea\u5b9a\u4e49\u7684\u7ed3\u6784\u578b\u6307\u4ee4"])),(l()(),t.Na(36,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(37,0,null,null,1,"button",[["class","btn-default"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;return"click"===n&&(t=0!=(e.condition=!e.condition)&&t),t},null,null)),(l()(),t.fb(-1,null,["\u81ea\u5b9a\u4e49\u663e\u793a\u9690\u85cf\u7ed3\u6784\u578b\u5c5e\u6027"])),(l()(),t.Na(39,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Ea(16777216,null,null,1,null,v)),t.Ma(41,16384,null,0,c,[t.J,t.M],{myUnless:[0,"myUnless"]},null),(l()(),t.Na(42,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Ea(0,null,null,0,null,g)),(l()(),t.Na(44,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(45,0,null,null,2,null,null,null,null,null,null,null)),(l()(),t.Na(46,0,null,null,1,"div",[["style","font-size:20px;color:blue;line-height:120%"]],null,null,null,null,null)),(l()(),t.fb(-1,null,["ng-container \u628a\u4e00\u4e9b\u5144\u5f1f\u5143\u7d20\u5f52\u4e3a\u4e00\u7ec4, Angular \u4e0d\u4f1a\u628ang-container\u653e\u8fdb DOM \u4e2d"])),(l()(),t.Na(48,0,null,null,0,"hr",[["class","_mt10_mb10x"]],null,null,null,null,null)),(l()(),t.Na(49,0,null,null,2,"test-component",[],null,null,null,y,f)),t.Ma(50,49152,null,0,m,[],null,null),(l()(),t.fb(-1,0,["ng-content \u52a8\u6001\u63d2\u5165\u5185\u5bb9\u5230\u5b50\u7ec4\u4ef6 ng-content \u4f4d\u7f6e"]))],function(l,n){l(n,41,0,n.component.condition)},null)}var h=t.Ja("ng-component",d,function(l){return t.hb(0,[(l()(),t.Na(0,0,null,null,1,"ng-component",[],null,null,null,N,b)),t.Ma(1,49152,null,0,d,[a.a],null,null)],null,null)},{},{},[]),X=u("Ip0R"),k=u("ZYCi");u.d(n,"DirectiveModuleNgFactory",function(){return w});var w=t.Ka(e,[],function(l){return t.Ua([t.Va(512,t.j,t.Z,[[8,[p,h]],[3,t.j],t.v]),t.Va(4608,X.q,X.p,[t.s,[2,X.B]]),t.Va(1073742336,X.b,X.b,[]),t.Va(1073742336,k.u,k.u,[[2,k.A],[2,k.q]]),t.Va(1073742336,e,e,[]),t.Va(1024,k.m,function(){return[[{path:"property",component:o},{path:"structure",component:d}]]},[])])})}}]);