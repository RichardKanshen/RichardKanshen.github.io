window.addEventListener("scroll", function() {
if (window.pageYOffset > 90) {
document.querySelector("h1").classList.add("scroll");
}
else {
document.querySelector("h1").classList.remove("scroll");
}
});