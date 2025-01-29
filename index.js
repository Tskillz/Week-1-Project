const form = document.getElementById('form');
const Date of birth = document.getElementById('Date of birth');
const email = document.getElementById('email');
const password = document.getElementById('password');
const first name= document.getElementById('first name');
const last name = document.getElementById('last name');
const Confirm password = document.getElementById('confirm password');

form.addEventListener('submit',e=> {
   e.preventDefault();

 validateInputs();  
});

const setError =(element, message)=>{
const inputcontrol = element.parentElement;
const errorDisplay = inputcontrol.querySelector  ('.error');

errorDisplay.innerText = message;
inputcontrol.classList.add ("error");
inputcontrol.classList.remove('success')


}

const validateInputs = () => {
    const form = form.value.trim();
    const Date of birth = Date of birth.value.trim();
    const Email = Email.value.trim();
    const Password = password.value.trim();
    const firstname =value.trim();
    const lastname = lastname.value.trim();
    const confirm password = confirm password.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is required')

    } else {

    }


};



