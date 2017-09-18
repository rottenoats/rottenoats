/**
 * Created by kfaulhaber on 18/09/2017.
 */


var findActiveMenuReset = function ($target) {
    var $currentActive = $target.find(
      $(".active")
    );

    $currentActive.removeClass("active");
    $($currentActive.attr('href')).hide();
};

$(document).ready(function () {

    var $menu = $("#menu");

    $(".nav-link").on("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();

        $this = $(this);

        console.log("Menu click detected.");

        if($this.hasClass("active")){
            return;
        }

        findActiveMenuReset($menu);

        $this.addClass("active");
        $($this.attr("href")).show();
    });
});


