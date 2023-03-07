const path = require('path')
const express = require('express');
const routes = require("./src/routes");

const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');
const authMiddleware = require('./src/middleware/authMiddleware');

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

app.listen(4001, () => console.log("Server started on port 4001"))