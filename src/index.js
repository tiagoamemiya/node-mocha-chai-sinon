import app from './app';

const dotEnv = require('dotenv');

dotEnv.config();

app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Server running');
});
