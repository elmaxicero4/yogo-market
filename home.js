var url, datos, index, id, condicionImgProducto, user, city, datosProductos, archivoGaleria, archivo1, id1, pass, idMarket, contador, condicionVisibleProduct, idTempGaleria, idProductoTemp, category, Item, datosGaleria, res, valorDatosKeys, contador2, valorDatos;

// Descreva esta função...
function goBuscarImgProducto() {
  document.getElementById('imgPickerProduct').click();
}

// Descreva esta função...
function goPerfil() {
  $("#"+'perfil').show();
  $("#modalPerfil").modal("show");
}

// Descreva esta função...
function goConfigCambiarPass() {
  $("#modalConfiguraciones").modal("hide");
  $("#modalConfigPass").modal("show");
}

// Descreva esta função...
function goCambiarPass() {
  if (!!$("#box_passActual").val().length && !!$("#box_passNueva").val().length) {
    pass = localStorage.getItem('pass') || 'nullPass';
    if ($("#box_passActual").val() == pass) {
      database.ref((['AUTHME_MARKET/',localStorage.getItem('user') || 'nullUser','/pass'].join(''))).set($("#box_passNueva").val());
      localStorage.setItem('pass',$("#box_passNueva").val());
      $("#box_passActual").val('');
      $("#box_passNueva").val('');
      $("#modalConfigPass").modal("hide");
      Swal.fire('¡Contraseña actualizada!');
    } else {
      Swal.fire({
      icon: 'error',
      title: '¡Ups!',
      text: 'La contraseña actual es incorrecta'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Existen campos vacíos',
    text: 'Por favor ingrese los datos solicitados'
    });
  }
}

// Descreva esta função...
function goSubirImagenBanner(url) {
  database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/banner'].join(''))).set(url);
  Swal.fire('¡Imagen de banner publicada!');
  $("#"+'img_banner').attr("src", url);
}

// Descreva esta função...
function goSubirImagenPerfil(url) {
  database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/imagen'].join(''))).set(url);
  Swal.fire('¡Imagen de perfil publicada!');
  $("#"+'img_perfil').attr("src", url);
}

// Descreva esta função...
function goDataUser(datos) {
  city = datos['city'];
  idMarket = datos['id'];
  category = datos['categoria'];
  database.ref((['CITYS/',city,'/MARKETS/',idMarket].join(''))).once("value").then(function(snapshot) {
  if (snapshot.exists()) {
  goDataMarket(snapshot.val());
  } else {
  goDataMarket('nullDatosMarket');
  }
  });
  llamarProducts();
}

// Descreva esta função...
function goGaleria() {
  $("#"+'galeria').hide();
  $("#"+'botonesGaleria').show();
  $("#modalGaleria").modal("show");
}

// Descreva esta função...
function llamarProducts() {
  datosProductos = ajax_get((['https://yogo-9892c-default-rtdb.firebaseio.com/CITYS/',city,'/PRODUCTS.json?orderBy=%22id_market%22&equalTo=%22',idMarket,'%22'].join('')));
  contador = 0;
  for (var Item_index in datosProductos) {
    Item = datosProductos[Item_index];
    contador = contador + 1;
    var card = '<div onclick="goEliminarProducto('+contador+')" class="produtos" id="contador" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_produtos" id="imagem_produtoscontador" style="width:50px; height:50px;" src="'+Item['imagen']+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_produtos" id="titulo_produtoscontador" style="font-weight: bold; font-size: 16px">'+Item['nombre']+'</span><br>'
    card += '<span class="subtitulo_produtos" id="subtitulo_produtoscontador" style="font-size: 13px">'+Item['precio']+'</span><br>'
    card += '<span class="texto_adicional_produtos" id="texto_adicional_produtoscontador" style="font-size: 13px">'+'Presione para eliminar'+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("productosEliminar").innerHTML += card;
    $(".produtos").css("background-color", "#F8F8F8");
    $(".produtos").css("border-radius", "6px");
    $(".produtos").css("box-shadow", "none");
    $(".produtos").css("backgroup-color", "#F8F8F8");
    $(".produtos img").css("border-radius", "6px");
    $(".produtos img").css("width", "100px");
    $(".produtos img").css("height", "100px");
    $(".produtos img").css("background", "url(https://dummyimage.com/600x600/d1cfd1/fff.jpg&text=Producto)");
    $(".subtitulo_produtos").css("font-size", "12px");
    $(".subtitulo_produtos").css("font-style", "normal");
    $(".subtitulo_produtos").css("font-weight", "bold");
    $(".subtitulo_produtos").css("color", "#000000");
    $(".subtitulo_produtos").css("color", "red");
    $(".texto_adicional_produtos").css("color", "#A9A9A9");
  }
}

// Descreva esta função...
function goBuscarImgGaleria() {
  document.getElementById('imgPickerGaleria').click();
}

// Descreva esta função...
function goDataMarket(datos) {
  if (datos['visibleProducts'] == '') {
    if (datos['visibleProducts'] == 'true') {
      condicionVisibleProduct = true;
      $("#btn_mostrarProductos").css("background-color", "#0ABB06");
      database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/visibleProducts'].join(''))).set(true);
    } else {
      condicionVisibleProduct = false;
      $("#btn_mostrarProductos").css("background-color", "#FF0000");
      database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/visibleProducts'].join(''))).set(false);
    }
  } else {
    condicionVisibleProduct = false;
    $("#btn_mostrarProductos").css("background-color", "#FF0000");
    database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/visibleProducts'].join(''))).set(false);
  }
  $("#"+'img_banner').attr("src", datos['banner']);
  $("#"+'img_perfil').attr("src", datos['imagen']);
  $("#lbl_nombre").html(datos['nombre']);
  $("#lbl_categoria").html(category);
  $("#box_nombre").val(datos['nombre']);
  $("#box_presentacion").val(datos['presentacion']);
  $("#box_descripcion").val(datos['descripcion']);
  $("#box_direccion").val(datos['nomenclatura']);
  $("#box_puntoReferencia").val(datos['punto_referencia']);
  $("#box_contacto").val(datos['contacto']);
  $("#box_whatsapp").val(datos['whatsapp']);
  $("#"+'cargando').hide();
  $("#"+'home').show();
}

// Descreva esta função...
function goPublicarGaleria() {
  if (archivoGaleria != '') {
    idTempGaleria = ['G',new Date().getDate(),new Date().getMonth() + 1,new Date().getFullYear(),new Date().getHours(),new Date().getMinutes(),new Date().getSeconds(),new Date().getMilliseconds()].join('');
    firebase_storage_upload_base64((['MARKETS/',idMarket,'/GALLERY/',idTempGaleria,'.jpg'].join('')), goSubirImagenGaleria123, (jic.compress(document.getElementById('img_galeria'), 90, 'jpg').src));
  } else {
    Swal.fire({
    icon: 'error',
    title: '',
    text: 'Por favor suba una imagen'
    });
  }
}

// Descreva esta função...
function goProductos() {
  $("#"+'btn_mostrarProductos').hide();
  $("#"+'productos').hide();
  $("#"+'productosView').show();
  $("#modalProductos").modal("show");
}

// Descreva esta função...
function goPublicarPerfil() {
  if (!!$("#box_nombre").val().length) {
    if (!!$("#box_contacto").val().length) {
      if (!!$("#box_whatsapp").val().length) {
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/nombre'].join(''))).set($("#box_nombre").val());
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/presentacion'].join(''))).set($("#box_presentacion").val());
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/descripcion'].join(''))).set($("#box_descripcion").val());
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/nomenclatura'].join(''))).set($("#box_direccion").val());
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/punto_referencia'].join(''))).set($("#box_puntoReferencia").val());
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/contacto'].join(''))).set($("#box_contacto").val());
        database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/whatsapp'].join(''))).set($("#box_whatsapp").val());
        $("#modalPerfil").modal("hide");
        Swal.fire('¡Datos publicados!');
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Existen campos vacíos',
        text: 'Los campos que contienen * son obligatorios'
        });
      }
    } else {
      Swal.fire({
      icon: 'error',
      title: 'Existen campos vacíos',
      text: 'Los campos que contienen * son obligatorios'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Existen campos vacíos',
    text: 'Los campos que contienen * son obligatorios'
    });
  }
}

