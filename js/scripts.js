// JavaScript Document
$(document).ready(function(e) {

});

function menu(menu) {
    $("#" + menu).addClass("menuAtivo");

    /*$lis.removeClass('on');
     $(menu).addClass('on');
     $image = $("#" + menu).find('img');
     if ($image.attr('src').match(/inatv/g)) {
     $new_image = $image.attr('src').replace("inatv", "atv");
     $image.attr({src: $new_image});
     }*/
}

function SetBg(page) {

    switch (page) {
        case "index":
            $("#div_main_index").css('background-image', 'url("imagens/img_back_index.png")');
            $("#div_main_index").css('background-repeat', 'no-repeat');
            $("#div_main_index").css('background-position', '100% 0%');
            break;
        case "cultura":
            $("#div_main_cultura").css('background-image', 'url("imagens/img_cortina.png")');
            $("#div_main_cultura").css('background-repeat', 'no-repeat');
            $("#div_main_cultura").css('background-position', '100% 0%');
            break;
        case "viagem":
            $("#div_main_cultura").css('background-image', 'url("imagens/img_back_viagem.png")');
            $("#div_main_cultura").css('background-repeat', 'no-repeat');
            $("#div_main_cultura").css('background-position', '100% 0%');
            break;
        case "zoom":
            $("#div_main_zoom").css('background-image', 'url("imagens/img_familia.png")');
            $("#div_main_zoom").css('background-repeat', 'no-repeat');
            $("#div_main_zoom").css('background-position', '100% 2.2%');
            break;
        case "zoom_det":
            $("#div_main_zoom").css('background-image', 'url("imagens/img_familia.png")');
            $("#div_main_zoom").css('background-repeat', 'no-repeat');
            $("#div_main_zoom").css('background-position', '100% 1.56%');
            break;
        case "gastronomia":
            $("#div_main_gastronomia").css('background-image', 'url("imagens/img_back_gastro.png")');
            $("#div_main_gastronomia").css('background-repeat', 'no-repeat');
            $("#div_main_gastronomia").css('background-position', '100% 0%');
            break;

        case "saude":
            $("#div_main_saude").css('background-image', 'url("imagens/img_back_saude.png")');
            $("#div_main_saude").css('background-repeat', 'no-repeat');
            $("#div_main_saude").css('background-position', '100% 2%');
            //adicionar os outros cases prevendo as paginas que acionarao essa funcao e setando a imagem de fundo:

        default :
            $("#main_container").css('background-image', '');
    }

}
