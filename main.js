function animateText(element, text, speed = 800, pause = 2000) {
  const words = text.split(' ');
  let i = 0;
  let forward = true;

  function loop() {
    if (forward) {
      // Show first i words joined with space
      element.textContent = words.slice(0, i + 1).join(' ');
      i++;
      if (i === words.length) {
        forward = false;
        setTimeout(loop, pause);
      } else {
        setTimeout(loop, speed);
      }
    } else {
      // Remove one word from the end
      i--;
      element.textContent = words.slice(0, i).join(' ');
      if (i === 0) {
        forward = true;
        setTimeout(loop, pause);
      } else {
        setTimeout(loop, speed);
      }
    }
  }

  loop();
}

window.onload = () => {
  const h1 = document.querySelector('.text h1');
  const h2 = document.querySelector('.hello h2');

  animateText(h1, "Kamran Kaiser and Kaizu Kaiser", 800, 2000);

  setTimeout(() => {
    animateText(h2, "K Kh K Kh", 800, 2000);
  }, 8000);
};