import Fastify from 'fastify';
import ejs from 'ejs';
import fastifyView from '@fastify/view';
import fastifyStatic from '@fastify/static';
import { join } from 'path';

import operatingHours from "./data/operatingHours.js";
import menuItems from "./data/menuItems.js";
import fastify from "fastify";
import * as repl from "node:repl";

const app = Fastify();
const port = 3000;

const publicPath = join(process.cwd(), 'public');

app.register(fastifyView, {
    engine: {
        ejs: ejs,
    },
});

app.register(fastifyStatic, {
    root: publicPath,
    prefix: '/public/',
})

app.get("/", (req, reply) => {
    reply.view("views/index.ejs", { name: "What's Fare is Fair" });
});

app.get("/menu", (req, reply) => {
    reply.view("views/menu.ejs", { menuItems });
})

app.get("/hours", (req, reply) => {
    const days = [
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "sunday",
    ];
    reply.view("views/hours.ejs", { operatingHours, days });
})

app.listen( { port: port }, (err, address) => {
    if (err) throw err;
    console.log(`Server started on port ${port}`);
})