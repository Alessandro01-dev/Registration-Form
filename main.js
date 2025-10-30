const submitFormButton = document.getElementById("submit-button");
const inputFormElements = document.querySelectorAll("input");

let formValues = [];
let newUserObj = {};

const returnObjFromArray = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    return newUserObj = {
      firstName: arr[0],
      surname: arr[1],
      age: arr[2],
      address: arr[3],
      cap: arr[4],
      email: arr[5],
      password: arr[6],
    }
  }

}

submitFormButton.addEventListener("click", (e) => {
  e.preventDefault()
  inputFormElements.forEach(inputFormElement => {
    formValues.push(inputFormElement.value)
  })
  returnObjFromArray(formValues)  
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


