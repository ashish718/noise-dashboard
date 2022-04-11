import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import CsvDownload from "react-json-to-csv";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // eslint-disable-next-line
    fetchList();
  }, []);

  let fetchList = async () => {
    try {
      let data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dashboard/order`
      );
      console.log(data.data.data, "data");
      setOrders(data.data.data);
    } catch (error) {
      console.log(error, "fetchlist");
    }
  };

  return (
    <div>
      <CsvDownload data={orders} />
      {orders.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Title</th>
              <th>Variant</th>
              <th>Prebook Amount</th>
              <th>Created At</th>
              <th>Email Id</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, key) => (
              <tr>
                <td>{order.order_id_system}</td>
                <td>{order.prod_title}</td>
                <td>{order.product_details.title}</td>
                <td>{order.booking_amount}</td>
                <td>{order.created_at}</td>
                <td>{order.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Orders;
