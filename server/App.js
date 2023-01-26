import express from 'express';
import fs from 'fs/promises'

//const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.static("../src/components/login/"))

app.get("/login", async (req, res) => {
    const filebuf = await fs.readFile("../src/components/login/login.js");
    res.type("html");
    res.send(filebuf);
  });
  

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/logins', (req, res) => {
    res.send("logins")
})

app.get('/info', async (req, res) => {
    const fileBuf = await fs.readFile('./static/info.html');
    res.type('html');
    res.send(fileBuf);
  });

app.post('/post', (req, res) => {
    res.send('Post World')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})