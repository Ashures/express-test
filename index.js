import express from 'express';
import root from './routers/index.js';
import about from './routers/about/index.js';

const app = express();
const port = 3000;

app.use('/', root);
app.use('/about/', about);

app.listen(port, () => {
  console.log(`Running! Listening on port http://localhost:${port}`);
});