let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit (event) {
    event.preventDefault()
    console.log("Saved")
}