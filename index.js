const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const auth = require('./src/routes/auth');


mongoose
	.connect('mongodb+srv://exun_2020:chakdeindia@cluster0.yctdv.mongodb.net/exun2020?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	  })
	.then(() => console.log('Connected to MongoDB.......'))
    .catch((err) => console.log(err));
    
app.use(helmet());
app.use(bodyParser.json());
app.use('/auth', auth);

app.get('/', (req, res) => {
    res.send('Hello There!')
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})
