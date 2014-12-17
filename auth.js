/*
* Checks if the request header containts the correct auth token.
* The auth token is passed in the constructor.
*/

var Auth = function(token) {
  this.token = token;

  this.verify_token = function(req, res, next) {
    if (req.headers.authorization != this.token)
      res.sendStatus(403);
    else
      next();
  };

  return this;
}

module.exports.init_with_token() = function(token) {
  return new Auth(token);
}