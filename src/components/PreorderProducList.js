import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

function PreorderProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // eslint-disable-next-line
    fetchList();
  }, []);

  let fetchList = async () => {
    try {
      let data = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/dashboard/products`,
        {
          headers: {
            "x-auth-secret": process.env.REACT_APP_X_SECRET,
          },
        }
      );
      console.log(data.data.data, "data");
      setProducts(data.data.data);
    } catch (error) {
      console.log(error, "fetchlist");
    }
  };

  let addConfig = async (product) => {
    try {
      console.log("product", product);
      // debugger;
      let obj = {
        p_id: product.id,
        p_name: product.title,
      };
      let data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/dashboard/preorder/product/add`,
        obj,
        {
          headers: {
            "x-auth-secret": process.env.REACT_APP_X_SECRET,
          },
        }
      );
      console.log(data, "data is ------------------------");
      if (data.data.status == "200") {
        return alert(data.data.message);
      }

      return alert(data.data.message);

    } catch (error) {
      console.log(error, "addconfig");
    }
  };

  return (
    <div>
      {products.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Id</th>
              <th>Title</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, key) => (
              <tr>
                <td>{key + 1}</td>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.product_type}</td>
                <td>
                  <button onClick={() => addConfig(product)}>Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default PreorderProductList;
