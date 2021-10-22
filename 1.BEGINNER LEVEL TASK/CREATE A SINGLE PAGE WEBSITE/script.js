/*slider*/
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3500); // Change image every 2 seconds
}
/*login & signup Modal Pop-up & Categories*/
function close_tab(id){
  var s = document.getElementById(id);
  s.style.display="none";
  s.style.position="relative";
}
function open_tab(id){
  var s = document.getElementById(id);
  s.style.display="block";
  s.style.position="fixed";
}
/*validations for login & signup*/
function validlogin() {
 
  var uname = document.forms["logform"]["uname"].value;
  var pass = document.forms["logform"]["password"].value;
  var numbers = /^[0-9]+$/; 
var alphabets=/^[A-Za-z]+$/;

   if(uname==null || uname=="")
   {  
  alert("Username and Password should not blank");  
  return false;  
   }
 
  else if(uname.match(numbers))
      {
      alert("Enter only Alphabets in User Name");
      return false;
      }
  else if(pass.length<10 || pass.length>10)
      {  
       alert("Password must be  10  characters long");  
      return false;  
      } 
  
 else{
  alert("Successfully Logined into the website");
    return true;
  }
}

function validsignup() {
    var uname=document.forms["signform"]["uname"].value;
    var sname=document.forms["signform"]["sname"].value;
var phone=document.forms["signform"]["phone"].value;
  var email= document.forms["signform"]["email"].value;
  var password = document.forms["signform"]["password"].value;
  var confirmpsw = document.forms["signform"]["confirm-password"].value;
  var flag = 1;
  var index = 0;
var numbers = /^[0-9]+$/; 
var alphabets=/^[A-Za-z]+$/;

if (uname==null || uname=="" || sname==null || sname=="" || password==null || password=="" || confirmpsw==null || confirmpsw=="")
{  
  alert("All the fields are not Filled");  
  return false;  
}
 else if(uname.match(numbers))
      {
      alert("Enter only Alphabets in Full Name");
      return false;
      }
 else if(phone.length < 10 || phone.length > 10){  
    alert('Mobile Number should be of 10 digits');
  return false;  
  }  
 
  else if(uname.match(numbers) || sname.match(numbers))
      {
      alert("Enter only Alphabets in Full Name");
      return false;
      }
  else if(password !== confirmpsw){
    alert('Password and Repeat Password do not match');
    return false;
  }
 else if(password.length < 10 || password.length >10){
    alert('Password length must be 10 characters');
    return false;
  }
  else
  alert('User signed in successfully');
  return true;
 
}

