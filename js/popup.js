$(function(){
    var screenwidth,screenheight,mytop,getPosLeft,getPosTop
    screenwidth = $(window).width();
    screenheight = $(window).height();
    //獲取滾動條距頂部的偏移
    mytop = $(document).scrollTop();
    //計算彈出層的left
    getPosLeft = screenwidth/2 - 420;
    //計算彈出層的top
    getPosTop = screenheight/2 - 250;
    //css定位彈出層
    $("#contact_box").css({"left":getPosLeft,"top":getPosTop});
    //當瀏覽器視窗大小改變時...
    $(window).resize(function(){  //視窗被調整過時，運行此函數
    screenwidth = $(window).width();
    screenheight = $(window).height();
    mytop = $(document).scrollTop();
    getPosLeft = screenwidth/2 - 400;
    getPosTop = screenheight/2 - 250;
    $("#contact_box").css({"left":getPosLeft,"top":getPosTop+mytop});
    });
    
    //當拉動滾動條時...
    $(window).scroll(function(){
    screenwidth = $(window).width();
    screenheight = $(window).height();
    mytop = $(document).scrollTop();
    getPosLeft = screenwidth/2 - 420;
    getPosTop = screenheight/2 - 250;
    $("#contact_box").css({"left":getPosLeft,"top":getPosTop+mytop});
    });
    
    //點選連結彈出視窗
    $("#popup").click(function(){
         //console.log("123");
      $("#contact_box").fadeIn("fast");  //淡入
      //獲取頁面文件的高度
        var docheight = $(document).height();
        //追加一個層，使背景變灰(此層z-index:100，介於彈出視窗和底層之間)
        $("body").append("<div id='greybackground'></div>");
        $("#greybackground").css({"opacity":"0.5","height":docheight});
        //return false;
    });
    
        //點選關閉按鈕
        $("#closeBtn").click(function() {
        $("#contact_box").hide();
        //刪除變灰的層
        $("#greybackground").remove();
        return false;
        });
    
    });