// Descreva esta função...
function goPublicarProducto() {
  if (condicionImgProducto == true) {
    if (!!$("#box_nombreProducto").val().length) {
      if (!!$("#box_precioProducto").val().length) {
        if (!!$("#box_descripcionProducto").val().length) {
          datosProductos = '';
          datosProductos = ['P',idMarket,'PP',new Date().getDate(),new Date().getMonth() + 1,new Date().getFullYear(),new Date().getHours(),new Date().getMinutes(),new Date().getSeconds(),new Date().getMilliseconds()].join('');
          firebase_storage_upload_base64((['MARKETS/',idMarket,'/PRODUCTS/',datosProductos,'.jpg'].join('')), goSubirImgProduct, (jic.compress(document.getElementById('img_producto'), 90, 'jpg').src));
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/nombre'].join(''))).set($("#box_nombreProducto").val());
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/precio'].join(''))).set(('$' + String(($("#box_precioProducto").val().replace(',', '')).replace('.', ''))));
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/descripcion'].join(''))).set($("#box_descripcionProducto").val());
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/categoria_global'].join(''))).set(category);
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/id'].join(''))).set(datosProductos);
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/id_market'].join(''))).set(idMarket);
          database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/nombre_market'].join(''))).set($("#lbl_nombre").text());
          condicionImgProducto = false;
        } else {
          Swal.fire({
          icon: 'error',
          title: 'Existen campos vacíos',
          text: 'Por favor ingrese los datos solicitados'
          });
        }
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Existen campos vacíos',
        text: 'Por favor ingrese los datos solicitados'
        });
      }
    } else {
      Swal.fire({
      icon: 'error',
      title: 'Existen campos vacíos',
      text: 'Por favor ingrese los datos solicitados'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Existen campos vacíos',
    text: 'Por favor suba una imagen'
    });
  }
}

