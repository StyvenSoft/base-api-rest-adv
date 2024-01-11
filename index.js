const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");

dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use("/", (req, res) => {
    res.send("Server side..")
})

app.use("/api/user", authRouter)

app.listen(PORT, () => {
    console.log(`Server is runnig at PORT ${PORT}`);
});
