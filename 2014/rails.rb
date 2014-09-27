运行rails可以使用rails s使用默认的自带的webrick服务器来运行
也可以通过apache + passenger或者 nginx + passenger 来运行。
或者使用nginx + unicorn 。 unicorn是ruby的服务器，而passenger只是apache用来运行ruby的插件

rails new blog -d mysql #新建rails项目， 指定数据库
rails g model Post title:string content:text #生成模型
rake db:create; rake db:migrate  #创建数据库; 执行数据库变更
rails console或rails c进入命令行
> Post   #查看posts表的数据结构，也可以直接连接数据库查看
> p = Post.new(:title = 'aa', :content => 'bb')
> p.save   #new然后save可以简化成create
> p.all    #查询所有
> p.find(1) #根据id查找
> p.find(:title => 'aa') 
> Post.first #Post.last


config/routes.rb
match 'products/', :to=> 'product#index', :as => 'product' #as可以不加，加了之后就有xx_path, xx_url(带上http://域名/)
#推荐在页面使用link_to标签使用path, 后台redirect使用url。 
resources :orders #相当于写了7个route mapping. 执行看rake routes可以查看所有路由的最终效果
        orders GET    /orders(.:format)                  {:action=>"index", :controller=>"orders"}
               POST   /orders(.:format)                  {:action=>"create", :controller=>"orders"}
     new_order GET    /orders/new(.:format)              {:action=>"new", :controller=>"orders"}
    edit_order GET    /orders/:id/edit(.:format)         {:action=>"edit", :controller=>"orders"}
         order GET    /orders/:id(.:format)              {:action=>"show", :controller=>"orders"}
               PUT    /orders/:id(.:format)              {:action=>"update", :controller=>"orders"}
               DELETE /orders/:id(.:format)              {:action=>"destroy", :controller=>"orders"}
:format 有html, json, xml， 默认是html。 相当于返回html
	respond_to do |format|
	  format.html # new.html.erb
	  format.xml  { render :xml => @cart }
	end

def create
	@post = Post.new(params[:post])
	if @post.save
		redirect_to new_post_url
	else 
		render "new" #等价于render action:"new"，但是这样具有迷惑性，实际上render不执行new方法的.但是new页面需要@post,解决办法是把create方法里的post局部变量变成@post
	end
end
def new
	@post = Post.new
end

可以把重复的页面片段写到一个_xx.html.erb，称为一个partials, 如_form.html.erb,然后使用<%= render 'form' %>来引入

rake -T 查看rake所有可执行任务

rails g migration CreateProducts  #生成db/migrate/20140505xx_craete_product.rb  
	class CreateProducts < ActiveRecord::Migration
	  def up
	    create_table :products do |t|
	      t.string :name
	      t.text :description
	 
	      t.timestamps
	    end
	  end
	 
	  def down
	    drop_table :products
	  end
	end

rake db:migrate 就会执行up方法
rake db:rollback 执行down方法	
vim app/models/products.rb
	class Product < ActiveRecord::Base
	end
rails c #进入命令行就能使用ActiveRecord提供的方法了
> p = Product.new 
> p.save
> Product.find(1)


rbenv与rvm的不同，rvm试图干太多的事，使用起来不简洁。 而rbenv对ruby的版本控制是十分简单透明的
rbenv versions 查看所有ruby版本
rbenv global system 修改全局的ruby版本为system. 实际上只是修改了~/.rbenv/version文件
rbenv version 查看当前正在使用的ruby版本
cd foo #foo是一个项目根目录
rbenv version 如果在项目内没有设置ruby版本，那么foo的ruby版本默认就是全局的版本
rbenv local 2.0.0-p0 设置项目的ruby版本为2.0.0-p0, 实际上只是创建了foo/.ruby-version文件，手动创建效果也一样
rbenv rehash 安装了gem之后，如果gem添加了新的命令，就要rehash使其生效
rbenv install 1.9.3-p0 需要先安装ruby-build插件,安装ruby, 安装之前通常要apt-get install 一堆依赖包
rbenv installer这个项目可以把rbenv, rbenv-build等常用的插件都安装好，包括安装ruby需要的环境、




