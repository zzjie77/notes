[1mdiff --git a/2012/hibernate2012.txt b/2012/hibernate2012.txt[m
[1mindex 69b52a3..9af5247 100644[m
[1m--- a/2012/hibernate2012.txt[m
[1m+++ b/2012/hibernate2012.txt[m
[36m@@ -88,7 +88,7 @@[m [mStudent[m
 [m
 hibernate3.5之前使用annotation要单独下载jar包，并且创建cfg对象时，要使用AnnotationConfiguration创建[m
 [m
[31m-使用Annotation的弊端是失去了灵活性，以后要修改的话就要修改源代码。违背了ocp原则。 优点是简单快捷，无需配置[m
[32m+[m[32m使用Annotation的弊端是失去了灵活性，以后要修改的话就要修改源代码。违背了ocp原则（对扩展开放,对修改关闭。我们在设计一个模块的时候,应当使这个模块可以在不被修改的前提下被扩展）。 优点是简单快捷，无需配置[m[41m[m
 但是实际项目中很少修改项目，修改源代码的。[m
 [m
 @Entity[m
