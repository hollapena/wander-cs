require("dotenv").config();
const Sequelize = require('sequelize');
const { CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  addUser: (req, res) => {
    const { user_email, user_password, first_name, last_name } = req.body;
    sequelize
      .query(
        `INSERT INTO users (user_email, user_password, first_name, last_name) VALUES ('${user_email}', '${user_password}', '${first_name}', '${last_name}');`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  getUser: (req, res) => {
    const { email, pass } = req.query;
    sequelize
      .query(`SELECT * FROM users WHERE user_email = ${email};`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  editUser: (req, res) => {},
  removeUser: (req, res) => {},
  addTrip: (req, res) => {
    const { trip_start, trip_end, trip_name, destination_zip, user_id, title } = req.body;
    sequelize
      .query(
        `INSERT INTO trips (trip_start, trip_end, trip_name, destination_zip) VALUES ('${trip_start}', '${trip_end}', '${trip_name}', '${destination_zip}') RETURNING trip_id;
        INSERT INTO list (user_id, title) VALUES ('${user_id}', '${title}') RETURNING list_id;`
      )
      .then((dbRes) => res.status(200).send(dbRes))
      .catch((err) => console.log(err));
  },
  addUsersTrips: (req, res) => {
    const { trip_id, user_id, list_id } = req.body;
    sequelize
      .query(
        `INSERT INTO users_trips (user_id, trip_id) VALUES ('${user_id}', '${trip_id}');
        INSERT INTO list_trips (trip_id, list_id) VALUES ('${trip_id}', '${list_id}');`
      )
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  getAllTrips: (req, res) => {
    const { user_id } = req.query;
    sequelize
      .query(`SELECT trip_name, trip_start, trip_end, first_name, last_name FROM trips t JOIN users_trips ut ON t.trip_id = ut.trip_id JOIN users u ON u.user_id = ut.user_id WHERE u.user_id = '${user_id}';`)
      .then((dbRes) => res.status(200).send(dbRes[0]))
      .catch((err) => console.log(err));
  },
  getTrip: (req, res) => {},
  editTrip: (req, res) => {},
  removeTrip: (req, res) => {},
  addList: (req, res) => {},
  getList: (req, res) => {},
  getLists: (req, res) => {
    const { user_id } = req.query;
    sequelize
      .query(`SELECT * FROM list WHERE user_id = ${user_id};`)
      .then((dbRes) => res.status(200).send(dbRes))
      .catch((err) => console.log(err));
  },
  editList: (req, res) => {},
  removeList: (req, res) => {},
  addToList: (req, res) => {},
  removeFromList: (req, res) => {},
};
