let password = document.querySelector("#password");
let confirm = document.querySelector("#confirm-password");
let message = document.querySelector("#message");

function onChange() {
    if (confirm.value === password.value) {
        confirm.style.outline = "none";
        confirm.style.border = "2px solid rgb(0, 128, 0,0.7)";
        message.textContent = "passwords match";
        message.style.color = "rgb(0, 128, 0,0.7)";
    } else {
        confirm.style.outline = "none";
        confirm.style.border = "2px solid rgb(255, 0, 0,0.6)";
        message.textContent = "passwords do not match";
        message.style.color = "rgb(255, 0, 0,0.6)";
    }
  }
  function validateMyForm(){
    if (confirm.value === password.value){
        return true;
    }else {
        returnToPreviousPage();
        return false;
    }
  }
