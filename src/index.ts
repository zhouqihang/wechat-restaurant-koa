import Koa from 'koa';
import koaRouter from 'koa-router';
import koaBodyparser from 'koa-bodyparser';

import env from '../.env.json';

const app = new Koa();

app.use((ctx, next) => {
    ctx.body = 'ts koa';
    next();
})


app.listen(env.APP_PORT, () => {
    console.log('server has beed start as port ' + env.APP_PORT);
})