// Descreva esta função...
function goEliminarProducto(index) {
  res=Object.keys(datosProductos)
  idProductoTemp = res[(index - 1)];
  Swal.fire({
  title: '¿Quieres eliminar este producto?',
  showCancelButton: true,
  confirmButtonText: 'SI',
  cancelButtonText: 'NO',
  }).then((result) => {
  if (result.value) {
  goEliminarProductoOpcion()
  } else if (result.dismiss === Swal.DismissReason.cancel) {
  goCancelarEliminarProductoOpcion()
  }
  });
}

// Descreva esta função...
function goSubirImagenGaleria123(url) {
  database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/gallery/',idTempGaleria].join(''))).set(url);
  $("#"+'img_galeria').attr("src", 'https://dummyimage.com/1250x1250/c7c7c7/ffffff.jpg&text=Imagen');
  idTempGaleria = '';
  archivoGaleria = '';
  $("#modalGaleria").modal("hide");
  Swal.fire('¡Imagen publicada!');
}

// Descreva esta função...
function goEliminarImgGaleriaSelect(id) {
  id1 = id;
  Swal.fire({
  title: '¿Quieres eliminar la imagen?',
  showCancelButton: true,
  confirmButtonText: 'SI',
  cancelButtonText: 'NO',
  }).then((result) => {
  if (result.value) {
  goEliminarGaleriaSI()
  } else if (result.dismiss === Swal.DismissReason.cancel) {
  goEliminarGaleriaNO()
  }
  });
}

// Descreva esta função...
function goEliminarProductoOpcion() {
  database.ref((['CITYS/',city,'/PRODUCTS/',idProductoTemp].join(''))).remove();
  firebase_storage_delete((['MARKETS/',idMarket,'/PRODUCTS/',idProductoTemp,'.jpg'].join('')), goRemovidoImagenProduct);
}

