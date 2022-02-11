$(document).ready(function () {

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
    // Activar Carousel
  $("#carouselExampleControls").carousel();

  $('.carousel').carousel({
    interval: 8000
  })

  // habilitar controles de carousel
  $(".left").click(function () {
    $("#carouselExampleControls").carousel("prev");
  });
});