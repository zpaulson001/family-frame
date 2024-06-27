import { Hono } from 'hono';
import quoteArr from './pooh-quotes.json';

const app = new Hono();

app.get('/', (c) => {
  const randomIndex = Math.floor(Math.random() * quoteArr.length);
  return c.json(quoteArr[randomIndex]);
});

export default app;
