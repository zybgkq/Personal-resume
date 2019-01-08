window.onload = function(){
	var images = ["../image/mushroom.jpg","../image/snow.jpg","../image/sunny.jpg","../image/1.jpg"];
	// 设定想要显示的图片
	var count = 0;
	var head = document.getElementById("bg1");
	// 获取对象
	head.style.background = "url(../image/mushroom.jpg)";
	// head.style.opacity = 0.6;	
	// 设置图片的初始化图片路径
	function Time(){
		count++;
    	count = count % 4;         // 超过2则取余数，保证循环在0、1、2之间
       // 当一个数比另外一个数小的时候则余数就是他本身
    	head.style.background="url("+images[count]+")"; 
   		 // 透明度设置
    	for(var i = 0; i < 0.2; i++){
    		var num = 1 - i * 0.8; 
    		
    		(function(){
    			if (head) {
    				// console.log("1")
    				head.style.opacity = num;
    			}
    		})(i)
    	}
    }

    setInterval(Time,3000);//循环调用time1()函数，时间间隔为2000ms
    //setInterval()函数，按照指定的周期（按毫秒计）来调用函数或表达式


 //    // skill字体一个一个出来
	// var index = 0;
 //    var skillHtml = document.getElementById("skill_stu").innerHTML;
 //    var skillText= document.getElementById("skill_content");
 //    // scrollHeight网页可见区域的高度和宽度（不加边线）
 //    var headerHeight = document.getElementById("skill").scrollHeight;
 //    // 滚动条距离顶部高度 
 //    var skilllHeight=document.getElementById("skill").scrollTop
 //    ==0?document.documentElement.scrollTop:document.getElementById("skill").scrollTop;
 //    // 浏览器不兼容
 //    // var skilllHeight = document.getElementById("skill").scrollHeight;
 //    	// console.log(headerHeight + "滚动条")
 //    	// console.log(skilllHeight + "滚动条 1")
 //    function newSkill(){
 //    	if (skilllHeight == headerHeight) {
 //    		skillText.innerText= skillHtml.substring(0,index++);
 //    	}
 //    }
	// setInterval(newSkill,600)
}