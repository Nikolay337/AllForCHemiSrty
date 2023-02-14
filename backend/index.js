const express = require('express')

const db = require('./models');
const Topic = db.Topic;

const app = express()  
//Topic CRUD
app.get("/", async (req, res) => {
  const topic = await Topic.findAll()
  res.send(topic)
})

app.get("/topic/:id", async (req, res) => {})
app.post("/topic", () => {})
app.put("/topic/:id", () => {})
app.delete("/topic/:id", () => {})

app.listen(4002, () => console.log("start"))