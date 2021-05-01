(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    var handleHeaderOnScroll = function () {
      if ($(window).scrollTop() > 60) {
        $("body").addClass("page-on-scroll");
      } else {
        $("body").removeClass("page-on-scroll");
      }
    };

    $(window).on("load", function () {
      $(".preloader").fadeOut();
    });
    // Sticky Navbar
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $("#header-area").addClass("is-sticky");
      } else {
        $("#header-area").removeClass("is-sticky");
      }
    });
    // if ($(window).width() < 960) {
    //   alert("Less than 960");
    // } else {
    //   alert("More than 960");
    // }

    // Paralax Skroll
    // if ($(window).width() > 767) {
    //     var s = skrollr.init();
    // }
    //WOW.JS
    new WOW().init();
    // Mobile Navbar
    $(".menu-toggle").click(function () {
      $(".mainmenu").toggleClass("active") &&
        $(".menu-toggle").toggleClass("close-sing");
    });
    $("li").click(function () {
      $(".mainmenu").removeClass("active") &&
        $(".menu-toggle").toggleClass("close-sing");
    });
    // $(window).scroll(function() {
    //   $(".active").collapse("hide");
    // });

    // $(".works-list").masonry();

    $("input").on("focusin", function () {
      $(this).parent().find("label").addClass("labeltop");
    });

    $("input").on("focusout", function () {
      if (!this.value) {
        $(this).parent().find("label").removeClass("labeltop");
      }
    });
    $("textarea").on("focusin", function () {
      $(this).parent().find("label").addClass("labeltop");
    });

    $("textarea").on("focusout", function () {
      if (!this.value) {
        $(this).parent().find("label").removeClass("labeltop");
      }
    });

    //Cookie
    // if (jQuery.cookie("foyzullah_portfolio") === "yes") {
    //     console.log(jQuery.cookie("foyzullah_portfolio"));
    // } else {
    //     console.log(jQuery.cookie("foyzullah_portfolio"));
    // }
    // var nowDate = new Date();
    // nowDate.setTime(nowDate.getTime() + 5000);
    // jQuery.cookie("foyzullah_portfolio", "yes", { expires: nowDate });
  });
})(jQuery);
