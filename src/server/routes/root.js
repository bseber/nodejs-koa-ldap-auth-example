const route = require("koa-route");

module.exports = function (app) {
	app.use(
		route.get("/", async function (context) {
			await context.render("index", {
				csrf: context.csrf,
				username: context.state.user.username,
			});
		}),
	);
};
