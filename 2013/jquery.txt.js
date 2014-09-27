/*$(document).ready(function(){
	alert("hello jquery");
});*/
//经常使用下面的方式来替代上面的操作
$(function(){
	alert("hello query");
});

window.onload = function() {} //如果写两次, 后面写的方法会覆盖前面的方法
$(function(){ }); //JQuery对加载事件了做了特殊的处理，使得两个方法都会被加载

js对象与jquery对象的转换:
	js对象转换成jquery对象,只需通过$(jsObj);
	//每一个jquery节点都是一个数组，只要取出数组中的值，这个值就是js的节点，就只能用js的方法
	//当转换为js节点之后，就无法使用jquery的方法，如果要使用jquery的方法在通过$()进行封装就可以了
	($("li.abc")[0]).innerHTML = "abccdd";

选择器:
	<script type="text/javascript">
		$(function() {
			//取li中的所有a
			//$("li a").css("color","#f00");
			// $(".myList>li>a").css("color","#f00");  //>只取下一级的子元素
			
			//去li的节点其中li中的href属性是以http://为开头.       $=以什么结尾
			// $("a[href^='http://']").css("background","#00f").css("color","#fff");
			
			//取.myList的ul中的包含有a标签的li标签
			//$(".myList ul li:has('a')").css("background","#ff0");//
			
			//取id为li1的下一个兄弟节点li,仅仅只会去一个节点,
			//仅仅只会取相邻的节点，如果相邻的节点不是li就什么都取不出去
			//$("#li1+li").css("background","#ff0");
			
			//取id为li的下面的所有满足条件的兄弟节点
			// $("#li1~li").css("background","#ff0");
			
			// $("a[title]").css("color","#0f0");
			
			//页面中最先匹配的某个元素
			//alert($("li:first").html());
			//页面中最后匹配的元素
			//alert($("li:last").html());
			//获取满足要求的第一个li
			// $(".myList>li li:first-child").css("background","#f00");
			//获取没有兄弟节点的ul
			//alert($("ul:only-child").length);
		});
	</script>
	</head>
	<body>
	<ul class="myList">
		<li>
		<a href="http://jquery.com">JQuery site</a>
		<ul>
			<li><a href="css1.txt" title="mycss">CSS1</a></li>
			<li id="li1"><a href="css2.pdf" title="css2">CSS2</a></li>
			<li><a href="css3.html" title="this is my">CSS3</a></li>
			<li>Basic XPath</li>
		</ul>
		</li>
		<li>JQuery also supports
			<ul>
				<li>Custom selectors</li>
				<li>Form selectors</li>
			</ul>
		</li>
	</ul>
	</body>	

Jquery中的包装集:是通过$(exp)会筛选出页面的一组满足表达式的元素,这一组元素就属于Jquery包装集中的元素
比较常用的一些方法有:获取包装集中的元素个数(size()),通过某个下标获取包装集中的元素(get(index),获取后变成js元素而不是jquery对象),
某个元素在包装集中的位置(index(ele))
	//获取tr的元素个数
	alert($("tr").length);
	
	//当执行了get之后得到的结果是一个js的元素
	$($("tr").get(1)).css("color","#f00");
	
	//判断id为abc的tr在包装集的位置
	alert($("tr").index($("tr#abc")));
	
	//在表达式中通过,可以分割多个包装集，
	//但是如果包装集太多，而且有时候可以变动的时候，使用这种方式就不好操作
	$("tbody tr:eq(2),tr#abc").css("color","#f00");
	
	//可以为包装集使用add方法，可以将新加入的元素添加到包装集中
	$("tbody tr:eq(2)").add("thead tr td:eq(2)")
		.add("tr td:contains('3')").css("color","#f00");
	
	//not方法可以将包装集中的元素取消掉. 注意not只会过滤当前包装集, 而不会过滤其子元素
	$("tr").not("tr#abc").css("color","#f00");
	
	//获取tr中位置小于3的元素, 
	$("tr").filter("tr:lt(3)").css("color","#f00");
	
	//获取tr中的1,3形成一个新的包装集，返回的值就是新的包装集
	$("tr").css("background","#00f").slice(1,3).css("color","#f00");
	
	//从包装集的内部获取相应的元素，返回的值也是新包装集
	$("table").find("tr#abc").css("color","#f00");
	
	//is表示的是当前的包装集中是否有某个元素,$(table)的包装集中只有一个元素table,所以没有td
	alert($("table").is("td:contains('用户')"));
	
	//获取tbody中的所有元素为值等于3的tr子元素,返回的也是新包装集
	$("tbody").children("tr:eq(3)").css("color","#f00");
	
	//找到下一个子元素，只是一个元素，返回新包装集
	$("tr#abc").next().css("color","#ff0");
	
	//找到下一个组兄弟元素，所有元素，返回新包装集
	$("tr#abc").nextAll().css("color","#0f0");
	
	//parent仅仅只是返回上一级的div，返回新包装集
	$("#s1").parent("div").css("color","#0f0");
	
	//返回所有满足条件的父类节点，返回新包装集
	$("#s1").parents("div").css("color","#f00");
	
	//返回第3个tr的所有兄弟节点，返回新包装集
	var a = $("tr:eq(2)").siblings("tr").css("color","#f00").is("tr#abc");
	alert(a);

	//使用end可以返回上一个包装集
	$("tr:eq(2)").siblings("tr")
		.css("background","#00f").css("color","#fff")
		.end().css("background","#f00").css("color","#00f");
	
	$("#users tbody").clone().appendTo("#tus").find("tr:even").css("color","#f00")
		.end().end().find("tr:odd").css("color","#00f");
	
	//andSelf表示把所有的包装集合并在一起
	$("#users tbody").clone().appendTo("#tus").andSelf().find("td:contains('3')").css("color","#f00");
	
	//查询出了两个包装集，一个为tus的table一个为users的table，此时可以过滤得到users这个table
	//无法使用filter(tr)
	$("table").filter("table#users").css("color","#f00");
	//从users这个id的元素中过滤tr为2的元素
	$("#users").find("tr:eq(2)").css("background","#00f");

	--------------------
