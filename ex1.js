function validate()
{
  var pass1 = document.getElementById("password1");
  var pass2 = document.getElementById("password2");

  if (pass1.value.length() < 8)
  {
    alert ("Password length must be atleast 8 characters long.");
  }
  if (pass1.value != pass2.value)
  {
    alert ("Passwords do not match.");
  }
  if(pass1.value == "" || pass2.value == "")
  {
     alert ("Kindly enter the password.");
  }
  else
  {
    alert ("Passwords match.");
  }
}
