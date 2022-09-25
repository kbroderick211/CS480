$( "#btn1" ).click(function() {
    $( "#box" ).animate({
     width: "200px",
     height: "200px",
     border: dashed, 
      }, 1000 );
  });
  
  $( "#btn2" ).click(function() {
    $( "#box" ).animate({
     width: "50px",
     height: "50px",
     border: none,    
      }, 1000 );
  });