const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const customFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} : [${label}] : ${level}: ${message}`;
});
//timestamp -> when the error occured
// lavel -> severity level
// lable -> which file it is occured
// message -> any msg you want to give

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(), // printing to console
    new transports.File({ filename: "combined.log" }), // saving into a file
  ],
});

module.exports = logger;
