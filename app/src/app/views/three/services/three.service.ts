import { Injectable } from '@angular/core';
declare const THREE:any;
/* ====================================== 全局方法  ====================================== */
@Injectable()
export class ThreeService {
	// 初始化
	init(options){
		var option = {
			camera:{
				x:0,
				y:0,
				z:0
			},
			renderer:{
				bgcolor:0xf0f0f0
			},
			fn(scene){}
		}
		
		var opt = {...option,...options}
		
		var $box = document.getElementById('three');
  		var w = $box.clientWidth;
  		var h = $box.clientHeight;
  		// 清空 box
  		$box.innerHTML = '';
  		// 场景
		var scene = new THREE.Scene();
		// 照相机
		var camera = new THREE.PerspectiveCamera(45, w/h,0.1,1000);
		camera.position.x = opt.camera.x;
		camera.position.y = opt.camera.y;
		camera.position.z = opt.camera.z;
		camera.lookAt(scene.position);
		// 渲染器
		var renderer = new THREE.WebGLRenderer();			// 计算机显示渲染器渲染
		renderer.setClearColor(opt.renderer.bgcolor);		// 设置背景色
		renderer.setSize(w,h); 								// 将scene渲染成多大尺寸
		// 把渲染器添加进 DOM
		$box.appendChild(renderer.domElement);
		// 添加实体图像到场景
		opt.fn && opt.fn(scene)
		// 用相机来渲染场景
		renderer.render(scene,camera);
	}
	// 添加实体图像到场景
	add(scene,options){
		var option = {
			position:{
				x:0,
				y:0,
				z:0
			},
			rotation:{
				x:0,
				y:0,
				z:0
			},
			fn:()=>{ }
		}
		var opt = {...option,...options}
		
		var image = opt.fn();
		
		image.position.x = opt.position.x;
		image.position.y = opt.position.y;
		image.position.z = opt.position.z;
		
		image.rotation.x = opt.rotation.x;
		image.rotation.y = opt.rotation.y;
		image.rotation.z = opt.rotation.z;
		
		scene.add(image);	// 添加图像到场景
	}
}
