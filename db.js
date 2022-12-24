/** Database for lunchly */

const pg = require("pg");
const DATABASE_URL = require('./database_url.js')

const db = new pg.Client(DATABASE_URL);

db.connect();

module.exports = db;
