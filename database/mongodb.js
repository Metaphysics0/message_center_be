const mongoose = require('mongoose');

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI || process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected 🟢'))
  .catch((e) => console.log(`Error connecting to DB 🔴 \n Error: ${e}`));
