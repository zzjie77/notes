gem install pry # pry比irb好，有语法高亮

变量：
	局部变量：var或_var
	全局变量：$var
	类变量：@@var  会继承
	实例变量：@var  不继承
	常量：Var或VAR

模块与Mix-in:
	module Test
		def hello 
			puts "world"
		end
	end

	class A
		extend Test #引入类方法。 A.hello  
		include Test #引入实例方法  A.new.hello  
		#extend是Object的private instance method. 这种继承的私有方法在子类中要使用隐式的self才能调用。或使用send调用
		#include是Module的public instance method. 可以显示(self.include)或隐式的self来调用
		#上面extend引入类方法，include引入实例方法只是表象。 实际上extend会添加方法到A.singleton_class, include会添加方法到A
		#通过A.ancestors和A.singleton_class.ancestors就可看到是否导入相关模块
	end
	#上面的做法不能有效的区分类方法与实例方法.
	module Test
		def self.included(base) # included是include时的回调方法，同样也有extended
			base.send :include, InstanceMethod #可以通过send来调用base的任何方法，包括私有方法
			base.send :extend, ClassMethod
		end

		module InstanceMethod
			def test
				puts "hello"
			end
		end

		module ClassMethod
			def hello
				puts "world"
			end
		end
	end

	class A
		include Test
	end

	A.singleton_class #单例
	A.ancestors #查看A的继承链

	模块命名空间：
	module T
		class B
			def test
				puts 111
			end
		end
	end

	T::B.new.test #加上命名空间

方法：
	def hello(city, alex_where:"east", kevin_where:"west")	# 默认值
		puts "alex in #{city} #{alex_where}, kevin in #{city} #{kevin_where}"
	end
	hello('bj', kevin_where: "north") #ruby2.0后可以使用关键字参数

	def hello(*opt) #一个*接收数组
		puts opt.inspect
	end
	hello(1,2,3)

	def hello(**opt) #两个*接收哈希  ruby2.0后才支持
		puts opt.inspect
	end
	opt = {"a"=>1, "b"=>2} #定义哈希
	opt = {a:1, b:2} #新的定义哈希的方法， 相当于{:a=>1, :b=>2}, 只能以符号作键

	alias :hi :hello #为hello方法定义别名hi
	alias_method :hi, :hello #注意有逗号，alias_method只能定义方法别名，alias可以定义变量
	undef hello #去除hello方法的定义

流程控制：
if:
	if not true # unless false,  可加then可不加
		..
	elsif false
		..
	else
		..
	end

	puts "hello" if true
	true ? (puts "hello"):(puts "world")
	# false和nil代表假，其他都为真
case:	
	case a
	when 1     #when会使用===来匹配
		puts 1
	when "hello"
		puts "hello"
	when /\d/  #可以使用正则
		puts "number"
	when /\w/
		puts "char"
	end

while:
	a=5
	while a>0 do # do可加可不加
		puts a
		a -= -1 #没有a--的语法
	end

for:
	arr = [1,2,3,4]
	for item in arr
		puts item
	end

	# for in实际上是调用了each, 所以一般直接用each
	# arr.each do{|i| puts i}
	arr.each do |i|
		puts i
		# break next 相当于java的break continue
	end

