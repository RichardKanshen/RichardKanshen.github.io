window.addEventListener('scroll', function() {
  if (window.scrollY >= 90) {
    document.querySelector('h1').classList.add('scroll');
  }
  if (window.scrollY < 90) {
    document.querySelector('h1').classList.remove('scroll');
  }
});
