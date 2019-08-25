$(document).ready(function() {
    "use strict";
  
    $('div.sidebar > a').click(function(e) {
      e.preventDefault();
      $('div.sidebar > a').removeClass('active');
      $(this).addClass('active');
      
      switch (this.id) {
        case "homeButton":
            $('div.content > div.main').css('display','none')
            $('#home').css('display','block');
            break;

        case "portfolioButton":
            $('div.content > div.main').css('display','none')
            $('#portfolio').css('display','block');
            break;

        case "contactButton":
            $('div.content > div.main').css('display','none')
            $('#contact').css('display','block');
            break;

        case "aboutButton":
            $('div.content > div.main').css('display','none')
            $('#about').css('display','block');
            break;
      }
    });
  });