block：
	arr = [1,3,4,5,2]
	arr.sort #升序排序
	arr.sort {|x,y| y<=>x} #降序排序   y<x返回-1， y=x返回0， y>x返回1
	arr.select {|i| i>2} #选择a>2的元素

	自定义block的方式：
	1. yield:
		def test
			x=1
			yield #yield x
		end
		x=5
		test {puts x+1}  #x=5
		test {|x| puts x+1} #此时会报错，要在调用yield的时候传参数，否则x就为nil
	2. &block:
		def test(&b)
			b.call(2)  #b实际上也是Proc
		end
		test{|x| puts x+1}
	3. Proc:
		p = Proc.new{|i| i**2}  #创建一个块 ， 求平方
		#p = proc{|i| i**2} #另一种写法
		p.call(2) #调用块
		P.(3) #简写， 但不能省略.  否则结果不对
	4. lambda:
		p = lambda{|i| i**3} #使用lambda生成的依然是一个Proc,所以调用方式是一样的
		p = ->(i){i**3} #ruby2.0后lambda新定义语法


	proc与lambda的区别：
		1. proc不检查块参数，lambda检查块参数
		如果proc定义两个参数，可以传任意个参数都行，而lambda定义了两个参数就必须传两个参数
		2. 返回
		def test
			p = Proc.new{return "hello"}
			t = p.call   #proc的return会影响test方法，会把test方法return了，不会向下执行
			return "#{t} world"
		end
		test # hello

		def test
			p = lambda{return "hello"}
			t = p.call  #lambda在此处不会return test方法
			return "#{t} world" 
		end
		test # hello world

String:
	'ab\'c \\' #单引号里只能转义\和',  相当于%q|xxx|
	"hello #{world}" #能使用插入符，能转义很多。相当于%Q|xxx|
	#多行string
	str = <<-EOF  #如果没加-也可以，但是结尾EOF就不能有缩进
		hello world
		hello ruby
	EOF
	str = %Q|  \  #加了\就不会加换行符
		hello world \
		hello ruby \
	|

	regex: 
		"123" =~ /\d/  #返回匹配的索引，即0, 不匹配返回nil
		"123".match(/\d/) #返回匹配的MatchData, 不匹配返回nil
		"123".match(/(\d+$)/) #分组。返回MatchData，同时可以通过$1来第一个分组匹配中的元素
		"123".scan(/./) #返回一个数组["1","2","3"]
		"a,b;c".split(/[,;]/)  #可以用regex来分割，使用,或;来分割，所以返回["a","b","c"]

symbol:
	syn = :abc
	syn1 = :abc
	puts syn.object_id == syn1.object_id #符号与字符串的不同在于，相同内容的符号都是同一个对象

	syms = Symbol.all_symbols #返回符号表，符号表会记录所有生成的符号
	syms.include? :abc 
	#使用符号的部分方法，如downcase,length, match...会先转换为string,会带来一定的开销
	
	@a #实例变量在ruby内部实际上也是用符号来处理，等价于:@a
	[1,2,3].map{|i| i.to_s} 
	[1,2,3].map(&:to_s) #等价上面的，会将符号使用to_proc转换为Proc参数
	"a".to_sym #字符串转换为符号，注意数字不能作为符号， :1是不成立的

Range:
	r = 1..3 #r.begin为1，r.end为3，包含开始与结束
	r = 1...3 #r.begin为1，r.end为3，包含开始不包含结束
	"a".."e" #要使用区间的对象必须实现succ方法，succ会找到它的下一个元素，1.succ == 2
	(3..1).each{|i| puts i} #开始大于结束，没有结果。 反序的一个用处是"abcde"[0..-2]来截取字符串
	("1".."3")each{|i| puts i} #ruby2.0后可以支持这种数字字符串的迭代
	(1..5).each do |i|
		puts i if i==2..i==4 
		#会打印2,3,4 当..或...用于if表达式时，称为flip-flop的用法
		#..和...表达的含义是一样的，都会打印2,3,4
	end

Array：
	arr = [1,2,3] 或 Array[1,2,3]
	%W|a, b, #{c}| #定义一个字符串数组，%W可以使用字符串插入符,%w则不能
	arr.map{&:to_s} #返回一个新数组
	arr.map #返回一个Enumarator对象
	arr.select{|i| i>2} #返回数组包含满足条件的所有元素
	arr.find{|i| i>2} #返回满足条件的第一个元素
	arr.inject {|sum, i| sum + i } #每次计算结果赋给第一个参数
	arr.inject([]) {|sum, i| sum << i } #当injdect带参数时，就会把参数初始化到sum

