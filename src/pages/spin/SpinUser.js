import React, { useState, useEffect } from 'react';
import {Form, Button, Tabs, Table} from 'react-bootstrap';
import axios from 'axios'

function SpinUser(){
    const [couponList, setCouponList] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        fetchCouponList()
      },[]);

      let fetchCouponList = async()=>{
        try {
            let reqHeaders = {
                "x-auth-secret": "0329b8ad3bce0bcfdda8ca65c37143c3ccc1e8ae0545da19898ca08bba8ed1a5"
            }
            let data = await axios.get(`https://stage-pre-order.gonoise.in/website/spin/user`, {headers:reqHeaders})
            console.log(data);
            setCouponList(data.data.data)
        } catch (error) {
            console.log(error, "spintable")
        }
    }
    return(
        <div>
            {couponList.length===0?(<h1>No User Found</h1>):(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Coupon Code</th>
                        <th>Label</th>
                        <th>Status</th>
                        <th>Created at</th>
                        </tr>
                    </thead>
                    <tbody>

                       {couponList.map((item, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{item.u_name}</td>
                               <td>{item.u_email}</td>
                               <td>{item.u_phone}</td>
                               <td>{item.u_code}</td>
                               <td>{item.u_code_label}</td>
                               <td>{item.u_flag}</td>
                               <td>{item.created_at}</td>
                               </tr>
                           )
                       )}

                    </tbody>
                    </Table>
            )}
        </div>
    )
}

export default SpinUser;