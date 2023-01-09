window.addEventListener('scroll', function() {
  if (window.scrollY >= 90) {
    document.querySelector('#website-title span').classList.add('scroll');
  }
  if (window.scrollY < 90) {
    document.querySelector('#website-title span').classList.remove('scroll');
  }
});
