import express from 'express';
import config from 'config';
import { number } from 'yup';

const port = config.get('port') as number;
const host = config.get('host') as string;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
