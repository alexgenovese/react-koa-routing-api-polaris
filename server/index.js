require('dotenv').config();
const Koa = require('koa');

const app = new Koa();
const port = parseInt(process.env.PORT, 10) || 5000;
const all_routes = require('./routes/index');

app.use(all_routes());

app.listen(port, () => console.log(`Server started on port ${port}`));