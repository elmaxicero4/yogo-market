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


  <div id="pasos" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container1">
      <span class="_lbl1" id="lbl1" style="font-size: 25px; color: #666666; font-weight: bold; ">Crear cuenta<br></span>
      <span class="_lbl2" id="lbl2" style="font-size: 18px; color: #999999;  ">Completa tu perfil para publicar tu sitio</span>
    </div>
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="containerPrincipalCards">
      <div class="_card1" id="card1"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
        <div class="row " id="Linha">
          <span class="_lbl3" id="lbl3" style="font-size: 16px; color: #33cc00; font-weight: bold; ">Credenciales</span>
          <span class="_lbl4" id="lbl4" style="font-size: 13px; color: #33cc00;  ">Ingresa usuario y contraseña</span>
        </div>
      </div>
      <div style="width:10px;height:10px;"></div>
      <div class="_card2" id="card2"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
        <div class="row " id="Linha">
          <span class="_lbl3" id="lbl3" style="font-size: 16px; color: #999999; font-weight: bold; ">Datos basicos</span>
          <span class="_lbl4" id="lbl4" style="font-size: 13px; color: #999999;  ">Nombre, presentación, descripción y categoria de tu sitio.</span>
        </div>
      </div>
      <div style="width:10px;height:10px;"></div>
      <div class="_card1" id="card3"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
        <div class="row " id="Linha">
          <span class="_lbl3" id="lbl3" style="font-size: 16px; color: #999999; font-weight: bold; ">Punto fisico</span>
          <span class="_lbl4" id="lbl4" style="font-size: 13px; color: #999999;  ">Dirección y punto de referencia.</span>
        </div>
      </div>
      <div style="width:10px;height:10px;"></div>
      <div class="_card1" id="card4"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
        <div class="row " id="Linha">
          <span class="_lbl3" id="lbl3" style="font-size: 16px; color: #999999; font-weight: bold; ">Numeros de contacto</span>
          <span class="_lbl4" id="lbl4" style="font-size: 13px; color: #999999;  ">Numero de contacto y WhatsApp.</span>
        </div>
      </div>
      <div style="width:10px;height:10px;"></div>
      <div class="_card1" id="card5"  style="width:98%; margin:2px; padding: 5px; border-radius: 5px; box-shadow: 7px 7px 13px 0px rgba(50, 50, 50, 0.22);">
        <div class="row " id="Linha">
          <span class="_lbl3" id="lbl3" style="font-size: 16px; color: #999999; font-weight: bold; ">Imagenes</span>
          <span class="_lbl4" id="lbl4" style="font-size: 13px; color: #999999;  ">Imagen de banner y perfil.</span>
        </div>
      </div>
      <div style="width:10px;height:40px;"></div>
      <div class="container" id="conteinerLblIniciarRegister">
        <button type="button" onclick="iniciarRegister()" id='btn_inciarRegister' class="btn btn-primary">Iniciar</button>
      </div>
      <div style="width:10px;height:20px;"></div>
    </div>
  </div>



  <div id="paso1" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container1">
      <span class="_lbl1" id="lbl1" style="font-size: 25px; color: #666666; font-weight: bold; ">Datos basicos</span>
    </div>
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container">
      <input type="text" class="form-control" id="box_nombreSitio" placeholder="Nombre del sitio *">
      <div style="width:10px;height:15px;"></div>
      <div class="container" id="container133">
        <span class="_lbl_city" id="lbl_city" style="font-size: 16px; color: #999999;  ">Presentación</span>
        <textarea class="form-control" id="box_presentacion" rows="3"></textarea></div>
      <div style="width:10px;height:15px;"></div>
      <div class="container" id="container122">
        <span class="_lbl_city" id="lbl_city" style="font-size: 16px; color: #999999;  ">Descripción <font color="red">*</font></span>
        <textarea class="form-control" id="box_descripcion" rows="5"></textarea></div>
      <div style="width:10px;height:15px;"></div>
      <div class="container" id="container13">
        <span class="_lbl_city" id="lbl_city" style="font-size: 16px; color: #000000;  ">Ciudad <font color="red">*</font></span>
        <select class="form-select" id="spinner_city">
        <option value="0">Selecione</option>
        <?php foreach((array('Sincelejo', 'Santa Marta')) as $elemento){ ?>
        <option value="<?php echo $elemento; ?>"><?php echo $elemento; ?></option>
        <?php } ?>
        </select>
      </div>
      <div style="width:10px;height:15px;"></div>
      <div class="container" id="container14">
        <span class="_lbl_categoria" id="lbl_categoria" style="font-size: 16px; color: #000000;  ">Categoria <font color="red">*</font></span>
        <select class="form-select" id="spinner_categoria">
        <option value="0">Selecione</option>
        <?php foreach((array('Páginas', 'Artesanías', 'Barberías', 'Bisuterías', 'Carnicerías', 'Droguerías', 'Entretenimiento', 'Escuelas de manejo', 'Ferreterías', 'Gimnasios', 'Heladerías', 'Hoteles', 'Licoreras', 'Panaderías', 'Parqueaderos', 'Peluquerías', 'Publicidad', 'Puntos fríos', 'Restaurantes', 'Salsamentarías', 'Talleres', 'Textiles', 'Tiendas de abarrotes', 'Tiendas de repuestos', 'Tiendas de tecnología', 'Variedades', 'Ópticas')) as $elemento){ ?>
        <option value="<?php echo $elemento; ?>"><?php echo $elemento; ?></option>
        <?php } ?>
        </select>
      </div>
      <div style="width:10px;height:70px;"></div>
      <button type="button" onclick="goPaso1()" id='btn_siguientePaso1' class="btn btn-primary">Siguiente</button>
    </div>
  </div>


