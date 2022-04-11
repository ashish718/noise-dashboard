import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import moment from "moment";
// import { format } from "date-fns";
import {baseUrl} from '../../components/api-config'

function Records() {
  const [records, setRecords] = useState([]);
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");

  useEffect(() => {
    // Update the document title using the browser API
    // eslint-disable-next-line
    recordData();
  }, []);

  let recordData = async () => {
    try {
      let data = await axios.get(
        `${baseUrl}/student/records`
      );
      console.log(data.data, "record data");

      setRecords(data.data.data);
    } catch (error) {
      console.log(error, "studentList");
    }
  };

  let handleDateFunc = (e, check) => {
    e.preventDefault();
    if (check === "start") {
      setSDate(e.target.value);
      return;
    }
    setEDate(e.target.value);
    return;
  };

  let filterDate = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/student/records/filter/${sDate}/${eDate}`
      );
      console.log(data.data, "filter record data");

      setRecords(data.data.data);
    } catch (error) {
      console.log(error, "studentList");
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="sDate">Start Date</label>
        <input type="date" onChange={(e) => handleDateFunc(e, "start")} />

        <label htmlFor="sDate">End Date:</label>
        <input type="date" onChange={(e) => handleDateFunc(e, "end")} />
        <button onClick={(e) => filterDate(e)}>Search</button>
      </div>
      {records.length === 0 ? (
        <p>No Record Found</p>
      ) : (
        // <><div>
        //     <label>Start Date</label>
        //     <input
        //         type="date"
        //         onChange={e => handleDateFunc(e, "start")} />
        //         <><label>End Date:</label><input
        //             type="date"y
        //             min={format(eDate, "YYYY-MM-DD")}
        //             onChange={e => handleDateFunc(e, "end")} /></>

        // </div>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>University</th>
              <th>Year</th>
              <th>Coupon Code Given</th>
              <th>Is Used</th>
              <th>Coupon Code updated On</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{item.email}</td>
                <td>{item.university}</td>
                <td>{item.year}</td>
                <td>{item.coupon}</td>
                <td>{item.coupon_flag}</td>
                <td>{moment(item.coupon_update).format("DD-MM-YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Records;
