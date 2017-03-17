import winston from 'winston';

winston.emitErrs = true;

const logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      level: 'verbose',
      handleExceptions: true,
      colorize: true,
    }),
  ],
  exitOnError: false,
});

module.exports = logger;
module.exports.stream = {
  write: (message) => {
    logger.info(message.slice(0, -1));
  },
};
