css:可以使用jquery ui的css
<h3 class="ui-icon ui-icon-clipboard">标题</h3>

effect:
	$(function(){
		$("#btn").click(function(){
			/**
			 * 第一个参数表示效果，查询API可以看每一种效果的属性
			 * 相应的属性需要在第二个参数option中设置
			 * 第二参数表示一些options设置   不同的effet有着不同的options
			 * 第三个参数表示延时设置
			 * 第四个参数表示执行完效果之后的方法
			 * 特别注意：在option中可以设置缓动效果，在demo可以查询不同的缓动
			 */
			$("#content").effect("slide",{  //content是div
				direction :"right",
				distance:0,
				easing:"easeOutCirc"   //缓动, 指定一种缓动效果. 有30多种缓动函数
			},2000);
		})
	})
	---------------------
	我们很少使用effect方法,因为它为我们提供了show,hiden..等方法的覆盖,是我们可以使用这些方法来使用effect的效果
	$(function(){
		$("#btn").click(function(){
			//当引入了effect之后，可以为show，hiden,toggle这些方法引入effect效果
			//引入的操作和effect方法的操作完全一致
			//$("#content").toggle("explode");
			//对于class的操作而言，就不存在效果，第一个参数就是class的名称，但是可以直接设置缓动
			//$("#content").toggleClass("green",1000,"easeInQuint");
			
			//可以移除第一个参数，移入第二个参数的样式
			$("#content").switchClass("green","red",2000,"easeInQuint");
		})
	})

position:
	<style type="text/css">
		#con1 {
			border:1px solid #ddd;
			width:100px;
			height:100px;
			background:#943;
			float:left;
			z-index: 100;
		}
		
		#con2 {
			border:1px solid #ddd;
			width:150px;
			height:150px;
			background:#439;
			float:left;
		}
	</style>
	$(function(){
		$("#con2").position({
			of:$(window)   //con2在window中,默认my,at都为true
		});
		
		$("#con1").position({
			of:$("#con2"), //con1在con2中,  con1位置(my)为center top的点对应con2中(at)center top的点
			my:"center top",
			at:"center top"
		});
	})
	<body>
		<div id="con1">容器1</div>
		<div id="con2">容器2</div>
	</body>

电影图片demo:
	<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<link type="text/css" rel="stylesheet" href="css/smoothness/jquery-ui-1.10.0.custom.min.css" />
			<style type="text/css">
			*{
				margin: 0px;
				padding:0px;
			}
			#movie {
				text-align:center;
			}
			#movieShow {
				border:15px solid #ddd;
				position:fixed;
				top:0px;
				left:0px;
				display:none;
			}
			</style>
			<script type="text/javascript" src="js/jquery-1.9.0.js"></script>
			<script type="text/javascript" src="js/jquery-ui-1.10.0.custom.min.js"></script>
			<script type="text/javascript">
				$(function(){
					$(document).click(function(){
						$("#movieShow").hide("fade",300,function(){
			//由于hide之后还会保存之前的position,下次显示的时候position就会乱掉, 所以要在hide完成之后重置left属性
							$(this).css("left","0px"); 
						});
					})
					$("#movie img").width(150).height(220).css({
						margin:"20px",
						cursor:"pointer"
					}).click(function(event){
		 //当一张图片正在显示的时候,点击另一张缩略图是不会切换的,因为#movieShow正在显示的时候就不会调用show方法
		 //所以要在一开始先hide
						$("#movieShow").css("left","0px").hide().position({
							of:$(window),
							my:"center top",
							at:"center top"
						}).find("img")
						  .attr("src",$(this).attr("src").replace(/thumbnail/,"movie"))
						  .end().show("fade",500);
						
						event.stopPropagation(); //防止事件冒泡到document的click
					});
					//$("#movieShow").width($("#movieShow img").width()).height($("#movieShow img").height());
				})
			</script>
		</head>
		<body>
			<div id="movieShow" class="ui-corner-all">
				<img src="movie/13.jpg" alt=""/>
			</div>
			<div id="movie">
				<img src="thumbnail/01.jpg" alt="" />
				<img src="thumbnail/02.jpg" alt="" />
				<img src="thumbnail/03.jpg" alt="" />
				<img src="thumbnail/04.jpg" alt="" />
				<img src="thumbnail/05.jpg" alt="" />
				<img src="thumbnail/06.jpg" alt="" />
				<img src="thumbnail/07.jpg" alt="" />
				<img src="thumbnail/08.jpg" alt="" />
				<img src="thumbnail/09.jpg" alt="" />
				<img src="thumbnail/10.jpg" alt="" />
				<img src="thumbnail/11.jpg" alt="" />
				<img src="thumbnail/12.jpg" alt="" />
				<img src="thumbnail/13.jpg" alt="" />
				<img src="thumbnail/14.jpg" alt="" />
			</div>
		</body>
	</html>

