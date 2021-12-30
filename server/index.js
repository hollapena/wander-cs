require("dotenv").config()
const ctrl = require('./controller');
const cors = require('cors')
const express = require('express');
const { PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/user', ctrl.getUser);
app.post('/api/user', ctrl.addUser);
app.patch('/api/user', ctrl.editUser);
app.delete('/api/user', ctrl.removeUser);

app.get("/api/trip", ctrl.getUser);
app.post("/api/trip", ctrl.addUser);
app.patch("/api/trip", ctrl.editUser);
app.delete("/api/trip", ctrl.removeUser);

app.get("/api/list", ctrl.getUser);
app.post("/api/list", ctrl.addUser);
app.patch("/api/list", ctrl.editUser);
app.delete("/api/list", ctrl.removeUser);

app.get("/api/destination", ctrl.getUser);
app.post("/api/destination", ctrl.addUser);
app.patch("/api/destination", ctrl.editUser);
app.delete("/api/destination", ctrl.removeUser);


app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})