hash:
	h = {"a"=>1, :b=>2, 3=>3} #键可以是任意类型
	h = {a:1, b:2, c:3} #这种新方式创建的键是符号
	#ruby1.9之后的哈希是有顺序的，就是定义的顺序
	arr = %i|a b c| #创建符号数组
	arr.indect({}) do |h, i|  #通过数组来创建哈希
		h[i] = 1
		h
	end
	h1.merge h2 #合并哈希，相同的key, 后面(h2)的替换前面(h1)
	h1.each_key{|k| puts k} #迭代key, h1.keys获取key数组
	h1.each_value{|k| puts k} #迭代value, h1.values

数字Numeric：
	Numeric.superclass #object, 没有查看子类的方法，要自己实现
	class Module
		def subclasses
			classes = []
			ObjectSpace.each_object do |klass|  #each_object迭代加载了的所有对象
				next unless Module === klass  #Module是Class的父类，所以Numeric及其子类必定是继承Module.不能写成classes ==== Module
				classes << klass if klass < self #如果klass继承self，就加进数组
			end
			classes
		end
	end
	Numeric.subclasses  # [Complex, Rational, Bignum, Float, Fixnum, Integer], 没返回BigDecimal,因为它是标准库的，不是核心库
	require 'bigdecimal' #加载后就能在subclasses中读取BigDecimal
	Numeric.subclasses #[Complex, Rational, Bignum, Float, Fixnum, Integer, BigDecimal]
	Integer.subclasses # [Bignum, Fixnum] Bignum位数无限制，超出内存的数都可以计算
	1.class # 32位或64位下的整数用Fixnum， 32 bit cpu fixnum就是32bit，所以1的class就是32位
	1.to_r #1/1 转换为分数Rational
	"1".to_i #转换为整数
	1.odd? #是否为奇数，  也有even?
	
float: float是不靠谱的，速度快，容易精度丢失，很少使用
	200.1+0.01 #两个数相差很大的时候会溢出
	202.1+201.2 #403.29999999999995 会产生溢出
BigDecimal: float是靠谱的，速度比float慢
	require "bigdecimal"
	a = BigDecimal("0.123456")
	required 'bigdecimal/util'
	a.to_digits #获取小数
	a * 1.5 #结果会转换为BigDecimal
	1.5 * a #结果会转换为float，注意顺序
	a.truncate(4) #保留4为小数，不会四舍五入
	a.round(4) #保留4位小数，会四舍五入


运算符:
    a&b #如果是boolean就是与，如果是数字就是二进制的位与操作 a.to_s(2)可查看二进制
    a^b #抑或，相同为0,不同为1
    a << 1 #左移一位， 相当于乘2,比直接乘2要快， 右移相当于除2
    "hello" << "world" #相当于字符串连接，但没有右移操作符
    [1,2] << 3 #为数组添加新元素
    a <=> b # ufo操作符， -1,0,1  a<b返回-1,a=b返回0,a>b返回1
    arr1 <=> arr2 #judge arr lenth, if length eqals judge each element value
    string类并没有定义》，《..方法，但是也能使用，因为include了Comparable module, 实现了<=>方法，只要实现了ufo就可以使用<,>..
    数组没定义>, <方法，自己include Comparable后就能使用>, < ， between?..方法
    a===b #case就是使用===来判断的，===在不同对象的实现可能不同，在object中的===是和==一样的
    
