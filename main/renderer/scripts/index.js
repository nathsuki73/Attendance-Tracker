let buttonCount = 0;

document.getElementById("button-add").addEventListener("click", function () {
  document.getElementById("nameModal").style.display = "flex";
});

document.getElementById("close-button").addEventListener("click", function () {
  document.getElementById("nameModal").style.display = "none";
});

document.getElementById("createButton").addEventListener("click", function () {
  const buttonName = document.getElementById("name").value.trim();
  if (buttonName) {
    buttonCount++;
    const newButton = document.createElement("button");
    newButton.className = "custom-btn btn-4";
    newButton.id = "button-" + buttonCount;
    newButton.textContent = buttonName; // Set the button name

    const viewBox = document.querySelector(".viewBox");
    viewBox.insertBefore(newButton, document.getElementById("button-add"));

    // Hide modal and clear input
    document.getElementById("nameModal").style.display = "none";
    document.getElementById("name").value = "";
  } else {
    alert("Please enter a button name.");
  }
});

// Close modal when clicking outside of it
document.addEventListener("click", function (event) {
  const modal = document.getElementById("nameModal");
  const modalContent = document.querySelector(".modal-content");

  if (
    modal.style.display === "flex" &&
    !modalContent.contains(event.target) &&
    !event.target.matches("#button-add")
  ) {
    modal.style.display = "none";
  }
});
