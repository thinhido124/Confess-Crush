<!DOCTYPE html>

<html>
 <head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
   <link rel="shortcut icon" href="http://imgur.com/tu7Lr95.jpg" >
    <title>Hoàng Thị Mỹ Hiền mày ngáo đá lắm đúng ko ? </title>
     <meta property="og:image" content="sc.PNG">
     
        
        <meta http-equiv="content-language" content="vi">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <script async="" src="https://www.google-analytics.com/analytics.js"></script>
	<script src="http://code.jquery.com/jquery-latest.js"></script>
    
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
 

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
 

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <style>
		
        .love-wrap
        {
            width: 80%;
            margin: auto;
        }
        h1, button
        {
            text-align: center;

        }
        .love-content
        {
            width: 360px;
            margin: auto;
            position: relative;
            margin-top: 50px;
            height: 200px;
        }
        .love-btn
        {
            position: absolute;
            margin: auto;
        }
        .love-btn-one
        {
            left: 0px;
            top: 80px;
        }
        .love-btn-two
        {
            right: 0px;
            top: 80px;
        }
        .love-btn
        {
            width: 120px;
            margin: 20px;
            padding: 10px;
        }
        .love-you-know
        {
            text-align: center;
            font-size: 20px;
            color: #ffffff;
            font-weight: bold;
			background-color: rgba(180, 30, 210, 0.55);
        }
		.love-you-know1
        {
            text-align: center;
            font-size: 20px;
            color: #54ff00;
            font-weight: bold;
			background-color: rgba(0, 0, 0, 0.55);
        }
        .love-you-know span
        {
            color: red;
        }
        .heart {
			
            background-color: red;
            display: inline-block;
            height: 30px;
            margin: 0 10px;
            position: relative;
            top: 0;
            transform: rotate(-45deg);
            width: 30px;
        }

        .heart:before,
        .heart:after {
            content: "";
            background-color: red;
            border-radius: 50%;
            height: 30px;
            position: absolute;
            width: 30px;
        }

        .heart:before {
            top: -15px;
            left: 0;
        }

        .heart:after {
            left: 15px;
            top: 0;
        }
        .modal-content
        {
            background: url(http://imgur.com/zUBtKGu.jpg);
            height: 300px;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        .modal-header
        {
                border-bottom: none;
        }
    </style>
</head>

<body>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-62964752-2', 'auto');
  ga('send', 'pageview');

</script>
   <!-- Modal -->
   <div class="modal fade" id="myLove" role="dialog" style="display: none">
    <div class="modal-dialog">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">×</button>
      </div>
      <div class="modal-body">
          
          <p class="love-you-know"> TRỜI,BIẾT MÀ :D<span class="heart"></span></p>
       		<p class="love-you-know1">úi mài chơi đá lâu thế rồi luôn à. </p>
      </div>
  </div>

</div>
</div>

<div class="love-wrap">


    <h1> <b>Hoàng Thị Mỹ Hiền mày ngáo đá bao lâu rồi ?</b></h1>
    <div class="love-content">
        <button class="love-btn love-btn-one btn btn-default" data-status="6">KHÔNG</button>
        <button class="love-btn love-btn-two btn btn-default" data-status="5" style="top: 80px;">TÔI CÓ</button>
    </div>
</div>
<div style="height: 250px; background-color: #ffffff">
	
</div>
<div style="text-align: center">
	<p>&copy; Copyright by <a href="https://www.facebook.com/khai.dvfb">Phan Văn Khải</a> &#124; <a href="https://www.youtube.com/">Youtube</a></p>
	<iframe src="http://www.nhaccuatui.com/mh/background/G2Fil0oSQeHm" width="1" height="1" frameborder="0" allowfullscreen></iframe>
	<audio autoplay>
		
	</audio>
</div>

<script>
    $(document).ready(function () {
        function eventBtnLove(el, status, mobi)
        {
            switch (status)
            {
                case 1:
                      if(mobi) setTimeout(function(){$("#myLove").modal()},1000);
                break;
                case 2:
                    el.css("top", 0);
                    el.attr("data-status", 3);
                break;
                case 3:
                    el.css("top", 80);
                    el.attr("data-status", 4);
                break;
                case 4:
                    el.text("TÔI CÓ");
                    el.attr("data-status", 5);
                    $("button[data-status=1]").text("KHÔNG");
                    $("button[data-status=1]").attr("data-status", 6);
                break;
                case 5:
                     if(mobi) setTimeout(function(){$("#myLove").modal()},1000);
                break;
                case 6:
                    el.text("TÔI CÓ");
                    el.attr("data-status", 1);
                    $("button[data-status=5]").text("KHÔNG");
                    $("button[data-status=5]").attr("data-status", 2);
                break;

            }

        }
        function detectmob() { 
           if( navigator.userAgent.match(/Android/i)
               || navigator.userAgent.match(/webOS/i)
               || navigator.userAgent.match(/iPhone/i)
               || navigator.userAgent.match(/iPad/i)
               || navigator.userAgent.match(/iPod/i)
               || navigator.userAgent.match(/BlackBerry/i)
               || navigator.userAgent.match(/Windows Phone/i)
               ){
            return true;
    }
    else {
        return false;
    }
}
$(".love-btn").hover(function () {
    eventBtnLove($(this), parseInt($(this).attr("data-status")), false);
}, function () {

})
$(".love-btn").click(function () {

    if(!detectmob())
    {
      if($(this).attr("data-status") ==1 || $(this).attr("data-status")==5)
      {
        $("#myLove").modal()

    }
}
else
{
    eventBtnLove($(this), parseInt($(this).attr("data-status")), true);
}

})
})
</script>

</body></html>
