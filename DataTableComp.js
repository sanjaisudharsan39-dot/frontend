import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component"

const DataTableComp = () => {
    const [todos, setTodos] = useState([])
        function getallData(){
            axios.get ("https://jsonplaceholder.typicode.com/totos")
            .then(res => {
                console.log(res.data);
                setTodos(res.data)                
            })
        }
        const col = [
            {
                name : 'id',
                selector : row => row.id
            },
            {
                name : "title",
                selector : row => row.title
            }
             ]
        useEffect(() => {
            getallData()
        },[])
  return (
    <div>
        <DataTable
        columns={col}
        data={todos}
        pagination
        paginationPerPage={15}
        paginationRowsPerPageOptions={[3,6,9,12]}
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        />      
    </div>
  )
}

export default DataTableComp
