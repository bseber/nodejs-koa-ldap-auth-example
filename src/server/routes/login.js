const passport = require("koa-passport");
const route = require("koa-route");

module.exports = function (app) {
	app.use(
		route.get("/login", async function (context) {
			const { error, username } = context.request.query;
			await context.render("login", {
				error: error != undefined,
				username,
				csrf: context.csrf,
			});
		}),
	);

	app.use(
		route.post("/login", async function (context, next) {
			const { username } = context.request.body;

			let strategies = ["ldapauth"];
			if (process.env.NODE_ENV === "development") {
				// if the application runs in development mode we first try
				// to authenticate with the local strategy. if the local strategy
				// is not successful we try it again with ldap.
				// in production mode the local strategy is skipped.
				// this enables local development with multiple users / sessions.
				strategies.unshift("local");
			}

			await passport.authenticate(strategies, {
				session: true,
				successRedirect: "/",
				failureRedirect: `/login?error&username=${username}`,
			})(context, next);
		}),
	);
};
