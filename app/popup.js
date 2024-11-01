function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");

    setTimeout(function() {
        hidden();
    }, 3000);
}

function hidden() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
}