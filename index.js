const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const KerasJS = require('keras-js');


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
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello There!')
});

app.post('/', (req, res) => {
	const data = {
		location: req.body.location
	};
	const model = new KerasJS.Model({
		filepath: './src/assets/states_covid/india1.h5',
		filesystem: true
	  });
	try {
		await model.ready();
		const inputData = {
		  input_1: new Float32Array(data)
		};
		const outputData = await model.predict(inputData);
		res.send(outputData);
	} catch (err) {
		// handle error
	  }
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});
