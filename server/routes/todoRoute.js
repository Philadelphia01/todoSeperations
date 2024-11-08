const express = require('express');
const router = express.Router()

const {getAllTodo, addNewTodo, deleteTodo, updateTodo} = require('../controllers/todoCtrl')


router.get('/', getAllTodo)

router.post('/', addNewTodo)

router.delete('/:todoId', deleteTodo)

router.put('/:todoId', updateTodo)


module.exports = router