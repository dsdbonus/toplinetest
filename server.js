const config = require('./lib/config');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
app.use(bodyParser());

// catch 404
app.use(async (ctx, next) => {
    try {
        await next();
        const status = ctx.status || 404;
        if (status === 404) {
            ctx.throw(404)
        }
    } catch (err) {
        ctx.status = err.status || 500;
    }
});

/*
 * Routes
 */
app.use(require('./api/routes/bookRoute'));

app.listen(config.api.port, config.api.host, function () {
    console.log('%s listening at port %d', config.app.name, config.api.port);
});