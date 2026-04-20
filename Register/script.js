function checkRegister(event) {
  event.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let error = document.getElementById("error");

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return;
  }

  error.textContent = "";

 
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userPassword", password);

  if (confirm("Registration successful! Click OK to go to login page.")) {
    window.location.href = "../Sign_in/Sigin.html";
  }
}