add:返回原包装集
not:返回原包装集
filter:返回原包装集
slice:返回新包装集
find:返回新包装集
clone:返回新包装集
next|nextAll|siblings|prev|prevAll|children|parent|parents都返回新包装集
end:返回前一个包装集
andSelf:返回合并后的包装集

add会添加新的元素到包装集,not和filter是在当前的包装集的基础上进行过滤和取消的.(注意,不包含子元素)slice,is类似
find,parent,children等就是在当前包装集的元素中去查找或者过滤值,而不是在包装集中过滤


map, has, each:
map:
	//通过map可以有效的将某个包装集中的元素转换为数组
	var ps = $("tbody td:nth-child(1)").map(function(){
		var n = $(this).next("td");
		var p = {"id":$(this).html(),"name":n.html()};
		return p;
	}).get();
	for(var i=0;i<ps.length;i++) {
		alert(ps[i].name);
	}
has:
	//获取存在有ul的li，返回的是新包装集
	$("li").has("ul").css("color","#f00");
	//获取存在有span的div，返回的是新包装集
	$("div").has("span").css("color","#f00");
each: 
	var ns = $("tbody td:nth-child(2)");
	/**
	 * 使用以下方法进行遍历基本上是基于js进行操作
	 * 对于jquery有自己的一套遍历方法，可以直接通过
	 * each函数进行遍历
	 */
	/*for(var i=0;i<ns.length;i++) {
		var nn = ns[i];//nn已经是js的节点
		var id = $(ns[i]).prev("td").html();
		var age = $(ns[i]).next("td").html();
		nn.innerHTML = id+">>"+nn.innerHTML+"("+age+")";
	}*/
	
	/**
	 * 对于JQuery而言，可以用each遍历所有的数组对象
	 * each中的匿名函数n表示的是数组的下标,从0开始
	 */
	ns.each(function(n){
		$(this).html($(this).prev("td").html()+
			"."+$(this).html()+
			"("+$(this).next("td").html()+")");	
	});

attr:
	$("tbody tr").each(function(n){
		alert($(this).attr("id")); //读取
		
		$(this).attr("title","aa");
		
		//可以基于json的格式来设置属性,甚至可以设置一些非html的属性，通过这些属性来做一些特殊处理
		//但是设置特殊属性的这种方式在jquery1.4之后就基本不使用，因为在1.4之后提供data方法
		$(this).attr({
			"title":$(this).children("td:eq(1)").html(),
			"id":$(this).children("td:eq(0)").html(),
			"personId":n
		});
		
		$("tr#2").removeAttr("personid"); //可以移除属性

		//设置所有a中以http为链接开头的超链接在新窗口打开
		$("a[href^='http://']").attr("target","_blank");
		
		//设置tbody中的tr的title属性，让属性的值为第几个tr
		$("tbody tr").attr("title",function(n){
			return "这是第"+(n+1)+"个tr";
		});
	});

data(把数据存储在标签中,类似于直接在标签上写属性,但直接在标签上写属性不是所有浏览器都支持):
	var props = initHeader();
	var users = getUsers(props);
	
	$(users).each(function(n){
		var str = "";
		for(var i=0;i<props.length;i++) {
			str+=this[props[i]]+",";
		}
		alert(str);
	});
	
	function getUsers(props) {
		var users = new Array();
		$("tbody tr").each(function(n){
			var user = new Object();
			
			$(this).find("td").each(function(tn){
				user[props[tn]] = $(this).html();
			});
			users.push(user);
		});
		return users;
	}
	
	function initHeader() {
		//可以将一些值存储在标签中，这个值不会通过属性的方式显示给用户
		// $("thead tr td:eq(0)").data("prop","id");
		// $("thead tr td:eq(1)").data("prop","username");
		// $("thead tr td:eq(2)").data("prop","age");
		// $("thead tr td:eq(3)").data("prop","password");
		var props = $("thead td").map(function(n){
			return $(this).attr("title");
		}).get();
		return props;
	}
	<tr>
		<td prop="id"  title="id"></td>

class:
	$(function() {
		//添加一个样式，removeClass是移除一个样式
		$("thead tr").addClass("addBg").addClass("bigger").removeClass("addBg");
		//判读是否存在某个样式
		alert($("thead tr").hasClass("bigger"));
		
		/*
		 * 为tr添加了两个事件，鼠标移上去和鼠标移走事件，当移上去的时候，添加样式，移走的删除样式
		 * 为了相对简单实现第一次做某个操作，第二个事件作某个操作这样的功能，JQuery提供
		 * toggleClass()-->这个方法指的是判断是否有这个类，如果有就删除，如果没有就添加
		 */
		/*("tbody tr").mouseover(function(){
			$(this).addClass("addBg");
		}).mouseout(function(){
			$(this).removeClass("addBg");
		});*/
		
		$("tbody tr").mouseover(changeBg).mouseout(changeBg);
	});
	
	function changeBg() {
		$(this).toggleClass("addBg");
	}

