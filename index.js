import Fastify from 'fastify';

import operatingHours from "./data/operatingHours.js";
import menuItems from "./data/menuItems.js";

const app = Fastify();
const port = 3000;

app.get('/',  async (req, res) => {
    return "Welcome to What's Fare is Fair!";
});

app.get('/menu', async (req, res) => {
    res.send(menuItems);
});

app.get('/hours', async (req, res) => {
    res.send(operatingHours);
})

await app.listen({ port });
console.log(`Web server is listening at http://localhost:${port}!`);