
    var contadorCaracteres = 0;


var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadorCaracteres);
    areaTexto.keyup(deshabilitarBtn);
    botonEnviar.click(publicarTwit);

    $("#publicaciones").click(borrarTwit);
};

var publicarTwit = function (e) {
    e.preventDefault(); //prevenir que se actualice la pagina
    var $seccionPublicaciones = $("#publicaciones");

    var $tarjetaPublicacion = $("<div/>", {"class":"jumbotron col-xs-8 col-xs-offset-2"});
    var $twitBorrar = $("<button class='btn col-xs-1 col-xs-offset-11'><span class='glyphicon glyphicon-trash'></span></button>");
    var $twitNuevo = $("<p/>").text($(areaTexto).val());
    var $autorTwit = $("<h3/>").text($(areaAutor).val());

    $twitBorrar.click(borrarTwit);
    $tarjetaPublicacion.append($twitBorrar)
    $tarjetaPublicacion.append($autorTwit)
    $tarjetaPublicacion.append($twitNuevo)
    $seccionPublicaciones.prepend($tarjetaPublicacion);

    vaciarAreas();
};

var contadorCaracteres = function () {
    var cantidadCaracteres = $("#cantidadCaracteres");

    contadorCaracteres = 140 - ($(areaTexto).val().length);

    if (contadorCaracteres >= 21 && contadorCaracteres <= 30) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "orange");
    }
    if (contadorCaracteres >= 0 && contadorCaracteres <= 20) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "red");
    }
    if (contadorCaracteres < 0) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "silver");
    } else if (contadorCaracteres >= 31 && contadorCaracteres <= 140) {
        cantidadCaracteres.text(contadorCaracteres + "/140").css("color", "black");
    }
};

var borrarTwit = function () {
    $(this).parent().remove();
};

var vaciarAreas = function () {
    $(areaTexto).val("");
    $(areaAutor).val("");
};

var deshabilitarBtn = function () {
    var $botonEnviar = $("#botonEnviar");
    if ($(this).val().trim().length > 0 && $(this).val().trim().length <= 140) {
        $botonEnviar.removeAttr("disabled");
    } else {
        $botonEnviar.attr("disabled", true);
    }
};

$(document).ready(cargarPagina);
