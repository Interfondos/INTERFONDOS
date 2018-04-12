$(document).ready(function() { 
  var $rentabilidad = $('#rentabilidad');
  var $porcentajeRentabilidad = $('#porcentajeRentabilidad');
  var dni = '0010885473';
  var rentabilidad;
  var total = 0;
  var fecha = '04-11-18';
  var arrayFondosUser = [];
  var arrayCuotas = [];
  var valorCuota = [];
  var total = 0;
  // var fecha = new Date ();
  // var x = fecha.getDate()+ "/"+ (fecha.getMonth()+1) + "/" + fecha.getFullYear();
  // console.log(x);

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
      var fondo_user;      
      // console.log(users[0].CODIGO_UNI)
      for (var i=0; i < users.length; i++) {
        if (users[i].CODIGO_UNI === dni) {
          // fondo_user = users[i].FONDO;
          arrayFondosUser[i]= users[i].FONDO;
          arrayCuotas[i] = users[i].CUOTAS;          
        }
      }      
      // console.log(arrayCuotas);
    });
  

    firebase.database().ref('valores_cuota')
    .on('child_added', function(c) {
      var cuota = c.val();            
      for (var j=0; j < cuota.length; j++) {
        for(var k=0; k < arrayFondosUser.length; k++) {                
          if(cuota[j].Nombrefondo == arrayFondosUser[k] && cuota[j].Fecha === fecha) {
            valorCuota[k] = cuota[j].Valor;
            
          }
        }                 
        
      }
     for(var i = 0; i < valorCuota.length; i++ ) {
      total = total + valorCuota[i]*arrayCuotas[i];
      console.log(total);
     }
     $('#saldoSoles').append(total.toFixed(2));
    });

    firebase.database().ref('fondos')
    .on('child_added', function(u) {
      var users = u.val(); 
      console.log(users[0].CODIGO_UNI);
      for (var i = 0; i < users.length; i++) {
        if (users[i].CODIGO_UNI === dni) {
          var cuenta = users[i].FONDO; 
          // fondo_user = users[i].FONDO;
          $('#contract').append(`
          
          <div class="border-item border-item1 col m12 s10 offset-s1">
          <div class="col m2">
            <img class="color-item1" src="../assets/images/imagen2.png" width="40" alt="">
          </div>
          <div class= "col m9">
            <h6>${cuenta}</h6>
            <p>A047883</p>
            <p class="cost">S/. 1623.30</p>
            <p>Saldo a la fecha</p>
          </div>
        </div>`);     
        }
      }      
      console.log(arrayFondosUser);
    });


});