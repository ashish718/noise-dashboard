import React, { useState, useEffect } from 'react';
import {Form, Button, Tabs, Table} from 'react-bootstrap';
import axios from 'axios'

function CouponAlign(){
    const [couponList, setCouponList] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        fetchCouponList()
      },[]);

      let fetchCouponList = async()=>{
        try {
            let data = await axios.get(`https://stage-pre-order.gonoise.in/student/coupon/align`)
            setCouponList(data.data.data)
        } catch (error) {
            console.log(error, "fetchCouponList")
        }
    }
    return(
        <div>
            {couponList.length===0?(<h1>No Coupon Used</h1>):(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Added on</th>
                        <th>Flag</th>
                        <th>Assign To</th>
                        </tr>
                    </thead>
                    <tbody>

                       {couponList.map((item, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{item.coupon}</td>
                               <td>{item.added_on}</td>
                               <td>{item.coupon_flag}</td>
                               <td>{item.email}</td>
                               </tr>
                           )
                       )}

                    </tbody>
                    </Table>
            )}
        </div>
    )
}

export default CouponAlign