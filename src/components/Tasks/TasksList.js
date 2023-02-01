import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import axios from "axios";


function TasksList() {

    const [list, setList] = useState([])

    useEffect(() => {

        axios.get('/api/getinfo').then(
            res => {
                console.log(res);
                setList(res.data)
            }
        ).catch(err => {
            console.log(err)
        })

    }, [])

    const listData = list.map((obj) => {
        return <tr>
            <td>{obj.name}</td>
            <td>{obj.task}</td>
            <td>{obj.points}</td>
        </tr>
    })

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
                {listData}
            </Table>
        </div>
    )
}

export default TasksList;