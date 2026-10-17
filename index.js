const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const NOMBRE_APP = process.env.NOMBRE_APP || "App sin configurar";
const CADENA_CONEXION = process.env.SQLCONNSTR_MiBaseDeDatos || "No configurada";

app.get("/", (req, res) => {
  res.send(`
    <h1>${NOMBRE_APP}</h1>
    <p>Corriendo en Azure App Service - Actualizado por Diego</p>
  `);
});

app.get("/config", (req, res) => {
  res.json({
    nombreApp: NOMBRE_APP,
    cadenaConexionConfigurada: CADENA_CONEXION !== "No configurada"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});