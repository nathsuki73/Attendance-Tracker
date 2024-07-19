document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Implement log in logic here
      if (email && password) {
        // Log in successful here
        window.localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
      } else {
        alert("Please enter both username and password.");
      }
    });

  document.getElementById("continue").addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
