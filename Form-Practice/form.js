let userFormDOM = document.querySelector('#userForm');
userFormDOM.addEventListener('submit', formHandler);
let alertDOM = document.querySelector('#alert');

const alertFunction = (title, message, className="warning") => `
    <div class="alert alert-${className} alert-dismissible fade show" role="alert">
        <strong>${title}</strong> ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`

function formHandler(event) {
    event.preventDefault();
    const USER_NAME = document.querySelector('#username');
    const SCORE = document.querySelector('#score');
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value);
        USER_NAME.value = ""
        SCORE.value = ""
        alertDOM.innerHTML = alertFunction (
        "Congratulation!",
        "Saved succesfully.",
        "success"
        )
    }
    else {
        alertDOM.innerHTML= alertFunction (
            "Oh no!",
            "Please check the fields below and try again.",
            "danger"
        )
    }    
}

const userListDOM = document.querySelector('#userList');

const addItem =(userName, score) => {
    let h5DOM = document.createElement('h5');
    let liItemDOM = document.createElement('li');
    
    h5DOM.innerHTML = `<h5>Result</h5>`;
    liItemDOM.innerHTML = `
        ${userName}
        <span class="badge bg-primary rounded-pill">${score}</span>
    `;
    h5DOM.classList.add ('text-white', 'fw-bold');
    liItemDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    userListDOM.append(h5DOM);
    userListDOM.append(liItemDOM);
}