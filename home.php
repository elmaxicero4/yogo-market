<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="theme-color" content="#5F71D4">
            <title>Yogo Market</title>
            <!-- bootstrap css -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            <!-- bootstrap icons -->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
            <!-- sweetalert -->
            <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>
            
            </head>
        <body>
        <div id="loading-page-bb" style="opacity: 0; height: 100%;">
            <?php
?>

<!-- add_compress_image -->
<!-- add_firebase_storage -->

  <div id="cargando" style="background-color: #ffffff; height: 100px; width: 100px;">
  </div>



  <div class="modal fade" id="modalProductos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Productos</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div class="container" id="productosView">
      <div style="width:10px;height:20px;"></div>
      <button type="button" onclick="goAñadirProductos1100()" id='btn_añadirProductos' class="btn btn-success">Añadir</button>
      <div style="width:10px;height:20px;"></div>
      <button type="button" onclick="goEditarProductos()" id='btn_eliminarProductos' class="btn btn-success">Eliminar</button>
      <div style="width:10px;height:20px;"></div>
      <button type="button" onclick="goBtnProductos()" id='btn_mostrarProductos' class="btn btn-primary">Mostrar productos</button>
    </div>
    <div id="productos" style="background-color: #ffffff; height: 100px; width: 100px;">
      <div style="width:10px;height:20px;"></div>
      <div class="container" id="container437">
        <div class="container" id="container67">
          <span class="meu_texto" id="lbl_5657" style="font-size: 16px; color: #000000;  ">Agregar imagen</span>
          <input type="file" class="meu-seletor" id="imgPickerProduct">
          <div style="width:10px;height:10px;"></div>
          <button type="button" onclick="goBuscarImgProducto()" id='btn_buscarImgProducto' class="btn btn-primary">Buscar imagen</button>
        </div>
        <div class="container" id="container8056">
          <img src="https://dummyimage.com/1250x1250/c7c7c7/ffffff.jpg&text=Imagen" style="height: 100px; width: 100px;" id="img_producto"></div>
      </div>
      <div style="width:10px;height:20px;"></div>
      <input type="text" class="form-control" id="box_nombreProducto" placeholder="Nombre">
      <div style="width:10px;height:20px;"></div>
      <input type="text" class="form-control" id="box_precioProducto" placeholder="Precio">
      <div style="width:10px;height:20px;"></div>
      <input type="text" class="form-control" id="box_descripcionProducto" placeholder="Descripción">
      <div style="width:5px;height:20px;"></div>
      <button type="button" onclick="goPublicarProducto()" id='btn_publicarProducto' class="btn btn-primary">Publicar</button>
      <div style="width:5px;height:15px;"></div>
    </div>
        </div>
        <div class="modal-footer">
    <button type="button" onclick="goVolverProductos()" id='btn_volverProductos' class="btn btn-primary">Volver</button>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modalPerfil" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Perfil</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div id="perfil" style="background-color: #ffffff; height: 100px; width: 100px;">
      <div style="width:5px;height:15px;"></div>
      <div class="container" id="subPerfil">
        <div class="container" id="container1">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">Nombre del sitio *</span>
        </div>
        <input type="text" class="form-control" id="box_nombre" placeholder="Nombre del sitio *">
        <div style="width:5px;height:20px;"></div>
        <div class="container" id="container2">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">Presentación</span>
        </div>
        <input type="text" class="form-control" id="box_presentacion" placeholder="Presentación">
        <div style="width:5px;height:20px;"></div>
        <div class="container" id="container3">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">Descripción</span>
        </div>
        <input type="text" class="form-control" id="box_descripcion" placeholder="Descripción">
        <div style="width:5px;height:20px;"></div>
        <div class="container" id="container4">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">Dirección</span>
        </div>
        <input type="text" class="form-control" id="box_direccion" placeholder="Dirección">
        <div style="width:5px;height:20px;"></div>
        <div class="container" id="container5">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">Punto de referencia</span>
        </div>
        <input type="text" class="form-control" id="box_puntoReferencia" placeholder="Punto de referencia">
        <div style="width:5px;height:20px;"></div>
        <div class="container" id="container6">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">Contacto *</span>
        </div>
        <input type="text" class="form-control" id="box_contacto" placeholder="Contacto *">
        <div style="width:5px;height:20px;"></div>
        <div class="container" id="container7">
          <span class="meu_texto" id="lbl_titleBox" style="font-size: 16px; color: #999999;  ">WhatsApp *</span>
        </div>
        <input type="text" class="form-control" id="box_whatsapp" placeholder="WhatsApp *">
        <div style="width:5px;height:10px;"></div>
      </div>
    </div>
        </div>
        <div class="modal-footer">
    <button type="button" onclick="goPublicarPerfil()" id='btn_publicarPerfil' class="btn btn-primary">Publicar</button>
        </div>
      </div>
    </div>
  </div>



  <div id="home" style="background-color: #ffffff; height: 100px; width: 100px;">
    <input type="file" class="meu-seletor" id="imgPickerBanner">
    <img src="https://dummyimage.com/1250x600/dbdbdb/ffffff.jpg&text=Subir+imagen" style="height: 20%; width: auto;" id="img_banner"><input type="file" class="meu-seletor" id="imgPickerPerfil">
    <img src="https://dummyimage.com/1250x1250/a3a0a3/ffffff.jpg&text=Subir+imagen" style="height: 100px; width: 100px;" id="img_perfil"><span class="meu_texto" id="lbl_nombre" style="font-size: 16px; color: #000000;  "></span>
    <span class="meu_texto" id="lbl_categoria" style="font-size: 16px; color: #ff0000;  "></span>
    <div style="width:5px;height:7%;"></div>
    <div class="container" id="containerBotones">
      <button type="button" onclick="goPerfil()" id='lbl_btn_perfil' class="btn btn-primary">Perfil</button>
      <div style="width:5px;height:15px;"></div>
      <button type="button" onclick="goGaleria()" id='lbl_btn_galeria' class="btn btn-primary">Galeria</button>
      <div style="width:5px;height:15px;"></div>
      <button type="button" onclick="goProductos()" id='lbl_btn_productos' class="btn btn-primary">Productos</button>
      <div style="width:5px;height:15px;"></div>
      <button type="button" onclick="goConfiguraciones()" id='lbl_btn_configuraciones' class="btn btn-primary">Configuraciones</button>
      <div style="width:5px;height:15px;"></div>
      <button type="button" onclick="goLeave()" id='lbl_btn_leave' class="btn btn-primary">Cerrar sesión</button>
    </div>
  </div>



  <div class="modal fade" id="modalEliminarProductos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Eliminar producto</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div class="container" id="productosEliminar">
    </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>


