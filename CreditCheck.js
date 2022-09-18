function cardnumber(inputtxt)
{
  var cardno = /^(?:3[47][0-9]{13})$/;
  if(inputtxt.value.match(cardno))
        {
      return true;
        }
      else
        {
        alert("Invalid Card number");
        return false;
        }
}
