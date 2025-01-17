const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15;

let passwordEl1 = document.getElementById("password-el-1");
let passwordEl2 = document.getElementById("password-el-2");

function setPasswordLength() {
    const lengthInput = document.getElementById("password-length-input").value;
    
    const length = parseInt(lengthInput, 10);

    if(!isNaN(length) && length >=5 && length <= 15) {
        passwordLength = length;
        console.log(`Password length set to: ${passwordLength}`);
    } else {
        alert("Please enter a valid password length between 5 and 15.");
    }
}

function generatePasswords() {
    passwordEl1.textContent = randomPassword();
    passwordEl2.textContent = randomPassword();
}

function randomPassword() {
    let randomPassword = "";

    let randomIndex;

    for (let i = 0; i < passwordLength; i++) {
        randomIndex = Math.floor(Math.random() * characters.length);

        randomPassword += characters[randomIndex];
        
    }

    return randomPassword;
}

function copyToClipboard(passwordId) {
    const passwordEl = document.getElementById(passwordId);

    if(passwordEl && passwordEl.textContent) {
        navigator.clipboard.writeText(passwordEl.textContent).then(() => {
            alert('Copied: ${passwordEl.textContent}');
        })
        .catch(err => {
            console.error("Failed to copy password:", err);
          });
    } else {
        alert("No password to copy");
    }
}

passwordEl1.addEventListener("click", () => copyToClipboard("password-el-1"));
passwordEl2.addEventListener("click", () => copyToClipboard("password-el-2"));