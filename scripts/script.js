$(".futuroProgramador").draggable({
    filter: blur("4px"),
    opacity: 0.8,
    snap: true
});
$(".quotation").draggable({
    opacity: 0.8,
    snap: true
});
$(".certificacoesAcademicas").draggable({
    opacity: 0.8,
    snap: true
});


$(document).ready(function(e) {

    $('.quotation').mouseenter(function(){ 
        $(this).find('p').animate({opacity:0.5}, 50);
        $(this).find('p').animate({opacity:1}, 100);
        $(this).find('p').text("Aprenda continuamente - há sempre mais uma coisa para aprender!");
    
    }).mouseleave(function(){
        $(this).find('p').animate({opacity:0.5}, 100);
        $(this).find('p').animate({opacity:1}, 100);
        $(this).find('p').text("LEARN CONTINUALLY - THERE'S ALWAYS ONE MORE THING TO LEARN!"); }); });
    


jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
});