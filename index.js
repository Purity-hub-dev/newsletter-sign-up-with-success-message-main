
const button = document.querySelector('button');
button.addEventListener('click', subscribeMonthly);
const input = document.querySelector('#mail-box');

const container = document.querySelector('.container.g_con');
const successMessage = document.querySelector('.success-msg');

function subscribeMonthly(){
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const errorMsg = document.querySelector(".description p.content");

  if (input.value === "" || !input.value.match(mailformat)) {
    errorMsg.style.display = "block";
    input.classList.add("error");
  } else {
    container.style.display = 'none'
    successMessage.style.display = "block";
    successMessage.innerHTML = `<div class= "feedback-sms">
        <div class= "g_Container"> 
        <img class= "img" src="/assets/images/icon-success.svg" alt="" />
        <h2 class= "content">Thanks for subscribing!</h2> 
        <p class= "sms">A confirmation email has been sent to <b> ${input.value}</b>. Please open it and click the button inside to confirm your subscription.</p> 
        <button onclick="dismissMsg()" class= "btn">Dismiss message</button>
        </div>
      </div>`;
  }
}
const dismissMsg = ()=>{
  successMessage.style.display = "none";
  container.style.display = "block";
  input.value = ""
}
