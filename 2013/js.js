<!--����ֱ����htmlҳ���У���script��ǩ��д��Ӧ��js�Ĵ���
<script type="text/javascript">
alert("hello world");
</script>-->
<!--���������ⲿ�ļ���ͨ��src��ָ���ⲿ�ļ���λ�ã��ر�ע�ⲻ��ʡ��script�Ľ������-->
<script type="text/javascript" src="hello.js"></script>

var: 
	//����js���ԣ���û���������͵ģ�ȫ������ͨ��var����ɱ����Ĵ���
	/*var a = 19;
	alert(a);
	a = "hello";
	alert(a);
	*/
	
	//������������
	function fn1() {
		var c = 10;
		alert(c);
	}
	
	function fn2() {
		//���ں����ڲ�û��ʹ��var������������ʱ����������ͻ���Ϊȫ�ֱ�������
		//b = 10;
		//����һ��ע�⣬�ں����ж������һ��Ҫʹ��var
		var b = 10;
		alert(b);
		// alert(c);
	}
	
	function fn3() {
		alert(b); //��fn2ִ�����(����b��ȫ�ֵ�)��ִ��fn3�Ϳ������b, ����ͻᱨ��(b is underfine)
	}
	
	//����������,���õ�������:Number,String,Array,Date.  ��̫���õ�:Boolean, RegExp, Global
	var a = 10.6;
	// alert(typeof a);
	a = "11";
	//java����ǿ������ת����(Number)a,��js��ͨ��Number(a)
	// alert(Number(a)+1);
	//���ǿ��ת��һ�������ֵ�ֵΪNumber��õ�һ��NaN��ֵ
	var b = "abc";
	//alert(Number(b));
	b = "12px";
	//ʹ��parseInt���Խ��ַ�����ͷ�ļ�������ת��Ϊint�����������ͷ�������֣��Ǿ͵õ�NaN
	//alert(parseInt(b));
	var as = ["a","b",1,2,3];
	//��������ȶ�����ԣ���ʾ�Ľ������object������ʾArray
	//alert(typeof as);
	//alert(typeof fn3);  //���function
	//�ж�as�Ƿ���Array��ʵ��������Ƿ���true
	//alert(as instanceof Array);
	
	//��������:true��false,��js�У���0����true���ر�ע��:NaN��false
	//��һ������û�ж���ֵ��ʱ����undefined���ͣ�undefined������false
	//�ر�ע�⣺��js�г���NaN,undefined,0����������false���������true, ""Ҳ��false
	var size;		
	// alert(!!size);    //����ȡ�Ǿ��ܿ����Ƿ�true����false
	
	for(var i=0;i<as.length;i++) {  //ע�ⲻҪд��int i
		alert(as[i]);
	}

	for (���� in ����)
	{
	    �ڴ�ִ�д���
	}


obj: jsû����ĸ�� ��������������2�֣�һ��������ģ� һ���ǻ���ԭ�Ϳ����ġ���̬���Դ󲿷��ǻ���ԭ�Ϳ����ģ�
��ֻ��һ��������ͨ����������������ͬ�ĸ�����������ͬ�Ķ��� ruby�� python���ǻ���ԭ�Ϳ�����
	var x = function() {   //function���ڶѴ���һ���ڴ�ռ�
		alert("x");
	}
	//��ʱx����һ��function����
	x();
	function fn() {
		alert("fn");
		//���ں������ԣ�ֱ��дreturn�͵����з���ֵ
		return "100";
	}
	//��ʱ�ǽ�y�������ָ����fn,����ͨ��y()�����ú���
	var y = fn;
	fn();
	//���Ե���
	y();
	//������fn��ִ�еķ���ֵ����z����������zΪ100
	var z = fn();
	alert(z);
	alert(y);  //����������� function fn(){....
	----------------------------------------
	
	//����ʹ��function��ģ��java����
	function Person(name,age) {
		//������һ��Person������Ϊname
		this.name = name;
		//������Person������Ϊage
		this.age = age;
		this.address = "������ͨ";
		//���û����this��������������ͽ���ֻ��һ���ֲ������������������
		var x = 10;
		//������һ����Ϊ.  �����ַ�ʽ���庯��������ÿһ������p1, p2..�ķ��������ڶ��д���һ��һ���ڴ�ռ������function��
		//��java��ͬһ��������ж���ķ�������ͬһ���ڴ�ռ䣬 �������ַ�ʽ���巽����������档 ��ͨ��prototype�ķ�ʽ�����
		this.say = function() {
			alert(this.name+","+this.age);
		}
	}
	//������һ������p1��Person�Ķ���
	var p1 = new Person("����",12);
	alert(p1.name+","+p1.address+","+p1.x);  //p1.x����person������,�������underfind
	p1.say();
	
	var p2 = new Person("�»�",22);
	p2.address = "���";
	//����ͨ������["�����ַ���"]��ɶ����Եĵ���
	alert(p2["name"]+","+p2["address"]);
	
	alert(typeof p1); //object
	alert(p1 instanceof Person);  //true
	//��js�ж��ڶ�����ԣ�����ͨ��for in���������������
	for(var a in p1) {
		//���Ի�ȡ�����е�������ʾ����������
		alert(a+":"+p1[a]);
	}

date:
	var d = new Date();
	//����js���ԣ��µ��±��Ǵ�0��ʼ��.      ��ȡ���Ҫʹ��getFullYear(), ��ΪgetYear()��firefox�л�õ�һ����ֵ���ֵ
	document.write(d.getFullYear()+"��"+(d.getMonth()+1)+"��"+d.getDate()+"��"+"����"+d.getDay());

string:
	var str1 = new String("abc");
	var str2 = "abc";
	alert(str1==str2);
	var s = str2.concat("hello","world");
	alert(s);
	//����start������end
	s = s.slice(2,4); //������Ƭ, ���ı�s��ֵ.   slice��substring������:��start>end��ʱ��,substring�ύ��start,end;slice����. ��start,endΪС��0��ʱ��Ҳ������
	alert(s);
	var str = "hello world";
	//��2��ʼ��5����
	alert(str.substring(2,5));
	//��2��ʼȡ5���ַ�
	alert(str.substr(2,5));
	
	str = "abc.txt";
	alert(str.substr(str.lastIndexOf(".")+1));  //ȡ�ļ���׺

array:
	//js��array����java�е�list(shift, unshift)��stack(push,pop)�ļ���
	var as = new Array();
	as.push(11);
	as.push(22);
	alert(as);
	
	as = new Array(11,22,33,44,55,66,77,"111","222",23);
	alert(as);
	//һ��ʹ�����·�ʽ��������
	as = [11,12,1,2,3];
	//ת��Ϊ�ַ���ͨ��---���������
	alert(as.join("---"));
	//sortֻ��ͨ���ַ���������
	alert(as.sort());
	//�ߵ�˳��
	alert(as.reverse());
	
	as = [1,2,3,4];
	//��ʾ������Ϊ2��ǰ��ɾ��0��Ԫ�أ�������������Ԫ��31��32-->1,2,31,32,3,4
	//as.splice(2,0,31,32);
	//��ʾ������Ϊ2��ǰ��ɾ��2��Ԫ�أ�������������Ԫ��31��32-->1,2,31,32
	as.splice(2,2,31,32);
	alert(as);

	alert(as.shift()); //ɾ����һ��Ԫ��,�����ص�һ��Ԫ��
	alert(as);

	alert(as.unshift(1,2,3));  //unshift() ������������Ŀ�ͷ���һ�������Ԫ�أ��������µĳ��ȡ�
	alert(as);

