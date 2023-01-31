import * as React from 'react';
import './Tasks.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Tasks() {

    return (
        <>
        <div className='container2'>
            <div className='child'>
                <Form.Select aria-label="Default select example">
                    <option>Välj vilket barn</option>
                    <option value="1">Barn 1</option>
                    <option value="2">Barn 2</option>
                    <option value="3">Barn 3</option>
                </Form.Select>
            </div>
            <div className='tasks'>
                <Form.Select aria-label="Default select example">
                    <option>Välj vilken uppgift som ska utföras</option>
                    <option value="1">Diskmaskinen</option>
                    <option value="2">Dammsuga</option>
                    <option value="3">Städa hamsterburen</option>
                    <option value="4">Gå ut med sopor</option>
                </Form.Select>
            </div>
            <div className='points'>
                <Form.Select aria-label="Default select example">
                    <option>Uppgiften är värd:</option>
                    <option value="1">10:-</option>
                    <option value="2">15:-</option>
                    <option value="3">20:-</option>
                    <option value="4">25:-</option>
                </Form.Select>
            </div>       
        </div>
        <div className='submitButton'>
        <Button variant="success">Lägg till</Button>{' '}
        </div>
        </>
    );

}

export default Tasks;