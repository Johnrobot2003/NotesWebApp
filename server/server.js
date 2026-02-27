const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const User = require('./models/users');
const Note = require('./models/notes');

mongoose.connect('mongodb://localhost:27017/notesapp')
.then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});



// const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
// Middleware
app.use(cors());
app.use(bodyParser.json());

// // Proxy API requests to the backend server
// app.use('/api', createProxyMiddleware({
//   target: 'http://localhost:5000', // Backend server URL
//   changeOrigin: true,
// }));


app.get('/', (req, res) => {
  res.send('Hello from the server!');
});
// // Start the server
// const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});