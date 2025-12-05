import Fastify from 'fastify';
const app = Fastify();
const port = 3000;

app.get('/',  async (req, res) => {
    return "Welcome to What's Fare is Fair!";
});

await app.listen({ port })
console.log(`Web server is listening at http://localhost:${port}!`);