'use strict'

$(function() {
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })

   $(document).on("scroll", onScroll);
 
})


function onScroll(event){

    var scrollPos = $(document).scrollTop();

    if (scrollPos > 10) {
      $('.navbar-fixed-top').addClass("navLine");
      $('#menu-center ul img').addClass("smallImg")
    } else {
      $('.navbar-fixed-top').removeClass("navLine");
      $('#menu-center ul img').removeClass("smallImg")
    }

    $('#menu-center a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });

}