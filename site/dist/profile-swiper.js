(() => {
  const swiper = document.querySelector('.profile-swiper');
  if (!swiper) return;

  const slides = [...swiper.querySelectorAll('.portrait-card')];
  const dots = [...swiper.querySelectorAll('.swiper-dots button')];
  const count = swiper.querySelector('.swiper-count span');
  const previousButton = swiper.querySelector('.swiper-prev');
  const nextButton = swiper.querySelector('.swiper-next');
  let activeIndex = 0;
  let pointerStart = null;

  const relativeIndex = (index) => (index - activeIndex + slides.length) % slides.length;

  function render(index, direction = 1) {
    activeIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const offset = relativeIndex(slideIndex);
      slide.classList.remove('is-active', 'is-next', 'is-after', 'is-leaving');
      slide.setAttribute('aria-hidden', offset === 0 ? 'false' : 'true');
      if (offset === 0) slide.classList.add('is-active');
      if (offset === 1) slide.classList.add('is-next');
      if (offset === 2) slide.classList.add('is-after');
      if (offset === slides.length - 1) slide.classList.add('is-leaving');
      slide.style.setProperty('--swipe-direction', direction);
    });

    dots.forEach((dot, dotIndex) => {
      const current = dotIndex === activeIndex;
      dot.classList.toggle('is-current', current);
      current ? dot.setAttribute('aria-current', 'true') : dot.removeAttribute('aria-current');
    });

    count.textContent = String(activeIndex + 1).padStart(2, '0');
  }

  previousButton.addEventListener('click', () => {
    render(activeIndex - 1, -1);
  });

  nextButton.addEventListener('click', () => {
    render(activeIndex + 1, 1);
  });

  dots.forEach((dot) => dot.addEventListener('click', () => {
    const target = Number(dot.dataset.index);
    render(target, target >= activeIndex ? 1 : -1);
  }));

  swiper.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); previousButton.click(); }
    if (event.key === 'ArrowRight') { event.preventDefault(); nextButton.click(); }
  });

  swiper.addEventListener('pointerdown', (event) => {
    pointerStart = event.clientX;
  });

  swiper.addEventListener('pointerup', (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    if (Math.abs(distance) > 35) {
      distance > 0 ? previousButton.click() : nextButton.click();
    }
    pointerStart = null;
  });

  swiper.addEventListener('pointercancel', () => { pointerStart = null; });

  render(0);
})();
