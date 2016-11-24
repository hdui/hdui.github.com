/**
 * Created by wcn on 2016/11/21.
 */
"use strict"
$(function () {
    resize();
    function resize() {
        var screenWidth=$(window).width();
        var isSmallScreen=screenWidth<768;
        $('#ad_picture .carousel-inner> .item').each(function (i,item) {
            var $item=$(item);
            console.log(11)
            var imgSrc=isSmallScreen? $item.data('image-xs'):$item.data('image-lg');
            $item.css('backgroundImage',"url('"+imgSrc+"')");
            if(isSmallScreen){
                $item.html('<img src="'+imgSrc+'" alt=""/>');
            }else {
                $item.empty();
            }
        })

    }
    $(window).on('resize',resize);
    var width=30;
    $(".nav-tabs").children().each(function (i,ele) {
        width+=$(ele).width();
    });
    if (width>$(window).width()) {
        $(".nav-tabs").css("width", width);
        $(".nav-tabs").parent().css("overflow-x","scroll");
    }
        $("#news .nav-stacked a").on('click',function () {
            var $this=$(this);
            var title=$this.data("title");
            $("#news .news-title").text(title);
        })
    var $carousel=$(".carousel")
    var startX,endX,offset=50;
    $carousel.on("touchstart",function (e) {
        startX=e.originalEvent.touches[0].clientX;
    })
    $carousel.on("touchmove",function (e) {
        endX=e.originalEvent.touches[0].clientX;
    })
    $carousel.on("touchend",function (e) {
        if(Math.abs(startX-endX)>offset){
            $(this).carousel(startX>endX?"next":"prev");
        }
    })

});