css:
	//JQuery通过css来指定样式，甚至完美支持opacity透明度
	$("#d1").css("height",90+"px").css("width",90+"px")
			.css("background","#00f").css("color","#fff")
			.css("opacity","0.6").height(100).width(100)
			.click(function(){
				//JQuery提供了一些非常常用的方法来处理常用样式,width,height
				$(this).width($(this).width()+20).height($(this).height()+20);
			});

form:
	$("#btn").click(function(){
		//获取表单的值
		alert($("#username").val());
		
		//设置表单的值
		$("#username").val("我来了");
		
		//checkbox得到的是一个数组，需要进行遍历
		$("input[name='interest']:checked").each(function(n){
			alert($(this).val());
		});
		
		//checkbox只能传入数组
		$("input[name='interest']").val(["足球","篮球","羽毛球"]);
		
		// alert($("input[name='sex']:checked").val());
		
		//$("input[name='sex']").val(["1"]);
		// $("input[name='sex'][value='1']").prop("checked","true");
		// alert($("input[name='sex']:checked").val());
		
		//能够获取select的值
		//alert($("#address").val());
		//获取select中的所有文本
		//alert($("#address").text());
		//注意:要一个空格，不让会找select被checked的元素
		//加个空格就是找子元素
		//alert($("#address :checked").text());
		//{username:xx,password:xx,interester:[2,1,],sex:x,address:add}
		$("#address").val(2);
	});

全选,反选小例子:
	<script type="text/javascript">
		$(function() {
			$("#all").click(function(){
				if($(this).prop("checked")) {
					//选中
					$("input[type='checkbox']").prop("checked",true);
				} else {
					$("input[type='checkbox']").prop("checked",false);
				}
			});
			$("#reverse").click(function(){
				var c = $("input[type='checkbox']:not(#all):checked");
				var nc = $("input[type='checkbox']:not(#all):not(:checked)");
				c.prop("checked",false);
				nc.prop("checked",true);
			});
		});
		
	</script>
	<body>
		<input type="checkbox"/><input type="checkbox"/><input type="checkbox"/><input type="checkbox"/><input type="checkbox"/>
		<input type="checkbox"/><input type="checkbox"/><input type="checkbox"/><input type="checkbox"/><input type="checkbox"/>
		<br/>
		<input type="checkbox" id="all"/><span>全选</span>
		<input type="button" id="reverse" value="反选"/>
	</body>


js event:
	var all = $("*");
	all.each(function(){
		var rel = this;
		this.onclick = function(event) {
			//1、获取事件发生的目标
			//需要根据不同的浏览器进行判断，微软的只知道window.event
			event = event?event:window.event;
			//IE不知道target而是使用srcElement来代替
			var target = event.target?event.target:event.srcElement;
			print("事件源:"+target.id+","+target.tagName+",事件对象:"+this.id);
			//模式的DOM0，会产生事件冒泡，可以通过event.stopPropagation()来取消事件的冒泡机制
			event.stopPropagation();
			//IE是通过这个变量来取消冒泡
			event.cancelBubble = true;
			//DOM0模型不支持事件捕获(先触发父元素的事件,然后再触发子元素的事件,一直玩下触发.与事件冒泡顺序相反)
			//而且DOM0模型的第二个问题是事件会被覆盖
			$("#child")[0].onclick = function(){
				print("abc");	
			}
			$("#child")[0].onclick = function(){  //后面的定义的会覆盖前面的
				print("bcd");	
			}
		}
	});
	function print(txt) {
		$("#content").append(txt+"<br/>");
	}
	------------------
	//使用了DOM2之后，可以满足事件的覆盖了，而且还提供了一个参数用来说明是进行事件冒泡还是捕获
	$("#child")[0].addEventListener("click",function(){
		print("abc");				
	});
	$("#child")[0].addEventListener("click",function(){ //当点击事件触发的时候,两个函数都会被执行
		print("bcd");				
	});
	------------------
	//IE 使用attachEvent. 没有第三个参数,不能控制是是事件冒泡还是事件捕获
	this.attachEvent("onclick",function(event){
		event = event?event:window.event;
		var target = event.target?event.target:event.srcElement;
		print("事件冒泡-->事件源:"+target.id+","+target.tagName+",事件对象:"+this.id);
	});
	//FF 使用addEventListener, 第三个参数true表示事件捕获, false表示事件冒泡
	this.addEventListener("click",function(event) {
		event = event?event:window.event;
		var target = event.target?event.target:event.srcElement;
		print("事件捕获-->事件源:"+target.id+","+target.tagName+",事件对象:"+this.id);
	},true); 

