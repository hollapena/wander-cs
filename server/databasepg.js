const {Client} = require('pg');

const client = new Client({
  host:'ec2-3-217-216-13.compute-1.amazonaws.com',
  user:'xjnmlxbhplsmvg',
  port:5432,
  password:'543f28d25015b36410ac80dc701f7e9d396d6fc6b5ae9f7f2719f4f3286d1504',
  database:'d925shnad4g5ml'
})

client.connect();

client.query('SELECT * FROM users', (err, res) => {
  if(!err){
    console.log(res.rows)
  } else {
    console.log(err.message);
  }
  client.end;
})