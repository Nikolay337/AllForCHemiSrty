require("dotenv").config()

const path = require('path')
const express = require('express');
const routes = require("./src/routes");

const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
const authMiddleware = require('./src/middleware/authMiddleware');
//process.env.JWT_SECRET="74bf27e3dc25faa656cf3d81be188069917271ed7a4130e224f8cdb733095a40b46e863fd6d10a7837c633d5eee401c787ce473a41bef8073c8e5c714b646955"
app.use(cors({
    origin: "http://localhost:3000"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public'))); 

app.use(authMiddleware)

app.use(routes.files);
app.use(routes.users);
app.use(routes.tests);
app.use(routes.topics);
app.use(routes.comments);
app.use(routes.questions);

app.listen(4000, () => console.log("Server started on port 4000"))