draggable拖:
	$(function(){
		//此时child才是可拖动状态
		$("#child").draggable({
			appendTo:"parent",
			helper:"clone",  //默认是original,不克隆
			cursor:"move",
			opacity:0.7,
			snap:true, //是否吸附
			revert: false, //默认是false,false就表示拖动之后不还原到原来的位置, 还有valid(拖到合法的目标还原)和invalid(拖到不合法的目标还原)
			stop:function(event,ui){ //ui有3个属性, helper当前对象,position位置,offset偏移量
				alert($(ui.helper).parent().html());
			}
			});
		$("#child").draggable("disable");
		//这个时候才能使用enable开启,即必须先初始化
		$("#child").draggable("enable");
	})

	<div id="print"></div>
	<div id="parent">
		<div id="child">
			<h3>title</h3>
		</div>
	</div>
	
	<div id="content"></div>

droppable放:
	$(function(){
		//此时child才是可拖动状态
		$("#child").draggable({
			appendTo:"parent",
			cursor:"move",
			revert:"invalid",//表示如果没有到目标中都要回原位
			opacity:0.7,
			//helper:"clone",
			snap:true,
			scope:"taget"
			});
		
		$("#content").droppable({
			//accept:"#child",//仅仅只能接受某个可以拖动对象
			activeClass:"activeClz",//当开始拖动的时候的样式
			hoverClass:"hoverClz",//当移动到目标上面的样式
			scope:"taget",//通过这个属性可以把拖的目标和放的目标绑定在一起. 值可以自己指定,只要保持两边一致
			//如果accept没有接受，就不能绑定
			drop:function(event,ui){
				//this拖进content的时候有position的值,在放的时候应该把position的值删掉,否则位置不对
				$(this).append($(ui.draggable).css("position","")[0]);
			}
		});
		
		$("#content2").droppable({
			//accept:"#print",
			activeClass:"activeClz",//当开始拖动的时候的样式
			hoverClass:"hoverClz",//当移动到目标上面的样式
			drop:function(event,ui){
				$(this).append($(ui.draggable)[0]);
			}
		});
	})
	<div id="print"></div>
	<div id="parent">
		<div id="child">
			<h3>title</h3>
		</div>
	</div>
	
	<div id="content"></div>
	
	<div id="content2"></div>

选择兴趣demo:
	<!doctype html>
	<html lang="us">
	<head>
		<meta charset="utf-8">
		<title>jQuery UI Example Page</title>
		<link href="css/sunny/jquery-ui-1.10.0.custom.css" rel="stylesheet">
		<script src="js/jquery-1.9.0.js"></script>
		<script src="js/jquery-ui-1.10.0.custom.js"></script>
		<style type="text/css">
		*{
			padding:0px;
			margin:0px;
			font-size:12px;
		}
		#container {
			width:1000px;
			position: absolute;
			left:50%;
			margin-left:-500px
		}
		.in-list {
			width:300px;
			border:1px solid #ddd;
			margin:10px;
			float:left;
		}
		.in-list h3{
			height:30px;
			background:#a43;
			color:#fff;
		}
		.in-list h3 span {
			position: relative;
			left:20px;
			top:6px;
		}
		div.temp {
			height:20px;
			border:1px solid #733;
			text-align:center;
			width:280px;
			position: absolute;
			display: none;
		}
		li.interest {
			list-style: none;
			height:20px;
			margin:5px;
			border:1px solid #733;
			text-align:center;
			width:280px;
		}
		#choice {
			margin-left:200px;
		}
		#choice h3 {
			background:#329;
		}
		#choice li {
			border:1px solid #329;
		}
		.activeClz {
			background: #8f9;
			border:1px solid #ddd;
		}
		.hoverClz {
			background:#ddd;
		}
		</style>
		<script type="text/javascript">
			$(function(){
				//开启所有的li的拖功能
				$("#all ul li").draggable({
					revert:"invalid", //拖到不合法(不是scope或者accept指定的)的地方要复位
					helper:"clone"
				});
				
				$("#all ul,#choice ul").droppable({
					activeClass: "activeClz",
	      			hoverClass: "hoverClz",
	      			accept:"#choice ul li",
	      			drop:setInterest
				});
				//choice的accept属性与all的不同,上面设置了一样的. 在这里覆盖
				$("#choice ul").droppable("option","accept","#all ul li");
				
				var dblEvent = function(event){
					if($(this).parent("ul").attr("id")=="u1") {
						moveElement(this,"#u2");
					} else {
						moveElement(this,"#u1");
					}
				};
				
				$(".in-ul li").dblclick(dblEvent);
				
				function moveElement(target,un) {  //双击事件的处理, target正在拖的对象, un指定是拖到哪里
					$(".in-ul li").off("dblclick");  //在移动的时候,要禁用掉双击事件, 因为只有一个.temp在显示
					var sLeft = $(target).offset().left;  //开始的位置
					var sTop = $(target).offset().top;
					var eLeft,eTop;  //结束的位置
					if($(un+" li").length>0) { //目标中有li
						eLeft = $(un+" li").last().offset().left;  
						eTop = $(un+" li").last().offset().top+$(un+" li").last().height();
					} else {
						eLeft = $(un+" h3").offset().left;
						eTop = $(un+" h3").offset().top+$(un+" h3").height();	
					}
					$(".temp").css("display","block").html($(target).html()).offset({top:sTop,left:sLeft})
					.animate({top:eTop,left:eLeft},500,function(){
						$(this).hide();  //隐藏漂移的li对象 .temp
						$(un).append(target);  
						$(".in-ul li").dblclick(dblEvent); //恢复双击事件
					});
				}
				
				function setInterest(event,ui) {
					$(this).append($(ui.draggable)[0]); //$(ui.draggable)[0] 指正在拖的对象
				}
			});
		</script>
	</head>
	<body>
		<div class="temp">abc</div>
		<div id="container">
		<div id="all" class="in-list">
			<ul id="u1" class="in-ul">
				<h3><span>所有兴趣</span></h3>
				<li class="interest"><span>足球</span></li>
				<li class="interest"><span>蓝球</span></li>
				<li class="interest"><span>羽毛球</span></li>
				<li class="interest"><span>网球</span></li>
				<li class="interest"><span>乒乓球</span></li>
				<li class="interest"><span>游泳</span></li>
				<li class="interest"><span>骑车</span></li>
				<li class="interest"><span>跑步</span></li>
				<li class="interest"><span>电影</span></li>
				<li class="interest"><span>摇滚音乐</span></li>
				<li class="interest"><span>流行音乐</span></li>
				<li class="interest"><span>计算机游戏</span></li>
				<li class="interest"><span>计算机编程</span></li>
				<li class="interest"><span>家用游戏机</span></li>
				<li class="interest"><span>喝酒</span></li>
			</ul>
		</div>
		
		<div id="choice" class="in-list">
			<ul id="u2" class="in-ul">
				<h3 class="choice_header"><span>选择兴趣</span></h3>
			</ul>
		</div>
		</div>
	</body>
	</html>

