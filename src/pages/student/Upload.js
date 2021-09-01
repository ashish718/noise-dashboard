import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Form, Button, Tabs} from 'react-bootstrap';

function Upload(){

  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");

  let csvUpload = async(e)=>{
    e.preventDefault();
    const scvdata = new FormData();
    scvdata.append("discount", csvData)
    ;
    console.log(scvdata);
    axios
      .post(`http://localhost:9000/student/codes`, scvdata)
      .then((res) => {
          console.log(res, "res")
          alert('File Successfully uploaded')
      })
      .catch((error) => {
      });
  }

  return (
    <div>

      <Form>
        <Form.File
          id="custom-file-translate-scss"
          label= "Choose coupon file"
          lang="en"
          onChange={(e) => {setCsvData(e.target.files[0]);
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

export default Upload
