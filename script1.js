// Tab Functionality
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");

    // Remove active class from all tabs and contents
    tabs.forEach((t) => t.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to current tab and content
    tab.classList.add("active");
    document.getElementById(tabId).classList.add("active");
  });
});

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you would typically send this data to a server
  // For demonstration, we'll just show an alert
  alert(
    `Thank you, ${name}! Your message has been sent. We'll get back to you at ${email} soon.`
  );

  // Reset form
  contactForm.reset();
});

// Theme Switch Functionality - without localStorage
const toggleSwitch = document.querySelector("#checkbox");

// Function to switch theme
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
}

// Event listener for theme switch
toggleSwitch.addEventListener("change", switchTheme);