sortable:
	将上面的例子改成sortable:
	$(function(){
		//设置了sortable之后就不用在设置draggable和droppable
		//items指定哪些元素可以被排序, 我们不希望h3可以排序,不设的话h3也可以排序.  
		//connectWith设定可以拖到的位置.    placeholder移动时的样式. revert为true在释放的时候会有一个平滑的动画
		$("#u1,#u2").sortable({items:">li",connectWith:$("#u2") 
			,placeholder: "hoverClz",revert:true,
			//stop是每一次拍完序都会执行,update是修改了顺序之后才执行
			update:function(event,ui){
				//toArray可以把数据生成一个数组，之后可以通过ajax等方式传到服务器端
				//仅仅只能为id来生成数组
				/*var as = $(this).sortable("toArray");
				alert(as);*/  
				//会生成一个链接的参数字符串，在服务器端可以通过request.getParaments来创建数组
				//获得as字符串mid=1&mid=2&....
				var as = $(this).sortable("serialize",{key:"mid"});//可以为mid,要求li的id为"mid_xx"或"*_xx", 要有下划线, 下划线前也要有值
				//alert(as);
			},
			remove:function(event,ui){
				alert("移除了"+$(ui.item).attr("id"));	
			}
			});
		$("#u1").disableSelection(); //不能选中li中的文本
	});

selectable:
	$(function(){
		//selectable后,就可以单击选中,并可以配合使用ctrl, shift 和拖动选中
		$("#u1").selectable({filter:"li",
			stop:function(){
				var conf = confirm("是否确定删除?");
				if(conf) {
					$("#u1").find("li.ui-selected").remove(); //因为没有提供获取选中的方法,可以通过.ui-selected获取选中的元素
				}
			}});
	});	

json是一种数据格式,jsonp是解决跨域ajax的一种方式
jsonp: ajax是不支持跨域访问的. 但是可以获得跨域的js<scrit src="..">
jsonp01和jsonp02是两个不同域的项目, 如何在jsonp01中访问jsonp02中返回的json
	jsonp01中的01.jsp:
		<script type="text/javascript">
			var getData = function(data){
				alert(data.name+","+data.address);
			};
		</script>
		<script type="text/javascript" src="http://127.0.0.1:8080/jsonp02/r1.js"></script>
		<script type="text/javascript">
		$(function(){
			//ajax不支持跨域访问, 如下访问不能得到数据
			$.get("http://127.0.0.1:8080/jsonp02/01.html",function(data){
				alert(data);
			});
		});
		</script>
	jsonp02中的r1.js:
		getData({"username":"老张","password":"123"});
	json01中定义了getData方法,在jsonp02中的r1.js时就会调用getData方法,将json数据传递到data,从而获得想要的数据
	以上是直接访问访问js,而现实中我们先要在servlet查询相应的数据之后才返回,而且jsop02如何知道jsonp01中定义的方法名称
	---------------------------------
	jsop01中的01.jsp修改为:
		<script type="text/javascript" src="http://127.0.0.1:8080/jsonp02/jsonp.do?id=1&jsonpCallback=getData"></script>
	jsop02中的jsonp.do(servlet):
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			int id = Integer.parseInt(request.getParameter("id"));
			User u = users.get(id);
			String json = "{\"id\":\""+u.getId()+"\",\"name\":\""+u.getName()+"\",\"address\":\""+u.getAddress()+"\"}";
			//jsonCallback指定 回调的js方法  调用该方法把json传递给data
			String jsonp = request.getParameter("jsonpCallback")+"("+json+")";
			response.setContentType("text/plain;charset=utf-8");
			response.getWriter().println(jsonp);
		}
	------------------------------------
