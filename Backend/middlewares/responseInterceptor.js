module.exports = (req, res, next) => {
  const oldJson = res.json;
  res.json = function (data) {
    oldJson.call(this, {
      status: res.statusCode,
      error: res.statusCode >= 400 ? true : false,
      data,
    });
  };
  next();
};
