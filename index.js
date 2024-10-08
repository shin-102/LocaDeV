document.addEventListener("DOMContentLoaded", function() {
  const navigatorLinks = document.querySelectorAll("#navigator a");
  const sections = document.querySelectorAll("section");

  navigatorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute("href");
      sections.forEach(section => {
        section.classList.add("hidden");
      });
      document.querySelector(targetSectionId).classList.remove("hidden");
    });
  });
});

//ABOUT SECTION BELOW

document.addEventListener("DOMContentLoaded", function() {
  const navigatorLinks = document.querySelectorAll("#navigator a");
  const sections = document.querySelectorAll("section");
  const tabButtons = document.querySelectorAll(".tab-button");

  navigatorLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const targetSectionId = this.getAttribute("href");
      sections.forEach(section => {
        section.classList.add("hidden");
      });
      document.querySelector(targetSectionId).classList.remove("hidden");
    });
  });

  tabButtons.forEach(button => {
    button.addEventListener("click", function() {
      const targetTab = this.getAttribute("data-target");
      const paragraphs = document.querySelectorAll("#about p");
      paragraphs.forEach(paragraph => {
        paragraph.classList.add("hidden");
      });
      document.getElementById(targetTab).classList.remove("hidden");
    });
  });
});

// CARS SECTION BELOW

document.addEventListener("DOMContentLoaded", function() {
  // ... (existing code) ...

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const carImage = document.getElementById("carImage");
  const images = [
  "./img/LDV DACIA DUSTER.png",
  "./img/LDV DACIA LODGY.png",
  "./img/LDV DACIA LOGAN.png",
  "./img/LDV DACIA STEPWAY.png",
  "./img/LDV FIAT TIPO.png",
  "./img/LDV PGT 308GT.png",
  "./img/LDV RENAULT CLIO.png", 
  
  ]; // Add your image URLs

  let currentImageIndex = 0;

  function updateImage() {
    carImage.src = images[currentImageIndex];
  }

  prevBtn.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });
});

//CONTACT SECTION BELOW

const emailToggle = document.getElementById('emailToggle');
const phoneToggle = document.getElementById('phoneToggle');
const contactField = document.getElementById('contactField');

emailToggle.addEventListener('click', function() {
  emailToggle.classList.add('active');
  emailToggle.classList.remove('inactive');
  phoneToggle.classList.remove('active');
  phoneToggle.classList.add('inactive');
  contactField.placeholder = 'Enter your Email';
  contactField.type = 'email';
});

phoneToggle.addEventListener('click', function() {
  phoneToggle.classList.add('active');
  phoneToggle.classList.remove('inactive');
  emailToggle.classList.remove('active');
  emailToggle.classList.add('inactive');
  contactField.placeholder = 'Enter your Phone Number';
  contactField.type = 'tel';
});