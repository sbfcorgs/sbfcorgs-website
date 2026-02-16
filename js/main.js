/* ================= COUNTER ANIMATION ================= */
const counters = document.querySelectorAll('.stat-number');

const startCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  let count = 0;

  const update = () => {
    const increment = target / 200;
    if (count < target) {
      count += increment;
      counter.innerText = Math.floor(count);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

window.addEventListener('scroll', () => {
  counters.forEach(counter => {
    const top = counter.getBoundingClientRect().top;
    if (top < window.innerHeight) {
      startCounter(counter);
    }
  });
});