jquery对jsonp的支持:
	jsop01中的01.jsp修改为:
	//jsonpCallback=?   ?每次会生成一个不同的值,   第二个参数data有的时候表示post方式,没有的时候是get
	$.getJSON("http://127.0.0.1:8080/jsonp02/jsonp.do?jsonpCallback=?",{id:3},function(data){
		alert(data.id+","+data.name+","+data.address);
	});
	//不需要<script src="http://127.0.0.1:8080/jsonp02/..">了

accordion:
	$(function(){
		$("#nav").accordion({animate:200,event: "click" ,header:"h3",icons: { "header": "ui-icon-plus", "headerSelected": "ui-icon-minus" }});
		//$("#nav").accordion("show");  //调用accordion的show方法, 这种方式不能调用_开头的私有方法

		//得到了accordion的原型对象，可以直接调用原型对象的方法
		//由于此时得到的对象是原型对象，所以就可以直接使用_开头私有方法
		//由于这中处理方式会涉及到相应的私有方法，所以非特殊情况不用处理
		$("#nav").data("ui-accordion");
		$("#nav").accordion("destroy");
	});

	/**
	 * 如果希望扩展ui插件，获取其他插件，均可以使用以下方式处理
	 * 但是使用以下方式扩展带来的问题是会把原型中的东西污染掉
	 * 不太建议使用该方法
	 */
	(function($){
		//此时扩展的是ui.accordion的原型上的东西
		$.extend($.ui.accordion.prototype,{
			//扩展了一个show的方法, 这里定义的show方法会覆盖prototype中的show方法
			show:function(){
				alert("show");
			},
			_show:function(){
				alert("private show");
			}
		});
	})(jQuery)

widget factory: jquery ui中的所有插件都是通过widget来编写的
1. 原来我们编写插件的方式:
	(function($){
		$.fn.hello = function(opts) {
			$.extend({},opts||{})
		}
	})(jQuery)
2. 通过widget fatory:
	/**
	 * 当创建一个对象的时候，首先调用的原型的_createWidget方法，在这个方法中
	 * 首先会完成一些初始化的操作，之后先调用_create,然后进行create的事件，最后调用_init
	 */
	(function($){
		//使用widget factory创建插件，必须得有命名空间，而且命名空间只能有1级
		$.widget("kh.hello",{
			//将options添加到原型中
			options:{
				className:"abc",
				//事件函数是放在options中的
				create:function(event,a,b){
					/*alert("callback:create");
					alert(a+","+b);*/
				}
			},
			//为原型添加一个公有方法
			show:function(){
				//只要是在这个空间中创佳你的对象，都会有两个属性写到this中
				/*
				 * 1、this.element获取这个元素，
				 * 	如果包装集中有5个元素，会创建5个对象，this指向自己的引用
				 * 2、this.options
				 */
				// alert("hello create:"+this.options.name);
			},
			//_create方法是放在prototype上的方法
			_create:function(){
				this.element.addClass("ui-widget-content-"+this.options.className);
			},
			//getCreateEventData方法是用来为Create事件传递参数的
			_getCreateEventData:function(){
				return ["abc","ccd"];
			},
			//销毁一个插件，首先会调用_destroy这个来释放资源，这个方法需要我们覆盖
			//这个步骤在编写插件时是必须
			_destroy:function() {
				this.element.removeClass("ui-widget-content-"+this.options.className);
			},
			//这个方法指的是，只要为option设置值就会执行这个方法
			_setOption:function(key,value) {
				//默认这个方法，仅仅只是将值存储到options中
				if(key=="className") {
					this.element.removeClass();
					this.element.addClass("ui-widget-content-"+value);
				}
				//处理了之后，一定要调用父类方法把值传进去，此时一定要考虑好是什么时候传值
				//1.8之后使用的方式
				this._super(key,value);  //调用prototype中的_setOption方法
				//1.8以前,该部分的知识需要了解js的继承
				//$.Widget.prototype._setOption.call(this,key,value);
			}
		});
	})(jQuery)

(widget)搜索表格内容并显示的小插件:
html:
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>ui01_css</title>
		<meta name="author" content="Administrator" />
		<link type="text/css" rel="stylesheet" href="css/smoothness/jquery-ui-1.10.0.custom.min.css" />
		<style type="text/css">
		.ui-widget-searchtable-standard {
			border-bottom:1px solid #999;
			border-right:1px solid #999;
			border-spacing: 0px;
			text-align:center;
			font-size:14px;
		}
		.ui-widget-searchtable-standard td {
			border-left:1px solid #999;
			border-top:1px solid #999;
		}
		.ui-widget-searchtable-header-standard {
			background:#55a;
			color:#fff;
		}
		.ui-widget-searchtable-odd-standard {
			background:#ddd;
		}
		.ui-widget-searchtable-hover-standard {
			background:#832;
			color:#fff;
		}
		.ui-widget-searchtable-find-standard {
			background: #363;
			color:#ff0;
		}
		</style>
		<script type="text/javascript" src="js/jquery-1.9.0.js"></script>
		<script type="text/javascript" src="factory/jquery.ui.core.js"></script>
		<script type="text/javascript" src="factory/jquery.ui.widget.js"></script>
		<script type="text/javascript" src="jquery.kh.seachtable.js"></script>
		<script type="text/javascript">
			$(function(){
				$("#mt").searchtable({
					width:900,
					height:30
				})
				//$("#mt").searchtable("destroy");
			});
		</script>
		<!-- Date: 2013-01-23 -->
	</head>
	<body>
		<table id="mt" style="margin:auto;"> 
			<thead>
				<tr><td >标识</td><td>姓名</td><td>年龄</td><td>家庭地址</td></tr>
			</thead>
			<tbody>
				<tr><td>1</td><td>孙悟空</td><td>120</td><td>天堂</td></tr>
				<tr><td>2</td><td>猪八戒</td><td>110</td><td>高老庄</td></tr>
				<tr><td>3</td><td>沙僧</td><td>100</td><td>还是天堂</td></tr>
				<tr><td>4</td><td>唐僧</td><td>160</td><td>寺庙</td></tr>
			</tbody>
		</table>
	</body>
