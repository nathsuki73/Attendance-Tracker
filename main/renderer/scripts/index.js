let buttonCount = 0;

document.getElementById("button-add").addEventListener("click", function () {
  document.getElementById("nameModal").style.display = "flex";
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("nameModal").style.display = "none";
});

document.getElementById("addButton").addEventListener("click", function () {
  const buttonName = document.getElementById("buttonName").value.trim();
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
    document.getElementById("buttonName").value = "";
  } else {
    alert("Please enter a button name.");
  }
});
