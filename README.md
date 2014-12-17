###Simple Token Auth
Use this module to add a super simple layer of token based authentication.

###Installation

```
npm install simple-token-auth

var Auth = require('simple-token-auth');
var auth = Auth.init_with_token(auth_token);
```

###Setup
1. Create a token
2. Pass the token to the init_with_token call
3. Set the token for the 'Authorization' parameter in the request header
4. Make your requests

###Usage

####Use for all routes
```
app.all('*', auth.verify_token);
```

####Use for a specific route
```
app.get('/some/route', auth.verify_token, function(req, res) {
  // Do something
});
```