const express = require('express');

let app = express();

app.use(express.static('dist/Timesheet-Proto-FE'))

app.get('/', (req, res, next) => {
    res.redirect('/')
});


app.listen(8080)