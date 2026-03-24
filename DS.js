const text = "Taste The Meal and Get Super Service";
const typingElement = document.getElementById("typing");

let index = 0;

function typeCharacter() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeCharacter, 100); // Speed: 100ms per character
  }
}

typeCharacter();



