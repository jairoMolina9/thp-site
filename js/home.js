// Settings for fullPage js
var myFullpage = new fullpage('#fullpage', {
    scrollingSpeed: 1000,
    responsive: 900,
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['', 'About'],
    showActiveTooltip: true,
    slidesNavigation: true,
    responsiveHeight: 330,
    dragAndMove: true,
    bigSectionsDestination:top,
    verticalCentered: true,
    anchors:['first-section', 'second-section', 'footer'],

    onLeave: function(origin, destination, direction) {
        console.log(destination)
        if(destination.index == 1) {
            $("#navbar").find("a.active_custom").removeClass('active_custom');
            $("#about-link").addClass('active_custom');
        } else if(destination.index == 0){
            $("#navbar").find("a.active_custom").removeClass('active_custom');
            $("#home-link").addClass('active_custom');
        }
    }
});

//Snippet for navbar active using data-anchors
$('.nav__item').click(function() {
    $("#navbar").find("a.active_custom").removeClass('active_custom');
    $(this).addClass('active_custom');
});
$('#learn-more').click(function() {
    $("#navbar").find("a.active_custom").removeClass('active_custom');
    $("#about-link").addClass('active_custom');
});