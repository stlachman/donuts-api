const db = require("../data/dbConfig");

module.exports = {
  add,
  find,
  findDonut,
  findById
};

function find() {
  return db("donuts");
}

function findDonut(donut) {
  return db("donuts").where(donut);
}

async function add(donut) {
  const [donutId] = await db("donuts").insert(donut);
  return findById(donutId);
}

function findById(id) {
  return db("donuts")
    .where({ id })
    .first();
}
