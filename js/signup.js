function begin() {

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

/* *************  validate signup password **** */
var $keyone = $('#keyone');
var $keytwo = $('#keytwo');
var $checked = $('.checkbox');

var validateKeyone = false;
var validatekeytwo = false; 
var validateChecked = false;  

// Aqui indicar que se puede implementar la función como variable
function activeButton() {
  if (validateKeyone && validatekeytwo && validateChecked) {
    $('.btn-register').attr('disabled', false);
  }
}

function desactiveButton() {
  $('.btn-register').attr('disabled', 'disabled');
} 


$keyone.on('input', function(event) {
  console.log($(this).val());
  if ($(this).val().length > 5 && $(this).val().length < 17 ) {
    validateKeyone = true;
    activeButton(); 
  } else {
    desactiveButton();
  }
});

$keytwo.on('input', function() {
  console.log($(this).val());
  if ($(this).val() === $keyone.val()) {
    validatekeytwo = true;
    activeButton(); 
  } else {
    desactiveButton(); 
  }
});

$checked.on('click', function(event) {
  if (event.target.checked) {
  //   alert('entre');
    validateChecked = true;
    activeButton();
  } else {
    desactiveButton();
  }
});

$('.btn-register').on('click', function(event) {
  event.preventDefault();
  window.location.href = 'success.html';
});

$(document).ready(begin);