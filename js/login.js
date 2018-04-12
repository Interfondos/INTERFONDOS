$(document).ready(function() {
  /* Inicializando select Documento*/
  $('select').material_select();
  /* Variables */
  var $dni = $('#dni');
  var $password = $('#password');
  var $btnLogin = $('#btnLogin');

  var validateDni = false;
  var validatePassword = false;

  /* Validación de boton activado/desactivado */
  function activeBtn() {
    if (validateDni && validatePassword) {
      $btnLogin.attr('disabled', false);
    }
  }
  function desactiveBtn() {
    $btnLogin.attr('disabled', true);
  }
  $dni.on('input', function(event) {
    if ($dni.val()) {
      validateDni = true;
      activeBtn();
    } else 
      desactiveBtn();
  });

  $password.on('input', function(event) {
    if ($password.val()) {
      validatePassword = true;
      activeBtn();
    } else 
      desactiveBtn();
  });

  /* Logeo con Firebase */
  $btnLogin.click(function() {
    firebase.database().ref('users')
      .on('child_added', function(s) {
        var users = s.val();
        /* console.log(users.CU); */
        if (users.CU == $dni.val() && users.CU == $password.val()) {
          console.log(users.Cliente);
        }
        else
          alert('Usuario incorrecto');
      });
  });
});