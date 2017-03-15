import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  console.log('touched');
  return res.json({
    message: 'Hello API Server',
  });
});

app.listen(port, () => {
  console.log('Express is listening on port', port);
});
