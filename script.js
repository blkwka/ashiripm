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
