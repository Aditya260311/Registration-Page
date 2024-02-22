const form = document.getElementById("registration-form");

form.addEventListener("submit", (event) => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Basic validation
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all required fields.");
    event.preventDefault();
    return;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Password strength check (optional)
  // ...

  // Handle form submission (e.g., send data to server)
  // ...

  event.preventDefault(); // Prevent default form submission

  // Show success message or redirect to another page
  alert("Registration successful!");
});