// Descreva esta função...
function goEliminarGaleriaSI() {
  database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/gallery/',valorDatosKeys[(id1 - 1)]].join(''))).remove();
  firebase_storage_delete((['MARKETS/',idMarket,'/GALLERY/',valorDatosKeys[(id1 - 1)],'.jpg'].join('')), goEliminarGaleriaFinalizado);
}

// Descreva esta função...
function goSubirImgProduct(url) {
  database.ref((['CITYS/',city,'/PRODUCTS/',datosProductos,'/imagen'].join(''))).set(url);
  Swal.fire({
  title: '¡Producto publicado!',
  showCancelButton: false,
  confirmButtonText: 'OK',
  cancelButtonText: '',
  }).then((result) => {
  if (result.value) {
  goConfirmarProductoPublicado()
  } else if (result.dismiss === Swal.DismissReason.cancel) {
  goEliminarProductoPublicado()
  }
  });
}

// Descreva esta função...
function goConfigCambiarUser() {
  $("#modalConfiguraciones").modal("hide");
  $("#modalConfigUser").modal("show");
}

// Descreva esta função...
function goRemovidoImagenProduct() {
  Swal.fire({
  title: '¡Producto eliminado!',
  showCancelButton: false,
  confirmButtonText: 'OK',
  cancelButtonText: '',
  }).then((result) => {
  if (result.value) {
  goConfirmarProductoEliminar()
  } else if (result.dismiss === Swal.DismissReason.cancel) {
  goCancelarProductoEliminar()
  }
  });
}

// Descreva esta função...
function goEliminarGaleriaFinalizado() {
  Swal.fire({
  title: '¡Imagen eliminada!',
  showCancelButton: false,
  confirmButtonText: 'OK',
  cancelButtonText: '',
  }).then((result) => {
  if (result.value) {
  goSi37589()
  } else if (result.dismiss === Swal.DismissReason.cancel) {
  goNo37589()
  }
  });
}

// Descreva esta função...
function goConfirmarProductoPublicado() {
  window.location.href = "home.php";}

// Descreva esta função...
function goConfirmarProductoEliminar() {
  window.location.href = "home.php";}

// Descreva esta função...
function goCambiarUser() {
  if (!!$("#box_usuarioActual").val().length) {
    if (!!$("#box_usuarioNuevo").val().length) {
      if (!!$("#box_contraseñaConfigUser").val().length) {
        if ($("#box_usuarioActual").val() == localStorage.getItem('user') || 'nullUser') {
          if ($("#box_contraseñaConfigUser").val() == localStorage.getItem('pass') || 'nullPass') {
            if ($("#box_usuarioNuevo").val() != localStorage.getItem('user') || 'nullUser') {
              database.ref(('AUTHME_MARKET/' + String($("#box_usuarioNuevo").val()))).once("value").then(function(snapshot) {
              if (snapshot.exists()) {
              goVerificarDisponibilidadUserMarketConfig(snapshot.val());
              } else {
              goVerificarDisponibilidadUserMarketConfig('null');
              }
              });
            } else {
              Swal.fire({
              icon: 'error',
              title: '¡Ups!',
              text: 'No hay necesidad realizar esta acción'
              });
            }
          } else {
            Swal.fire({
            icon: 'error',
            title: '¡Ups!',
            text: 'Contraseña actual incorrecta'
            });
          }
        } else {
          Swal.fire({
          icon: 'error',
          title: '¡Ups!',
          text: 'Usuario actual incorrecto'
          });
        }
      } else {
        Swal.fire({
        icon: 'error',
        title: 'Existen campos vacíos',
        text: 'Por favor ingrese los campos solicitados'
        });
      }
    } else {
      Swal.fire({
      icon: 'error',
      title: 'Existen campos vacíos',
      text: 'Por favor ingrese los campos solicitados'
      });
    }
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Existen campos vacíos',
    text: 'Por favor ingrese los campos solicitados'
    });
  }
}

