// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector("#modal")
const modalMessage = document.getElementById("modal-message")

document.addEventListener("DOMContentLoaded", hideError())

function hideError(){
  errorModal.className = "hidden"
}



document.addEventListener("DOMContentLoaded", function(e) {
  const loveButtons = Array.from(document.getElementsByClassName("like-glyph"))
 
  loveButtons.forEach(e => {
  e.addEventListener("click", addressServerCall)})
})

function addressServerCall() {
  mimicServerCall()
  .then(r => showLove(this))
  .catch(e => {modalMessage.innerText = e; errorModal.className = ""; 
    setTimeout(hideError, 5000)})
;}

function showLove(heart){
 
  if (heart.innerText == EMPTY_HEART){
    heart.innerText = FULL_HEART
    heart.className = "activated-heart"
  }
  if (heart.innerText == FULL_HEART) {
    heart.innerText = EMPTY_HEART
    heart.className = "like-glyph"
  }

}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
