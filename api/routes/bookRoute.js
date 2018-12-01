const Router = require('koa-router');
const Ajv = require('ajv');

const getBookRequestSchema = require('../schemas/getBookRequest');
const postBookRequestSchema = require('../schemas/postBookRequest');
const putBookRequestSchema = require('../schemas/putBookRequest');

const getBookCtr = require('../controllers/book/getBookCtr');
const postBookCtr = require('../controllers/book/postBookCtr');
const putBookCtr = require('../controllers/book/putBookCtr');

const ajv = new Ajv();

const router = new Router();


router.get('/book', async (ctx, next) => {
    const query = JSON.parse(JSON.stringify(ctx.request.query));

    if (query.hasOwnProperty('offset')) {
        query.offset = parseInt(query.offset);
    }
    if (query.hasOwnProperty('number')) {
        query.number = parseInt(query.number);
    }

    if (!ajv.validate(getBookRequestSchema, query)) {
        ctx.throw(400, 'Bad request: required parameters missing or invalid');
        return;
    }

    ctx.body = await getBookCtr(ctx.request.query);
    ctx.status = 200;
});

router.post('/book', async (ctx, next) => {
    if (!ajv.validate(postBookRequestSchema, ctx.request.body)) {
        ctx.throw(400, 'Bad request: required parameters missing or invalid');
        return;
    }

    ctx.body = await postBookCtr(ctx.request.body);
    ctx.status = 201;
});

router.put('/book', async (ctx, next) => {
    if (!ajv.validate(putBookRequestSchema, ctx.request.body)) {
        ctx.throw(400, 'Bad request: required parameters missing or invalid');
        return;
    }

    ctx.body = await putBookCtr(ctx.request.body);
    ctx.status = 200;
});

module.exports = router.routes();