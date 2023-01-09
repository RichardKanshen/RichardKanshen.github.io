window.addEventListener('scroll', function() {
  if (window.scrollY >= 90) {
    document.querySelector('#website-title').classList.add('scroll');
  }
  if (window.scrollY < 90) {
    document.querySelector('#website-title').classList.remove('scroll');
  }
});
