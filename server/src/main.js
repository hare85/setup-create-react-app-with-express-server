import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Logger from '../utils/logger';

const app = express();
const port = 8080;

// setup modules
app.use(bodyParser.json());
app.use(morgan('tiny', { stream: Logger.stream }));

app.get('/hello', (req, res) => {
  res.json({
    message: 'Hello API Server',
  });
});

app.listen(port, () => {
  Logger.log('info', 'Express is listening on port', port);
});
