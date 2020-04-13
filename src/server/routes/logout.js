const route = require("koa-route");

module.exports = function (app) {
	app.use(
		route.post("/logout", async function (context) {
			await context.logout();
			context.redirect("/");
		}),
	);
};
