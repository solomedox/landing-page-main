const emailSpace = document.getElementById("email-space");
const emailError = document.getElementById("email-error");

function emailValidation() {
    if (!emailSpace.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Oops! That doesn't look like an email address";
        emailSpace.style.borderColor = "red";
        return false;
    }

    emailError = "";
    emailSpace.style.borderColor = "green";
    return true;
}