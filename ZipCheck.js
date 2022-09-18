function isUSAZipCode(str) 
{
  return /^\d{5}(-\d{4})?$/.test(str);
}

function validateInput() 
{
  console.log("validateInput");
  let zipCode = document.getElementById("zipCode").value;
  let message = "";
  if (isUSAZipCode(zipCode)) 
  {
    message = "The zip code is valid";
  } else {
    message = "Invalid zip code, please insert a valid one";
  }
  document.getElementById("msg").innerHTML = message;
}