const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.route");
const fileRoutes = require("./routes/file.route");
require("./startup/db")();
const port = process.env.port || 4000;

app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.use("/api/files", fileRoutes);

app.listen(port, () => {
    console.log("Listening on port: ", port);
});