		//Modify scripts

//Carousel brands
  $('.owl-carousel-brands').owlCarousel({
      loop:true,
      margin:4,
      nav:true,
      navText: [],
      touchDrag: true,  
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          768:{
        	items:3
         },    
          1000:{
              items:4
          }
      }
  });
     
 