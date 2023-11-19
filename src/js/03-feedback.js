import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
feedbackForm.style.fontFamily = 'Edu TAS Beginner';

const userEmail = document.querySelector('input[name="email"]');

const userMassage = document.querySelector('textarea[name="message"]');

const USER_DATA = "feedback-form-state"

feedbackForm.addEventListener('input', throttle(handleInput, 500));

feedbackForm.addEventListener("submit", handleSubmit);

function handleInput(evt) {
    const currentStateForm = {
        email: userEmail.value,
        message: userMassage.value
    };

    localStorage.setItem(USER_DATA, JSON.stringify(currentStateForm));
}

function handleSubmit(event) {
    event.preventDefault();  
    const email = userEmail.value;
    const message = userMassage.value;

  if (email === "" || message === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(`Email: ${email}, Message: ${message}`);
    feedbackForm.reset();
    localStorage.removeItem(USER_DATA);
}

const savedForm = JSON.parse(localStorage.getItem(USER_DATA));

if (savedForm) {
    userEmail.value = savedForm.email;
    userMassage.value = savedForm.message;
}


