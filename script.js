const inputElementName = document.getElementById("name");
const inputElementMail = document.getElementById("email");

const subscribeButton = document.getElementById("main-button");


const validateInputName = () => inputElementName.value.trim().length > 0;
const validateInputMail = () => inputElementMail.value.trim().length > 0;

const handleInputName = () => {
    const inputNameIsValid = validateInputName();

    if (!inputNameIsValid) {
        return inputElementName.classList.add("error");
    } 
}

const handleInputMail = () => {
    const inputMailIsValid = validateInputMail();

    if (!inputMailIsValid) {
        return inputElementMail.classList.add("error");
    }
}

const removeClassErrorName = () => {
    const inputNameIsValid = validateInputName();

    if (inputNameIsValid){
        return inputElementName.classList.remove("error");
    }
}

const removeClassErrorMail = () => {
    const inputMailIsValid = validateInputMail();

    if (inputMailIsValid) {
        return inputElementMail.classList.remove("error")
    }
}



inputElementName.addEventListener("click", () => handleInputName());
inputElementName.addEventListener("change", () => removeClassErrorName());
inputElementMail.addEventListener("click", () => handleInputMail());
inputElementMail.addEventListener("change", () => removeClassErrorMail());


