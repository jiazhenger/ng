import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule }   from '@angular/common';
// ======================================================================== 公共模块
import { ShareModule } from 'src/app/share.module';
// ======================================================================== 组件
import { Index } from './index/index';
import { Default } from './default/component';
// ======================================================================== 组件
import { Grid } from './grid/grid';
// button
import { BaseButton } from './button/base-button/button';
// icon
import { FontAwesome } from './font-icon/font-awesome/icon';
// form
import { FormGroup } from './form/form-group/form';
import { Checkbox } from './form/checkbox/checkbox';
// table
import { BaseTable } from './table/base-table/table';
import { ScrollTable } from './table/scroll-table/table';
// pop
import { PopTable } from './pop/pop-table/table';
import { PopPosition } from './pop/pop-position/position';
import { PopFx } from './pop/pop-fx/fx';
// animation
import { LoadingLine } from './animation/loading/loading-line/loading';
import { LoadingCircle } from './animation/loading/loading-circle/loading';
// color
import { Color } from './color/color';
// navigation
import { AceNavgation } from './navigation/ace/nav';
// ======================================================================== NgModule
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(
			[
				{ 
					path: '', 
					component: Index,
					children:[
						{ path: '', component:Default },
						
						{ path: 'grid', component:Grid },
						
						{ path: 'button', component:BaseButton },
						
						{ path: 'font-awesome', component:FontAwesome },
						
						{ path: 'form-group', component:FormGroup },
						{ path: 'checkbox', component:Checkbox },
						
						{ path: 'base-table', component:BaseTable },
						{ path: 'scroll-table', component:ScrollTable },
						
						{ path: 'pop-table', component:PopTable },
						{ path: 'pop-position', component:PopPosition },
						{ path: 'pop-fx', component:PopFx },
						
						{ path: 'loading-line', component:LoadingLine },
						{ path: 'loading-circle', component:LoadingCircle },
						
						{ path: 'color', component:Color },
						
						{ path: 'ace', component:AceNavgation },
					]
				}
			]
		),
		ShareModule
	],
	declarations: [
		Index, Default,
		Grid,
		BaseButton,
		FontAwesome,
		FormGroup,Checkbox,
		BaseTable,ScrollTable,
		PopTable,PopPosition,PopFx,
		LoadingLine,LoadingCircle,
		Color,
		AceNavgation
	],
	exports: [ RouterModule ]
})
export class PcModule { }
