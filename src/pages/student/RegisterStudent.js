import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table, Modal, Button} from 'react-bootstrap';


function RegisterStudent(){
    const [studentList, setStudentList] = useState([])
    const [show, setShow] = useState(false);
    const [imgSource, setImgSource] = useState('')
    const [imgType, setImgtype]= useState('')

    useEffect(() => {
        // Update the document title using the browser API
        fetchRegisterList()
      },[]);

    let fetchRegisterList = async()=>{
        try {
            let data = await axios.get(`${process.env.REACT_APP_BASE_URL}/student/register`)
            setStudentList(data.data.data)
        } catch (error) {
            console.log(error, "studentList")
        }
    }

    const handleClose = () => {setShow(false);
        setImgSource('');
        setImgtype('');}
    const handleShow = (data) => {setShow(true);
         setImgSource(data.doc_buffer_data);
         setImgtype(data.doc_type);
        }

    return(
        <div>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ID Card</Modal.Title>
        </Modal.Header>
        <Modal.Body><img style={{width:"450px", height:"200px"}} src={`data:${imgType};base64,${imgSource}`} alt=""/></Modal.Body>
   
      </Modal>
            {studentList.length===0?(<h1>No student register yet</h1>):(
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Customer Id</th>
                        <th>Email</th>
                        <th>College Details</th>
                        </tr>
                    </thead>
                    <tbody>

                       {studentList.map((student, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{student.c_id}</td>
                               <td>{student.email}</td>
                               {/* <td>
                                {student.stud_details.sort((a, b)=>b.upd_date - a.upd_date).map((data, i)=>
                                    (
                                        <ul>
                                        <li>Course Name: {data.course}</li>
                                        <li>Course Year: {data.year}</li>
                                        <li>University Name: {data.university}</li>
                                        <li>Id Card: <button onClick={()=>handleShow(data)}> View image</button></li>
                                        </ul>

                                        
                                    )
                                )}
                               </td> */}
                               </tr>
                           )
                       )}

                    </tbody>
                    </Table>
            )}

        </div>
    )
}

export default RegisterStudent