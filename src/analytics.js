import $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let isDestroyed = false;
  let display = $('#disp');
  const listener = () => {
    counter++;
    display.html(counter);
  };
  document.addEventListener('click', listener);

  return {
    destroy() {
      isDestroyed = true;
      document.removeEventListener('click', listener);
    },
    getClicks() {
      if (isDestroyed) return 'Analitics is derstroyed';
      return counter;
    },
  };
}

window.analytics = createAnalytics();
