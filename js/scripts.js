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


  const $draggableSection = $('.price-content');
  let isDragging = false;
  let startX, scrollLeft;
  
  $draggableSection.on('mousedown', function (e) {
    isDragging = true;
    $draggableSection.addClass('active');
    $('body').addClass('dragging');
    startX = e.pageX - $draggableSection.offset().left;
    scrollLeft = $draggableSection.scrollLeft();
  });
  
  $(document).on('mousemove', function (e) {
    if (!isDragging) return; // Exit if not dragging
    e.preventDefault();
    const x = e.pageX - $draggableSection.offset().left;
    const walk = (x - startX) * 1.5; // Adjust the drag speed multiplier
    $draggableSection.scrollLeft(scrollLeft - walk);
  });
  
  $(document).on('mouseup', function () {
    if (isDragging) {
      isDragging = false;
      $draggableSection.removeClass('active');
      $('body').removeClass('dragging');
    }
  });
  
  // Optional: To handle mouse leaving the draggable area
  $draggableSection.on('mouseleave', function () {
    if (isDragging) {
      isDragging = false;
      $('body').removeClass('dragging');
    }
  });
