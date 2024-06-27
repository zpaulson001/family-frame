import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('look out world 👀');
});

export default app;
