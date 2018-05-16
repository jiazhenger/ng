// ===================================================== 
import { Component, ViewChild } from '@angular/core';
// ===================================================== 公共服务
import { RouterService } from 'src/app/services/router.service';
import { ThreeService } from '../services/three.service';
import { FormComponent } from '../components/form.component';
declare const THREE:any;
// ===================================================== 
@Component({
    template: `
    	<div id="three"></div>
    	<form-component (change)="go()" #fx></form-component>
    `
})

export class Scene{
	@ViewChild('fx') form:FormComponent
	
  	constructor(private router: RouterService, private three:ThreeService){
		
	}
  	
  	ngAfterViewInit(){
  		this.go()
  	}
  	
  	go(){
  		this.three.init({
  			camera:{
  				x:this.form.camera.x,
	  			y:this.form.camera.y,
	  			z:this.form.camera.z
  			},
  			fn:(scene)=>{
				this.three.add(scene,{
					position:{
						x:this.form.position.x,
			  			y:this.form.position.y,
			  			z:this.form.position.z
					},
					rotation:{
						x:this.form.rotation.x,
			  			y:this.form.rotation.y,
			  			z:this.form.rotation.z
					},
					fn:()=>{
						//return new THREE.AxesHelper(20,0);
						var geometry = new THREE.CubeGeometry(this.form.size.w,this.form.size.h,this.form.size.z);
				        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
				        var cube = new THREE.Mesh(geometry, material);
				        return cube
					}
				})
  			}
  		})
  	}
  	
  	component(){
		this.router.go({ popup: 'code' });
		localStorage.code = 'views/three/scene/scene.ts';
	}
	
}
