function begin() {
  var $dni = $('#id-number');
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
  function numberIdValid() {
    $('#id-number').keyup(function () {
      var idNumber = $('#id-number').val().length;
      if ((idNumber < 10 || idNumber > 10)) {
        $('#btn-next').addClass('disabled');
      } else if ((idNumber === 10) && $('.with-gap').prop('checked')) {
        $('#btn-next').removeClass('disabled');
      }
    });
  }
  
  function radio() {
    $('.with-gap').click(function () {
      if ($('input[name="group1"]').is(':checked') && ($('#id-number').val().length === 10)) {
        $('#btn-next').removeClass('disabled');
      }
    });
  }
  numberIdValid();
  radio();

  $('#btn-next').on('click', function () {
    $('#btn-next').attr('href', 'signupcodevalidate.html');
  });

  $('#btn-previous').on('click', function () {
    $('#btn-previous').attr('href', 'signup.html');
  });


  function code1() {
    return $('.code-validate1').val().length === 1;
  }

  function code2() {
    return $('.code-validate2').val().length === 1;
  }

  function code3() {
    return $('.code-validate3').val().length === 1;
  }

  function code4() {
    return $('.code-validate4').val().length === 1;
  }

  function allOk() {
    return code1() && code2() && code3() && code4();
  }

  $('.code').keyup(function () {
    if (allOk()) {
      $('#btn-next-code').removeClass('disabled');
    } else {
      $('#btn-next-code').addClass('disabled');
    }
  });

  $('#btn-next-code').on('click', function () {
    $('#btn-next-code').attr('href', 'signuppassword.html');
  });
  
  $('#btn-previous-code').on('click', function () {
    $('#btn-previous-code').attr('href', 'signupcodevalidate.html');
  });
};

$(document).ready(begin);