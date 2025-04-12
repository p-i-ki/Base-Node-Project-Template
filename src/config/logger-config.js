const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} : ${label} : ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(), // printing to console
    new transports.File({ filename: "combined.log" }), // saving into a file
  ],
});

module.exports = logger;

// timestamp -> when the error occured
// lavel -> severity level
// label -> which file it is occured
// message -> any msg you want to give
