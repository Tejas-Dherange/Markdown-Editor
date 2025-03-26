console.log("hello");

const inputData = document.getElementById("inputContent");
const outputContent = document.getElementById("outputContent");
const copyButton=document.getElementById("copy-button")
function takeInput() {
  const text = inputData.value;
  console.log(text);
  console.log(marked.parse(text));

  outputContent.innerHTML = marked.parse(text);
  copyButton.disabled = inputContent.trim() === '';
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
let isDarkMode = false;

function toggleTheme() {
    const themeElements = document.querySelectorAll('.light-theme, .dark-theme');
    const themeButton = document.getElementById('theme-button');
    const themeIcon = themeButton.querySelector('.theme-icon');

    themeElements.forEach(element => {
        element.classList.toggle('light-theme');
        element.classList.toggle('dark-theme');
    });

    isDarkMode = !isDarkMode;
    
    // Update button text and icon
    if (isDarkMode) {
        themeButton.innerHTML = '<span class="theme-icon">☀️</span> Light Mode';
    } else {
        themeButton.innerHTML = '<span class="theme-icon">🌙</span> Dark Mode';
    }
}