jquery event:
	$("*").bind("click",function(event){
		print(event.currentTarget.id+"--"+event.target.id);
		//对于JQuery依然存在事件，可以使用以下函数取消事件冒泡
		event.stopPropagation();
		//如果对于form或者a可能不希望继续提交或者继续访问超链接，
		//可以通过event.preventDefault阻止事件继续向下走
		//特别注意：这个和事件冒泡没有任何的关系
		event.preventDefault();
	})
	----------------------------
	//仅仅只会执行一次
	$("*").one("click",function(event){
		print(event.currentTarget.id+"--"+event.target.id);
	})
	----------------------------
	$("a[href='ccc']").bind("click",function(event){
		/*
		 * 使用trigger带来的好处有两个
		 * 1、可以在其他的对象中调用另外一个事件
		 * 2、可以为事件传递参数
		 * 使用trigger依然也存在事件冒泡
		 */
		$("#child").trigger("click",[2,3]);
		event.preventDefault();
	});
	---------------------------------
	$("a[href='ccc']").bind("click",function(event){
		/*
		 * 使用triggerHandler带来的好处是可以直接让调用的事件
		 * 不冒泡，不提交，带来的好处就是
		 * 写事件我们可以完全按照最正常的方式来写，不用考虑事件传递
		 * 在特殊的使用通过triggerHandler来调用就会阻止事件传递
		 */
		$("#child").triggerHandler("click",[2,3]);
		event.preventDefault();
	});
	------------------------------------
	//可以通过空格绑定多个事件         .test是命名空间,移除事件的时候可以使用.test来移除
	$("#child").bind("mouseover.test mouseout.test",function(event){
		$(this).toggleClass("bgc");
	});
	//取消了mouseout事件
	//$("#child").unbind("mouseout");
	
	//在移除事件的时候，可以直接通过命名空间一起移除
	$("a[href='ccc']").bind("click.test",function(event){
		print("a");
		event.preventDefault();
	});
	//移除一组事件
	$("*").unbind(".test");
	------------------------------------------
	$(".ccc").bind("click",function(event){
		alert($(this).html());
	});
	//基于bind所带来的问题是，当新增加元素的时候，没有办法为新元素绑定事件
	//需要重新使用bind来bind方法来绑定。
	$("#content").append("<div class='ccc'>bbbbb</div>"); 
	-----------------------------------------------
	$(".ccc").live("click",function(event){
		alert($(this).html());
	});
	/*
	 *  使用了Live事件之后，就有效解决了新元素无法绑定的问题
	 *  live事件存在的原理是通过事件委托的方式
	 *  事件委托是通过冒泡机制实现的
	 */
	$("#content").append("<div class='ccc'>bbbbb</div>");
	-----------------------------------
	//第二个参数可以指定相应的上下文，说明事件委派的根对象是什么
	//但是以下写法很难看，所以jquery在1.3之后提供delegate的方法来替代
	$(".ccc","#content").live("click",function(event){ //.ccc的点击事件只在#content这个上下文中有效
		alert($(this).html());
	});

	$("#content").append("<div class='ccc'>bbbbb</div>");
	$("#abc").append("<div class='ccc'>bbbbb</div>");
	---------------------------------------
	//closest就是向上找，如果自己满足就返回，如果自己不满足，继续向上走
	//由于closest可以从自己找，所以closet非常适合做事件委派
	//$("#ll").closest("li").css("color","#ff0");
	/*
	 * 事件委托的原理
	 * 此时每一个事件只要被点击到，他都会冒泡到document去
	 * 所以以下事件会被处理
	 * 在处理时，判断一下该事件是否是我要处理的对象就可以了
	 */
	$("#content").bind("click",function(event){
		var obj = $(event.target).closest(".ccc");
		if((obj[0])==event.target) {
			alert("abc");
		}
	});
	/*
	 * 对于live而言就是使用事件委派的方式，但是使用这个方式会带来如下问题
	 * 1、每个事件都会冒泡到document(或者上下文)上面去，开销变大
	 * 2、使用Live不支持一些特殊的事件
	 * 对于live方法而已，它提供了第二参数来说明绑定的上下文
	 */
	 -----------------------------------
	 /*
	  * 由于live事件写法很怪，所以在1.4之后提供了delegate来完成事件委派
	  * $("#content")表示的是作用域，第一个参数表示的是绑定对象
	  * 此时live就不再被使用了，在未来的版本live会被取消
	  * 目前如果要做事件委派可以有多种方法，使得事件的调用选择很多，JQuery在1.8之后
	  * 就统一使用on和off来替代bind,live和delegate
	  */
	 $("#content").delegate(".ccc","click",function(event){
	 	alert($(this).html());
	 });
	 $("#content").append("<div class='ccc'>bbbbb</div>");
	 $("#abc").append("<div class='ccc'>bbbbb</div>");
	 -------------------------------
 	//此时on的第二个参数没有设定，就认为是对.ccc绑定
 	//这显然就是模拟了bind
 	// $(".ccc").on("click",runc);
 	//当第二参数有值的时候，调用的对象就作为委派根对象
 	$("#content").on("click",".ccc",runc);  //jquery1.8才有on
 	$("#content").append("<div class='ccc'>dddddd</div>");
 	$("#abc").append("<div class='ccc'>dddddd</div>")
	 function runc(event) {
	 	alert($(this).html());
	 }
	 -------------------------------
	 //jqeury的mouseout和mouseover(dom也有)会有事件冒泡,使用mouseenter和mouseleave(jquery才有的事件)不会有事件冒泡
	 //如果同时使用mouseenter和mouseleave,可以使用$("#xx").hover(over, out), 
	 //over, out分别对应mouseenter和mouseleave的回调方法. hover也是没有事件冒泡的

animate:
	/**
	 * 可以使用jquery说提供的show和hide来完成带缓动的隐藏和显示效果
	 * 由于两个方法比较类似，可以直接使用toggle来完成操作
	 */
	$(".topicList h3").toggle(function(){ 
		$(this).next("ul").show(1000);
	},function(){
		$(this).next("ul").hide(1000);
	});
	
	/**
	 * toggle如果有两个参数，并且都是函数，表示第一次点击执行第一个函数
	 * 第二次点击执行第二个函数
	 */
	$(".topicList h3").toggle(topicHandler,topicHandler);
	
	function topicHandler() {
		//使用fadeIn,show,slideDown可以完成某个容器的显示
		//使用fadeOut,hide,slideUp可以完成某个容器的隐藏
		//所以可以通过各个的toggle来完成两个之间的轮换
		$(this).next("ul").fadeToggle(1000);
	}

	-------------------------------------
	$("#go").click(function(){
	  $("#block").css({"font-size":"10em","position":"relative"}).animate({ 
	  	 width:1000,
	  	 opacity:0.5
	  }, 'slow' );
	});

