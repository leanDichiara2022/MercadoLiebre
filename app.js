const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

let port = process.env.port || 3000;
app.listen(port,() => console.log("listening on port" + port))



app.listen(process.env.PORT || 3000, function () {
  console.log("Servidor corriendo en el puerto 3000");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
