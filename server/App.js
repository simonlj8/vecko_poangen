const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/post', (req, res) => {
    res.send('Post World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})