常用工具方法:
	/*
	 * 在jQuery中$符号仅仅只是一个别名，当时有$引用的时候其实等于使用jQuery引用
	 * 此时带来的问题就是，其他的很多js框架(prototype之类的框架)都习惯用$来引用
	 * 自己的关键对象，此时如果多个js库并存的时候，就会发生冲突
	 * 在JQuery中定义了一个noConfilct()方法来解决冲突，当使用了这个方法之后，$符号
	 * 就不能再在JQuery中使用了，在JQuery中就仅仅只能使用jQuery了
	 * 但是此时如果一直使用jQuery来引用会影响开发效率，所以常用的一种方式是
	 * var $j = JQuery.noConflict();此时就可以用$j来替代$
	 */
	var $j = jQuery.noConflict();
	$j("#users").css("color","#f00");

	//检查版本是否是IE
	//alert($.browser.msie);
	if($.browser.msie) {
		//获取IE的版本号
		alert($.browser.version);
	}
	
	var person = {name:"校长",age:29};
	//不仅可以变量数组，还可以遍历对象，如果遍历的是数组，只有一个参数
	//遍历对象有两个参数
	$.each(person,function(key,value){
		alert(key+","+value);
	});
	
	var person1 = {name:"校长",age:29,address:"昭通"};
	var person2 = {name:"女校长",age:45};
	// 会用第二个参数的属性来覆盖第一个参数的属性，没有的就不进行覆盖. 第二个不会有变化
	var p = $.extend(person1,person2);
	alert(person1.name+","+person1.age+","+person1.address); //女校长,45, 昭通
	alert(p.name+","+p.age+","+p.address); //女校长,45, 昭通
	alert(person2.name+","+person2.age); //女校长,45
	var po = new Object();
	//此时会把person2的值覆盖到person1中，并且存储到po中,并返回po. 此时不改变person1
	var p = $.extend(po,person1,person2);
	alert(person1.name+","+person1.age+","+person1.address); //校长,29,昭通
	alert(p.name+","+p.age+","+p.address); //女校长,45,昭通
	alert(po.name+","+po.age+","+po.address); //女校长,45,昭通
	/**
	 * extend在写插件的时候极为有用
	 */
	//grep有两个参数，第一个表示元素值，第二个表示索引
	var as = $.grep([1,2,3,4,5],function(n,i){
		return n%2==0;
	});
	// alert(as);

	var as = $.grep($("table tr"),function(n,i){
		//也可以传入包装集
		return $(n).find("td").is(":contains('张')");
	});
	// $(as).css("color","red");
	
	//如果找到返回所在下标，如果没有找到返回-1
	alert($.inArray(23,[1,23,4,]));
	
	alert($("table tr").toArray());
	
	alert($.makeArray($("table tr")));
	
	//可以对元素的属性进行统一的处理
	var ms = $.map([2,4,6,8],function(n){
		return n*10;
	});
	alert(ms);
	
	var ms = $.map({name:"aaa",age:123},function(value,key){ //注意,第一个参数是value而不是key
		var v="";
		if(key=='name') {
			v = "老张";
			return v;
		}
		if(key=="age") {
			if(value>100) v=99;
			return v;
		}
	});
	alert(ms);
	
	var a1 = [1,2,3,4];
	var a2 = [2,34,5];
	alert($.merge(a1,a2)); //合并数组
	alert(a1);
	
	var p = {username:"招生",age:23};
	alert($.param(p)); //返回url可以使用的参数形式username=xx&age=23