// Descreva esta função...
function goConfiguraciones() {
  $("#modalConfiguraciones").modal("show");
}

// Descreva esta função...
function goSi37589() {
  window.location.href = "home.php";}

// Descreva esta função...
function goLeave() {
  localStorage.clear();
  window.location.href = "index.php";}

// Descreva esta função...
function goBtnProductos() {
  if (condicionVisibleProduct == true) {
    condicionVisibleProduct = false;
    $("#btn_mostrarProductos").css("background-color", "#FF0000");
    database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/visibleProducts'].join(''))).set(false);
  } else {
    condicionVisibleProduct = true;
    $("#btn_mostrarProductos").css("background-color", "#0ABB06");
    database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/visibleProducts'].join(''))).set(true);
    database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/visibleProducts'].join(''))).set(true);
  }
}

// Descreva esta função...
function goVerificarDisponibilidadUserMarketConfig(datos) {
  if (datos == 'null') {
    database.ref((['AUTHME_MARKET/',$("#box_usuarioNuevo").val(),'/id'].join(''))).set(idMarket);
    database.ref((['AUTHME_MARKET/',$("#box_usuarioNuevo").val(),'/city'].join(''))).set(city);
    database.ref((['AUTHME_MARKET/',$("#box_usuarioNuevo").val(),'/categoria'].join(''))).set(category);
    database.ref((['AUTHME_MARKET/',$("#box_usuarioNuevo").val(),'/user'].join(''))).set($("#box_usuarioNuevo").val());
    database.ref((['AUTHME_MARKET/',$("#box_usuarioNuevo").val(),'/pass'].join(''))).set($("#box_contraseñaConfigUser").val());
    database.ref((['CITYS/',city,'/MARKETS/',idMarket,'/user'].join(''))).set($("#box_usuarioNuevo").val());
    database.ref(('AUTHME_MARKET/' + String($("#box_usuarioActual").val()))).remove();
    user = $("#box_usuarioNuevo").val();
    localStorage.setItem('user',$("#box_usuarioNuevo").val());
    $("#box_usuarioActual").val('');
    $("#box_usuarioNuevo").val('');
    $("#box_contraseñaConfigUser").val('');
    $("#modalConfigUser").modal("hide");
    Swal.fire('¡Usuario actualizado!');
  } else {
    Swal.fire({
    icon: 'error',
    title: 'Usuario nuevo no disponible',
    text: 'Por favor ingrese un usuario distinto'
    });
  }
}


$("#btn_eliminarProductos").click(function(){
  $("#modalEliminarProductos").modal("show");
});

//feito com bootblocks.com.br
  document.getElementById('btn_eliminarProductos').style['width'] = '100%';
  document.getElementById('btn_añadirProductos').style['width'] = '100%';
  document.getElementById('btn_mostrarProductos').style['width'] = '100%';
  $("#"+'productos').hide();
  $("#"+'btn_volverProductos').hide();
  document.getElementById('btn_publicarProducto').style['width'] = '80%';
  document.getElementById('btn_publicarGaleria').style['width'] = '80%';
  document.getElementById('removerGaleria').style['width'] = '100%';

//feito com bootblocks.com.br
  document.getElementById('botonesGaleria').style['width'] = '100%';
  document.getElementById('btn_goAñadirImagenGaleria').style['width'] = '80%';
  document.getElementById('btn_goEliminarImagenGaleria').style['width'] = '80%';
  $("#botonesGaleria").css("text-align", "center");
  document.getElementById('botongaleriacontainer').style['width'] = '100%';
  $("#botongaleriacontainer").css("text-align", "center");
  $("#"+'imgPickerBanner').hide();
  $("#"+'imgPickerPerfil').hide();

$("#btn_goAñadirImagenGaleria").click(function(){
  $("#"+'botonesGaleria').hide();
  $("#"+'galeria').show();
});

