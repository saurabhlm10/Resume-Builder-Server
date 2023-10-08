function _wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}

const timeout = async (req, res, next) => {
  await _wait();
  return next();
};

module.exports = timeout;
