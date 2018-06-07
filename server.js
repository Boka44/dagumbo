const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
	res.render('index');
})

app.listen(PORT, () => {
	console.log("Server is running on port: " + PORT);
})