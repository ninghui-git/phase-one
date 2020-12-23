/*
				 * 参数：
				 * obj:要执行动画的对象
				 * attr:要执行动画的样式   比如：left,right,width,height
				 * target：执行动画的目标位置
				 * speed：移动的速度（正数右移，负数左移）
				 * callback:回调函数，这个函数在动画执行完毕以后执行
				 */
				function move(obj,attr,target,speed,callback){
					clearInterval(obj.timer);
					
					var current = parseInt(getStyle(obj,attr));
					if(current>target){
						speed = -speed;
					}
					//向执行动画的对象中添加一个timer属性，用来保存它自己的定时器标识
					obj.timer = setInterval(function(){
						var oldValue = parseInt(getStyle(obj,attr));
						var newValue = oldValue + speed;
						
						if((speed<0 && newValue<target) || (speed>0 && newValue>target)){
							newValue=target;
						}
						obj.style[attr] = newValue+"px";
						if(newValue==target){
							clearInterval(obj.timer);
							//动画执行完毕，执行回调函数
						    callback && callback();
						}
						
					},30);
				}
				
				/*
				 * 参数：
				 * obj:要获取样式的元素
				 * name:要获取的样式名
				 * 
				 */
				function getStyle(obj,name){
					if(window.getComputedStyle){
						return getComputedStyle(obj,null)[name];
					}else{
						return obj.currentStyle[name];
					}
				}