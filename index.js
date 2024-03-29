// document.getElementById("submit_btn").addEventListener("click", function () {
//   console.log("Button clicked");
//   const inputField = document.getElementById("input_field");
//   const inputText = inputField.value;
//   console.log(inputText);
//   inputField.value = "";
//   const personOne =
// });
// const handleInput = () => {
//   const inputField = document.getElementById("input_field");
//   const inputText = inputField.value;
//   console.log(inputText);
//   inputField.value = "";
// };

// document.getElementById("submit_btn").addEventListener("keypress", function (event) {
//     // Check if the key pressed is "Enter" (key code 13)
//     if (event.keyCode === 13) {
//       handleInput();
//       // Prevent default behavior of the Enter key (e.g., form submission)
//       event.preventDefault();
//     }
//   });

// // Event listener for click event
// document.getElementById("submit_btn").addEventListener("click", function () {
//   handleInput();
// });

// const handleInput = () => {
//   const inputField = document.getElementById("input_field");
//   const inputText = inputField.value;

//   console.log(inputText);
//   const targetDiv = document.getElementById("first_person");
//   const p = `<p class='dynamic-content'>${inputText}</p>`;
//   targetDiv.innerHTML = p;
//   inputField.value = "";
// };

// // Event listener for keypress event
// document
//   .getElementById("input_field")
//   .addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//       handleInput();
//       event.preventDefault();
//     }
//   });

// document.getElementById("submit_btn").addEventListener("click", function () {
//   handleInput();
// });


const getInputText = () => {
  const inputField = document.getElementById("input_field");
  return inputField.value;
};

const addParagraphElement = (text) => {
  const targetDiv = document.getElementById("first_person");
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = text;
  paragraphElement.classList.add("dynamic-content");
  targetDiv.appendChild(paragraphElement);
};

const handleInput = () => {
  const inputText = getInputText();
  addParagraphElement(inputText);
  const inputField = document.getElementById("input_field");
  inputField.value = "";
};

document.getElementById("input_field").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    handleInput();
    event.preventDefault();
  }
});

document.getElementById("submit_btn").addEventListener("click", function () {
  handleInput();
});


