<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <?php
            require './database.php';
            
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $temp_nombre = depurar($_POST["nombre"]);
                $temp_edad= depurar($_POST["edad"]);
                if (isset($_POST["genero"])) {
                    $temp_genero = depurar($_POST["genero"]);
                } else {
                    $temp_genero = "";
                }
                $temp_titulo= depurar($_POST["titulo"]);
               
            
                //VALIDACION DE NOMBRE
                if (empty($temp_nombre)) {
                    $err_nombre ="El campo es obligatorio";
                } else {
                    $pattern ="/^[a-zA-Z áéíóúÁÉÍÓÚñÑ]+$/";
            
                    if (!preg_match($pattern, $temp_nombre)) {
                        $err_nombre = "El campo solo puede tener letras.";
                    }else { 
                     $nombre = $temp_nombre;
                    }
                }
                    //Validacion de genero
                    if (empty($temp_genero)) {
                        $err_genero = "La consola es obligatoria";
                    } else {
                        $consola = $temp_genero;
                    }
                //VALIDACION DE EDAD
                if(empty($temp_edad)) {
                        $err_edad = "EL campo edad es obligatorio";
                    } else {
                        if(!is_numeric($temp_edad)) {
                            $err_edad= "La edad debe ser un numero ";
                        }else {
                            if ($temp_edad < 0) {
                                $err_edad = "No no puede ser negativo la EDAD";
                            }else {
                                $edad =$temp_edad ;
                         }
                     }
                } 
                          //  Insertamos la prenda en la base de datos
                 
                     $sql = "INSERT INTO personajes (nombre, edad, genero, titulo)
                         VALUES ('$temp_nombre', '$temp_edad', '$temp_genero', '$temp_titulo')";
                 
                 
 
                 if ($conexion -> query($sql) == "TRUE") {
                 ?>
                     <div class="alert alert-success alert-dismissible fade show" role="alert">
                         Se ha insertado la Personaje
                         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>
                 <?php
                 } else {
                     echo "<p>Error al insertar</p>";
                 }
             
     }
         function depurar($dato) {
            $dato = trim($dato);
            $dato = stripslashes($dato);
            $dato = htmlspecialchars($dato);
            return $dato;
        }

                
   ?>

    <div class="container">

        <br>
        <h1>Nueva PERSONAJE</h1> 
        
        <div class="row">
            <div class="col-6">
                <form action="" method="post" enctype="multipart/form-data">
                    <div class="form-group mb-3" >
                        <label class="form-label">Nombre</label>
                        <input class="form-control" type="text" name="nombre">
                       <span class="error">
                           <?php if(isset($err_nombre)) echo $err_nombre ?>
                   </span>
                    </div>
                    <div class="form-group mb-3">
                        <label class="form-label">Edad</label>
                        <input class="form-control" type="text" name="edad">
                        <span class="error">
                           * <?php if (isset($err_edad)) echo $err_edad ?>
                       </span>
                    </div>
                    <div class="form-group mb-3" >
                        <label class="form-label">Genero</label>
                        <input class="form-control" type="text" name="genero">
                       <span class="error">
                           <?php if(isset($err_genero)) echo $err_genero ?>
                   </span>
                    </div>
                    <div class="form-group mb-3" >
                        <label class="form-label">Titulo videojuego</label>
                        <input class="form-control" type="text" name="titulo">
                       <span class="error">
                           <?php if(isset($err_titulo)) echo $err_titulo?>
                   </span>
                    </div>

                    <button class="btn btn-primary" type="submit">Crear</button>
                </form>
            </div>
        </div>
    </div>
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
</body>
</html>