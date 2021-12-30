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
    const {email, pass} = req.query;
    sequelize.query(`SELECT * FROM users WHERE user_email = ${email};`)
    .then(dbRes => res.status(200).send(dbRes[0]))
    .catch(err => console.log(err))
  },
  editUser: (req, res) => {},
  removeUser: (req, res) => {},
  addTrip: (req, res) => {},
  getTrip: (req, res) => {},
  editTrip: (req, res) => {},
  removeTrip: (req, res) => {},
  addList: (req, res) => {},
  getList: (req, res) => {},
  addToList: (req, res) => {},
  removeFromList: (req, res) => {},
};
