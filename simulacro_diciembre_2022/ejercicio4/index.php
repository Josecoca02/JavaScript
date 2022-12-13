<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <?php require 'database.php' ?>
    <h1>Listado de países</h1>
    <table>
        <tr>
            <th>País</th>
            <th>Continente</th>
            <th>Población</th>
        </tr>
        <?php
        $sql = "SELECT * FROM paises";
        $resultado = $conexion -> query($sql);
        
        if ($resultado -> num_rows > 0) {
            while($row = $resultado->fetch_assoc()) {
            ?>
            <tr>
                <td><?php echo $row["pais"] ?></td>
                <td><?php echo $row["continente"] ?></td>
                <td><?php echo $row["poblacion"] ?></td>
            </tr>
            <?php
            }
        } else {
            echo "No se han encontrado películas";
        }      
        ?>
    </table>
</body>
</html>