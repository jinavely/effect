;(function () {
  'use strict'
  const progressbar = document.querySelector('.progress-bar');
  const content = document.querySelector('.content');
  let scrollY = 0;
  let timerId;

  const _throttle = (callback, time) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = undefined;
    }, time)
  }

  const onScroll = () => {
    const height = content.scrollHeight - content.clientHeight;
    scrollY = content.scrollTop; 

    progressbar.style.width = `${scrollY / height * 100}%`
  }

  content.addEventListener('scroll', () => _throttle(onScroll, 20));
})();
