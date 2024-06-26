import express from 'express';
import routers from './apis';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use(express.urlencoded());
app.use(express.json());
app.use('/', routers);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
