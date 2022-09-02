let userName=document.getElementById("userName");
let email=document.getElementById("txtEmail");
let age=document.getElementById("age");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");
let phoneNumber=document.getElementById("phoneNumber");
let gender=document.getElementById("gender");


function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    } 
    // else if (userName.length < 3 || userName.length > 50) {
    //  onError(userName, "This field minimum character is 5 and maximum character is 50. Please input at this range.");
    // }
    else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }
    // age
    if(age.value.trim()===""){
        onError(age,"Age cannot be empty");
    // } else if (age < 18 || age.length > 2) {
    //     onError(age, "This field minimum character is 18 . Please input at this range.");
    
    //     // focus element
    //      pwd.focus();
      }
    else{
       
     onSuccess(age);
        }
   
    //phone Number HH
    // if(phoneNumber.value.trim()===""){
    //     onError(phoneNumber,"Phone Number cannot be empty");
    //  }else{
    //      onSuccess(phoneNumber);
    //  }


    // if(phoneNumber.value.trim()===""){
    //     onError(phoneNumber,"Phone Number cannot be empty");
    // }else{
       
    //  onSuccess(phoneNumber);
    //     }
    //gender HH
    // if(gender.value.trim()===""){
    //     onError(gender,"Your gender cannot be empty");
    //  }else{
    //      onSuccess(gender);
    //  }

    // if(gender.value.trim()===""){
    //     onError(gender,"Your Gender cannot be empty");
    // }else{
       
    //  onSuccess(gender);
    //     }
   
    //password
    if(pwd.value.trim()===""){
        onError(pwd,"User Name cannot be empty");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"User Name cannot be empty");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password not matching");
         }
         else
         onSuccess(conPwd);
     }
}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
