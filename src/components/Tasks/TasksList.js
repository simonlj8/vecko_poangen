import React from "react";
import Table from 'react-bootstrap/Table'

function TasksList() {
    return (
        <div>           

            <Table className="table" striped bordered hover>
            
            <thead>
            <tr>
                <th>Namn</th>
                <th>Uppgift</th>
                <th>Poäng</th>
            
            </tr>
            
            </thead>
            
            
            </Table>
        
        
        
        
        </div>

    )
}

export default TasksList;