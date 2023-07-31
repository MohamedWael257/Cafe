var header = document.getElementsByTagName("header");
window.onscroll = function () { scrollfunction() };
function scrollfunction() {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        header[0].setAttribute("class", "header-scroll");
    }
    else {
        header[0].removeAttribute("class")
    }
}