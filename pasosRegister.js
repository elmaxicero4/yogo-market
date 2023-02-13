var idMarketNew, date, tagTemp;

// Descreva esta função...
function goConfirmarPublicar() {
  window.location.href = "home.php";}


//feito com bootblocks.com.br
  $("#"+'paso1').hide();
  $("#"+'paso2').hide();
  $("#"+'paso3').hide();
  $("#"+'paso4').hide();
  $("body").css("height", "100%");
  $("html").css("height", "100%");
  $("body").css("width", "100%");
  $("html").css("width", "100%");
  $("#containerPrincipalCards").css("text-align", "center");
  $("#id_do_container1").css("text-align", "center");
  document.getElementById('lbl1').style['font-size'] = '1.8rem';
  document.getElementById('lbl2').style['font-size'] = '1.3rem';

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

//feito com bootblocks.com.br
  $("#conteinerLblIniciarRegister").css("display", "flex");
  $("#conteinerLblIniciarRegister").css("justify-content", "center");
  $("#btn_inciarRegister").css("background-color", "#ff9900");
  $("#btn_inciarRegister").css("border-radius", "20px");
  document.getElementById('btn_inciarRegister').style['width'] = '100%';

$("#btn_inciarRegister").click(function(){
  $("#"+'pasos').hide();
  $("#"+'paso1').show();
});

//feito com bootblocks.com.br
  $("._lbl3").css("font-size", "1.6rem");
  $("._lbl4").css("font-size", "1.3rem");
  document.getElementById('card1').style.height = '30' + "px";
  document.getElementById('card1').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('card1').style.height = "auto";
  document.getElementById('card1').style.width = "auto";
  document.getElementById('card1').style['box-shadow'] = 'none';
  $("#card1").css("padding-left", "20px");
  $("#card1").css("padding-right", "20px");
  $("#card1").css("padding-top", "8px");
  $("#card1").css("padding-bottom", "8px");
  document.getElementById('card1').style['border-style'] = 'solid';
  document.getElementById('card1').style['border-color'] = '#0BE748';
  document.getElementById('card1').style['border-width'] = '2px';
  document.getElementById('card1').style['box-shadow'] = '0';

//feito com bootblocks.com.br
  document.getElementById('card2').style.height = '30' + "px";
  document.getElementById('card2').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('card2').style.height = "auto";
  document.getElementById('card2').style.width = "auto";
  document.getElementById('card2').style['box-shadow'] = 'none';
  $("#card2").css("padding-left", "20px");
  $("#card2").css("padding-right", "20px");
  $("#card2").css("padding-top", "8px");
  $("#card2").css("padding-bottom", "8px");
  document.getElementById('card2').style['border-style'] = 'solid';
  document.getElementById('card2').style['border-color'] = '#999999';
  document.getElementById('card2').style['border-width'] = '2px';
  document.getElementById('card2').style['box-shadow'] = '0';

//feito com bootblocks.com.br
  document.getElementById('card3').style.height = '30' + "px";
  document.getElementById('card3').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('card3').style.height = "auto";
  document.getElementById('card3').style.width = "auto";
  document.getElementById('card3').style['box-shadow'] = 'none';
  $("#card3").css("padding-left", "20px");
  $("#card3").css("padding-right", "20px");
  $("#card3").css("padding-top", "8px");
  $("#card3").css("padding-bottom", "8px");
  document.getElementById('card3').style['border-style'] = 'solid';
  document.getElementById('card3').style['border-color'] = '#999999';
  document.getElementById('card3').style['border-width'] = '2px';
  document.getElementById('card3').style['box-shadow'] = '0';

//feito com bootblocks.com.br
  document.getElementById('card4').style.height = '30' + "px";
  document.getElementById('card4').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('card4').style.height = "auto";
  document.getElementById('card4').style.width = "auto";
  document.getElementById('card4').style['box-shadow'] = 'none';
  $("#card4").css("padding-left", "20px");
  $("#card4").css("padding-right", "20px");
  $("#card4").css("padding-top", "8px");
  $("#card4").css("padding-bottom", "8px");
  document.getElementById('card4').style['border-style'] = 'solid';
  document.getElementById('card4').style['border-color'] = '#999999';
  document.getElementById('card4').style['border-width'] = '2px';
  document.getElementById('card4').style['box-shadow'] = '0';

//feito com bootblocks.com.br
  document.getElementById('card5').style.height = '30' + "px";
  document.getElementById('card5').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('card5').style.height = "auto";
  document.getElementById('card5').style.width = "auto";
  document.getElementById('card5').style['box-shadow'] = 'none';
  $("#card5").css("padding-left", "20px");
  $("#card5").css("padding-right", "20px");
  $("#card5").css("padding-top", "8px");
  $("#card5").css("padding-bottom", "8px");
  document.getElementById('card5').style['border-style'] = 'solid';
  document.getElementById('card5').style['border-color'] = '#999999';
  document.getElementById('card5').style['border-width'] = '2px';
  document.getElementById('card5').style['box-shadow'] = '0';

