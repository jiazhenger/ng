(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"Sop/":function(n,l,u){"use strict";u.r(l);var t=u("CcnG"),o=function(){},a=u("ZYCi"),e=u("Ip0R"),i=function(){function n(){}return n.prototype.ngAfterViewInit=function(){var n=$("#navigation"),l=$("#smallNav");n.find(".js-tit").click(function(){return"none"==$(this).next().css("display")?$(this).addClass("active").next().fadeIn(200):$(this).removeClass("active").next().fadeOut(200),!1}),n.find("a").each(function(){$(this).hasClass("active")&&($(this).parents("nav").fadeIn(200).prev().addClass("active"),$(this).parents("menu").fadeIn(200).prev().addClass("active"))}),l.click(function(){return n.addClass("show"),!1}),$("body").click(function(){"none"!=l.css("display")&&n.removeClass("show")})},n}(),s=t.La({encapsulation:0,styles:[[".navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .omit[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;word-wrap:normal;text-overflow:ellipsis}.linear[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{transition:all .3s linear}.font-angle-right[_ngcontent-%COMP%]:before{content:'\\f105'}.font-navicon[_ngcontent-%COMP%]:before{content:'\\f0c9';font-size:16px}.header[_ngcontent-%COMP%]{height:50px;border-bottom:1px solid #efefef}.logo[_ngcontent-%COMP%]{position:relative;top:50%;margin:-20px 0 0 20px;width:150px;height:40px;float:left}.logo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;height:100%;display:block}.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.small-nav[_ngcontent-%COMP%]{width:30px;height:30px;background-color:#4da1ff;color:#fff;text-align:center;line-height:30px;border-radius:3px;position:relative;top:50%;margin:-15px 0 0 10px;float:left;cursor:pointer;display:none}.container[_ngcontent-%COMP%]{width:100%;position:absolute;top:50px;bottom:0;min-width:320px}.navigation[_ngcontent-%COMP%]{width:200px;height:100%;float:left;border-right:1px solid #efefef;position:relative}.navigation[_ngcontent-%COMP%]   menu[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]{margin-left:20px;display:none}.navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{height:32px;line-height:32px;padding:0 5px;-ms-box-sizing:content-box;box-sizing:content-box;border:1px solid #fff;cursor:pointer}.navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{float:left}.navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px;float:right;-webkit-transform:rotate(0);transform:rotate(0)}.navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:hover{border-color:#4da1ff}.navigation[_ngcontent-%COMP%]   h3.active[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5.active[_ngcontent-%COMP%]{color:#4da1ff}.navigation[_ngcontent-%COMP%]   h3.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] > a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{padding:0;height:32px;line-height:32px}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{border-radius:3px}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .navigation[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:hover, .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]:hover{background-color:#eee;color:#4da1ff}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{height:28px;line-height:28px}.navigation[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}.navigation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:10px 5px}.navigation[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:0 5px}.navigation[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#4da1ff}main[_ngcontent-%COMP%]{height:100%;margin-left:200px;background-color:#fafbfc}main[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:5px}.content[_ngcontent-%COMP%]{padding:20px}@media (max-width:767px){.navigation[_ngcontent-%COMP%]{position:absolute;z-index:1;left:0;top:0;bottom:0;height:auto;background-color:#fff;display:none}.navigation.show[_ngcontent-%COMP%]{display:block}main[_ngcontent-%COMP%]{margin:0}.content[_ngcontent-%COMP%]{padding:3% 3% 60px}.small-nav[_ngcontent-%COMP%]{display:block}}"]],data:{}});function c(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,5,"header",[["class","header"]],null,null,null,null,null)),(n()(),t.Na(1,0,null,null,3,"h1",[["class","logo"]],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,2,"a",[["routerLink","/three"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Xa(n,3).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.Ma(3,671744,null,0,a.t,[a.q,a.a,e.k],{routerLink:[0,"routerLink"]},null),(n()(),t.Na(4,0,null,null,0,"img",[["src","./assets/images/logo.png"]],null,null,null,null,null)),(n()(),t.Na(5,0,null,null,0,"i",[["class","font-navicon small-nav"],["id","smallNav"]],null,null,null,null,null)),(n()(),t.Na(6,0,null,null,19,"section",[["class","container"]],null,null,null,null,null)),(n()(),t.Na(7,0,null,null,14,"aside",[["class","navigation oys"],["id","navigation"]],null,null,null,null,null)),(n()(),t.Na(8,0,null,null,13,"ul",[],null,null,null,null,null)),(n()(),t.Na(9,0,null,null,12,"li",[],null,null,null,null,null)),(n()(),t.Na(10,0,null,null,3,"h3",[["class","js-tit"]],null,null,null,null,null)),(n()(),t.Na(11,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["Scene \u573a\u666f"])),(n()(),t.Na(13,0,null,null,0,"i",[["class","font-angle-right"]],null,null,null,null,null)),(n()(),t.Na(14,0,null,null,7,"menu",[],null,null,null,null,null)),(n()(),t.Na(15,0,null,null,6,"li",[],null,null,null,null,null)),(n()(),t.Na(16,0,null,null,5,"a",[["routerLink","/three/scene"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,u){var o=!0;return"click"===l&&(o=!1!==t.Xa(n,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.Ma(17,671744,[[2,4]],0,a.t,[a.q,a.a,e.k],{routerLink:[0,"routerLink"]},null),t.Ma(18,1720320,null,2,a.s,[a.q,t.k,t.B,t.h],{routerLinkActive:[0,"routerLinkActive"]},null),t.db(603979776,1,{links:1}),t.db(603979776,2,{linksWithHrefs:1}),(n()(),t.fb(-1,null,["\u573a\u666f"])),(n()(),t.Na(22,0,null,null,3,"main",[["class","oxys"]],null,null,null,null,null)),(n()(),t.Na(23,0,null,null,2,"section",[["class","content ng-frame"]],null,null,null,null,null)),(n()(),t.Na(24,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.Ma(25,212992,null,0,a.v,[a.b,t.M,t.j,[8,null],t.h],null,null)],function(n,l){n(l,3,0,"/three"),n(l,17,0,"/three/scene"),n(l,18,0,"active"),n(l,25,0)},function(n,l){n(l,2,0,t.Xa(l,3).target,t.Xa(l,3).href),n(l,16,0,t.Xa(l,17).target,t.Xa(l,17).href)})}var r=t.Ja("full-screen",i,function(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"full-screen",[],null,null,null,c,s)),t.Ma(1,4243456,null,0,i,[],null,null)],null,null)},{},{},[]),g=u("Mzne"),d=function(n){this.router=n},p=t.La({encapsulation:2,styles:[],data:{}});function h(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,2,"div",[["class","samebox"]],null,null,null,null,null)),(n()(),t.Na(1,0,null,null,1,"a",[["class","btn-default mr10"],["href","http://techbrood.com/threejs/docs/"],["target","_blank"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["three.js \u4e2d\u6587\u53c2\u8003\u624b\u518c"]))],null,null)}var C=t.Ja("ng-component",d,function(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"ng-component",[],null,null,null,h,p)),t.Ma(1,49152,null,0,d,[g.a],null,null)],null,null)},{},{},[]),f=u("gIcY"),m=/Chrome/gi.test(navigator.userAgent),M="ActiveXObject"in window||m?"mousewheel":"DOMMouseScroll",v=function(){function n(){this.parent={},this.change=new t.m,this.camera={x:0,y:0,z:-5},this.position={x:0,y:0,z:0},this.rotation={x:0,y:0,z:0},this.size={w:1,h:1,z:1}}return n.prototype.onChange=function(){var n,l=this;clearTimeout(n),n=setTimeout(function(){l.change.emit()},500)},n.prototype.focus=function(n,l,u){var t=this;!function(n,l,u){n.addEventListener?n.addEventListener(l,u,!1):n.attachEvent?n.attachEvent("on"+l,u):n["on"+l]=u}(n,M,function(n){n.deltaY>0?t[l][u]-=1:t[l][u]+=1,t.change.emit()})},n.prototype.blur=function(n){!function(n,l,u){if(n.removeEventListener)n.removeEventListener(l,u,!1);else if(n.detachEvent)n.detachEvent("on"+l,u);else{if(!n.click)throw new Error("your browser not suport event");n["on"+l]=null}}(n,M,function(n){})},n}(),X=t.La({encapsulation:0,styles:["h2[_ngcontent-%COMP%]{font-weight:bold;}"],data:{}});function b(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,121,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),t.Na(1,0,null,null,120,"ul",[["class","clearfox three-form lh32"]],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["camera\u5750\u6807\uff1a"])),(n()(),t.Na(4,0,null,null,27,"li",[],null,null,null,null,null)),(n()(),t.Na(5,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["x\uff1a"])),(n()(),t.Na(7,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(8,0,[["cx",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,9)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,9).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,9)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,9)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.camera.x=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,8),"camera","x")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,8))&&o),o},null,null)),t.Ma(9,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(11,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(13,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(14,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["y\uff1a"])),(n()(),t.Na(16,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(17,0,[["cy",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,18)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,18).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,18)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,18)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.camera.y=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,17),"camera","y")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,17))&&o),o},null,null)),t.Ma(18,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(20,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(22,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(23,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["z\uff1a"])),(n()(),t.Na(25,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(26,0,[["cz",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,27)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,27).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,27)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,27)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.camera.z=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,26),"camera","z")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,26))&&o),o},null,null)),t.Ma(27,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(29,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(31,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(32,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["\u56fe\u50cf\u5750\u6807\uff1a"])),(n()(),t.Na(34,0,null,null,27,"li",[],null,null,null,null,null)),(n()(),t.Na(35,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["x\uff1a"])),(n()(),t.Na(37,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(38,0,[["ix",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,39)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,39).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,39)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,39)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.position.x=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,38),"position","x")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,38))&&o),o},null,null)),t.Ma(39,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(41,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(43,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(44,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["y\uff1a"])),(n()(),t.Na(46,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(47,0,[["iy",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,48)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,48).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,48)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,48)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.position.y=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,47),"position","y")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,47))&&o),o},null,null)),t.Ma(48,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(50,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(52,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(53,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["z\uff1a"])),(n()(),t.Na(55,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(56,0,[["iz",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,57)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,57).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,57)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,57)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.position.z=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,56),"position","z")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,56))&&o),o},null,null)),t.Ma(57,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(59,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(61,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(62,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["\u56fe\u50cf\u65cb\u8f6c\u89d2\u5ea6\uff1a"])),(n()(),t.Na(64,0,null,null,27,"li",[],null,null,null,null,null)),(n()(),t.Na(65,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["x\uff1a"])),(n()(),t.Na(67,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(68,0,[["rx",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,69)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,69).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,69)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,69)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.rotation.x=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,68),"rotation","x")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,68))&&o),o},null,null)),t.Ma(69,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(71,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(73,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(74,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["y\uff1a"])),(n()(),t.Na(76,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(77,0,[["ry",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,78)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,78).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,78)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,78)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.rotation.y=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,77),"rotation","y")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,77))&&o),o},null,null)),t.Ma(78,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(80,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(82,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(83,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["z\uff1a"])),(n()(),t.Na(85,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(86,0,[["rz",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,87)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,87).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,87)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,87)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.rotation.z=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,86),"rotation","z")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,86))&&o),o},null,null)),t.Ma(87,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(89,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(91,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(92,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.fb(-1,null,["\u56fe\u50cf\u5927\u5c0f\uff1a"])),(n()(),t.Na(94,0,null,null,27,"li",[],null,null,null,null,null)),(n()(),t.Na(95,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["w\uff1a"])),(n()(),t.Na(97,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(98,0,[["w",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,99)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,99).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,99)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,99)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.size.w=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,98),"size","w")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,98))&&o),o},null,null)),t.Ma(99,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(101,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(103,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(104,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["h\uff1a"])),(n()(),t.Na(106,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(107,0,[["h",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,108)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,108).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,108)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,108)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.size.h=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,107),"size","h")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,107))&&o),o},null,null)),t.Ma(108,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(110,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(112,16384,null,0,f.r,[[4,f.q]],null,null),(n()(),t.Na(113,0,null,null,1,"h6",[["class","col-sm-4 res-tr-tl"]],null,null,null,null,null)),(n()(),t.fb(-1,null,["z\uff1a"])),(n()(),t.Na(115,0,null,null,6,"aside",[["class","col-sm-5"]],null,null,null,null,null)),(n()(),t.Na(116,0,[["z",1]],null,5,"input",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"focus"],[null,"blur"],[null,"input"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,u){var o=!0,a=n.component;return"input"===l&&(o=!1!==t.Xa(n,117)._handleInput(u.target.value)&&o),"blur"===l&&(o=!1!==t.Xa(n,117).onTouched()&&o),"compositionstart"===l&&(o=!1!==t.Xa(n,117)._compositionStart()&&o),"compositionend"===l&&(o=!1!==t.Xa(n,117)._compositionEnd(u.target.value)&&o),"ngModelChange"===l&&(o=!1!==(a.size.z=u)&&o),"ngModelChange"===l&&(o=!1!==a.onChange()&&o),"focus"===l&&(o=!1!==a.focus(t.Xa(n,116),"size","z")&&o),"blur"===l&&(o=!1!==a.blur(t.Xa(n,116))&&o),o},null,null)),t.Ma(117,16384,null,0,f.d,[t.B,t.k,[2,f.a]],null,null),t.cb(1024,null,f.p,function(n){return[n]},[f.d]),t.Ma(119,671744,null,0,f.u,[[8,null],[8,null],[8,null],[6,f.p]],{model:[0,"model"]},{update:"ngModelChange"}),t.cb(2048,null,f.q,null,[f.u]),t.Ma(121,16384,null,0,f.r,[[4,f.q]],null,null)],function(n,l){var u=l.component;n(l,11,0,u.camera.x),n(l,20,0,u.camera.y),n(l,29,0,u.camera.z),n(l,41,0,u.position.x),n(l,50,0,u.position.y),n(l,59,0,u.position.z),n(l,71,0,u.rotation.x),n(l,80,0,u.rotation.y),n(l,89,0,u.rotation.z),n(l,101,0,u.size.w),n(l,110,0,u.size.h),n(l,119,0,u.size.z)},function(n,l){n(l,8,0,t.Xa(l,13).ngClassUntouched,t.Xa(l,13).ngClassTouched,t.Xa(l,13).ngClassPristine,t.Xa(l,13).ngClassDirty,t.Xa(l,13).ngClassValid,t.Xa(l,13).ngClassInvalid,t.Xa(l,13).ngClassPending),n(l,17,0,t.Xa(l,22).ngClassUntouched,t.Xa(l,22).ngClassTouched,t.Xa(l,22).ngClassPristine,t.Xa(l,22).ngClassDirty,t.Xa(l,22).ngClassValid,t.Xa(l,22).ngClassInvalid,t.Xa(l,22).ngClassPending),n(l,26,0,t.Xa(l,31).ngClassUntouched,t.Xa(l,31).ngClassTouched,t.Xa(l,31).ngClassPristine,t.Xa(l,31).ngClassDirty,t.Xa(l,31).ngClassValid,t.Xa(l,31).ngClassInvalid,t.Xa(l,31).ngClassPending),n(l,38,0,t.Xa(l,43).ngClassUntouched,t.Xa(l,43).ngClassTouched,t.Xa(l,43).ngClassPristine,t.Xa(l,43).ngClassDirty,t.Xa(l,43).ngClassValid,t.Xa(l,43).ngClassInvalid,t.Xa(l,43).ngClassPending),n(l,47,0,t.Xa(l,52).ngClassUntouched,t.Xa(l,52).ngClassTouched,t.Xa(l,52).ngClassPristine,t.Xa(l,52).ngClassDirty,t.Xa(l,52).ngClassValid,t.Xa(l,52).ngClassInvalid,t.Xa(l,52).ngClassPending),n(l,56,0,t.Xa(l,61).ngClassUntouched,t.Xa(l,61).ngClassTouched,t.Xa(l,61).ngClassPristine,t.Xa(l,61).ngClassDirty,t.Xa(l,61).ngClassValid,t.Xa(l,61).ngClassInvalid,t.Xa(l,61).ngClassPending),n(l,68,0,t.Xa(l,73).ngClassUntouched,t.Xa(l,73).ngClassTouched,t.Xa(l,73).ngClassPristine,t.Xa(l,73).ngClassDirty,t.Xa(l,73).ngClassValid,t.Xa(l,73).ngClassInvalid,t.Xa(l,73).ngClassPending),n(l,77,0,t.Xa(l,82).ngClassUntouched,t.Xa(l,82).ngClassTouched,t.Xa(l,82).ngClassPristine,t.Xa(l,82).ngClassDirty,t.Xa(l,82).ngClassValid,t.Xa(l,82).ngClassInvalid,t.Xa(l,82).ngClassPending),n(l,86,0,t.Xa(l,91).ngClassUntouched,t.Xa(l,91).ngClassTouched,t.Xa(l,91).ngClassPristine,t.Xa(l,91).ngClassDirty,t.Xa(l,91).ngClassValid,t.Xa(l,91).ngClassInvalid,t.Xa(l,91).ngClassPending),n(l,98,0,t.Xa(l,103).ngClassUntouched,t.Xa(l,103).ngClassTouched,t.Xa(l,103).ngClassPristine,t.Xa(l,103).ngClassDirty,t.Xa(l,103).ngClassValid,t.Xa(l,103).ngClassInvalid,t.Xa(l,103).ngClassPending),n(l,107,0,t.Xa(l,112).ngClassUntouched,t.Xa(l,112).ngClassTouched,t.Xa(l,112).ngClassPristine,t.Xa(l,112).ngClassDirty,t.Xa(l,112).ngClassValid,t.Xa(l,112).ngClassInvalid,t.Xa(l,112).ngClassPending),n(l,116,0,t.Xa(l,121).ngClassUntouched,t.Xa(l,121).ngClassTouched,t.Xa(l,121).ngClassPristine,t.Xa(l,121).ngClassDirty,t.Xa(l,121).ngClassValid,t.Xa(l,121).ngClassInvalid,t.Xa(l,121).ngClassPending)})}var _=Object.assign||function(n){for(var l,u=1,t=arguments.length;u<t;u++)for(var o in l=arguments[u])Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);return n},P=function(){function n(){}return n.prototype.init=function(n){var l=_({},{camera:{x:0,y:0,z:0},renderer:{bgcolor:15790320},fn:function(n){}},n),u=document.getElementById("three"),t=u.clientWidth,o=u.clientHeight;u.innerHTML="";var a=new THREE.Scene,e=new THREE.PerspectiveCamera(45,t/o,.1,1e3);e.position.x=l.camera.x,e.position.y=l.camera.y,e.position.z=l.camera.z,e.lookAt(a.position);var i=new THREE.WebGLRenderer;i.setClearColor(l.renderer.bgcolor),i.setSize(t,o),u.appendChild(i.domElement),l.fn&&l.fn(a),i.render(a,e)},n.prototype.add=function(n,l){var u=_({},{position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},fn:function(){}},l),t=u.fn();t.position.x=u.position.x,t.position.y=u.position.y,t.position.z=u.position.z,t.rotation.x=u.rotation.x,t.rotation.y=u.rotation.y,t.rotation.z=u.rotation.z,n.add(t)},n}(),O=function(){function n(n,l){this.router=n,this.three=l}return n.prototype.ngAfterViewInit=function(){this.go()},n.prototype.go=function(){var n=this;this.three.init({camera:{x:this.form.camera.x,y:this.form.camera.y,z:this.form.camera.z},fn:function(l){n.three.add(l,{position:{x:n.form.position.x,y:n.form.position.y,z:n.form.position.z},rotation:{x:n.form.rotation.x,y:n.form.rotation.y,z:n.form.rotation.z},fn:function(){var l=new THREE.CubeGeometry(n.form.size.w,n.form.size.h,n.form.size.z),u=new THREE.MeshBasicMaterial({color:65280});return new THREE.Mesh(l,u)}})}})},n.prototype.component=function(){this.router.go({popup:"code"}),localStorage.code="views/three/scene/scene.ts"},n}(),y=t.La({encapsulation:2,styles:[],data:{}});function x(n){return t.hb(0,[t.db(402653184,1,{form:0}),(n()(),t.Na(1,0,null,null,0,"div",[["id","three"]],null,null,null,null,null)),(n()(),t.Na(2,0,null,null,1,"form-component",[],null,[[null,"change"]],function(n,l,u){var t=!0;return"change"===l&&(t=!1!==n.component.go()&&t),t},b,X)),t.Ma(3,49152,[[1,4],["fx",4]],0,v,[],null,{change:"change"})],null,null)}var N=t.Ja("ng-component",O,function(n){return t.hb(0,[(n()(),t.Na(0,0,null,null,1,"ng-component",[],null,null,null,x,y)),t.Ma(1,4243456,null,0,O,[g.a,P],null,null)],null,null)},{},{},[]),z=u("quoV");u.d(l,"ThreeModuleNgFactory",function(){return w});var w=t.Ka(o,[],function(n){return t.Ua([t.Va(512,t.j,t.Z,[[8,[r,C,N]],[3,t.j],t.v]),t.Va(4608,e.q,e.p,[t.s,[2,e.B]]),t.Va(4608,f.E,f.E,[]),t.Va(4608,P,P,[]),t.Va(1073742336,e.b,e.b,[]),t.Va(1073742336,f.C,f.C,[]),t.Va(1073742336,f.l,f.l,[]),t.Va(1073742336,a.u,a.u,[[2,a.A],[2,a.q]]),t.Va(1073742336,z.a,z.a,[]),t.Va(1073742336,o,o,[]),t.Va(1024,a.m,function(){return[[{path:"",component:i,children:[{path:"",component:d},{path:"scene",component:O}]}]]},[])])})}}]);