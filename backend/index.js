const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('LOGIN_MONGO_DB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', require('./routes/auth'));

const PORT = 5000;
app.listen(PORT, () =>{
    console.log(`Server rodando na porta ${PORT}`)
});
