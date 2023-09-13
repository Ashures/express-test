import express from 'express';
import root from './routers/index';
import about from './routers/about';

const app = express();
const port = 3000;

app.use('/', root);
app.use('/about/', about);

app.listen(port, () => {
  console.log(`Running! Listening on port http://localhost:${port}`);
});