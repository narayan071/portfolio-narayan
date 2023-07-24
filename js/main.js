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