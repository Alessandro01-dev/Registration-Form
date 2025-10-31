const submitFormButton = document.getElementById("submit-button");
const form = document.querySelector("form");

const firstNameFormInput = document.getElementById("first-name");
const surnameFormInput = document.getElementById("surname");
const ageFormInput = document.getElementById("age");
const addressFormInput = document.getElementById("address");
const capFormInput = document.getElementById("cap");
const emailFormInput = document.getElementById("email");
const passwordFormInput = document.getElementById("password");

const isMarriedFormCheckboxInput = document.getElementById("is-married");
const isActiveFormCheckboxInput = document.getElementById("is-active");

const firstNameFormInputInvalidFeedback = document.getElementById("first-name-invalid-feedback");
const surnameFormInputInvalidFeedback = document.getElementById("surname-invalid-feedback");
const ageFormInputInvalidFeedback = document.getElementById("age-invalid-feedback");
const addressFormInputInvalidFeedback = document.getElementById("address-invalid-feedback");
const capFormInputInvalidFeedback = document.getElementById("cap-invalid-feedback");
const emailFormInputInvalidFeedback = document.getElementById("email-invalid-feedback");
const passwordFormInputInvalidFeedback = document.getElementById("password-invalid-feedback");

let newUserObj = {};

const returnNewUserObjFromInputValues = () => {

  return newUserObj = {
    firstName: firstNameFormInput.value,
    surname: surnameFormInput.value,
    age: ageFormInput.value,
    address: addressFormInput.value,
    cap: capFormInput.value,
    email: emailFormInput.value,
    password: passwordFormInput.value,
    isMarried: isMarriedFormCheckboxInput.checked,
    isActive: isActiveFormCheckboxInput.checked

  }

}

const validateName = () => {

  const nameInputValue = firstNameFormInput.value.trim()
  const validName = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/

  if (nameInputValue === "") {
    firstNameFormInputInvalidFeedback.classList.remove("d-none")
    firstNameFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    firstNameFormInput.classList.add("is-invalid")
    return false
  } else if (!validName.test(nameInputValue)) {
    firstNameFormInputInvalidFeedback.classList.remove("d-none")
    firstNameFormInputInvalidFeedback.innerText = `${firstNameFormInput.value} is not a valid name.`
    firstNameFormInput.classList.add("is-invalid")
    return false
  } else {
    firstNameFormInputInvalidFeedback.classList.add("d-none")
    firstNameFormInput.classList.remove("is-invalid")
    firstNameFormInput.classList.add("is-valid")
    return true
  }

}

firstNameFormInput.addEventListener("input", validateName)

const validateSurname = () => {

  const surnameInputValue = surnameFormInput.value.trim()
  const validSurname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/

  if (surnameInputValue === "") {
    surnameFormInputInvalidFeedback.classList.remove("d-none")
    surnameFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    surnameFormInput.classList.add("is-invalid")
    return false
  } else if (!validSurname.test(surnameInputValue)) {
    surnameFormInputInvalidFeedback.classList.remove("d-none")
    surnameFormInputInvalidFeedback.innerText = `${surnameFormInput.value} is not a valid surname.`
    surnameFormInput.classList.add("is-invalid")
    return false
  } else {
    surnameFormInputInvalidFeedback.classList.add("d-none")
    surnameFormInput.classList.remove("is-invalid")
    surnameFormInput.classList.add("is-valid")
    return true
  }

}

surnameFormInput.addEventListener("input", validateSurname)

const validateAge = () => {

  const ageInputValue = ageFormInput.value.trim()

  if (ageInputValue === "") {
    ageFormInputInvalidFeedback.classList.remove("d-none")
    ageFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    ageFormInput.classList.add("is-invalid")
    return false
  } else if (isNaN(ageInputValue) || Number(ageInputValue) > 150 || Number(ageInputValue) < 0) {
    ageFormInputInvalidFeedback.classList.remove("d-none")
    ageFormInputInvalidFeedback.innerText = `${ageFormInput.value} is not a valid age.`
    ageFormInput.classList.add("is-invalid")
    return false
  } else {
    ageFormInputInvalidFeedback.classList.add("d-none")
    ageFormInput.classList.remove("is-invalid")
    ageFormInput.classList.add("is-valid")
    return true
  }

}

