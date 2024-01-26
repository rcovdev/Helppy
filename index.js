const lowerCaseInput = document.getElementById("lowerCaseInput");
const upperCaseInput = document.getElementById("upperCaseInput");
const numbersInput = document.getElementById("numbersInput");
const symbolsInput = document.getElementById("symbolsInput");
const generatePasswordButton = document.getElementById("generatePasswordButton");
const generatedPassword = document.getElementById("generatedPassword");

function generatePassword() {
    let selectedChars = "";
    let password = "";
    
    const passwordLenght = 23;

    const lowerCaseChars = "abcdefghijklmñopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    const numberChars = "1234567890";
    const symbolChars = "!#$%&/()=¿?[]{};:_-@|";

    lowerCaseInput.checked ? selectedChars += lowerCaseChars : "";
    upperCaseInput.checked ? selectedChars += upperCaseChars : "";
    numbersInput.checked ? selectedChars += numberChars : "";
    symbolsInput.checked ? selectedChars += symbolChars : "";

    if(selectedChars.length === 0) {
        generatedPassword.classList.add("displayError");
        generatedPassword.textContent = "PLEASE SELECT AT LEAST ONE SET OF CHARACTERS.";
        return
    };
    
    for(i = 0; i < passwordLenght; i++) {
        const randomIndex = Math.trunc(Math.random() * selectedChars.length);
        password += selectedChars[randomIndex];
    };

    generatedPassword.classList.remove("displayError");
    generatedPassword.classList.add("generatedPassword");
    generatedPassword.textContent = password;

    generatedPassword.addEventListener("click", () => {
        navigator.clipboard.writeText(password)
        .then(() => {
            generatedPassword.textContent = " COPIED TO CLIPBOARD!";
            setTimeout(() => {
                generatedPassword.textContent = password;
            }, 800);
        })
        .catch((error) => {
            console.error("Failed to copy password:", error)
        });
    });
};