</html>
---------------------------
jquery.kh.seachtable.js:
(function($){
	$.widget("kh.searchtable",{
		options:{
			className:"standard",
			baseCss:"ui-widget-searchtable",
			width:null,
			height:null,
		},
		_create:function(){
			opt = this.options;
			ele = this.element;  //使用插件的对象,即$("#mt")
			bc = opt.baseCss;
			dc = opt.className;
			ele.addClass(bc+"-"+dc);
			if(opt.width) {
				ele.width(opt.width);
			}
			if(opt.height) {
				ele.find("tr").height(opt.height);
			}
			ele.find("thead tr").addClass(bc+"-header-"+dc);
			ele.find("tbody tr:odd").addClass(bc+"-odd-"+dc);
			ele.find("tbody tr").on("mouseenter.st mouseleave.st",function(event){
				$(this).toggleClass(bc+"-hover-"+dc);
			});
			this._initSearchInput();
		},
		_initSearchInput:function(){
			ele.find("thead").prepend("<tr><td colspan='"+ele.find("thead tr td").length+"'>输入搜索字段:<input type='text' id='table-search'/></td></tr>")
			this._bindSearch();
		},
		_bindSearch:function() {
			var that = this;  //这个this是使用插件的对象,即调用方法的对象($("#mt")表格)
			ele.find("#table-search").on("blur",function(event){
				if($(this).val()) {  //这个this是触发事件对象, 即input#table-search
					that.element.find("tbody td").removeClass().filter(":contains('"+$(this).val()+"')")
							.addClass(bc+"-find-"+dc);	
				}
			});
		},
		_destroy:function(){
			ele.removeClass();
			ele.find("tr").removeClass();
			ele.find("td").removeClass();
			ele.find("thead tr:eq(0)").remove();
			ele.find("tbody tr").off(".st");
			ele.css("width","");
			ele.find("tr").css("height","");
		}
	});
})(jQuery)

autocomplete:
	var sources = ["java","c++","c","ruby","python","javascript","php","jsp","asp"];
	$("#tags").autocomplete({
		source:sources,
		minLength:2   //输入两个字符之后显示
	});
	<input type="text" id="tags"/>
	------------------
	//使用json数据时，是用label来进行搜索，搜索完成之后，通过value来设置值
	var sources = [{"label":"khaaa","username":"孔浩","nickname":"konghao"},
			{"label":"lzkabc","username":"李志","nickname":"lizheng"},
			{"label":"ywdddsac","username":"杨文军","nickname":"yuanwenjie"}];
	$("#tags").autocomplete({
		source:sources,
		change:function(event,ui) {
			alert(ui.item.value);
		},
		//选择时候的事件
		focus:function(event,ui) {
			$(this).val(ui.item.nickname);
			return false;
		},
		//选择完成之后触发的事件
		select:function(event,ui) {
			$(this).val(ui.item.nickname);
			return false;
		}
	}).data("ui-autocomplete")._renderItem=function(ul,item){
		return $( "<li>" )
			.append( $( "<a>" ).text( item.username ) )
			.appendTo( ul );
	}//使用以上方式可以覆盖autocomplete的私有方法，
	//通过data可以得到原型对象
	----------------------
	//直接通过$.extend覆盖原型，这种方式虽然比上一种好一些，但是依然存在问题，就是污染原有的方法
	//所以推荐使用widget factory来进行操作
	$.extend($.ui.autocomplete.prototype,{
		_renderItem:function(ul,item) {
			return $( "<li>" )
				.append( $( "<a>" ).text( item.username ) )
				.appendTo( ul );
		}
	});
	----------------------------
	//自己定义了一个插件mycomplete，而拥有autocomplete的所有功能
	$.widget("kh.mycomplete",$.ui.autocomplete,{
		_renderItem:function(ul,item) {
			return $( "<li>" )
				.append( $( "<a>" ).text( item.username ) )
				.appendTo( ul );
		}
	});

