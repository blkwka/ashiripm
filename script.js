function toggleMobileMenu(menu) {
  menu.classList.toggle('open');

  // Get the <main> element
  const mainContent = document.getElementById('main-content');

  // Check if the mobile menu is open
  if (menu.classList.contains('open')) {
    // Add a class to <main> when the mobile menu is open
    mainContent.classList.add('menu-opened');
  } else {
    // Remove the class when the mobile menu is closed
    mainContent.classList.remove('menu-opened');
  }
}


let dropdownVisible = false;

function toggleDropdown() {
  const dropdown = document.getElementById("languageDropdown");
  dropdownVisible = !dropdownVisible;
  dropdown.style.display = dropdownVisible ? "block" : "none";
}

// --------------------


document.addEventListener('DOMContentLoaded', function() {
  let currentImageIndex = 0;
  const images = document.querySelectorAll('.slideshow img');

  function showImage(index) {
    // Hide all images
    images.forEach(img => img.classList.remove('active'));

    // Show the selected image
    images[index].classList.add('active');
  }

  function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
  }

  // Set an interval to transition to the next image every 5 seconds
  setInterval(nextImage, 5000);

  // Initial display
  showImage(currentImageIndex);
});

// --------------------------------

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

// ---------------------------------------------
document.addEventListener('DOMContentLoaded', function() {
  const creditsContainer = document.getElementById('credits-container');
  const credits = document.querySelectorAll('.credit');

  let delay = 0;

  credits.forEach((credit, index) => {
    setTimeout(() => {
      credit.style.opacity = '1';
      credit.style.transform = 'translateY(-' + (index * 50) + 'px)';
    }, delay);

    delay += 500; // Adjust the delay as needed
  });

  // Adjust the duration based on the number of members and desired speed
  setTimeout(() => {
    creditsContainer.style.transform = 'translateY(-100vh)';
  }, delay + 1000);
});

// -----------------------------------------------------
