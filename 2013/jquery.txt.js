/*$(document).ready(function(){
	alert("hello jquery");
});*/
//����ʹ������ķ�ʽ���������Ĳ���
$(function(){
	alert("hello query");
});

window.onload = function() {} //���д����, ����д�ķ����Ḳ��ǰ��ķ���
$(function(){ }); //JQuery�Լ����¼�����������Ĵ���ʹ�������������ᱻ����

js������jquery�����ת��:
	js����ת����jquery����,ֻ��ͨ��$(jsObj);
	//ÿһ��jquery�ڵ㶼��һ�����飬ֻҪȡ�������е�ֵ�����ֵ����js�Ľڵ㣬��ֻ����js�ķ���
	//��ת��Ϊjs�ڵ�֮�󣬾��޷�ʹ��jquery�ķ��������Ҫʹ��jquery�ķ�����ͨ��$()���з�װ�Ϳ�����
	($("li.abc")[0]).innerHTML = "abccdd";

ѡ����:
	<script type="text/javascript">
		$(function() {
			//ȡli�е�����a
			//$("li a").css("color","#f00");
			// $(".myList>li>a").css("color","#f00");  //>ֻȡ��һ������Ԫ��
			
			//ȥli�Ľڵ�����li�е�href��������http://Ϊ��ͷ.       $=��ʲô��β
			// $("a[href^='http://']").css("background","#00f").css("color","#fff");
			
			//ȡ.myList��ul�еİ�����a��ǩ��li��ǩ
			//$(".myList ul li:has('a')").css("background","#ff0");//
			
			//ȡidΪli1����һ���ֵܽڵ�li,����ֻ��ȥһ���ڵ�,
			//����ֻ��ȡ���ڵĽڵ㣬������ڵĽڵ㲻��li��ʲô��ȡ����ȥ
			//$("#li1+li").css("background","#ff0");
			
			//ȡidΪli����������������������ֵܽڵ�
			// $("#li1~li").css("background","#ff0");
			
			// $("a[title]").css("color","#0f0");
			
			//ҳ��������ƥ���ĳ��Ԫ��
			//alert($("li:first").html());
			//ҳ�������ƥ���Ԫ��
			//alert($("li:last").html());
			//��ȡ����Ҫ��ĵ�һ��li
			// $(".myList>li li:first-child").css("background","#f00");
			//��ȡû���ֵܽڵ��ul
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

Jquery�еİ�װ��:��ͨ��$(exp)��ɸѡ��ҳ���һ��������ʽ��Ԫ��,��һ��Ԫ�ؾ�����Jquery��װ���е�Ԫ��
�Ƚϳ��õ�һЩ������:��ȡ��װ���е�Ԫ�ظ���(size()),ͨ��ĳ���±��ȡ��װ���е�Ԫ��(get(index),��ȡ����jsԪ�ض�����jquery����),
ĳ��Ԫ���ڰ�װ���е�λ��(index(ele))
	//��ȡtr��Ԫ�ظ���
	alert($("tr").length);
	
	//��ִ����get֮��õ��Ľ����һ��js��Ԫ��
	$($("tr").get(1)).css("color","#f00");
	
	//�ж�idΪabc��tr�ڰ�װ����λ��
	alert($("tr").index($("tr#abc")));
	
	//�ڱ��ʽ��ͨ��,���Էָ�����װ����
	//���������װ��̫�࣬������ʱ����Ա䶯��ʱ��ʹ�����ַ�ʽ�Ͳ��ò���
	$("tbody tr:eq(2),tr#abc").css("color","#f00");
	
	//����Ϊ��װ��ʹ��add���������Խ��¼����Ԫ����ӵ���װ����
	$("tbody tr:eq(2)").add("thead tr td:eq(2)")
		.add("tr td:contains('3')").css("color","#f00");
	
	//not�������Խ���װ���е�Ԫ��ȡ����. ע��notֻ����˵�ǰ��װ��, �������������Ԫ��
	$("tr").not("tr#abc").css("color","#f00");
	
	//��ȡtr��λ��С��3��Ԫ��, 
	$("tr").filter("tr:lt(3)").css("color","#f00");
	
	//��ȡtr�е�1,3�γ�һ���µİ�װ�������ص�ֵ�����µİ�װ��
	$("tr").css("background","#00f").slice(1,3).css("color","#f00");
	
	//�Ӱ�װ�����ڲ���ȡ��Ӧ��Ԫ�أ����ص�ֵҲ���°�װ��
	$("table").find("tr#abc").css("color","#f00");
	
	//is��ʾ���ǵ�ǰ�İ�װ�����Ƿ���ĳ��Ԫ��,$(table)�İ�װ����ֻ��һ��Ԫ��table,����û��td
	alert($("table").is("td:contains('�û�')"));
	
	//��ȡtbody�е�����Ԫ��Ϊֵ����3��tr��Ԫ��,���ص�Ҳ���°�װ��
	$("tbody").children("tr:eq(3)").css("color","#f00");
	
	//�ҵ���һ����Ԫ�أ�ֻ��һ��Ԫ�أ������°�װ��
	$("tr#abc").next().css("color","#ff0");
	
	//�ҵ���һ�����ֵ�Ԫ�أ�����Ԫ�أ������°�װ��
	$("tr#abc").nextAll().css("color","#0f0");
	
	//parent����ֻ�Ƿ�����һ����div�������°�װ��
	$("#s1").parent("div").css("color","#0f0");
	
	//�����������������ĸ���ڵ㣬�����°�װ��
	$("#s1").parents("div").css("color","#f00");
	
	//���ص�3��tr�������ֵܽڵ㣬�����°�װ��
	var a = $("tr:eq(2)").siblings("tr").css("color","#f00").is("tr#abc");
	alert(a);

	//ʹ��end���Է�����һ����װ��
	$("tr:eq(2)").siblings("tr")
		.css("background","#00f").css("color","#fff")
		.end().css("background","#f00").css("color","#00f");
	
	$("#users tbody").clone().appendTo("#tus").find("tr:even").css("color","#f00")
		.end().end().find("tr:odd").css("color","#00f");
	
	//andSelf��ʾ�����еİ�װ���ϲ���һ��
	$("#users tbody").clone().appendTo("#tus").andSelf().find("td:contains('3')").css("color","#f00");
	
	//��ѯ����������װ����һ��Ϊtus��tableһ��Ϊusers��table����ʱ���Թ��˵õ�users���table
	//�޷�ʹ��filter(tr)
	$("table").filter("table#users").css("color","#f00");
	//��users���id��Ԫ���й���trΪ2��Ԫ��
	$("#users").find("tr:eq(2)").css("background","#00f");

	--------------------
add:����ԭ��װ��
not:����ԭ��װ��
filter:����ԭ��װ��
slice:�����°�װ��
find:�����°�װ��
clone:�����°�װ��
next|nextAll|siblings|prev|prevAll|children|parent|parents�������°�װ��
end:����ǰһ����װ��
andSelf:���غϲ���İ�װ��

add������µ�Ԫ�ص���װ��,not��filter���ڵ�ǰ�İ�װ���Ļ����Ͻ��й��˺�ȡ����.(ע��,��������Ԫ��)slice,is����
find,parent,children�Ⱦ����ڵ�ǰ��װ����Ԫ����ȥ���һ��߹���ֵ,�������ڰ�װ���й���


map, has, each:
map:
	//ͨ��map������Ч�Ľ�ĳ����װ���е�Ԫ��ת��Ϊ����
	var ps = $("tbody td:nth-child(1)").map(function(){
		var n = $(this).next("td");
		var p = {"id":$(this).html(),"name":n.html()};
		return p;
	}).get();
	for(var i=0;i<ps.length;i++) {
		alert(ps[i].name);
	}
has:
	//��ȡ������ul��li�����ص����°�װ��
	$("li").has("ul").css("color","#f00");
	//��ȡ������span��div�����ص����°�װ��
	$("div").has("span").css("color","#f00");
each: 
	var ns = $("tbody td:nth-child(2)");
	/**
	 * ʹ�����·������б����������ǻ���js���в���
	 * ����jquery���Լ���һ�ױ�������������ֱ��ͨ��
	 * each�������б���
	 */
	/*for(var i=0;i<ns.length;i++) {
		var nn = ns[i];//nn�Ѿ���js�Ľڵ�
		var id = $(ns[i]).prev("td").html();
		var age = $(ns[i]).next("td").html();
		nn.innerHTML = id+">>"+nn.innerHTML+"("+age+")";
	}*/
	
	/**
	 * ����JQuery���ԣ�������each�������е��������
	 * each�е���������n��ʾ����������±�,��0��ʼ
	 */
	ns.each(function(n){
		$(this).html($(this).prev("td").html()+
			"."+$(this).html()+
			"("+$(this).next("td").html()+")");	
	});

attr:
	$("tbody tr").each(function(n){
		alert($(this).attr("id")); //��ȡ
		
		$(this).attr("title","aa");
		
		//���Ի���json�ĸ�ʽ����������,������������һЩ��html�����ԣ�ͨ����Щ��������һЩ���⴦��
		//���������������Ե����ַ�ʽ��jquery1.4֮��ͻ�����ʹ�ã���Ϊ��1.4֮���ṩdata����
		$(this).attr({
			"title":$(this).children("td:eq(1)").html(),
			"id":$(this).children("td:eq(0)").html(),
			"personId":n
		});
		
		$("tr#2").removeAttr("personid"); //�����Ƴ�����

		//��������a����httpΪ���ӿ�ͷ�ĳ��������´��ڴ�
		$("a[href^='http://']").attr("target","_blank");
		
		//����tbody�е�tr��title���ԣ������Ե�ֵΪ�ڼ���tr
		$("tbody tr").attr("title",function(n){
			return "���ǵ�"+(n+1)+"��tr";
		});
	});

data(�����ݴ洢�ڱ�ǩ��,������ֱ���ڱ�ǩ��д����,��ֱ���ڱ�ǩ��д���Բ��������������֧��):
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
		//���Խ�һЩֵ�洢�ڱ�ǩ�У����ֵ����ͨ�����Եķ�ʽ��ʾ���û�
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
		//���һ����ʽ��removeClass���Ƴ�һ����ʽ
		$("thead tr").addClass("addBg").addClass("bigger").removeClass("addBg");
		//�ж��Ƿ����ĳ����ʽ
		alert($("thead tr").hasClass("bigger"));
		
		/*
		 * Ϊtr����������¼����������ȥ����������¼���������ȥ��ʱ�������ʽ�����ߵ�ɾ����ʽ
		 * Ϊ����Լ�ʵ�ֵ�һ����ĳ���������ڶ����¼���ĳ�����������Ĺ��ܣ�JQuery�ṩ
		 * toggleClass()-->�������ָ�����ж��Ƿ�������࣬����о�ɾ�������û�о����
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
	//JQueryͨ��css��ָ����ʽ����������֧��opacity͸����
	$("#d1").css("height",90+"px").css("width",90+"px")
			.css("background","#00f").css("color","#fff")
			.css("opacity","0.6").height(100).width(100)
			.click(function(){
				//JQuery�ṩ��һЩ�ǳ����õķ�������������ʽ,width,height
				$(this).width($(this).width()+20).height($(this).height()+20);
			});

form:
	$("#btn").click(function(){
		//��ȡ����ֵ
		alert($("#username").val());
		
		//���ñ���ֵ
		$("#username").val("������");
		
		//checkbox�õ�����һ�����飬��Ҫ���б���
		$("input[name='interest']:checked").each(function(n){
			alert($(this).val());
		});
		
		//checkboxֻ�ܴ�������
		$("input[name='interest']").val(["����","����","��ë��"]);
		
		// alert($("input[name='sex']:checked").val());
		
		//$("input[name='sex']").val(["1"]);
		// $("input[name='sex'][value='1']").prop("checked","true");
		// alert($("input[name='sex']:checked").val());
		
		//�ܹ���ȡselect��ֵ
		//alert($("#address").val());
		//��ȡselect�е������ı�
		//alert($("#address").text());
		//ע��:Ҫһ���ո񣬲��û���select��checked��Ԫ��
		//�Ӹ��ո��������Ԫ��
		//alert($("#address :checked").text());
		//{username:xx,password:xx,interester:[2,1,],sex:x,address:add}
		$("#address").val(2);
	});

ȫѡ,��ѡС����:
	<script type="text/javascript">
		$(function() {
			$("#all").click(function(){
				if($(this).prop("checked")) {
					//ѡ��
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
		<input type="checkbox" id="all"/><span>ȫѡ</span>
		<input type="button" id="reverse" value="��ѡ"/>
	</body>


js event:
	var all = $("*");
	all.each(function(){
		var rel = this;
		this.onclick = function(event) {
			//1����ȡ�¼�������Ŀ��
			//��Ҫ���ݲ�ͬ������������жϣ�΢���ֻ֪��window.event
			event = event?event:window.event;
			//IE��֪��target����ʹ��srcElement������
			var target = event.target?event.target:event.srcElement;
			print("�¼�Դ:"+target.id+","+target.tagName+",�¼�����:"+this.id);
			//ģʽ��DOM0��������¼�ð�ݣ�����ͨ��event.stopPropagation()��ȡ���¼���ð�ݻ���
			event.stopPropagation();
			//IE��ͨ�����������ȡ��ð��
			event.cancelBubble = true;
			//DOM0ģ�Ͳ�֧���¼�����(�ȴ�����Ԫ�ص��¼�,Ȼ���ٴ�����Ԫ�ص��¼�,һֱ���´���.���¼�ð��˳���෴)
			//����DOM0ģ�͵ĵڶ����������¼��ᱻ����
			$("#child")[0].onclick = function(){
				print("abc");	
			}
			$("#child")[0].onclick = function(){  //����Ķ���ĻḲ��ǰ���
				print("bcd");	
			}
		}
	});
	function print(txt) {
		$("#content").append(txt+"<br/>");
	}
	------------------
	//ʹ����DOM2֮�󣬿��������¼��ĸ����ˣ����һ��ṩ��һ����������˵���ǽ����¼�ð�ݻ��ǲ���
	$("#child")[0].addEventListener("click",function(){
		print("abc");				
	});
	$("#child")[0].addEventListener("click",function(){ //������¼�������ʱ��,�����������ᱻִ��
		print("bcd");				
	});
	------------------
	//IE ʹ��attachEvent. û�е���������,���ܿ��������¼�ð�ݻ����¼�����
	this.attachEvent("onclick",function(event){
		event = event?event:window.event;
		var target = event.target?event.target:event.srcElement;
		print("�¼�ð��-->�¼�Դ:"+target.id+","+target.tagName+",�¼�����:"+this.id);
	});
	//FF ʹ��addEventListener, ����������true��ʾ�¼�����, false��ʾ�¼�ð��
	this.addEventListener("click",function(event) {
		event = event?event:window.event;
		var target = event.target?event.target:event.srcElement;
		print("�¼�����-->�¼�Դ:"+target.id+","+target.tagName+",�¼�����:"+this.id);
	},true); 

jquery event:
	$("*").bind("click",function(event){
		print(event.currentTarget.id+"--"+event.target.id);
		//����JQuery��Ȼ�����¼�������ʹ�����º���ȡ���¼�ð��
		event.stopPropagation();
		//�������form����a���ܲ�ϣ�������ύ���߼������ʳ����ӣ�
		//����ͨ��event.preventDefault��ֹ�¼�����������
		//�ر�ע�⣺������¼�ð��û���κεĹ�ϵ
		event.preventDefault();
	})
	----------------------------
	//����ֻ��ִ��һ��
	$("*").one("click",function(event){
		print(event.currentTarget.id+"--"+event.target.id);
	})
	----------------------------
	$("a[href='ccc']").bind("click",function(event){
		/*
		 * ʹ��trigger�����ĺô�������
		 * 1�������������Ķ����е�������һ���¼�
		 * 2������Ϊ�¼����ݲ���
		 * ʹ��trigger��ȻҲ�����¼�ð��
		 */
		$("#child").trigger("click",[2,3]);
		event.preventDefault();
	});
	---------------------------------
	$("a[href='ccc']").bind("click",function(event){
		/*
		 * ʹ��triggerHandler�����ĺô��ǿ���ֱ���õ��õ��¼�
		 * ��ð�ݣ����ύ�������ĺô�����
		 * д�¼����ǿ�����ȫ�����������ķ�ʽ��д�����ÿ����¼�����
		 * �������ʹ��ͨ��triggerHandler�����þͻ���ֹ�¼�����
		 */
		$("#child").triggerHandler("click",[2,3]);
		event.preventDefault();
	});
	------------------------------------
	//����ͨ���ո�󶨶���¼�         .test�������ռ�,�Ƴ��¼���ʱ�����ʹ��.test���Ƴ�
	$("#child").bind("mouseover.test mouseout.test",function(event){
		$(this).toggleClass("bgc");
	});
	//ȡ����mouseout�¼�
	//$("#child").unbind("mouseout");
	
	//���Ƴ��¼���ʱ�򣬿���ֱ��ͨ�������ռ�һ���Ƴ�
	$("a[href='ccc']").bind("click.test",function(event){
		print("a");
		event.preventDefault();
	});
	//�Ƴ�һ���¼�
	$("*").unbind(".test");
	------------------------------------------
	$(".ccc").bind("click",function(event){
		alert($(this).html());
	});
	//����bind�������������ǣ���������Ԫ�ص�ʱ��û�а취Ϊ��Ԫ�ذ��¼�
	//��Ҫ����ʹ��bind��bind�������󶨡�
	$("#content").append("<div class='ccc'>bbbbb</div>"); 
	-----------------------------------------------
	$(".ccc").live("click",function(event){
		alert($(this).html());
	});
	/*
	 *  ʹ����Live�¼�֮�󣬾���Ч�������Ԫ���޷��󶨵�����
	 *  live�¼����ڵ�ԭ����ͨ���¼�ί�еķ�ʽ
	 *  �¼�ί����ͨ��ð�ݻ���ʵ�ֵ�
	 */
	$("#content").append("<div class='ccc'>bbbbb</div>");
	-----------------------------------
	//�ڶ�����������ָ����Ӧ�������ģ�˵���¼�ί�ɵĸ�������ʲô
	//��������д�����ѿ�������jquery��1.3֮���ṩdelegate�ķ��������
	$(".ccc","#content").live("click",function(event){ //.ccc�ĵ���¼�ֻ��#content�������������Ч
		alert($(this).html());
	});

	$("#content").append("<div class='ccc'>bbbbb</div>");
	$("#abc").append("<div class='ccc'>bbbbb</div>");
	---------------------------------------
	//closest���������ң�����Լ�����ͷ��أ�����Լ������㣬����������
	//����closest���Դ��Լ��ң�����closet�ǳ��ʺ����¼�ί��
	//$("#ll").closest("li").css("color","#ff0");
	/*
	 * �¼�ί�е�ԭ��
	 * ��ʱÿһ���¼�ֻҪ���������������ð�ݵ�documentȥ
	 * ���������¼��ᱻ����
	 * �ڴ���ʱ���ж�һ�¸��¼��Ƿ�����Ҫ����Ķ���Ϳ�����
	 */
	$("#content").bind("click",function(event){
		var obj = $(event.target).closest(".ccc");
		if((obj[0])==event.target) {
			alert("abc");
		}
	});
	/*
	 * ����live���Ծ���ʹ���¼�ί�ɵķ�ʽ������ʹ�������ʽ�������������
	 * 1��ÿ���¼�����ð�ݵ�document(����������)����ȥ���������
	 * 2��ʹ��Live��֧��һЩ������¼�
	 * ����live�������ѣ����ṩ�˵ڶ�������˵���󶨵�������
	 */
	 -----------------------------------
	 /*
	  * ����live�¼�д���ܹ֣�������1.4֮���ṩ��delegate������¼�ί��
	  * $("#content")��ʾ���������򣬵�һ��������ʾ���ǰ󶨶���
	  * ��ʱlive�Ͳ��ٱ�ʹ���ˣ���δ���İ汾live�ᱻȡ��
	  * Ŀǰ���Ҫ���¼�ί�ɿ����ж��ַ�����ʹ���¼��ĵ���ѡ��ܶ࣬JQuery��1.8֮��
	  * ��ͳһʹ��on��off�����bind,live��delegate
	  */
	 $("#content").delegate(".ccc","click",function(event){
	 	alert($(this).html());
	 });
	 $("#content").append("<div class='ccc'>bbbbb</div>");
	 $("#abc").append("<div class='ccc'>bbbbb</div>");
	 -------------------------------
 	//��ʱon�ĵڶ�������û���趨������Ϊ�Ƕ�.ccc��
 	//����Ȼ����ģ����bind
 	// $(".ccc").on("click",runc);
 	//���ڶ�������ֵ��ʱ�򣬵��õĶ������Ϊί�ɸ�����
 	$("#content").on("click",".ccc",runc);  //jquery1.8����on
 	$("#content").append("<div class='ccc'>dddddd</div>");
 	$("#abc").append("<div class='ccc'>dddddd</div>")
	 function runc(event) {
	 	alert($(this).html());
	 }
	 -------------------------------
	 //jqeury��mouseout��mouseover(domҲ��)�����¼�ð��,ʹ��mouseenter��mouseleave(jquery���е��¼�)�������¼�ð��
	 //���ͬʱʹ��mouseenter��mouseleave,����ʹ��$("#xx").hover(over, out), 
	 //over, out�ֱ��Ӧmouseenter��mouseleave�Ļص�����. hoverҲ��û���¼�ð�ݵ�

