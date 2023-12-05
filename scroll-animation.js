const texts = ["Hello , I am Ghada Abboud", "Welcome to My World"];
let textIndex = 0;
let charIndex = 0;
let isTyping = true;

function typeWriter() {
  const element = document.getElementById("typewriter");
  if (charIndex < texts[textIndex].length && isTyping) {
    element.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 50); // Typing speed (adjust as needed)
  } else if (!isTyping) {
    setTimeout(eraseText, 1000); // Pause before erasing text
  } else {
    isTyping = false;
    setTimeout(typeWriter, 1000); // Pause before typing next text
  }
}

function eraseText() {
  const element = document.getElementById("typewriter");
  if (charIndex > 0) {
    element.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, 30); // Erasing speed (adjust as needed)
  } else {
    textIndex = (textIndex + 1) % texts.length;
    isTyping = true;
    setTimeout(typeWriter, 500); // Pause before typing next text
  }
}

// Start the animation
typeWriter();


// Smooth scrolling for navigation links
document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the target element's ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Add animations to price list items when they come into view
const priceListItems = document.querySelectorAll('.animate');
const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function animateItems() {
    priceListItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('active');
        }
    });
}

// Initial animation on page load
animateItems();

// Animate items on scroll
window.addEventListener('scroll', animateItems);




