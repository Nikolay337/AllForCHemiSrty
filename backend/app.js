const path = require('path')
const express = require('express');
const routes = require("./src/routes");

const cors = require('cors');
const app = express();

const bodyParser = require('body-parser');

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(routes.files);
app.use(routes.users);
app.use(routes.answers);
app.use(routes.tests);
app.use(routes.topics);
app.use(routes.questions);

app.listen(4000, () => console.log("Server started on port 4000"))