const Router = require('@koa/router');
const router = new Router({ prefix: '/api/v1' });

router.get('/apq', (req,next) => {
    const apq = '3';

    req.body = apq;
    next();
})

router.get('/aov', (req,next) => {
    const aov = '235';

    req.body = aov;
    next();
})

router.get('/basket_size', (req,next) => {
    const basket_size = '35';

    req.body = basket_size;
    next();
})

router.get('/customers', (req,next) => {

    const customers = [
        { id: 12313, name: 'Champions', APQ: '5', LTV: '540€', TOTAL: '43.438' },
        { id: 1213, name: 'Loyal Customers', APQ: '3', LTV: '307€', TOTAL: '9.862' },
        { id: 1233, name: 'Potential Loyalist', APQ: '3', LTV: '129€', TOTAL: '8564' },
        { id: 382, name: 'Recent Customers', APQ: '2', LTV: '52€', TOTAL: '212' },
        { id: 455, name: 'Promising', APQ: '4', LTV: '534€', TOTAL: '7.891' },
        { id: 345, name: 'Customers Needing Attention', APQ: '2', LTV: '97€', TOTAL: '4.231' },
        { id: 2344, name: 'About To Sleep', APQ: '2', LTV: '91€', TOTAL: '1.709' },
        { id: 1253431, name: 'At Risk', APQ: '1', LTV: '33€', TOTAL: '42' },
        { id: 12378713, name: 'Can’t Lose Them', APQ: '2', LTV: '327€', TOTAL: '5.454' },
        { id: 56756, name: 'Hibernating', APQ: '3', LTV: '47€', TOTAL: '445' },
        { id: 123766713, name: 'Lost', APQ: '1', LTV: '5€', TOTAL: '438' }
    ];
    
    req.body = customers;
    next();
})

module.exports = router;