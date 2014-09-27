coffeescript
安装coffee script
npm install -g coffee-script
编译
coffee -cw test.coffee  //c: compile  w:watch代表修改后自动recompile
编译目录
coffee -wc src -o js   //编译src目录， o: output目录

没分号，没var声明
var coffee = function() {
	return confirm("....");
}
//-----
coffee = ->     
	confirm "..."  //像python一样用缩进来区分代码块

coffee = ->
	answer = confirm "ok?"	
	"your answer is #{answer}" //return 最后一句执行的语句

coffee "aa"  //带参数的调用方法可去括号
coffee "aa" "bb"

coffee = (message = "cc") -> //参数默认值
	answer = confirm message
	"your answer is #{answer}"



jquery:
$(function(){  
	$(this).addClass("active")
})
$ ->  //或jQuery($) -> 
	 $(@).addCLass "active"  //this可写成@

$("#uid").click(function(e){
	e.preventDefault();
});
$("#uid").click (e) ->   //你们函数写成->  如果没参数click ->
	e.preventDefault();

Conditionals & Operators
	if(age<18){
		alert("xx");
	} else {
		alert("else");
	}
	if age < 18
		alert "xx"
	else
		alert "else"
	alert "xx" if age < 18 //只有一条语句的可用这种
	if age < 18 then alert "xx" else alert "else"

cs    			js
== is			===
!= isnt			!==
not 			!
and				&&
or 				||
true yes on  	true
false no off  	false

if(paid() && coffee() === true){
	pour();
}
if paid() and coffee() is on then pour()

if(2<x && x<5) {}
if 2<x<5

if(typeof a!=="undefined" && a!==null) {}
if a?

if not a? //如果a没定义，为a赋值
	a=0	
a=0 unless a? //unless相当于if not
a?=0   //简单写法

if user?
	user.add()
user?.add()  //如果存在user在调用add
user.add?().update?() //如果存在add方法才调用

[1..4] //相当于[1,2,3,4]
[1...4] //相当于[1,2,3]   不包含结束

a = [5..10] //5到10
a[1..4]  //[6,7,8,9]
a[1..a.length] //[6,7,8,9,10], 也等于a[1..-1] 

a = [   //可以不用逗号分隔，直接换行
	'a'
	'b'
]

storeLocations = ['Orlando', 'Winter Park', 'Sanfod']
//获取一个新的数组没有Sanfod
newLocs = []
for loc in storeLocations
		newLocs.push loc if loc isnt 'Sanfod'
//相当于下面， 等号右边去掉了无用的父括号[]
newLocs = (fun(loc) for loc in storeLocations when loc isnt 'Sanfod')

searchLocations = (brand, cities...)-> //可变参数
	"looking for #{brand} in #{cities.join(',')}"
searchLocations 'a','b','c' //调用时可传任意个参数

coffee = {name:'zhangsan', age:1}  //定义object
coffee = name:'zhangsan', age:1   //去大括号
coffee = 						//去逗号
	name:'zhangsan'
	age:1  //注意：如果缩进不正确，age会被编译成独立与coffee的对象({age:1})

for key, value of coffees //key,value方式遍历object用使用of而不是in	

$("#id").bind({
	click:clickFun,
	mouseEnter:mouseEnterFun
})
$("#id").bind
	click:clickFun,
	mouseEnter:mouseEnterFun

var fliteredFlights = [];
$.each(currentFlights, function(index, flight){
	if(stops=='2+' || flight.routing == 0){
		fliteredFlights.push(flight);
	}
});
fliteredFlights = (flisht for flight in currentFlights when stops is '2+' or flight.routing is 0)

oo:
class Coffee
	construtor:(name, age=1) -> 
		@name=name
		@age=age
	brew: -> alert "aa"
class Coffee
	construtor:(@name, @age=1) -> 	//@实例变量
	brew: -> alert "aa"

class ChildCoffee extends Coffee
	construtor:(@name, @age=1) -> 	
		@brand="xxx"
	brew: -> alert "#{name},#{age}, #{brand}"  //重写方法	

//这种绑定的回调函数会以dom为上下文
$("#id").click -> 
//如果想让$("#id")为函数的上下文，即this为剩下文，可以是用self=this
//也可以使用=>
$("#id").click => 