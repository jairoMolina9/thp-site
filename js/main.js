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
});

// Snippet for navbar active using data-anchors
$('.nav__item').click(function() {
    $("#navbar").find("a.active_custom").removeClass('active_custom');
    $(this).addClass('active_custom');
});