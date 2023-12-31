
$(window).on("load", function () {
    $("#spinLoading").hide();
});

$(document).ready(function() {
    $("#menuBar").on("click", function() {
        $(".sidenav-cont").addClass("open-sn");
    });

    $("#closeSnav").on("click", function() {
        $(".sidenav-cont").removeClass("open-sn");
    });

})