//feito com bootblocks.com.br
  $("#"+'imgPickerProduct').hide();
  document.getElementById('container437').style['display'] = 'flex';
  document.getElementById('container437').style['align-items'] = 'center';
  document.getElementById('img_producto').style.height = (window.innerHeight * (16 / 100)) + "px";
  document.getElementById('img_producto').style.width = (window.innerWidth * (30 / 100)) + "px";
  $("#img_producto").css("border-radius", "12px");
  document.getElementById('img_producto').style['background-color'] = '#E9E9E9';
  document.getElementById('img_producto').style['font-size'] = '0px';

//feito com bootblocks.com.br
  document.getElementById('cargando').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('cargando').style.width = (window.innerWidth * (100 / 100)) + "px";

//feito com bootblocks.com.br
  $("#"+'home').hide();
  $("#"+'perfil').show();
  $("#"+'galeria').show();
  $("#"+'productos').show();
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
  condicionImgProducto = false;

$("#imgPickerProduct").change(function(){
  condicionImgProducto = true;
  archivo1 = ($(this).prop("files")[0]);
  $("#"+'img_producto').attr("src", (URL.createObjectURL(archivo1)));
});

$("#img_banner").click(function(){
  document.getElementById('imgPickerBanner').click();
});

//feito com bootblocks.com.br
  document.getElementById('home').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('home').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('img_banner').style.height = (window.innerHeight * (20 / 100)) + "px";
  document.getElementById('img_banner').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('img_perfil').style.height = (window.innerHeight * (15 / 100)) + "px";
  document.getElementById('img_perfil').style.width = (window.innerWidth * (30 / 100)) + "px";
  $("#btn_mostrarProductos").css("background-color", "#FF0000");
  document.getElementById('perfil').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('perfil').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('perfil').style.height = "auto";
  document.getElementById('perfil').style.width = "auto";
  document.getElementById('galeria').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('galeria').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('galeria').style.height = "auto";
  document.getElementById('galeria').style.width = "auto";
  document.getElementById('productos').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('productos').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('productos').style.height = "auto";
  document.getElementById('productos').style.width = "auto";
  document.getElementById('configuraciones').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('configuraciones').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('configuraciones').style.height = "auto";
  document.getElementById('configuraciones').style.width = "auto";
  document.getElementById('configUsuario').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('configUsuario').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('configUsuario').style.height = "auto";
  document.getElementById('configUsuario').style.width = "auto";
  document.getElementById('configPass').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('configPass').style.width = (window.innerWidth * (100 / 100)) + "px";
  document.getElementById('configPass').style.height = "auto";
  document.getElementById('configPass').style.width = "auto";
  document.getElementById('subPerfil').style.height = (window.innerHeight * (100 / 100)) + "px";
  document.getElementById('subPerfil').style.width = (window.innerWidth * (80 / 100)) + "px";
  document.getElementById('subPerfil').style.height = "auto";
  $("#configUsuario").css("text-align", "center");
  $("#configPass").css("text-align", "center");
  $("#perfil").css("text-align", "center");
  $("#productos").css("text-align", "center");
  $("#configuraciones").css("text-align", "center");
  document.getElementById('img_banner').style['object-fit'] = 'cover';
  document.getElementById('img_perfil').style['object-fit'] = 'cover';
  document.getElementById('img_perfil').style['border-radius'] = '12px';
  document.getElementById('img_perfil').style['border-radius'] = '12px';
  $("#img_perfil").css("left", "15px");
  $("#img_perfil").css("top", "100px");
  $("#img_perfil").css("z-index", "0");
  $("#img_perfil").css("position", "fixed");
  $("#img_perfil").css("display", "block");
  document.getElementById('lbl_nombre').style['font-size'] = '1.5rem';
  $("#lbl_nombre").css("margin-left", "150px");
  $("#lbl_nombre").css("margin-right", "0px");
  $("#lbl_nombre").css("margin-top", "0px");
  $("#lbl_nombre").css("margin-bottom", "0px");
  $("#lbl_categoria").css("margin-left", "150px");
  $("#lbl_categoria").css("margin-right", "0px");
  $("#lbl_categoria").css("margin-top", "0px");
  $("#lbl_categoria").css("margin-bottom", "0px");
  document.getElementById('lbl_categoria').style['color'] = 'red';
  document.getElementById('lbl_btn_perfil').style['width'] = '80%';
  document.getElementById('lbl_btn_galeria').style['width'] = '80%';
  document.getElementById('lbl_btn_productos').style['width'] = '80%';
  document.getElementById('lbl_btn_configuraciones').style['width'] = '80%';
  document.getElementById('lbl_btn_leave').style['width'] = '80%';
  $("#containerBotones").css("text-align", "center");
  $("#lbl_btn_configuraciones").css("background-color", "#ff9900");
  $("#lbl_btn_leave").css("background-color", "#ff0000");
  document.getElementById('btn_config_cambiarUser').style['width'] = '80%';
  document.getElementById('btn_config_cambiarPass').style['width'] = '80%';