datepicker:
	$("#born").datepicker({
		altField:"#mydate",  //选择日期后改变#mydate的值为日期
		altFormat:"yy-mm-dd",
		changeYear:true,
		minDate:"2012-01-02",
		maxDate:"+2y",   //当前日期加两年
	}).datepicker("setDate","2012-12-22");
	$("#born").datepicker("option",$.datepicker.regional["zh-CN"]); //国际化
	//国际化需要引入development-bundle/ui/i18n/jquery.ui.datepicker-zh-CN.js

validate 1.10与1.09变化很大, 使用1.10:
hello world:
	<script type="text/javascript" src="js/jquery.validate.js"></script>
	<script type="text/javascript">
		$(function(){
			$("#myform").validate();
		});
	</script>
	<form id="myform" action="#">
	Username:<input type="text" id="username" title="用户名不能为空" required/> <br/>
	<!-- 也可以写requered="true" 或 class="requried" -->
	<input type="submit" />
	</form>
上面通过title来显示错误信息, 当有多中错误信息时就不能使用titile了. 可以用如下写法
	$(function(){
		$("#myform").validate({
			rules:{
				username:"required",  //只写required代表required=true, 在jquery.validate.js中的默认值是true, 还有email,...都是一样
				address:{
					required:true,
					minlength:3
				},
				age:"digits",  //digits是整数,  number是数字
				pwd:"required",
				cpwd:{
					equalTo:"#pwd"
				}
			},
			messages:{
				username:"用户名必须输入",
				address:{
					required:"用户地址必须输入",
					minlength:"地址不能小于3位"
				},
				age:"年龄必须是整数",
				pwd:"密码必须输入",
				cpwd:"两次密码不一致"
			}
		});
	});
	<form id="myform" action="#">
		Username:<input type="text" id="username" name="username"/>
		<br/>
		Address:<input type="text" id="address" name="address"/>
		<br/>
		Age:<input type="text" id="age" name="age"/>
		<br/>
		password:<input type="text" id="pwd" name="pwd"/>
		<br/>
		confirm password:<input type="text" id="cpwd" name="cpwd"/>
		<br/>
		<input type="submit" />
	</form>
上面的写法会大大增加代码量,可以通过meta将{}的写法写入标签的class属性中,要额外引入jquery.metadata.js
如果不使用metadata, 在class中只能写required email=true这种, 不能有{}
	$(function(){
		$("#myform").validate();
	})
	Username:<input type="text" id="username" name="username" class="{required:true, messages:{required:'Please enter your email address'}}"/>
	Address:<input type="text" id="address" name="address" class="{required:true,messages:'地址不能为空'}"/>
	--------也可以这样(没必要):
	$("#myform").validate({meta:"validate"});   
	Address:<input type="text" id="address" name="address" class="validate:{{required:true,messages:'地址不能为空'}}"/>

ajax验证:
	$("#addForm").validate({
		rules:{
			...
		},
		messages:{
			..
		},
		submitHandler:function(form){   //点击提交之后的处理
			$.get("v.do?username="+$("#username").val(),function(data){
				if(!data) {
					$("#username").after("用户名已经存在"); 
				}
				 // $(form).submit();  //这种提交会在提交之前再validate一次
				 form.submit();
			});
		}
	});
	---------------------------
	如果要马上进行验证,而不是提交的时候才验证,就要自定义验证方法:
	// 1.如果要添加带参数的验证使用以下方式
	$.validator.methods.nc = function(value,element,param){  //required等验证都是写在methods下的
		//如果返回true表示验证成功，返回false表示验证失败
		return param===value;
	};
	// 2.如果没有参数就可以使用addMethod这种方式来添加验证方法
	$.validator.addMethod("ncg",function(value){
		return value==="foobar";
	},"用户名必须为foobar");
	// 3.自定义方法的ajax验证
	$.validator.addMethod("nameConflict",function(value) {
		var rel = true;
		//此时get方法是异步的，所以当rel返回的时候，get方法可能没有执行完毕
		$.ajaxSetup({async:false}); //设成同步的, 否则就要使用ajax方法而不是get
		$.get("v.do?username="+value,function(data){
			//如果在这个里面返回，仅仅只是闭包返回了，addMethod依然是false
			rel = data;
		});
		$.ajaxSetup({async:true});  //设置完就还原
		return rel;
	},"用户名已经存在");
	$("#addForm").validate({
		onkeyup:false, //关闭输入字符的验证，默认会没按下键盘就验证一次.因为在ajax中会多次提交. 关闭之后就默认失去焦点的时候验证
		rules:{
			username:{
				required:true,   
				//, nc:"zhangsan"    //使用nc方法验证, 传递参数"zhangsan"
				nameConflict:true
			}
		},
		messages:{
			username:{
				required:"用户名不能为空"
				//, nc:"用户名必须{0}"   //{0}会填充第一个参数, 即"zhangsan"
			}
		}
	});
	-------------------
	使用remote:
	rules:{
		username:{
			required:true,
			/*
			使用remote可以进行远程验证，只用输入地址即可，会自动将
			username=value值通过参数传递，返回的值必须是json，而且
			只能有true和false,如果是true表示验证成功，false表示验证失败
			*/
			remote:"v.do"
		}
	},
	messages:{
		username:{
			required:"用户名不能为空",
			remote:"用户名已经存在"
		}
	},

