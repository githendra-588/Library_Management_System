function checkLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error");

  
  const storedEmail = localStorage.getItem("userEmail");
  const storedPassword = localStorage.getItem("userPassword");

  if (username === storedEmail && password === storedPassword) {
    errorMsg.style.color = "lightgreen";
    errorMsg.textContent = "Login successful!";

    setTimeout(() => {
      window.location.href = "../Content/index.html";
    }, 1000);
  } else {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Wrong email or password!";
  }
}
