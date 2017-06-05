(function () {
    var contadorCaracteres = 0;
})();

var cargarPagina = function () {
    var areaTexto = $("#areaTexto");
    var areaAutor = $("#areaAutor");
    var botonEnviar = $("#botonEnviar");
    areaTexto.keyup(contadoraDeCaracteres);
    areaTexto.keyup(validarMensaje);
    botonEnviar.click(publicarTwit);

    $("#publicaciones article.card a").click(borrarTwit);
};

var publicarTwit = function () {

    var $seccionPublicaciones = $("#publicaciones");

    var $tarjetaPublicacion = $("<div/>", {"class":"jumbotron"});
    var $twitBorrar = $("<button class='borrar btn'><span class='glyphicon glyphicon-trash'></span></button>");
    var $twitNuevo = $("<p/>").text($(areaTexto).val());
    var $autorTwit = $("<h3/>").text($(areaAutor).val());

    $twitBorrar.click(borrarTwit);
    $tarjetaPublicacion.append($twitBorrar)
    $tarjetaPublicacion.append($autorTwit)
    $tarjetaPublicacion.append($twitNuevo)
    $seccionPublicaciones.prepend($tarjetaPublicacion);

};

var contadoraDeCaracteres = function () {
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

var validarMensaje = function () {
    var $botonEnviar = $("#botonEnviar");
    if ($(this).val().trim().length > 0 && $(this).val().trim().length <= 140) {
        $botonEnviar.removeAttr("disabled");
    } else {
        $botonEnviar.attr("disabled", true);
    }
};

$(document).ready(cargarPagina);
