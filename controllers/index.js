
module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('base.html');
    }
};
