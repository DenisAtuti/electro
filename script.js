
// CARD SLIDER
window.onload=function(){
    cardsDisplayed()
};

window.addEventListener('resize',()=>{
    cardsDisplayed()
})

function slickSliderResize(windowWidth) {
    var answer;
    switch( true ) {
      case (windowWidth >= 1500) : 
        answer = 4;
        break;
      case (windowWidth >= 1200) : 
        answer = 3;
        break;
      case (windowWidth >= 700) : 
        answer = 2;
        break;
      case (windowWidth >= 600 ) : 
        answer = 1;
        break;
        default:
            answer = 1;
    }
    return answer
}

function cardsDisplayed() {
    let windowWidth = window.innerWidth
    let showSlides = slickSliderResize(windowWidth)
    // console.log(showSlides);
    // console.log(windowWidth);

    $('.new-products-wrapper').slick({
    autoplay:true,
    autoplaySpeed:500,
    arrows:true,
    prevArrow:'<button type="button" class="slick-prev"></button>',
    nextArrow:'<button type="button" class="slick-next"></button>',
    centerMode:true,
    slidesToShow:showSlides,
    slidesToScroll:1
    });
}


