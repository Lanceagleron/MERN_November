const express = require("express");
const app = express();
const PORT = 8000;

// ---Middleware---
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );



// --- import the ROUTES HERE ---
const routesFile = require("./routes/routes")
routesFile(app)


app.listen(PORT, () => console.log("server up on PORT:", PORT))