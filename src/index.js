import dotenv from 'dotenv';
import express from 'express';
import routers from './apis';
import bodyParser from 'body-parser';

dotenv.config();

// Start the server
const PORT = process.env.APP_PORT;
const app = express();

app.use(bodyParser.json());

app.use(express.urlencoded());
app.use(express.json());
app.use('/', routers);
//Error Handle

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
