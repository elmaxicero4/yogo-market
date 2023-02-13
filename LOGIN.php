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


  <div id="tela" style="background-color: #ffffff; height: 100%; width: 100%;">
    <div style="width:10px;height:50px;"></div>
    <span class="meu_texto" id="lbl1" style="font-size: 20px; color: #666666; font-weight: bold; ">Iniciar sesión</span>
    <span class="meu_texto" id="lbl2" style="font-size: 20px; color: #666666;  ">Ingresa los datos a continuación</span>
    <div style="width:10px;height:90px;"></div>
    <div class="container" id="id_do_container">
      <input type="text" class="form-control" id="box_usuario" placeholder="Usuario">
      <div style="width:10px;height:10px;"></div>
      <input type="text" class="form-control" id="box_pass" placeholder="Contraseña">
      <div style="width:10px;height:50%;"></div>
      <div class="container" id="id_do_container1">
        <button type="button" onclick="goIngresar()" id='btn_ingresar' class="btn btn-primary">Ingresar</button>
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
            <!-- codigo javascript -->
            <script src= "login.js"> </script>
        </div>
        </body>
        </html>