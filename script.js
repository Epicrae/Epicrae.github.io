const header = document.getElementById('interactive-header');

header.addEventListener('click', function(event) {
  // Get mouse coordinates within the header
  const rect = header.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  // Create and position the heart
  createHeart(x, y);
});

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Get the header's global position to position the heart
  const rect = header.getBoundingClientRect();
  const top = rect.top + window.scrollY;
  const left = rect.left + window.scrollX;

  // Set position based on where the header was clicked
  heart.style.left = (left + x) + 'px';
  heart.style.top = (top + y) + 'px';

  // Append to body and remove after animation
  document.body.appendChild(heart);

  heart.addEventListener('animationend', function() {
    document.body.removeChild(heart);
  });
}