插件:
	/**
	 * 直接通过$.方法名称就可以定义一个全局的插件，这种定义带来的问题
	 * 1、一般插件都需要通过一个独立的js文件来存储，命名的规则的确定
	 * 2、如果将来$这个符号被jQuery.noConfilct之后，如何保证还能继续使用
	 */
	/**
	 * 直接通过$.方法名称就可以定义一个全局的插件，这种定义带来的问题
	 * 1、一般插件都需要通过一个独立的js文件来存储，命名的规则的确定  (如jquery.xx.validate.js)
	 * 2、如果将来$这个符号被jQuery.noConfilct之后，如何保证还能继续使用
	 * 	  解决方式:1、不再通过$，而是直接通过jQuery来调用,但是会增加工作量
	 *           2、通过闭包来解决，将插件的定义全部放到一个闭包中
	 *				(function($){
	 *
	 *				})(jQuery)
	 * 3、如何为插件确定参数，如果一个方法存在7个参数
	 */

	 (function($){
	 	$.fixedTopicWidth = function(str,options) {
	 		var setting = $.extend({length:50,fill:null,fillLength:3}
	 				,options||{})
	 		//(abcddddddddddddddddd,12,".")-->(abcdddddd...)
	 		var pos = setting.length-str.length;
	 		if(pos>0) {
	 			return str;
	 		} else {
	 			if(setting.fill) {
	 				var fs = "";
	 				for(var i=0;i<setting.fillLength;i++) {
	 					fs=fs+setting.fill;
	 				}
	 				return (str.substr(0,setting.length-3)+fs);
	 			} else {
	 				return str.substr(0,setting.length);
	 			}
	 		}
	 	};
	 	
	 	/**
	 	 * 要定义包装集的插件,完全可以使用jQuery.prototype = xx. 然后就可以使用$().xx
	 	 * 在jquery中不建议使用jQuery.prototype来定义包装集的插件,jQuery专门定义了一个jQuery.fn = jQuery.protytype
	 	 */
	 	$.fn.formatTopic = function(options) {   
	 		this.each(function(n){
	 			//这个时候的this就不再是包装集对象，而是这个闭包对象
	 			//此时闭包对象中的引用是一个html的节点，要访问就需要使用$(this)
	 			$(this).html($.fixedTopicWidth($(this).html(),options));
	 		});
	 	}
	 	
	 	/**
	 	 * 使用$.fn来创建包装集插件
	 	 */
	 	$.fn.setColor = function(){
	 		//此时的this对象指的是整个包装集对象，已经被封装为包装集
	 		//就不用在使用$(this)来封装
	 		this.css("color","#0f0");
	 		//基于包装集的函数一定要能够支持链式结构
	 		return this;
	 	}
	 	
	 	/**
	 	 * 如果state为true就表示readOnly,否则表示取消readonly
	 	 */
	 	$.fn.setReadOnly = function(state) {
	 		//1、找到所有的文本框
	 		return this.filter("input:text")
	 			.prop("readOnly",state)
	 			.css("opacity",state?0.5:1.0);
	 	}
	 })(jQuery)
	 ----------------------------------
	 (function($){
	 	$.fn.movieSlice = function(options){
	 		var setting = $.extend({
	 			movieElement:"#movieElement",
	 			next:"#nextMovie",
	 			prev:"#prevMovie",
	 			first:"#firstMovie",
	 			last:"#lastMovie",
	 			replacePath:function(str,path) {
	 				if(path) {
	 					return str.replace(/thumbnail/,path);
	 				} else {
	 					return str.replace(/thumbnail/,"movie");
	 				}
	 			}
	 		},options||{});
	 		var thumbnails = this;
	 		/**
	 		 * 为每一个缩略图设定相应的数据，以此可以在showPhoto通过下标访问
	 		 */
	 		thumbnails.each(function(n){
	 			$(this).data("photo-number",n);
	 		});
	 		setting.cur = 0;
	 		this.on("click",function(event){
	 			showPhoto($(this).data("photo-number"));
	 		});
	 		$(setting.movieElement).on("click",function(){
	 			showPhoto(setting.cur+1);
	 		});
	 		$(setting.prev).on("click",function(){showPhoto(setting.cur-1)});
	 		$(setting.next).on("click",function(){showPhoto(setting.cur+1)});
	 		$(setting.first).on("click",function(){showPhoto(0)});
	 		$(setting.last).on("click",function(){showPhoto(thumbnails.length-1)});
	 		
	 		function showPhoto(index) {
	 			//可以在点击之后取消click
	 			$(setting.movieElement).off("click");
	 			if(index<0) index = thumbnails.length-1;
	 			if(index>=thumbnails.length) index=0;
	 			$(setting.movieElement)
	 				.attr("src",setting.replacePath(thumbnails[index].src))
	 				.css("opacity","0.0").animate({opacity:1.0},1000,function(){
	 					//当动画加载完毕之后，开启click
	 					$(setting.movieElement).on("click",function(){
	 						showPhoto(setting.cur+1);
	 					});
	 				});
	 			setting.cur = index;
	 		}
	 		showPhoto(0)
	 		return this;
	 	};
	 })(jQuery)


jQuery ajax:
load:
	//1、创建Ajax的方式，可以直接为包装器创建，这样，ajax之后的内容会自动加载到包装器中
	/*
	在URL中可以通过空格来插入相应的选择器，以下表示去01.html页面中获取id为c的元素加载进来
	*/
	//$("#content").load("01.html #c");
	//当使用了第二参数传值 之后，就自动转换为post请求
	$("#content").load("01.html",{id:11},function(data){
		//function这个回调函数表示，加载完成之后的一些处理方式
		//1、已经是完成了对content这个内容的处理之后才会调用该函数
		//alert(data);
		
		/*
		特别注意以下讲解：
		首先data是一个html类型的值，通过$(data)之后，会讲这个值包装为JQuery对象
		在jQuery中包装一个document是这样来处理，会将所有body中的根节点包装到包装器中
		*/
		/*   01.html body中的内容:
			<h1>哈哈哈！加载成功</h1>
			<div id="c">
				呵呵呵！加载成功
				<div id="c1">
				这个是C1中的内容
				</div>
			</div>
		*/
		//如果要获取h1的值,因为h1是根对象，会被包装到包装器中，只能通过filter来获取
		alert($(data).filter("h1").html());
		//id为c1的元素是包装器中的元素，所以需要通过find来获取
		alert($(data).find("#c1").html());
		
		alert($(data).filter("#c").html());
	});

get:
	$.get("02.xml",function(data) {
		//如果使用的返回类型是xml的话，data就是一个xml的元素. 
		// alert(data.getElementsByTagName("h1").length);
		//如果处理的是xml只能通过text来去元素，不支持html()取元素
		//特别注意:得到的值不会把根对象包装在包装器中，都需要通过find来找元素
		alert($(data).find("person").text());
	},"xml");
	
	//获取类型为json的值，一定注意json的格式必须符合规格
	$.get("user.json",function(data){
		alert(data.name);
	},"json");
	//以上方法和$.getJSON一模一样

