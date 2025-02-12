// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const heart = document.getElementById("heart");
heart.textContent = EMPTY_HEART

heart.addEventListener("click", () => {
  if (!heart.classList.contains("activated-heart")) {
    mimicServerCall()
      .then(() => {
        heart.classList.add("activated-heart"); 
        heart.textContent = FULL_HEART;
      })
      .catch(() => {
        const modal = document.getElementById("modal");
        const message = document.getElementById("modal-message");
        message.textContent = "Something went wrong. Please try again later.";
        modal.classList.remove("hidden");

        setTimeout(() => {
          modal.classList.add("hidden");
        }, 3000);
      });
  } else {
    heart.classList.remove("activated-heart");
    heart.textContent = EMPTY_HEART;
  }
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
