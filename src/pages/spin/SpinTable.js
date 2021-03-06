import React, { useState, useEffect } from "react";
import {  Table } from "react-bootstrap";
import axios from "axios";

function SpinTable() {
  const [couponList, setCouponList] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // eslint-disable-next-line
    fetchCouponList();
  }, []);

  let fetchCouponList = async () => {
    try {
      let reqHeaders = {
        "x-auth-secret":
          "0329b8ad3bce0bcfdda8ca65c37143c3ccc1e8ae0545da19898ca08bba8ed1a5",
      };
      let data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dashboard/spin-config`,
        { headers: reqHeaders }
      );
      console.log(data);
      setCouponList(data.data.data);
    } catch (error) {
      console.log(error, "spintable");
    }
  };
  return (
    <div>
      {couponList.length === 0 ? (
        <h1>No Spin Config Data Found</h1>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Label</th>
              <th>Coupon Code</th>
              <th>Probability</th>
            </tr>
          </thead>
          <tbody>
            {couponList.map((item, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{item.resource}</td>
                <td>{item.code}</td>
                <td>{item.chance}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default SpinTable;
