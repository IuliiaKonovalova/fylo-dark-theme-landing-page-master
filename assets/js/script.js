const submissionForm = document.getElementById("form");
const emailInput = document.getElementById("email");

/**
 * Main function
 */
document.addEventListener("DOMContentLoaded", function () {

  submissionForm.addEventListener('submit', function (e) {
    submission(e);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      submission(e);
    }
  });
});


const submission = function (e) {
  e.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email)) {
    submissionForm.classList.add("error");
  } else {
    emailInput.value = "";
    submissionForm.classList.remove("error");
  }
};


/**
 * Function to validate email input
 * Posted on Stack overflow:
 * https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
 */
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};