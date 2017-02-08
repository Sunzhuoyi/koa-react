/**
 * Created by sunzhuoyi on 17/2/8.
 */
import koaRouter from 'koa-router';
import user from '../api/user';

export default (app) => {
  let router = koaRouter();
  app.use(router.routes());
  router.get('/',function *(next) {
    yield this.render('index.html',{});
    yield next;
  });
  router.get('/api/user',user);
  router.get('*',function *(next) {
    yield this.render('index.html',{});
    yield next;
  });
}