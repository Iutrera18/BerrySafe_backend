const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const dotenv = require('dotenv');
const router = require('./routes');
const orm = require('./models');
// const cors = require('koa2-cors');

dotenv.config();

const app = new Koa();

app.context.orm = orm;

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

module.exports = app;
