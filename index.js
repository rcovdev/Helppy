const lowerCaseInput = document.getElementById("lowerCaseInput");
const upperCaseInput = document.getElementById("upperCaseInput");
const numbersInput = document.getElementById("numbersInput");
const symbolsInput = document.getElementById("symbolsInput");
const lengthInput = document.getElementById("lengthInput");
const response = document.getElementById("generatedPassword");


const generatePassword = () => {
    const passwordLength = Number(lengthInput.value);
    const lowerCaseChars = "abcedfghijklmnñopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+{}:'<>?/.,;[]=-";
    
    let selectedChars = "";
    let password = "";
    
    selectedChars += lowerCaseInput.checked ? lowerCaseChars : "";
    selectedChars += upperCaseInput.checked ? upperCaseChars : "";
    selectedChars += numbersInput.checked ? numberChars : "";
    selectedChars += symbolsInput.checked ? symbolChars : "";

    if(selectedChars.length === 0) {
        response.classList.add("error");
        response.textContent = "Please select at least one set of characters";
        return;
    };

    for(i = 0;i < passwordLength; i++) {
        const j = Math.trunc(Math.random() * selectedChars.length);
        password += selectedChars[j];
    }

    if(passwordLength >= 5 && passwordLength <= 20) {
        response.classList.remove("error");
        response.classList.add("allowed");
        response.textContent = password;
    } else {
        response.classList.add("error");
        response.textContent = "Password length must be a number between 5-20";
        return;
    }

    response.addEventListener("click", () => {
        navigator.clipboard.writeText(password)
        .then(() => {
            response.textContent = "COPIED TO CLIPBOARD!";
            setTimeout(() => {
                response.textContent = password;
            }, 800);
        })
        .catch((error) => {
            console.error("Failed yo copy password:", error);
        });
    });
};