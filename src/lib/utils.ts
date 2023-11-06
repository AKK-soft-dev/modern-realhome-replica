// From ChatGPT
export function slowScrollTo(elementToScroll: HTMLElement, duration: number) {
  const elementPosition = elementToScroll.getBoundingClientRect().top;
  const startingY = window.scrollY;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsedTime = currentTime - startTime;
    if (elapsedTime < duration) {
      window.scrollTo(
        0,
        easeInOutQuad(elapsedTime, startingY, elementPosition, duration)
      );
      requestAnimationFrame(step);
    } else {
      window.scrollTo(0, startingY + elementPosition);
    }
  }

  function easeInOutQuad(t: number, b: number, c: number, d: number) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(step);
}
