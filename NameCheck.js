function allLetter(inputtxt)
      { 
      var letters = /^[A-Za-z]+$/;
      if(inputtxt.value.match(letters))
      {
      alert('The name is valid.');
      return true;
      }
      else
      {
      alert('Invalid name. Please insert a first and last name separated by a space.');
      return false;
      }
      }