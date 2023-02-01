import *  as React from 'react';
import { useState } from 'react';
import './Tasks.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import TasksList from '../Tasks/TasksList'


function Tasks() {
    const [name, setName] = useState('')
    const [task, setTask] = useState('')
    const [points, setPoints] = useState('')

    function setData(e) {
        e.preventDefault()
        let data = {
            name: name,
            task: task,
            points: points
        }
        console.log(data)
        axios.post('/api/validate', data).then(res => {
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className='container2'>
                <div className='child'>
                    <Form.Select aria-label="Default select example" onChange={(e) => { setName(e.target.value) }}>
                        <option>Välj vilket barn</option>
                        <option value="Barn 1">Barn 1</option>
                        <option value="Barn 2">Barn 2</option>
                        <option value="Barn 3">Barn 3</option>
                        <option value="Barn 4">Barn 4</option>
                    </Form.Select>
                </div>
                <div className='task'>
                    <Form.Select aria-label="Default select example" onChange={(e) => { setTask(e.target.value) }}>
                        <option>Välj vilken uppgift som ska utföras</option>
                        <option value="Diskmaskinen">Diskmaskinen</option>
                        <option value="Dammsuga">Dammsuga</option>
                        <option value="Städa hamsterburen">Städa hamsterburen</option>
                        <option value="Gå ut med sopor">Gå ut med sopor</option>
                        <option value="Rasta hunden">Rasta hunden</option>
                        <option value="Städa rummet">Städa rummet</option>
                    </Form.Select>
                </div>
                <div className='points'>
                    <Form.Select aria-label="Default select example" onChange={(e) => { setPoints(e.target.value) }}>
                        <option>Uppgiften är värd:</option>
                        <option value="10">10:-</option>
                        <option value="15">15:-</option>
                        <option value="20">20:-</option>
                        <option value="25">25:-</option>
                    </Form.Select>
                </div>
            </div>
            <div className='submitButton'>
                <Button variant="success" onClick={setData}>Lägg till</Button>
            </div>
            <TasksList />           
        </div>
    );

}

export default Tasks;