const isAdmin = (req, res, next) => {
  const { authorization } = req.headers; // => Headers will receive an secret Admin Token
  try {
    const adminToken = process.env.ADMIN_TOKEN;
    const receivedToken = authorization.split(" ")[1];
    if (receivedToken == adminToken) {
      next();
    } else {
      next("Bad Request");
    }
  } catch (err) {
    next("Sorry, Bad Request Received!");
    console.log(err);
  }
};

module.exports = isAdmin;