jqeury实现联动:
	<script type="text/javascript">
	$(function(){
		var address;
		$.get("Area.xml",function(data){
			address = data;
			init();
		});
		function init() {
			$(address).find("province").each(function(n){
				$("#province").append("<option value='"+$(this).attr("value")+"'>"+$(this).attr("name")+"</option>")
			});
			$("#province").change(function(event){
				$(address).find("province[value='"+$(this).val()+"'] city").each(function(n){
					$("#city").append("<option value='"+$(this).attr("value")+"'>"+$(this).attr("name")+"</option>")
				});
			});
			$("#city").change(function(event){
				$(address).find("city[value='"+$(this).val()+"'] country").each(function(n){
					$("#country").append("<option value='"+$(this).attr("value")+"'>"+$(this).attr("name")+"</option>")
				});
			});
		}
	});
	</script>
	</head>
	<body>
	<select id="province"><option>请选择省份</option></select>
	<select id="city"><option>请选择城市</option></select>
	<select id="country"><option>请选择县份</option></select>
	</body>

将联动写成插件:
jquery.address.js:
	(function($){
		$.fn.address = function(opt) {
			var opts = $.extend({
				url:"Area.xml",
				pn:"province",
				cin:"city",
				con:"country",
				attrName:"name",
				attrValue:"value",
				countryChange:function(){
					
				}
			},opt||{});
			//定义一个变量指向this，方便在闭包中处理
			var target = this;
			opts.ps = $("<select id='province'><option>请选择省份</option></select>");
			opts.cis = $("<select id='city'><option>请选择市区</option></select>");
			opts.cos = $("<select id='country'><option>请选择县份</option></select>");
			//通过Ajax加载文件，并且初始化所有的xml节点
			opts.areaXml;
			$.get(opts.url,function(data){
				opts.areaXml = data;
				setAddress();
			});
			function setAddress() {
				//1、初始化相应省份节点
				setupNode(opts.pn,opts.ps);
				opts.ps.change(function(){
					opts.cos.find("option:gt(0)").remove();
					opts.cis.find("option:gt(0)").remove();
					setupNode(opts.pn+"[value='"+$(this).val()+"'] "+opts.cin,opts.cis);
				});
				opts.cis.change(function(){
					opts.cos.find("option:gt(0)").remove();
					setupNode(opts.cin+"[value='"+$(this).val()+"'] "+opts.con,opts.cos);
				});
				opts.cos.change(opts.countryChange);
				target.append($("<span class='address_c'></span>").append(opts.ps));
				target.append($("<span class='address_c'></span>").append(opts.cis));
				target.append($("<span class='address_c'></span>").append(opts.cos));
			}
			function setupNode(path,node) {
				$(opts.areaXml).find(path).each(function(){
					node.append(createNode(this));
				});
			}
			function createNode(obj) {
				return "<option value='"+$(obj).attr(opts.attrValue)+"'>"+$(obj).attr(opts.attrName)+"</option>";
			}
			return this;
		};
	})(jQuery);
页面调用:
	$(function(){
		$("#address").address({
			countryChange:function(){
				$("#test").append($(this).val());
			}
		});
	});


//格式化为浏览器的超链接的参数传递字符串aaa=xx&bb=xx
alert($("form").serialize());
//格式化为相应的json数组，不是字符串
alert($("form").serializeArray());
	
JQuery的1.5之后提供了Deferred和Promise两个对象来处理相应的同步请求
在1.5之前，当调用了一个ajax之后，会返回xhRequest。在1.5之后就返回promise对象，
promise对象可以来获取不同情况的处理方式
done和fail:
	//调用ajax之后返回的是一个promise对象。可以通过这个对象来进行成功或者失败之后回调处理
	var promise = $.ajax("02.html",{dataType:"html"});
	//使用promise对象可以设定在执行完成和失败的操作
	promise.done(function(data){
		//成功的时候处理的操作
		alert(data);
		alert(($(data).filter("h1")).length);
		
	}).fail(function(data){
		//失败的时候处理的操作
	}).done(function(data){
		//使用这种方式，可以执行多个回调函数操作
		$("body").html($(data).filter("h1").html());
	});*/
	
then: 可以使用then来替换done和fail第一个参数就是成功之后的操作.第二个参数就是失败之后的处理函数
	promise.then(function(data){
		alert(data);
	},function(data){
		alert(data);
	})

when: 可以使用when来指定在多个ajax程序执行完毕之后才进行操作
	 可以传入多个调用，在处理的时候可以通过多个参数来接受信息
	var promise = $.when($.ajax("02.html",{dataType:"html"})
			,$.ajax("03.html",{dataType:"html"}));
	
	promise.done(function(data1,data2){
		alert(data1);
		alert(data2);
	}).fail(function(){
		
	})

为function创建defered:
	function wait() {
		var def = $.Deferred();
		setTimeout(function(){
			alert("invoke");
		},1000)
	}
	wait();  //当执行到setTimeout会异步, 先执行alert("aa");如果要实现同步,通过defered
	alert("aa");
	-----------------
	function wait() {
		//setTimeout是异步，如果需要保证可以进行同步操作
		//需要通过promise来操作，通过$.Deferred对象的.promise()方法可以获取promised对象
		var def = $.Deferred();
		setTimeout(function(){
			alert("invoke");
			//通过调用def的resolve来指定函数已经执行完成
			//执行成功使用resolve，执行失败使用reject来指定
			//def.resolve("abc");
			//第一个参数是上下文对象
			def.rejectWith($("div"),["ok"]);
		},1000)
		
		return def.promise();
	}
	wait().done(function(value){  //value等于resolve(value)中的参数
		alert("success:"+value);
	}).fail(function(value){
		//默认情况this是指向这个函数的对象，如果希望获取相应的上下文做this
		//可以在调用的时候通过def.rejectWith("上下文对象")
		alert(this.append("abc"));
		alert("fail:"+value[0])
	});

