$(function(){

  $(".rate-star").rateYo({
    rating: 4.6,
    readOnly: true,
    starWidth: "15px",
    normalFill: "#fff",
    ratedFill: "#ffc000"
    
  });

  $('.weekly-slider__inner').slick({
    dots:false,
        arrows: true,
       nextArrow: '<button class="slick-arrow slick-next"><img src="images/chevron-right.svg" alt="next arrow"></button>',
      prevArrow: '<button class="slick-arrow slick-prev"><img src="images/chevron-left.svg" alt="prev arrow"></button>',
  fade:true
    
});

  
var mixer = mixitup('.newest-slider__wrapper');


});