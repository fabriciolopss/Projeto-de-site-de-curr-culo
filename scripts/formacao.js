$(".formacaoAcademica").draggable({
    opacity: 0.8,
    snap: true
});


$(".container").droppable({
    drop: function(event, ui) {
        $( ".formacaoAcademica" ).draggable( "option", "revert", false );
    },
});

$('#imagemFormacao').parallax({imageSrc: "https://embrapii.org.br/wp-content/images/2018/11/dcc_ufmg_2000x1200.jpg"});