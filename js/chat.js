const viewDetails = document.getElementById('view-details');
const departments = document.getElementById('departments');

viewDetails.addEventListener('click', function() {
  departments.style.display = 'block';
  departments.scrollTop = 0; // scroll to top
  departments.scrollIntoView({ behavior: 'smooth' }); // scroll down
});

document.addEventListener('click', function(event) {
  if (event.target !== viewDetails && event.target !== departments) {
    departments.style.display = 'none';
  }
});

// scroll down and up
let scrollPosition = 0;
setInterval(function() {
  if (departments.style.display === 'block') {
    scrollPosition += 10;
    departments.scrollTop = scrollPosition;
    if (scrollPosition >= departments.scrollHeight) {
      scrollPosition = 0;
    }
  }
}, 100);

// add scrolling event listener
departments.addEventListener('scroll', function() {
  if (departments.scrollTop + departments.clientHeight >= departments.scrollHeight) {
    // scrolled to bottom, scroll back to top
    departments.scrollTop = 0;
  }
});
