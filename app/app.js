import koa from 'koa';
const app = koa();

app.use(function *(){
	this.body = 'Hello Koa';
});

app.listen(8080);
