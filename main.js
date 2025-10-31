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

  const validName = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/

  if (firstNameFormInput.value.trim() === "" || !validName.test(firstNameFormInput.value.trim())) {
    firstNameFormInputInvalidFeedback.classList.remove("d-none")
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

  const validSurname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/

  if (surnameFormInput.value.trim() === "" || !validSurname.test(surnameFormInput.value.trim())) {
    surnameFormInputInvalidFeedback.classList.remove("d-none")
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

  if (ageFormInput.value.trim() === "" || !Number(ageFormInput.value.trim()) || Number(ageFormInput.value.trim()) > 150 || Number(ageFormInput.value.trim() < 0)) {
    ageFormInputInvalidFeedback.classList.remove("d-none")
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

  const validAddress = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s.,'°\-\/]{5,100}$/

  if (addressFormInput.value.trim() === "" || !validAddress.test(addressFormInput.value.trim())) {
    addressFormInputInvalidFeedback.classList.remove("d-none")
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

  const validItalianZipCode = /^[0-9]{5}$/

  if (capFormInput.value.trim() === "" || !validItalianZipCode.test(capFormInput.value.trim())) {
    capFormInputInvalidFeedback.classList.remove("d-none")
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

  const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  if (emailFormInput.value.trim() === "" || !validEmail.test(emailFormInput.value.trim())) {
    emailFormInputInvalidFeedback.classList.remove("d-none")
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

const validPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

const validatePassword = () => {

  if (passwordFormInput.value.trim() === "" || !validPassword.test(passwordFormInput.value.trim())) {
    passwordFormInputInvalidFeedback.classList.remove("d-none")
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

submitFormButton.addEventListener("submit", (e) => {
  e.preventDefault()

  returnNewUserObjFromInputValues()

  addUser(newUserObj)
    .then(res => console.log(res))
})


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