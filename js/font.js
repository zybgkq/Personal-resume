window.onscroll =  function () {
	 // skill字体一个一个出来
	var index = 0;
    var skillHtml = document.getElementById("skill_stu").innerHTML;
    var skillText= document.getElementById("skill_content");
    // scrollHeight网页可见区域的高度和宽度（不加边线）
    var headerHeight = document.getElementById("skill").scrollHeight;
    // 滚动条距离顶部高度 
    var skilllHeight=document.getElementById("skill").scrollTop
    ==0?document.documentElement.scrollTop:document.getElementById("skill").scrollTop;
    // skillText.style.position = "absolute";
    // 浏览器不兼容
    // var skilllHeight = document.getElementById("skill").scrollHeight;
    	// console.log(headerHeight + "滚动条")
    	// console.log(skilllHeight + "滚动条 1")
    var interval = setInterval(function (){
    		skillText.innerText= skillHtml.substring(0,index++);
    	if (headerHeight > skilllHeight) {
    		clearInterval(interval);
    		return;
    	}
    },800);
}