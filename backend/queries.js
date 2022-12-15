const getAllTodos = "SELECT * FROM fstodos;"
const getOneTodo =  "SELECT * FROM fstodos WHERE id = $1"
const createTodo = "INSERT INTO fstodos (description) VALUES ($1)"
const updateTodo = "UPDATE fstodos set description = $1 WHERE id = $2 RETURNING *"
const removeTodo = "DELETE FROM fstodos WHERE id = $1 "

module.exports = {
  getAllTodos,
  getOneTodo,
  createTodo,
  updateTodo,
  removeTodo

}