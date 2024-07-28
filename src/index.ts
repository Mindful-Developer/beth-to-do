import { Elysia } from 'elysia';
import { html } from '@elysiajs/html'
import pageRouter from './routers/page';
import apiRouter from './routers/api';
import staticPlugin from "@elysiajs/static";


const app = new Elysia()
    .use(html())
    .use(staticPlugin())
    .use(pageRouter)
    .use(apiRouter)
    .listen(3000);

console.log(`Bun in the oven @ http://${app.server?.hostname}:${app.server?.port}`);