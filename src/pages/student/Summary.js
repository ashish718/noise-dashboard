import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table, Modal, Button} from 'react-bootstrap';


function Summary(){
    const [summaryObj, setSummaryObj] = useState({})
    

    useEffect(() => {
        // Update the document title using the browser API
        summaryData()
      },[]);

    let summaryData = async()=>{
        try {
            let data = await axios.get(`https://78ba-223-190-82-219.ngrok.io/student/coupon/summary/total`)
            console.log(data.data, "summary data")

            setSummaryObj(data.data)
        } catch (error) {
            console.log(error, "studentList")
        }
    }

    return(
        <div>
            <Table striped bordered hover>
  <thead>
   
  </thead>
  <tbody>
    <tr>
        <th>Total coupon codes</th>
        <td>{summaryObj.total}</td>
    </tr>

    <tr>
        <th>Coupon codes distributed</th>
        <td>{summaryObj.alloted}</td>
    </tr>
    <tr>
        <th>coupon codes used</th>
        <td>{summaryObj.used}</td>
    </tr>
    <tr>
        <th>Coupon code available</th>
        <td>{summaryObj.left}</td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default Summary