//feito com bootblocks.com.br
  document.getElementById('paso1').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('paso1').style.width = (window.innerWidth * (100 / 100)) + "px";
  $("#paso1").css("text-align", "center");
  document.getElementById('id_do_container').style['width'] = '80%';
  document.getElementById('id_do_container').style['height'] = '100%';
  document.getElementById('container122').style['width'] = '100%';
  document.getElementById('container133').style['width'] = '100%';
  document.getElementById('container13').style['width'] = '100%';
  document.getElementById('spinner_city').style['width'] = '100%';
  document.getElementById('spinner_categoria').style['width'] = '100%';
  $("#container133").css("text-align", "left");
  $("#container122").css("text-align", "left");
  $("#container13").css("text-align", "left");
  $("#container133").css("padding-left", "0px");
  $("#container133").css("padding-right", "0px");
  $("#container133").css("padding-top", "0px");
  $("#container133").css("padding-bottom", "0px");
  $("#container122").css("padding-left", "0px");
  $("#container122").css("padding-right", "0px");
  $("#container122").css("padding-top", "0px");
  $("#container122").css("padding-bottom", "0px");
  $("#container13").css("padding-left", "0px");
  $("#container13").css("padding-right", "0px");
  $("#container13").css("padding-top", "0px");
  $("#container13").css("padding-bottom", "0px");
  document.getElementById('lbl_city').style['color'] = '#999999';
  document.getElementById('lbl_categoria').style['color'] = '#999999';
  $("#container14").css("text-align", "left");
  $("#container14").css("padding-left", "0px");
  $("#container14").css("padding-right", "0px");
  $("#container14").css("padding-top", "0px");
  $("#container14").css("padding-bottom", "0px");
  $("#btn_siguientePaso1").css("background-color", "#ff9900");
  $("#btn_siguientePaso1").css("border-radius", "20px");
  document.getElementById('btn_siguientePaso1').style['width'] = '100%';

//feito com bootblocks.com.br
  document.getElementById('paso2').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('paso2').style.width = (window.innerWidth * (100 / 100)) + "px";
  $("#paso2").css("text-align", "center");
  document.getElementById('id_do_container56').style['height'] = '100%';
  document.getElementById('id_do_container56').style['width'] = '80%';
  $("#btn_siguientePaso2").css("background-color", "#ff9900");
  $("#btn_siguientePaso2").css("border-radius", "20px");
  document.getElementById('btn_siguientePaso2').style['width'] = '100%';

//feito com bootblocks.com.br
  document.getElementById('paso3').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('paso3').style.width = (window.innerWidth * (100 / 100)) + "px";
  $("#paso3").css("text-align", "center");
  document.getElementById('id_do_container86').style['height'] = '100%';
  document.getElementById('id_do_container86').style['width'] = '80%';
  $("#btn_siguientePaso3").css("background-color", "#ff9900");
  $("#btn_siguientePaso3").css("border-radius", "20px");
  document.getElementById('btn_siguientePaso3').style['width'] = '100%';

//feito com bootblocks.com.br
  document.getElementById('paso4').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('paso4').style.width = (window.innerWidth * (100 / 100)) + "px";
  $("#paso4").css("text-align", "center");
  document.getElementById('id_do_container17').style['height'] = '100%';
  document.getElementById('id_do_container17').style['width'] = '90%';
  document.getElementById('btn_buscarImagenBanner').style['background-color'] = '#5F71D4';
  document.getElementById('btn_buscarImagenBanner').style['width'] = '100%';

//feito com bootblocks.com.br
  $("#container19").css("text-align", "left");
  $("#container20").css("text-align", "left");
  document.getElementById('btn_buscarImagenPerfil').style['background-color'] = '#5F71D4';
  document.getElementById('btn_buscarImagenPerfil').style['width'] = '100%';
  $("#btn_publicarSitio").css("background-color", "#ff9900");
  $("#btn_publicarSitio").css("border-radius", "20px");
  document.getElementById('btn_publicarSitio').style['width'] = '100%';
  $("#container19").css("text-align", "center");

