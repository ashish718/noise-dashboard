import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import {baseUrl} from '../../../components/api-config'

const UploadIIT = () => {
  const [csvData, setCsvData] = useState([]);
  const [fileName, setFileName] = useState("");

  const csvUpload = async (e) => {
    e.preventDefault();
    const scvdata = new FormData();
    scvdata.append("discount", csvData);
    console.log(scvdata);
    axios
      .post(`${baseUrl}/student/code/iit`, scvdata)
      .then((res) => {
        console.log(res);
        alert("File Successfully uploaded");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="conatiner">
        <Form>
          <Form.File
            id="custom-file-translate-scss"
            label="Choose coupon file"
            lang="en"
            onChange={(e) => {
              setCsvData(e.target.files[0]);
              setFileName(e.target.files[0].name);
            }}
            encType="multipart/form-data"
            accept=".csv"
            custom
          />
          <br />
          <br />
          <span>{fileName}</span>
          <br />
          <br />
          <Button variant="dark" onClick={csvUpload}>Upload</Button>
        </Form>
      </div>
    </>
  );
};

export default UploadIIT;