将validate抽取出来一个就是文件:
	(function($){
		/**
		 * 继承jquery插件的方法，一定熟悉
		 */
		var __validate = $.fn.validate;
		$.fn.cms_validate = function(opts) {
			/**
			 * 希望在这里来定义规则
			 */
			var __rules = $.extend({
				username:"required",
				password:"required",
				age:"digits",
				ach:"number",
				email:"email",
				url:"url"
				},opts?(opts.rules||{}):{});
			var __messages = $.extend({
				username:"用户名不能为空",
				password:"用户密码不能为空",
				age:"年龄必须是整数",
				ach:"成绩必须为数字",
				email:"邮件的格式不正确",
				url:"链接地址不正确"
			},opts?(opts.messages||{}):{});
			
			var __opts = $.extend((opts||{}),{
				rules:__rules,
				messages:__messages
			});
			//完成了prototype的继承
			$.extend($.fn.validate.prototype,__opts||{});
			__validate.call(this,__opts);
		};
	})(jQuery);	


comet:
服务端主动推送消息到客户端的3种方式:
	1. 长连接(comet就是这种方式)
		基于流的和基于长轮询的
	2. websocket (要html5)
	3. flash

comet之前是通过客户端不断请求来获取数据
	function pollData() {
		$.get("first.do",function(data){
			$("#content").append(data+"<br/>");
		},"html");
	}
	setInterval(pollData,5000);

comet的长连接方式(很多浏览器不支持ajax状态码=3的时候做操作, 所以不常用这种方式):
	jsp:
		$(function(){
			var xhr = createXmlHttpRequest();
			xhr.open("POST","second.do",true);
			//由于jquery没有办法支持不同的状态码的判断，所以需要通过原始的ajax来处理
			var pos = 0;
			xhr.onreadystatechange = function() {
				//让状态码等于3就可以保证两端一直进行连接，这是实现长连接的stream的方式
				if(xhr.readyState==3&&xhr.status==200) {
					$("#content").append(xhr.responseText.substring(pos)+",");
					pos = xhr.responseText.length;
				}
				/*
				基于长连接的方式，由于状态码是在3的时候出来数据，对于很多浏览器而言并不支持
				在状态为处理中的时候传数据，所以，限制很大。所以需要使用新的方式
				长轮询的方式，这种方式，是目前使用最多的方式
				*/
				
			};
			xhr.send();
		});
	servlet(要实现CometProcessor, 就不需要覆盖doGet和doPost方法了):
		public class SecondServlet extends HttpServlet implements CometProcessor {
		    public void event(CometEvent event) throws IOException{
		    	/*
		    	 * event方法用来处理各种请求，可以根据状态的不同得到各种响应
		    	 * 同时可以不断根据自己的需求像客户端发送信息
		    	 */
		    	HttpServletResponse resp = event.getHttpServletResponse();
		    	HttpServletRequest req = event.getHttpServletRequest();
		    	//对于event而言，会存在多种状态，在begin的时候可以开始获取数据
		    	if(event.getEventType()==CometEvent.EventType.BEGIN) {
		    		System.out.println(req.getSession().getId());
		    		//在begin的状态进行数据写操作
		    		log(req.getSession().getId()+"连接建立成功");
		    		new Thread(new RandomThread(resp)).start();
		    	} else if(event.getEventType()==CometEvent.EventType.END) {
		    		//请求结束的时候执行
		    		log(req.getSession().getId()+"已经结束");
		    		event.close();
		    	} else if(event.getEventType()==CometEvent.EventType.ERROR) {
		    		//发送错误的时候处理
		    		log(req.getSession().getId()+"发送错误");
		    		event.close();
		    	} else if(event.getEventType()==CometEvent.EventType.READ) {
		    		//还正读取数据的状态
		    		throw new RuntimeException("该状态无法进行操作");
		    	}
		    }

			public void init() throws ServletException {
				super.init();
			}
		}
	RandomThread:
		public class RandomThread implements Runnable {
			private final static Random ran = new Random();
			private boolean running = true;
			private HttpServletResponse connect;

			public RandomThread(HttpServletResponse connect) {
				this.connect = connect;
			}
			
			public void run() {
				while(running) {
					try {
						Thread.sleep(5000);
						PrintWriter out = connect.getWriter();
						int num = ran.nextInt(100);
						System.out.println("send:"+num);
						/*
						 *基于流的方式由于整个过程仅仅用一个连接，所以全部都使用同一个
						 *response来进行传递，所以不能关闭流
						 */
						out.println(num+"");
						//必须刷新
						out.flush();
						/**
						 * 基于长轮询的方式，每一次发送完信息，都会建立一个新的请求
						 * 当建立了新请求之后，原有repsonse就没有意义了，必须关闭
						 */
						// out.close();
						// connect = null;
					} catch (InterruptedException e) {
						e.printStackTrace();
					} catch (IOException e) {
						e.printStackTrace();
					}
				}
			}
		}

