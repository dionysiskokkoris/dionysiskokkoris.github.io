

  window.sr = ScrollReveal({ duration: 2000 });
  sr.reveal('#logo', 100);


  /* active menu item on click */
  $(document).ready(function() {

      'use strict';


      $('.navbar-nav li a').click(function(){

          //'use strict';

          $('.navbar-nav li a').parent().removeClass("active");

          $(this).parent().addClass("active");

      });
  });




//add smooth scrolling
$(document).ready(function() {

          'use strict';


          $('.nav-item, #scroll-to-top').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: target.offset().top
              }, 1000);
              return false;
            }
          }
        });


  });
