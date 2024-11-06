const { CustomAPIError } = require('../errors/custom');

const errorHandler = (err, req, res, next) => {
  const { statusCode, message } = err;

  return err instanceof CustomAPIError
    ? res.status(statusCode).json({ message })
    : res
        .status(500)
        .json({ message: 'Something wetn wrong, please try again' });
};

module.exports = errorHandler;
