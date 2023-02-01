import express, { Router } from 'express';
import fs from 'fs/promises'
import cors from 'cors';
import 'dotenv/config'
import mongoose from 'mongoose';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;
const uri = process.env.DATABASE_CONNECT;
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: false
}, function (err) {
    if (err) {
        console.log(err)
    }
    else {
        console.log('Connected')
    }
})

app.use(cors())

app.use(express.json());
app.use(express.static("../build"))

const TaskModel = mongoose.model("tasks", {
    name: String,
    task: String,
    points: Number,
    user: String,
    password: String
})

app.post('/post', (req, res) => {
    let name = req.body.name;
    let task = req.body.task;
    let points = req.body.points;

    let newtask = new TaskModel({ name: name, task: task, points})
    res.send("New add to database")
    newtask.save();
    console.log(newtask)
})


app.get('/tasks', (req, res) => {
    TaskModel.find({}, function (err, documents) {
        if (err) {
            res.send('Something wrong');
        }
        else {
            res.send(documents);
        }
    })
})

app.get('/getpoints', (req, res) => {
    TaskModel.find({
        points: req.body.points
    }, function (err, documents) {
        if (err) {
            res.send('failed')
        }
        else {
            res.send(documents)
        }
    }
    );
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/api/info', (req, res) => {
    const fileBuf = fs.readFile('./static/info.html');
    res.type('html');
    res.send(fileBuf);    
});

app.post('/api/validate', (req, res) => {
    let name = req.body.name
    let points = req.body.points
    let task = req.body.task

    let newtask2 = new TaskModel({ name: name, task: task, points})
    res.send("New add to database")
    newtask2.save();
    console.log(newtask2)

})

app.get('/api/getinfo', function(req, res){
    TaskModel.find({}, function(err, documents){
        if(err){
            res.send('Something wrong');
        }
        else{
            res.send(documents);
        }
    })
})
app.listen(port, (req, res) => {
    console.log(`App listening on port ${port}`)
})