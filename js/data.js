var G = {} ;
G.url="http://ued.ctrip.com/blog/wp-content/webkitcss/";

var zNodes =[
// { id:1000, pId:0, cname:"序言", name:"preface", open:false},
{ id:1, pId:0,name:"-webkit-align", tocont:false, open:false},
{ id:11, pId:1,name:"-webkit-align-content", open:false},
{ id:13, pId:1, name:"-webkit-align-items"},
{ id:14, pId:1, name:"-webkit-align-self", open:false
 },
{ id:2, pId:0, name:"-webkit-animation", tocont:false},
{ id:21, pId:2, name:"-webkit-animation"},
{ id:22, pId:2, name:"-webkit-animation-delay"},
{ id:23, pId:2, name:"-webkit-animation-direction"
  },
{ id:24, pId:2, name:"-webkit-animation-duration"  },
{ id:24, pId:2, name:"-webkit-animation-fill-mode"  },
{ id:25, pId:2, name:"-webkit-animation-iteration-count"},
{ id:26, pId:2, name:"-webkit-animation-name"},
{ id:27, pId:2, name:"-webkit-animation-play-state"},
 { id:28, pId:2, name:"-webkit-animation-timing-function"},

// { id:3, pId:0,  name:"-webkit-app-region", 
//   gram:"<strong>-webkit-app-region</strong>[, …];",
//   prop:[
//         '<b>drag:</b>可以拖拽',
//         '<b>no-drag:</b>不可拖拽',
//        ],
//   expl:['<b>适用于移动webkit浏览器</b>'],
// },
{ id:4, pId:0, name:"-webkit-appearance"},
{ id:5, pId:0,  name:"-webkit-backface-visibility"},

//  end lyx




{ id:6, pId:0, name:"-webkit-background", open:false,tocont:false },
// { id:61, pId:6, name:"-webkit-background", t:"id=61"},
{ id:62, pId:6, name:"-webkit-background-clip"},
// { id:63, pId:6, name:"-webkit-background-composite", t:"id=63"},
{ id:64, pId:6, name:"-webkit-background-origin"},
{ id:65, pId:6, name:"-webkit-background-size"},


{ id:7, pId:0, name:"-webkit-border-radius",},
// { id:71, pId:7, name:"-webkit-border", },
// { id:72, pId:7, name:"-webkit-border-bottom-left-radius"},
// { id:73, pId:7, name:"-webkit-border-bottom-right-radius",
// gram:"<strong>-webkit-border-bottom-right-radius:</strong> length | percentage"},
// // { id:74, pId:7, name:"-webkit-border-fit", },
{ id:7, pId:0, name:"-webkit-border-image"
},
// { id:77, pId:7, name:"-webkit-border-radius"
// },
// { id:771, pId:7, name:"-webkit-border-top-left-radius"
// },
// { id:772, pId:7, name:"-webkit-border-top-right-radius"
// },
// { id:79, pId:7, name:"-webkit-border-vertical-spacing", 
// },
// { id:78, pId:7, name:"-webkit-border-horizontal-spacing", 
// },

// end wjy

{ id:8, pId:0,name:"-webkit-box",  open:false,tocont:true,
  gram:"<b>-webkit-box: </b> <-webkit-box-align> | <-webkit-box-decoration-break> | <-webkit-box-direction> ... "
},
{ id:81, pId:8, name:"-webkit-box-align", 
},
{ id:82, pId:8, name:"-webkit-box-decoration-break",
},
{ id:83, pId:8, name:"-webkit-box-direction",
},
{ id:84, pId:8, name:"-webkit-box-flex",
},
{ id:85, pId:8, name:"-webkit-box-flex-group",
},
{ id:86, pId:8, name:"-webkit-box-lines", 
},
{ id:87, pId:8, name:"-webkit-box-ordinal-group", 
},
{ id:88, pId:8, name:"-webkit-box-orient", 
},
{ id:881, pId:8, name:"-webkit-box-pack", 
},
{ id:882, pId:8, name:"-webkit-box-reflect",
},
{ id:883, pId:8, name:"-webkit-box-shadow", 
},
{ id:884, pId:8, name:"-webkit-box-sizing", 
},

// { id:9, pId:0, name:"-webkit-clip-path", 
//   //此属性仅火狐有效
// },
// { id:10, pId:0, name:"-webkit-color-correction", t:"id=7"},
//   //webkit未支持,或者说不知道什么浏览器支持...

// //  wwy


{ 
	id:11, pId:0,name:"-webkit-columns", open:false
},
{ 
	id:111, pId:11,name:"-webkit-column-axis", open:false,
},
{ id:1112, pId:11, name:"-webkit-column-break", tocont:false},
{ 
	id:1113, pId:1112,name:"-webkit-column-break-after", open:false
},
{ 
	id:1113, pId:1112,name:"-webkit-column-break-before", open:false
},

{ 
	id:1114, pId:1112,name:"-webkit-column-break-inside", open:false
},
{ 
	id:112, pId:11,name:"-webkit-column-count", open:false
},
{ 
	id:113, pId:11,name:"-webkit-column-gap", open:false
},
{ 
	id:114, pId:11,name:"-webkit-column-progression", open:false
},

{ 
	id:115, pId:11,name:"-webkit-column-rule", open:false
},
{ 
	id:1151, pId:115,name:"-webkit-column-rule-color", open:false
},
{ 
	id:1151, pId:115,name:"-webkit-column-rule-style", open:false
},
{ 
	id:1151, pId:115,name:"-webkit-column-rule-width", open:false
},

// { id:113, pId:11, name:"-webkit-column-span", t:"id=71"},
//			-webkit-column-width	完
{ 
	id:114, pId:11,name:"-webkit-column-width", open:false
},



//			-webkit-dashboard-region	完
// { 
// 	id:13, pId:0,name:"-webkit-dashboard-region", open:false,
// 	//语法
// 	gram:"<strong>-webkit-dashboard-region:</strong> none | dashboard-region(...) [...];", 
// 	//取值
// 	prop:['<b>none:</b>未指定任何行为'], 
// 	//说明
// 	//兼容性
// 	comp:"Available in Safari 3.0 and later. (Called -apple-dashboard-region in Safari 2.0.) "
// },
//			-webkit-filter
{ 
	id:14, pId:0,name:"-webkit-filter", open:false
},

// end lys

{ id:15, pId:0, name:"-webkit-flex",tocont:false},
{ id:150, pId:15, name:"-webkit-flex"
},

{ id:151, pId:15, name:"-webkit-flex-basis"
},
{ id:151, pId:15, name:"-webkit-flex-direction"
},
{ id:151, pId:15, name:"-webkit-flex-grow"
},
{ id:151, pId:15, name:"-webkit-flex-shrink"
},
{ id:151, pId:15, name:"-webkit-flex-wrap"
},

{ id:16, pId:0, name:"-webkit-flow",tocont:false},
// { id:161, pId:0, name:"-webkit-flow", },
{ id:162, pId:16, name:"-webkit-flow-from"
},
{ id:163, pId:16, name:"-webkit-flow-into"
},

// { id:17, pId:0, name:"-webkit-font", },
{ id:171, pId:17, name:"-webkit-font-kerning"
},
{ id:172, pId:17, name:"-webkit-font-smoothing"
},
{ id:173, pId:17, name:"-webkit-font-variant-ligatures"
},

// { id:18, pId:0, name:"-webkit-grid",tocont:false},
// // { id:181, pId:18, name:"-webkit-grid", },
// { id:182, pId:18, name:"-webkit-grid-column",
//  gram:"<strong>-webkit-grid-column：</strong><grid-line> [ / <grid-line> ]", 
//   prop:['<b>grid-line:</b>如果指定两个值，他们分别是普通形式下grid-start/end对应的两个值;如果只有一个值，则grid-start/end对应的两个值相同;否则是auto;'], 
//   expl:['适用于网格元素，是grid-start/end的简写形式，用于表示位于网格中的行列位置'],
//   comp:"Safari"
// },
// { id:183, pId:18, name:"-webkit-grid-columns",
// gram:"<strong>-webkit-grid-columns：</strong> <length>|<percentage>|<relative length> | ([<length>|<percentage>|<relative length >)<integer> + | none | inherit", 
//   prop:['<b>length:</b>gr单位也可以用在这里（它指网格的包含块）','<b>percentage:</b>包含块高度和宽度的百分比','<b>relative length:</b>相对（倍数）长度',], 
//   expl:['复合属性。'],
//   comp:"Safari"
// },
// { id:184, pId:18, name:"-webkit-grid-row",
//   gram:"<strong>-webkit-grid-row：</strong><grid-line> [ / <grid-line> ]", 
//   prop:['<b>grid-line:</b>如果指定两个值，他们分别是普通形式下grid-before/after对应的两个值;如果只有一个值，则grid-before/after对应的两个值相同;否则是auto;'], 
//   expl:['适用于网格元素，是grid-before/after的简写形式，用于表示位于网格中的行列位置'],
//   comp:"Safari"
// },
// { id:185, pId:18, name:"-webkit-grid-rows",
//   gram:"<strong>-webkit-grid-rows：</strong>[[<length>|<percentage>|<relative length>] | ([<length>|<percentage>|<relative length > ]+)[‘[’<integer>‘]’]? ]+ | none | inherit", 
//   prop:['<b>length:</b>gr单位也可以用在这里（它指网格的包含块）','<b>percentage:</b>包含块高度和宽度的百分比','<b>relative length:</b>相对（倍数）长度',], 
//   expl:['复合属性。'],
//   comp:"Safari "
// },
// { id:19, pId:0, name:"-webkit-highlight", },
//  end lll
// { id:20, pId:0, name:"-webkit-hyphenate", },
// { id:201, pId:20, name:"-webkit-hyphenate", },
// { id:202, pId:20, name:"-webkit-hyphenate-character", },
// { id:203, pId:20, name:"-webkit-hyphenate-limit", },
// { id:2031, pId:203, name:"-webkit-hyphenate-limit", },
// { id:2032, pId:203, name:"-webkit-hyphenate-limit-after", },
// { id:2033, pId:203, name:"-webkit-hyphenate-limit-before", },
// { id:2034, pId:203, name:"-webkit-hyphenate-limit-lines", },


{ id:21, pId:0, name:"-webkit-justify-content"
  },

{ id:22, pId:0, name:"-webkit-line",tocont:false},
// { id:221, pId:22, name:"-webkit-line", },
// { id:222, pId:22, name:"-webkit-line-align", },
// { id:223, pId:22, name:"-webkit-line-contain", },
{ id:224, pId:22, name:"-webkit-line-break"
},
// { id:225, pId:22, name:"-webkit-line-clamp", },
// { id:226, pId:22, name:"-webkit-line-grid", },
// { id:227, pId:22, name:"-webkit-line-snap", },

// { id:23, pId:0, name:"-webkit-locale", },

//  end zlq

{ id:24, pId:0, name:"-webkit-margin",tocont:false},
// { id:241, pId:24, name:"-webkit-margin", },
// { id:242, pId:24, name:"-webkit-margin-after-collapse", },
// { id:243, pId:24, name:"-webkit-margin-before-collapse", },
{ id:244, pId:24, name:"-webkit-margin-bottom-collapse"
},
{ id:245, pId:24, name:"-webkit-margin-collapse"
},
{ id:246, pId:24, name:"-webkit-margin-start"
},
{ id:247, pId:24, name:"-webkit-margin-top-collapse"
},


{ id:25, pId:0, name:"-webkit-marquee", tocont:false},
{ id:251, pId:25, name:"-webkit-marquee"
},
{ id:252, pId:25, name:"-webkit-marquee-direction"
},
{ id:253, pId:25, name:"-webkit-marquee-increment"
},
{ id:254, pId:25, name:"-webkit-marquee-repetition"
},
{ id:255, pId:25, name:"-webkit-marquee-speed"
},
{ id:256, pId:25, name:"-webkit-marquee-style"
},

// end sc

// { id:26, pId:0, name:"-webkit-mask",
//   //语法
//   gram:"<strong>-webkit-mask:</strong>attachment, clip, origin, image, repeat, composite, box-image;", 
//   //取值
//   prop:['<b>attachment:</b>详情见 “-webkit-mask-attachment”','<b>clip:</b>详情见“-webkit-mask-clip”','<b>origin:</b> 详情见“-webkit-mask-origin”','<b>image:</b>详情见“-webkit-mask-image”','<b>repeat:</b> 详情见“-webkit-mask-repeat”','<b>composite:</b> 详情见“-webkit-mask-composite”','<b>box-image:</b> '], 
//   //说明
//   expl:['定义多种遮罩属性'，'复合属性。参见：-webkit-mask-attachment | -webkit-mask-box-image | '],
//   //兼容性
//   comp:"Available in Safari 4.0 and later."
// },
{ id:26, pId:0, name:"-webkit-mask",tocont:false},
// { id:262, pId:26, name:"-webkit-mask-attachment"
// },
{ id:263, pId:26, name:"-webkit-mask-box-image",tocont:false},
{ id:2631, pId:263, name:"-webkit-mask-box-image"

},
// { id:2632, pId:263, name:"-webkit-mask-box-image-outset", },
// { id:2633, pId:263, name:"-webkit-mask-box-image-repeat", },
// { id:2634, pId:263, name:"-webkit-mask-box-image-slice", },
// { id:2635, pId:263, name:"-webkit-mask-box-image-source", },
// { id:2636, pId:263, name:"-webkit-mask-box-image-width", },
{ id:264, pId:26, name:"-webkit-mask-clip"
},
{ id:265, pId:26, name:"-webkit-mask-composite"
},
{ id:266, pId:26, name:"-webkit-mask-image"
},
{ id:267, pId:26, name:"-webkit-mask-origin"
},
{ id:268, pId:26, name:"-webkit-mask-position",tocont:false},
{ id:269, pId:268, name:"-webkit-mask-position"
},
{ id:270, pId:268, name:"-webkit-mask-position-x"
},
{ id:271, pId:268, name:"-webkit-mask-position-y"
},
{ id:272, pId:26, name:"-webkit-mask-repeat"
},
{ id:273, pId:26, name:"-webkit-mask-size"
},
{ id:27, pId:0, name:"-webkit-nbsp-mode"
},
// { id:28, pId:0, name:"-webkit-order",tocont:false},
{ id:29, pId:0, name:"-webkit-padding-start"
},
{ id:30, pId:0, name:"-webkit-perspective",tocont:false},
{ id:301, pId:30, name:"-webkit-perspective"
},
{ id:302, pId:30, name:"-webkit-perspective-origin"
 },

// end yjl

{ id:31, pId:0, name:"-webkit-print-color-adjust"
},

// { id:32, pId:0, name:"-webkit-region", },
// { id:321, pId:32, name:"-webkit-region", },
// { id:322, pId:32, name:"-webkit-region-after", },
// { id:323, pId:32, name:"-webkit-region-before", },
// { id:324, pId:32, name:"-webkit-region-inside", },
// { id:325, pId:32, name:"-webkit-region-overflow",
//   gram:"<b>-webkit-region-overflow:</b>auto | break", 
//   prop:[''], 
//   expl:[''],
//   comp:""
// },
{ id:33, pId:0, name:"-webkit-rtl-ordering"
},
// { id:34, pId:0, name:"-webkit-shape", },
// { id:341, pId:34, name:"-webkit-shape", },
// { id:342, pId:34, name:"-webkit-shape-inside", },
// { id:343, pId:34, name:"-webkit-shape-outside", },
// { id:34, pId:0, name:"-webkit-svg-shadow",demo:"-webkit-svg-shadow.html"},

{ id:35, pId:0, name:"-webkit-tap-highlight-color"
},

// { id:36, pId:0, name:"-webkit-text", },
// { id:361, pId:36, name:"-webkit-text", },
// { id:361, pId:36, name:"-webkit-text-combine", },
// { id:361, pId:36, name:"-webkit-text-decorations-in-effect", },

// { id:361, pId:36, name:"-webkit-text-emphasis-color",
//   gram:"<b>-webkit-text-emphasis-color:</b>&lt;none&gt;", 
//   prop:['<b>&lt;none&gt:</b>默认属性。'], 
//   expl:[''],
//   comp:"无"
// },

// { id:361, pId:36, name:"-webkit-text-emphasis-position",
//   gram:"<b>-webkit-text-emphasis-position:</b>&lt;none&gt;", 
//   prop:['<b>&lt;none&gt:</b>默认属性。'], 
//   expl:[''],
//   comp:"无"
// },

// { id:361, pId:36, name:"-webkit-text-emphasis-style",
//   gram:"<b>-webkit-text-emphasis-style:</b>&lt;none&gt;", 
//   prop:['<b>&lt;none&gt:</b>默认属性。'], 
//   expl:[''],
//   comp:"无"
// },

{ id:361, pId:36, name:"-webkit-text-fill-color"
},
// { id:361, pId:36, name:"-webkit-text-orientation"
// },

{ id:361, pId:36, name:"-webkit-text-security"
},

{ id:361, pId:36, name:"-webkit-text-size-adjust"
},

{ id:361, pId:36, name:"-webkit-text-stroke"},


//  end lzj


// { id:37, pId:0, name:"-webkit-touch-callout", },


{ id:38, pId:0, name:"-webkit-transform",tocont:false},
{ id:381, pId:38, name:"-webkit-transform"
},
{ id:382, pId:38, name:"-webkit-transform-origin",tocont:false},
{ id:3821, pId:382, name:"-webkit-transform-origin"
},
{ id:3612, pId:382, name:"-webkit-transform-origin-x"
},
{ id:3613, pId:382, name:"-webkit-transform-origin-y"
},
{ id:3614, pId:382, name:"-webkit-transform-origin-z"
},
{ id:363, pId:38, name:"-webkit-transform-style"
},

// wj

{ id:39, pId:0, name:"-webkit-transition"
},
//{ id:391, pId:39, name:"-webkit-transition", },
{ id:392, pId:39, name:"-webkit-transition-delay"
},
{ id:393, pId:39, name:"-webkit-transition-duration"
},
{ id:394, pId:39, name:"-webkit-transition-property"
},
{ id:395, pId:39, name:"-webkit-transition-timing-function"
},


{ id:40, pId:0, name:"-webkit-user",tocont:false},
{ id:402, pId:40, name:"-webkit-user-drag"
},
{ id:403, pId:40, name:"-webkit-user-modify"
},
{ id:404, pId:40, name:"-webkit-user-select"
},
{ id:41, pId:0, name:"-webkit-wrap"
},
{ id:411, pId:41, name:"-webkit-wrap-flow"
},
{ id:412, pId:41, name:"-webkit-wrap-margin"
},
{ id:413, pId:41, name:"-webkit-wrap-padding"
},
{ id:414, pId:41, name:"-webkit-wrap-through"
},
{ id:415, pId:0, name:"-webkit-writing-mode"
},

// xll
];



