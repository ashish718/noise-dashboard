import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table} from 'react-bootstrap';

function PreorderConfig (){
    const [products, setProducts] = useState([])
    useEffect(() => {
        // Update the document title using the browser API
        fetchConfigList()
      },[]);



    let fetchConfigList = async()=>{
        try {
            let data = await axios.get('https://stage-pre-order.gonoise.in/dashboard/preorder/product')
            console.log(data.data.data, "data")
                setProducts(data.data.data)
        } catch (error) {
            console.log(error, "fetchlist")
        }
    }


    let deleteConfig = async(id)=>{
        try {
            let data = await axios.delete(`https://stage-pre-order.gonoise.in/dashboard/preorder/product/${id}`)
            console.log(data.data, "status delete is ")
            if(data.data.status==="200"){
                fetchConfigList()
                alert("product removed from preorder sms")
            }
            else{
                alert("something went wrong")
            }
        } catch (error) {

        }

    }

    return(
        <div>
            {products.length===0?(<h1>No Config Found</h1>):(
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Product Id</th>
                        <th>Added On</th>
                        </tr>
                    </thead>
                    <tbody>

                       {products.map((product, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{product.p_id}</td>
                               <td>{product.timestamp}</td>
                               <td><button onClick={()=>deleteConfig(product.p_id)}>Delete</button></td>
                               </tr>
                           )
                       )}

                    </tbody>
                    </Table>
            )}
        </div>
    )
}

export default PreorderConfig
