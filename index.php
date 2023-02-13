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
              <div id="id_da_tela" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div class="container" id="contenedorLogo">
      <img src="assets/logo_redondo.png" height="45%" width="55%" id="img_logo">
    </div>
    <div style="width:10px;height:6%;"></div>
    <div class="container" id="id_do_container">
      <span class="lbl1" id="_lbl1" style="font-size: 16px; color: #999999;  ">Herramienta para administrar</span>
    </div>
    <div class="container" id="id_do_container">
      <span class="lbl2" id="_lbl2" style="font-size: 16px; color: #666666; font-weight: bold; ">Maneja el perfil de tu negocio en el entorno de Yogo App</span>
    </div>
    <div style="width:10px;height:8%;"></div>
    <div class="container-xxl" id="contenedor_btns">
      <button type="button" onclick="register()" id='btn_register' class="btn btn-primary">Crear cuenta</button>
      <div style="width:5%;height:0px;"></div>
      <button type="button" onclick="login()" id='btn_login' class="btn btn-primary">Iniciar sesión</button>
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
            <!-- codigo javascript -->
            <script src= "index.js"> </script>
        </div>
        </body>
        </html>