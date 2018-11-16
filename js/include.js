$(document).ready(function(){
    $(".m_menu").load("./include/m_menu.html", function(){
        $(".m_menu .button_close").click(function(){
            $(".m_menu").toggleClass("clicked");
        });
    });
    $("#header").load("./include/header.html", function(){
        $(".pannel").click(function(){
            $(".m_menu").toggleClass("clicked");
        });
    });
    $("#footer").load("./include/footer.html");
})

function content_resize(){
    /*sub page functions*/
    $active_page = $(".active_page");
    console.log("content_resize");
    if($active_page!=undefined) {
        if($(window).width()>768){
            $content = $(".content_wrap");
            $pages = $content.children();
            if($active_page.length>0 && $content.length>0) {
                var height = $active_page.get(0).clientHeight;
                console.log(height);
                $content.css("height", (height + 40) + "px");
                for(var i= 0; i< $pages.length; ++i) {
                    $pages.eq(i).css("height", (height-50) + "px");
                }
            }
        } else {
            $(".content_wrap").removeAttr("style");
            $active_page.removeAttr("style");
        }
    }
}

$(window).on('load', function() {
    content_resize();
    window.addEventListener('resize', content_resize);
});