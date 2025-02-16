document.addEventListener('DOMContentLoaded', function() {
  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = new Date(Date.parse('January 1, 2026 00:00:00'));
  initializeClock('clockdiv', deadline);
});

// TIME FOR CHATING AREA
const dateElement = document.querySelector('.date');
const timeElement = document.querySelector('.time-location');

const date = new Date();
const month = date.toLocaleString('en-US', { month: 'short' });
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;

dateElement.innerHTML = `<span>${day}</span> ${month}`;
timeElement.innerHTML = `<p> <span class="ti-time mr-2"></span> ${time} </p><p> <span class="ti-location-pin mr-2"></span> Lagos, Nigeria </p>`;