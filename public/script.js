$(document).ready(function() {
    "use strict";
  
    $('div.sidebar > div.sidebar-container a').click(function(e) {
      e.preventDefault();
      $('div.sidebar > div.sidebar-container a').removeClass('active');
      $(this).addClass('active');
      
      switch (this.id) {
        case "homeButton":
            $('div.content > div.main').css('display','none')
            $('#home').css({
              "opacity":"0",
              "display":"block",
          }).show().animate({opacity:1},1000);
            break;

        case "portfolioButton":
            $('div.content > div.main').css('display','none')
            $("#portfolio").css({
              "opacity":"0",
              "display":"block",
          }).show().animate({opacity:1},1000);
            break;

        case "contactButton":
            $('div.content > div.main').css('display','none')
            $('#contact').css({
              "opacity":"0",
              "display":"block",
          }).show().animate({opacity:1},1000);
            break;

        case "aboutButton":
            $('div.content > div.main').css('display','none')
            $('#about').css({
              "opacity":"0",
              "display":"block",
          }).show().animate({opacity:1},1000);
            break;
      }
    });
  });
