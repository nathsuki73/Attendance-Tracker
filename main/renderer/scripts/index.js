let buttonCount = 0;

document.getElementById("button-add").addEventListener("click", function () {
  buttonCount++;
  const newButton = document.createElement("button");
  newButton.className = "custom-btn btn-4";
  newButton.id = "button-" + buttonCount;
  newButton.innerHTML = '<img src="../resource/plus.svg" alt="plus" />';

  const viewBox = document.querySelector(".viewBox");
  viewBox.insertBefore(newButton, document.getElementById("button-add"));
});
