import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db';
const app = express();
const port = 3000;
//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.post('/createTodo', async (req: Request, res: Response) => {
  try {
    const { todo } = req.body;
    const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)",[todo])
    res.send(JSON.stringify({message : `The todo "${todo}" is created succesfully!`, todo}));
    
  } catch (error) {
    console.log(error)
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

