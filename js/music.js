$(function (){
	$.ajax({
		url:"https://api.hibai.cn/api/index/index",
		type:'post',
		dataType:'json',
		data:{
			"TransCode": "020112",
		    "OpenId": "123456789",
		    "Body": {
		        "SongListId": "141998290"
		    }
		},
		success: function (data,status){
			$('.music_title').remove();
			var dataArr = data.Body;
			// 显示九条数据
			var num = dataArr.length/16;

			// 对第九张图片进行处理
			// var data_str = dataArr[0].pic;
			// var data_id = data_str.split('?');
			
			// 图片太大，对第九个图片进行处理
			for(var i = 0; i < num; i++){
				$('.music_all_name').append("<li class='music_title'>"+ dataArr[i].title +"</li>");
				$('.music_all_author').append("<li class='music_author'>"+ dataArr[i].author +"</li>");
				$('.music_all_pic').append("<img class='music_pic' src="+  dataArr[i].pic +">");
			}

			// 点击加载更多音乐
			$('#fastener').click(function (){
				var numAdd = num + 1;
				for(var i = 0; i < numAdd; i++){
					$('.music_all_name').append("<li class='music_title'>"+ dataArr[i].title +"</li>");
					$('.music_all_author').append("<li class='music_author'>"+ dataArr[i].author +"</li>");
					$('.music_all_pic').append("<img class='music_pic' src="+  dataArr[i].pic +">");
				}
				num += 5
				console.log(num + "num")
				console.log(numAdd + "numAdd")
				if (num >= 144) {
					return ;
				}
			}) 
		},
		fail:function (err,status){
			console.log(err)
		}
	})
})



