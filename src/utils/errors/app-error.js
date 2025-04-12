class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.explanation = message;
    // you can also add stackTrace using Error.captureStackTrace()
  }
}

module.exports = AppError;
