const linkToCopy = $(location).attr('origin') + $(".copyButton").attr("dest");
new QRCode(document.getElementById("qrcode"), linkToCopy);

$(document).ready(function() {
  $(".copyButton").click(function() {
    var temp = $("<input style='display: hidden;'>");
    $("body").append(temp);
    temp.val(linkToCopy).select();
    document.execCommand("copy");
    temp.remove();

    const toast = new bootstrap.Toast($(".toast"));
    toast.show();
  });
})