css:����ʹ��jquery ui��css
<h3 class="ui-icon ui-icon-clipboard">����</h3>

effect:
	$(function(){
		$("#btn").click(function(){
			/**
			 * ��һ��������ʾЧ������ѯAPI���Կ�ÿһ��Ч��������
			 * ��Ӧ��������Ҫ�ڵڶ�������option������
			 * �ڶ�������ʾһЩoptions����   ��ͬ��effet���Ų�ͬ��options
			 * ������������ʾ��ʱ����
			 * ���ĸ�������ʾִ����Ч��֮��ķ���
			 * �ر�ע�⣺��option�п������û���Ч������demo���Բ�ѯ��ͬ�Ļ���
			 */
			$("#content").effect("slide",{  //content��div
				direction :"right",
				distance:0,
				easing:"easeOutCirc"   //����, ָ��һ�ֻ���Ч��. ��30���ֻ�������
			},2000);
		})
	})
	---------------------
	���Ǻ���ʹ��effect����,��Ϊ��Ϊ�����ṩ��show,hiden..�ȷ����ĸ���,�����ǿ���ʹ����Щ������ʹ��effect��Ч��
	$(function(){
		$("#btn").click(function(){
			//��������effect֮�󣬿���Ϊshow��hiden,toggle��Щ��������effectЧ��
			//����Ĳ�����effect�����Ĳ�����ȫһ��
			//$("#content").toggle("explode");
			//����class�Ĳ������ԣ��Ͳ�����Ч������һ����������class�����ƣ����ǿ���ֱ�����û���
			//$("#content").toggleClass("green",1000,"easeInQuint");
			
			//�����Ƴ���һ������������ڶ�����������ʽ
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
			of:$(window)   //con2��window��,Ĭ��my,at��Ϊtrue
		});
		
		$("#con1").position({
			of:$("#con2"), //con1��con2��,  con1λ��(my)Ϊcenter top�ĵ��Ӧcon2��(at)center top�ĵ�
			my:"center top",
			at:"center top"
		});
	})
	<body>
		<div id="con1">����1</div>
		<div id="con2">����2</div>
	</body>

