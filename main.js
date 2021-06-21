var all_pages = document.querySelectorAll(".page");
var this_page, last_page

$(document).mousemove(function(e) {
    $('.cursor').offset({
        left: e.pageX,
        top: e.pageY
    });
});

$(document).ready(function() {

    window.setTimeout(BlowUpIsland(), 3000);

    $("#all_nuages a").on("click", function(event) {
        $(all_pages).removeClass("slideOut");

        ShrinkIsland()
        this_page = $(this).attr("href");
        if (this_page === "#home") { goHome() }
        var thepage = document.querySelector(this_page);


        if (thepage.classList.contains("slideIn") === true) { goHome() }

        last_page = document.querySelector(".slideIn")
        $(all_pages).removeClass("slideIn");

        $(last_page).addClass("slideOut");

        $(this_page).addClass("slideIn");


    });





});



function BlowUpIsland() {
    console.log("blowup")
    $("#island").removeClass("shrink")
    $("#boat").removeClass("shrink")

}

function ShrinkIsland() {
    console.log("shrink")
    $("#island").addClass("shrink")
    $("#boat").addClass("shrink")

}

function goHome() {
    BlowUpIsland()
    $(all_pages).removeClass("slideIn");
    $(this_page).addClass("slideOut");

    //$(all_pages).addClass('visible');


}