const express = require("express");
const app = express();
const PORT = 8000;
const DB = "jokes"

// ---Middleware---
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//CONNECT to the database using mongoose
require("./config/mongoose.config")(DB)


// --- import the ROUTES HERE ---
// const routesFile = require("./routes/routes")
// routesFile(app)
require("./routes/jokes.routes")(app)


app.listen(PORT, () => console.log("server up on PORT:", PORT))