��ӰͼƬdemo:
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
			//����hide֮�󻹻ᱣ��֮ǰ��position,�´���ʾ��ʱ��position�ͻ��ҵ�, ����Ҫ��hide���֮������left����
							$(this).css("left","0px"); 
						});
					})
					$("#movie img").width(150).height(220).css({
						margin:"20px",
						cursor:"pointer"
					}).click(function(event){
		 //��һ��ͼƬ������ʾ��ʱ��,�����һ������ͼ�ǲ����л���,��Ϊ#movieShow������ʾ��ʱ��Ͳ������show����
		 //����Ҫ��һ��ʼ��hide
						$("#movieShow").css("left","0px").hide().position({
							of:$(window),
							my:"center top",
							at:"center top"
						}).find("img")
						  .attr("src",$(this).attr("src").replace(/thumbnail/,"movie"))
						  .end().show("fade",500);
						
						event.stopPropagation(); //��ֹ�¼�ð�ݵ�document��click
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

draggable��:
	$(function(){
		//��ʱchild���ǿ��϶�״̬
		$("#child").draggable({
			appendTo:"parent",
			helper:"clone",  //Ĭ����original,����¡
			cursor:"move",
			opacity:0.7,
			snap:true, //�Ƿ�����
			revert: false, //Ĭ����false,false�ͱ�ʾ�϶�֮�󲻻�ԭ��ԭ����λ��, ����valid(�ϵ��Ϸ���Ŀ�껹ԭ)��invalid(�ϵ����Ϸ���Ŀ�껹ԭ)
			stop:function(event,ui){ //ui��3������, helper��ǰ����,positionλ��,offsetƫ����
				alert($(ui.helper).parent().html());
			}
			});
		$("#child").draggable("disable");
		//���ʱ�����ʹ��enable����,�������ȳ�ʼ��
		$("#child").draggable("enable");
	})

	<div id="print"></div>
	<div id="parent">
		<div id="child">
			<h3>title</h3>
		</div>
	</div>
	
	<div id="content"></div>

droppable��:
	$(function(){
		//��ʱchild���ǿ��϶�״̬
		$("#child").draggable({
			appendTo:"parent",
			cursor:"move",
			revert:"invalid",//��ʾ���û�е�Ŀ���ж�Ҫ��ԭλ
			opacity:0.7,
			//helper:"clone",
			snap:true,
			scope:"taget"
			});
		
		$("#content").droppable({
			//accept:"#child",//����ֻ�ܽ���ĳ�������϶�����
			activeClass:"activeClz",//����ʼ�϶���ʱ�����ʽ
			hoverClass:"hoverClz",//���ƶ���Ŀ���������ʽ
			scope:"taget",//ͨ��������Կ��԰��ϵ�Ŀ��ͷŵ�Ŀ�����һ��. ֵ�����Լ�ָ��,ֻҪ��������һ��
			//���acceptû�н��ܣ��Ͳ��ܰ�
			drop:function(event,ui){
				//this�Ͻ�content��ʱ����position��ֵ,�ڷŵ�ʱ��Ӧ�ð�position��ֵɾ��,����λ�ò���
				$(this).append($(ui.draggable).css("position","")[0]);
			}
		});
		
		$("#content2").droppable({
			//accept:"#print",
			activeClass:"activeClz",//����ʼ�϶���ʱ�����ʽ
			hoverClass:"hoverClz",//���ƶ���Ŀ���������ʽ
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

ѡ����Ȥdemo:
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
				//�������е�li���Ϲ���
				$("#all ul li").draggable({
					revert:"invalid", //�ϵ����Ϸ�(����scope����acceptָ����)�ĵط�Ҫ��λ
					helper:"clone"
				});
				
				$("#all ul,#choice ul").droppable({
					activeClass: "activeClz",
	      			hoverClass: "hoverClz",
	      			accept:"#choice ul li",
	      			drop:setInterest
				});
				//choice��accept������all�Ĳ�ͬ,����������һ����. �����︲��
				$("#choice ul").droppable("option","accept","#all ul li");
				
				var dblEvent = function(event){
					if($(this).parent("ul").attr("id")=="u1") {
						moveElement(this,"#u2");
					} else {
						moveElement(this,"#u1");
					}
				};
				
				$(".in-ul li").dblclick(dblEvent);
				
				function moveElement(target,un) {  //˫���¼��Ĵ���, target�����ϵĶ���, unָ�����ϵ�����
					$(".in-ul li").off("dblclick");  //���ƶ���ʱ��,Ҫ���õ�˫���¼�, ��Ϊֻ��һ��.temp����ʾ
					var sLeft = $(target).offset().left;  //��ʼ��λ��
					var sTop = $(target).offset().top;
					var eLeft,eTop;  //������λ��
					if($(un+" li").length>0) { //Ŀ������li
						eLeft = $(un+" li").last().offset().left;  
						eTop = $(un+" li").last().offset().top+$(un+" li").last().height();
					} else {
						eLeft = $(un+" h3").offset().left;
						eTop = $(un+" h3").offset().top+$(un+" h3").height();	
					}
					$(".temp").css("display","block").html($(target).html()).offset({top:sTop,left:sLeft})
					.animate({top:eTop,left:eLeft},500,function(){
						$(this).hide();  //����Ư�Ƶ�li���� .temp
						$(un).append(target);  
						$(".in-ul li").dblclick(dblEvent); //�ָ�˫���¼�
					});
				}
				
				function setInterest(event,ui) {
					$(this).append($(ui.draggable)[0]); //$(ui.draggable)[0] ָ�����ϵĶ���
				}
			});
		</script>
	</head>
	<body>
		<div class="temp">abc</div>
		<div id="container">
		<div id="all" class="in-list">
			<ul id="u1" class="in-ul">
				<h3><span>������Ȥ</span></h3>
				<li class="interest"><span>����</span></li>
				<li class="interest"><span>����</span></li>
				<li class="interest"><span>��ë��</span></li>
				<li class="interest"><span>����</span></li>
				<li class="interest"><span>ƹ����</span></li>
				<li class="interest"><span>��Ӿ</span></li>
				<li class="interest"><span>�ﳵ</span></li>
				<li class="interest"><span>�ܲ�</span></li>
				<li class="interest"><span>��Ӱ</span></li>
				<li class="interest"><span>ҡ������</span></li>
				<li class="interest"><span>��������</span></li>
				<li class="interest"><span>�������Ϸ</span></li>
				<li class="interest"><span>��������</span></li>
				<li class="interest"><span>������Ϸ��</span></li>
				<li class="interest"><span>�Ⱦ�</span></li>
			</ul>
		</div>
		
		<div id="choice" class="in-list">
			<ul id="u2" class="in-ul">
				<h3 class="choice_header"><span>ѡ����Ȥ</span></h3>
			</ul>
		</div>
		</div>
	</body>
	</html>

sortable:
	����������Ӹĳ�sortable:
	$(function(){
		//������sortable֮��Ͳ���������draggable��droppable
		//itemsָ����ЩԪ�ؿ��Ա�����, ���ǲ�ϣ��h3��������,����Ļ�h3Ҳ��������.  
		//connectWith�趨�����ϵ���λ��.    placeholder�ƶ�ʱ����ʽ. revertΪtrue���ͷŵ�ʱ�����һ��ƽ���Ķ���
		$("#u1,#u2").sortable({items:">li",connectWith:$("#u2") 
			,placeholder: "hoverClz",revert:true,
			//stop��ÿһ�������򶼻�ִ��,update���޸���˳��֮���ִ��
			update:function(event,ui){
				//toArray���԰���������һ�����飬֮�����ͨ��ajax�ȷ�ʽ������������
				//����ֻ��Ϊid����������
				/*var as = $(this).sortable("toArray");
				alert(as);*/  
				//������һ�����ӵĲ����ַ������ڷ������˿���ͨ��request.getParaments����������
				//���as�ַ���mid=1&mid=2&....
				var as = $(this).sortable("serialize",{key:"mid"});//����Ϊmid,Ҫ��li��idΪ"mid_xx"��"*_xx", Ҫ���»���, �»���ǰҲҪ��ֵ
				//alert(as);
			},
			remove:function(event,ui){
				alert("�Ƴ���"+$(ui.item).attr("id"));	
			}
			});
		$("#u1").disableSelection(); //����ѡ��li�е��ı�
	});

selectable:
	$(function(){
		//selectable��,�Ϳ��Ե���ѡ��,���������ʹ��ctrl, shift ���϶�ѡ��
		$("#u1").selectable({filter:"li",
			stop:function(){
				var conf = confirm("�Ƿ�ȷ��ɾ��?");
				if(conf) {
					$("#u1").find("li.ui-selected").remove(); //��Ϊû���ṩ��ȡѡ�еķ���,����ͨ��.ui-selected��ȡѡ�е�Ԫ��
				}
			}});
	});	

json��һ�����ݸ�ʽ,jsonp�ǽ������ajax��һ�ַ�ʽ
jsonp: ajax�ǲ�֧�ֿ�����ʵ�. ���ǿ��Ի�ÿ����js<scrit src="..">
jsonp01��jsonp02��������ͬ�����Ŀ, �����jsonp01�з���jsonp02�з��ص�json
	jsonp01�е�01.jsp:
		<script type="text/javascript">
			var getData = function(data){
				alert(data.name+","+data.address);
			};
		</script>
		<script type="text/javascript" src="http://127.0.0.1:8080/jsonp02/r1.js"></script>
		<script type="text/javascript">
		$(function(){
			//ajax��֧�ֿ������, ���·��ʲ��ܵõ�����
			$.get("http://127.0.0.1:8080/jsonp02/01.html",function(data){
				alert(data);
			});
		});
		</script>
	jsonp02�е�r1.js:
		getData({"username":"����","password":"123"});
	json01�ж�����getData����,��jsonp02�е�r1.jsʱ�ͻ����getData����,��json���ݴ��ݵ�data,�Ӷ������Ҫ������
	������ֱ�ӷ��ʷ���js,����ʵ��������Ҫ��servlet��ѯ��Ӧ������֮��ŷ���,����jsop02���֪��jsonp01�ж���ķ�������
	---------------------------------
	jsop01�е�01.jsp�޸�Ϊ:
		<script type="text/javascript" src="http://127.0.0.1:8080/jsonp02/jsonp.do?id=1&jsonpCallback=getData"></script>
	jsop02�е�jsonp.do(servlet):
		protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
			int id = Integer.parseInt(request.getParameter("id"));
			User u = users.get(id);
			String json = "{\"id\":\""+u.getId()+"\",\"name\":\""+u.getName()+"\",\"address\":\""+u.getAddress()+"\"}";
			//jsonCallbackָ�� �ص���js����  ���ø÷�����json���ݸ�data
			String jsonp = request.getParameter("jsonpCallback")+"("+json+")";
			response.setContentType("text/plain;charset=utf-8");
			response.getWriter().println(jsonp);
		}
	------------------------------------
jquery��jsonp��֧��:
	jsop01�е�01.jsp�޸�Ϊ:
	//jsonpCallback=?   ?ÿ�λ�����һ����ͬ��ֵ,   �ڶ�������data�е�ʱ���ʾpost��ʽ,û�е�ʱ����get
	$.getJSON("http://127.0.0.1:8080/jsonp02/jsonp.do?jsonpCallback=?",{id:3},function(data){
		alert(data.id+","+data.name+","+data.address);
	});
	//����Ҫ<script src="http://127.0.0.1:8080/jsonp02/..">��

accordion:
	$(function(){
		$("#nav").accordion({animate:200,event: "click" ,header:"h3",icons: { "header": "ui-icon-plus", "headerSelected": "ui-icon-minus" }});
		//$("#nav").accordion("show");  //����accordion��show����, ���ַ�ʽ���ܵ���_��ͷ��˽�з���

		//�õ���accordion��ԭ�Ͷ��󣬿���ֱ�ӵ���ԭ�Ͷ���ķ���
		//���ڴ�ʱ�õ��Ķ�����ԭ�Ͷ������ԾͿ���ֱ��ʹ��_��ͷ˽�з���
		//�������д���ʽ���漰����Ӧ��˽�з��������Է�����������ô���
		$("#nav").data("ui-accordion");
		$("#nav").accordion("destroy");
	});

	/**
	 * ���ϣ����չui�������ȡ���������������ʹ�����·�ʽ����
	 * ����ʹ�����·�ʽ��չ�����������ǻ��ԭ���еĶ�����Ⱦ��
	 * ��̫����ʹ�ø÷���
	 */
	(function($){
		//��ʱ��չ����ui.accordion��ԭ���ϵĶ���
		$.extend($.ui.accordion.prototype,{
			//��չ��һ��show�ķ���, ���ﶨ���show�����Ḳ��prototype�е�show����
			show:function(){
				alert("show");
			},
			_show:function(){
				alert("private show");
			}
		});
	})(jQuery)

widget factory: jquery ui�е����в������ͨ��widget����д��
1. ԭ�����Ǳ�д����ķ�ʽ:
	(function($){
		$.fn.hello = function(opts) {
			$.extend({},opts||{})
		}
	})(jQuery)
2. ͨ��widget fatory:
	/**
	 * ������һ�������ʱ�����ȵ��õ�ԭ�͵�_createWidget�����������������
	 * ���Ȼ����һЩ��ʼ���Ĳ�����֮���ȵ���_create,Ȼ�����create���¼���������_init
	 */
	(function($){
		//ʹ��widget factory���������������������ռ䣬���������ռ�ֻ����1��
		$.widget("kh.hello",{
			//��options��ӵ�ԭ����
			options:{
				className:"abc",
				//�¼������Ƿ���options�е�
				create:function(event,a,b){
					/*alert("callback:create");
					alert(a+","+b);*/
				}
			},
			//Ϊԭ�����һ�����з���
			show:function(){
				//ֻҪ��������ռ��д�����Ķ��󣬶�������������д��this��
				/*
				 * 1��this.element��ȡ���Ԫ�أ�
				 * 	�����װ������5��Ԫ�أ��ᴴ��5������thisָ���Լ�������
				 * 2��this.options
				 */
				// alert("hello create:"+this.options.name);
			},
			//_create�����Ƿ���prototype�ϵķ���
			_create:function(){
				this.element.addClass("ui-widget-content-"+this.options.className);
			},
			//getCreateEventData����������ΪCreate�¼����ݲ�����
			_getCreateEventData:function(){
				return ["abc","ccd"];
			},
			//����һ����������Ȼ����_destroy������ͷ���Դ�����������Ҫ���Ǹ���
			//��������ڱ�д���ʱ�Ǳ���
			_destroy:function() {
				this.element.removeClass("ui-widget-content-"+this.options.className);
			},
			//�������ָ���ǣ�ֻҪΪoption����ֵ�ͻ�ִ���������
			_setOption:function(key,value) {
				//Ĭ���������������ֻ�ǽ�ֵ�洢��options��
				if(key=="className") {
					this.element.removeClass();
					this.element.addClass("ui-widget-content-"+value);
				}
				//������֮��һ��Ҫ���ø��෽����ֵ����ȥ����ʱһ��Ҫ���Ǻ���ʲôʱ��ֵ
				//1.8֮��ʹ�õķ�ʽ
				this._super(key,value);  //����prototype�е�_setOption����
				//1.8��ǰ,�ò��ֵ�֪ʶ��Ҫ�˽�js�ļ̳�
				//$.Widget.prototype._setOption.call(this,key,value);
			}
		});
	})(jQuery)

(widget)����������ݲ���ʾ��С���:
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
				<tr><td >��ʶ</td><td>����</td><td>����</td><td>��ͥ��ַ</td></tr>
			</thead>
			<tbody>
				<tr><td>1</td><td>�����</td><td>120</td><td>����</td></tr>
				<tr><td>2</td><td>��˽�</td><td>110</td><td>����ׯ</td></tr>
				<tr><td>3</td><td>ɳɮ</td><td>100</td><td>��������</td></tr>
				<tr><td>4</td><td>��ɮ</td><td>160</td><td>����</td></tr>
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
			ele = this.element;  //ʹ�ò���Ķ���,��$("#mt")
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
			ele.find("thead").prepend("<tr><td colspan='"+ele.find("thead tr td").length+"'>���������ֶ�:<input type='text' id='table-search'/></td></tr>")
			this._bindSearch();
		},
		_bindSearch:function() {
			var that = this;  //���this��ʹ�ò���Ķ���,�����÷����Ķ���($("#mt")���)
			ele.find("#table-search").on("blur",function(event){
				if($(this).val()) {  //���this�Ǵ����¼�����, ��input#table-search
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
		minLength:2   //���������ַ�֮����ʾ
	});
	<input type="text" id="tags"/>
	------------------
	//ʹ��json����ʱ������label�������������������֮��ͨ��value������ֵ
	var sources = [{"label":"khaaa","username":"�׺�","nickname":"konghao"},
			{"label":"lzkabc","username":"��־","nickname":"lizheng"},
			{"label":"ywdddsac","username":"���ľ�","nickname":"yuanwenjie"}];
	$("#tags").autocomplete({
		source:sources,
		change:function(event,ui) {
			alert(ui.item.value);
		},
		//ѡ��ʱ����¼�
		focus:function(event,ui) {
			$(this).val(ui.item.nickname);
			return false;
		},
		//ѡ�����֮�󴥷����¼�
		select:function(event,ui) {
			$(this).val(ui.item.nickname);
			return false;
		}
	}).data("ui-autocomplete")._renderItem=function(ul,item){
		return $( "<li>" )
			.append( $( "<a>" ).text( item.username ) )
			.appendTo( ul );
	}//ʹ�����Ϸ�ʽ���Ը���autocomplete��˽�з�����
	//ͨ��data���Եõ�ԭ�Ͷ���
	----------------------
	//ֱ��ͨ��$.extend����ԭ�ͣ����ַ�ʽ��Ȼ����һ�ֺ�һЩ��������Ȼ�������⣬������Ⱦԭ�еķ���
	//�����Ƽ�ʹ��widget factory�����в���
	$.extend($.ui.autocomplete.prototype,{
		_renderItem:function(ul,item) {
			return $( "<li>" )
				.append( $( "<a>" ).text( item.username ) )
				.appendTo( ul );
		}
	});
	----------------------------
	//�Լ�������һ�����mycomplete����ӵ��autocomplete�����й���
	$.widget("kh.mycomplete",$.ui.autocomplete,{
		_renderItem:function(ul,item) {
			return $( "<li>" )
				.append( $( "<a>" ).text( item.username ) )
				.appendTo( ul );
		}
	});

datepicker:
	$("#born").datepicker({
		altField:"#mydate",  //ѡ�����ں�ı�#mydate��ֵΪ����
		altFormat:"yy-mm-dd",
		changeYear:true,
		minDate:"2012-01-02",
		maxDate:"+2y",   //��ǰ���ڼ�����
	}).datepicker("setDate","2012-12-22");
	$("#born").datepicker("option",$.datepicker.regional["zh-CN"]); //���ʻ�
	//���ʻ���Ҫ����development-bundle/ui/i18n/jquery.ui.datepicker-zh-CN.js

validate 1.10��1.09�仯�ܴ�, ʹ��1.10:
hello world:
	<script type="text/javascript" src="js/jquery.validate.js"></script>
	<script type="text/javascript">
		$(function(){
			$("#myform").validate();
		});
	</script>
	<form id="myform" action="#">
	Username:<input type="text" id="username" title="�û�������Ϊ��" required/> <br/>
	<!-- Ҳ����дrequered="true" �� class="requried" -->
	<input type="submit" />
	</form>
����ͨ��title����ʾ������Ϣ, ���ж��д�����Ϣʱ�Ͳ���ʹ��titile��. ����������д��
	$(function(){
		$("#myform").validate({
			rules:{
				username:"required",  //ֻдrequired����required=true, ��jquery.validate.js�е�Ĭ��ֵ��true, ����email,...����һ��
				address:{
					required:true,
					minlength:3
				},
				age:"digits",  //digits������,  number������
				pwd:"required",
				cpwd:{
					equalTo:"#pwd"
				}
			},
			messages:{
				username:"�û�����������",
				address:{
					required:"�û���ַ��������",
					minlength:"��ַ����С��3λ"
				},
				age:"�������������",
				pwd:"�����������",
				cpwd:"�������벻һ��"
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
�����д���������Ӵ�����,����ͨ��meta��{}��д��д���ǩ��class������,Ҫ��������jquery.metadata.js
�����ʹ��metadata, ��class��ֻ��дrequired email=true����, ������{}
	$(function(){
		$("#myform").validate();
	})
	Username:<input type="text" id="username" name="username" class="{required:true, messages:{required:'Please enter your email address'}}"/>
	Address:<input type="text" id="address" name="address" class="{required:true,messages:'��ַ����Ϊ��'}"/>
	--------Ҳ��������(û��Ҫ):
	$("#myform").validate({meta:"validate"});   
	Address:<input type="text" id="address" name="address" class="validate:{{required:true,messages:'��ַ����Ϊ��'}}"/>

ajax��֤:
	$("#addForm").validate({
		rules:{
			...
		},
		messages:{
			..
		},
		submitHandler:function(form){   //����ύ֮��Ĵ���
			$.get("v.do?username="+$("#username").val(),function(data){
				if(!data) {
					$("#username").after("�û����Ѿ�����"); 
				}
				 // $(form).submit();  //�����ύ�����ύ֮ǰ��validateһ��
				 form.submit();
			});
		}
	});
	---------------------------
	���Ҫ���Ͻ�����֤,�������ύ��ʱ�����֤,��Ҫ�Զ�����֤����:
	// 1.���Ҫ��Ӵ���������֤ʹ�����·�ʽ
	$.validator.methods.nc = function(value,element,param){  //required����֤����д��methods�µ�
		//�������true��ʾ��֤�ɹ�������false��ʾ��֤ʧ��
		return param===value;
	};
	// 2.���û�в����Ϳ���ʹ��addMethod���ַ�ʽ�������֤����
	$.validator.addMethod("ncg",function(value){
		return value==="foobar";
	},"�û�������Ϊfoobar");
	// 3.�Զ��巽����ajax��֤
	$.validator.addMethod("nameConflict",function(value) {
		var rel = true;
		//��ʱget�������첽�ģ����Ե�rel���ص�ʱ��get��������û��ִ�����
		$.ajaxSetup({async:false}); //���ͬ����, �����Ҫʹ��ajax����������get
		$.get("v.do?username="+value,function(data){
			//�����������淵�أ�����ֻ�Ǳհ������ˣ�addMethod��Ȼ��false
			rel = data;
		});
		$.ajaxSetup({async:true});  //������ͻ�ԭ
		return rel;
	},"�û����Ѿ�����");
	$("#addForm").validate({
		onkeyup:false, //�ر������ַ�����֤��Ĭ�ϻ�û���¼��̾���֤һ��.��Ϊ��ajax�л����ύ. �ر�֮���Ĭ��ʧȥ�����ʱ����֤
		rules:{
			username:{
				required:true,   
				//, nc:"zhangsan"    //ʹ��nc������֤, ���ݲ���"zhangsan"
				nameConflict:true
			}
		},
		messages:{
			username:{
				required:"�û�������Ϊ��"
				//, nc:"�û�������{0}"   //{0}������һ������, ��"zhangsan"
			}
		}
	});
	-------------------
	ʹ��remote:
	rules:{
		username:{
			required:true,
			/*
			ʹ��remote���Խ���Զ����֤��ֻ�������ַ���ɣ����Զ���
			username=valueֵͨ���������ݣ����ص�ֵ������json������
			ֻ����true��false,�����true��ʾ��֤�ɹ���false��ʾ��֤ʧ��
			*/
			remote:"v.do"
		}
	},
	messages:{
		username:{
			required:"�û�������Ϊ��",
			remote:"�û����Ѿ�����"
		}
	},

��validate��ȡ����һ�������ļ�:
	(function($){
		/**
		 * �̳�jquery����ķ�����һ����Ϥ
		 */
		var __validate = $.fn.validate;
		$.fn.cms_validate = function(opts) {
			/**
			 * ϣ�����������������
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
				username:"�û�������Ϊ��",
				password:"�û����벻��Ϊ��",
				age:"�������������",
				ach:"�ɼ�����Ϊ����",
				email:"�ʼ��ĸ�ʽ����ȷ",
				url:"���ӵ�ַ����ȷ"
			},opts?(opts.messages||{}):{});
			
			var __opts = $.extend((opts||{}),{
				rules:__rules,
				messages:__messages
			});
			//�����prototype�ļ̳�
			$.extend($.fn.validate.prototype,__opts||{});
			__validate.call(this,__opts);
		};
	})(jQuery);	


comet:
���������������Ϣ���ͻ��˵�3�ַ�ʽ:
	1. ������(comet�������ַ�ʽ)
		�������ĺͻ��ڳ���ѯ��
	2. websocket (Ҫhtml5)
	3. flash

comet֮ǰ��ͨ���ͻ��˲�����������ȡ����
	function pollData() {
		$.get("first.do",function(data){
			$("#content").append(data+"<br/>");
		},"html");
	}
	setInterval(pollData,5000);

comet�ĳ����ӷ�ʽ(�ܶ��������֧��ajax״̬��=3��ʱ��������, ���Բ��������ַ�ʽ):
	jsp:
		$(function(){
			var xhr = createXmlHttpRequest();
			xhr.open("POST","second.do",true);
			//����jqueryû�а취֧�ֲ�ͬ��״̬����жϣ�������Ҫͨ��ԭʼ��ajax������
			var pos = 0;
			xhr.onreadystatechange = function() {
				//��״̬�����3�Ϳ��Ա�֤����һֱ�������ӣ�����ʵ�ֳ����ӵ�stream�ķ�ʽ
				if(xhr.readyState==3&&xhr.status==200) {
					$("#content").append(xhr.responseText.substring(pos)+",");
					pos = xhr.responseText.length;
				}
				/*
				���ڳ����ӵķ�ʽ������״̬������3��ʱ��������ݣ����ںܶ���������Բ���֧��
				��״̬Ϊ�����е�ʱ�����ݣ����ԣ����ƺܴ�������Ҫʹ���µķ�ʽ
				����ѯ�ķ�ʽ�����ַ�ʽ����Ŀǰʹ�����ķ�ʽ
				*/
				
			};
			xhr.send();
		});
	servlet(Ҫʵ��CometProcessor, �Ͳ���Ҫ����doGet��doPost������):
		public class SecondServlet extends HttpServlet implements CometProcessor {
		    public void event(CometEvent event) throws IOException{
		    	/*
		    	 * event������������������󣬿��Ը���״̬�Ĳ�ͬ�õ�������Ӧ
		    	 * ͬʱ���Բ��ϸ����Լ���������ͻ��˷�����Ϣ
		    	 */
		    	HttpServletResponse resp = event.getHttpServletResponse();
		    	HttpServletRequest req = event.getHttpServletRequest();
		    	//����event���ԣ�����ڶ���״̬����begin��ʱ����Կ�ʼ��ȡ����
		    	if(event.getEventType()==CometEvent.EventType.BEGIN) {
		    		System.out.println(req.getSession().getId());
		    		//��begin��״̬��������д����
		    		log(req.getSession().getId()+"���ӽ����ɹ�");
		    		new Thread(new RandomThread(resp)).start();
		    	} else if(event.getEventType()==CometEvent.EventType.END) {
		    		//���������ʱ��ִ��
		    		log(req.getSession().getId()+"�Ѿ�����");
		    		event.close();
		    	} else if(event.getEventType()==CometEvent.EventType.ERROR) {
		    		//���ʹ����ʱ����
		    		log(req.getSession().getId()+"���ʹ���");
		    		event.close();
		    	} else if(event.getEventType()==CometEvent.EventType.READ) {
		    		//������ȡ���ݵ�״̬
		    		throw new RuntimeException("��״̬�޷����в���");
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
						 *�������ķ�ʽ�����������̽�����һ�����ӣ�����ȫ����ʹ��ͬһ��
						 *response�����д��ݣ����Բ��ܹر���
						 */
						out.println(num+"");
						//����ˢ��
						out.flush();
						/**
						 * ���ڳ���ѯ�ķ�ʽ��ÿһ�η�������Ϣ�����Ὠ��һ���µ�����
						 * ��������������֮��ԭ��repsonse��û�������ˣ�����ر�
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

comet�ĳ���ѯ�ķ�ʽ:
	jsp:
		$(function(){
			function poll() {
				var xhr = createXmlHttpRequest();
				xhr.open("POST","second.do",true);
				xhr.onreadystatechange = function() {
					//����ѯ�ķ�ʽ��ÿһ���ύ����һ����������������Ӧ����״̬��Ϊ4��ʱ����
					if(xhr.readyState==4&&xhr.status==200) {
						$("#content").append(xhr.responseText);
						//�ٴν�������
						poll();
					}
					
				};
				xhr.send();
			}
			poll();
		});
	RandomThread ��ͬ:
		/**
		 * ���ڳ���ѯ�ķ�ʽ��ÿһ�η�������Ϣ�����Ὠ��һ���µ�����
		 * ��������������֮��ԭ��repsonse��û�������ˣ�����ر�
		 */
		out.close();
		connect = null;


���������,�ڵڶ���RamdomThread����sleep��ʱ��, ���ܵ�һ���̰߳�connect��ֵΪnull, 
���µڶ����߳���ִ��PrintWriter out = connect.getWriter();���ֿ�ָ���쳣.
���������߳���ֻ��һ��response����, ÿ�η��͵�ʱ��ֻ�ᷢ�͸���ǰ���ʵ������,������������ܽ���, ���Ըó�map

�Ľ����������:
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
		
		//synchronized����Ĭ�Ͼ���ͨ��this��Կ��
		public synchronized void sendMsg(String msg) {  
			this.msg = msg;
			hasMsg = true;
			this.notify();
		}
		
		//�����Ƿ��ǳ���ѯ�ķ�ʽ��Ĭ��Ϊtrue
		public void setPoll(boolean isPoll) {
			this.isPoll = isPoll;
		}
		
		public void setConnect(String sessionId,HttpServletResponse connect) {
			synchronized(cons) {    //synchronized ֻ��Ҫ��һ����Ϊ�յĶ�������Կ��
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
							//û����Ϣ�͵���
							this.wait();
						}
					} catch (Exception e) {
					}
				}
				String sendMessage = msg; //���ϱ�������, ���ⱻ�����̸߳ĵ�
				hasMsg = false;
				msg = null;
				try {
					//���û��connectͬ������ȴ�
					if(cons.size()<=0){
						synchronized (cons) {  //�����key������this��,��Ϊ�ڻ����̵߳�ʱ����������һ��(ͬһ������)�ȴ��߳�
							cons.wait();
						}
					}
					//����һ���µĶ�������������  ת����list����������, ��Ϊ�п����ڱ���map��ʱ��,����setConnect�ı�map
					List<HttpServletResponse> tcons = new ArrayList<HttpServletResponse>();
					for(String key:cons.keySet()) {
						tcons.add(cons.get(key));
					}
					for(HttpServletResponse connect:tcons) {
						PrintWriter out = connect.getWriter();
						System.out.println("preparing:"+sendMessage);
						out.println(sendMessage);
						out.flush();
						//����ǳ���ѯ�ķ�ʽ����Ҫ�ͷ���Դ
						if(isPoll) {
							out.close();
							connect = null;
						}
					}
					if(isPoll) {   
						cons.clear();  //��һ�����ӵ�ʱ������°�response�ӵ�map��
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
		
		/*��RandomThreadֱ��д���ڲ�, ��֤������������ڸ����ͻ��˿�����һ��*/
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
	    	//����event���ԣ�����ڶ���״̬����begin��ʱ����Կ�ʼ��ȡ����
	    	if(event.getEventType()==CometEvent.EventType.BEGIN) {
	    		log(sessionId+"���ӽ����ɹ�");
	    		sender.setConnect(sessionId,resp);
	    	} else if(event.getEventType()==CometEvent.EventType.END) {
	    		log(sessionId+"�Ѿ�����");
	    		event.close();
	    	} else if(event.getEventType()==CometEvent.EventType.ERROR) {
	    		log(sessionId+"���ʹ���");
	    		//event.close();   //firefox�ڳ�ʱ�䲻��Ӧ֮������error, ��ʱ����event.close(),����response�ᱻ�ͷ�
	    	} else if(event.getEventType()==CometEvent.EventType.READ) {
	    		throw new RuntimeException("��״̬�޷����в���");
	    	}
	    }

		@Override
		public void init() throws ServletException {
			//�����߳�
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
		function poll() {    //poll��ѯ
			$.post("comet.do",function(data){
				$("#content").append(data+",");
				poll();
			},"html");
		}
		poll();
	});
