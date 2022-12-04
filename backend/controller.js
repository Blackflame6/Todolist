const pool = require("./pool");
const queries = require("./queries");

const getAllTodos = async(req, res) => {
  try {
    const { rows } = await pool.query(queries.getAllTodos);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getOneTodo = async(req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await pool.query(queries.getOneTodo, [id]);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const createTodo = async(req, res) => {
  const description = req.body.description;
  try {
    const { rows } = await pool.query(queries.createTodo, [description]);
    res.status(201).send(`New Todo created: ${description}`);
  } catch (err) {
    console.log(err.message);
  }
};

const updateTodo = async(req, res) => {
  const description = req.body.description;
  const id = req.params.id;
  try {
    const { rows } = await pool.query(queries.updateTodo, [description, id]);
    res.status(201).send(`Todo with ID ${id} update to "${description}"`);
  } catch (err) {
    console.error(err.message);
  }
};

const removeTodo = async(req, res) => {
  const id = req.params.id
  try {
    const { rows } = await pool.query(queries.removeTodo, [id])
    res.status(200).send(`Delete Todo with ID "${id}"`)
  } catch (error) {
    console.error(err.message);
  }
}
module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  removeTodo
};