pipe:
	pipe表示可以返回一个promise对象，这样就可以支持链式变成
	第一个pipe的返回值会传入到第二个pipe的参数中
	只要有一个pipe返回了reject之后pipe默认都是返回reject的
	最后会在fail中处理
	$("#content").promise().pipe(function(data){
		//this就是包装集对象
		//$(this).html("abc");
		var n = 10;
		//只要返回一个值就表示是正确信息
		if(n>5) {
			var def = $.Deferred();
			def.reject("error");
			return def;
		} else {
			return n;				
		}
	}).pipe(function(value){
		//不管进行多少个pipe，this都是包装集
		//$(this).html("abc");
		return value+10;
	},function(value){
		//第二个参数返回错误信息
		alert(value);
		//当其中一个pipe返回的是错误信息之后，这里就直接返回错误
		//如果希望返回正确信息，要通过def.resolve来处理
		return value;
	}).done(function(value) {
		alert(value);
	}).fail(function(value){
		alert("fail:"+value);
	});
	-----------------------------
	以下形成了一种基于ajax的链式结构，通过这种链式结构可以非常方便的来处理一些
	链式验证获取请求
	$.ajax("01.html",{dataType:"html"}).pipe(function (data){
		alert(data);
		return $.ajax("02.html",{dataType:"html"});
	}).pipe(function(data){
		alert(data);
		return "done";
	}).done(function(data){
		alert(data);
	});
	----------------------------
	$("#btn").click(function(){
		var username = $("#username").val();
		var password = $("#password").val();
		//验证用户
		$.getJSON("users.json").pipe(function(data){
			if(checkUser(data,username,password)) {
				//如果正确，直接返回第二次验证
				return $.getJSON("status.json");
			} else {
				//如果错误就返回错误信息
				var def = $.Deferred();
				def.reject("用户名或者密码不正确");
				return def;
			}
		}).pipe(function(data){
			alert(username);
			if(checkStatus(data,username)) {
				return username;
			} else {
				var def = $.Deferred();
				def.reject("用户已经被停用，请与管理员联系");
				return def;
			}
		}).done(function(data){
			$("#content").html("欢迎你"+data+"登录我们的系统！");
		}).fail(function(data){
			$("#content").html(data);
		});;
	})
	
	function checkStatus(data,username) {
		for(var i=0;i<data.length;i++) {
			if(data[i]["name"]==username) {
				alert(data[i]["name"]+","+data[i]["status"]);
				if(data[i]["status"]==1) {
					return true;
				}
			}
		}
		return false;
	}
	
	function checkUser(data,username,password) {
		for(var i=0;i<data.length;i++) {
			if(data[i]["name"]==username) {
				if(data[i]["password"]==password) {
					return true;
				}
			}
		}
		return false;
	}

dialog小例子:
	<style>
		#dialog{
			height:400px;
			width:400px;
			border: 6px solid #ccc;
			position:fixed;
			z-index:100;
			left:50%;
			margin-left:-200px;
			top:100px;
			display:none;
		}
		#dialog h1.title {
			font-size:12px;
			margin:0px;
			padding:0px;
			height:30px;
			background:#dfd;
		}
		
		#dialog h1 span {
			font-weight:normal;
			padding:2px 5px;
			border:1px solid #acf;
			position:relative;
			left:360px;
			top:6px;
			cursor:pointer;
		}
		
		#dialog #content {
			background:#ee9;
			height:370px;
			overflow:scroll;
		}
		#zzc {
			height:100%;
			width:100%;
			position:fixed;
			top:0px;
			left:0px;
			background:#999;
			z-index:99;
			display:none;
		}
	</style>
	<script type="text/javascript" src="../jquery-1.8.3.js"></script>
	<script type="text/javascript">
		$(function(){
			$("#dialog h1.title span").click(function(){
				$("#dialog").fadeOut(1000);
				$("#zzc").css("display","none");
			});
			$("#diaBtn").click(function(){
				var url = $("#url").val();
				if(!url) url = "01.html";
				$("#dialog").find("#content").load(url).end().fadeIn(1000);
				$("#zzc").css({
					opacity:0.3,
					display:"block"
				});
				
			});
		});
	</script>

	</head>
	<body>
	<div id="loadDialog"><input type="text" id="url"/><input type="button" id="diaBtn"/></div>
	<div id="zzc"></div>
	<div>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	<h1>我们自己定义的对话框</h1>
	</div>
	<div id="dialog">
		<h1 class="title"><span>关闭</span></h1>
		<div id="content"></div>
	</div>
	</body>
	</html>

无线滚动小例子:
	<script type="text/javascript">
		$(function(){
			var index = 1;
			loadData();
			$(window).scroll(function(){
				var pa = $(this).scrollTop()+20>=$(document).height()-$(this).height();
				if(index>10) {
					$("body").append("加载完成");
					$(this).off("scroll");
				}
				if(pa) {
					loadData();
				}
			});
			function loadData() {
				index++;
				$.get("05_con.html",function(data){
					$("#content").append(data);
				},"html");
			}
		});
	</script>

	</head>
	<body>
	<h1>无限滚动加载</h1>
	<div id="content">
	</div>
	</body>


