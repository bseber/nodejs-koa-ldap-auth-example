# nodejs-koa-ldap-auth-example

example nodejs [koa](https://koajs.com/) app to demonstrate ldap authentication

## development

- configure ldap access via environment variables

  - e.g. in VSCode launch settings:

    ```json
    // vscode launch.json
    {
    	"configurations": [
    		{
    			"type": "node",
    			"request": "launch",
    			"name": "Launch Program [dev]",
    			"skipFiles": ["<node_internals>/**"],
    			"program": "${workspaceFolder}/src/server/index.js",
    			"env": {
    				"NODE_ENV": "development",
    				"LDAP_SERVER_URL": "ldap://awesome-ldap-slave:389",
    				"LDAP_SERVER_SEARCHBASE": "ou=xxx,dc=yyy"
    			}
    		}
    	]
    }
    ```

  - or inline when starting the server via npm

    ```bash
    LDAP_SERVER_URL=ldap://awesome-ldap-slave:389 LDAP_SERVER_SEARCHBASE=ou=xxx,dc=yyy npm run dev
    ```

- `npm run dev` start the server in dev mode and restart it on file changes

### Local user authentication

While developing you may want to have the convenience of local users (additionaly to ldap).

You can add users in the [local-users.json](./local-users.json) file. The key of the local user
map has to match the username input of the login form. Currently you can log
in with the usernames `john` or `jane`. The password doesn't matter. It just
have to have one char at least.
