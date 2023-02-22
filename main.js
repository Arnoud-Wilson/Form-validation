console.log("hallo")

const inputField = document.getElementById("username");
inputField.addEventListener("keyup", checkInputField);

const passwordField = document.getElementById("password");
passwordField.addEventListener("keyup", checkPasswordField);

function checkInputField(e) {
    const inputFieldWarning = document.getElementById("warning-username");
    let userInput = e.target.value;
    if (userInput.includes("@")) {
        inputFieldWarning.textContent = "Gebruikersnaam mag geen @ bevatten";
    }
    else inputFieldWarning.textContent = "";
};

checkInputField();


function checkPasswordField(e) {
    const inputWarningPassword = document.getElementById("warning-password");
    let passwordInput = e.target.value.length;
    console.log(passwordInput);
    if (passwordInput === 0 ){
        inputWarningPassword.textContent = "";
    }
    else if (passwordInput <6 ) {
        inputWarningPassword.textContent = "minimale wachtwoord lengte is zes... ";
    }
    else inputWarningPassword.textContent = "";
};

checkPasswordField();