event:
		function clickD(obj) {
			alert(obj.innerHTML);
		}
		function mouseD(obj) {
			//��������������ɫ����js�������ı�����ʽ��ͨ��xx.style.��ʽ����
			obj.style.color = "#f00";
			//��ʹ�ô�����������ʽ��ʱ�������css��ͨ��-��ʾ�ģ��������շ��ʶ��font-size-->fontSize
			obj.style.fontSize = "18px";
		}
		function outD(obj) {
			obj.style.color = "#000";
			obj.style.fontSize = "16px";
		}
	<body>
		<div onclick="clickD(this)" style="cursor: pointer">�������һ��</div>
		<div onmouseover="mouseD(this)" onmouseout="outD(this)">����ƶ���������</div>
	</body>
	--------------------
	var big = true;
	function bigger(obj) {
		var cs = parseInt(obj.style.fontSize);
		if(cs) {
			if(cs>=30) {
				big = false;
				obj.innerHTML = "�����С";
			}
			if(cs<=12) {
				big = true;
				obj.innerHTML = "������";
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
		<div onclick="bigger(this)" style="cursor: pointer">������</div>
	</body>

timer:
		var timeId;
		function cd() {
			//��3��֮���ִ��bigger�������,setTimeout����˼���Ǽ��һ��ʱ����ִ��ĳ������
			//setTimeout("bigger()",300);
			//setInterval��ʾÿ��һ��ʱ��͵���һ�κ���
			timeId = setInterval("bigger()",500);
		}
		
		function sd(){  //ֹͣ��ʱ��
			clearInterval(timeId);
		}
		
		function bigger() {
			//��ȡhtml�нڵ��idΪtxt�Ľڵ�
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
		<div id="txt">��ʼ</div>
		<div onclick="cd()" style="cursor: pointer">�����ʼ����</div>
		<div onclick="sd()" style="cursor: pointer">ֹͣ����</div>
	</body>

window: 
	������<script></script>��ʹ��alert��ʱ��,��ʵʹ�õ���window.alert
	<script>
		with(window) {  //��script�е����д���,Ĭ�Ͼ���with(window)
			alert("1");  //���Կ���ʡ��window
			location.href = "http://xx";
			history.go(-1);  //����history.back();
			history.go(1); //����history.forward();
			//setTimeout()   setInterval() ..
		}
	</script>
	window���кܶ������õ����Ժͷ���: 
	window.document
	window.screenX, 
	window.moveBy() //�ƶ�ָ������  moveTo()//�Ѵ��ڵ����Ͻ��ƶ���һ��ָ�������ꡣ
	window.open(URL,name,features)// ��һ���µĴ���
	<a href="#" onclick="window.open('test02.html','aaa','width=300,height=300,resizable=0')">test02</a>
	<a href="#" onclick="window.open('test03.html','aaa','width=400,height=400,resizable=0')">test03</a>
	�������name�ǲ�ͬ��,��ô�򿪵�һ�����ٵ���ڶ����ӻ��ٴ�һ���µĴ���. ���name��ͬ,ֻ���һ������

	���´���ѡ���С����:
	��ҳ��:
		<a href="#" onclick="window.open('bless.html','aaa','width=600,height=300')">������ף����</a>
		<div id="bless"></div>
	bless.html:
		<script type="text/javascript">
		function bless() {
			//��ȡ�����ף����
			var mb = document.getElementById("mb").value;
			//��ȡ���ര��
			var p = window.opener;
			//��ȡ���ര���е�idΪbless��div
			var pd = p.document.getElementById("bless");
			//����pd��ֵ
			pd.innerHTML = mb;
			//�رյ�ǰ����
			window.close();
		}
		</script>
		<body>
			����ף����:<input type="text" size="40" id="mb"/><input type="button" onclick="bless()" value="����" />
		</body>

DOM: (�鿴W3CSchool���ĵ�)
	document.getElementById("pwd");
	//���ݱ�ǩ��name��������ȡһ���ǩ�����������һ�㶼ֻ���ڱ��Ļ�ȡ.  ByName���Ǳ�׼�ķ���,�����Ѿ�������ʹ��
	document.getElementsByName("users");
	document.getElementsByTagName("input");
	document.getElementsByClassName(""); //��Щ�������֧��
	
	�ڵ�ķ���:
		ͨ��ʹ�� getElementById() �� getElementsByTagName() ���� getAttrubute(); node.childNodes[0].nodeValue(��ȡ�ڵ���ı�)
		ͨ��ʹ��һ��Ԫ�ؽڵ�� parentNode��firstChild �Լ� lastChild ����. 
		//ע�Ⲣû�л�ȡ�ֵܽڵ�ķ���,����Ҫͨ��parentNode��ȡ���ڵ�Ȼ����ʹ��getEle..

	�ڵ���Ϣ:
		nodeName���ڵ����ƣ� 
		nodeValue���ڵ�ֵ��  
		nodeType���ڵ����ͣ�
	nodeName: Ԫ�ؽڵ��NodeName�Ǳ�ǩ��, ���Խڵ���������, �ı��ڵ���#text, �ĵ��ڵ���#document
	nodeValue: ֻ���ı��ڵ�����Խڵ���Ч, �ı��ڵ��nodeValue�����ı�,���Խڵ��nodeValue��������ֵ
	dom�еĽڵ����:Ԫ��-1,����-2,�ı�-3,ע��-8,�ĵ�-9  ����������ǽڵ�����ֵ
--------------------------------------
	<script type="text/javascript">
	function getAllH1() {
		var ah = document.getElementsByTagName("h1");
		for(var i=0;i<ah.length;i++) {
			//��ȡ�ڵ��е��ı�����
			alert(ah[i].innerHTML);
			//��ȡ�ڵ������
			alert(ah[i].nodeName);
			//��ȡ�ڵ������
			alert(ah[i].nodeType);
			//��ȡ�ڵ��е�ֵ:�ڵ��е�ֵֻ��������ı��ڵ�ʱ����
			alert(ah[i].nodeValue);
			//��ȡĳ���ڵ���ı��ڵ�
			alert(ah[i].firstChild.nodeType);
			//��ȡĳ���ı��ڵ��ֵ������IE��firefox�����ı��Ŀո�һ�£�����IE���ԣ�����ֻ��ѻ��м���հף�����FF���Ծ���ȫ���ո�
			//�����ڻ�ȡ�ı��ڵ�ֵ��ʱ����Ҫ�ѿո�ȥ��.  js��stringû��trim����,����ͨ��������ʽ��ȥ�ո�
			alert("|"+ah[i].firstChild.nodeValue+"|");
		}
	}

	function getConH2() {
		var con = document.getElementById("content");
		var h1 = con.getElementsByTagName("h1");
		//�õ���h1Ԫ����һ������
		alert(h2[0].innerHTML);
		//ͨ��h1����ڵ����ҵ�h3��span��ֵ
		//1���ҵ����ڵ�
		var pn = h2[0].parentNode;
		//2��ͨ�����ڵ��ҵ�����Ϊh3�Ľڵ�
		var h3 = pn.getElementsByTagName("h3")[0];
		//3��ͨ��h3�ҵ�span
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
	<input type="button" value="��ȡ���е�h1" onclick="getAllH1()" />
	<input type="button" value="��ȡcontent��h1" onclick="getConH1()" />	

event:
	htmlֻ����չ������,���ֱ����htmlдevent(onclick="click()")��������,html��js�����һ����. ��ν���?
		<script type="text/javascript">
		window.onload = init;
		function init() {   //Ҳ��������дwindow.onload = function() {
			var btn = document.getElementById("btn");
			//���µİ��¼���ʽʵ����html��js�Ľ���. ���Ǳ���д��ҳ�������֮��ִ��,����������
			btn.onclick = function(event) {  //FF���Զ���event��ȥ
				//�ر�ע�⣺����IE���ԣ������Զ�����event���������ȥ��IE��Ҫͨ��window.event����ȡ�¼�
				//����FFȴ��֧��window.event������ͨ��ʹ�����·�ʽ���
				event = event||window.event; //��Ϊunderfind��false
				alert(event.type);   //click
				alert(this.value);  //this�ͱ�ʾ�����ť����
			}

			var lis = document.getElementsByTagName("li");
			//2��Ϊ���е�li���¼�
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
		<input type="button" value="���һ��" id="btn"/>
	</body>
	-------------------------------------------------------------------------
	<script type="text/javascript">
	window.onload = function(){
		//1���ҵ�����dl
		var dls = document.getElementById("menu_bar").getElementsByTagName("dl");
		for(var i=0;i<dls.length;i++) {
			//Ϊ����dl���¼�
			dls[i].onmouseover = show;
			dls[i].onmouseout = hidden;
		}
	};
	function show() {
		//ÿ�ν���dd��ʱ��ᴥ��onmouseover�¼�,���¼���ð�ݵ�dl��onmouseouver. �������ǲ�ϣ����
		//ͨ�����ַ�ʽ�����¼�ð�ݵĴ��ڣ����Ի��ε��ã��������ص�Ӱ��Ч�ʣ���JQUery�ȿ�ܿ��Խ������������
		// jquery��mouseover/mouseleave�����Ѿ���ֹ��ʱ��ð��
		//1���ҵ�dd
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

js�߼�����:
�������:
1 �����������:
1.1 �����Ķ��巽ʽ:
	//��һ�ֶ��巽ʽ
	function fn1() {
		alert("fn1");
	}
	//��������һ���ǳ�����Ķ�����һ��Function���ʵ������ʵ���ڴ��д洢�Ĳ�����ͨ��һ����ֵ�����洢��.��������key, ����������value
	alert(typeof fn1); //���function
	
	//���ں�����һ���������Կ���ͨ�����·�ʽ����
	var fn2 = fn1;  
	fn2();
	fn1 = function() { //fn1ָ���˶��е���һ������,
		alert("fnn1");
	}

	fn2();
	fn1();
	
	/**
	 * ���ڶ�����ԣ���ͨ�����õ�ָ������ɸ�ֵ�ģ���ʱ�޸�o1����o2�Ὣ����ֵ������޸�
	 */
	var o1 = new Object();
	var o2 = o1;   //o1, o2ָ��ͬһ���ڴ�ռ�
	o2.name = "Leon";
	alert(o1.name);

1.2 ����:
	function sum(num1,num2) {  // ���� var sum = function..
		return num1+num2;
	}
	
	function sum(num1) {   //���� var sum = function..
		return num1+100;
	}

	alert(sum(19));  // 119
	alert(sum(19,20)); // 119  �����Ĳ����͵���û�й�ϵ���������ֻ��һ������������ȴ��������������������ֻ��ƥ��һ��
	//˵����������������, ֻ���ڸ���,����ĸ���ǰ�涨���
	
	//����������һ�ֶ��巽ʽ
	/**
	 * ���¶��巽ʽ���ڶ�����һ��
	 * function fn(num1,num2){
	 * 	  alert(num1+num2);
	 * }
	 * ����ͨ�����µ����ӣ���ֵ�˵����������һ������
	 */
	var fn = new Function("num1","num2","alert('fun:'+(num1+num2))"); //���һ�������Ǻ�����
	fn(12,22);

1.3 ������ֵ����	
	//���ں����Ƕ������Կ���ֱ�ӰѺ���ͨ���������ݽ���
	function callFun(fun,arg) {
		return fun(arg); //��һ���������Ǻ�������
	}
	
	function sum(num) {
		return num+100;
	}
	
	function say(str) {
		alert("hello "+str);
	}

	callFun(say,"Leon");  //��Ϊ�������Ƕ���,���Կ��Խ�������Ϊ��������
	alert(callFun(sum,20));

1.4 ����ֵΪ����
	// arg�����������쿪��, ����num��ֵ����ô������ô��.
	// ��arg���Դ�һϵ�еĽڵ�. ���ڲ�ͬ�Ľڵ�, ���Է��ز�ͬ�ĺ�������. ʹ���ǳ���������������һ��̨��
	function fn1(arg) {
		//��ʱ���ص���һ����������
		var rel = function(num) {
			return arg+num;
		}
		return rel;
	}
	//��ʱf��һ���������󣬿�����ɵ���
	var f = fn1(20);
	alert(f(20));
	alert(f(11));
	//java����ʹ�÷������ﵽ�����,��Ϊ���Դ��ַ���������ɸ��ָ����ĵ���
	//��js�Ϳ���ͨ�����ݺ�������ͷ��غ����������ﵽ���
------------------
	���ú��������뷵�ص�����:
	<div id="person"></div>
	<script type="text/javascript">
	//������������������ĺ���
	function sortByNum(a,b) {
		return parseInt(a)-parseInt(b);
	}
	//alert("11"+1);  // 111
	//alert("11"-1);  // 10 �����м�����ʱ�򣬻��Զ����ת��
	var as = [1,2,"11px",33,"12px",190];
	//����js���ԣ�Ĭ���ǰ����ַ��������������
	as.sort(sortByNum); //array��sort�������Դ���һ��������(����2������), ��a>bҪ��������, a==bҪ����0, ���򷵻ظ���
	alert(as);
	
	//���Ը��ݶ�������
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
	 * ʹ�����·������������򣬴�������������ҪΪÿһ�����Զ�����һ����������Ȼ�����
	 * �������ͨ�������ķ���ֵ���þͲ�һ����
	 */
	function sortByName(obj1,obj2) {
		if(obj1.name>obj2.name) return 1;   //�ַ���,����ʹ��obj1.name-obj2.name�ķ�ʽ�ж�
		else if(obj1.name==obj2.name) return 0;
		else return -1;
	}
	function sortByAge(obj1,obj2) {
		return obj1.age-obj2.age;
	}
	
	//����ʹ�ú�������,����ҪΪÿ������дһ������,���������������
	ps.sort(sortByProperty("age"))
	function sortByProperty(propertyName) {
		var sortFun = function(obj1,obj2) {
			if(obj1[propertyName]>obj2[propertyName]) return 1; //����������Ե����ַ���: 1. obj.name  2. obj["name"]
			else if(obj1[propertyName]==obj2[propertyName])return 0;
			else return -1;
		}
		return sortFun;
	}
	function show() { //��ʾ�����Ľ��
		var p = document.getElementById("person");
		for(var i=0;i<ps.length;i++) {
			p.innerHTML+=ps[i].name+","+ps[i].age+"<br/>";
		}
	}
	show();
	</script>

1.5 �������ڲ�����arguments��this
	arguments:
	function say(num) {
		/*
		 * �ں�����������һ�����Խ���arguments,ͨ��������Կ��Ի�ȡ��Ӧ�Ĳ���ֵ���������
		 * ��һ�����飬��ʵ���Ǵ��ݽ����Ĳ���
		 */
		alert(arguments.length);
		for(var i=0;i<arguments.length;i++) {
			alert(arguments[i]);
		}
		alert(num);
	}
	/**
	 * ��arguments�����������һ��callee�ķ�����arguments.callee(arg)���Է���ĵ���
	 */
	// say(1,2,3);
	function factorial(num) {
		if(num<=1) return 1; 
		//��ʱ�ͺ����������һ��
		// else return num*factorial(num-1);
		//���¾�ʵ���˺������Ľ���ϣ���js��ͨ������ʹ�����ַ�ʽ���ݹ�
		else return num*arguments.callee(num-1);
	}
	/**
	 * ������һ����׳˵ĺ���,���ϵݹ���õĺ������ƺ�ԭ�к����������һ���ˣ������������������Ƹ���֮��
	 * �ݹ���þͻ�ʧЧ
	 */
	var cf = factorial;
	//��ʱ���ᱨ��
	alert(cf(5));  //120
	factorial = null;
	//��ʱ����cf���������Ȼʹ��factorial������������ã�����factorial�Ѿ�ָ��null�ˣ����Ծͻᱨ��
	//�����������Ҫʹ��arguments.callee����������
	alert(cf(5));
	-------------------------------
	this:
	<script type="text/javascript">
		/**
		 * ����Ҫ����һ�����ʱ������������Ժͷ�����Ҫͨ��this�ؼ���������
		 * �����ر�ע��:this�ؼ����ڵ���ʱ����ݲ�ͬ�ĵ��ö����ò�ͬ
		 */
		var color = "red";
		function showColor() {
			alert(this.color);
		}
		/**
		 * ������һ���࣬��һ��color�����Ժ�һ��show�ķ���
		 */
		function Circle(color) {
			this.color = color;
			this.showColor = showColor;
		}
		
		var c = new Circle("yellow");
		//ʹ��c������showColor���������ڵ�����showColor()����
		//��ʱ��this��c������color����yellow
		c.showColor();//yellow
		//��ʱ���õĶ��������window,showColor��this����window,���Ծͻ���window��color.  ��ΪĬ����with(window) {}
		showColor();//red
	</script>

1.6 ����������length�ͷ���call��apply
	length:
		function fn1() {
		}
		function fn2(num1,num2) {
		}
		function fn3(num1){
		}
		//������length�ͱ�ʾ�ú����������Ĳ���ֵ
		alert(fn1.length);//0
		alert(fn2.length);//2
		alert(fn3.length);//1

	call��apply(��һ����������Ҫ���ú����Ķ���, call����Ĳ����Ǻ����б�;apply�ĵڶ���������һ����������,apply�Ŀ���ʹ��arguments):
		function sum(num1,num2) {
			return num1+num2;
		}
		
		function callSum1(num1,num2) {
			//ʹ��sum������������һ�ε��ã����õĲ�������callSum1��������Ĳ���
			//apply�ĵڶ���������ʾһ���������
			return sum.apply(this,arguments);
		}
		
		function callSum2(num1,num2) {
			//�ؼ����ǵڶ�������������
			return sum.apply(this,[num1,num2]);
		}
		alert(callSum1(12,22));
		alert(callSum2(22,32));
		
		function callSum3(num1,num2) {
			//call��ͨ�������б�����ɴ��ݣ�������applyû���κ�����
			return sum.call(this,num1,num2);
		}
		alert(callSum3(22,33));

	ʹ��call��apply�ĺô�: �����п��Բ���Ҫ���巽����
		var color = "red";
		function showColor() {
			alert(this.color);
		}
		
		function Circle(color) {
			this.color = color;
		}
		
		var c = new Circle("yellow");
		
		showColor.call(this);//ʹ��������������showColor,�����red
		showColor.call(c);//�����Ķ�����c,�������yellow

2 ����Ĵ���
2.1 �ⲿ���Զ��巽ʽ
	/**
	 * ��js�в��������࣬���Կ���ֱ��ͨ��Object����������
	 * ����ʹ�����·�ʽ�������������������ǣ�����û�����Լ�� (һЩ���������name����,һЩ�������ûname����)
	 * �޷�ʵ�ֶ�����ظ����ã�����û��һ��Լ�����ڲ���ʱ���������
	 */
	var person = new Object();
	person.name = "Leon";
	person.age = 33;
	person.say = function() {
		alert(this.name+","+this.age);
	}
2.2 ʹ��json��ʽ����
	var person = {
		name:"����",//ͨ��������:����ֵ����ʾ����ͬ������ͨ��,�����
		age:23,
		say:function() {
			alert(this.name+","+this.age);
		}//���һ������֮������,
	}
	
	person.say();
	
	//ʹ��json������������
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

2.3 ͨ����������:
	/**
	 * ͨ�������ķ�ʽ������Person����
	 * ��createPerson�д���һ������
	 * Ȼ��Ϊ�������������Ӧ�����Ժͷ���
	 * ֮�󷵻��������
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
	 * ʹ�ù����ķ�ʽ����Ȼ��Ч�Ľ����������⣬������Ȼ��������һ������
	 * �����޷�������p1��p2����������: alert(typeof p1)���object. �޷�ͨ��instanceof���������
	 */
	var p1 = createPerson("Leon",22);
	var p2 = createPerson("Ada",33);
	p1.say();
	p2.say();	

2.4 ���캯����ʽ:
	/**
	 * ͨ�����캯���ķ�ʽ�������ͻ��ڹ����Ĵ�������
	 * ����������Ǻ��������ƾ���������ƣ�����java��Լ������һ��
	 * ��ĸ��д��ʹ�ù��캯������ʱ���ں����ڲ���ͨ��this�ؼ�����
	 * ������ԵĶ���
	 */
	function Person(name,age) {
		this.name = name;
		this.age = age;
		//���·�ʽ���������������еĶ��󶼻�Ϊ����Ϊ����ռ�
		// this.say = function() {
			// alert(this.name+","+this.age);
		// }
		this.say = say;
	}
	/**
	 * ����Ϊ����Ϊȫ�ֵ���Ϊ����������еķ��������Ϊȫ�ֺ�����ʱ��
	 * ��������Ϳ��Ա�window���ã���ʱ���ƻ�����ķ�װ��
	 * �������ĳ�������д����ķ������ͻᵼ�����������г���Ŵ�����ȫ�ֺ���
	 * �����������ڿ���
	 */
	function say() {
		alert(this.name+","+this.age);
	}
	/*
	 * ͨ��new Person����������
	 */
	var p1 = new Person("Leon",22);
	var p2 = new Person("Ada",32);
	p1.say(); p2.say();
	/**
	 * ʹ�ù��캯���ķ�ʽ����ͨ�����·�ʽ�����
	 * ���������
	 */
	alert(p1 instanceof Person);
	/**
	 * ʹ�ù��캯�������������ĵ�һ���������ÿһ��������
	 * �������һ�������Ŀ���������������Ϊ�ܶ�Ļ�
	 * �ռ��ռ���ʾͻ�������
	 * ���Խ������ŵ�ȫ�ֱ����ж��壬�������������е���Ϊָ��
	 * ͬһ������
	 */
	alert(p1.say==p2.say);

2.5 ����ԭ�͵ķ�ʽ (��Ҫ:��ͼ���ԭ�͵��ڴ�ģ��)
	/**
	 * ������ʾ��ͨ��ԭ�͵Ĵ�����ʽ��ʹ�û���ԭ�͵Ĵ������Խ����Ժͷ���
	 * ����ΪPersonר�еģ�������ͨ��window������
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
	// say(); //ͨ��windowû�а취����say��������˾�����˷�װ
	----------------------
	//ʹ������ķ�ʽ����д���룬�����Ժͷ����ر��ʱ����д�������Ǻܷ��㣬����ͨ��json�ĸ�ʽ����д 
	/**
	 * ���·�ʽ������дԭ��
	 * ����ԭ����д������û��ͨ��Person.prototype��ָ��
	 * ��ʱ��constructor������ָ��Person����ָ��Object
	 * ���constructor��ıȽ���Ҫ��������json��˵��ԭ�͵�ָ��
	 */
	Person.prototype = {   //��prototype����ָ��һ���µ�Object(json)
		constructor:Person,//�ֶ�ָ��constructor
		name:"Leon",
		age:23,
		say:function() {
			alert(this.name+","+this.age);
		}
	}
	var p1 = new Person();
	p1.say();
	alert(p1.constructor==Person);  //������ֶ�ָ��constructor����false
	</script>
	-------------------------------------------
	/**
	 *����ԭ�͵Ĵ�����Ȼ������Ч����ɷ�װ��������Ȼ��һЩ����
	 * 1���޷�ͨ�����캯������������ֵ
	 * 2�������������������ͱ����ǣ����ܴ��ڱ���ֵ�ظ�  (�޸���p1��friends,p2��Ҳ�����޸���)
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
	p1.name = "John";       //ֻ����p1�Լ��Ŀռ������name����, ������Ӱ��prototype�е�name
	p1.say();//john[ada,chris]
	//p1.friends��p1�Ŀռ����Ҳ���friends,���Ի��ȡprototype�е�friends.�޸���prototype��friendsָ�������,p2.friendsҲ��ı�
	p1.friends.push("Mike");//Ϊp1������һ������   
	var p2 = new Person();
	//��ʱԭ���оͶ���һ��Mike,�����ԭ���������ĵڶ�������
	p2.say();//leon ada chris mike

2.6 ���ڹ��캯����ԭ�͵ķ�ʽ
	/**
	 * Ϊ�˽��ԭ�������������⣬�˴���Ҫͨ����Ϲ��캯����ԭ����ʵ�ֶ���Ĵ���
	 * �������ڹ��캯���ж��壬��������ԭ���ж���
	 * ������Ч���������ߵ��ŵ㣬��Ŀǰ��Ϊ���õ�һ�ַ�ʽ
	 */
	function Person(name,age,friends){
		//�����ڹ��캯���ж���
		this.name = name;
		this.age = age;
		this.friends = friends;
	}
	Person.prototype = {
		constructor:Person,
		//������ԭ���ж���
		say:function() {
			alert(this.name+"["+this.friends+"]");
		}
	}
	//��ʱ���е����Զ��Ǳ������Լ��Ŀռ��е�
	var p1 = new Person("Leon",23,["Ada","Chris"]);
	p1.name = "John";
	p1.friends.push("Mike");//Ϊp1������һ������
	p1.say();
	var p2 = new Person("Ada",33,["Leon"]);
	//��ʱp1�����Mike, ������Ӱ��p2
	p2.say();//leon ada chris mike
	
2.7 ��̬ԭ�͵ķ�ʽ
	/**
	 * Ϊ���ö���ķ�ʽ���ӷ���java�����󣬾ͰѶ��巽����ԭ�ʹ�����õ�Person������캯����
	 */
	function Person(name,age,friends){
		//�����ڹ��캯���ж���
		this.name = name;
		this.age = age;
		this.friends = friends;
		
		//����ʹ����д�ķ�ʽ����, ����,ÿ�ε��ù��췽��������prototypeָ��һ���µ�Object(prototype)
		/*Person.prototype = {
			constructor:Person,
			//������ԭ���ж���
			say:function() {
				alert(this.name+"["+this.friends+"]");
			}
		}*/
		/**
		 * �ж�Person.prototype.say�Ƿ���ڣ���������ھͱ�ʾ��Ҫ����
		 * ������֮��Ͳ����ڴ�����
		 */
		if(!Person.prototype.say) {
			Person.prototype.say = function() {
				alert(this.name+"["+this.friends+"]");
			}	
		}
	}

3ԭ��
3.1 ԭ�͵ļ��
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
	
	//���ĳ�������Ƿ���ĳ��������ԭ��
	alert(Person.prototype.isPrototypeOf(p2));  //true
	
	//���ĳ�������constructor
	alert(p1.constructor==Person);  //true
	
	//���ĳ�������Ƿ����Լ�������
	alert(p1.hasOwnProperty("name"));//false��p1�Լ��Ŀռ���û��ֵ
	alert(p2.hasOwnProperty("name"));//true,p2���Լ��Ŀռ���������name����
	
	delete p2.name;
	p2.say();
	alert(p2.hasOwnProperty("name"));//�����Ѿ�ɾ���ˣ�������false
	
	���ĳ��������ԭ�ͻ����Լ����Ƿ������ĳ�����ԣ�ͨ��in���
	alert("name" in p1);//true
	alert("name" in p2);//true
	alert("address" in p1);//��ԭ�ͺ��Լ��Ŀռ��ж�û�У�false
	
	alert(hasPrototypeProperty(p1,"name"));//true
	alert(hasPrototypeProperty(p2,"name"));//false

	// ����ͨ�����·������ĳ�������Ƿ���ԭ���д���
	function hasPrototypeProperty(obj,prop) {
		return ((!obj.hasOwnProperty(prop))&&(prop in obj))
	}

4�̳е�ʵ��(��Ҫ,���ڴ�ģ�ͺ�46��)
4.1 ����ԭ������ʵ��
	//jsʵ�ּ̳еĵ�һ�ַ�ʽ�ǻ���ԭ�����ķ�ʽ
	function Parent() {
		this.pv = "parent";
	}
	Parent.prototype.pp = "ok";
	Parent.prototype.showParentValue = function() {
		alert(this.pv);
	}
	
	function Child() {   //ִ�е�����ͻᴴ��һ��Child Prototype
		this.cv = "child";
	}
	/**
	 * �������и�ֵ֮�󣬲Ž���ԭ�������趨��������ֵ��ԭ�Ͷ���
	 * �ͻᱻ��д������ֵ�Ķ���Ͳ��������µ�ԭ�Ͷ�����
	 */
	// Child.prototype.showChildValue = function() {
		// alert(this.cv);
	// }
	/**
	 * ��Child��ԭ����ָ��Parent����Ҳ�͵��������һ�μ̳�
	 * ע���ڴ�ģ��
	 */
	Child.prototype = new Parent();  //��������µķ���,���Ǹ���ķ�����Ҫд�����֮��.��Ȼ��Child.prototypeָ���¶����ʱ��,֮ǰд�Ķ��ᱻ��������
	
	Child.prototype.showChildValue = function() {
		 alert(this.cv);
	}
	/**
	 * ��ʱ��ɵĶԸ������ĸ���
	 */
	Child.prototype.showParentValue = function() {
		alert("override parent");
	}
	/**
	 * ��ʹ��ԭ�������м̳�һ��Ҫע��һ�����⣺
	 * 1���������趨��ԭ����֮��������Ϊԭ������ֵ
	 * 2��һ��Ҫ��ԭ������ֵ֮�������ӻ��߸��Ƿ���
	 */

	/**
	 * ��ִ����������仰֮����ζ��Child��ԭ������д��
	 * �����Ͳ������κεļ̳й�ϵ��
	 * ʹ��ԭ������Ҫע��ĵ�һ������
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
	ȱ��:
		ʹ��ԭ�����̳У�����ȱ���ǣ��޷��������е��ø���Ĺ��캯��
		������û�а취�������е����Ը�ֵ������
		�ڶ���ȱ����ǣ�������������������ͣ���ʱ������������ӵ�
		�����ԭ���У�����һ��������޸����������֮���������������ͬʱ�޸�
			function Parent() {
				this.pv = "parent";
				this.color = ["red","yellow"];
			}
			..
			Child.prototype = new Parent();
			var c1 = new Child();
			var c2 = new Child();
			c1.color.push("blue");  //c1�޸���, c2Ҳ�����޸�
		����һ�㶼���ᵥ����ʹ��ԭ������ʵ�ּ̳�
	 

4.2 ����αװ��ʵ��
	function Parent(name) {
		this.color = ["red","blue"];
		this.name = name;
		this.say = function() {
			alert(this.name);
		}
	}
	/**
	 * ����ʹ��α��ķ�ʽ���������Child��ԭ��ָ��Parent
	 * ����say���������ڣ���������ǣ�������������õ�
	 * Parent��ʹ��this�����������Ǵ�ʱÿ���������ִ���say
	 * �����ռ�ռ��̫������Ҳ���ᵥ����ʹ��α��ķ�ʽʵ�ּ̳�
	 */
	// Person.prototype.say = function() {
		// alert(this.name);
	// }
	
	function Child(name,age) {
		this.age = age;
		//ʹ��α��ķ�ʽ�Ϳ��԰�����Ĺ��캯���������ݵ�������
		Parent.call(this,name);
	}
	
	
	var c1 = new Child("Leon",12);
	var c2 = new Child("Ada",22);
	c1.say();
	c2.say();

4.3 ��Ϸ�ʽʵ��
	/**
	 * ��ϵ�ʵ�ַ�ʽ������ͨ��α��ķ�ʽʵ�֣�����ͨ��ԭ�����ķ�ʽʵ��
	 * ע���ڴ�ģ��
	 */
	function Parent(name) {
		this.color = ["red","blue"];
		this.name = name;
	}
	Parent.prototype.ps = function() {
		alert(this.name+"["+this.color+"]");
	}
	
	function Child(name,age) {
		//�Ѿ������α��
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

5 �հ�
5.1 ������ִ������:
	fn1();
	//���ᱨ��,����ͨ��function fn()����д��������ĺ�������Զ���ᱻ���ȳ�ʼ��
	function fn1() {
		alert("fn1");
	}
	
	fn2();
	//ʹ�����·�ʽ���庯�������ᱻ��ִ�У������֮ǰ���øú����ͻᱨ��
	/**
	 * ���º����Ķ��巽ʽ�������ڴ��д�����һ������֮��ͨ��һ��fn2�ı���
	 * ָ����������������ĺ�����ʼ��û�����Ƶ� �����ֺ����ͽ�����������
	 */
	var fn2 = function() {
		alert("fn2");
	}

5.2 ��������������
	/**
	 * ��js�е����к����ĵ��ã���Ϊÿһ����������һ������SCOPE��ͨ�����������ָ��һ���ڴ�
	 * ����ڴ��а��������е�������ʹ�õı���������ĳ�������е������º���֮���º�����Ȼ
	 * ����һ����������ִ��ԭ�еĺ�����SCOPE���Լ������ӵ�SCOPE���������γ�һ����ʽ�ṹ
	 * �����js�е���������
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

	Global������:color, showColor, changeColor, this, ..
	changeColor������: anotherColor, swapColor, ..����Global��������
	swapColor������: tempColor, ..  ����changeColor��Global��������
	��swap�еı���������swapColor��������, �Ҳ����ٵ�changeColor��, �Ҳ����ٵ�Global��

5.4 ��������
	/**
	 * ͨ�����²����������ĺô��ǣ�compareObjectFunction������������
	 * ��compareObjectFunction����֮��prop���������Ȼ����
	 */
	function compareObjectFunction(prop) {
		//��������
		return function(obj1,obj2) {
			if(obj1[prop]>obj2[prop]) return 1;
			else if(obj1[prop]<obj2[prop]) return -1;
			else return 0;
		}
	}
	var o1 = {name:"Leon",age:23};
	var o2 = {name:"Ada",age:28};
	//��ʱ���ǻ���name�����бȽ�
	/*
	 * ��java����c++�У����´���ִ�����֮����Ҫ�����ڴ���ͷ�
	 * ��ʱ����java��c++��Щ��̬���Զ��ԣ�prop�ᱻ�ͷ�
	 * ������js�У����������ȴ���Ŵ���.  (��Ϊ���������������������,���Բ����ͷ�)
	 */
	var compare = compareObjectFunction("age");
	//��js�У�prop��������Ȼ���Ա����ʣ�����ͨ�����غ�������������������ķ������Ǳհ�
	var rel = compare(o1,o2);
	alert(rel);

5.5 �հ��ı�������
	function fn1() {
		var fns = new Array(); //������һ������
		//i��������Ǳ�����fn1����������е�
		for(var i=0;i<10;i++) {
			//�����з���ֵ��һ�麯��
			fns[i] = function() {
				return i;
			}
		}
		return fns;
	}
	
	var fs = fn1();
	for(var i=0;i<fs.length;i++) {
		//��ʱͨ���հ����������к����������i��ʱ���ȥ��һ�����������в���
		//���ʱ��i��ֵ�Ѿ�10���������������10��10
		document.write(fs[i]()+"<br/>");
	}
	---------------------------------
	function fn1() {
		var fns = new Array();
		//i��������Ǳ�����fn1����������е�
		for(var i=0;i<10;i++) {
			//num��������Ǳ�����fns���tf���������ÿһ���հ���num���ǲ�һ��
			//���Դ�ʱ�����ĵ��ڴ��ر�Ĵ�
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
		//ÿһ��fs�����ڲ�ͬ���������У�numҲ�Ǳ����ڲ�ͬ���������У��������0-9
		document.write(fs[i]()+"<br/>");
	}

5.6 �հ��е�this����
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
	 * �����person.say()֮����������͵��ý����ˣ�������������ý���֮ǰ
	 * this��ָ��person,�����ڵ�������������ʱ��this��ָ��window������
	 * �õ��Ľ����window
	 */
	alert(person.say()());
	-----------------------------------
	var name = "window";
	var person = {
		name:"zhangsan",
		age:23,
		say:function() {
			var that = this; //that��ָ��person
			return function() {
				return that.name;
			}
		}
	}
	//��ʱthat��ָ��person�ģ����Ե���that.name����person��name
	alert(person.say()());

5.7 ��������
	<script type="text/javascript">
	for(var i=0;i<10;i++) {
		
	}
	//��js��û�п������򣬲�����ʹ��ѭ�������ж�֮�����������һֱ����
	/*
	 * ���Ե���ȫ��ʹ��ĳ����������ѭ�������ж�֮������������ܻ�Ӱ��
	 * �������еı��������������������Ҫʹ��ȫ�ֱ���������ʹ��ȫ�ֱ���
	 * ���������������ϲ㣬������������
	 */
	var i;//��ʱ����Ϊ����Ч��䣬����ʹ��var i = 0;
	alert(i);
	</script>
	------------------------
	<script type="text/javascript">
	/*
	 * ��һ���Ŷӽ��п���ʱ�����ܻ��漰������ͬ����ȫ�ֱ����������ڿ�����
	 * һ����������ϰ�ߣ���ȫ�ֱ����Ĵ���ŵ�һ�������������������ϵ���
	 * ��������������Ҳ����ִ��ȫ�ֱ����Ĵ��룬������Щ�����ͱ������ڿ���
	 * ��Ա��Ҫ���Ƶ�����������
	 */
	//��function��{}����ֱ�ӵ��ã�һ��Ҫ��������
	(function(){
		for(var i=0;i<10;i++) {
		
		}	
	})();
	
	alert(i);
	</script>

5.8 ˽�б���
	function Person(name) {
		/**
		 * ��ʱ��û�а취ֱ�ӷ���name������ԣ���Ϊû��this.name
		 * Ҫ����nameֻ��ͨ��this.getName,this.setName
		 * ����ʹ�����ַ�ʽ����˽�б��������������ǣ�ÿ�����󶼴洢�����ĺ���
		 * ����İ취��ͨ����̬˽�б��������
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
		//name���ں�������֮�����ʧ�����������޷����õ�
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
		//1����ȡ���Žڵ�
		var dn = document.getElementById("dep");
		//2��Ϊ�ýڵ㴴��onchange
		dn.onchange = getPerson
		//3������һ��getPerson�ķ����������¼� 
	}

	function getPerson() {
		var did = this.value;
		//1����ȡXMLHttpRequest;
		var xhr = createXMLHttpRequest();
		//2��ͨ��xhr����ҳ�棬ʹ��POST
		xhr.open("POST","person.do",true);
		xhr.onreadystatechange = function() {
			//3����������
			if(xhr.readyState==4&&xhr.status==200) {
			//xml:   response.setContentType("text/xml;charset=utf-8");
				//3.1����ȡxml�ڵ�
				var xmlDoc = xhr.responseXML;
				//alert(xhr.resonseText);  //����response��contentType��text/xml���ͣ���ʱ��ֻ�ܻ�ȡresponseXML
				//3.2����ȡ���е�person�ڵ�
				var pns = xmlDoc.getElementsByTagName("person");
				//3.3���������Խڵ㣬��ȡid��name����Ϣ
				var node = "";
				for(var i=0;i<pns.length;i++) {
					node+=getValueByProp(pns[i],"id")+"----------"+
					      getValueByProp(pns[i],"name")+"----------"+
					      getValueByProp(pns[i],"salary")+"----------"+
					      getValueByProp(pns[i],"age")+"<br/>"
				}
				//3.4��д�뵽persons
				document.getElementById("persons").innerHTML = node;

			//json:   response.setContentType("text/html;charset=utf-8");
				//3����������
				if(xhr.readyState==4&&xhr.status==200) {
					//3.1����ȡjson
					var json = xhr.responseText; //������ݵ���json����ֱ��ͨ��xhr.responseText��ȡ��
					//3.2����ʱjson��һ���ַ��������Ҫת��Ϊ������Ҫʹ��eval
					var ps = eval(json);
					var node = "";
					for(var i=0;i<ps.length;i++) {
						//json�����Ѿ��Ǹ�javascirpt�Ķ����ˣ�����ֱ��ʹ��
						node+=ps[i].id+"--------"+
							  ps[i].name+"--------"+
							  ps[i].salary+"--------"+
							  ps[i].age+"<br/>";
					}
					//3.4��д�뵽persons
					document.getElementById("persons").innerHTML = node;
				}
					
			}
		}
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); //post��Ҫ����header
		xhr.send("did="+did);
		//4��������Ϣ,��Ҫ����did
	}
	//���ݽڵ��ȡֵ
	function getValueByProp(node,prop) {
		return (node.getElementsByTagName(prop))[0].firstChild.nodeValue;
	}

	function createXMLHttpRequest() {
		if(window.XMLHttpRequest) {
			return new XMLHttpRequest(); //����������������
		} else if(window.ActiveXObject) {
			return new ActiveXObject("Microsoft.XMLHTTP"); //���IE5��IE6
		} else {
			alert("��ʹ�õ��������֧��XMLHttpRequest���뻻һ����������ԣ�");
			return null;
		}
	}
	<body>
		<select id="dep">
			<option value="1">��ͨ��</option>
			<option value="2">������</option>
			<option value="3">������</option>
		</select>
		<div id="persons"></div>
	</body>


ʹ��xstream���ж�����xml��ת��(ֻ��Ҫ���е�3���� xstream, xpp3, xpull, ��doc):
	public class TestXstream {
		@Test
		public void test01() {
			//1������XStream����
			XStream stream = new XStream();
			//Ĭ�ϵ�����ʹ�õ��ǰ������ƿ���ͨ��alias�ı���
			stream.alias("person", Person.class);  //����Ļ�,ת��������person�ڵ�������İ��� <com.zzjie.Person>
			//��������Ҳ�ǿ��Եģ�һ�㲻��
			stream.aliasField("username",Person.class, "name");
			//���ϣ����ĳ���ӽڵ��޸�Ϊ����Ҳ���ԣ����Ǹ�������
			stream.useAttributeFor(Person.class, "id");
			//2����������
			Person p = new Person(1,"С��",1900,24);
			//3�����ת��
			String xml = stream.toXML(p);
			//4�����
			System.out.println(xml);
		}
		
		@Test
		public void test02() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			stream.alias("group",Group.class);
			User u = new User(1,"�Ͷ���","123",new Group(1,"����"));
			System.out.println(stream.toXML(u));
			
		}
		
		@Test
		public void test03() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			stream.alias("users",List.class);
			List<User> us = new ArrayList<User>();
			User u = new User(1,"�Ͷ���","123",new Group(1,"����"));
			us.add(u);
			us.add(new User(2,"��ѧ��","123",new Group(1,"����")));
			us.add(new User(3,"����","123",new Group(1,"����")));
			us.add(new User(4,"������","123",new Group(1,"����ϵ")));
			System.out.println(stream.toXML(us));
		}
		
		@Test
		public void test04() {
			XStream stream = new XStream();
			stream.alias("user",User.class);
			stream.alias("group", Group.class);
			Group g = new Group();  //Group����users(List)������
			/*
			 * Ĭ�������users����ڵ��л����װһ��users�ĸ��׽ڵ㣬Ȼ��ŷ�װuser
			 * ��Щʱ����ܲ���Ҫusers����ʹ��
			 */
			stream.addImplicitCollection(Group.class, "users"); //����<users>,ֱ����ʾ<users>�µ�<user>
			g.addUser(new User(1,"����","123"));
			g.addUser(new User(2,"����","1234"));
			g.addUser(new User(3,"����","12345"));
			g.addUser(new User(4,"����","123456"));
			System.out.println(stream.toXML(g));
		}
		
		@Test
		public void test05() {
			XStream stream = new XStream();
			stream.alias("user", User.class);
			String xml = "<user><id>1</id><username>aaa</username><password>123</password>" +
					"<group><id>1</id><name>����</name></group></user>";
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
			//ת��json��Ҫʹ��Jettison�����
			XStream stream = new XStream(new JettisonMappedXmlDriver(){
				//ͨ���������·���������Ч��ɾ��json���ڵ�
				//һ�㲻ʹ��XStream��ת��json��Ч�ʲ��ߣ�Ч�ʱȽϸߵ�Json������Jaskson
				@Override
				public HierarchicalStreamWriter createWriter(Writer out) {
					 return new JsonWriter(out, JsonWriter.DROP_ROOT_MODE);
				}
			});
			stream.alias("group",Group.class);
			stream.alias("user", User.class);
			Group g = new Group();
			g.addUser(new User(1,"����","123"));
			g.addUser(new User(2,"����","1234"));
			g.addUser(new User(3,"����","12345"));
			g.addUser(new User(4,"����","123456"));
			System.out.println(stream.toXML(g)); //ת����json
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


ʹ��jasksonת��:
	public class TestJaskson {
		@Test
		public void test01() {  //bean => json
			StringWriter out = new StringWriter();
			JsonGenerator jg = null;
			try {
				//1������JsonFactory
				JsonFactory jf = new JsonFactory();
				//2������JsonGenerator
				jg = jf.createJsonGenerator(out);
				jg.useDefaultPrettyPrinter(); //ʹ��һ�����Ư���ĸ�ʽ���
				//3������ObjectMapper,ͨ��ObjectMapper��д����
				List<User> us = new ArrayList<User>();
				us.add(new User(1,"�Ͷ���","123",new Group(1,"����")));
				us.add(new User(2,"��˽�","123",new Group(1,"����")));
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
			String json = "{\"id\":1,\"username\":\"�ӻ�\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"����\"}}";
			ObjectMapper mapper = new ObjectMapper();
			User u = mapper.readValue(json, User.class);
			System.out.println(u.getId()+","+u.getUsername()+","+u.getGroup().getName());
		}
		
		@Test
		public void test03() {  //json -> list
			String json = "[{\"id\":1,\"username\":\"�Ͷ���\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"����\"}},{\"id\":2,\"username\":\"��˽�\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"����\"}},{\"id\":3,\"username\":\"��ѧ��\",\"password\":\"123\",\"group\":{\"id\":2,\"name\":\"����\"}}]";
			ObjectMapper mapper = new ObjectMapper();
			//�ڰ�jsonת��Ϊlist��ʱ�򣬲���ֱ�Ӵ洢Bean����list�д洢����Map����
			/*List<User> us = mapper.readValue(json,List.class);
			for(User u:us) {
				System.out.println(u.getUsername());
			}*/
			/**
			 * ���Ե�json����ͨ��map���洢�ģ�����ֱ�Ӵ洢bean�������ڿ����У����ַ���ת��Ϊ����
			 * һ��ֻ��Ե����Ķ���ת�������ٻ��õ������б��ת��
			 */
			List<Map<String,Object>> us = mapper.readValue(json, List.class);
			for(Map<String,Object> m:us) {
				System.out.println(m.get("id"));
				System.out.println(m.get("group"));
			}
		}
		
		@Test
		public void test05() {  //ͨ��node������json
			String json = "[{\"id\":1,\"username\":\"�Ͷ���\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"����\"}},{\"id\":2,\"username\":\"��˽�\",\"password\":\"123\",\"group\":{\"id\":1,\"name\":\"����\"}},{\"id\":3,\"username\":\"��ѧ��\",\"password\":\"123\",\"group\":{\"id\":2,\"name\":\"����\"}}]";
			ObjectMapper mapper = new ObjectMapper();
			// ��Jaskson���ṩ��һ�ֻ��ڽڵ�Ķ�ȡ����
			JsonNode node = mapper.readTree(json);
			//�ж�����ڵ��Ƿ�������
			System.out.println(node.isArray());
			System.out.println(node.size());
			System.out.println(node.get(0).get("username"));
			System.out.println(node.get(0).get("group").get("name"));
		}
	}
	----------------------------------------
	public class JsonUtil {
		private static JsonUtil ju;
		private static JsonFactory jf;   //���̰߳�ȫ��,��ȫ�ֹ���, ���Կ����õ���
		private static ObjectMapper mapper; //���̰߳�ȫ��,��ȫ�ֹ���, ���Կ����õ���
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

��������:
	<script type="text/javascript">
	/*
	 * �����·�ʽ���ң���������Ч�ʲ��ߣ����Կ���ֱ��ʹ��xpath����ɲ�ѯ
	 /address/province-->�ҵľ������е�province����
	 /address/province[@value='xxx']/city-->�����Ե�province�е�������value=xx��city�ڵ�
	 //city[@value='xx']/country--->/address/province/city[@value='xx']/country
	 */
	(function(){
		
	var areaDoc = null;  //����xml�ĵ�.  ������б�����ʱ��,����������������Щ����,Ȼ������ִ�е�. ����ȫ�ֱ���

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
		pn.options.length = 1; //���options,ֻ������һ��Ԫ��
		for(var i=0;i<ns.length;i++) {
			var node = document.createElement("option");
			node.text = ns[i].getAttribute("name");
			node.value = ns[i].getAttribute("value");
			pn.add(node);
		}
	}

	function initProvince() {
		//ͨ��ajax��ȡArea.xml�����һ�ȡ���е�ʡ������
		var xhr = createXMLHttpRequest();
		xhr.open("GET","Area.xml",true);
		xhr.onreadystatechange = function() {
			if(xhr.readyState==4&&xhr.status==200) {
				areaDoc = xhr.responseXML;
				var pns = areaDoc.getElementsByTagName("province");
				/*
				//ͨ��һ���ַ����ڵ������뵽select�У�IE�������bug�����Ա���ͨ������option�ķ�ʽ������
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
			//����������������
			return new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			//���IE5��IE6
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			alert("��ʹ�õ��������֧��XMLHttpRequest���뻻һ����������ԣ�");
			return null;
		}
	}
	})();
	</script>
	</head>
	<body>
	<select id="province">
		<option>��ѡ��ʡ��</option>
	</select>
	<select id="city">
		<option>��ѡ�����</option>
	</select>
	<select id="country">
		<option>��ѡ���ط�</option>
	</select>
	</body>
	--------------����ʹ��xpath��ʽ-------------------
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
		if(window.ActiveXObject) {  //ieͨ��xpath��ȡ�ڵ�
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
			alert("��ѡ�����������");
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
		//ͨ��ajax��ȡArea.xml�����һ�ȡ���е�ʡ������
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
			//����������������
			return new XMLHttpRequest();
		} else if(window.ActiveXObject) {
			//���IE5��IE6
			return new ActiveXObject("Microsoft.XMLHTTP");
		} else {
			alert("��ʹ�õ��������֧��XMLHttpRequest���뻻һ����������ԣ�");
			return null;
		}
	}
	})();

