$(document).ready(function () {
  let imagenes = [];

  $(".galeria__img").each(function () {
    imagenes.push($(this).attr("src"));
  });

  let indiceImg = 0;

  $(".galeria__img").click(function () {
    indiceImg = $(this).index(".galeria__img");
    console.log(imagenes[indiceImg]);
    $("#modal__img").attr("src", imagenes[indiceImg]);
    $(".modal").css("display", "flex").hide().fadeIn();
  });

  $("#modal__btn-cerrar").click(function () {
    $(".modal").fadeOut();
  });

  $(".modal").click(function (e) {
    if ($(e.target).is(this)) {
      $(this).fadeOut();
    }
  });

  $("#modal__btn-anterior").click(function (e) {
    e.stopPropagation();
    indiceImg = (indiceImg - 1 + imagenes.length) % imagenes.length;
    $("#modal__img").fadeOut(function () {
      $(this).attr("src", imagenes[indiceImg]).fadeIn();
    });
  });

  $("#modal__btn-siguiente").click(function (e) {
    e.stopPropagation();
    indiceImg = (indiceImg+1 + imagenes.length) % imagenes.length;
    $("#modal__img").fadeOut(function () {
      $(this).attr("src", imagenes[indiceImg]).fadeIn();
    });
  });

  $("#modal__img").click(function () {
    e.stopPropagation();
  });
});