时间处理：
time:
    GMT/UTC/DST  GMT是(伦敦)格林威治时间，经度为0度的时间，每隔15度就相差一个小时，东边时间比西边要早。 UTC是GMT更加精准的时间，会根据地球自转而不同。 DST是夏令时
    Time.at(0) #0表示1970-01-01 00：00：00, 是unix诞生的时间，但我们会看到1970-01-01 08：30：00 +0830 因为我们在东八区
    time = Time.new #当前时间， 也可以使用Time.now。 等于utc时间加8小时
    time + 60 #加60秒
    time.utc #转换为utc时间，也相当于GMT时间，ruby中把这两个时间等价了。   utc?判断是否为utc时间
    time.sunday? #是否星期天
    time.strftime("%Y-%m-%d %H:%M:%S") #格式化时间
    require 'time' #标准库中的时间扩展也叫time, 标准库的文档不完善，可能看不到实际有的方法
    time.zone #返回时区UTC   Time.now.zone回返回CST（中部时区）
    #time在某些编程语言中用整数来保存，所以只能支持到2038年，而ruby的整数可以无限大，但超过64位后就变得非常慢
    require 'date' #也是标准库的，只处理日期，没有时间
date:    
    Date._parse('2012-12-12'); #return {:year=>2012, :month=>12, :day=>12}
    d = Date.new #=> #<Date: -4712-01-01 ((0j,0s,0n),+0s,2299161j)>
    d = Date.new(2001) # => #<Date: 2001-01-01 ((2451911j,0s,0n),+0s,2299161j)>
    # 日期创建默认是公元前4712年1月1日，也叫儒略日（Julian day）。2451911j表示2001年距离儒略日的天数，
    # 2299161j 是公历开始执行的那天
    Date.jd(2299161) #1582-10-15
    Date.jd(2299162) #1582-10-04 参数只相差一天，但是实际上相差了11天，这个时间定法历史有关，删减了10天
    (d.jd+1.5)%7 #计算星期几   d.cwday也可得出星期几
DateTime:  #同样也是样require 'date',  DateTime没有时区的概念，有时差的概念
    Time.now.zone #返回时区 "CST"
    DateTime.now.zone #返回时差 "+08:00"
    DateTime.iso8601('2001-02-03T04:05:06+07:00') #使用iso8601表示法来创建DateTime，日期和时间用T分隔
    
File:
    Dir.chdir("blog")  #进入文件夹blog. Dir.pwd可查看当前路径
    f = File.read("blog_data") #return a string
    File.readlines("blog_data") #return a array of string， use \n to seperate each line
    f = File.readlines("blog_data", "END")  #use "END" to seperate each line
    print f[2] #打印，因为使用END分隔每行，实际上可能会包含多行，string中就有多个\n这样的符号
    File.open("blog_data") do |f|
      f.each_line("END") {|l| puts l} #如果不加参数，就使用\n来分隔
      #f.each_line("END").lazy.each{|l| puts l} #这种方式比read和readlines更快，更省内存
    end
    
StringIO: # require 'stringio' 把字符串当乘IO来处理，但不是IO类,是一个内存文件，适合处理小文件
    s = StringIO.new(f, 'a+') #追加模式 
    s.write "---" 
    #处理大文件，可以使用File的seek方法再配合StringIO来处理，就能节省内存，加快速度
    
Marshal： 相当于java的序列化，保存对象到文件中
  arr = [1,2,3]
  arr1 = Marshal.dump(arr)  #转换固定格式的，看不懂的string
  #arr1 = Marchal.dump(arr, StringIO.new) #也可以保存到一个StringIO中
  arr2 = Marshal.load arr1 
  arr.object_id == arr2.object_id # false, 
  arr1 = Marchal.load(Marchal.dump(arr)) #可以使用这种方式来实现对象的深度拷贝
  arr = [[1,2], [3,4]] #
  arr1 = arr.clone #浅拷贝
  arr[0][1] = 4 #因为是浅拷贝只拷贝了一层，第二层变的时候，arr1会跟着变，所以arr1也变成[[1,4,], [3,4]], 使用深度拷贝就不会
  # Marshal的缺点，特异方法[属于某个对象的方法]无法保存
  # IO socket等特定进程内有效的对象不能保存
  # 某些扩充库定义的对象，Marshal不知道如果保存。  可读性差
  
YAML： #yaml ain't mark language  yaml不是标记语言，基于Marshal的缺点，通常使用yaml来保存信息
    #好处：简单易读， 缩进层次，不必烦恼标签
   require 'yaml'
   arr = [1, 'abc', {a:1, b:2}]
   str = arr.to_yaml
   print str
  
