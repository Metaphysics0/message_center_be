require('dotenv').config();
const express = require('express');
require('./database/mongodb');

// app
const app = express();
app.use(express.json());

// routes middleware
app.use('/api', require('./routes/routes'));

// server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
