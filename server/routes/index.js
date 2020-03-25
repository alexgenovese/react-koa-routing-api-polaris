const Router = require('@koa/router');
const combineRouters = require('koa-combine-routers');
const router_api = require('./api/v1/index');
const router_shopify = require('./shopify/index');

const router = combineRouters( router_api, router_shopify);

module.exports = router;