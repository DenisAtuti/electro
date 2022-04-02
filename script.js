// UNIVERSAL SECTION
const documentFile = document;


// WISHLIST MODEL
const wishlistIcon = documentFile.querySelector(".wishlist-wrapper")
const wishlistModel = documentFile.querySelector(".wishlist-products-container")

wishlistIcon.addEventListener("click",()=>{
  wishlistModel.classList.toggle("active")
})

// close wishlist model when clicked outside
documentFile.addEventListener("click", function(event) {
  if (event.target.closest(".wishlist-wrapper")) return;
  wishlistModel.classList.remove("active")
})


// CART MODEL
const cartIcon = documentFile.querySelector(".cart-wrapper")
const cartModel = documentFile.querySelector(".cart-products-container")

cartIcon.addEventListener("click",()=>{
  cartModel.classList.toggle("active")
})
// close cart model when clicked outside
documentFile.addEventListener("click", function(event) {
  if (event.target.closest(".cart-wrapper")) return;
  cartModel.classList.remove("active")
})



// CARD SLIDER
window.onload=function(){
    cardsDisplayed()
};

// window.addEventListener('resize',()=>{
//     cardsDisplayed()
// })

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

// PRODUCT DETAILS MODEL
//display

const productItems = documentFile.querySelectorAll(".product-item");
const productDetailModel = documentFile.querySelector(".product-detail-model-container")
const productDetailModelClose = documentFile.querySelector(".product-model-close")

productItems.forEach(productItem =>{
  productItem.addEventListener("click",() =>{
    productDetailModel.classList.add("active")
  })
})
productDetailModelClose.addEventListener("click",() =>{
  productDetailModel.classList.remove("active")
})

// change primary image
const subtitudeImgs = documentFile.querySelectorAll(".subtitude-img")
const mainImg = documentFile.querySelector(".main-img")

subtitudeImgs.forEach(subtitudeImg =>{
  subtitudeImg.addEventListener("click",() =>{
    mainImg.src = subtitudeImg.src;
  })
})

// close product detail model when clicked outside
documentFile.addEventListener("click", function(event) {
  if (event.target.closest(".cart-wrapper")) return;
  cartModel.classList.remove("active")
})
