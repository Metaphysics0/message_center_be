const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// import routes
const routes = require('./routes/routes');

// app
const app = express();
app.use(express.json());

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected 🟢'))
  .catch((e) => console.log(`Error connecting to DB 🔴 \n Error: ${e}`));

// routes middleware
app.use('/api', routes);

// server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
