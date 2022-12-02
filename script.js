const inputName = document.getElementById("name");
const inputMail = document.getElementById("email");

const validateInput = (element) => element.value.trim().length > 0;

const handleInput = (element) => {
    const isValid = validateInput(element);
    element.classList.toggle("error", !isValid);
    return isValid;
}

['click', 'keyup'].forEach( event => 
    inputName.addEventListener(event, () => handleInput(inputName))
);

['click','keyup'].forEach( event => 
    inputMail.addEventListener(event, () => handleInput(inputMail))
);