function onClick(e,treeId, treeNode) {
  var zTree = $.fn.zTree.getZTreeObj("catalog");
  zTree.expandNode(treeNode);
}

var setting = {
	data: {
		key: {
			title: "t"
		},
		simpleData: {
			enable: true
		}				
	},
	view: {
		fontCss: getFontCss,
    dblClickExpand: false,
    showLine: true
	},
  callback: {
    onClick: onClick
  }
};
function focusKey(e) {
	if (key.hasClass("empty")) {
		key.removeClass("empty");
	}
}
function blurKey(e) {
	if (key.get(0).value === "") {
		key.addClass("empty");
	}
}
var lastValue = "", nodeList = [], fontCss = {};
function clickRadio(e) {
	lastValue = "";
	searchNode(e);
}
function searchNode(e) {
	var zTree = $.fn.zTree.getZTreeObj("catalog");
	if (!$("#getNodesByFilter").attr("checked")) {
		 var value = $.trim(key.get(0).value);
     if(value == ""){value = "&yen";}// add 绕道实行
		var keyType = "";
		if ($("#name").attr("checked")) {
			keyType = "name";
		} else if ($("#level").attr("checked")) {
			keyType = "level";
			value = parseInt(value);
		} else if ($("#id").attr("checked")) {
			keyType = "id";
			value = parseInt(value);
		}
		if (key.hasClass("empty")) {
			value = "";
		}
		if (lastValue === value) return;
		lastValue = value;
		if (value === "") return;
		updateNodes(false);

		if ($("#getNodeByParam").attr("checked")) {
			var node = zTree.getNodeByParam(keyType, value);
			if (node === null) {
				nodeList = [];
			} else {
				nodeList = [node];
			}
		} else if ($("#getNodesByParam").attr("checked")) {
			nodeList = zTree.getNodesByParam(keyType, value);
		} else if ($("#getNodesByParamFuzzy").attr("checked")) {
			nodeList = zTree.getNodesByParamFuzzy(keyType, value);
		}
	} else {
		updateNodes(false);
		nodeList = zTree.getNodesByFilter(filter);
	}
	updateNodes(true);

}
function updateNodes(highlight) {
	var zTree = $.fn.zTree.getZTreeObj("catalog");
	for( var i=0, l=nodeList.length; i<l; i++) {
		nodeList[i].highlight = highlight;
		zTree.updateNode(nodeList[i]);
	}
}
function getFontCss(treeId, treeNode) {
	return (!!treeNode.highlight) ? {color:"#A60000", "font-weight":"bold"} : {color:"#333", "font-weight":"normal"};
}
function filter(node) {
	return !node.isParent && node.isFirstNode;
}

