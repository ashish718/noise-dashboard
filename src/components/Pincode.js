import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Form, Button} from 'react-bootstrap';


function Pincode(){

  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");

  let csvUpload = async(e)=>{
    e.preventDefault();
    const scvdata = new FormData();
    scvdata.append("file", csvData);
    console.log(scvdata);
    axios
      .post(`http://localhost:9000/dashboard/pincode`, scvdata)
      .then((res) => {
      })
      .catch((error) => {
      });
  }

  return (
    <div>

      <Form>
        <Form.File
          id="custom-file-translate-scss"
          label= "Choose COD Deliver file"
          lang="en"
          onChange={(e) => {
										setCsvData(e.target.files[0]);
                    setFileName(e.target.files[0].name);
										}}
					encType="multipart/form-data"
					accept=".csv"
          custom
        />
        <br/>
        <br/>
        <span>{fileName}</span>
        <br/>
        <br/>
        <Button variant="dark" onClick={csvUpload} type="submit">Upload</Button>
      </Form>
    </div>
  )
}

export default Pincode
