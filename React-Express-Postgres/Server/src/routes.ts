import { Router, Request, Response } from 'express';
import pool from './db';

type TodoType = {
  todo_id:number;
  description:string
}

const router = Router();

router.get('/todos', async (req: Request, res: Response) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/todos', async (req: Request, res: Response) => {
  try {
    const { todoData } = req.body;
    const insertResult = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [todoData]);
    const todo = insertResult.rows[0];
    res.json({ message: `The todo "${todoData}" is created successfully!`, todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.put('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { todo }: {todo: TodoType} = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 RETURNING *",
      [todo.description, id]
    );

    if (updateTodo.rowCount === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }
    const updatedTodo = updateTodo.rows[0];
    res.json({ message: `Todo with id ${id} has been updated successfully!`, updatedTodo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

    if (deleteTodo.rowCount === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    res.json({ message: `Todo with id ${id} has been deleted successfully!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});


export default router;
