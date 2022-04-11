import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { Table } from "react-bootstrap";
import {baseUrl} from "../../../components/api-config";

const RecordIIT = () => {
  const [record, setRecord] = useState([]);
  const [sDate, setSDate] = useState("");
  const [eDate, setEDate] = useState("");

  useEffect(() => {
    // eslint-disable-next-line
    recordData();
  }, []);

  const recordData = async (e) => {
    try {
      let record = await axios.get(
        `${baseUrl}/student/records/iit`
      );
      console.log(record.data, "record data");

      setRecord(record.data.data);
    } catch (error) {
      console.log(error, "studentList");
    }
  };

  const handleDateFunc = (e, check) => {
    e.preventDefault();
    if (check === "start") {
      setSDate(e.target.value);
      return;
    }
    setEDate(e.target.value);
    return;
  };

  const filterDate = async (e) => {
    e.preventDefault();
    try {
      let data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/student/records/filter/${sDate}/${eDate}`
      );
      console.log(data.data, "filter record data");

      setRecord(data.data.data);
    } catch (error) {
      console.log(error, "studentList");
    }
  };

  return (
    <>
      <div >
        <div>
          <label htmlFor="sDate">Start Date</label>
          <input type="date" onChange={(e) => handleDateFunc(e, "start")} />

          <label htmlFor="sDate">End Date:</label>
          <input type="date" onChange={(e) => handleDateFunc(e, "end")} />
          <button onClick={(e) => filterDate(e)}>Search</button>
        </div>
        {record.length === 0 ? (
          <p>No Record Found</p>
        ) : (
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
              {record.map((item, key) => (
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
    </>
  );
};

export default RecordIIT;
