	//这样写的好处是图片多了可以自动加，少了自动减
	window.onload = function(){
		
				var imgList = document.getElementById("imgList");
				var imgArr = imgList.getElementsByTagName("img");
			    imgList.style.width=690*imgArr.length+"px";/*设置ul宽度，动态设置*/
			    
			    //默认显示图片索引
			    var index = 0;
			    var navDiv = document.getElementById("navDiv");
			    var allA = navDiv.getElementsByTagName("a");
				allA[index].style.backgroundColor = "red";
				//为a绑定单击响应函数
				for(var i =0; i<allA.length; i++){
					//为每一个a添加一个num属性
					allA[i].num = i;
					allA[i].onclick = function(){
						//关闭自动切换定时器
						clearInterval(timer);
						
						index = this.num;
						
						imgList.style.left = -690*index+"px";
						autoChange();
						setA();
					};
				}
				//调用自动切换函数
				autoChange();
				
				function setA(){
					if(index >= imgArr.length-1){
						//则将index设为0
						imgList.style.left = 0;
						index=0;
					}
					
					for(var i = 0;i<allA.length; i++){
						allA[i].style.backgroundColor="";
					}
					allA[index].style.backgroundColor = "red";
				};
				
				//定义一个自动切换的定时器标识
				var timer;
				function autoChange(){
					timer = setInterval(function(){
						index++;
						index %=imgArr.length;
						move(imgList,"left",-690*index,50,function(){
							setA();
						});
					},3000);
				}
				
				
		
		
				
				
	};