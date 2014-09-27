<!--可以直接在html页面中，在script标签中写相应的js的代码
<script type="text/javascript">
alert("hello world");
</script>-->
<!--可以引入外部文件，通过src来指定外部文件的位置，特别注意不能省略script的结束标记-->
<script type="text/javascript" src="hello.js"></script>

var: 
	//对于js而言，是没有数据类型的，全部都是通过var来完成变量的创建
	/*var a = 19;
	alert(a);
	a = "hello";
	alert(a);
	*/
	
	//变量的作用域
	function fn1() {
		var c = 10;
		alert(c);
	}
	
	function fn2() {
		//当在函数内部没有使用var来声明变量的时候，这个变量就会作为全局变量声明
		//b = 10;
		//所以一定注意，在函数中定义变量一定要使用var
		var b = 10;
		alert(b);
		// alert(c);
	}
	
	function fn3() {
		alert(b); //在fn2执行完后(并且b是全局的)再执行fn3就可以输出b, 否则就会报错(b is underfine)
	}
	
	//变量的类型,常用的类型有:Number,String,Array,Date.  不太常用的:Boolean, RegExp, Global
	var a = 10.6;
	// alert(typeof a);
	a = "11";
	//java进行强制类型转换是(Number)a,而js是通过Number(a)
	// alert(Number(a)+1);
	//如果强制转换一个非数字的值为Number会得到一个NaN的值
	var b = "abc";
	//alert(Number(b));
	b = "12px";
	//使用parseInt可以将字符串开头的几个数字转换为int，但是如果开头不是数字，那就得到NaN
	//alert(parseInt(b));
	var as = ["a","b",1,2,3];
	//对于数组等对象而言，显示的结果就是object不会显示Array
	//alert(typeof as);
	//alert(typeof fn3);  //输出function
	//判断as是否是Array的实例，如果是返回true
	//alert(as instanceof Array);
	
	//布尔类型:true和false,在js中，非0就是true，特别注意:NaN是false
	//当一个变量没有定义值的时候，是undefined类型，undefined类型是false
	//特别注意：在js中除了NaN,undefined,0这三个数是false外其余皆是true, ""也是false
	var size;		
	// alert(!!size);    //两次取非就能看出是否true还是false
	
	for(var i=0;i<as.length;i++) {  //注意不要写成int i
		alert(as[i]);
	}

	for (变量 in 对象)
	{
	    在此执行代码
	}


obj: js没有类的概念， 面向对象的语言有2种，一种是有类的， 一种是基于原型拷贝的。动态语言大部分是基于原型拷贝的，
它只有一个根对象，通过根对象来拷贝不同的副本来产生不同的对象。 ruby， python就是基于原型拷贝的
	var x = function() {   //function会在堆创建一块内存空间
		alert("x");
	}
	//此时x就是一个function函数
	x();
	function fn() {
		alert("fn");
		//对于函数而言，直接写return就等于有返回值
		return "100";
	}
	//此时是将y这个变量指向函数fn,可以通过y()来调用函数
	var y = fn;
	fn();
	//可以调用
	y();
	//将函数fn所执行的返回值传给z变量，所以z为100
	var z = fn();
	alert(z);
	alert(y);  //会输出函数： function fn(){....
	----------------------------------------
	
	//可以使用function来模拟java的类
	function Person(name,age) {
		//定义了一个Person的属性为name
		this.name = name;
		//定义了Person的属性为age
		this.age = age;
		this.address = "云南昭通";
		//如果没有用this声明，这个变量就仅仅只是一个局部变量，不是类的属性
		var x = 10;
		//创建了一个行为.  用这种方式定义函数，对于每一个对象p1, p2..的方法都会在堆中创建一个一块内存空间来存放function。
		//而java是同一个类的所有对象的方法共享同一块内存空间， 所以这种方式定义方法会消耗类存。 可通过prototype的方式来解决
		this.say = function() {
			alert(this.name+","+this.age);
		}
	}
	//创建了一个对象p1是Person的对象
	var p1 = new Person("张三",12);
	alert(p1.name+","+p1.address+","+p1.x);  //p1.x不是person的属性,所以输出underfind
	p1.say();
	
	var p2 = new Person("德华",22);
	p2.address = "香港";
	//可以通过对象["属性字符串"]完成对属性的调用
	alert(p2["name"]+","+p2["address"]);
	
	alert(typeof p1); //object
	alert(p1 instanceof Person);  //true
	//在js中对于对象而言，可以通过for in来变量对象的属性
	for(var a in p1) {
		//可以获取对象中的所有显示声明的属性
		alert(a+":"+p1[a]);
	}

