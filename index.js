const useNumbersInput = document.getElementById("use-numbers");
const useUppercaseLettersInput = document.getElementById("use-uppercase-letters");
const useSpecialSymbolsInput = document.getElementById("use-special-symbols");
const passwordLengthInput = document.getElementById("password-length");
const passwordContainer = document.getElementById("password");
const generateBtn = document.getElementById("generate-btn");

const numbers = "1234567890";
const specialSymbols = "%$#@!_-+=)(^*{}";
const symbols = "qwertyuiopasdfghjklzxcvbnm";

const minPasswordLength = 6;
const maxPasswordLength = 120;

function generateRandomNum(max) {
    return Math.floor(Math.random() * max);
}

function getPasswordSymbols() {
    let passwordSymbols = symbols;
    if (useNumbersInput.checked) {
        passwordSymbols += numbers;
    }
    if (useUppercaseLettersInput.checked) {
        passwordSymbols += symbols.toUpperCase();
    }
    if (useSpecialSymbolsInput.checked) {
        passwordSymbols += specialSymbols;
    }
    return passwordSymbols;
}

function getPasswordLength() {
    let passwordLength = passwordLengthInput.value;
    if(!passwordLength || passwordLength < minPasswordLength) {
        passwordLength = minPasswordLength;
    } else if(passwordLength > maxPasswordLength) {
        passwordLength = maxPasswordLength;
    }
    return passwordLength;
}

function generatePassword() {
    let password = "";
    const passwordLength = getPasswordLength();
    const passwordSymbols = getPasswordSymbols();

    for (let i = 0; i < passwordLength; i++) {
        const randomSymbolIndex = generateRandomNum(passwordSymbols.length);
        password += passwordSymbols.charAt(randomSymbolIndex);
    }
    passwordContainer.textContent = password;
}

function copyToClipboard() {
    const currentPassword = this.textContent;
    if(currentPassword) {
        navigator.clipboard.writeText(currentPassword)
            .then(() => {
                    this.textContent = "Copied !!!";
                    setTimeout(() => this.textContent = currentPassword, 1000);
                }
            )
            .catch(() => alert("An error occurred"));
    }
}

generatePassword();
passwordContainer.addEventListener("click", copyToClipboard);
generateBtn.addEventListener("click", generatePassword);




