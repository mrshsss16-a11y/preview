document.addEventListener('astro:page-load', () => {
  const isTouch = window.matchMedia("(any-pointer: coarse)").matches;
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(() => {
          entry.target.classList.add('is-revealed');
        });
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -20px 0px" });

  document.querySelectorAll('.reveal:not(.is-revealed)').forEach(el => revealObserver.observe(el));
});
