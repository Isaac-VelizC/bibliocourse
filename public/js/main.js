$(function() {
    
    "use strict";
    
    //===== Sticky
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".navigation").removeClass("sticky");
            $(".navigation-3 img").attr("src", "images/logo-2.png");
        } else{
            $(".navigation").addClass("sticky");
            $(".navigation-3 img").attr("src", "images/logo.png");
        }
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function() {
        $(this).toggleClass("active");
    });
    
    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <i class="fa fa-chevron-down"></i> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }
    
    
    
    //===== Count Down
    
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<div class="count-down-time"><div class="singel-count"><span class="number">%D :</span><span class="title">Days</span></div><div class="singel-count"><span class="number">%H :</span><span class="title">Hours</span></div><div class="singel-count"><span class="number">%M :</span><span class="title">Minuits</span></div><div class="singel-count"><span class="number">%S</span><span class="title">Seconds</span></div></div>'));
      });
    });
    
    
    //=====  Rating selection
    
    $('.reviews-form').on('click', '.rate-wrapper .rate .rate-item', function() {
        var self = $(this),
            target = self.parent('.rate');
        target.addClass('selected');
        target.find('.rate-item').removeClass('active');
        self.addClass('active');
    });
        
    
});