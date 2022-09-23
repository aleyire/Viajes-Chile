
// Scroll
$(document).ready(function () {
  $("a").on("click", function () {
    var desplazamiento = this.hash
    $("html, body").animate(
      {
        scrollTop: $(desplazamiento).offset().top - 45,
      },
      1000
    )
  })
})

// Tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
