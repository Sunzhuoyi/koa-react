import fs from 'fs';
import koa from 'koa';
import bodyParder from 'koa-bodyparser';
import session from 'koa-session';
import staticServer from 'koa-static';
import nunjucks  from './middlewares/koa-nunjucks';
import routers from './routers';

const app = koa();

//一个简单的koa服务器

/*app.use(function *(){
	this.body = 'Hello Koa';
});

app.listen(8080);*/

//koa-static 用于创建静态文件服务
app.use(staticServer(__dirname+'/public'));
//session
app.keys = ['some secret hurr'];
app.use(session(app));
//body parser
app.use(bodyParder());
/*app.ues(function *() {
	this.body = 'Hello Koa';
});*/
//加载路由
routers(app);
app.listen(8080);