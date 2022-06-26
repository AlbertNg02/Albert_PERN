const express = require("express");
const app = express();
const cors = requires("cors");


//middleware
app.use (cors())


app.listen(5000, () => {
	console.log("Server has started port 5000")
});

