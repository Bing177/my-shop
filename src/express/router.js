const express = require('express')
const router = express.Router()


// 数码电子
const digitalElectronics = [
	{
		id:getRand(),
		title:'apple',
		logo: 'https://pic2.imgdb.cn/item/64453d310d2dde5777220c00.jpg',
		child:[
			{
				id:getRand(),
				title:'iPhone',
				child:[
					{
						id:getRand(),
						name:'iPhone SE',
						abstract:'4.7英寸高清视网膜显示屏,5G网络，畅享高速下载和高品质流媒体播放',
						url:'https://pic2.imgdb.cn/item/64453dbf0d2dde577724209b.jpg',
						price:3499,
						config:{
							size:4.7,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'超强A15仿生 iPhone 13同款芯片 更智能的摄像头 会自动优化照片,无论拍人还是拍景,画面处处都出彩 主屏幕按钮内置触控ID,可安全解锁手机,登录app和使用Apple Pay'
						}
					},
					{
						id:getRand(),
						name:'iPhone 12',
						abstract:'6.1英寸超视网膜XDR显示屏,5G网络实现超快下载,在线高清视频也超流畅',
						url:'https://pic2.imgdb.cn/item/64453de70d2dde577724b271.png',
						price:4699,
						config:{
							size:6.1,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'先进的双摄系统,支持夜间模式和杜比视界HDR视频拍摄 超强的A14仿生芯片 拥有硬度超越玻璃面板的超瓷晶面板,还防溅抗水'
						}
					},
					{
						id:getRand(),
						name:'iPhone 13',
						abstract:'6.1英寸超视网膜XDR显示屏5G网络实现超快下载,在线高清视频也超流畅',
						url:'https://pic2.imgdb.cn/item/64453e290d2dde57772586dd.png',
						price:5399,
						config:{
							size:6.1,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'先进的双摄系统,支持夜间模式和杜比视界HDR视频拍摄 超强的A14仿生芯片 拥有硬度超越玻璃面板的超瓷晶面板,还防溅抗水'
						}
					},
					{
						id:getRand(),
						name:'iPhone 14',
						abstract:'6.1英寸超瓷晶面板,设计经久耐用 机身还有抗水防尘特性',
						url:'https://pic2.imgdb.cn/item/64453e420d2dde577725da13.png',
						price:5999,
						config:{
							size:6.1,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'从早用到晚的电池续航,视频播放最长可达20小时 车祸检测功能可检测到严重车祸,并主动拨打求救电话 全新Pro 准主摄,图像处理能力再提升,各种光线下拍照都更亮眼 超快的A15仿生芯片,和iPhone 13Pro同款'
						}
					},
					{
						id:getRand(),
						name:'iPhone 14Pro',
						abstract:'更明亮的6.1英寸超视网膜XDR显示屏 支持全天候显示，有消息随时看得见',
						url:'https://pic2.imgdb.cn/item/64453e5a0d2dde5777262123.png',
						price:6999,
						config:{
							size:6.1,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'车祸检测功能可检测到严重车祸,并主动拨打求救电话 4800万像素主摄,配备先进的四合一像素传感器,可将分辨率提升至最高4倍 A16仿生芯片速度超快,能效超高,带来从早用到晚的电池续航'
						}
					},
					{
						id:getRand(),
						name:'iPhone 14ProMax',
						abstract:'更明亮的6.7英寸超视网膜XDR显示屏 支持全天候显示,有消息随时看得见 灵动岛功能,iPhone的新玩法',
						url:'https://pic2.imgdb.cn/item/64453e5a0d2dde5777262123.png',
						price:7999,
						config:{
							size:6.7,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'车祸检测功能可检测到严重车祸,并主动拨打求救电话 4800万像素主摄,配备先进的四合一像素传感器,可将分辨率提升至最高4倍 A16仿生芯片速度超快,能效超高,带来从早用到晚的电池续航'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'iPad',
				child:[
					{
						id:getRand(),
						name:'iPad Mini',
						abstract:'8.3英寸 A15仿生芯片 5G蜂窝网络',
						url:'https://pic2.imgdb.cn/item/64453ea30d2dde577726f942.png',
						price:3999,
						config:{
							size:8.3,
							resolutionRatio:undefined,
							pixel:1200,
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'P3广色域 Liquid视网膜显示屏 抗反射涂层 4K视频拍摄 内置于顶部按钮的触控ID USB‑C接口 支持Apple Pencil和蓝牙键盘'
						}
					},
					{
						id:getRand(),
						name:'iPad Air',
						abstract:'10.9 英寸 M1芯片 1200万像素超广角 5G蜂窝网络',
						url:'https://pic2.imgdb.cn/item/64453eb90d2dde577727389a.png',
						price:4799,
						config:{
							size:10.9,
							resolutionRatio:undefined,
							pixel:'1200万像素超广角',
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'P3广色域 Liquid视网膜显示屏 抗反射涂层 4K视频拍摄 内置于顶部按钮的触控ID USB‑C接口 支持Apple Pencil和蓝牙键盘'
						}
					},
					{
						id:getRand(),
						name:'iPad Pro',
						abstract:'12.9 英寸或11 英寸 M2芯片 5G蜂窝网络',
						url:'https://pic2.imgdb.cn/item/64453ecb0d2dde5777276ad2.png',
						price:6799,
						config:{
							size:12.0,
							resolutionRatio:undefined,
							pixel:'1200万像素超广角',
							cpu:undefined,
							ram:undefined,
							gpu:undefined,
							os:'ios',
							network:'5G',
							other:'原深感摄像头系统 1200万像素广角摄像头,1000万像素超广角摄像头 面容ID 支持雷雳/USB4'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'Mac',
				child:[
					{
						id:getRand(),
						name:'Mac Air',
						abstract:'13.3英寸 Apple M1芯片 视网膜显示屏 电池续航最长达18小时',
						url:'https://pic2.imgdb.cn/item/64453f700d2dde577729118f.png',
						price:7999,
						config:{
							size:13.3,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:'8核中央处理器,7核图形处理器',
							ram:'2TB',
							gpu:undefined,
							os:'Mac',
							network:undefined,
							other:'720p FaceTime高清摄像头 三麦克风阵列 立体声扬声器 1.29千克重量 触控ID'
						}
					},
					{
						id:getRand(),
						name:'Mac Pro',
						abstract:'13.3 英寸 Apple M2芯片 视网膜显示屏 电池续航最长达20小时',
						url:'https://pic2.imgdb.cn/item/64453fc90d2dde577729e6c8.png',
						price:9999,
						config:{
							size:13.3,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:'8核中央处理器,10核图形处理器',
							ram:'2TB',
							gpu:undefined,
							os:'Mac',
							network:undefined,
							other:'720p FaceTime高清摄像头 录音棚级三麦克风阵列 支持空间音频的立体声扬声器 1.38千克重量 触控栏和触控ID'
						}
					}
				]
			}
		]
	},
	{
		id:getRand(),
		title:'Xiaomi',
		logo:'https://pic2.imgdb.cn/item/64453d530d2dde57772299af.png',
		child:[
			{
				id:getRand(),
				title:'Note',
				child:[
					{
						id:getRand(),
						name:'Redmi Note 12',
						abstract:'6.67英寸 8GB+256GB 5000mAh电池',
						url:'https://pic2.imgdb.cn/item/64453fe60d2dde57772a31aa.png',
						price:1199,
						config:{
							size:6.67,
							resolutionRatio:'2400*1080',
							pixel:'4800万超清双摄',
							cpu:'8核架构,最高主频2.0GHz',
							ram:'8G + 256G',
							gpu:undefined,
							os:'Android',
							network:'5G',
							other:'LPDDR4X内存 + UFS2.2闪存 双卡双待：5G+5G 支持： Wi-Fi 2.4GHz | Wi-Fi 5GHz 蓝牙：Bluetooth 5.1'
						}
					},
				]
			},
			{
				id:getRand(),
				title:'K',
				child:[
					{
						id:getRand(),
						name:'Redmi K 60',
						abstract:'6.67 英寸 12GB + 512GB 5500mAh',
						url:'https://pic2.imgdb.cn/item/64453ffa0d2dde57772a62dd.png',
						price:2499,
						config:{
							size:6.67,
							resolutionRatio:'3200*1440（2K）',
							pixel:'后置4800万像素三摄,前置2000万索尼IMX596高清相机',
							cpu:undefined,
							ram:'12GB + 512GB 最高可选',
							gpu:undefined,
							os:'Android',
							network:'5G',
							other:'5G双卡｜全网通7.0 支持2x2MIMO,WiFi Direct,Miracast 蓝牙Bluetooth 5.3 NFC功能'
						}
					},
				]
			},
			{
				id:getRand(),
				title:'Max',
				child:[
					{
						id:getRand(),
						name:'Xiaomi Max',
						abstract:'7.92英寸柔性OLED屏幕 分辨率2088 x 2250 40W有线闪充',
						url:'https://pic2.imgdb.cn/item/644540270d2dde57772acde4.jpg',
						price:19999,
						config:{
							size:7.92,
							resolutionRatio:'分辨率2088 x 2250',
							pixel:'1亿像素超旗舰三摄',
							cpu:'骁龙855Plus 旗舰平台',
							ram:'12GB + 512GB',
							gpu:undefined,
							os:'Android',
							network:'5G',
							other:'4050mAh/3950mAh 全网通6.0支持 WiFi 2x2 MIMO技术,支持MU-MIMO,WiFi Direct,WiFi Display,支持WPA3 Bluetooth 5.0无线技术,高通TrueWireless™Stereo Plus'
						}
					},
				]
			},
			{
				id:getRand(),
				title:'Pad',
				child:[
					{
						id:getRand(),
						name:'小米平板5',
						abstract:'11英寸 2.5K LCD护眼屏 8600mAh丨67W秒充',
						url:'https://pic2.imgdb.cn/item/644540500d2dde57772b2e64.png',
						price:3099,
						config:{
							size:11,
							resolutionRatio:'2.5K LCD 护眼屏',
							pixel:undefined,
							cpu:'高通骁龙™870',
							ram:undefined,
							gpu:undefined,
							os:'Android',
							network:'4G',
							other:'扬声器环绕音 大屏专属定制MIUI Dolby Vision / Dolby Atmos 超大散热面积22745mm2 纤薄轻盈设计'
						}
					},
					{
						id:getRand(),
						name:'小米平板5 Pro 5G',
						abstract:"11英寸 2.5K LCD 护眼屏 8600mAh丨67W 秒充",
						url:'https://pic2.imgdb.cn/item/644540500d2dde57772b2e64.png',
						price:3199,
						config:{
							size:11,
							resolutionRatio:'2.5K LCD 护眼屏',
							pixel:undefined,
							cpu:'高通骁龙™870',
							ram:undefined,
							gpu:undefined,
							os:'Android',
							network:'5G',
							other:'扬声器环绕音 大屏专属定制MIUI Dolby Vision / Dolby Atmos 超大散热面积22745mm2 纤薄轻盈设计'
						}
					},
				]
			},
			{
				id:getRand(),
				title:'Book',
				child:[
					{
						id:getRand(),
						name:'小米笔记本 Pro X 15',
						abstract:'第11代英特尔®酷睿™ i7-11370H处理器高性能移动版 时空灰',
						url:'https://pic2.imgdb.cn/item/6445409b0d2dde57772bddca.png',
						price:5999,
						config:{
							size:undefined,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:'第11代英特尔®酷睿™ i7-11370H处理器高性能移动版',
							ram:'32GB LPDDR4x 4266MHz双通道内存 1TB PCIe 高速存储',
							gpu:'NVIDIA® GeForce RTX™ 3050 Ti（4GB GDDR6）',
							os:'windows 11 专业版',
							network:undefined,
							other:'时空灰'
						}
					},
					{
						id:getRand(),
						name:'Redmi G Pro 游戏本 2022 锐龙版',
						abstract:'第十二代英特尔® 酷睿™ i7-12650H处理器高性能移动版 战舰灰',
						url:'https://pic2.imgdb.cn/item/644540be0d2dde57772c2f76.png',
						price:6499,
						config:{
							size:undefined,
							resolutionRatio:undefined,
							pixel:undefined,
							cpu:'第十二代英特尔® 酷睿™ i7-12650H处理器高性能移动版',
							ram:'32GB LPDDR4x 4266MHz双通道内存 512GB PCIe 4.0 SSD',
							gpu:'NVIDIA® GeForce RTX™ 3050 Ti 笔记本电脑GPU',
							os:'windows 11 专业版',
							network:undefined,
							other:'战舰灰'
						}
					},
				]
			}	
		]
	},
	{
		id:getRand(),
		title:'huawei',
		logo:'https://pic2.imgdb.cn/item/64453d7a0d2dde5777232dab.webp',
		child:[
			{
				id:getRand(),
				title:'Mate',
				child:[
					{
						id:getRand(),
						name:'HUAWEI Mate 50 Pro',
						abstract:'6.74英寸 FHD+ 2616 x 1212 像素 4700mAh',
						url:'https://pic2.imgdb.cn/item/644540ef0d2dde57772cc66a.webp',
						price:6199,
						config:{
							size:6.74,
							resolutionRatio:'分辨率FHD+ 2616 x 1212 像素',
							pixel:'后置摄像头5000万像素超光变摄像头,前置摄像头1300万像素超广角摄像头',
							cpu:'CPU型号第一代骁龙8+4G CPU核数八核',
							ram:'机身内存（ROM）256GB',
							gpu:undefined,
							os:'鸿蒙操作系统3.0',
							network:'5G',
							other:'双卡双待'
						}
					},
					{
						id:getRand(),
						name:'HUAWEI X 3',
						abstract:'外屏：6.4英寸,内屏：7.85英寸 800万像素摄像头（F2.4光圈) 4800mAh',
						url:'https://pic2.imgdb.cn/item/644541060d2dde57772d032d.webp',
						price:12999,
						config:{
							size:7.85,
							resolutionRatio:'分辨率外屏：2504×1080，内屏：2496×2224',
							pixel:'后置摄像头5000万像素超感知摄像头,前置摄像头内外屏前置单摄：800万像素摄像头（F2.4光圈)',
							cpu:'CPU型号第一代骁龙8+4G CPU核数八核',
							ram:'机身内存（ROM）256GB',
							gpu:undefined,
							os:'鸿蒙操作系统3.1',
							network:'5G',
							other:'双卡双待'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'P',
				child:[
					{
						id:getRand(),
						name:"HUAWEI P 50 Pro",
						abstract:'6.6英寸 FHD+2700x1228像素 4360mAh',
						url:'https://pic2.imgdb.cn/item/644541200d2dde57772d48be.webp',
						price:5988,
						config:{
							size:6.6,
							resolutionRatio:'FHD+2700x1228像素',
							pixel:'后置摄像头5000万像素原色摄像头前置摄像头1300万像素超广角摄像头',
							cpu:'CPU型号骁龙888 4G 8核',
							ram:'运行内存（RAM）8GB机身内存（ROM）256GB',
							gpu:undefined,
							os:'HarmonyOS 2',
							network:'5G',
							other:'双卡双待'
						}
					},
					{
						id:getRand(),
						name:'HUAWEI P 60 Pro',
						abstract:'6.67英寸 FHD+ 2700 x 1220 像素 4815mAh',
						url:'https://pic2.imgdb.cn/item/644541310d2dde57772d72a0.webp',
						price:6988,
						config:{
							size:6.67,
							resolutionRatio:'FHD+ 2700 x 1220 像素',
							pixel:'后置摄像头4800万像素超聚光摄像头前置摄像头1300万像素超广角摄像头',
							cpu:'CPU型号骁龙888 4G 8核',
							ram:'机身内存（ROM）256GB',
							gpu:undefined,
							os:'鸿蒙操作系统3.1',
							network:'5G',
							other:'双卡双待'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'Nova',
				child:[
					{
						id:getRand(),
						name:'HUAWEI Nova 11 UItra',
						abstract:'屏幕尺寸6.78 分辨率FHD+ 2652*1200 512GB 4500mAh',
						url:'https://pic2.imgdb.cn/item/6445415d0d2dde57772deebb.webp',
						price:4499,
						config:{
							size:6.78,
							resolutionRatio:'分辨率FHD+ 2652*1200',
							pixel:'前置摄像头1600万，F2.2光圈，固定焦距后置摄像头1300万，F1.8光圈，自动对焦；8M，F2.2光圈，固定焦距',
							cpu:'高通骁龙™ 778G 4G 八核',
							ram:'机身内存（ROM）512GB',
							gpu:undefined,
							os:'HarmonyOS 3',
							network:'5G',
							other:undefined
						}
					},
				]
			},
			{
				id:getRand(),
				title:'Matepad',
				child:[
					{
						id:getRand(),
						name:'Matepad Pro 11',
						abstract:'11英寸 分辨率2560x1600 8300mAh',
						url:'https://pic2.imgdb.cn/item/644541780d2dde57772e27f3.webp',
						price:3499,
						config:{
							size:11,
							resolutionRatio:'分辨率2560x1600',
							pixel:'前置摄像头1600万，F2.2光圈，固定焦距后置摄像头1300万，F1.8光圈，自动对焦；8M，F2.2光圈，固定焦距',
							cpu:'高通骁龙™ 870 八核',
							ram:'运行内存（RAM）8GB存储容量（ROM）128GB',
							gpu:undefined,
							os:'HarmonyOS 3',
							network:'5G',
							other:undefined
						}
					},
					{
						id:getRand(),
						name:'Matepad Pro 12.6',
						abstract:'12.6英寸 麒麟9000E 八核 2560 x 1600 像素',
						url:'https://pic2.imgdb.cn/item/6445418a0d2dde57772e4b97.webp',
						price:4699,
						config:{
							size:12.6,
							resolutionRatio:'2560 x 1600 像素',
							pixel:'前置摄像头800万像素（f/2.0光圈后置摄像头1300万像素摄像头（f/1.8光圈，支持自动对焦）+ 800万像素广角摄像头（f/2.4光圈，固定焦距）+ 3D深感摄像头',
							cpu:'麒麟9000E 八核',
							ram:'运行内存（RAM）8GB 存储容量（ROM）128GB',
							gpu:undefined,
							os:'HarmonyOS 3',
							other:'10050mAh'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'MateBook',
				child:[
					{
						id:getRand(),
						name:'Matebook X',
						abstract:'第11代智能英特尔® 酷睿™ i5-1130G7处理器 4核 八线程',
						url:'https://pic2.imgdb.cn/item/644541b90d2dde57772eba4f.webp',
						price:6999,
						config:{
							size:13,
							resolutionRatio:'3000x2000',
							pixel:undefined,
							cpu:'第11代智能英特尔® 酷睿™ i5-1130G7处理器 4核 八线程',
							ram:'运行内存16GB存储容量512GB',
							gpu:'显卡英特尔锐炬® Xe显卡',
							os:'Windows11 64位 家庭中文版',
							network:undefined,
							other:'42Wh (额定容量)'
						}
					},
					{
						id:getRand(),
						name:'Matebook X Pro',
						abstract:'屏幕尺寸14.2英寸 CPU型号第12代英特尔® 酷睿™ i7-1260P 处理器',
						url:'https://pic2.imgdb.cn/item/644541a30d2dde57772e7f74.webp',
						price:10199,
						config:{
							size:14.2,
							resolutionRatio:'分辨率3120 x 2080',
							pixel:undefined,
							cpu:'CPU型号第12代英特尔® 酷睿™ i7-1260P 处理器 12核16线程',
							ram:'运行内存16GB存储容量1TB',
							gpu:'显卡英特尔® 锐炬® Xe显卡',
							os:'Windows11 64位 家庭中文版',
							network:undefined,
							other:'电池容量60Wh (额定容量）'
						}
					}
				]
			},
		]
	},
	{
		id:getRand(),
		title:'Lenovo',
		logo:'https://pic2.imgdb.cn/item/6445ed0f0d2dde5777e22f61.png',
		child:[
			{
				id:getRand(),
				title:'拯救者',
				child:[
					{
						id:getRand(),
						name:'拯救者Y9000P 2023',
						abstract:'【定制款】联想 拯救者Y9000P 2023 16英寸电竞游戏笔记本电脑',
						url:'https://pic2.imgdb.cn/item/6445edca0d2dde5777e36975.png',
						price:10848,
						config:{
							size:16,
							resolutionRatio:'2560×1600',
							pixel:undefined,
							cpu:'第13代智能英特尔®酷睿™ i9 i9-13900HX 24核',
							ram:'32GB 2T(1T+1T)',
							gpu:'NVIDIA® GeForce RTX™ 4060 2370MHz',
							os:'Windows11家庭中文版',
							network:undefined,
							other:'HDMI USB 3.2 Gen 1 X 4 HD高清摄像头 80Wh 正版office家庭和学生版'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'小新',
				child:[
					{
						id:getRand(),
						name:'联想小新Pro16超能本2023锐龙版',
						abstract:'联想小新Pro16超能本2023锐龙版 16英寸轻薄笔记本电脑 鸽子灰',
						url:'https://pic2.imgdb.cn/item/6445efc30d2dde5777e69b44.png',
						price:6099,
						config:{
							size:16,
							resolutionRatio:'2560x1600',
							pixel:undefined,
							cpu:'第六代AMD锐龙八核十六线程处理器 R7 7735HS 3.2GHz 八核',
							ram:'32GB 1T',
							gpu:'集成显卡',
							os:'Windows11家庭中文版',
							network:undefined,
							other:'USB-A3.2Gen1×2 WiFi6 1080P全高清IR摄像头 含人脸识别 75Wh 正版office家庭和学生版'
						}
					}
				]
			}
		]
	},
	{
		id:getRand(),
		title:'ASUS',
		logo:'https://pic2.imgdb.cn/item/6445f1a10d2dde5777e9b613.webp',
		child:[
			{
				id:getRand(),
				title:'天选',
				child:[
					{
						id:getRand(),
						name:'华硕天选4',
						abstract:'13代英特尔酷睿i9 15.6英寸电竞游戏本 笔记本电脑',
						url:'https://pic2.imgdb.cn/item/6445f2e20d2dde5777eb6b11.jpg',
						price:9899,
						config:{
							size:15.6,
							resolutionRatio:'2.5K（2560 x 1440）',
							pixel:undefined,
							cpu:'13th Gen Intel® Core™ i9-13900H 2.6 GHz 24M高速缓存 14核20线程',
							ram:'2*8GB 1TB',
							gpu:'Intel® 锐炬® Xe 核显 + NVIDIA® GeForce™ RTX 4060 8GB GDDR6 140W 2300MHz',
							os:'Win11家庭中文版',
							network:'Wi-Fi 6(802.11ax) (Dual band) 2*2',
							other:'内建10/100/1000Mbps以太网络模块 HD摄像头 内建Azalia compliant 声卡芯片 支持Dolby ATMOS 2个高品质扬声器'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'魔霸',
				child:[
					{
						id:getRand(),
						name:'ROG魔霸7 Plus 超能版',
						abstract:'17.3英寸 16核新锐龙 电竞游戏本笔记本电脑',
						url:'https://pic2.imgdb.cn/item/6445f4d70d2dde5777ef9f50.jpg',
						price:21999,
						config:{
							size:17.3,
							resolutionRatio:'WQHD (2560 x 1440) 16:9',
							pixel:undefined,
							cpu:'AMD Ryzen™ 9 7945HX 2.5GHz，超频最高支持可达 5.4 GHz 64M高速三级缓存 16核32线程',
							ram:'8GB(插槽)*2 1TB PCIe 4.0 NVMe M.2',
							gpu:'NVIDIA® GeForce RTX™ 4090 16GB GDDR6',
							os:'windows 11 专业版',
							network:'WiFi6E',
							other:'内建2.5Gbps以太网络模块 Bluetooth® 5.2 内建Azalia compliant 声卡芯片 支持杜比环绕声 2个高品质扬声器 HD高清摄像头'
						}
					}
				]
			},
			{
				id:getRand(),
				title:'无畏',
				child:[
					{
						id:getRand(),
						name:'无畏Pro15',
						abstract:'12代酷睿标压i7 RTX3050 2.8K OLED 游戏轻薄笔记本电脑',
						url:'https://pic2.imgdb.cn/item/6445f6bb0d2dde5777f3b66b.png',
						price:6999,
						config:{
							size:16.6,
							resolutionRatio:'2.8K (2880 x 1620) 16:9',
							pixel:undefined,
							cpu:'英特尔® 酷睿™ i7-12700H 2.3GHz，睿频最高支持可达 4.7GHz 24M 高速缓存 14核20线程',
							ram:'16GB 512GB M.2 NVMe™ PCIe® 4.0 SSD',
							gpu:'Intel® Iris Xe Graphics+NVIDIA® GeForce® RTX™ 3050 4GB GDDR6',
							os:'Windows 11家庭中文版;office家庭学生版',
							network:'Wi-Fi 6E(802.11ax) (Dual band) 2*2',
							other:'星辰银 Bluetooth 5.2 1080P高清摄像头'
						}
					}
				]
			}
		]
	},
]
// 美容美妆
const beauty = [
	{
		id:getRand(),
		title:'自然堂',
		logo:'https://pic2.imgdb.cn/item/64453d8f0d2dde5777237bfd.png',
		child:[
			{
				id:getRand(),
				title:'护肤',
				child:[
					{
						id:getRand(),
						name:'凝时鲜颜肌活修护小紫瓶精华液 第五代',
						url:'https://pic2.imgdb.cn/item/6445fbde0d2dde57770132bb.png',
						price:370
					},
					{
						id:getRand(),
						name:'微精华喜雪高保湿霜',
						url:'https://pic2.imgdb.cn/item/6445fc480d2dde577701f7c8.png',
						price:260
					},
					{
						id:getRand(),
						name:'雪肌追光焕颜生肌精华液',
						url:'https://pic2.imgdb.cn/item/6445fc840d2dde5777025cbe.png',
						price:380
					},
					{
						id:getRand(),
						name:'金钻微雕抗皱紧致精华霜',
						url:'https://pic2.imgdb.cn/item/6445fcba0d2dde577702bdaa.png',
						price:580
					},
					{
						id:getRand(),
						name:'凝时鲜颜紧致眼膜',
						url:'https://pic2.imgdb.cn/item/6445fd230d2dde5777037cca.png',
						price:158
					},
					{
						id:getRand(),
						name:'美白修颜防晒乳SPF40PA+++',
						url:'https://pic2.imgdb.cn/item/6445fd740d2dde5777040e57.png',
						price:240
					},
					{
						id:getRand(),
						name:'微精华喜雪高保湿水',
						url:'https://pic2.imgdb.cn/item/6445fdc30d2dde57770497e8.png',
						price:220
					}
				]
			},
			{
				id:getRand(),
				title:'彩妆',
				child:[
					{
						id:getRand(),
						name:'舒缓润养卸妆膏',
						url:'https://pic2.imgdb.cn/item/6445fe3b0d2dde57770567e7.png',
						price:179
					},
					{
						id:getRand(),
						name:'感光无瑕持妆粉底液(雾面妆效)',
						url:'https://pic2.imgdb.cn/item/6445fe740d2dde577705bf40.png',
						price:150
					},
					{
						id:getRand(),
						name:'润泽炫色小金笔唇膏',
						url:'https://pic2.imgdb.cn/item/6445fea40d2dde5777060e94.png',
						price:119
					}
				]
			},
			{
				id:getRand(),
				title:'个护',
				child:[
					{
						id:getRand(),
						name:'头皮护理敏感头皮修护精华液',
						url:'https://pic2.imgdb.cn/item/6445ff0d0d2dde577706d778.png',
						price:198
					},
					{
						id:getRand(),
						name:'口腔护理植愈益生菌清新口喷',
						url:'https://pic2.imgdb.cn/item/6445ff410d2dde57770730a0.png',
						price:89
					},
					{
						id:getRand(),
						name:'凝润滋养护手霜',
						url:'https://pic2.imgdb.cn/item/6445ff890d2dde577707a40d.png',
						price:35
					},
					{
						id:getRand(),
						name:'自然堂柔滑去角质磨砂膏',
						url:'https://pic2.imgdb.cn/item/6445ffca0d2dde57770801dd.png',
						price:99
					}
				]
			},
			{
				id:getRand(),
				title:'面膜',
				child:[
					{
						id:getRand(),
						name:'烟酰胺细致提亮安瓶面膜',
						url:'https://pic2.imgdb.cn/item/644600320d2dde577708a6eb.png',
						price:138
					},
					{
						id:getRand(),
						name:'果酸细致焕肤面膜',
						url:'https://pic2.imgdb.cn/item/644600680d2dde577708fd2e.png',
						price:128
					}
				]
			}
		]
	}
]
// 乔丹
const jordon = [
	{
		id:getRand(),
		title:'乔丹',
		logo:'https://pic2.imgdb.cn/item/644601040d2dde577709ec35.png',
		child:[
			{
				id:getRand(),
				title:'跑步',
				child:[
					{
						id:getRand(),
						name:'飞影PB 3.0',
						url:'https://pic2.imgdb.cn/item/644601970d2dde57770aceca.jpg',
						price:''
					},
					{
						id:getRand(),
						name:'飞影3.0',
						url:'https://pic2.imgdb.cn/item/644601f70d2dde57770b61c7.jpg',
						price:""
					},
					{
						id:getRand(),
						name:'风行12',
						url:'https://pic2.imgdb.cn/item/6446024a0d2dde57770be001.jpg',
						price:''
					}
				]
			},
			{
				id:getRand(),
				title:'篮球',
				child:[
					{
						id:getRand(),
						name:'风刃',
						url:'https://pic2.imgdb.cn/item/644602bb0d2dde57770c7a3a.jpg',
						price:''
					},
					{
						id:getRand(),
						name:'战戟',
						url:'https://pic2.imgdb.cn/item/644602e50d2dde57770cb3b4.jpg',
						price:''
					}
				]
			}
		]
	}
]
// 李宁
const liNing = [
	{
		id:getRand(),
		title:'Li Ning',
		logo:'https://pic2.imgdb.cn/item/6446037a0d2dde57770d706c.png',
		child:[
			{
				id:getRand(),
				title:'篮球鞋',
				child:[
					{
						id:getRand(),
						name:'【2023新品】超轻V2-水蜜桃男子轻量高回弹篮球专业比赛鞋ABAT029-6',
						url:'https://pic2.imgdb.cn/item/644604210d2dde57770e422c.webp',
						price:799
					},
					{
						id:getRand(),
						name:'【2023新品】音速11-凌波男子轻量高回弹篮球专业比赛鞋ABAT021-2',
						url:'https://pic2.imgdb.cn/item/644604570d2dde57770e8c09.webp',
						price:799
					}
				]
			},
			{
				id:getRand(),
				title:'T恤',
				child:[
					{
						id:getRand(),
						name:'【2023新品】运动时尚系列男女同款宽松短袖文化衫AHST727-2',
						url:'https://pic2.imgdb.cn/item/6446051a0d2dde57770f8852.webp',
						price:119
					},
					{
						id:getRand(),
						name:'【2023新品】健身系列男子排湿速干短袖T恤ATST615-1',
						url:'https://pic2.imgdb.cn/item/644605710d2dde5777100122.webp',
						price:99
					},
					{
						id:getRand(),
						name:'【2023新品】李宁中国文化系列男子短袖文化衫AHST421-1',
						url:'https://pic2.imgdb.cn/item/644605b60d2dde577710769c.webp',
						price:199
					}
				]
			},
			{
				id:getRand(),
				title:'裤子',
				child:[
					{
						id:getRand(),
						name:'【2023新品】健身系列男子直筒速干凉爽运动长裤AYKT535-1',
						url:'https://pic2.imgdb.cn/item/644615920d2dde57772717ad.webp',
						price:139
					},
					{
						id:getRand(),
						name:'【2023新品】李宁反伍BADFIVE兵不厌诈男子冰感舒适宽松直筒卫裤AKLT273-2',
						url:'https://pic2.imgdb.cn/item/644615c40d2dde5777278f7f.webp',
						price:299
					},
					{
						id:getRand(),
						name:'【2023新品】运动时尚系列男子短卫裤AKST647-1',
						url:'https://pic2.imgdb.cn/item/644616090d2dde5777282f9a.webp',
						price:139
					}
				]
			},
			{
				id:getRand(),
				title:'帽子',
				child:[
					{
						id:getRand(),
						name:'【2023新品】跑步系列抗紫外线防晒反光跑步棒球帽AMYT083-1',
						url:'https://pic2.imgdb.cn/item/6446061a0d2dde577711284e.webp',
						price:149
					},
					{
						id:getRand(),
						name:'【2023新品】跑步系列抗紫外线防晒空顶帽AMXT009-1',
						url:'https://pic2.imgdb.cn/item/644606580d2dde57771187c7.webp',
						price:119
					}
				]
			}
		]
	}
]
// 安踏
const Anta = [
	{
		id:getRand(),
		title:'Anta',
		logo:'https://pic2.imgdb.cn/item/644607950d2dde577713c264.png',
		child:[
			{
				id:getRand(),
				title:'运动鞋',
				child:[
					{
						id:getRand(),
						name:'【安踏冠军健身训练系列】安踏国家队同款科技星火男子氮科技缓震跑步训练跑鞋',
						url:'https://pic2.imgdb.cn/item/644613900d2dde577723b603.jpg',
						price:799
					},
					{
						id:getRand(),
						name:'安踏疯起云涌系列进击4男子实战篮球鞋',
						url:'https://pic2.imgdb.cn/item/644613d50d2dde5777242268.jpg',
						price:469
					},
					{
						id:getRand(),
						name:'安踏都市畅跑系列舒适跑男子跑鞋',
						url:'https://pic2.imgdb.cn/item/644614230d2dde5777248f78.jpg',
						price:299
					},
					{
						id:getRand(),
						name:'安踏生活系列男子休闲鞋',
						url:'https://pic2.imgdb.cn/item/6446147c0d2dde5777253a0b.jpg',
						price:399
					}
				]
			},
			{
				id:getRand(),
				title:'裤子',
				child:[
					{
						id:getRand(),
						name:'安踏荣耀系列男子出行拒水科技男梭织运动长裤',
						url:'https://pic2.imgdb.cn/item/644614d30d2dde577725eecf.jpg',
						price:599
					}
				]
			}
		]
	}
]
// 母婴用品
const PCbaby = [
	{
		id:getRand(),
		title:'母婴用品',
		logo:undefined,
		child:[
			{
				id:getRand(),
				name:'5条装婴儿毛巾纱布方巾宝宝洗脸巾口水巾围嘴新生儿用品洗澡手帕',
				url:'https://pic2.imgdb.cn/item/644617530d2dde57772a8cf9.jpg',
				price:19.9
			},
			{
				id:getRand(),
				name:'新生婴儿包单春秋夏季薄款纯棉产房包巾包被初生宝宝襁褓裹布抱被',
				url:'https://pic2.imgdb.cn/item/644617920d2dde57772ad21c.jpg',
				price:18.9
			},
			{
				id:getRand(),
				name:'婴儿棉签新生儿耳鼻小棉签宝宝盒装棉签细轴棉棒200支',
				url:'https://pic2.imgdb.cn/item/644617ce0d2dde57772b10bd.jpg',
				price:7
			},
			{
				id:getRand(),
				name:'哄娃神器婴儿摇摇椅安抚椅新生儿宝宝摇篮躺椅哄睡带娃用品摇摇床',
				url:'https://pic2.imgdb.cn/item/644618050d2dde57772b4c14.jpg',
				price:189
			},
			{
				id:getRand(),
				name:'新生婴儿定型枕安抚枕防惊跳偏头扁头侧睡四季通用可水洗宝宝枕头',
				url:'https://pic2.imgdb.cn/item/6446183d0d2dde57772b800c.jpg',
				price:49
			},
			{
				id:getRand(),
				name:'婴儿一次性隔尿垫宝宝尿布垫巾新生儿用品护理垫床垫不可洗',
				price:'https://pic2.imgdb.cn/item/644618740d2dde57772bc1ea.jpg',
				price:58
			},
			{
				id:getRand(),
				name:'婴儿口水巾新生儿纯棉超软小方巾宝宝专用洗脸巾儿童用品纱布毛巾',
				url:'https://pic2.imgdb.cn/item/644618fd0d2dde57772c53c7.jpg',
				price:10.9
			}
		]
	}
]
// 床上用品
const beddings = [
	{
		id:getRand(),
		title:'床上用品',
		logo:undefined,
		child:[
			{
				id:getRand(),
				name:'A类大豆纤维被子秋冬被加厚夏凉被春秋被空调被宿舍四季通用被芯',
				url:'https://pic2.imgdb.cn/item/644649a80d2dde57776ed92d.jpg',
				price:88
			},
			{
				id:getRand(),
				name:'亲肤简约床单单件单人双人四季可用学生宿舍2.0m床上用品',
				url:'https://pic2.imgdb.cn/item/644649ee0d2dde57776f3eda.jpg',
				price:34
			},
			{
				id:getRand(),
				name:'可水洗床褥家用防滑固定保护垫四季通用软垫学生宿舍薄床褥床垫',
				url:'https://pic2.imgdb.cn/item/64464a2d0d2dde57776f9fb9.jpg',
				price:66
			},
			{
				id:getRand(),
				name:'泰国乳胶枕头一对家用天然橡胶记忆单人宿舍学生护颈椎枕芯睡眠',
				url:'https://pic2.imgdb.cn/item/64464a770d2dde57776ff9cd.jpg',
				price:51
			},
			{
				id:getRand(),
				name:'全棉决明子茶梗纤维草本枕芯配枕套单个装一对装枕头花型随机',
				url:'https://pic2.imgdb.cn/item/64464abf0d2dde57777052ab.jpg',
				price:85
			},
			{
				id:getRand(),
				name:'乳胶床垫家用榻榻米酣睡乳胶垫子学生宿舍床褥加厚褥子软垫双人',
				url:'https://pic2.imgdb.cn/item/64464b0b0d2dde577770aec4.jpg',
				price:94
			},
			{
				id:getRand(),
				name:'全棉抑菌床笠可水洗床垫保护套防水床罩防滑固定床褥床笠',
				url:'https://pic2.imgdb.cn/item/64464b450d2dde577770eead.jpg'
			}
		]
	}
]
// 户外
const outdoors = [
	{
		id:getRand(),
		title:'户外',
		logo:undefined,
		child:[
			{
				id:getRand(),
				name:'户外折叠椅便携靠背钓鱼凳子导演椅沙滩躺椅露营月亮椅',
				url:'https://pic2.imgdb.cn/item/64464c370d2dde5777721883.jpg',
				price:111
			},
			{
				id:getRand(),
				name:'新款夏季网眼透气渔夫帽男士户外登山帽子男大檐遮阳帽B',
				url:'https://pic2.imgdb.cn/item/64464ca80d2dde577772bfb8.jpg',
				price:39
			},
			{
				id:getRand(),
				name:'挪客野营套锅户外露营餐具锅具厨具套装便携式野炊炊具',
				url:'https://pic2.imgdb.cn/item/64464cf10d2dde5777734b4c.jpg',
				price:102
			},
			{
				id:getRand(),
				name:'夏季冰爽防晒袖套男女冰丝薄款手套防紫外线手臂套袖运动护臂袖子',
				url:'https://pic2.imgdb.cn/item/64464d340d2dde577773a501.jpg',
				price:12
			},
			{
				id:getRand(),
				name:'【熊猫系列】天幕大遮阳棚精致露营天幕帐便携防晒野炊野营遮阳棚',
				url:'https://pic2.imgdb.cn/item/64464d8c0d2dde5777742701.jpg',
				price:160
			},
			{
				id:getRand(),
				name:'户外双人自动充气垫防潮帐篷睡垫露营地垫充气床垫',
				url:'https://pic2.imgdb.cn/item/64464dde0d2dde577774b66b.jpg',
				price:159
			},
			{
				id:getRand(),
				name:'防晒遮阳钓鱼太阳帽子渔夫帽薄款大头围防晒遮阳中性丛林帽',
				url:'https://pic2.imgdb.cn/item/64464e360d2dde5777759152.jpg',
				price:68
			}
		]
	}
]
// 飞利浦
const PHILIPS = [
	{
		id:getRand(),
		title:'飞利浦',
		logo:'https://pic2.imgdb.cn/item/64464eb60d2dde57777698f3.png',
		child:[
			{
				id:getRand(),
				name:'【差旅便携】男士PQ190双刀头直插充电电动剃须刀刮胡刀',
				url:'https://pic2.imgdb.cn/item/64464eeb0d2dde5777771076.jpg',
				price:96
			},
			{
				id:getRand(),
				name:'电动剃须刀黑蜂巢三刀头剃须刀S5587/10',
				url:'https://pic2.imgdb.cn/item/64464f220d2dde5777778ddd.jpg',
				price:499
			},
			{
				id:getRand(),
				name:'新5系续航升级版S5444/03快充男士礼物干湿电动剃须刀',
				url:'https://pic2.imgdb.cn/item/64464f6c0d2dde5777781a45.jpg',
				price:309
			}
		]
	}
]
// TOREAD
const toread = [
	{
		id:getRand(),
		title:'探路者',
		logo:'https://pic2.imgdb.cn/item/64464ff60d2dde577778b228.png',
		child:[
			{
				id:getRand(),
				name:'春夏 男式透气弹性撞色织带凉鞋沙滩鞋',
				url:'https://pic2.imgdb.cn/item/6446502c0d2dde577778ea0f.jpg',
				price:39
			},
			{
				id:getRand(),
				name:' 2023春夏新品 柔软透气 男女童运动鞋',
				url:'https://pic2.imgdb.cn/item/6446505e0d2dde5777791af3.jpg',
				price:100
			},
			{
				id:getRand(),
				name:' 专柜同款 基础百搭 女款短袖T恤',
				url:'https://pic2.imgdb.cn/item/644650930d2dde57777950ed.jpg',
				price:58
			},
			{
				id:getRand(),
				name:'户外秋冬 舒适防风保暖抓绒内胆男式套绒三合一冲锋衣',
				url:'https://pic2.imgdb.cn/item/644650d60d2dde5777799a7e.jpg',
				price:406
			}
		]
	}
]
// CASIO
const casio = [
	{
		id:getRand(),
		title:'卡西欧',
		logo:'https://pic2.imgdb.cn/item/644651370d2dde57777a07e5.png',
		child:[
			{
				id:getRand(),
				name:'卡西欧手表女指针系列简约优雅商务防水石英女士手表',
				url:'https://pic2.imgdb.cn/item/644651690d2dde57777a3bb2.jpg',
				price:179
			},
			{
				id:getRand(),
				name:'【爆款推荐】卡西欧手表大众指针黑金大表盘休闲运动男表MCW-200H',
				url:'https://pic2.imgdb.cn/item/6446519b0d2dde57777a6a08.jpg',
				price:284
			},
			{
				id:getRand(),
				name:'卡西欧手表时尚小方块电子表简约休闲运动款F-91WM-9A',
				url:'https://pic2.imgdb.cn/item/644651d60d2dde57777aa7d8.jpg',
				price:94
			},
			{
				id:getRand(),
				name:'卡西欧手表指针系列儿童学生男女中性手表',
				url:'https://pic2.imgdb.cn/item/6446520f0d2dde57777ae2ef.jpg',
				price:139
			},
			{
				id:getRand(),
				name:'卡西欧手表男时尚防水夜光果冻色儿童学生款MRW-200HC',
				url:'https://pic2.imgdb.cn/item/644652400d2dde57777b104a.jpg',
				price:156
			}
		]
	}
]
// 餐厨电器
const kitchen = [
	{
		id:getRand(),
		title:'餐厨电器',
		logo:undefined,
		child:[
			{
				id:getRand(),
				name:'多功能料理锅家用烤肉火锅一体锅网红早餐锅电炒煎蒸煮热锅电火锅',
				url:'https://pic2.imgdb.cn/item/644652bf0d2dde57777b8cf3.jpg',
				price:529
			},
			{
				id:getRand(),
				name:'【智能焖香 一键快速饭】3升匠铜聚能釜电饭煲FB30M111',
				url:'https://pic2.imgdb.cn/item/644652e90d2dde57777bb783.jpg',
				price:159
			},
			{
				id:getRand(),
				name:'可伸缩厨房置物架微波炉烤箱架子家用多功能台面电器放饭锅收纳架',
				url:'https://pic2.imgdb.cn/item/6446531e0d2dde57777c02bc.jpg',
				price:53
			},
			{
				id:getRand(),
				name:'家用1.7L智能电炒锅电饭煲多功能电煮锅宿舍迷你电蒸锅火锅',
				url:'https://pic2.imgdb.cn/item/6446536c0d2dde57777c7564.jpg',
				price:99
			},
			{
				id:getRand(),
				name:'电炒锅家用4L多功能电热锅蒸煮一体电火锅煎锅焖锅可预约',
				url:'https://pic2.imgdb.cn/item/6446539c0d2dde57777cbf68.jpg',
				price:113
			}
		]
	}
]
// 珠宝首饰
const jewelry = [
	{
		id:getRand(),
		title:'珠宝首饰',
		logo:'https://pic2.imgdb.cn/item/644654230d2dde57777d77f3.png',
		child:[
			{
				id:getRand(),
				name:'杏福相拥优雅银杏足金黄金吊坠',
				url:'https://pic2.imgdb.cn/item/644654670d2dde57777dcef3.jpg',
				price:1019
			},
			{
				id:getRand(),
				name:'简约大气玉髓手镯',
				url:'https://pic2.imgdb.cn/item/644654950d2dde57777e0217.jpg',
				price:331
			},
			{
				id:getRand(),
				name:'【好礼推荐】福气满满元宝福袋足金黄金玉髓手链手串',
				url:'https://pic2.imgdb.cn/item/644654cc0d2dde57777e3cc3.jpg',
				price:699
			},
			{
				id:getRand(),
				name:'节节高升时尚设计感竹节足金黄金手链-EOF154',
				url:'https://pic2.imgdb.cn/item/644654fa0d2dde57777e79bc.jpg',
				price:1556
			},
			{
				id:getRand(),
				name:'【强烈种草】黄金雪花足金黄金吊坠项链EOF553',
				url:'https://pic2.imgdb.cn/item/644655400d2dde57777ecdfa.jpg',
				price:2355
			},
			{
				id:getRand(),
				name:' ing系列太阳圆环足金黄金项链/吊坠F219112',
				url:'https://pic2.imgdb.cn/item/644655920d2dde57777f353d.jpg',
				price:4412
			}
		]
	}
]
// 分类
const category = [
	{
		id:getRand(),
		kw:'数码电子',
		child:digitalElectronics
	},
	{
		id:getRand(),
		kw:'美容美妆',
		child:beauty
	},
	{
		id:getRand(),
		kw:'乔丹专场',
		child:jordon
	},
	{
		id:getRand(),
		kw:'李宁专场',
		child:liNing
	},
	{
		id:getRand(),
		kw:'安踏ANTA',
		child:Anta
	},
	{
		id:getRand(),
		kw:'母婴用品',
		child:PCbaby
	},
	{
		id:getRand(),
		kw:'床上用品',
		child:beddings
	},
	{
		id:getRand(),
		kw:'户外',
		child:outdoors
	},
	{
		id:getRand(),
		kw:'飞利浦PHILIPS',
		child:PHILIPS
	},
	{
		id:getRand(),
		kw:'探路者TOREAD',
		child:toread
	},
	{
		id:getRand(),
		kw:'卡西欧CASIO',
		child:casio
	},
	{
		id:getRand(),
		kw:'餐厨电器',
		child:kitchen
	},
	{
		id:getRand(),
		kw:'珠宝首饰',
		child:jewelry
	}
]


// 楼层信息
const floors = [
	{
		id:getRand(4),
		desc:'自然堂CHANDO美妆个护专场 2.5折起自然堂CHANDO美妆个护专场',
		img:'https://pic1.imgdb.cn/item/64421fbc0d2dde577716be3b.jpg',
		kw:'自然堂美妆'
	},
	{
		id:getRand(4),
		desc:'都市丽人内衣专场 5折封顶都市丽人内衣专场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716be5f.jpg',
		kw:'都市丽人内衣'
	},
	{
		id:getRand(4),
		desc:'乔丹专场 1.8折起乔丹专场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716be86.jpg',
		kw:'乔丹'
	},
	{
		id:getRand(4),
		desc:'BANANA BABY女装专场 3.7折封顶BANANA BABY女装专场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716bec8.jpg',
		kw:'BANANA女装'
	},
	{
		id:getRand(4),
		desc:'精致防晒女孩分会场 1.1折起精致防晒女孩分会场',
		img:'https://pic1.imgdb.cn/item/64421fbd0d2dde577716befc.jpg',
		kw:'防晒'
	},
	{
		id:getRand(4),
		desc:'Disney baby母婴鞋服专场 4.3折封顶Disney baby母婴鞋服专场',
		img:'https://pic1.imgdb.cn/item/644221e20d2dde57771bc214.jpg',
		kw:'Disney母婴鞋服'
	},
	{
		id:getRand(4),
		desc:'百雀羚PECHOIN美容护肤专场 2折起百雀羚PECHOIN美容护肤专场',
		img:'https://pic1.imgdb.cn/item/644221e20d2dde57771bc261.jpg',
		kw:'百雀羚美容护肤'
	},
	{
		id:getRand(4),
		desc:'DKNY男女装专场 2.5折封顶DKNY男女装专场',
		img:'https://pic1.imgdb.cn/item/644221e30d2dde57771bc2d5.jpg',
		kw:'DKNY男女装'
	},
	{
		id:getRand(4),
		desc:'七匹狼SEPTWOLVES男装专场 0.8折起七匹狼SEPTWOLVES男装专场',
		img:'https://pic1.imgdb.cn/item/644221e30d2dde57771bc32c.jpg',
		kw:'七匹狼男装'
	},
	{
		id:getRand(4),
		desc:'小猪班纳母婴鞋服专场 1.2折起小猪班纳母婴鞋服专场',
		img:'https://pic1.imgdb.cn/item/644221e30d2dde57771bc367.jpg',
		kw:'小猪班纳母婴鞋服'
	},
	{
		id:getRand(4),
		desc:'户外型男 1.2折起户外型男',
		img:'https://pic1.imgdb.cn/item/644221fe0d2dde57771c0b46.jpg',
		kw:'户外'
	},
	{
		id:getRand(4),
		desc:'太平鸟男装专场 1.8折起太平鸟男装专场',
		img:'https://pic1.imgdb.cn/item/644221fe0d2dde57771c0b7d.jpg',
		kw:'太平鸟男装'
	},
	{
		id:getRand(4),
		desc:'飞利浦PHILIPS专场 2.3折起飞利浦PHILIPS专场',
		img:'https://pic1.imgdb.cn/item/644221ff0d2dde57771c0bac.jpg',
		kw:'飞利浦PHILIPS'
	},
	{
		id:getRand(4),
		desc:'富安娜Fuanna床上用品专场 0.8折起富安娜Fuanna床上用品专场',
		img:'https://pic1.imgdb.cn/item/644221ff0d2dde57771c0bf1.jpg',
		kw:'床上用品'
	},
	{
		id:getRand(4),
		desc:'探路者TOREAD专场 1.4折起探路者TOREAD专场',
		img:'https://pic1.imgdb.cn/item/644221ff0d2dde57771c0c1c.jpg',
		kw:'探路者TOREAD'
	},
	{
		id:getRand(4),
		desc:'卡西欧CASIO石英表专场 2.2折起卡西欧CASIO石英表专场',
		img:'https://pic1.imgdb.cn/item/6442220a0d2dde57771c3494.jpg',
		kw:'卡西欧CASIO石英表'
	},
	{
		id:getRand(4),
		desc:'三枪内衣疯抢专场 3折封顶三枪内衣疯抢专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c34dd.jpg',
		kw:'三枪内衣'
	},
	{
		id:getRand(4),
		desc:'一叶子One Leaf面部护理专场 2.2折起一叶子One Leaf面部护理专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c3555.jpg',
		kw:'一叶子面部护理'
	},
	{
		id:getRand(4),
		desc:'美的Midea餐厨用具电器专场 2折起美的Midea餐厨用具电器专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c35d8.jpg',
		kw:'餐厨用具电器'
	},
	{
		id:getRand(4),
		desc:'爱步ECCO男女鞋专场 9.3折起爱步ECCO男女鞋专场',
		img:'https://pic1.imgdb.cn/item/644225ae0d2dde5777214acc.jpg',
		kw:'男女鞋'
	},
	{
		id:getRand(4),
		desc:'saucony运动户外专场 2.2折起saucony运动户外专场',
		img:'https://pic1.imgdb.cn/item/644222170d2dde57771c4af6.jpg',
		kw:'运动户外'
	},
	{
		id:getRand(4),
		desc:'李宁LI-NING专场 2折起李宁LI-NING专场',
		img:'https://pic1.imgdb.cn/item/644222180d2dde57771c4b30.jpg',
		kw:'李宁LI-NING'
	},
	{
		id:getRand(4),
		desc:'安踏ANTA专场 1.8折起安踏ANTA专场',
		img:'https://pic1.imgdb.cn/item/644222180d2dde57771c4b50.jpg',
		kw:'安踏ANTA'
	},
	{
		id:getRand(4),
		desc:'OPPO数码电子专场 4.8折起OPPO数码电子专场',
		img:'https://pic1.imgdb.cn/item/644222180d2dde57771c4b69.jpg',
		kw:'数码电子'
	},
	{
		id:getRand(4),
		desc:'华为HUAWEI数码电子专场 3.5折起华为HUAWEI数码电子专场',
		img:'https://pic1.imgdb.cn/item/6442220b0d2dde57771c361e.jpg',
		kw:'华为数码电子'
	},
	{
		id:getRand(4),
		desc:'6IXTY 8IGHT内衣专场 3.4折起6IXTY 8IGHT内衣专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c60e9.jpg',
		kw:'内衣专场'
	},
	{
		id:getRand(4),
		desc:'小米MI数码家电专场 4.7折起小米MI数码家电专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c6148.jpg',
		kw:'小米MI数码家电'
	},
	{
		id:getRand(4),
		desc:'慕诗涵女装专场 4折封顶慕诗涵女装专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c6188.jpg',
		kw:'慕诗涵女装'
	},
	{
		id:getRand(4),
		desc:'奢姿女装专场 3.9折封顶奢姿女装专场',
		img:'https://pic1.imgdb.cn/item/644222260d2dde57771c61e6.jpg',
		kw:'奢姿女装'
	},
	{
		id:getRand(4),
		desc:'联想lenovo数码电子专场 2.3折起联想lenovo数码电子专场',
		img:'https://pic1.imgdb.cn/item/644222270d2dde57771c622b.jpg',
		kw:'lenovo数码电子'
	},
	{
		id:getRand(4),
		desc:'babycare母婴用品专场 1.6折起babycare母婴用品专场',
		img:'https://pic1.imgdb.cn/item/6442222f0d2dde57771c6f95.jpg',
		kw:'babycare母婴用品'
	},
	{
		id:getRand(4),
		desc:'潘多拉PANDORA珠宝首饰专场 3.2折起潘多拉PANDORA珠宝首饰专场',
		img:'https://pic1.imgdb.cn/item/6442222f0d2dde57771c6fde.jpg',
		kw:'PANDORA珠宝首饰'
	}
]
// 存储楼层信息，用于响应给前端
let newFloors = []

// 定义一个获取自定义长度的随机字符串
function getRand(length = 4) {
  let result = ''
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charLength = char.length
  for (let i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength))
  }
  return result
}

// 获取轮播图
router.get('/api/swiper',(req,res)=>{
	const swiper = [
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3Xp6.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3qt1.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3ywj.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3B6S.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj30l8.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppj3afP.jpg'
		},
		{
			id: getRand(5),
			image:'https://s1.ax1x.com/2023/04/12/ppjlFhV.jpg'
		}
	]
	res.send({
		status:200,
		msg:'请求成功',
		data:swiper
	}).end()
})

// 获取导航栏
router.get('/api/navList',(req,res)=>{
	const navList = [
		{
			id:getRand(5),
			title:'分类',
			img_url:'https://s1.ax1x.com/2023/04/21/p9AXyQJ.png'
		},
		{
			id:getRand(5),
			title:'个人中心',
			img_url:'https://s1.ax1x.com/2023/04/21/p9AXrz4.png'
		}
	]
	res.send({
		status:200,
		msg:'请求成功',
		data:navList
	}).end()
})

// 获取楼层信息
router.post('/api/floor',(req,res)=>{
	let {page,pageSize} = req.body
	let curPage = page //当前页
	pageSize = Math.floor(pageSize) //一次返回的条数
	const total = floors.length //总条数
	const size = Math.ceil(total/pageSize)
	let t = curPage % size
	const flg = total/pageSize
	let done = false // 判断是否加载完毕，默认false
	// 判断数据是否加载完毕
	if(curPage > flg){ //已全部加载
		// 此时修改done未true，表示已全部加载完毕
		done = true
		res.send({
			status:200,
			msg:'已全部加载完毕',
			done
		})
	}
	else{	// 未全部加载
		if(t * pageSize + pageSize -1 <= total)
			newFloors = floors.slice(t * pageSize,t * pageSize + pageSize)
		else
			newFloors = floors.slice(t * pageSize,total)
		res.send({
			status:200,
			msg:'请求成功',
			data:newFloors,
			done
		}).end()
	}
	
})
// 通过下拉刷新重新获取楼层信息
router.post('/api/newfloor',(req,res)=>{
	// console.log(req.body)
	let curPage = req.body.page
	const pageSize = req.body.pageSize
	newFloors = floors.slice(curPage,curPage + pageSize)
	res.send({
		status:200,
		msg:'请求成功',
		data:newFloors
	}).end()
})
// 获取楼层总数
router.get('/api/floorsLen',(req,res)=>{
	res.send({status:200,msg:"请求数据成功",data:floors.length}).end()
})

// 获取分类信息
router.get('/api/category',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:category
	}).end()
})

// 获取数码电子信息
router.get('/api/digtalelectronics',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:digitalElectronics
	}).end()
})
router.get('/api/beauty',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:beauty
	}).end()
})
router.get('/api/jordon',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:jordon
	}).end()
})
router.get('/api/lining',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:liNing
	})
})
router.get('/api/anta',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:Anta
	})
})
router.get('/api/pcbaby',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:PCbaby
	})
})
router.get('/api/beddings',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:beddings
	})
})
router.get('/api/outdoors',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:outdoors
	})
})
router.get('/api/philips',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:PHILIPS
	})
})
router.get('/api/toread',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:toread
	})
})
router.get('/api/casio',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:casio
	})
})
router.get('/api/kitchen',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:kitchen
	})
})
router.get('/api/jewelry',(req,res)=>{
	res.send({
		status:200,
		msg:'请求成功',
		data:jewelry
	})
})
module.exports = router