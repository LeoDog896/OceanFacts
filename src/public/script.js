$(document).ready(function() {
  $(".infoToggle").click(function() {
    let toggledText = $(this).text() === "Read more" ? "Read less" : "Read more";
    $(this).text(toggledText);
    $(".infoText").toggleClass("d-none");
  });
})