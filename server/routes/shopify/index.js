const Router = require('@koa/router');
const router = new Router({ prefix: '/shopify' });

/*
router.get('/auth', (req, next) => {
    req.body = 'ok';
    next();
})
*/

module.exports = router;