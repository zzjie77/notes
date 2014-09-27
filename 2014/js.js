1. 内置对象 Object, Function
2. Prototype
3. 上下文Context, 就是this

var Dog = function(a){  // == function Dog(a){
  return a
}

var d = new Dog();
Dog是Function, d是Object


function Persion (){
  this.name
}

//Person(); //直接调用，this就是默认的上下文window，根据环境不同不一定是window
var o = {}
Person.call(o); //o就是上下文
new Person(); //此时的this就是Person的对象实例