comet的长轮询的方式:
	jsp:
		$(function(){
			function poll() {
				var xhr = createXmlHttpRequest();
				xhr.open("POST","second.do",true);
				xhr.onreadystatechange = function() {
					//长轮询的方式是每一次提交都是一个完整的请求所以应该在状态码为4的时候处理
					if(xhr.readyState==4&&xhr.status==200) {
						$("#content").append(xhr.responseText);
						//再次建立连接
						poll();
					}
					
				};
				xhr.send();
			}
			poll();
		});
	RandomThread 不同:
		/**
		 * 基于长轮询的方式，每一次发送完信息，都会建立一个新的请求
		 * 当建立了新请求之后，原有repsonse就没有意义了，必须关闭
		 */
		out.close();
		connect = null;


上面的列子,在第二个RamdomThread正在sleep的时候, 可能第一个线程把connect赋值为null, 
导致第二个线程在执行PrintWriter out = connect.getWriter();出现空指针异常.
还有上面线程中只有一个response对象, 每次发送的时候只会发送给当前访问的浏览器,其他浏览器不能接收, 所以该成map

改进上面的例子:
MessageSender:
	public class MessageSender implements Runnable {
		private String msg;
		private Map<String,HttpServletResponse> cons = new HashMap<String, HttpServletResponse>();
		private boolean running = true;
		private boolean hasMsg = false;
		private boolean isPoll = true;

		public void close() {
			running = false;
		}
		
		//synchronized方法默认就是通过this做钥匙
		public synchronized void sendMsg(String msg) {  
			this.msg = msg;
			hasMsg = true;
			this.notify();
		}
		
		//设置是否是长轮询的方式，默认为true
		public void setPoll(boolean isPoll) {
			this.isPoll = isPoll;
		}
		
		public void setConnect(String sessionId,HttpServletResponse connect) {
			synchronized(cons) {    //synchronized 只需要用一个不为空的对象来做钥匙
				cons.put(sessionId, connect);
				cons.notify();
			}
		}
		
		@Override
		public void run() {
			while(running) {
				if(!hasMsg) {
					try {
						synchronized (this) {
							//没有消息就等着
							this.wait();
						}
					} catch (Exception e) {
					}
				}
				String sendMessage = msg; //马上保存下来, 以免被其他线程改掉
				hasMsg = false;
				msg = null;
				try {
					//如果没有connect同样让其等待
					if(cons.size()<=0){
						synchronized (cons) {  //这里的key不能用this了,因为在唤醒线程的时候会随机唤醒一个(同一个锁的)等待线程
							cons.wait();
						}
					}
					//创建一个新的对象来处理请求  转换成list来遍历发送, 因为有可能在遍历map的时候,调用setConnect改变map
					List<HttpServletResponse> tcons = new ArrayList<HttpServletResponse>();
					for(String key:cons.keySet()) {
						tcons.add(cons.get(key));
					}
					for(HttpServletResponse connect:tcons) {
						PrintWriter out = connect.getWriter();
						System.out.println("preparing:"+sendMessage);
						out.println(sendMessage);
						out.flush();
						//如果是长轮询的方式，需要释放资源
						if(isPoll) {
							out.close();
							connect = null;
						}
					}
					if(isPoll) {   
						cons.clear();  //下一次连接的时候会重新把response加到map中
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
	}

Servlet:
	public class CometServlet extends HttpServlet implements CometProcessor {
		private static final long serialVersionUID = 1L;
		private MessageSender sender;
		private static Random ran = new Random();
		
		/*把RandomThread直接写在内部, 保证产生的随机数在各个客户端看到都一致*/
		private class RandomTestThread implements Runnable {
			@Override
			public void run() {
				while(true) {
					try {
						Thread.sleep(15000);
						int num = ran.nextInt(1000);
						System.out.println("ready:"+num);
						sender.sendMsg(String.valueOf(num));
					} catch (InterruptedException e) {
						e.printStackTrace();
					}
				}
			}
		}

	    public void event(CometEvent event) throws IOException{
	    	HttpServletResponse resp = event.getHttpServletResponse();
	    	HttpServletRequest req = event.getHttpServletRequest();
	    	String sessionId = req.getSession().getId();
	    	//对于event而言，会存在多种状态，在begin的时候可以开始获取数据
	    	if(event.getEventType()==CometEvent.EventType.BEGIN) {
	    		log(sessionId+"连接建立成功");
	    		sender.setConnect(sessionId,resp);
	    	} else if(event.getEventType()==CometEvent.EventType.END) {
	    		log(sessionId+"已经结束");
	    		event.close();
	    	} else if(event.getEventType()==CometEvent.EventType.ERROR) {
	    		log(sessionId+"发送错误");
	    		//event.close();   //firefox在长时间不响应之后会出现error, 这时不能event.close(),否则response会被释放
	    	} else if(event.getEventType()==CometEvent.EventType.READ) {
	    		throw new RuntimeException("该状态无法进行操作");
	    	}
	    }

		@Override
		public void init() throws ServletException {
			//启动线程
			sender = new MessageSender();
			Thread ts = new Thread(sender);
			ts.setDaemon(true);
			ts.start();
			new Thread(new RandomTestThread()).start();
			super.init();
		}
		
		@Override
		public void destroy() {
			sender.close();
			super.destroy();
		}
	}

jsp:
	$(function(){
		function poll() {    //poll轮询
			$.post("comet.do",function(data){
				$("#content").append(data+",");
				poll();
			},"html");
		}
		poll();
	});
