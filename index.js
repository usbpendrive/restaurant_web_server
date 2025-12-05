import Fastify from 'fastify';
const app = Fastify();
const port = 3000;

app.get('/',  async (req, res) => {
    return "Welcome to What's Fare is Fair!";
});

app.get('/menu', async (req, res) => {
    return "TODO: Menu Page";
});

app.get('/hours', async (req, res) => {
    return "TODO: Hours Page";
})

await app.listen({ port });
console.log(`Web server is listening at http://localhost:${port}!`);