animate:
	/**
	 * ����ʹ��jquery˵�ṩ��show��hide����ɴ����������غ���ʾЧ��
	 * �������������Ƚ����ƣ�����ֱ��ʹ��toggle����ɲ���
	 */
	$(".topicList h3").toggle(function(){ 
		$(this).next("ul").show(1000);
	},function(){
		$(this).next("ul").hide(1000);
	});
	
	/**
	 * toggle������������������Ҷ��Ǻ�������ʾ��һ�ε��ִ�е�һ������
	 * �ڶ��ε��ִ�еڶ�������
	 */
	$(".topicList h3").toggle(topicHandler,topicHandler);
	
	function topicHandler() {
		//ʹ��fadeIn,show,slideDown�������ĳ����������ʾ
		//ʹ��fadeOut,hide,slideUp�������ĳ������������
		//���Կ���ͨ��������toggle���������֮����ֻ�
		$(this).next("ul").fadeToggle(1000);
	}

	-------------------------------------
	$("#go").click(function(){
	  $("#block").css({"font-size":"10em","position":"relative"}).animate({ 
	  	 width:1000,
	  	 opacity:0.5
	  }, 'slow' );
	});

���ù��߷���:
	/*
	 * ��jQuery��$���Ž���ֻ��һ����������ʱ��$���õ�ʱ����ʵ����ʹ��jQuery����
	 * ��ʱ������������ǣ������ĺܶ�js���(prototype֮��Ŀ��)��ϰ����$������
	 * �Լ��Ĺؼ����󣬴�ʱ������js�Ⲣ���ʱ�򣬾ͻᷢ����ͻ
	 * ��JQuery�ж�����һ��noConfilct()�����������ͻ����ʹ�����������֮��$����
	 * �Ͳ�������JQuery��ʹ���ˣ���JQuery�оͽ���ֻ��ʹ��jQuery��
	 * ���Ǵ�ʱ���һֱʹ��jQuery�����û�Ӱ�쿪��Ч�ʣ����Գ��õ�һ�ַ�ʽ��
	 * var $j = JQuery.noConflict();��ʱ�Ϳ�����$j�����$
	 */
	var $j = jQuery.noConflict();
	$j("#users").css("color","#f00");

	//���汾�Ƿ���IE
	//alert($.browser.msie);
	if($.browser.msie) {
		//��ȡIE�İ汾��
		alert($.browser.version);
	}
	
	var person = {name:"У��",age:29};
	//�������Ա������飬�����Ա���������������������飬ֻ��һ������
	//������������������
	$.each(person,function(key,value){
		alert(key+","+value);
	});
	
	var person1 = {name:"У��",age:29,address:"��ͨ"};
	var person2 = {name:"ŮУ��",age:45};
	// ���õڶ������������������ǵ�һ�����������ԣ�û�еľͲ����и���. �ڶ��������б仯
	var p = $.extend(person1,person2);
	alert(person1.name+","+person1.age+","+person1.address); //ŮУ��,45, ��ͨ
	alert(p.name+","+p.age+","+p.address); //ŮУ��,45, ��ͨ
	alert(person2.name+","+person2.age); //ŮУ��,45
	var po = new Object();
	//��ʱ���person2��ֵ���ǵ�person1�У����Ҵ洢��po��,������po. ��ʱ���ı�person1
	var p = $.extend(po,person1,person2);
	alert(person1.name+","+person1.age+","+person1.address); //У��,29,��ͨ
	alert(p.name+","+p.age+","+p.address); //ŮУ��,45,��ͨ
	alert(po.name+","+po.age+","+po.address); //ŮУ��,45,��ͨ
	/**
	 * extend��д�����ʱ��Ϊ����
	 */
	//grep��������������һ����ʾԪ��ֵ���ڶ�����ʾ����
	var as = $.grep([1,2,3,4,5],function(n,i){
		return n%2==0;
	});
	// alert(as);

	var as = $.grep($("table tr"),function(n,i){
		//Ҳ���Դ����װ��
		return $(n).find("td").is(":contains('��')");
	});
	// $(as).css("color","red");
	
	//����ҵ����������±꣬���û���ҵ�����-1
	alert($.inArray(23,[1,23,4,]));
	
	alert($("table tr").toArray());
	
	alert($.makeArray($("table tr")));
	
	//���Զ�Ԫ�ص����Խ���ͳһ�Ĵ���
	var ms = $.map([2,4,6,8],function(n){
		return n*10;
	});
	alert(ms);
	
	var ms = $.map({name:"aaa",age:123},function(value,key){ //ע��,��һ��������value������key
		var v="";
		if(key=='name') {
			v = "����";
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
	alert($.merge(a1,a2)); //�ϲ�����
	alert(a1);
	
	var p = {username:"����",age:23};
	alert($.param(p)); //����url����ʹ�õĲ�����ʽusername=xx&age=23


���:
	/**
	 * ֱ��ͨ��$.�������ƾͿ��Զ���һ��ȫ�ֵĲ�������ֶ������������
	 * 1��һ��������Ҫͨ��һ��������js�ļ����洢�������Ĺ����ȷ��
	 * 2���������$������ű�jQuery.noConfilct֮����α�֤���ܼ���ʹ��
	 */
	/**
	 * ֱ��ͨ��$.�������ƾͿ��Զ���һ��ȫ�ֵĲ�������ֶ������������
	 * 1��һ��������Ҫͨ��һ��������js�ļ����洢�������Ĺ����ȷ��  (��jquery.xx.validate.js)
	 * 2���������$������ű�jQuery.noConfilct֮����α�֤���ܼ���ʹ��
	 * 	  �����ʽ:1������ͨ��$������ֱ��ͨ��jQuery������,���ǻ����ӹ�����
	 *           2��ͨ���հ��������������Ķ���ȫ���ŵ�һ���հ���
	 *				(function($){
	 *
	 *				})(jQuery)
	 * 3�����Ϊ���ȷ�����������һ����������7������
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
	 	 * Ҫ�����װ���Ĳ��,��ȫ����ʹ��jQuery.prototype = xx. Ȼ��Ϳ���ʹ��$().xx
	 	 * ��jquery�в�����ʹ��jQuery.prototype�������װ���Ĳ��,jQueryר�Ŷ�����һ��jQuery.fn = jQuery.protytype
	 	 */
	 	$.fn.formatTopic = function(options) {   
	 		this.each(function(n){
	 			//���ʱ���this�Ͳ����ǰ�װ�����󣬶�������հ�����
	 			//��ʱ�հ������е�������һ��html�Ľڵ㣬Ҫ���ʾ���Ҫʹ��$(this)
	 			$(this).html($.fixedTopicWidth($(this).html(),options));
	 		});
	 	}
	 	
	 	/**
	 	 * ʹ��$.fn��������װ�����
	 	 */
	 	$.fn.setColor = function(){
	 		//��ʱ��this����ָ����������װ�������Ѿ�����װΪ��װ��
	 		//�Ͳ�����ʹ��$(this)����װ
	 		this.css("color","#0f0");
	 		//���ڰ�װ���ĺ���һ��Ҫ�ܹ�֧����ʽ�ṹ
	 		return this;
	 	}
	 	
	 	/**
	 	 * ���stateΪtrue�ͱ�ʾreadOnly,�����ʾȡ��readonly
	 	 */
	 	$.fn.setReadOnly = function(state) {
	 		//1���ҵ����е��ı���
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
	 		 * Ϊÿһ������ͼ�趨��Ӧ�����ݣ��Դ˿�����showPhotoͨ���±����
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
	 			//�����ڵ��֮��ȡ��click
	 			$(setting.movieElement).off("click");
	 			if(index<0) index = thumbnails.length-1;
	 			if(index>=thumbnails.length) index=0;
	 			$(setting.movieElement)
	 				.attr("src",setting.replacePath(thumbnails[index].src))
	 				.css("opacity","0.0").animate({opacity:1.0},1000,function(){
	 					//�������������֮�󣬿���click
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
	//1������Ajax�ķ�ʽ������ֱ��Ϊ��װ��������������ajax֮������ݻ��Զ����ص���װ����
	/*
	��URL�п���ͨ���ո���������Ӧ��ѡ���������±�ʾȥ01.htmlҳ���л�ȡidΪc��Ԫ�ؼ��ؽ���
	*/
	//$("#content").load("01.html #c");
	//��ʹ���˵ڶ�������ֵ ֮�󣬾��Զ�ת��Ϊpost����
	$("#content").load("01.html",{id:11},function(data){
		//function����ص�������ʾ���������֮���һЩ����ʽ
		//1���Ѿ�������˶�content������ݵĴ���֮��Ż���øú���
		//alert(data);
		
		/*
		�ر�ע�����½��⣺
		����data��һ��html���͵�ֵ��ͨ��$(data)֮�󣬻ὲ���ֵ��װΪJQuery����
		��jQuery�а�װһ��document�������������Ὣ����body�еĸ��ڵ��װ����װ����
		*/
		/*   01.html body�е�����:
			<h1>�����������سɹ�</h1>
			<div id="c">
				�ǺǺǣ����سɹ�
				<div id="c1">
				�����C1�е�����
				</div>
			</div>
		*/
		//���Ҫ��ȡh1��ֵ,��Ϊh1�Ǹ����󣬻ᱻ��װ����װ���У�ֻ��ͨ��filter����ȡ
		alert($(data).filter("h1").html());
		//idΪc1��Ԫ���ǰ�װ���е�Ԫ�أ�������Ҫͨ��find����ȡ
		alert($(data).find("#c1").html());
		
		alert($(data).filter("#c").html());
	});

get:
	$.get("02.xml",function(data) {
		//���ʹ�õķ���������xml�Ļ���data����һ��xml��Ԫ��. 
		// alert(data.getElementsByTagName("h1").length);
		//����������xmlֻ��ͨ��text��ȥԪ�أ���֧��html()ȡԪ��
		//�ر�ע��:�õ���ֵ����Ѹ������װ�ڰ�װ���У�����Ҫͨ��find����Ԫ��
		alert($(data).find("person").text());
	},"xml");
	
	//��ȡ����Ϊjson��ֵ��һ��ע��json�ĸ�ʽ������Ϲ��
	$.get("user.json",function(data){
		alert(data.name);
	},"json");
	//���Ϸ�����$.getJSONһģһ��

jqeuryʵ������:
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
	<select id="province"><option>��ѡ��ʡ��</option></select>
	<select id="city"><option>��ѡ�����</option></select>
	<select id="country"><option>��ѡ���ط�</option></select>
	</body>

������д�ɲ��:
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
			//����һ������ָ��this�������ڱհ��д���
			var target = this;
			opts.ps = $("<select id='province'><option>��ѡ��ʡ��</option></select>");
			opts.cis = $("<select id='city'><option>��ѡ������</option></select>");
			opts.cos = $("<select id='country'><option>��ѡ���ط�</option></select>");
			//ͨ��Ajax�����ļ������ҳ�ʼ�����е�xml�ڵ�
			opts.areaXml;
			$.get(opts.url,function(data){
				opts.areaXml = data;
				setAddress();
			});
			function setAddress() {
				//1����ʼ����Ӧʡ�ݽڵ�
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
ҳ�����:
	$(function(){
		$("#address").address({
			countryChange:function(){
				$("#test").append($(this).val());
			}
		});
	});


//��ʽ��Ϊ������ĳ����ӵĲ��������ַ���aaa=xx&bb=xx
alert($("form").serialize());
//��ʽ��Ϊ��Ӧ��json���飬�����ַ���
alert($("form").serializeArray());
	
JQuery��1.5֮���ṩ��Deferred��Promise����������������Ӧ��ͬ������
��1.5֮ǰ����������һ��ajax֮�󣬻᷵��xhRequest����1.5֮��ͷ���promise����
promise�����������ȡ��ͬ����Ĵ���ʽ
done��fail:
	//����ajax֮�󷵻ص���һ��promise���󡣿���ͨ��������������гɹ�����ʧ��֮��ص�����
	var promise = $.ajax("02.html",{dataType:"html"});
	//ʹ��promise��������趨��ִ����ɺ�ʧ�ܵĲ���
	promise.done(function(data){
		//�ɹ���ʱ����Ĳ���
		alert(data);
		alert(($(data).filter("h1")).length);
		
	}).fail(function(data){
		//ʧ�ܵ�ʱ����Ĳ���
	}).done(function(data){
		//ʹ�����ַ�ʽ������ִ�ж���ص���������
		$("body").html($(data).filter("h1").html());
	});*/
	
then: ����ʹ��then���滻done��fail��һ���������ǳɹ�֮��Ĳ���.�ڶ�����������ʧ��֮��Ĵ�����
	promise.then(function(data){
		alert(data);
	},function(data){
		alert(data);
	})

when: ����ʹ��when��ָ���ڶ��ajax����ִ�����֮��Ž��в���
	 ���Դ��������ã��ڴ����ʱ�����ͨ�����������������Ϣ
	var promise = $.when($.ajax("02.html",{dataType:"html"})
			,$.ajax("03.html",{dataType:"html"}));
	
	promise.done(function(data1,data2){
		alert(data1);
		alert(data2);
	}).fail(function(){
		
	})

Ϊfunction����defered:
	function wait() {
		var def = $.Deferred();
		setTimeout(function(){
			alert("invoke");
		},1000)
	}
	wait();  //��ִ�е�setTimeout���첽, ��ִ��alert("aa");���Ҫʵ��ͬ��,ͨ��defered
	alert("aa");
	-----------------
	function wait() {
		//setTimeout���첽�������Ҫ��֤���Խ���ͬ������
		//��Ҫͨ��promise��������ͨ��$.Deferred�����.promise()�������Ի�ȡpromised����
		var def = $.Deferred();
		setTimeout(function(){
			alert("invoke");
			//ͨ������def��resolve��ָ�������Ѿ�ִ�����
			//ִ�гɹ�ʹ��resolve��ִ��ʧ��ʹ��reject��ָ��
			//def.resolve("abc");
			//��һ�������������Ķ���
			def.rejectWith($("div"),["ok"]);
		},1000)
		
		return def.promise();
	}
	wait().done(function(value){  //value����resolve(value)�еĲ���
		alert("success:"+value);
	}).fail(function(value){
		//Ĭ�����this��ָ����������Ķ������ϣ����ȡ��Ӧ����������this
		//�����ڵ��õ�ʱ��ͨ��def.rejectWith("�����Ķ���")
		alert(this.append("abc"));
		alert("fail:"+value[0])
	});

pipe:
	pipe��ʾ���Է���һ��promise���������Ϳ���֧����ʽ���
	��һ��pipe�ķ���ֵ�ᴫ�뵽�ڶ���pipe�Ĳ�����
	ֻҪ��һ��pipe������reject֮��pipeĬ�϶��Ƿ���reject��
	������fail�д���
	$("#content").promise().pipe(function(data){
		//this���ǰ�װ������
		//$(this).html("abc");
		var n = 10;
		//ֻҪ����һ��ֵ�ͱ�ʾ����ȷ��Ϣ
		if(n>5) {
			var def = $.Deferred();
			def.reject("error");
			return def;
		} else {
			return n;				
		}
	}).pipe(function(value){
		//���ܽ��ж��ٸ�pipe��this���ǰ�װ��
		//$(this).html("abc");
		return value+10;
	},function(value){
		//�ڶ����������ش�����Ϣ
		alert(value);
		//������һ��pipe���ص��Ǵ�����Ϣ֮�������ֱ�ӷ��ش���
		//���ϣ��������ȷ��Ϣ��Ҫͨ��def.resolve������
		return value;
	}).done(function(value) {
		alert(value);
	}).fail(function(value){
		alert("fail:"+value);
	});
	-----------------------------
	�����γ���һ�ֻ���ajax����ʽ�ṹ��ͨ��������ʽ�ṹ���Էǳ������������һЩ
	��ʽ��֤��ȡ����
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
		//��֤�û�
		$.getJSON("users.json").pipe(function(data){
			if(checkUser(data,username,password)) {
				//�����ȷ��ֱ�ӷ��صڶ�����֤
				return $.getJSON("status.json");
			} else {
				//�������ͷ��ش�����Ϣ
				var def = $.Deferred();
				def.reject("�û����������벻��ȷ");
				return def;
			}
		}).pipe(function(data){
			alert(username);
			if(checkStatus(data,username)) {
				return username;
			} else {
				var def = $.Deferred();
				def.reject("�û��Ѿ���ͣ�ã��������Ա��ϵ");
				return def;
			}
		}).done(function(data){
			$("#content").html("��ӭ��"+data+"��¼���ǵ�ϵͳ��");
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

dialogС����:
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
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	<h1>�����Լ�����ĶԻ���</h1>
	</div>
	<div id="dialog">
		<h1 class="title"><span>�ر�</span></h1>
		<div id="content"></div>
	</div>
	</body>
	</html>

���߹���С����:
	<script type="text/javascript">
		$(function(){
			var index = 1;
			loadData();
			$(window).scroll(function(){
				var pa = $(this).scrollTop()+20>=$(document).height()-$(this).height();
				if(index>10) {
					$("body").append("�������");
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
	<h1>���޹�������</h1>
	<div id="content">
	</div>
	</body>