Thread:
  #1.8及之前是绿色线程，即并不是系统里面的线程，只有rvm知道线程的存在，1.9后是本地线程，可以通过linux命令查看到的线程
  Thread.main == Thread.current
  Thread.current[:a] = 1 #线程变量， Thread.current[:a]获取值
  
  a = Thread.new { raise("die now") }
  b = Thread.new { Thread.stop }
  c = Thread.new { Thread.exit }
  d = Thread.new { sleep }
  d.kill                  #=> #<Thread:0x401b3678 aborting>
  a.status                #=> nil
  b.status                #=> "sleep"
  c.status                #=> false
  d.status                #=> false
  Thread.current.status   #=> "run"
  
counter.rb:
  @counter = 0
  threads = []
  #@mutex = Mutex.new #使用互斥锁可以解决
  
  5.times do  #当次数很多的时候就可能会有多线程同时修改一个变量的问题
    threads << Thread.new do
      # mutex.synchronize do
      @counter += 1 #+=操作会转换为temp = @counter; temp = temp+1; @counter=temp. 所以+=不是原子性的操作，会有多线程问题
      #end
    end
  end
  
  threads.each(&:join)
  puts @counter
  
使用mutex太麻烦，可以使用全局锁GIL，即在同一时间可以创建多个线程但只能执行一个线程，这样GIL的效率就十分不好

Exception:
  begin
    1/m
    raise "error a" #set global exception variable $!， raise默认抛出的是RuntimeException
    # fail "error a" #fail 和raise一样
  rescue => e # 默认捕获StandardError，如果抛出的不是StandardError的子类就捕获不了，如果只想捕获某个异常：  rescue ZeroDivisionError =>e
    puts "#{e.message}"
    m += 1
    retry
  else 
    puts "test"
  ensure
    puts "must to do"
  end
  
  def divide m
    begin 
      1/m
    ensure
      return m #如果ensure中写了reutrn, 方法就会返回此处的值
    end
  end
  
  def routine(n)
    puts n
    routine(n-1)
  end
  routine(0) #当递归层次过深的时候就会抛出异常
  
  def routine(n)
    puts n
    throw :done if n<=0 #ruby中的throw, catch有点像goto语句，一般不用于处理异常
      routine(n-1)
  end
  catch(:done) {routine(0)}
  
    
标准库：
  ruby 1.9的标准库默认带了rubygems，而且在启动ruby的时候就默认load, 如果是之前的版本就要在使用rubygems的时候先require
  require 'test' #只加载一次
  load 'test.rb' #每次都加载，而且要写扩展名
  ruby的标准库之前由于写得不好，被人吐槽，ruby2.0后重写了很多功能，并把很多功能gem化，让我们自己选择是否引入。
  rake就是标准库中第一个变gem的。使用rake要编写一个文件叫Rakefile. gem list | grep rake
    desc "default task :test"
    task :default => [:test]
    
    task :test do
      ruby "test.rb"
    end
    
    #可以将这部分写到一个单独的文件db.rake,必须以rake结尾。
    #import "./db.rake"
    namespace :db do
      desc "create"
      task :create do
	puts "do creaated"
      end
      
      desc ":migrate"
      task :migrate do
	puts "do migrated"
      end
    end
    
    #使用rake
    rake db:create
    rake -T #查看Rakefile的所有命令
    
    #file.rake
    directory "db" #dicretory是rake提供的支持，可以创建文件夹
    
    file "db/my.db" => 'db' do  #file也是rake的支持，创建文件
      sh "echo 'Hello db' > db/my.db"
    end
    
    namespace :file do
      task :create => "db/db" do
      end
    end
    #import file.rake后，使用rake file:create后就会创建文件夹db,并创建文件my.db,并输入内容
  