date:
	var d = new Date();
	//对于js而言，月的下标是从0开始的.      获取年份要使用getFullYear(), 因为getYear()在firefox中会得到一个奇怪的数值
	document.write(d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日"+"星期"+d.getDay());

string:
	var str1 = new String("abc");
	var str2 = "abc";
	alert(str1==str2);
	var s = str2.concat("hello","world");
	alert(s);
	//包含start不包含end
	s = s.slice(2,4); //返回切片, 不改变s的值.   slice与substring的区别:在start>end的时候,substring会交换start,end;slice不会. 在start,end为小于0的时候也有区别
	alert(s);
	var str = "hello world";
	//从2开始到5结束
	alert(str.substring(2,5));
	//从2开始取5个字符
	alert(str.substr(2,5));
	
	str = "abc.txt";
	alert(str.substr(str.lastIndexOf(".")+1));  //取文件后缀

array:
	//js的array就是java中的list(shift, unshift)和stack(push,pop)的集合
	var as = new Array();
	as.push(11);
	as.push(22);
	alert(as);
	
	as = new Array(11,22,33,44,55,66,77,"111","222",23);
	alert(as);
	//一般使用以下方式定义数组
	as = [11,12,1,2,3];
	//转换为字符串通过---来完成连接
	alert(as.join("---"));
	//sort只会通过字符串来排序
	alert(as.sort());
	//颠倒顺序
	alert(as.reverse());
	
	as = [1,2,3,4];
	//表示在索引为2的前面删除0个元素，并且增加两个元素31和32-->1,2,31,32,3,4
	//as.splice(2,0,31,32);
	//表示在索引为2的前面删除2个元素，并且增加两个元素31和32-->1,2,31,32
	as.splice(2,2,31,32);
	alert(as);

	alert(as.shift()); //删除第一个元素,并返回第一个元素
	alert(as);

	alert(as.unshift(1,2,3));  //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
	alert(as);

event:
		function clickD(obj) {
			alert(obj.innerHTML);
		}
		function mouseD(obj) {
			//设置这个对象的颜色，在js中设置文本的样式均通过xx.style.样式名称
			obj.style.color = "#f00";
			//当使用代码来设置样式的时候，如果在css中通过-表示的，都是有驼峰标识，font-size-->fontSize
			obj.style.fontSize = "18px";
		}
		function outD(obj) {
			obj.style.color = "#000";
			obj.style.fontSize = "16px";
		}
	<body>
		<div onclick="clickD(this)" style="cursor: pointer">点击了试一下</div>
		<div onmouseover="mouseD(this)" onmouseout="outD(this)">鼠标移动上来试试</div>
	</body>
	--------------------
	var big = true;
	function bigger(obj) {
		var cs = parseInt(obj.style.fontSize);
		if(cs) {
			if(cs>=30) {
				big = false;
				obj.innerHTML = "点击变小";
			}
			if(cs<=12) {
				big = true;
				obj.innerHTML = "点击变大";
			}
			if(big) {
				cs+=2;
			} else {
				cs-=2;
			}
			obj.style.fontSize = cs+"px";
		} else {
			obj.style.fontSize = "14px";
		}
	}
	<body>
		<div onclick="bigger(this)" style="cursor: pointer">点击变大</div>
	</body>

timer:
		var timeId;
		function cd() {
			//在3秒之后会执行bigger这个函数,setTimeout的意思就是间隔一段时间来执行某个函数
			//setTimeout("bigger()",300);
			//setInterval表示每隔一段时间就调用一次函数
			timeId = setInterval("bigger()",500);
		}
		
		function sd(){  //停止定时器
			clearInterval(timeId);
		}
		
		function bigger() {
			//获取html中节点的id为txt的节点
			var node = document.getElementById("txt");
			var size = parseInt(node.style.fontSize);
			if(size) {
				size+=10;
			} else {     //NaN
				size = "14";
			}
			node.style.fontSize = size+"px";
		}
	<body>
		<div id="txt">开始</div>
		<div onclick="cd()" style="cursor: pointer">点击开始操作</div>
		<div onclick="sd()" style="cursor: pointer">停止操作</div>
	</body>

window: 
	我们在<script></script>中使用alert的时候,其实使用的是window.alert
	<script>
		with(window) {  //在script中的所有代码,默认就有with(window)
			alert("1");  //所以可以省略window
			location.href = "http://xx";
			history.go(-1);  //等于history.back();
			history.go(1); //等于history.forward();
			//setTimeout()   setInterval() ..
		}
	</script>
	window中有很多中有用的属性和方法: 
	window.document
	window.screenX, 
	window.moveBy() //移动指定像素  moveTo()//把窗口的左上角移动到一个指定的坐标。
	window.open(URL,name,features)// 打开一个新的窗口
	<a href="#" onclick="window.open('test02.html','aaa','width=300,height=300,resizable=0')">test02</a>
	<a href="#" onclick="window.open('test03.html','aaa','width=400,height=400,resizable=0')">test03</a>
	如果两个name是不同的,那么打开第一个后再点击第二链接会再打开一个新的窗口. 如果name相同,只会打开一个窗口

	打开新窗口选择的小列子:
	父页面:
		<a href="#" onclick="window.open('bless.html','aaa','width=600,height=300')">输入你祝福语</a>
		<div id="bless"></div>
	bless.html:
		<script type="text/javascript">
		function bless() {
			//获取输入的祝福语
			var mb = document.getElementById("mb").value;
			//获取父类窗口
			var p = window.opener;
			//获取父类窗口中的id为bless的div
			var pd = p.document.getElementById("bless");
			//设置pd的值
			pd.innerHTML = mb;
			//关闭当前窗口
			window.close();
		}
		</script>
		<body>
			输入祝福语:<input type="text" size="40" id="mb"/><input type="button" onclick="bless()" value="输入" />
		</body>

DOM: (查看W3CSchool的文档)
	document.getElementById("pwd");
	//根据标签的name属性来获取一组标签对象，这个方法一般都只用于表单的获取.  ByName不是标准的方法,现在已经不建议使用
	document.getElementsByName("users");
	document.getElementsByTagName("input");
	document.getElementsByClassName(""); //有些浏览器不支持
	
	节点的访问:
		通过使用 getElementById() 和 getElementsByTagName() 方法 getAttrubute(); node.childNodes[0].nodeValue(获取节点的文本)
		通过使用一个元素节点的 parentNode、firstChild 以及 lastChild 属性. 
		//注意并没有获取兄弟节点的方法,所以要通过parentNode获取父节点然后再使用getEle..

	节点信息:
		nodeName（节点名称） 
		nodeValue（节点值）  
		nodeType（节点类型）
	nodeName: 元素节点的NodeName是标签名, 属性节点是属性名, 文本节点是#text, 文档节点是#document
	nodeValue: 只对文本节点和属性节点有效, 文本节点的nodeValue就是文本,属性节点的nodeValue就是属性值
	dom中的节点包括:元素-1,属性-2,文本-3,注释-8,文档-9  后面的数字是节点类型值
--------------------------------------
	<script type="text/javascript">
	function getAllH1() {
		var ah = document.getElementsByTagName("h1");
		for(var i=0;i<ah.length;i++) {
			//获取节点中的文本内容
			alert(ah[i].innerHTML);
			//获取节点的名称
			alert(ah[i].nodeName);
			//获取节点的类型
			alert(ah[i].nodeType);
			//获取节点中的值:节点中的值只是在针对文本节点时有用
			alert(ah[i].nodeValue);
			//获取某个节点的文本节点
			alert(ah[i].firstChild.nodeType);
			//获取某个文本节点的值，对于IE和firefox而言文本的空格不一致，对于IE而言，仅仅只会把换行加入空白，但是FF而言就是全部空格
			//所以在获取文本节点值的时候，需要把空格去除.  js的string没有trim方法,可以通过正则表达式来去空格
			alert("|"+ah[i].firstChild.nodeValue+"|");
		}
	}

	function getConH2() {
		var con = document.getElementById("content");
		var h1 = con.getElementsByTagName("h1");
		//得到的h1元素是一个数组
		alert(h2[0].innerHTML);
		//通过h1这个节点来找到h3中span的值
		//1、找到父节点
		var pn = h2[0].parentNode;
		//2、通过父节点找到名称为h3的节点
		var h3 = pn.getElementsByTagName("h3")[0];
		//3、通过h3找到span
		var s = h3.getElementsByTagName("span")[0];
		alert(s.innerHTML);
	}
	</script>

	<div id="content">
		<h1>
			aaaaa1
			<span>aaaaassss</span>
		</h1>
		<h3>..</h3>
	</div>
	<h1>
		aaaaa1
		<span>aaaaassss</span>
	</h1>
	<input type="button" value="获取所有的h1" onclick="getAllH1()" />
	<input type="button" value="获取content的h1" onclick="getConH1()" />	

event:
	html只负责展现数据,如果直接在html写event(onclick="click()")存在问题,html与js耦合在一起了. 如何解耦?
		<script type="text/javascript">
		window.onload = init;
		function init() {   //也可以这样写window.onload = function() {
			var btn = document.getElementById("btn");
			//以下的绑定事件方式实现了html与js的解耦. 但是必须写在页面加载完之后执行,否则会出问题
			btn.onclick = function(event) {  //FF会自动传event进去
				//特别注意：对于IE而言，不会自动传递event这个参数进去，IE需要通过window.event来获取事件
				//但是FF却不支持window.event，所以通常使用如下方式解决
				event = event||window.event; //因为underfind是false
				alert(event.type);   //click
				alert(this.value);  //this就表示这个按钮对象
			}

			var lis = document.getElementsByTagName("li");
			//2、为所有的li绑定事件
			for(var i=0;i<lis.length;i++) {
				lis[i].onmouseover = changeColor;
				lis[i].onmouseout = reColor;
			}
		}
		function changeColor() {
			this.style.color = "#f00";
		}
		function reColor() {
			this.style.color = "#000";
		}
		</script>
	<body>
		<ul>
			<li>aaaaaaaaaaaaaa</li>
			<li>bbbbbbbbbbbbbb</li>
		</ul>
		<input type="button" value="点击一下" id="btn"/>
	</body>
	-------------------------------------------------------------------------
	<script type="text/javascript">
	window.onload = function(){
		//1、找到所有dl
		var dls = document.getElementById("menu_bar").getElementsByTagName("dl");
		for(var i=0;i<dls.length;i++) {
			//为所有dl绑定事件
			dls[i].onmouseover = show;
			dls[i].onmouseout = hidden;
		}
	};
	function show() {
		//每次进入dd的时候会触发onmouseover事件,该事件会冒泡到dl的onmouseouver. 这是我们不希望的
		//通过这种方式由于事件冒泡的存在，所以会多次调用，这样严重的影响效率，在JQUery等框架可以解决这样的问题
		// jquery的mouseover/mouseleave方法已经阻止了时间冒泡
		//1、找到dd
		var dds = this.getElementsByTagName("dd");
		for(var i=0;i<dds.length;i++) {
			dds[i].style.display = "block";
		}
	}
	function hidden() {
		var dds = this.getElementsByTagName("dd");
		for(var i=0;i<dds.length;i++) {
			dds[i].style.display = "none";
		}
	}
	</script>
	<body>
		<dl>
			<dt></dt>
			<dd></dd>
		</dl>
		...
	</body>

js高级部分:
深入对象:
1 函数深入理解:
1.1 函数的定义方式:
	//第一种定义方式
	function fn1() {
		alert("fn1");
	}
	//函数就是一个非常特殊的对象，是一个Function类的实例，其实在内存中存储的操作是通过一个键值对来存储的.函数名是key, 函数对象是value
	alert(typeof fn1); //输出function
	
	//由于函数是一个对象，所以可以通过如下方式定义
	var fn2 = fn1;  
	fn2();
	fn1 = function() { //fn1指向了堆中的另一个对象,
		alert("fnn1");
	}

	fn2();
	fn1();
	
	/**
	 * 对于对象而言，是通过引用的指向来完成赋值的，此时修改o1或者o2会将两个值都完成修改
	 */
	var o1 = new Object();
	var o2 = o1;   //o1, o2指向同一块内存空间
	o2.name = "Leon";
	alert(o1.name);

1.2 重载:
	function sum(num1,num2) {  // 等于 var sum = function..
		return num1+num2;
	}
	
	function sum(num1) {   //等于 var sum = function..
		return num1+100;
	}

	alert(sum(19));  // 119
	alert(sum(19,20)); // 119  函数的参数和调用没有关系，如果函数只有一个参数，但是却传入了两个参数，仅仅只会匹配一个
	//说明函数不存在重载, 只存在覆盖,后定义的覆盖前面定义的
	
	//函数有如下一种定义方式
	/**
	 * 如下定义方式等于定义了一个
	 * function fn(num1,num2){
	 * 	  alert(num1+num2);
	 * }
	 * 所以通过以下的例子，充分的说明函数就是一个对象
	 */
	var fn = new Function("num1","num2","alert('fun:'+(num1+num2))"); //最后一个参数是函数体
	fn(12,22);

1.3 函数的值传递	
	//由于函数是对象，所以可以直接把函数通过参数传递进来
	function callFun(fun,arg) {
		return fun(arg); //第一个参数就是函数对象
	}
	
	function sum(num) {
		return num+100;
	}
	
	function say(str) {
		alert("hello "+str);
	}

	callFun(say,"Leon");  //因为函数就是对象,所以可以将函数作为参数传递
	alert(callFun(sum,20));

1.4 返回值为函数
	// arg的作用域延伸开了, 里面num的值想怎么传就怎么传.
	// 如arg可以传一系列的节点. 对于不同的节点, 可以返回不同的函数对象. 使我们程序的灵活性上升了一个台阶
	function fn1(arg) {
		//此时返回的是一个函数对象
		var rel = function(num) {
			return arg+num;
		}
		return rel;
	}
	//此时f是一个函数对象，可以完成调用
	var f = fn1(20);
	alert(f(20));
	alert(f(11));
	//java可以使用反射来达到灵活性,因为可以传字符串就能完成各种各样的调用
	//而js就可以通过传递函数对象和返回函数对象来达到灵活
------------------
	运用函数传递与返回的例子:
	<div id="person"></div>
	<script type="text/javascript">
	//根据数字来进行排序的函数
	function sortByNum(a,b) {
		return parseInt(a)-parseInt(b);
	}
	//alert("11"+1);  // 111
	//alert("11"-1);  // 10 当进行减法的时候，会自动完成转换
	var as = [1,2,"11px",33,"12px",190];
	//对于js而言，默认是按照字符串来进行排序的
	as.sort(sortByNum); //array的sort方法可以传递一个排序函数(接收2个参数), 当a>b要返回正数, a==b要返回0, 否则返回负数
	alert(as);
	
	//测试根据对象排序
	function Person(name,age) {
		this.name = name;
		this.age = age;
	}
	var p1 = new Person("Leno",39);
	var p2 = new Person("John",23);
	var p3 = new Person("Ada",41);
	var ps = [p1,p2,p3];
	ps.sort(sortByAge);
	/**
	 * 使用以下方法来处理排序，带来的问题是需要为每一个属性都设置一个函数，显然不灵活
	 * 但是如果通过函数的返回值调用就不一样了
	 */
	function sortByName(obj1,obj2) {
		if(obj1.name>obj2.name) return 1;   //字符串,不能使用obj1.name-obj2.name的方式判断
		else if(obj1.name==obj2.name) return 0;
		else return -1;
	}
	function sortByAge(obj1,obj2) {
		return obj1.age-obj2.age;
	}
	
	//以下使用函数返回,不需要为每个属性写一个方法,大大地提升了灵活性
	ps.sort(sortByProperty("age"))
	function sortByProperty(propertyName) {
		var sortFun = function(obj1,obj2) {
			if(obj1[propertyName]>obj2[propertyName]) return 1; //对象访问属性的两种方法: 1. obj.name  2. obj["name"]
			else if(obj1[propertyName]==obj2[propertyName])return 0;
			else return -1;
		}
		return sortFun;
	}
	function show() { //显示排序后的结果
		var p = document.getElementById("person");
		for(var i=0;i<ps.length;i++) {
			p.innerHTML+=ps[i].name+","+ps[i].age+"<br/>";
		}
	}
	show();
	</script>

1.5 函数的内部属性arguments和this
	arguments:
	function say(num) {
		/*
		 * 在函数对象中有一个属性叫做arguments,通过这个属性可以获取相应的参数值，这个属性
		 * 是一个数组，其实就是传递进来的参数
		 */
		alert(arguments.length);
		for(var i=0;i<arguments.length;i++) {
			alert(arguments[i]);
		}
		alert(num);
	}
	/**
	 * 在arguments这个对象中有一个callee的方法，arguments.callee(arg)可以反向的调用
	 */
	// say(1,2,3);
	function factorial(num) {
		if(num<=1) return 1; 
		//此时和函数名耦合在一起
		// else return num*factorial(num-1);
		//以下就实现了函数名的解耦合，在js中通常都是使用这种方式做递归
		else return num*arguments.callee(num-1);
	}
	/**
	 * 以上是一个求阶乘的函数,以上递归调用的函数名称和原有函数名耦合在一起了，如果将来这个函数名称更改之后，
	 * 递归调用就会失效
	 */
	var cf = factorial;
	//此时不会报错
	alert(cf(5));  //120
	factorial = null;
	//此时由于cf这个函数依然使用factorial这个名称来调用，但是factorial已经指向null了，所以就会报错
	//如上情况就需要使用arguments.callee方法来调用
	alert(cf(5));
	-------------------------------
	this:
	<script type="text/javascript">
		/**
		 * 当需要创建一个类的时候，设置类的属性和方法需要通过this关键字来引用
		 * 但是特别注意:this关键字在调用时会根据不同的调用对象变得不同
		 */
		var color = "red";
		function showColor() {
			alert(this.color);
		}
		/**
		 * 创建了一个类，有一个color的属性和一个show的方法
		 */
		function Circle(color) {
			this.color = color;
			this.showColor = showColor;
		}
		
		var c = new Circle("yellow");
		//使用c来调用showColor方法，等于调用了showColor()方法
		//此时的this是c，所以color就是yellow
		c.showColor();//yellow
		//此时调用的对象等于是window,showColor的this就是window,所以就会找window中color.  因为默认有with(window) {}
		showColor();//red
	</script>

1.6 函数的属性length和方法call和apply
	length:
		function fn1() {
		}
		function fn2(num1,num2) {
		}
		function fn3(num1){
		}
		//函数的length就表示该函数所期望的参数值
		alert(fn1.length);//0
		alert(fn2.length);//2
		alert(fn3.length);//1

	call和apply(第一个参数都是要调用函数的对象, call后面的参数是函数列表;apply的第二个参数是一个参数数组,apply的可以使用arguments):
		function sum(num1,num2) {
			return num1+num2;
		}
		
		function callSum1(num1,num2) {
			//使用sum这个函数来完成一次调用，调用的参数就是callSum1这个函数的参数
			//apply的第二个参数表示一组参数数组
			return sum.apply(this,arguments);
		}
		
		function callSum2(num1,num2) {
			//关键就是第二个参数是数组
			return sum.apply(this,[num1,num2]);
		}
		alert(callSum1(12,22));
		alert(callSum2(22,32));
		
		function callSum3(num1,num2) {
			//call是通过参数列表来完成传递，其他和apply没有任何区别
			return sum.call(this,num1,num2);
		}
		alert(callSum3(22,33));

	使用call和apply的好处: 对象中可以不需要定义方法了
		var color = "red";
		function showColor() {
			alert(this.color);
		}
		
		function Circle(color) {
			this.color = color;
		}
		
		var c = new Circle("yellow");
		
		showColor.call(this);//使用上下文来调用showColor,结果是red
		showColor.call(c);//上下文对象是c,结果就是yellow

2 对象的创建
2.1 外部属性定义方式
	/**
	 * 在js中并不存在类，所以可以直接通过Object来创建对象
	 * 但是使用如下方式创建，带来最大的问题是，由于没有类的约束 (一些对象可以有name属性,一些对象可以没name属性)
	 * 无法实现对象的重复利用，并且没有一种约定，在操作时会带来问题
	 */
	var person = new Object();
	person.name = "Leon";
	person.age = 33;
	person.say = function() {
		alert(this.name+","+this.age);
	}
2.2 使用json格式定义
	var person = {
		name:"张三",//通过属性名:属性值来表示，不同的属性通过,来间隔
		age:23,
		say:function() {
			alert(this.name+","+this.age);
		}//最后一个属性之后不能有,
	}
	
	person.say();
	
	//使用json创建对象数组
	var ps = [
		{
			name:"Leon",
			age:22,
			friends:["Ada","Alice"]
		},
		{
			name:"John",
			age:33,
			friends:["Ada","Chris"]
		}
	];
	for(var i=0;i<ps.length;i++) {
		alert(ps[i].name+","+ps[i].age);
	}

2.3 通过工厂方法:
	/**
	 * 通过工厂的方式来创建Person对象
	 * 在createPerson中创建一个对象
	 * 然后为这个对象设置相应的属性和方法
	 * 之后返回这个对象
	 */
	function createPerson(name,age) {
		var o = new Object();
		o.name = name;
		o.age = age;
		o.say = function() {
			alert(this.name+","+this.age);
		}
		return o;
	}
	/**
	 * 使用工厂的方式，虽然有效的解决了类的问题，但是依然存在另外一个问题
	 * 我们无法检测对象p1和p2的数据类型: alert(typeof p1)输出object. 无法通过instanceof来检测类型
	 */
	var p1 = createPerson("Leon",22);
	var p2 = createPerson("Ada",33);
	p1.say();
	p2.say();	

2.4 构造函数方式:
	/**
	 * 通过构造函数的方式创建，和基于工厂的创建类似
	 * 最大的区别就是函数的名称就是类的名称，按照java的约定，第一个
	 * 字母大写。使用构造函数创建时，在函数内部是通过this关键字来
	 * 完成属性的定义
	 */
	function Person(name,age) {
		this.name = name;
		this.age = age;
		//以下方式带来的问题是所有的对象都会为该行为分配空间
		// this.say = function() {
			// alert(this.name+","+this.age);
		// }
		this.say = say;
	}
	/**
	 * 将行为设置为全局的行为，如果将所有的方法都设计为全局函数的时候
	 * 这个函数就可以被window调用，此时就破坏对象的封装性
	 * 而且如果某个对象有大量的方法，就会导致整个代码中充斥着大量的全局函数
	 * 这样将不利于开发
	 */
	function say() {
		alert(this.name+","+this.age);
	}
	/*
	 * 通过new Person来创建对象
	 */
	var p1 = new Person("Leon",22);
	var p2 = new Person("Ada",32);
	p1.say(); p2.say();
	/**
	 * 使用构造函数的方式可以通过以下方式来检测
	 * 对象的类型
	 */
	alert(p1 instanceof Person);
	/**
	 * 使用构造函数创建所带来的第一个问题就是每一个对象中
	 * 都会存在一个方法的拷贝，如果对象的行为很多的话
	 * 空间的占用率就会大大增加
	 * 可以将函数放到全局变量中定义，这样可以让类中的行为指向
	 * 同一个函数
	 */
	alert(p1.say==p2.say);

2.5 基于原型的方式 (重要:看图理解原型的内存模型)
	/**
	 * 以下演示了通过原型的创建方式，使用基于原型的创建可以将属性和方法
	 * 设置为Person专有的，不能再通过window来调用
	 */
	function Person(){
	}
	Person.prototype.name = "Leon";
	Person.prototype.age = 23;
	Person.prototype.say = function() {
		alert(this.name+","+this.age);
	}
	var p1 = new Person();
	p1.say();
	// say(); //通过window没有办法调用say方法，如此就完成了封装
	----------------------
	//使用上面的方式来编写代码，当属性和方法特别多时，编写起来不是很方便，可以通过json的格式来编写 
	/**
	 * 以下方式将会重写原型
	 * 由于原型重写，而且没有通过Person.prototype来指定
	 * 此时的constructor不会再指向Person而是指向Object
	 * 如果constructor真的比较重要，可以在json中说明原型的指向
	 */
	Person.prototype = {   //让prototype属性指向一个新的Object(json)
		constructor:Person,//手动指定constructor
		name:"Leon",
		age:23,
		say:function() {
			alert(this.name+","+this.age);
		}
	}
	var p1 = new Person();
	p1.say();
	alert(p1.constructor==Person);  //如果不手动指定constructor返回false
	</script>
	-------------------------------------------
	/**
	 *基于原型的创建虽然可以有效的完成封装，但是依然有一些问题
	 * 1、无法通过构造函数来设置属性值
	 * 2、当属性中有引用类型变量是，可能存在变量值重复  (修改了p1的friends,p2的也跟着修改了)
	 */
	function Person(){
	}
	Person.prototype = {
		constructor:Person,
		name:"Leon",
		age:30,
		friends:["Ada","Chris"],
		say:function() {
			alert(this.name+"["+this.friends+"]");
		}
	}
	var p1 = new Person();
	p1.name = "John";       //只会在p1自己的空间内添加name属性, 并不会影响prototype中的name
	p1.say();//john[ada,chris]
	//p1.friends在p1的空间中找不到friends,所以会获取prototype中的friends.修改了prototype中friends指向的数组,p2.friends也会改变
	p1.friends.push("Mike");//为p1增加了一个朋友   
	var p2 = new Person();
	//此时原型中就多了一个Mike,这就是原型所带来的第二个问题
	p2.say();//leon ada chris mike

2.6 基于构造函数和原型的方式
	/**
	 * 为了解决原型所带来的问题，此处需要通过组合构造函数和原型来实现对象的创建
	 * 将属性在构造函数中定义，将方法在原型中定义
	 * 这种有效集合了两者的优点，是目前最为常用的一种方式
	 */
	function Person(name,age,friends){
		//属性在构造函数中定义
		this.name = name;
		this.age = age;
		this.friends = friends;
	}
	Person.prototype = {
		constructor:Person,
		//方法在原型中定义
		say:function() {
			alert(this.name+"["+this.friends+"]");
		}
	}
	//此时所有的属性都是保存在自己的空间中的
	var p1 = new Person("Leon",23,["Ada","Chris"]);
	p1.name = "John";
	p1.friends.push("Mike");//为p1增加了一个朋友
	p1.say();
	var p2 = new Person("Ada",33,["Leon"]);
	//此时p1添加了Mike, 并不会影响p2
	p2.say();//leon ada chris mike
	
2.7 动态原型的方式
	/**
	 * 为了让定义的方式更加符合java的需求，就把定义方法的原型代码放置到Person这个构造函数中
	 */
	function Person(name,age,friends){
		//属性在构造函数中定义
		this.name = name;
		this.age = age;
		this.friends = friends;
		
		//不能使用重写的方式定义, 否者,每次调用构造方法都会让prototype指向一个新的Object(prototype)
		/*Person.prototype = {
			constructor:Person,
			//方法在原型中定义
			say:function() {
				alert(this.name+"["+this.friends+"]");
			}
		}*/
		/**
		 * 判断Person.prototype.say是否存在，如果不存在就表示需要创建
		 * 当存在之后就不会在创建了
		 */
		if(!Person.prototype.say) {
			Person.prototype.say = function() {
				alert(this.name+"["+this.friends+"]");
			}	
		}
	}

3原型
3.1 原型的检测
	function Person(){
		
	}
	Person.prototype.name = "Leon";
	Person.prototype.age = 23;
	Person.prototype.say = function() {
		alert(this.name+","+this.age);
	}
	var p1 = new Person();
	
	var p2 = new Person();
	p2.name = "Ada";
	
	//检测某个对象是否是某个函数的原型
	alert(Person.prototype.isPrototypeOf(p2));  //true
	
	//检测某个对象的constructor
	alert(p1.constructor==Person);  //true
	
	//检测某个属性是否是自己的属性
	alert(p1.hasOwnProperty("name"));//false，p1自己的空间中没有值
	alert(p2.hasOwnProperty("name"));//true,p2在自己的空间中设置了name属性
	
	delete p2.name;
	p2.say();
	alert(p2.hasOwnProperty("name"));//由于已经删除了，所以是false
	
	检测某个对象在原型或者自己中是否包含有某个属性，通过in检测
	alert("name" in p1);//true
	alert("name" in p2);//true
	alert("address" in p1);//在原型和自己的空间中都没有，false
	
	alert(hasPrototypeProperty(p1,"name"));//true
	alert(hasPrototypeProperty(p2,"name"));//false

	// 可以通过如下方法检测某个属性是否在原型中存在
	function hasPrototypeProperty(obj,prop) {
		return ((!obj.hasOwnProperty(prop))&&(prop in obj))
	}

4继承的实现(重要,看内存模型和46讲)
4.1 基于原型链的实现
	//js实现继承的第一种方式是基于原型链的方式
	function Parent() {
		this.pv = "parent";
	}
	Parent.prototype.pp = "ok";
	Parent.prototype.showParentValue = function() {
		alert(this.pv);
	}
	
	function Child() {   //执行到这里就会创建一个Child Prototype
		this.cv = "child";
	}
	/**
	 * 如果想进行赋值之后，才进行原型链的设定，这样赋值的原型对象
	 * 就会被重写掉，赋值的对象就不存在在新的原型对象中
	 */
	// Child.prototype.showChildValue = function() {
		// alert(this.cv);
	// }
	/**
	 * 让Child的原型链指向Parent对象，也就等于完成了一次继承
	 * 注意内存模型
	 */
	Child.prototype = new Parent();  //子类添加新的方法,覆盖父类的方法都要写在这句之后.不然当Child.prototype指向新对象的时候,之前写的都会被不起作用
	
	Child.prototype.showChildValue = function() {
		 alert(this.cv);
	}
	/**
	 * 此时完成的对父类对象的覆盖
	 */
	Child.prototype.showParentValue = function() {
		alert("override parent");
	}
	/**
	 * 在使用原型链进行继承一定要注意一下问题：
	 * 1、不能在设定了原型链之后，再重新为原型链赋值
	 * 2、一定要在原型链赋值之后才能添加或者覆盖方法
	 */

	/**
	 * 当执行了下面这句话之后，意味着Child的原型又重写了
	 * 这样就不存在任何的继承关系了
	 * 使用原型链需要注意的第一个问题
	 */
	// Child.prototype = {
		// showChildValue:function() {
			// alert(this.v);
		// }
	// }
	
	var c = new Child();
	c.showParentValue();
	c.showChildValue();
	alert(c.pp);
	缺点:
		使用原型链继承，最大的缺点是，无法从子类中调用父类的构造函数
		这样就没有办法把子类中的属性赋值到父类
		第二个缺点就是，如果父类中有引用类型，此时这个引用类会添加到
		子类的原型中，当第一个对象的修改了这个引用之后，其他对象的引用同时修改
			function Parent() {
				this.pv = "parent";
				this.color = ["red","yellow"];
			}
			..
			Child.prototype = new Parent();
			var c1 = new Child();
			var c2 = new Child();
			c1.color.push("blue");  //c1修改了, c2也跟着修改
		所以一般都不会单纯的使用原型链来实现继承
	 

4.2 基于伪装的实现
	function Parent(name) {
		this.color = ["red","blue"];
		this.name = name;
		this.say = function() {
			alert(this.name);
		}
	}
	/**
	 * 由于使用伪造的方式，不会完成Child的原型指向Parent
	 * 所以say方法不存在，解决方法是，将这个方法放置到
	 * Parent中使用this来创建，但是此时每个对象中又存在say
	 * 这样空间占用太大，所以也不会单独的使用伪造的方式实现继承
	 */
	// Person.prototype.say = function() {
		// alert(this.name);
	// }
	
	function Child(name,age) {
		this.age = age;
		//使用伪造的方式就可以把子类的构造函数参数传递到父类中
		Parent.call(this,name);
	}
	
	
	var c1 = new Child("Leon",12);
	var c2 = new Child("Ada",22);
	c1.say();
	c2.say();

4.3 组合方式实现
	/**
	 * 组合的实现方式是属性通过伪造的方式实现，方法通过原型链的方式实现
	 * 注意内存模型
	 */
	function Parent(name) {
		this.color = ["red","blue"];
		this.name = name;
	}
	Parent.prototype.ps = function() {
		alert(this.name+"["+this.color+"]");
	}
	
	function Child(name,age) {
		//已经完成了伪造
		Parent.call(this,name);
		this.age = age;
	}
	Child.prototype = new Parent();
	Child.prototype.say = function() {
		alert(this.name+","+this.age+"["+this.color+"]");
	}
	
	
	var c1 = new Child("Leon",22);
	c1.color.push("green");
	c1.say();
	c1.ps();
	var c2 = new Child("Ada",23);
	c2.say();
	c2.ps();

5 闭包
5.1 函数的执行数序:
	fn1();
	//不会报错,对于通过function fn()这种写法来定义的函数，永远都会被最先初始化
	function fn1() {
		alert("fn1");
	}
	
	fn2();
	//使用如下方式定义函数，不会被先执行，如果在之前调用该函数就会报错
	/**
	 * 以下函数的定义方式是现在内存中创建了一块区域，之后通过一个fn2的变量
	 * 指向这块区域，这块区域的函数开始是没有名称的 ，这种函数就叫做匿名函数
	 */
	var fn2 = function() {
		alert("fn2");
	}

5.2 函数的作用域链
	/**
	 * 在js中当进行函数的调用，会为每一个函数增加一个属性SCOPE，通过这个属性来指向一块内存
	 * 这块内存中包含有所有的上下文使用的变量，当在某个函数中调用了新函数之后，新函数依然
	 * 会有一个作用域来执行原有的函数的SCOPE和自己新增加的SCOPE，这样就形成一个链式结构
	 * 这就是js中的作用域链
	 */
	var color = "red";
	
	var showColor = function() {
		alert(this.color);
	}
	
	function changeColor() {
		var anotherColor = "blue";
		function swapColor() {
			var tempColor = anotherColor;
			anotherColor = color;
			color = tempColor;
		}
		swapColor();
	}
	
	changeColor();
	
	showColor();		

	Global作用域:color, showColor, changeColor, this, ..
	changeColor作用域: anotherColor, swapColor, ..包含Global的作用域
	swapColor作用域: tempColor, ..  包含changeColor和Global的作用域
	在swap中的变量会先在swapColor作用域找, 找不到再到changeColor找, 找不到再到Global找

5.4 匿名函数
	/**
	 * 通过以下操作带来最大的好处是，compareObjectFunction的作用域变大了
	 * 当compareObjectFunction结束之后，prop这个变量依然存在
	 */
	function compareObjectFunction(prop) {
		//匿名函数
		return function(obj1,obj2) {
			if(obj1[prop]>obj2[prop]) return 1;
			else if(obj1[prop]<obj2[prop]) return -1;
			else return 0;
		}
	}
	var o1 = {name:"Leon",age:23};
	var o2 = {name:"Ada",age:28};
	//此时就是基于name来进行比较
	/*
	 * 在java或者c++中，以下代码执行完成之后，需要进行内存的释放
	 * 此时对于java和c++这些静态语言而言，prop会被释放
	 * 但是在js中，这个作用域却被放大了.  (因为匿名函数引用着这个变量,所以不会释放)
	 */
	var compare = compareObjectFunction("age");
	//在js中，prop在这里依然可以被访问，这种通过返回函数来扩大函数的作用域的方法就是闭包
	var rel = compare(o1,o2);
	alert(rel);

5.5 闭包的变量问题
	function fn1() {
		var fns = new Array(); //创建了一个数组
		//i这个变量是保存在fn1这个作用域中的
		for(var i=0;i<10;i++) {
			//数组中方的值是一组函数
			fns[i] = function() {
				return i;
			}
		}
		return fns;
	}
	
	var fs = fn1();
	for(var i=0;i<fs.length;i++) {
		//此时通过闭包来调用所有函数，当输出i的时候会去上一级的作用域中查找
		//这个时候i的值已经10，所以连续输出了10个10
		document.write(fs[i]()+"<br/>");
	}
	---------------------------------
	function fn1() {
		var fns = new Array();
		//i这个变量是保存在fn1这个作用域中的
		for(var i=0;i<10;i++) {
			//num这个变量是保存在fns这个tf这个作用域，每一个闭包的num都是不一样
			//所以此时所消耗的内存特别的大
			var tf = function(num) { 
				fns[num] = function() {
					return num;
				}
			}
			tf(i);
		}
		return fns;
	}
	
	var fs = fn1();
	for(var i=0;i<fs.length;i++) {
		//每一个fs都是在不同作用域链中，num也是保存在不同的作用域中，所以输出0-9
		document.write(fs[i]()+"<br/>");
	}

5.6 闭包中的this问题
	var name = "window";
	var person = {
		name:"zhangsan",
		age:23,
		say:function() {
			return function() {
				return this.name;
			}
		}
	}
	/*
	 * 当完成person.say()之后，这个函数就调用结束了，在这个函数调用结束之前
	 * this是指向person,但是在调用匿名函数的时候，this就指向window，所以
	 * 得到的结果是window
	 */
	alert(person.say()());
	-----------------------------------
	var name = "window";
	var person = {
		name:"zhangsan",
		age:23,
		say:function() {
			var that = this; //that就指向person
			return function() {
				return that.name;
			}
		}
	}
	//此时that是指向person的，所以调用that.name就是person中name
	alert(person.say()());

5.7 块作用域
	<script type="text/javascript">
	for(var i=0;i<10;i++) {
		
	}
	//在js中没有块作用域，不管是使用循环还是判断之后，这个变量会一直存在
	/*
	 * 所以当在全局使用某个变量进行循环或者判断之后，这个变量可能会影响
	 * 到函数中的变量，所以在特殊情况不要使用全局变量，而且使用全局变量
	 * 在作用域链的最上层，访问是最慢的
	 */
	var i;//此时会认为是无效语句，除非使用var i = 0;
	alert(i);
	</script>
	------------------------
	<script type="text/javascript">
	/*
	 * 在一个团队进行开发时，可能会涉及到定义同名的全局变量，所以在开发中
	 * 一定养成如下习惯，将全局变量的代码放到一个匿名函数，并且马上调用
	 * 匿名函数，这样也可以执行全局变量的代码，但是这些变量就被控制在开发
	 * 人员想要控制的作用域中了
	 */
	//在function的{}后不能直接调用，一定要加上括号
	(function(){
		for(var i=0;i<10;i++) {
		
		}	
	})();
	
	alert(i);
	</script>

5.8 私有变量
	function Person(name) {
		/**
		 * 此时就没有办法直接访问name这个属性，因为没有this.name
		 * 要访问name只能通过this.getName,this.setName
		 * 但是使用这种方式创建私有变量带来的问题是，每个对象都存储大量的函数
		 * 解决的办法是通过静态私有变量来解决
		 */
		this.setName = function(value) {
			name = value;
		}
		this.getName = function() {
			return name;
		}
	}
	
	var p = new Person("aa");
	alert(p.getName());
	p.setName("bb");
	alert(p.getName());
	----------------------------------------
	var Person;
	(function(){
		//name正在函数结束之后就消失，在外面是无法引用的
		var name = "";
		Person = function(value){
			name = value;
		}
		Person.prototype.setName = function(value) {
			name = value;
		}
		Person.prototype.getName = function() {
			return name;
		}
	})();
	
	var p1 = new Person("aa");
	alert(p1.getName());
	p1.setName("bb");
	alert(p1.getName());

ajax:
	window.onload = init;
	function init() {
		//1、获取部门节点
		var dn = document.getElementById("dep");
		//2、为该节点创建onchange
		dn.onchange = getPerson
		//3、创建一个getPerson的方法来处理事件 
	}

	function getPerson() {
		var did = this.value;
		//1、获取XMLHttpRequest;
		var xhr = createXMLHttpRequest();
		//2、通过xhr来打开页面，使用POST
		xhr.open("POST","person.do",true);
		xhr.onreadystatechange = function() {
			//3、处理请求
			if(xhr.readyState==4&&xhr.status==200) {
			//xml:   response.setContentType("text/xml;charset=utf-8");
				//3.1、获取xml节点
				var xmlDoc = xhr.responseXML;
				//alert(xhr.resonseText);  //由于response的contentType是text/xml类型，此时就只能获取responseXML
				//3.2、获取所有的person节点
				var pns = xmlDoc.getElementsByTagName("person");
				//3.3、遍历所以节点，获取id，name等信息
				var node = "";
				for(var i=0;i<pns.length;i++) {
					node+=getValueByProp(pns[i],"id")+"----------"+
					      getValueByProp(pns[i],"name")+"----------"+
					      getValueByProp(pns[i],"salary")+"----------"+
					      getValueByProp(pns[i],"age")+"<br/>"
				}
				//3.4、写入到persons
				document.getElementById("persons").innerHTML = node;

			//json:   response.setContentType("text/html;charset=utf-8");
				//3、处理请求
				if(xhr.readyState==4&&xhr.status==200) {
					//3.1、获取json
					var json = xhr.responseText; //如果传递的是json可以直接通过xhr.responseText获取。
					//3.2、此时json是一个字符串，如果要转换为对象需要使用eval
					var ps = eval(json);
					var node = "";
					for(var i=0;i<ps.length;i++) {
						//json就是已经是个javascirpt的对象了，可以直接使用
						node+=ps[i].id+"--------"+
							  ps[i].name+"--------"+
							  ps[i].salary+"--------"+
							  ps[i].age+"<br/>";
					}
					//3.4、写入到persons
					document.getElementById("persons").innerHTML = node;
				}
					
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); //post需要设置header
		xhr.send("did="+did);
		//4、发送信息,需要传入did
	}
	//根据节点获取值
	function getValueByProp(node,prop) {
		return (node.getElementsByTagName(prop))[0].firstChild.nodeValue;
	}

	function createXMLHttpRequest() {
		if(window.XMLHttpRequest) {
			return new XMLHttpRequest(); //针对其他主流浏览器
		} else if(window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP"); //针对IE5和IE6
		} else {
			alert("你使用的浏览器不支持XMLHttpRequest，请换一个浏览器再试！");
			return null;
		}
	}
	<body>
		<select id="dep">
			<option value="1">普通组</option>
			<option value="2">明星组</option>
			<option value="3">火星组</option>
		</select>
		<div id="persons"></div>
	</body>


使用xstream进行对象与xml的转换(只需要其中的3个包 xstream, xpp3, xpull, 看doc):
	public class TestXstream {
		@Test
		public void test01() {
			//1、创建XStream对象
			XStream stream = new XStream();
			//默认的名称使用的是包的名称可以通过alias改别名
			stream.alias("person", Person.class);  //不设的话,转换出来的person节点带完整的包名 <com.zzjie.Person>
			//改属性名也是可以的，一般不用
			stream.aliasField("username",Person.class, "name");
			//如果希望把某个子节点修改为属性也可以，但是更不常用
			stream.useAttributeFor(Person.class, "id");
			//2、创建对象
			Person p = new Person(1,"小武",1900,24);
			//3、完成转换
			String xml = stream.toXML(p);
			//4、输出
			System.out.println(xml);
		}
		
		@Test
		public void test02() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			stream.alias("group",Group.class);
			User u = new User(1,"劳动法","123",new Group(1,"财务处"));
			System.out.println(stream.toXML(u));
			
		}
		
		@Test
		public void test03() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			stream.alias("users",List.class);
			List<User> us = new ArrayList<User>();
			User u = new User(1,"劳动法","123",new Group(1,"财务处"));
			us.add(u);
			us.add(new User(2,"张学友","123",new Group(1,"财务处")));
			us.add(new User(3,"黎明","123",new Group(1,"财务处")));
			us.add(new User(4,"郭富城","123",new Group(1,"物理系")));
			System.out.println(stream.toXML(us));
		}
		
		@Test
		public void test04() {
			XStream stream = new XStream();
			stream.alias("user",User.class);
			stream.alias("group", Group.class);
			Group g = new Group();  //Group中有users(List)的属性
			/*
			 * 默认情况在users这个节点中会像封装一个users的父亲节点，然后才封装user
			 * 有些时候可能不需要users可以使用
			 */
			stream.addImplicitCollection(Group.class, "users"); //隐藏<users>,直接显示<users>下的<user>
			g.addUser(new User(1,"老张","123"));
			g.addUser(new User(2,"老李","1234"));
			g.addUser(new User(3,"老刘","12345"));
			g.addUser(new User(4,"老王","123456"));
			System.out.println(stream.toXML(g));
		}
		
		@Test
		public void test05() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			String xml = "<user><id>1</id><username>aaa</username><password>123</password>" +
					"<group><id>1</id><name>财务处</name></group></user>";
			User user = (User)stream.fromXML(xml);
			System.out.println(user.getId()+","+user.getUsername()+","+user.getPassword()+","+user.getGroup().getName());
		}
		
		@Test
		public void test06() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			stream.alias("users",List.class);
			List<User> us = (List<User>)stream.fromXML(TestXstream.class.getClassLoader().getResourceAsStream("users.xml"));
			for(User user:us) {
				System.out.println(user.getId()+","+user.getUsername()+","+user.getPassword()+","+user.getGroup().getName());
			}
		}
		
		@Test
		public void test07() {
			//转换json需要使用Jettison这个包
			XStream stream = new XStream(new JettisonMappedXmlDriver(){
				//通过覆盖以下方法可以有效的删除json根节点
				//一般不使用XStream来转换json，效率不高，效率比较高的Json工具是Jaskson
				@Override
				public HierarchicalStreamWriter createWriter(Writer out) {
					 return new JsonWriter(out, JsonWriter.DROP_ROOT_MODE);
				}
			});
			stream.alias("group",Group.class);
			stream.alias("user", User.class);
			Group g = new Group();
			g.addUser(new User(1,"老张","123"));
			g.addUser(new User(2,"老李","1234"));
			g.addUser(new User(3,"老刘","12345"));
			g.addUser(new User(4,"老王","123456"));
			System.out.println(stream.toXML(g)); //转换成json
		}
	}
	-------------------------------------
	public class XStreamUtil {
		private static XStreamUtil util;
		private XStreamUtil(){}
		
		public static XStreamUtil getInstacne() {
			if(util==null) util = new XStreamUtil();
			return util;
		}
		
		public String obj2xml(Object obj,Map<String,Class<?>> alias) {
			XStream stream = new XStream();
			Set<String> keys = alias.keySet();
			for(String key:keys) {
				stream.alias(key,alias.get(key));
			}
			return stream.toXML(obj);
		}
		
		public Object xml2obj(String xml,Map<String,Class<?>> alias) {
			XStream stream = new XStream();
			Set<String> keys = alias.keySet();
			for(String key:keys) {
				stream.alias(key,alias.get(key));
			}
			return stream.fromXML(xml);
		}
	}


