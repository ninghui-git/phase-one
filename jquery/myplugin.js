//定义插件的两种方式
//1.以工具函数的形式，调用：$.global()

(function($){
	$.extend({
		global:function(){
			console.log("以工具函数的形式定义的插件");
		}
	});
})(jQuery);

//2.以成员函数的形式，调用：$("").local()
(function($){
	$.fn.extend({
		local:function(){
			console.log("以成员函数的形式定义插件");
			return this;//为了支持链式操作，需要返回this，此处的this表示的是调用local()方法的jquery对象
		}
	});
})(jQuery);