Benchmark: 用于测试代码性能，可方便测试时间,在标准库中
  require 'benchmark'
  n=5000
  Benchmark.bm(7) do |x|   #7代表每行第一列占7字符，这样第一列(for:, tims:, upto:)就可以对齐
    x.report("for:") { for 1..n; a="1"; end}
    x.report("times:") { n.times; a="1"; end}
    x.report("upto:") { 1.upto(n); a="1"; end}
  end
  # 生成的结果包含4个时间：user, systgem, total, real
  # 还有Benchmark.bmbm, 执行两次
  
Test:
  ruby的标准库有简单的测试库MiniTest(tdd, bdd),也可以用Rspec(bdd),Rspec是BDD的测试框架，
  TDD只是面向程序员，BDD还会描述行为规范，不单单程序员可以看
  MiniTest(tdd)的例子：
  minitest_demo/lib/fib.rb  
   def fib(n)                                                                                                                       
       return 0 if n==0
       return 1 if n<=2
       fib(n-1)+fib(n-2)
   end
   
  minitest_demo/test/test_fib.rb  
  #test
  $: << File.join(File.dirname(__FILE__), '..', 'lib') #$:是require的查找路径,把..的lib加入$:

  require 'minitest/autorun'
  require 'minitest/pride'
  require 'fib'

  class TestLib < MiniTest::Unit::TestCase  #新版变成MiniTest::Test
      def setup
	  @fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
      end
      def test_fib0
	assert_equal 0, fib(0) 
      end

      def test_fib1
	@fib.each_index do |n|
	  assert_equal @fib[n], fib(n) 
	end
      end
      
      def teardown do end
  end

 #使用minitest进行bdd测试，业务人员也可以看，bdd的可读性更好
 #minitest_demo/spec/fib_spec.rb  
  $: << File.join(File.dirname(__FILE__), '..', 'lib') #$:是require的查找路径

  require 'minitest/autorun'
  require 'minitest/pride'
  require 'minitest/spec'
  require 'fib'

  describe Fib do

      before do   #每个测试前都会执行
	  @fib = Fib.new
	  @fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21]
      end

      it "给fib一个0,返回一个0" do  #写上行为描述
	  @fib.fib(0).must_equal 0 #bdd用的就不是断言了
      end

      it "给fib一个1,返回一个1" do
	  @fib.fib(1).must_equal 1
      end

      it "给fib一个n，返回一个给定的数字" do
	  @fibs.each_index do |n|
	      @fib.fib(n).must_equal @fibs[n]
	  end
      end

      after do  #每个测试后都会执行
	  puts "after test"
      end
  end
  上面是每个测试执行前都会执行before,也可以用另一种方式let
  describe Fib do
      let(:fib) do   #let是惰性求值，当执行测试中用到fib时，才会求值
	  Fib.new
      end
      
      subject do  #subject其实和fib是一样的，只是subject的变量就为subject,不能自己定义为fib
	 Fib.new   
      end
      
      let(:fibs) do   
	  [0, 1, 1, 2, 3, 5, 8, 13, 21]
      end

      it "给fib一个0,返回一个0" do  #写上行为描述
	  fib.fib(0).must_equal 0  #如果使用subject,这里就是  subject.fib(0).must_equal 0
      end

      it "给fib一个n，返回一个给定的数字" do
	  fibs.each_index do |n|
	      fib.fib(n).must_equal fibs[n]
	  end
      end
  end

  
