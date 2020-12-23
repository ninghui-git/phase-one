$(function(){
	/*
	 * 登录界面
	 */
				$("#tops").click(function(){
					$("#ewm").css("display","block");
				});
				
				$("#login").click(function(){
					if($("#inputAdm").val()=="abc" && $("#inputPwd").val()=="123456"){
						alert("欢迎登录厦门旅游网！");
						window.open("首页.html","_self");
					}else{
						alert("账号或密码不正确，请重新登录！");
						$("#inputAdm").val("");
						$("#inputPwd").val(""); 
					}
				});
				$("#reg").click(function(){
					window.open("厦门注册.html","_self");
				});
				
				/*
				 * 注册界面
				 */
				$("#regin").click(function(){
					if($("#inputAdms").val().length>=1 && $("#inputPwds").val().length>=6 && $("#inputPwds").val().length<=10){
						alert("注册成功！");
						window.open("厦门登录.html","_self");
					}else{
						alert("账号或密码不符要求，请重新注册！");
					}
				});
				$("#relogin").click(function(){
					window.open("厦门登录.html","_self");
				});
			});