function onClick(e,treeId, treeNode) {
  var zTree = $.fn.zTree.getZTreeObj("catalog");
  zTree.expandNode(treeNode);
}

var key;
$(function(){
	$.fn.zTree.init($("#catalog"), setting, zNodes);
	key = $("#key");
	key.bind("focus", focusKey).bind("input",searchNode);
	//.bind("blur", blurKey)
	//.bind("propertychange", searchNode)
	
	//$("#name").bind("change", clickRadio);
	//$("#level").bind("change", clickRadio);
	//$("#id").bind("change", clickRadio);
	//$("#getNodeByParam").bind("change", clickRadio);
	//$("#getNodesByParam").bind("change", clickRadio);
	//$("#getNodesByParamFuzzy").bind("change", clickRadio);
	//$("#getNodesByFilter").bind("change", clickRadio);
  $('#catalog a').live('click', function() {
    var theHref = $(this).attr("href");
    if(theHref){
        $("#main").load(theHref +" .main .position,.prop_intro,.mod",function(){
          var attr = $("#iframedemo").attr("src");
          $("#iframedemo").attr("src", attr.replace("../",G.url));
          var demoBtn = document.getElementsByClassName("btns")[0].getElementsByTagName("a")[0];
          var demoBtnLink = demoBtn.getAttribute("href");
          demoBtn.href = demoBtnLink.replace("../",G.url);
          $("#position a").each(function(i){
          	if(i == 0)
          		$(this).attr("href","http://ued.ctrip.com/blog/wp-content/webkitcss/");
          	else if(i == 1){
          		$(this).attr("href",$(this).attr("href").replace("../","http://ued.ctrip.com/blog/wp-content/webkitcss/"));
          	}
          	else
          		$(this).attr("href",$(this).attr("href").replace(/(\w*)/,"http://ued.ctrip.com/blog/wp-content/webkitcss/prop/$1"));
          });

       });
     }
    return false;
  });
});
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?43dc186e9b7b07367d33fe832db15218";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();