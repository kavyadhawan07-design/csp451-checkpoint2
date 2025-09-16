import express from 'express';
import { getUserById } from './src_database.js';

const app = express();

app.get('/users/:id', (req, res) => {
  const user = getUserById(parseInt(req.params.id));
  res.json(user);
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));
