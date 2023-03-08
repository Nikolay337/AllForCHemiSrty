require("dotenv").config()

const path = require('path')
const express = require('express');
const routes = require("./src/routes");

const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
const authMiddleware = require('./src/middleware/authMiddleware');

const port = process.env.PORT

app.use(cors({
    origin: process.env.CORS
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

app.listen(port, () => console.log(`Server started on port ${port}`))