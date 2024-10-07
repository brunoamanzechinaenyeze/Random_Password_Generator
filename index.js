
alert("If you are offline You won't see some ICONS");

let passwordLength = 20;
allChars = "";

const passwordBox = document.getElementById("Password");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialSymbols = "!£$%^&*()_+}~@:?><|¬`";
const numbers = "0123456789";


function passwordGenerator(){
let password = "";

allChars += lowerCase;
allChars += upperCase;
allChars += specialSymbols;
allChars += numbers;

for(i = 0; i < passwordLength; i++){
    const randomIndex = Math.floor(Math.random() * 82);
    password += allChars[randomIndex];
}
passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy")
    alert("Password copied");
}