gem:
  require 'gemname' 实际上是执行了 require 'gemname/lib/gemname.rb'
  当require一个gem的时候，会先到$LOAD_FEATURES($")这个数组中查找，如果没有就到$LOAD_PATH($:)中查找。
  $LOAD_PATH是gem包默认的安装路径。require一次之后，就会在LOAD_FEATURES中存在
  load一个gem包，回直接在$LOAD_PATH查找，然后执行。 load多次，每次都会重新load，而require只会require一次
  require不需要写rb扩展名，可以require其他文件，如so,bunble等， load只能对rb文件
  autoload在是lazy load,在需要用的时候才加载，在$LOAD_PATH中加载。 autoload在ruby2.0之前是线程不安全的，不推荐使用
  
  vim a.rb #创建一个a.rb的文件
  $".find{|i| i.match(/a.rb/)} # => nil
  require './a'
  $".find{|i| i.match(/a.rb/)} # => .../a.rb
  quit
  $".find{|i| i.match(/a.rb/)} # => nil
  load 'a.rb'
  $".find{|i| i.match(/a.rb/)} # => nil , load加载不会加入require_features
  quit
  $".find{|i| i.match(/a.rb/)} # => nil
  autoload :MY_OBJECT, './a' #注册对象MY_OBJECT使用autoload加载
  $".find{|i| i.match(/a.rb/)} # => nil ，
  MY_OBJECT   #当使用后就会加入require_features
  $".find{|i| i.match(/a.rb/)} # => ../a.rb
  
创建gem， 有很多工具可以帮助创建gem的目录结构，如bundle，当然也可以自己手动创建
  bundle gem sp
  
-----------------------------------------------------------------------------------------------

String:
  here doc: 
  str = <<-EOF  #如果没加-也可以，但是结尾EOF就不能有缩进
    hello world
    hello ruby
  EOF
  #也可以这样
  puts <<-BEGIN + <<-MIDDLE + <<-END
    aa
    BEGIN
    bb
    MIDDLE
    cc
    END
  str.swapcase  
  “hello\n”.chmop #去除字符串末尾的换行符，也能去掉\r\n,但如果末尾是\n\r就只能去掉最后的\r
  “hello\n there”.chmop("there") #也能指定参数， 返回hello\n 
  "hello\n".chop #chop与chmop类似也能去掉最后的换行，不同是如果最后不是换行，chop会去掉最后一个字符，chmop不会
  “ hello ”.strip #去掉两边的空格， 还有lstrip, rstrip
  "hello".reverse #反转字符串， 中文在1.8之前的版本有问题
  “测试一下”.length #在1.8中会返回的长度是12,因为转换了编码形式，要使用jcode来长度
  require 'jcode'
  "测试一下".jsize #返回4， 或者也可以使用正则
  "测试一下".split(//u)  #按字符分割，返回4个字符的数组
  str.force_encoding('ASCII-BBIT') #转换编码，并不改变字符串本身内容。 ASCII-BBIT是ruby独有的表示二进制的
  str.encode('UTF-8') #既转换编码，也改变字符串内容
  
  utf8_my = "mY "
  utf8_my.encoding  #返回Encoding:UTF-8对象
  ascii_my.encoding #返回Encoding:US_ASCII对象
  utf8_my + ascii_my # 由于ruby1.9的字符串是由原始字节和字符编码组成，所以字符串连接时会判断字符编码兼容性。 1.8是原始编码加字符编码
  Encoding.compatible?(ascii_my, utf8_my) #如果兼容则返回一个Encoding对象
  
  ruby源文件中如果有中文，执行时会报错，要在第一行指定文件的编码类型
  # 1.9
  # encoding: UTF-8   或者 # coding: UTF-8
  puts __ENCODING__ #当前源码编码
  
  # 1.8
  #!/usr/bin/env/ruby -wKU
  # -w 开启Ruby中的错误提示
  # -K 设置KCODE变量， U为UTF-8
  
  除了源码编码，在IO中还有外部编码和内部编码 
  name = gets.chmop #读取输入的文件名
  file = open(name, "r:big5:UTF-8") #只读方式打开，外部编码是big5(文件是big5编码的), 内部编码u8
  puts file.readlines
  put "外部编码: #{file.external_encoding}"
  put "内部编码: #{file.internal_encoding}"
  puts "哈喽".encoding 
  file.close
  #默认的外部编码是UTF8，内部编码是Nil
  #ruby2.0的源码默认是utf8， 源码有中文的时候不需要再制定源码编码
  #外部编码是指文件本身的字节流是使用什么编码，内部编码是读了这个文件的字节后使用什么编码来转换成字符
  str = "测试 一下 再一次"
  str.scan(/../) #按每两个字符分割， 返回["测试", " 一", "下 ", " 再", "一次"]
  str.scan(/(..)/) #按每两个字符分割， 返回[["测试"], [" 一"], ["下 "], [" 再"], ["一次"]]
  str.sub(/一/, '*') #将"一"替换为"*"， 替换匹配的第一个
  str.gsub(/一/, '*') #替换所有
  
regex:
  regex是外部DSL(面向特定领域)语言，Ruby才是宿主语言
  str = "hello 123"
  str.match(/./) #返回MatchData "h"  . match匹配第一个符合正则的字符串
  str =~ /\w/ #0 返回第一匹配的索引，没有则返回nil
  str.match(/\d+/) #MatchData "123"
  str.match(/\d*/) #MatchData "" , 注意*号， str一开始不是\d，所以就会匹配0次而不会继续向后找
  str.match(/\w*/) #MatchData "hello"
  str.match(/\d\d*/) #MatchData "123"
  str = "hello world "
  str.match(/(\w+ ){2}/) # <MatchData "hello world " 1:"world ">, 分组会自动捕获，而带次数{2}的分组会捕获最后一个匹配的分组
  #所以"world "被捕获到了$1中。  捕获会浪费内存，也可以只分组不捕获
  str.match(/(?:\w+ ){2}/)  ##<MatchData "hello world ">， 只分组不捕获
  str.match(/h(?:e|o|0)llo/) #利用分组加管道符实现多选择分支, 也可以用[eo0],但是[]只能匹配一个字符，而多选分支可以匹配多个
  str = "go go"
  str.match(/(\w+)\s\1/) #使用后向引用\1来匹配之前捕获的分组
  
regex分为dfa(确定有穷状态机)引擎，nfa(不确定有穷状态机)引擎，ruby属于和大多数语言一样属于nfa
  echo "abc 123" | egrep '\w'  #返回匹配的整行，匹配的内容会高亮。 这里会匹配abc 123。 egrep是dfa
  "abc 123".match(/\w/) #只会匹配一个字符a,   是dfa
  =~和match两边都都可以放字符串或正则， 当两边都是字符串时，右边被认为是正则
  
  $~ 最后的MatchData
  $& 最后的匹配字符串
  $` 位于匹配前的字符串
  $' 位于匹配后的字符串
  $+ 匹配最后括号的字符串
  $n 第n个括号的字符串
  以上写法来源于perl，可读性太差，很难记忆，ruby提供了另外一种方式，具体看文档MatchData
  m = /(.)(.)(\d+)(\d)/.match('TEX1138.')
  m[0] #=>"EX1138"
  m[1, 2] #=>["E", "X"] 从第一分组开始，长度为2
  
block:
  module a
    mv = 1
    def class b
      puts mv #这里是访问不到mv的
      cv = 2
      def say
	puts  #这里也同样访问不了cv, mv
      end
    end
  end
  # 这叫作用域墙，里面是访问不了外边变量的作用域。 
  #module scope
  #  class sclope
  #    method scope
  #	method scope
  但是通过块就可以让块内部访问外面的scope
  class A
    v = 3
    define_method :say do #通过动态定义方法，在块中就可以访问外部scope
      puts v
    end
  end
  A.new.say
  
  def test
    a=1
    lambda{puts a} #匿名函数，返回一个Proc对象。  这样就可以访问外部scope
  end
  test.call #调用lambda返回的Proc对象， 也可以test.()这样调用

closure闭包：
函数式编程： a+b
  def foo(x)
    ->{ x + y } #lambda{|y| x + y},  ->是1.9后支持的lambda简便写法
  end
  bar = foo(1) #返回一个Proc对象
  bar.(2)  #=> 3
  foo(1).(2) #=> 3
  






