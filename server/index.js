const express = require('express')
const path = require('path')

const app = express()

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "../main.html"))
})

app.get('/css',function(req,res) {
    res.sendFile(path.join(__dirname, '../styles.css'));
});

const port = process.env.PORT || 4567

app.listen(port, console.log(`Server is running on ${port}`))