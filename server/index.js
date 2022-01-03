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
app.patch('/api/user/:id', ctrl.editUser);
app.delete('/api/user/:id', ctrl.removeUser);

app.post('/api/userstrips', ctrl.addUsersTrips);

app.get("/api/trip/:id", ctrl.getTripAttendees);
app.get("/api/trip", ctrl.getAllTrips);
app.post("/api/trip", ctrl.addTrip);
app.patch("/api/trip/:id", ctrl.editTrip);
app.delete("/api/trip/:id", ctrl.removeTrip);

app.get("/api/list/:id", ctrl.getList);
app.get("/api/list", ctrl.getLists);
app.post("/api/list", ctrl.addList);
app.patch("/api/list", ctrl.editList);
app.delete("/api/list", ctrl.removeList);

app.get("/api/destination", ctrl.getUser);
app.post("/api/destination", ctrl.addUser);
app.patch("/api/destination", ctrl.editUser);
app.delete("/api/destination", ctrl.removeUser);


app.listen(PORT, ()=>{console.log(`Listening on port ${PORT}`)})