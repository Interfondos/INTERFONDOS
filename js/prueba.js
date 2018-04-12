$(document).ready(function() {

  /* Variables */
  var $user = $('#user');
  var $soles = $('#soles');
  var $dolares = $('#dolares');
  var $fondos = $('#fondos');





  /* Logeo con Firebase */

    firebase.database().ref('rentabilidad')
      .on('child_added', function(s) {
        var fondosClientes = s.val();
        console.log(fondosClientes); 
        // if (fondosClientes.CU === $dni.val() && users.CU === $password.val()) {
        //   console.log(users.Cliente);
        //   validateUser = true;
        //   $(location).attr('href', 'views/home.html');
        // }
      });

});