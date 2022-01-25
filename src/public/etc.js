$(document).ready(function() {
  $(".copyButton").click(function() {
    const linkToCopy = $(location).attr('origin') + $(this).attr("dest");
    var temp = $("<input style='display: hidden;'>");
    $("body").append(temp);
    temp.val(linkToCopy).select();
    document.execCommand("copy");
    temp.remove();

    const toast = new bootstrap.Toast($(".toast"))
    toast.show()
  });
})