$("#img_perfil").click(function(){
  document.getElementById('imgPickerPerfil').click();
});

$("#imgPickerBanner").change(function(){
  firebase_storage_upload_file((['MARKETS/',idMarket,'/banner.jpg'].join('')), goSubirImagenBanner, ($(this).prop("files")[0]));
});

$("#imgPickerPerfil").change(function(){
  firebase_storage_upload_file((['MARKETS/',idMarket,'/perfil.jpg'].join('')), goSubirImagenPerfil, ($(this).prop("files")[0]));
});

//feito com bootblocks.com.br
  user = localStorage.getItem('user') || 'nullMarketUser';
  pass = localStorage.getItem('pass') || 'nullMarketPass';
  database.ref(('AUTHME_MARKET/' + String(user))).once("value").then(function(snapshot) {
  if (snapshot.exists()) {
  goDataUser(snapshot.val());
  } else {
  goDataUser('nullMarketUser');
  }
  });

$("#btn_añadirProductos").click(function(){
  $("#"+'productosView').hide();
  $("#"+'productos').show();
  $("#"+'btn_volverProductos').show();
});

$("#btn_volverProductos").click(function(){
  $("#"+'btn_volverProductos').hide();
  $("#"+'productos').hide();
  $("#"+'productosView').show();
});

//feito com bootblocks.com.br
  $("#"+'imgPickerGaleria').hide();
  document.getElementById('container437a').style['display'] = 'flex';
  document.getElementById('container437a').style['align-items'] = 'center';
  document.getElementById('img_galeria').style.height = (window.innerHeight * (16 / 100)) + "px";
  document.getElementById('img_galeria').style.width = (window.innerWidth * (30 / 100)) + "px";
  $("#img_galeria").css("border-radius", "12px");
  document.getElementById('img_galeria').style['background-color'] = '#E9E9E9';
  document.getElementById('img_galeria').style['font-size'] = '0px';

$("#btn_goEliminarImagenGaleria").click(function(){
  $("#"+'botonesGaleria').hide();
  $("#"+'removerGaleria').show();
  datosGaleria = ajax_get((['https://yogo-9892c-default-rtdb.firebaseio.com/CITYS/',city,'/MARKETS/',idMarket,'/gallery.json'].join('')));
  valorDatos=Object.values(datosGaleria)
  valorDatosKeys=Object.keys(datosGaleria)
  contador2 = 0;
  for (var Item_index2 in valorDatos) {
    Item = valorDatos[Item_index2];
    contador2 = contador2 + 1;
    var card = '<div onclick="goEliminarImgGaleriaSelect('+contador2+')" class="imgGaleria" id="contador2" style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">'
    card += '<div class="row">'
    card += '<div class="col-4">'
    card += '<img class="imagem_imgGaleria" id="imagem_imgGaleriacontador2" style="width:50px; height:50px;" src="'+Item+'" alt="imagem">'
    card += '</div>'
    card += '<div class="col-8">'
    card += '<span class="titulo_imgGaleria" id="titulo_imgGaleriacontador2" style="font-weight: bold; font-size: 16px">'+''+'</span><br>'
    card += '<span class="subtitulo_imgGaleria" id="subtitulo_imgGaleriacontador2" style="font-size: 13px">'+''+'</span><br>'
    card += '<span class="texto_adicional_imgGaleria" id="texto_adicional_imgGaleriacontador2" style="font-size: 13px">'+'Presione para eliminar'+'</span>'
    card += '</div>'
    card += '</div>'
    card +=' </div>'
    document.getElementById("removerGaleria").innerHTML += card;
    $(".imgGaleria img").css("width", "100px");
    $(".imgGaleria img").css("height", "100px");
  }
});

