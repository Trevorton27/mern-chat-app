const express = require('express');
const app = express();
const dotenv = require('dotenv');
const helmet = require('helmet');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
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

app.use('/', express.static(path.join(__dirname, 'client/build')));
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use('/api/auth', require('./serverRoutes/auth'));
app.use('/api/users', require('./serverRoutes/users'));
app.use('/api/posts', require('./serverRoutes/posts'));
app.use('/api/conversations', require('./serverRoutes/conversations'));
app.use('/api/messages', require('./serverRoutes/messages'));

// app.get('/*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// );
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Backend server is running!');
});