使用jaskson转换:
	public class TestJaskson {
		@Test
		public void test01() {  //bean => json
			StringWriter out = new StringWriter();
			JsonGenerator jg = null;
			try {
				//1、创建JsonFactory
				JsonFactory jf = new JsonFactory();
				//2、创建JsonGenerator
				jg = jf.createJsonGenerator(out);
				jg.useDefaultPrettyPrinter(); //使用一种相对漂亮的格式输出
				//3、创建ObjectMapper,通过ObjectMapper来写对象
				List<User> us = new ArrayList<User>();
				us.add(new User(1,"劳动法","123",new Group(1,"财务处")));
				us.add(new User(2,"猪八戒","123",new Group(1,"财务处")));
				ObjectMapper mapper = new ObjectMapper();
				mapper.writeValue(jg, us);
				System.out.println(out.toString());
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					if(jg!=null) jg.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		
		@Test
		public void test02() {  //json -> bean
			String json = "{\"id\":1,\"username\":\"杂货\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"财务处\"}}";
			ObjectMapper mapper = new ObjectMapper();
			User u = mapper.readValue(json, User.class);
			System.out.println(u.getId()+","+u.getUsername()+","+u.getGroup().getName());
		}
		
		@Test
		public void test03() {  //json -> list
			String json = "[{\"id\":1,\"username\":\"劳动法\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"财务处\"}},{\"id\":2,\"username\":\"猪八戒\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"财务处\"}},{\"id\":3,\"username\":\"张学友\",\"password\":\"123\",\"group\":{\"id\":2,\"name\":\"教务处\"}}]";
			ObjectMapper mapper = new ObjectMapper();
			//在把json转换为list的时候，不能直接存储Bean对象，list中存储的是Map对象
			/*List<User> us = mapper.readValue(json,List.class);
			for(User u:us) {
				System.out.println(u.getUsername());
			}*/
			/**
			 * 所以的json都是通过map来存储的，不会直接存储bean，但是在开发中，把字符串转换为对象
			 * 一般只会对单个的对象转换，很少会用到对象列表的转换
			 */
			List<Map<String,Object>> us = mapper.readValue(json, List.class);
			for(Map<String,Object> m:us) {
				System.out.println(m.get("id"));
				System.out.println(m.get("group"));
			}
		}
		
		@Test
		public void test05() {  //通过node来访问json
			String json = "[{\"id\":1,\"username\":\"劳动法\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"财务处\"}},{\"id\":2,\"username\":\"猪八戒\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"财务处\"}},{\"id\":3,\"username\":\"张学友\",\"password\":\"123\",\"group\":{\"id\":2,\"name\":\"教务处\"}}]";
			ObjectMapper mapper = new ObjectMapper();
			// 在Jaskson中提供了一种基于节点的读取方法
			JsonNode node = mapper.readTree(json);
			//判断这个节点是否是数组
			System.out.println(node.isArray());
			System.out.println(node.size());
			System.out.println(node.get(0).get("username"));
			System.out.println(node.get(0).get("group").get("name"));
		}
	}
	----------------------------------------
	public class JsonUtil {
		private static JsonUtil ju;
		private static JsonFactory jf;   //是线程安全的,可全局共享, 所以可以用单例
		private static ObjectMapper mapper; //是线程安全的,可全局共享, 所以可以用单例
		private JsonUtil(){}
		
		public static JsonUtil getInstance() {
			if(ju==null) {
				ju = new JsonUtil();
				jf = new JsonFactory();
				mapper = new ObjectMapper();
			}
			return ju;
		}
		
		public String obj2json(Object obj) {
			JsonGenerator jg = null;
			try {
				StringWriter out = new StringWriter();
				jg = jf.createJsonGenerator(out);
				mapper.writeValue(jg, obj);
				return out.toString();
			} catch (IOException e) {
				e.printStackTrace();
			} finally {
				try {
					if(jg!=null) jg.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
			return null;
		}
		
		public Object json2obj(String json,Class<?> clz) {
			try {
				mapper = getMapper();
				return mapper.readValue(json,clz);
			} catch (JsonParseException e) {
				e.printStackTrace();
			} catch (JsonMappingException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
			return null;
		}
	}

下拉联动:
	<script type="text/javascript">
	/*
	 * 用以下方式查找，遍历起来效率不高，可以考虑直接使用xpath来完成查询
	 /address/province-->找的就是所有的province对象
	 /address/province[@value='xxx']/city-->找所以的province中的属性里value=xx的city节点
	 //city[@value='xx']/country--->/address/province/city[@value='xx']/country
	 */
	(function(){
		
	var areaDoc = null;  //保存xml文档.  最外层有变量的时候,用匿名函数包含这些东西,然后马上执行掉. 避免全局变量

	window.onload = init;
	function init() {
		initProvince();
		var pn = document.getElementById("province");
		pn.onchange = getCity;
		var cn =document.getElementById("city");
		cn.onchange = getCountry;
	}

	function getCountry() {
		var cv= this.value;
		var cn = getParentNode("city",cv);
		if(cn) {
			var cns = cn.getElementsByTagName("country");
			insertOption("country", cns);
		}
	}
	function getCity() {
		var cv= this.value;
		var cn = getParentNode("province",cv);
		if(cn) {
			var cns = cn.getElementsByTagName("city");
			insertOption("city", cns);
		}
	}

	function getParentNode(name,cv) {
		var pns = areaDoc.getElementsByTagName(name);
		for(var i=0;i<pns.length;i++) {
			if(pns[i].getAttribute("value")==cv) {
				return pns[i];
			}
		}
		return null;
	}

	function insertOption(nodeId,ns) {
		var pn = document.getElementById(nodeId);
		pn.options.length = 1; //清空options,只保留第一个元素
		for(var i=0;i<ns.length;i++) {
			var node = document.createElement("option");
			node.text = ns[i].getAttribute("name");
			node.value = ns[i].getAttribute("value");
			pn.add(node);
		}
	}

	function initProvince() {
		//通过ajax读取Area.xml，并且获取所有的省份内容
		var xhr = createXMLHttpRequest();
		xhr.open("GET","Area.xml",true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState==4&&xhr.status==200) {
				areaDoc = xhr.responseXML;
				var pns = areaDoc.getElementsByTagName("province");
				/*
				//通过一个字符串节点来插入到select中，IE浏览器有bug，所以必须通过创建option的方式来插入
				var ns = "";
				for(var i=0;i<pns.length;i++) {
					ns+="<option value='"+pns[i].getAttribute("value")+"'>"+pns[i].getAttribute("name")+"</option>";
				}
				var pn = document.getElementById("province");
				pn.innerHTML+=ns;*/
				insertOption("province",pns); 
			}
		}
		xhr.send();
	}

	function createXMLHttpRequest() {
		if(window.XMLHttpRequest) {
			//针对其他主流浏览器
			return new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			//针对IE5和IE6
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			alert("你使用的浏览器不支持XMLHttpRequest，请换一个浏览器再试！");
			return null;
		}
	}
	})();
	</script>
	</head>
	<body>
	<select id="province">
		<option>请选择省份</option>
	</select>
	<select id="city">
		<option>请选择城市</option>
	</select>
	<select id="country">
		<option>请选择县份</option>
	</select>
	</body>
	--------------以下使用xpath方式-------------------
	(function(){
		
	var areaDoc = null;

	window.onload = init;
	function init() {
		initDoc();
		var pn = document.getElementById("province");
		pn.onchange = function() {
			setAddress("/address/province[@value='"+this.value+"']/city","city");
		}
		var cn =document.getElementById("city");
		cn.onchange = function() {
			setAddress("//city[@value='"+this.value+"']/country","country");
		}
	}

	function setAddress(xpath,nodeId) {
		var nodes = getNodeByXpath(areaDoc,xpath);
		insertOption(nodeId,nodes);
	}

	function initProvince() {
		setAddress("/address/province","province");
	}

	function getNodeByXpath(root,path) {
		if(window.ActiveXObject) {  //ie通过xpath获取节点
			return root.selectNodes(path);
		} else if(XPathResult) {  //FF
			var ns = new Array();
			var xr = areaDoc.evaluate(path,areaDoc,null,XPathResult.ORDERED_NODE_ITERATOR_TYPE,null);
			var node = null;
			while((node=xr.iterateNext())) {
				ns.push(node);
			}
			return ns;
		} else {
			alert("请选择主流浏览器");
			return null;
		}
	}

	function insertOption(nodeId,ns) {
		var pn = document.getElementById(nodeId);
		pn.options.length = 1;
		for(var i=0;i<ns.length;i++) {
			var node = document.createElement("option");
			node.text = ns[i].getAttribute("name");
			node.value = ns[i].getAttribute("value");
			pn.add(node);
		}
	}

	function initDoc() {
		//通过ajax读取Area.xml，并且获取所有的省份内容
		var xhr = createXMLHttpRequest();
		xhr.open("GET","Area.xml",true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState==4&&xhr.status==200) {
				areaDoc = xhr.responseXML;
				initProvince();
			}
		}
		xhr.send();
	}

	function createXMLHttpRequest() {
		if(window.XMLHttpRequest) {
			//针对其他主流浏览器
			return new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			//针对IE5和IE6
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			alert("你使用的浏览器不支持XMLHttpRequest，请换一个浏览器再试！");
			return null;
		}
	}
	})();

