import fastify from 'fastify';

const app = fastify();
const port = 3000;

app.get('/hello', async (request, reply) => {
  const name = request.query.name || 'World';
  return `Hello, ${name}!`;
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', (req, res) => {
  res.send('GET /users');
});

app.post('/users', (req, res) => {
  res.send('POST /users');
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});