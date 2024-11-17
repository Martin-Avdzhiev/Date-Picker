import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/createTodo', (req: Request, res: Response) => {
  const { todo } = req.body;
  console.log(todo);
  res.send(JSON.stringify({message : `The todo "${todo}" is created succesfully!`, todo}));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})