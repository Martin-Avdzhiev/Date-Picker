import { Router, Request, Response } from 'express';
import pool from './db';

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
    const { todo } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)", [todo]);
    res.json({ message: `The todo "${todo}" is created successfully!`, todo });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.delete('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE id = $1", [id]);

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

router.put('/todos/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE id = $2",
      [description, id]
    );

    if (updateTodo.rowCount === 0) {
      res.status(404).json({ error: "Todo not found" });
      return;
    }

    res.json({ message: `Todo with id ${id} has been updated successfully!`, description });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
