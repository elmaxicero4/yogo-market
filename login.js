var datos;

// Descreva esta função...
function goIngresar() {
  if (!!$("#box_usuario").val().length && !!$("#box_pass").val().length) {
    database.ref(('AUTHME_MARKET/' + String($("#box_usuario").val()))).once("value").then(function(snapshot) {
    if (snapshot.exists()) {
    goValidarCredencialesUsuario(snapshot.val());
    } else {
    goValidarCredencialesUsuario('null');
    }
    });
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Existen campos vacíos',
    text: 'Por favor ingrese los campos solicitados'
    });
  }
}

// Descreva esta função...
function goValidarCredencialesUsuario(datos) {
  if (datos != 'null') {
    if (((datos['pass'].replace('"', '')).replace('"', '')) == $("#box_pass").val()) {
      localStorage.setItem('user',$("#box_usuario").val());
      localStorage.setItem('pass',$("#box_pass").val());
      window.location.href = "home.php";} else {
      Swal.fire({
      icon: 'error',
      title: '¡Ups!',
      text: 'Usuario y/o contraseña incorrectas'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: '¡Ups!',
    text: 'Usuario y/o contraseña incorrectas'
    });
  }
}


//feito com bootblocks.com.br
  $("body").css("height", "100%");
  $("html").css("height", "100%");
  $("body").css("width", "100%");
  $("html").css("width", "100%");
  $("#lbl1").css("display", "flex");
  $("#lbl1").css("justify-content", "center");
  $("#lbl2").css("display", "flex");
  $("#lbl2").css("justify-content", "center");
  $("#contenedor_btn_buscar").css("display", "flex");
  $("#contenedor_btn_buscar").css("justify-content", "center");
  document.getElementById('lbl1').style['font-size'] = '2rem';
  document.getElementById('lbl2').style['font-size'] = '1rem';
  document.getElementById('id_do_container').style.height = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('id_do_container').style.width = (window.innerWidth * (80 / 100)) + "px";
  document.getElementById('btn_ingresar').style['width'] = '100%';
  document.getElementById('btn_ingresar').style['width'] = '100%';

//feito com bootblocks.com.br
  firebase.initializeApp({
  apiKey: 'AIzaSyAwj7bOTLZ9sBY7rcpXA2xl53tJd2kzmfU',
  authDomain: 'yogo-9892c.firebaseapp.com',
  databaseURL: 'https://yogo-9892c-default-rtdb.firebaseio.com',
  projectId: 'yogo-9892c',
  storageBucket: 'yogo-9892c.appspot.com',
  messagingSenderId: '1004369172095',
  appId: '1:1004369172095:web:9ee1130971c3821188514a'
  });
  const database = firebase.database();

        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });