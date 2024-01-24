const loginToggle = document.getElementById('login-toggle');
const registerToggle = document.getElementById('register-toggle');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');




loginToggle.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
});

registerToggle.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
});
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    return re.test(String(email).toLowerCase());
  }
  
function signin_validation(){
    var nam=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var num=document.getElementById("num").value;
    var pass=document.getElementById("pass").value;
    var conpass=document.getElementById("conpass").value;
    var flag=true;

    if(nam==""){
      document.getElementById("s1").innerHTML="Name is required";
      flag=false; }
     else if(/[0-9]/.test(nam)==true){ 
         document.getElementById("s1").innerHTML="Invalid name";
         flag=false;}
     else{
         document.getElementById("s1").innerHTML="";
     }


        if(mail==""){
          document.getElementById("s3").innerHTML="Email is required";
          flag=false; }
     else if(!validateEmail(mail) || mail==""){
          document.getElementById("s3").innerHTML="invalid email";
           flag=false;}
     else{
             document.getElementById("s3").innerHTML="";
         }
         if(num==""){ 
            document.getElementById("s2").innerHTML="Password is required";
            flag=false; }
           else if(num.length < 10) {  
              document.getElementById("s2").innerHTML = "phone number length must be atleast 10 characters";  
              flag=false;  
           } 
           else{
            document.getElementById("s2").innerHTML="";
                }

         if(pass==""){ 
          document.getElementById("s4").innerHTML="Password is required";
          flag=false; }
         else if(pass.length < 8) {  
            document.getElementById("s4").innerHTML = "Password length must be atleast 8 characters";  
            flag=false;  
         }
         else if(pass.length > 15) {  
            document.getElementById("s4").innerHTML = "Password length must not exceed 15 characters";  
            flag=false;  
         } 
         else{
          document.getElementById("s4").innerHTML="";
              }
          
          if(pass != conpass) {  
                document.getElementById("s5").innerHTML = "Passwords are not same";  
                flag=false;  
              } 

            
}
