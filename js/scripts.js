document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.form')) {
      alert("BREAKING NEWS!! Israel says it's raiding Hezbollah strongholds in Lebanon, group fires at Israel --- France says it is sending helicopter carrier to eastern Mediterranean");
    }
  });


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

