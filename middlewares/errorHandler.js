const errorHandler = (err, req, res, next) => {
  if (err) {
    res.status(500).json({
      message: "Oops, something went wrong!",
      error: err,
    });
  } else {
    res.status(200).json({
      message: "Successfully Updated!",
    });
  }
};

module.exports = errorHandler;