ageFormInput.addEventListener("input", validateAge)

const validateAddress = () => {

  const addressInputValue = addressFormInput.value.trim()
  const validAddress = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,'°\-\/]{5,100}$/

  if (addressInputValue === "") {
    addressFormInputInvalidFeedback.classList.remove("d-none")
    addressFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    addressFormInput.classList.add("is-invalid")
    return false
  } else if (!validAddress.test(addressInputValue)) {
    addressFormInputInvalidFeedback.classList.remove("d-none")
    addressFormInputInvalidFeedback.innerText = `${addressFormInput.value} is not a valid address.`
    addressFormInput.classList.add("is-invalid")
    return false
  } else {
    addressFormInputInvalidFeedback.classList.add("d-none")
    addressFormInput.classList.remove("is-invalid")
    addressFormInput.classList.add("is-valid")
    return true
  }

}

addressFormInput.addEventListener("input", validateAddress)

const validateCap = () => {

  const capInputValue = capFormInput.value.trim()
  const validItalianZipCode = /^[0-9]{5}$/

  if (capInputValue === "") {
    capFormInputInvalidFeedback.classList.remove("d-none")
    capFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    capFormInput.classList.add("is-invalid")
    return false
  } else if (!validItalianZipCode.test(capInputValue)) {
    capFormInputInvalidFeedback.classList.remove("d-none")
    capFormInputInvalidFeedback.innerText = `${capFormInput.value} is not a valid cap.`
    capFormInput.classList.add("is-invalid")
    return false
  } else {
    capFormInputInvalidFeedback.classList.add("d-none")
    capFormInput.classList.remove("is-invalid")
    capFormInput.classList.add("is-valid")
    return true
  }

}

capFormInput.addEventListener("input", validateCap)

const validateEmail = () => {

  const emailInputValue = emailFormInput.value.trim()
  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (emailInputValue === "") {
    emailFormInputInvalidFeedback.classList.remove("d-none")
    emailFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    emailFormInput.classList.add("is-invalid")
    return false
  } else if (!validEmail.test(emailInputValue)) {
    emailFormInputInvalidFeedback.classList.remove("d-none")
    emailFormInputInvalidFeedback.innerText = `${emailFormInput.value} is not a valid email.`
    emailFormInput.classList.add("is-invalid")
    return false
  } else {
    emailFormInputInvalidFeedback.classList.add("d-none")
    emailFormInput.classList.remove("is-invalid")
    emailFormInput.classList.add("is-valid")
    return true
  }

}

emailFormInput.addEventListener("input", validateEmail)

const validatePassword = () => {

  const passwordInputValue = passwordFormInput.value.trim()
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

  if (passwordInputValue === "") {
    passwordFormInputInvalidFeedback.classList.remove("d-none")
    passwordFormInputInvalidFeedback.innerText = "This field is mandatory and must contain a message."
    passwordFormInput.classList.add("is-invalid")
    return false
  } else if (!validPassword.test(passwordInputValue)) {
    passwordFormInputInvalidFeedback.classList.remove("d-none")
    passwordFormInputInvalidFeedback.innerText = "The password must have minimum eight characters, at least one letter, one number and one special character (@$!%*#?&)"
    passwordFormInput.classList.add("is-invalid")
    return false
  } else {
    passwordFormInputInvalidFeedback.classList.add("d-none")
    passwordFormInput.classList.remove("is-invalid")
    passwordFormInput.classList.add("is-valid")
    return true
  }

}

passwordFormInput.addEventListener("input", validatePassword)

const validateForm = () => {

  if (validateName() && validateSurname() && validateAge() && validateAddress() && validateCap() && validateEmail() && validatePassword()) {

    return true

  } else {

    return false

  }

}

const addUser = async (obj) => {
  try {
    const URLData = "https://dummyjson.com/users/add"
    const response = await fetch(URLData, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })

    return await response.json()

  } catch (e) {
    console.log(e)
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault()

  if (validateForm()) {

    returnNewUserObjFromInputValues()

    let newUsers = JSON.parse(localStorage.getItem("newUsers")) || [];
    newUsers.push(newUserObj);
    localStorage.setItem("newUsers", JSON.stringify(newUsers));

    await addUser(newUserObj)
      .then(res => console.log(res))

    form.reset()

  }

})