$("#btn_siguientePaso1").click(function(){
  if (!!$("#box_nombreSitio").val().length) {
    if (!!$("#box_descripcion").val().length) {
      if (($("#" + 'spinner_city').find("option:selected").text()) != 'Selecione') {
        if (($("#" + 'spinner_categoria').find("option:selected").text()) != 'Selecione') {
          localStorage.setItem('nombre',$("#box_nombreSitio").val());
          localStorage.setItem('presentacion',(!$("#box_presentacion").val().length ? 'Explora nuestro perfil o visita nuestras instalaciones.' : $("#box_presentacion").val()));
          localStorage.setItem('descripcion',$("#box_descripcion").val());
          localStorage.setItem('city',($("#" + 'spinner_city').find("option:selected").text()));
          localStorage.setItem('categoria',($("#" + 'spinner_categoria').find("option:selected").text()));
          $("#"+'paso1').hide();
          $("#"+'paso2').show();
        } else {
          Swal.fire({
          icon: 'error',
          title: '',
          text: 'Por favor seleccione una categoria'
          });
        }
      } else {
        Swal.fire({
        icon: 'error',
        title: '',
        text: 'Por favor seleccione una ciudad'
        });
      }
    } else {
      Swal.fire({
      icon: 'error',
      title: 'Existen campos vacios',
      text: 'Los campos con * son obligatorios'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Existen campos vacios',
    text: 'Los campos con * son obligatorios'
    });
  }
});

$("#btn_siguientePaso2").click(function(){
  localStorage.setItem('direccion',$("#box_direccion").val());
  localStorage.setItem('punto_referencia',$("#box_puntoReferencia").val());
  $("#"+'paso2').hide();
  $("#"+'paso3').show();
});

//feito com bootblocks.com.br
  idMarketNew = '';

//feito com bootblocks.com.br
  $("#"+'imgPickerBanner').hide();
  $("#"+'imgPickerPerfil').hide();

$("#btn_siguientePaso3").click(function(){
  if (!!$("#box_contacto").val().length) {
    if (!!$("#box_whatsapp").val().length) {
      localStorage.setItem('contacto',$("#box_contacto").val());
      localStorage.setItem('whatsapp',$("#box_whatsapp").val());
      date = '';
      date = ajax_get('https://api.ipgeolocation.io/timezone?apiKey=ca1fa8e0962e492da0100dabbef911df&tz=America/Bogota');
      date=Object.values(date)
      idMarketNew = 'E' + String(((((((date[4]).replace(':', '')).replace(':', '')).replace(':', '')).replace('-', '')).replace('-', '')).replace(' ', ''));
      database.ref(('AUTHME_MARKET/' + String(localStorage.getItem('user') || ''))).set(localStorage.getItem('user') || '');
      database.ref((['AUTHME_MARKET/',localStorage.getItem('user') || '','/categoria'].join(''))).set(localStorage.getItem('categoria') || '');
      database.ref((['AUTHME_MARKET/',localStorage.getItem('user') || '','/city'].join(''))).set(localStorage.getItem('city') || '');
      database.ref((['AUTHME_MARKET/',localStorage.getItem('user') || '','/id'].join(''))).set(idMarketNew);
      database.ref((['AUTHME_MARKET/',localStorage.getItem('user') || '','/pass'].join(''))).set(localStorage.getItem('pass') || 'nullPass');
      database.ref((['AUTHME_MARKET/',localStorage.getItem('user') || '','/user'].join(''))).set(localStorage.getItem('user') || '');
      tagTemp = '';
      tagTemp = ['CITYS/',localStorage.getItem('city') || '','/MARKETS/',idMarketNew].join('');
      database.ref((String(tagTemp) + '/categoria_global')).set(localStorage.getItem('categoria') || '');
      database.ref((String(tagTemp) + '/contacto')).set(localStorage.getItem('contacto') || '');
      database.ref((String(tagTemp) + '/descripcion')).set(localStorage.getItem('descripcion') || '');
      database.ref((String(tagTemp) + '/id')).set(idMarketNew);
      database.ref((String(tagTemp) + '/nombre')).set(localStorage.getItem('nombre') || '');
      database.ref((String(tagTemp) + '/nomenclatura')).set(localStorage.getItem('direccion') || '');
      database.ref((String(tagTemp) + '/presentacion')).set(localStorage.getItem('presentacion') || '');
      database.ref((String(tagTemp) + '/punto_referencia')).set(localStorage.getItem('punto_referencia') || '');
      database.ref((String(tagTemp) + '/user')).set(localStorage.getItem('user') || '');
      database.ref((String(tagTemp) + '/whatsapp')).set(localStorage.getItem('whatsapp') || '');
      database.ref((String(tagTemp) + '/visibleProducts')).set('false');
      localStorage.setItem('user',localStorage.getItem('user') || '');
      localStorage.setItem('pass',localStorage.getItem('pass') || '');
      Swal.fire({
      title: '¡Sitio publicado!<br>Ahora solo falta subir algunas imágenes.',
      showCancelButton: false,
      confirmButtonText: 'OK',
      cancelButtonText: 'OK',
      }).then((result) => {
      if (result.value) {
      goConfirmarPublicar()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      goRechazarPublicar()
      }
      });
    } else {
      Swal.fire({
      icon: 'error',
      title: 'Campo obligatorio',
      text: 'Por favor ingresa un número de WhatsApp'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Campo obligatorio',
    text: 'Por favor ingresa un número de contacto'
    });
  }
});
function ajax_get(url){
                let retorno;
                $.ajax({
                    url: url,
                    type: "GET",
                    async: false,
                    success: function(data){
                        retorno = data;
                    },
                    error: function(data){
                        retorno = data;
                    }
                });
                return retorno;
            }
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });