function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove(".form__message--success", ".form__message--error");
    messageElement.classList.add(`.form__message--${type}`);
}

    


 function setInputError(inputElement, message){
    inputElement.classList.add(".form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
 }

 function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector("form__input-error-message").textContent = "message";
 }

document.addEventListener("DOMContentLoaded", () => {
    const login = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        login.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        login.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    login.addEventListener("submit", e => {
        e.preventDefault();
        
        //perform your AJAX /Fetch login

        setFormMessage(login, "error", "Invalid username/password combination");
    });
        document.querySelectorAll(".form__input").forEach(inputElement => {
            inputElement.addEventListener("blur", e => {

                if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                    setInputError(inputElement, "Username must be atleast 10 characters in length");
                }

            });
            inputElement.addEventListener("input", e => {
                clearInputError(inputElement);
            });
        });
    });
