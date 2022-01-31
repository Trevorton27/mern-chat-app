const express = require('express');
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (err) => {
    if (err) console.log('error: ', err);
    else console.log('mongdb is connected');
  }
);
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/auth', require('./serverRoutes/auth'));

app.listen(PORT, () => {
  console.log('Backend server is running!');
});
