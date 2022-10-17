const errorHandler = (err, req, res, next) => {
  if (err) {
    error = err;
    res.status(500).render("error");
  } else {
    res.status(200).json({
      message: "Successfully Updated!",
    });
  }
};

module.exports = errorHandler;
