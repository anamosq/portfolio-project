document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.form')) {
      alert("BREAKING NEWS!! Israel says it's raiding Hezbollah strongholds in Lebanon, group fires at Israel --- France says it is sending helicopter carrier to eastern Mediterranean");
    }
  });

  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    var hamburgerIcon = document.getElementById('hamburger-icon');
  var closeIcon = document.getElementById('close-icon');

    if (x.className === 'navtoggle') {
      x.className += ' responsive';
      hamburgerIcon.style.display = 'none'; // Hide the hamburger icon
    closeIcon.style.display = 'block'; // Show the close icon
      
    } else {
      x.className = 'navtoggle';
      hamburgerIcon.style.display = 'block'; // Show the hamburger icon
    closeIcon.style.display = 'none'; // Hide the close icon
    }
  }

const draggableSection = document.querySelector('.price-content');
let isDragging = false;
let startX, scrollLeft;

// Add a debounce to prevent unnecessary text selection
draggableSection.addEventListener('mousedown', (e) => {
  isDragging = true;
  draggableSection.classList.add('active');
  document.body.classList.add('dragging');
  startX = e.pageX - draggableSection.offsetLeft;
  scrollLeft = draggableSection.scrollLeft;
});

draggableSection.addEventListener('mouseleave', () => {
  if (isDragging) {
    isDragging = false;
    document.body.classList.remove('dragging');
  }
});

draggableSection.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    document.body.classList.remove('dragging');
  }
});

draggableSection.addEventListener('mousemove', (e) => {
  if (!isDragging) return; // Exit if not dragging
  e.preventDefault();
  const x = e.pageX - draggableSection.offsetLeft;
  const walk = (x - startX) * 1.5; // Adjust the drag speed multiplier
  draggableSection.scrollLeft = scrollLeft - walk;
});

// Prevent text/image selection while dragging
document.body.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.classList.remove('dragging');
});

