(function() {
    
    $('.quote__slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });
    $(".testimonial__slider").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    // item__button btn1 item__button-flag arrow_close
    // item__text text1
    $(".item__button").on("click", function() {
        console.log("clicked");
        console.log($(this).data('open'));
        if ($(this).data('open') == "off") {
            console.log("opened");
            closeItem();
            $(this).find("+li").css('display', 'block');
            $(this).find('.item__button-flag').attr('src', 'img/arrow_open.png');
            $(this).data('open', 'on');
        } else {
            $(this).find("+li").css('display', 'none');
            $(this).find('.item__button-flag').attr('src', 'img/arrow_close.png');
            $(this).data('open', 'off');
        }
    })


    $(".menu__button").on('click',function(event){
        if($(this).data("flag")==="off"){
            
            $(".menu-list").css("width",(window.innerWidth>=540)?window.innerWidth/3:window.innerWidth/2);
            $(this).data("flag","on");
        }else{
            $(".menu-list").css("width","0px");
            $(this).data("flag","off");
        }
    })
})();

function closeItem() {
    let item = $(".item__button").data('open', 'off');
    item.find("+li").css('display', 'none');
    item.find(".item__button-flag").attr('src', "img/arrow_close.png");

}