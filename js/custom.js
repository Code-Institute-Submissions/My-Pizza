/*========== NAVBAR TRANSPARENT TO SOLID ==========*/

$(document).ready(function() {  
        // Transition effect for navbar 
        $(window).scroll(function() { 
          if($(this).scrollTop() > 300) { 
              $('.navbar').addClass('solid'); //add class 'solid' in any element which has class 'navbar'
          } else {
              $('.navbar').removeClass('solid'); //remove class 'solid' in any element which has class 'navbar'
          }
        });
});

/*========== CLOSE MOBILE NAV ON CLICK ==========*/

$(document).ready(function () { 
    $(document).click(function (event) { //click anywhere
        var clickover = $(event.target); //get the target element where you clicked
        var _opened = $(".navbar-collapse").hasClass("show"); 
        if (_opened === true && !clickover.hasClass("navbar-toggler")) { 
            $(".navbar-toggler").click(); //toggle the navbar; close the navbar menu in mobile.
        }
    });
});

/*========== SMOOTH SCROLLING TO LINKS ==========*/

$(document).ready(function(){ 
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    if (this.hash !== "") { 
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({ //animate whole html and body elements
        scrollTop: $(hash).offset().top 
      }, 800, function(){
        window.location.hash = hash; 
      });
    } // End if
  });
});

/*========== BOUNCING DOWN ARROW ==========*/

$(document).ready(function(){
$(window).scroll(function(){ 
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
  });
});

/*========== OUR TEAM ==========*/

$(document).ready(function(){ 
  $("#team-slider").owlCarousel({ 
        items:3,
        autoplay:true,
        smartSpeed:700, 
        loop:true, 
        autoplayHoverPause:true,
        responsive : { 
            0 : {
                items: 1 //on devices with width 0 to 579px show 1 slide
            },
            576 : {
                items: 2 //on devices with width 579px to 768px show show 2 slides
            },
            768 : {
                items: 3 //on devices with width 768px and above show 3 slides 
            }
        }
  }
  );
});

/*========== SKILLS COUNTER ==========*/

$(document).ready(function() { 
        $('.counter').counterUp({
            delay: 10, 
            time: 1800 
        });
    });

/*========== CLIENTS CAROUSEL ==========*/

$(document).ready(function(){ 
  $("#reviews-slider").owlCarousel({ 
        items:2, 
        autoplay:true, 
        smartSpeed:1700, 
        loop:true, 
        autoplayHoverPause:true, 
        responsive : { 
            
            0 : {
                items: 1 
            },
            // min-width: 768px
            768 : {
                items: 2 //on devices with width 768px and above show show 2 slides
            },
        }
  }
  );
});

/*========== TOP SCROLL BUTTON ==========*/

$(document).ready(function() { 
  $(window).scroll(function() { 
    if ($(this).scrollTop() > 500) { 
      $('.top-scroll').fadeIn(); 
    } else { 
      $('.top-scroll').fadeOut(); 
    }
  });
});


//Optional Refresh Page at top of document on load instead of at # hash
/*

$(document).ready(function(){
    $('html, body').scrollTop(0);
    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
});

*/

//UPDATE ADDITION: MAKE PRICING & TEAM SECTIONS COLUMN HEIGHT EQUAL
/*

$(document).ready(function(){

    // Select and loop the container element of the elements you want to equalise
    $('.row').each(function(){  
      
      // Cache the highest
      var highestBox = 0;
      
      // Select and loop the elements you want to equalise
      $('.pricing-column,.card-body', this).each(function(){
        
        // If this box is higher than the cached highest then store it
        if($(this).height() > highestBox) {
          highestBox = $(this).height(); 
        }
      
      });  
            
      // Set the height of all those children to whichever was highest 
      $('.pricing-column,.card-body',this).height(highestBox);
                    
    }); 

});

*/
