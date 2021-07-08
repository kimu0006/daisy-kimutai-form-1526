// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
let b = document.querySelector('button');

// <input type="text" id="fullname">,
let fullname = document.getElementById('fullname');

// <input type="text" id="email">
let email = document.getElementById('email');

// <textarea id="message"></textarea>
let message = document.getElementById('message');

let form = document.getElementById('contact');
// function

function formValidator(ev){
   // preventing default behaviour of HTML form on submit event
   // whenever used, it should come as the first line of code in event 

   ev.preventDefault();  
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS)
    // Declare object that will store the form-data
   let data = {};

    // Declare array that will store the errors
   let errors = [];

       if (fullname.value !== ''){
         data.fullname = fullname.value;
       } else{
         errors.push('Please enter your full name');
       };

       if(email.value !== ''){
         data.email = email.value;
       } else{
         errors.push('Please enter your email');
       };
      
       if(message.value !== ''){
         data.message = message.value;
       } else{
          errors.push('Please enter message');
       };
   
       if(errors == ""){
          console.log(data);
          form.reset();
          message.value = "";
       }
       else{
          console.log(errors);
       };
} 

b.addEventListener('click', formValidator);
