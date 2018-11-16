//function resize() {
//    var imgs = document.getElementsByClassName("object_fit");
//    for(var i= 0; i< imgs.length; ++i) {
//        var img= imgs[i];
//        var parent= img.parentElement.getBoundingClientRect();
//        var m_width = parent.width;
//        var m_height = parent.height;
//        
//        var m_ratio = m_width/m_height;
//        var i_ratio = img.width/ img.height;
//        var scale = (m_ratio>i_ratio) ? m_width/img.width : m_height/img.height;
//        
//        
////        console.log(scale);
////        console.log("("+m_width +", "+m_height+"), ("+img.width+","+img.height+")");
//        
//        img.parentElement.style.overflow = "hidden";
//        img.width*= scale;
////        console.log("("+img.width+","+img.height+")");
//        img.style.marginLeft= ((m_ratio>i_ratio) ? 0 : (m_width - img.width)/2) + "px";
//        img.style.marginTop= ((m_ratio>i_ratio) ? (m_height - img.height)/2 : 0) + "px";
////        img.height*= scale;
//    }
//}

function resizeElement(img) {
    var parent= img.parentElement.getBoundingClientRect();
    var m_width = parent.width;
    var m_height = parent.height;

    var m_ratio = m_width/m_height;
    var i_ratio = img.width/ img.height;
    var scale = (m_ratio>i_ratio) ? m_width/img.width : m_height/img.height;


//        console.log(scale);
//        console.log("("+m_width +", "+m_height+"), ("+img.width+","+img.height+")");

    img.parentElement.style.overflow = "hidden";
    img.width*= scale;
//        console.log("("+img.width+","+img.height+")");
    img.style.marginLeft= ((m_ratio>i_ratio) ? 0 : (m_width - img.width)/2) + "px";
    img.style.marginTop= ((m_ratio>i_ratio) ? (m_height - img.height)/2 : 0) + "px";
//        img.height*= scale;
}


//function resize() {
//    var imgs = $(".object_fit");
//    for(var i= 0; i< imgs.length; ++i) {
//        resizeElement(imgs.eq(i));
//    }
//    imgs.css("opacity",1);
//}
//$(window).on("load", function(){
//    resize();
//    window.addEventListener('resize', resize);
//})

function resize() {
    var imgs = $(".object_fit");
    for(var i= 0; i< imgs.length; ++i) {
        resizeElement(imgs[i]);
    }
}
$(window).on("load", function(){
    resize();
    window.addEventListener('resize', resize);
})