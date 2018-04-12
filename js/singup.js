$(document).ready(function() { 
  var $dni = $('#dni');
  var random = Math.floor(Math.random() * (9999 - 1000)) + 1000;
 
  $dni.on('input', function() {
    $('#nextRegistry').attr('disabled', true)
    firebase.database().ref('users')
      .on('child_added', function(s) {
        var users = s.val();
        /* console.log(users.CU); */
        if (users.CU === $dni.val()) {
          activeDni = true;
          console.log(users.CU);
          $('#nextRegistry').attr('disabled', false);
        }
        
    });
  });

  $('#nextRegistry').click(function() {
    alert(random);
    localStorage = random;
    
  });
})