<!-- add_compress_image -->

  <div class="modal fade" id="modalGaleria" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Galeria</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div class="container" id="removerGaleria">
    </div>
    <div class="container" id="botonesGaleria">
      <button type="button" onclick="goAñadirImagenGaleria()" id='btn_goAñadirImagenGaleria' class="btn btn-success">Publicar imagen</button>
      <div style="width:10px;height:20px;"></div>
      <button type="button" onclick="goEliminarImagenGaleria()" id='btn_goEliminarImagenGaleria' class="btn btn-success">Eliminar imagen</button>
    </div>
    <div id="galeria" style="background-color: #ffffff; height: 100px; width: 100px;">
      <div class="container" id="container437a">
        <div class="container" id="container67a">
          <span class="meu_texto" id="lbl_5657" style="font-size: 16px; color: #000000;  ">Agregar imagen</span>
          <input type="file" class="meu-seletor" id="imgPickerGaleria">
          <div style="width:10px;height:10px;"></div>
          <button type="button" onclick="goBuscarImgGaleria()" id='btn_buscarImgGaleria' class="btn btn-primary">Buscar imagen</button>
        </div>
        <div class="container" id="container8056a">
          <img src="https://dummyimage.com/1250x1250/c7c7c7/ffffff.jpg&text=Imagen" style="height: 100px; width: 100px;" id="img_galeria"></div>
      </div>
      <div style="width:10px;height:30px;"></div>
      <div class="container" id="botongaleriacontainer">
        <button type="button" onclick="goPublicarGaleria()" id='btn_publicarGaleria' class="btn btn-primary">Publicar</button>
      </div>
    </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modalConfiguraciones" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Configuraciones</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div id="configuraciones" style="background-color: #ffffff; height: 100px; width: 100px;">
      <button type="button" onclick="goConfigCambiarUser()" id='btn_config_cambiarUser' class="btn btn-primary">Cambiar usuario</button>
      <div style="width:10px;height:20px;"></div>
      <button type="button" onclick="goConfigCambiarPass()" id='btn_config_cambiarPass' class="btn btn-primary">Cambiar contraseña</button>
    </div>
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modalConfigUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cambiar usuario</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div id="configUsuario" style="background-color: #ffffff; height: 100px; width: 100px;">
      <input type="text" class="form-control" id="box_usuarioActual" placeholder="Usuario actual">
      <div style="width:10px;height:20px;"></div>
      <input type="text" class="form-control" id="box_usuarioNuevo" placeholder="Usuario nuevo">
      <div style="width:10px;height:20px;"></div>
      <input type="text" class="form-control" id="box_contraseñaConfigUser" placeholder="Contraseña">
    </div>
        </div>
        <div class="modal-footer">
    <button type="button" onclick="goCambiarUser()" id='btn_cambiarUser' class="btn btn-primary">Cambiar usuario</button>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modalConfigPass" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Cambiar contraseña</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
    <div id="configPass" style="background-color: #ffffff; height: 100px; width: 100px;">
      <input type="text" class="form-control" id="box_passActual" placeholder="Contraseña actual">
      <div style="width:10px;height:20px;"></div>
      <input type="text" class="form-control" id="box_passNueva" placeholder="Contraseña nueva">
    </div>
        </div>
        <div class="modal-footer">
    <button type="button" onclick="goCambiarPass()" id='btn_cambiarPass' class="btn btn-primary">Cambiar contraseña</button>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="modalMisProductos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Mis productos</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>

            <!-- bootstrap js -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <!-- jquery -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.js" integrity="sha512-CX7sDOp7UTAq+i1FYIlf9Uo27x4os+kGeoT7rgwvY+4dmjqV0IuE/Bl5hVsjnQPQiTOhAX1O2r2j5bjsFBvv/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            <!-- firebase-app -->
            <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-app.js"></script>
            <!-- firebase-database -->
            <script src="https://www.gstatic.com/firebasejs/7.21.0/firebase-database.js"></script>
            <!-- firebase-auth -->
            <script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
            <!-- Firebase storage -->
        <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-storage.js"></script>
        <!-- Compress image -->
        <script src="https://bootsites.com.br/cdn/compress-image/compress-img.js"></script>
        <!-- codigo javascript -->
            <script src= "home.js"> </script>
        </div>
        </body>
        </html>