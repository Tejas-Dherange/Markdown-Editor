console.log("hello");

const inputData = document.getElementById("inputContent");
const outputContent = document.getElementById("outputContent");

function takeInput() {
  const text = inputData.value;
  console.log(text);
  console.log(marked.parse(text));

  outputContent.innerHTML = marked.parse(text);
}

// Reset button functionality
function resetText() {
  inputData.value = "";
  outputContent.innerHTML = "";
}

//Tabspace functionality

function insertTabSpaces(event) {
  if (event.key === "Tab") {
    event.preventDefault();

    let textarea = event.target;
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;

    let spaces = "  "; // Two spaces
    textarea.value =
      textarea.value.substring(0, start) +
      spaces +
      textarea.value.substring(end);

    // Move cursor after spaces
    textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
  }
}

//functionality to copying text
function copyText() {
  const text = outputContent.innerText;
  console.log(text);

  navigator.clipboard.writeText(text);
}

//change theme functionality

function changeTheme() {
  const current = document.getElementById("theme-button");
  // console.log(current.innerText);
  if (current.innerText === "Dark") {
    document.querySelectorAll(".light-theme").forEach((element) => {
      element.classList.remove("light-theme");
      element.classList.add("dark-theme");
      current.innerText = "Light";
    });
  } else {
    document.querySelectorAll(".dark-theme").forEach((element) => {
      element.classList.remove("dark-theme");
      element.classList.add("light-theme");
      current.innerText = "Dark";
    });
  }
}
