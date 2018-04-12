$(document).ready(function() { 
  var $rentabilidad = $('#rentabilidad');
  var $porcentajeRentabilidad = $('#porcentajeRentabilidad');
  var dni = '0010885473';
  var rentabilidad;
  var total = 0;
  firebase.database().ref('rentabilidad')
    .on('child_added', function(s) {
      var users = s.val();
      for (var i=0; i<users.length;i++) {
        if (users[i].CODIGO_UNI === dni) {
          total = total + parseInt(users[i].RENTABILIDAD_MONTO);
        }
      }
      $rentabilidad.text('s/. ' + total);
      $porcentajeRentabilidad.text(total * 0.01 + '%');
      
    }); 
  firebase.database().ref('fondos')
    .on('child_added', function(s) {
      var users = s.val();
      for (var i=0; i<users.length;i++) {
        if (users[i].CODIGO_UNI === dni) {
          console.log(users[i].CODIGO_UNI)
        }
      }
      
    });
});