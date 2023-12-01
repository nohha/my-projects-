//get data
const nameinput = document.querySelector("#name")
const email = document.querySelector("#email")
const number = document.querySelector("#number")
const massege = document.querySelector("#massege")
const success = document.querySelector("#success")
const errorNodes = document.querySelectorAll(".error")



function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameinput.value.length <1){
        errorNodes[0].innerText = "name cannot be blank";
        nameinput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "invalid email address";
        email.classList.add("error-border");
        errorFlag = true;

    }
    if(number.value.length < 1){
        errorNodes[2].innerText = "please enter your phone number";
        number.classList.add("error-border");
        errorFlag = true;

    }
    if(massege.value.length < 1){
        errorNodes[3].innerText = "please enter a massege";
        massege.classList.add("error-border");
        errorFlag = true;

    }

    if(!errorFlag){
        success.innerText = "Submitted!"


         //email code here....

        // Email.send({
        //     SecureToken : "1ea5467f-b033-466a-a3c8-46090b5601c4",
        //     To : 'inkwaves123@gmail.com',
        //     From : "inkwaves123@gmail.com",
        //     Subject : "confirmation email",
        //     Body : "detailes are saved"
        // }).then(
        // message => alert(message)
        // );

      
    }
    //write proper email format
    let ebody = `
    <b>Name: </b>${nameinput.value}
    <br>
    <b>Email: </b>${email.value}
    <br>
    <b>phone number: </b>${number.value}
    <br>
    <b>Massege: </b>${massege.value}
    <br>`
    //email code here
    Email.send({
        SecureToken : "2d576f2d-65d8-4ae8-9aa8-6c07db433611",
        To : 'INKwaves1234@gmail.com',
        From : "INKwaves1234@gmail.com",
        Subject : "data submitted from" + email.value,
        Body : ebody
    }).then(
      message => alert(message)
    );
    

   

}
function clearMessages(){
    for(let i =0; i< errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameinput.classList.remove("error-border")
    email.classList.remove("error-border")
    massege.classList.remove("error-border")
    number.classList.remove("error-border")
}
//check email validity
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/ ;
    return pattern.test(email);
}

// Show popup message
// let popup = document.getElementById("popup");

// Check if all input fields are filled
// let nameValue = document.getElementById("name").value;
// let emailValue = document.getElementById("email").value;
// let numberValue = document.getElementById("number").value;
// let messageValue = document.getElementById("message").value;

// function openPopup(){

//     if (nameValue && emailValue && numberValue && messageValue) {
//         popup.classList.add("open-popup");
//       }
//      popup.classList.add("open-popup")
// }




// function closePopup(){
//     popup.classList.remove("open-popup")
// }