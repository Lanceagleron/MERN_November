const express = require("express");
const cors = require("cors")
const app = express();
const PORT = 8000;
const DB = "notes"

// ---Middleware---
app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

//CONNECT to the database using mongoose
require("./config/mongoose.config")(DB)

// --- import the ROUTES HERE ---
require("./routes/cartoons.routes")(app)

// START THE SERVER
app.listen(PORT, () => console.log("server up on PORT:", PORT))