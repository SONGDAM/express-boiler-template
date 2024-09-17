import express from 'express';
import { logger } from 'middleware/logger';

const app = express();

app.listen(process.env.PORT, () => {
  logger.info(`server is running at ${process.env.PORT}`);
});