//feito com bootblocks.com.br
  archivoGaleria = '';

$("#imgPickerGaleria").change(function(){
  archivoGaleria = ($(this).prop("files")[0]);
  $("#"+'img_galeria').attr("src", (URL.createObjectURL(archivoGaleria)));
});

//feito com bootblocks.com.br
  archivo1 = '';
  $("#btn_volverProductos").css("background-color", "#ff9900");

//feito com bootblocks.com.br
  document.getElementById('container1').style['width'] = '100%';
  $("#container1").css("text-align", "left");
  document.getElementById('container1').style['padding'] = '0';
  document.getElementById('container2').style['width'] = '100%';
  $("#container2").css("text-align", "left");
  document.getElementById('container2').style['padding'] = '0';
  document.getElementById('container3').style['width'] = '100%';
  $("#container3").css("text-align", "left");
  document.getElementById('container3').style['padding'] = '0';
  document.getElementById('container4').style['width'] = '100%';
  $("#container4").css("text-align", "left");
  document.getElementById('container4').style['padding'] = '0';
  document.getElementById('container5').style['width'] = '100%';
  $("#container5").css("text-align", "left");
  document.getElementById('container5').style['padding'] = '0';
  document.getElementById('container6').style['width'] = '100%';
  $("#container6").css("text-align", "left");
  document.getElementById('container6').style['padding'] = '0';
  document.getElementById('container7').style['width'] = '100%';
  $("#container7").css("text-align", "left");
  document.getElementById('container7').style['padding'] = '0';
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
            }function firebase_storage_upload_file(file_name, function_success, file) {
                let arquivo = file;
                //upload file
                let storage = firebase.storage();
                let storageRef = storage.ref();
                //nome do arquivo
                let name = file_name;
                //cria um arquivo com o nome
                let fileRef = storageRef.child(name);
                //faz o upload do arquivo
                let uploadTask = fileRef.put(arquivo);
                //monitora o progresso do upload
                uploadTask.on("state_changed", function(snapshot) {
                }, function(error) {
                  console.log(error);
                }, function() {
                  // Handle successful uploads on complete
                  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    function_success(downloadURL);
                  });
                });
              };function firebase_storage_upload_base64(file_name, function_success, file) {
                let arquivo = file;
                
                //upload file
                let storage = firebase.storage();
                let storageRef = storage.ref();
                //nome do arquivo
                let name = file_name;
                //cria um arquivo com o nome
                let fileRef = storageRef.child(name);
                //faz o upload do arquivo
                let uploadTask = fileRef.putString(arquivo, "data_url");
                //monitora o progresso do upload
                uploadTask.on("state_changed", function(snapshot) {
                }, function(error) {
                  console.log(error);
                }, function() {
                  // Handle successful uploads on complete
                  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    function_success(downloadURL);
                  });
                });
              };function firebase_storage_delete(file_name, function_success) {
                let storage = firebase.storage();
                let storageRef = storage.ref();
                let desertRef = storageRef.child(file_name);
                desertRef.delete().then(function() {
                  if(function_success != null && function_success != ""){
                    function_success();
                  }
                }).catch(function(error) {
                  console.log(error);
                });
              };
        $(document).ready(function(){
            $("#loading-page-bb").css("opacity", "1");
        });