<!-- add_firebase_storage -->

  <div id="paso2" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container14">
      <span class="_lbl1" id="lbl1" style="font-size: 25px; color: #666666; font-weight: bold; ">Punto fisico<br></span>
      <span class="_lbl2" id="lbl2" style="font-size: 18px; color: #999999;  ">Si tu sitio no tiene una ubicación fisica, ve al siguiente paso</span>
    </div>
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container56">
      <input type="text" class="form-control" id="box_direccion" placeholder="Dirección">
      <div style="width:10px;height:15px;"></div>
      <input type="text" class="form-control" id="box_puntoReferencia" placeholder="Punto de refencia">
      <div style="width:10px;height:50%;"></div>
      <button type="button" onclick="goPaso2()" id='btn_siguientePaso2' class="btn btn-primary">Siguiente</button>
    </div>
  </div>



  <div id="paso3" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container15">
      <span class="_lbl1" id="lbl1" style="font-size: 25px; color: #666666; font-weight: bold; ">Numeros de contacto<br></span>
      <span class="_lbl2" id="lbl2" style="font-size: 18px; color: #999999;  ">El campo con <font color="red">*</font> es obligatorio</span>
    </div>
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container86">
      <input type="text" class="form-control" id="box_contacto" placeholder="Contacto *">
      <div style="width:10px;height:15px;"></div>
      <input type="text" class="form-control" id="box_whatsapp" placeholder="WhatsApp *">
      <div style="width:10px;height:50%;"></div>
      <button type="button" onclick="goPaso3()" id='btn_siguientePaso3' class="btn btn-primary">Publicar</button>
    </div>
  </div>



  <div id="paso4" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container16">
      <span class="_lbl1" id="lbl1" style="font-size: 25px; color: #666666; font-weight: bold; ">Imagenes</span>
    </div>
    <div style="width:10px;height:40px;"></div>
    <div class="container" id="id_do_container17">
      <div style="width:10px;height:10px;"></div>
      <input type="file" class="meu-seletor" id="imgPickerBanner">
      <button type="button" onclick="goBuscarImagenBanner()" id='btn_buscarImagenBanner' class="btn btn-primary">Buscar imagen banner</button>
      <span class="_lbl_other" id="lbl_other" style="font-size: 15px; color: #999999;  "><font color="red">Banner:</font> Imagen rectangular.</span>
      <div style="width:10px;height:8%;"></div>
      <div style="width:30px;height:10px;"></div>
      <input type="file" class="meu-seletor" id="imgPickerPerfil">
      <button type="button" onclick="goBuscarImagenPerfil()" id='btn_buscarImagenPerfil' class="btn btn-primary">Buscar imagen perfil</button>
      <div class="container" id="container19">
        <span class="_lbl_imgBanner" id="lbl_imgPerfil" style="font-size: 15px; color: #999999;  "><font color="red">Perfil:</font> Imagen cuadrada.</span>
      </div>
      <div style="width:30px;height:15%;"></div>
      <button type="button" onclick="goPublicarSitio()" id='btn_publicarSitio' class="btn btn-primary">Publicar sitio</button>
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
        <!-- codigo javascript -->
            <script src= "pasosRegister.js"> </script>
        </div>
        </body>
        </html>