// ===================================================== 处理数据服务
import { Injectable } from '@angular/core';

@Injectable()
export class ColorService {
	data:object[] = [
		{
			block:'Red',
			items:[
				{ name:'red', color:'red' },
				{ name:'red50', color:'#FFEBEE' },
				{ name:'red100', color:'#FFCDD2' },
				{ name:'red200', color:'#EF9A9A' },
				{ name:'red300', color:'#E57373' },
				{ name:'red400', color:'#EF5350' },
				{ name:'red500', color:'#F44336' },
				{ name:'red600', color:'#E53935' },
				{ name:'red700', color:'#D32F2F' },
				{ name:'red800', color:'#C62828' },
				{ name:'red900', color:'#B71C1C' },
				{ name:'redA100', color:'#FF8A80' },
				{ name:'redA200', color:'#FF5252' },
				{ name:'redA400', color:'#FF1744' },
				{ name:'redA700', color:'#D50000' }
			]
		},
		{
			block:'Pink',
			items:[
				{ name:'pink', color:'pink' },
				{ name:'pink50', color:'#FCE4EC' },
				{ name:'pink100', color:'#F8BBD0' },
				{ name:'pink200', color:'#F48FB1' },
				{ name:'pink300', color:'#F06292' },
				{ name:'pink400', color:'#EC407A' },
				{ name:'pink500', color:'#E91E63' },
				{ name:'pink600', color:'#D81B60' },
				{ name:'pink700', color:'#C2185B' },
				{ name:'pink800', color:'#AD1457' },
				{ name:'pink900', color:'#880E4F' },
				{ name:'pinkA100', color:'#FF80AB' },
				{ name:'pinkA200', color:'#FF4081' },
				{ name:'pinkA400', color:'#F50057' },
				{ name:'pinkA700', color:'#C51162' }
			]
		},
		{
			block:'Purple',
			items:[
				{ name:'purple', color:'purple' },
				{ name:'purple50', color:'#F3E5F5' },
				{ name:'purple100', color:'#E1BEE7' },
				{ name:'purple200', color:'#CE93D8' },
				{ name:'purple300', color:'#BA68C8' },
				{ name:'purple400', color:'#AB47BC' },
				{ name:'purple500', color:'#9C27B0' },
				{ name:'purple600', color:'#8E24AA' },
				{ name:'purple700', color:'#7B1FA2' },
				{ name:'purple800', color:'#6A1B9A' },
				{ name:'purple900', color:'#4A148C' },
				{ name:'purpleA100', color:'#EA80FC' },
				{ name:'purpleA200', color:'#E040FB' },
				{ name:'purpleA400', color:'#D500F9' },
				{ name:'purpleA700', color:'#AA00FF' }
			]
		},
		{
			block:'Deep Purple',
			items:[
				{ name:'deepPurple', color:'deepPurple' },
				{ name:'deepPurple50', color:'#EDE7F6' },
				{ name:'deepPurple100', color:'#D1C4E9' },
				{ name:'deepPurple200', color:'#B39DDB' },
				{ name:'deepPurple300', color:'#9575CD' },
				{ name:'deepPurple400', color:'#7E57C2' },
				{ name:'deepPurple500', color:'#673AB7' },
				{ name:'deepPurple600', color:'#5E35B1' },
				{ name:'deepPurple700', color:'#512DA8' },
				{ name:'deepPurple800', color:'#4527A0' },
				{ name:'deepPurple900', color:'#311B92' },
				{ name:'deepPurpleA100', color:'#B388FF' },
				{ name:'deepPurpleA200', color:'#7C4DFF' },
				{ name:'deepPurpleA400', color:'#651FFF' },
				{ name:'deepPurpleA700', color:'#6200EA' }
			]
		},
		{
			block:'Indigo',
			items:[
				{ name:'indigo', color:'indigo' },
				{ name:'indigo50', color:'#E8EAF6' },
				{ name:'indigo100', color:'#C5CAE9' },
				{ name:'indigo200', color:'#9FA8DA' },
				{ name:'indigo300', color:'#7986CB' },
				{ name:'indigo400', color:'#5C6BC0' },
				{ name:'indigo500', color:'#3F51B5' },
				{ name:'indigo600', color:'#3949AB' },
				{ name:'indigo700', color:'#303F9F' },
				{ name:'indigo800', color:'#283593' },
				{ name:'indigo900', color:'#1A237E' },
				{ name:'indigoA100', color:'#8C9EFF' },
				{ name:'indigoA200', color:'#536DFE' },
				{ name:'indigoA400', color:'#3D5AFE' },
				{ name:'indigoA700', color:'#304FFE' }
			]
		},
		{
			block:'Blue',
			items:[
				{ name:'blue', color:'blue' },
				{ name:'blue50', color:'#E3F2FD' },
				{ name:'blue100', color:'#BBDEFB' },
				{ name:'blue200', color:'#90CAF9' },
				{ name:'blue300', color:'#64B5F6' },
				{ name:'blue400', color:'#42A5F5' },
				{ name:'blue500', color:'#2196F3' },
				{ name:'blue600', color:'#1E88E5' },
				{ name:'blue700', color:'#1976D2' },
				{ name:'blue800', color:'#1565C0' },
				{ name:'blue900', color:'#0D47A1' },
				{ name:'blueA100', color:'#82B1FF' },
				{ name:'blueA200', color:'#448AFF' },
				{ name:'blueA400', color:'#2979FF' },
				{ name:'blueA700', color:'#2962FF' }
			]
		},
		{
			block:'Light Blue',
			items:[
				{ name:'lightBlue', color:'lightBlue' },
				{ name:'lightBlue50', color:'#E1F5FE' },
				{ name:'lightBlue100', color:'#B3E5FC' },
				{ name:'lightBlue200', color:'#81D4FA' },
				{ name:'lightBlue300', color:'#4FC3F7' },
				{ name:'lightBlue400', color:'#29B6F6' },
				{ name:'lightBlue500', color:'#03A9F4' },
				{ name:'lightBlue600', color:'#039BE5' },
				{ name:'lightBlue700', color:'#0288D1' },
				{ name:'lightBlue800', color:'#0277BD' },
				{ name:'lightBlue900', color:'#01579B' },
				{ name:'lightBlueA100', color:'#80D8FF' },
				{ name:'lightBlueA200', color:'#40C4FF' },
				{ name:'lightBlueA400', color:'#00B0FF' },
				{ name:'lightBlueA700', color:'#0091EA' }
			]
		},
		{
			block:'Cyan',
			items:[
				{ name:'cyan', color:'cyan' },
				{ name:'cyan50', color:'#E0F7FA' },
				{ name:'cyan100', color:'#B2EBF2' },
				{ name:'cyan200', color:'#80DEEA' },
				{ name:'cyan300', color:'#4DD0E1' },
				{ name:'cyan400', color:'#26C6DA' },
				{ name:'cyan500', color:'#00BCD4' },
				{ name:'cyan600', color:'#00ACC1' },
				{ name:'cyan700', color:'#0097A7' },
				{ name:'cyan800', color:'#00838F' },
				{ name:'cyan900', color:'#006064' },
				{ name:'cyanA100', color:'#84FFFF' },
				{ name:'cyanA200', color:'#18FFFF' },
				{ name:'cyanA400', color:'#00E5FF' },
				{ name:'cyanA700', color:'#00B8D4' }
			]
		},
		{
			block:'Teal',
			items:[
				{ name:'teal', color:'teal' },
				{ name:'teal50', color:'#E0F2F1' },
				{ name:'teal100', color:'#B2DFDB' },
				{ name:'teal200', color:'#80CBC4' },
				{ name:'teal300', color:'#4DB6AC' },
				{ name:'teal400', color:'#26A69A' },
				{ name:'teal500', color:'#009688' },
				{ name:'teal600', color:'#00897B' },
				{ name:'teal700', color:'#00796B' },
				{ name:'teal800', color:'#00695C' },
				{ name:'teal900', color:'#004D40' },
				{ name:'tealA100', color:'#A7FFEB' },
				{ name:'tealA200', color:'#64FFDA' },
				{ name:'tealA400', color:'#1DE9B6' },
				{ name:'tealA700', color:'#00BFA5' }
			]
		},
		{
			block:'Green',
			items:[
				{ name:'green', color:'green' },
				{ name:'green50', color:'#E8F5E9' },
				{ name:'green100', color:'#C8E6C9' },
				{ name:'green200', color:'#A5D6A7' },
				{ name:'green300', color:'#81C784' },
				{ name:'green400', color:'#66BB6A' },
				{ name:'green500', color:'#4CAF50' },
				{ name:'green600', color:'#43A047' },
				{ name:'green700', color:'#388E3C' },
				{ name:'green800', color:'#2E7D32' },
				{ name:'green900', color:'#1B5E20' },
				{ name:'greenA100', color:'#B9F6CA' },
				{ name:'greenA200', color:'#69F0AE' },
				{ name:'greenA400', color:'#00E676' },
				{ name:'greenA700', color:'#00C853' }
			]
		},
		{
			block:'Light Green',
			items:[
				{ name:'lightGreen', color:'lightGreen' },
				{ name:'lightGreen50', color:'#F1F8E9' },
				{ name:'lightGreen100', color:'#DCEDC8' },
				{ name:'lightGreen200', color:'#C5E1A5' },
				{ name:'lightGreen300', color:'#AED581' },
				{ name:'lightGreen400', color:'#9CCC65' },
				{ name:'lightGreen500', color:'#8BC34A' },
				{ name:'lightGreen600', color:'#7CB342' },
				{ name:'lightGreen700', color:'#689F38' },
				{ name:'lightGreen800', color:'#558B2F' },
				{ name:'lightGreen900', color:'#33691E' },
				{ name:'lightGreenA100', color:'#CCFF90' },
				{ name:'lightGreenA200', color:'#B2FF59' },
				{ name:'lightGreenA400', color:'#76FF03' },
				{ name:'lightGreenA700', color:'#64DD17' }
			]
		},
		{
			block:'Lime',
			items:[
				{ name:'lime', color:'lime' },
				{ name:'lime50', color:'#F9FBE7' },
				{ name:'lime100', color:'#F0F4C3' },
				{ name:'lime200', color:'#E6EE9C' },
				{ name:'lime300', color:'#DCE775' },
				{ name:'lime400', color:'#D4E157' },
				{ name:'lime500', color:'#CDDC39' },
				{ name:'lime600', color:'#C0CA33' },
				{ name:'lime700', color:'#AFB42B' },
				{ name:'lime800', color:'#9E9D24' },
				{ name:'lime900', color:'#827717' },
				{ name:'limeA100', color:'#F4FF81' },
				{ name:'limeA200', color:'#EEFF41' },
				{ name:'limeA400', color:'#C6FF00' },
				{ name:'limeA700', color:'#AEEA00' }
			]
		},
		{
			block:'Yellow',
			items:[
				{ name:'yellow', color:'yellow' },
				{ name:'yellow50', color:'#FFFDE7' },
				{ name:'yellow100', color:'#FFF9C4' },
				{ name:'yellow200', color:'#FFF59D' },
				{ name:'yellow300', color:'#FFF176' },
				{ name:'yellow400', color:'#FFEE58' },
				{ name:'yellow500', color:'#FFEB3B' },
				{ name:'yellow600', color:'#FDD835' },
				{ name:'yellow700', color:'#FBC02D' },
				{ name:'yellow800', color:'#F9A825' },
				{ name:'yellow900', color:'#F57F17' },
				{ name:'yellowA100', color:'#FFFF8D' },
				{ name:'yellowA200', color:'#FFFF00' },
				{ name:'yellowA400', color:'#FFEA00' },
				{ name:'yellowA700', color:'#FFD600' }
			]
		},
		{
			block:'Amber',
			items:[
				{ name:'amber', color:'amber' },
				{ name:'amber50', color:'#FFF8E1' },
				{ name:'amber100', color:'#FFECB3' },
				{ name:'amber200', color:'#FFE082' },
				{ name:'amber300', color:'#FFD54F' },
				{ name:'amber400', color:'#FFCA28' },
				{ name:'amber500', color:'#FFC107' },
				{ name:'amber600', color:'#FFB300' },
				{ name:'amber700', color:'#FFA000' },
				{ name:'amber800', color:'#FF8F00' },
				{ name:'amber900', color:'#FF6F00' },
				{ name:'amberA100', color:'#FFE57F' },
				{ name:'amberA200', color:'#FFD740' },
				{ name:'amberA400', color:'#FFC400' },
				{ name:'amberA700', color:'#FFAB00' }
			]
		},
		{
			block:'Orange',
			items:[
				{ name:'orange', color:'orange' },
				{ name:'orange50', color:'#FFF3E0' },
				{ name:'orange100', color:'#FFE0B2' },
				{ name:'orange200', color:'#FFCC80' },
				{ name:'orange300', color:'#FFB74D' },
				{ name:'orange400', color:'#FFA726' },
				{ name:'orange500', color:'#FF9800' },
				{ name:'orange600', color:'#FB8C00' },
				{ name:'orange700', color:'#F57C00' },
				{ name:'orange800', color:'#EF6C00' },
				{ name:'orange900', color:'#E65100' },
				{ name:'orangeA100', color:'#FFD180' },
				{ name:'orangeA200', color:'#FFAB40' },
				{ name:'orangeA400', color:'#FF9100' },
				{ name:'orangeA700', color:'#FF6D00' }
			]
		},
		{
			block:'Deep Orange',
			items:[
				{ name:'deepOrange', color:'deepOrange' },
				{ name:'deepOrange50', color:'#FBE9E7' },
				{ name:'deepOrange100', color:'#FFCCBC' },
				{ name:'deepOrange200', color:'#FFAB91' },
				{ name:'deepOrange300', color:'#FF8A65' },
				{ name:'deepOrange400', color:'#FF7043' },
				{ name:'deepOrange500', color:'#FF5722' },
				{ name:'deepOrange600', color:'#FF5722' },
				{ name:'deepOrange700', color:'#E64A19' },
				{ name:'deepOrange800', color:'#D84315' },
				{ name:'deepOrange900', color:'#BF360C' },
				{ name:'deepOrangeA100', color:'#FF9E80' },
				{ name:'deepOrangeA200', color:'#FF6E40' },
				{ name:'deepOrangeA400', color:'#FF3D00' },
				{ name:'deepOrangeA700', color:'#DD2C00' }
			]
		},
		{
			block:'Brown',
			items:[
				{ name:'brown', color:'brown' },
				{ name:'brown50', color:'#EFEBE9' },
				{ name:'brown100', color:'#D7CCC8' },
				{ name:'brown200', color:'#BCAAA4' },
				{ name:'brown300', color:'#A1887F' },
				{ name:'brown400', color:'#8D6E63' },
				{ name:'brown500', color:'#795548' },
				{ name:'brown600', color:'#6D4C41' },
				{ name:'brown700', color:'#5D4037' },
				{ name:'brown800', color:'#4E342E' },
				{ name:'brown900', color:'#3E2723' }
			]
		},
		{
			block:'Blue Grey',
			items:[
				{ name:'blueGrey', color:'blueGrey' },
				{ name:'blueGrey50', color:'#ECEFF1' },
				{ name:'blueGrey100', color:'#CFD8DC' },
				{ name:'blueGrey200', color:'#B0BEC5' },
				{ name:'blueGrey300', color:'#90A4AE' },
				{ name:'blueGrey400', color:'#78909C' },
				{ name:'blueGrey500', color:'#607D8B' },
				{ name:'blueGrey600', color:'#546E7A' },
				{ name:'blueGrey700', color:'#455A64' },
				{ name:'blueGrey800', color:'#37474F' },
				{ name:'blueGrey900', color:'#263238' }
			]
		},
		{
			block:'Grey',
			items:[
				{ name:'grey', color:'grey' },
				{ name:'grey50', color:'#FAFAFA' },
				{ name:'grey100', color:'#F5F5F5' },
				{ name:'grey200', color:'#EEEEEE' },
				{ name:'grey300', color:'#E0E0E0' },
				{ name:'grey400', color:'#BDBDBD' },
				{ name:'grey500', color:'#9E9E9E' },
				{ name:'grey600', color:'#757575' },
				{ name:'grey700', color:'#616161' },
				{ name:'grey800', color:'#424242' },
				{ name:'grey900', color:'#212121' }
			]
		}
	]
}