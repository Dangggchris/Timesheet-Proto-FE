const express = require('express');

let app = express();

app.use(express.static('dist/Front-End'))

app.get('/', (req, res, next) => {
    res.redirect('/')
});


app.listen(8080)