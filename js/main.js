function validate(e) {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value


    let name_error = document.getElementById("name_error")
    let email_error = document.getElementById("email_error")
 

    let error = false
    if (name==""){
        name_error.innerHTML = "*Name is required";
        error = true;
    }
    else{
        name_error.innerHTML=""
    }
    
    let email_pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(email==""){
        email_error.innerHTML = "email is a required field";
        error = true;
    }
    else if(!email.match(email_pattern)){
        email_error.innerHTML="*Please enter a valid email id";
        error = true;
    }
    else{
        email_error.innerHTML = ""
    }
       
    if(error){
        e.preventDefault()
        document.getElementById("form").classList.add("was-validated")
    }

}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

function sendEmail(){
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let name = document.getElementById("name").value;
  let body = "Name: "+name+"<br/>Message: "+message+"<br/>Email: "+email;
  Email.send({
    SecureToken : "3b5661d4-c662-490b-95ab-ed4085e6ec0f",
    To : 'narayanpradhanb1117@gmail.com',
    From : "narayanpradhanb1117@gmail.com",
    Subject : "PORTFOLIO FORM COMMUNICATION",
    Body : body
  }).then(
  message => alert(message)
  );
}

// 3b5661d4-c662-490b-95ab-ed4085e6ec0f