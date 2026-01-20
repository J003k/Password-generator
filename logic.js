
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberchars = "1234567890";
const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const passwordBox = document.getElementById("passwordBox");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generateBtn");
const lengthSlider = document.getElementById("lengthSlider");
const upperCase = document.getElementById("upperCase");
const lowerCase = document.getElementById("lowerCase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

lengthSlider.addEventListener("input", function() {
    lengthVal.innerText = lengthSlider.value;
});
generateBtn.addEventListener("click", getRandomPassword);
function getRandomPassword() {
    let chars = "";
    if(upperCase.checked){
        chars += upperChars;
    }
    if(lowerCase.checked){
        chars += lowerChars;
    }
    if(numbers.checked){
        chars += numberchars;
    }
    if(symbols.checked){
        chars += symbolChars;
    }
    if(chars === ""){
        alert("Please select at least one character type!");
        return;
    }
    let password = "";
    for(let i = 0; i < lengthSlider.value; i++){
        let charIndex = Math.floor(Math.random()*chars.length);
        password += chars[charIndex];
    }
    passwordBox.value = password;
}

copyBtn.addEventListener("click", copyPassword);

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
    copyBtn.innerText = "Copied!";
    setTimeout(function() {
        copyBtn.innerText = "Copy";
    }, 2000);
}
