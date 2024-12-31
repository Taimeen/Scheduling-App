const express = require('express');
const bodyParser = require('body-parser');
const scheduleRoutes = require('./routes/schedule');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use('/api', scheduleRoutes);

// Base route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
