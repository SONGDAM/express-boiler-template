import pino from 'pino';

export const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'SYS:HH:MM:ss Z',
      ignore: 'pid,hostname',
    },
  },
  base: {
    pid: false,
  },
});
