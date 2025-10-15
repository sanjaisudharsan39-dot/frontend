import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import DataTable from 'react-data-table-component'

const DisplayStud = () => {
    let [dataItem, setData] = useState([]);
    let [isEdit, SetIsEdit] = useState(false);
    const [fetchData, setFetchData] = useState(false);
    const initialStudent = {
        studentId:"",
        name:"",
        rollno:"",
        year:"",
        department:"",
        gender:""
    };
    let [ Stud, setStud] = useState(initialStudent)
    function getdata(){

        axios.get("http://92.205.109.210:8051/api/getall")
            .then(res => {
                console.log(res.data);
                setData(res.data.data)
                
            })
    } 
    useEffect(() => {
        if(fetchData){
            getdata()
        }
    }, [fetchData]);
        function handleEdit(value){
            console.log(value);
            SetIsEdit(true)
            setStud({...value})
        }
        function handleDelete(id){
            console.log(id);
        axios.post(`http://92.205.109.210.8051/api/detete/${id}`)
        alert('deleted successfully////.......')
        getdata()    
        }
    const col = [
        {
            name:'studentId',
            selector:row=>row.studentId
        },
        {
            name:'name',
            selector:row=>row.name
        },
        {
            name:'Roll No',
            selector:row=>row.rollno
        },
        {
            name:'year',
            selector:row=>row.Year
        },
        {
            name:'Dept',
            selector:row=>row.department
        },
        {
            name:'Gender',
            selector:row=>row.gender
        },
        {
            name:'Edit',
            selector:row => <Button onClick = {() => handleEdit(row)}>Edit</Button>
        },
        {
            name:'Delete',
            selector:row=><Button variant="danger" onClick={()=>handleDelete(row.studentId)}>Delete</Button>
        }]
    useEffect(() => {
        getdata()
    },[])
    function handleChange(e){
        setStud({...Stud,[e.target.name]:e.target.value})
        console.log(Stud);  
    }
    function handleSave(e){
        e.preventDefault();

    const apiUrl = isEdit
        ?`http://92.205.109.210:8051/api/updata/${Stud.studentId}`
        :'http://92.205.109.210:8051/api/create';
        console.log(Stud);
        

    axios
    .post(apiUrl,Stud)
    .then((res) => {
        alert(isEdit ? 'updated Successfully...' : 'created successfully....');
        setStud(initialStudent);
        setFetchData(true);
    })
    .catch((err) => console.log(err));
    }

  return (
    <div>
        <Card>
            <form onSubmit={handleSave}>
                <input type='text' name='name' value={Stud.name} placeholder='name' onChange={handleChange}/>
                <input type='text' name='rollno' value={Stud.rollno} placeholder='rollno' onChange={handleChange}/>
                <input type='number' name='year' value={Stud.year} placeholder='year' onChange={handleChange}/>
                <input type='text' name='department' value={Stud.department} placeholder='department' onChange={handleChange}/>
                <input type='radio' name='gender' value="Male" onChange={handleChange}/>
                <label>Male</label>
                <input type='radio' name='gender' value="Female" onChange={handleChange}/>
                <label>Female</label>
                <button>{isEdit?'update':'save'}</button>
            </form>
        </Card>
        
    <DataTable
        columns={col}
        data={dataItem}
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

export default DisplayStud
 