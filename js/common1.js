$(document).ready(function(){
    let wW = window.innerWidth;
    let wH = window.innerHeight;
    const body = $("body");
    const openBtn = $(".m-gnb-open");
    const closeBtn = $(".m-gnb-close");
    const gnbWrap = $(".swsk-gnb-wrap");
    const depth1 = $(".depth1");
    const depth2 = $(".depth2");
    const slideSpeed = 200;

    rwd();
    reset();

    $(window).resize(function(){
        rwd();
        reset();
    });

    function rwd() {
        wW = window.innerWidth;
        wH = window.innerHeight;
        if(wW < 1280) {
            body.addClass("mo").removeClass("pc");
        } else {
            body.addClass("pc").removeClass("mo");
        }
    }
    
    function reset() {
        body.removeClass("hidden");
        gnbReset();
    }
    
    openBtn.click(function(){
        body.addClass("hidden");
        gnbWrap.css("left", 0);
    });
    closeBtn.click(function(){
        body.removeClass("hidden"); 
        gnbWrap.css("left", "-300px");
    });


    function gnbReset(){
        if(body.hasClass("mo")){
            gnbWrap.css("left", "-300px");
            depth1.removeClass("active");
            depth2.slideUp(slideSpeed);
        }
    }

    
    //모바일 GNB 작동
    depth1.children("a").click(function(){
        if(body.hasClass("mo")){
            console.log("mo");
            //메인메뉴 활성화(active)
            $(this).parent().siblings().removeClass("active");
            $(this).parent().parent().siblings().find(".depth1").removeClass("active");
            $(this).parent().toggleClass("active");
            //서브메뉴 제어
            $(this).parent().siblings().find(".depth2").stop().slideUp(slideSpeed);
            $(this).parent().parent().siblings().find(".depth2").stop().slideUp(slideSpeed);
            $(this).next().stop().slideToggle(slideSpeed);
        }
    });
    depth1.on({
        "mouseenter": function(){
            if(body.hasClass("pc")){
                $(this).find(".depth2").fadeIn(slideSpeed);
            }
        },
        "mouseleave": function(){
            if(body.hasClass("pc")){
                $(this).find(".depth2").fadeOut(slideSpeed);
            }
        }
    });
    depth2.each(function(){
        $(this).children().last().focusout(function(){
            $(this).parent().fadeOut(slideSpeed);
        });
    });
    


    //푸터 펼침메뉴
    $(".brand-label").click(function(){
        $(".brand-item").toggleClass("active");
        //앵커의 기능 실행을 금지
        return false;
    });
});