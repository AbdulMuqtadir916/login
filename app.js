let signupBtn = document.querySelector('#sign-up-btn');
let signinBtn = document.querySelector('#sign-in-btn');
let container = document.querySelector('.container');

signupBtn.addEventListener("click", () => {
    container.classList.add("signupMode");
});

signinBtn.addEventListener("click", () => {
    container.classList.remove("signupMode");
});


