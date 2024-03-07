let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scroll down
    document.querySelector('.navbar').classList.add('hidden');
  } else {
    // Scroll up
    document.querySelector('.navbar').classList.remove('hidden');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
