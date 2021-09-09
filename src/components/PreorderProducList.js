import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table} from 'react-bootstrap';

function PreorderProductList (){
    const [products, setProducts] = useState([])

    useEffect(() => {
        // Update the document title using the browser API
        fetchList()
      },[]);



    let fetchList = async()=>{
        try {
            let data = await axios.get('https://stage-pre-order.gonoise.in/dashboard/products')
            console.log(data.data.data, "data")
                setProducts(data.data.data)
        } catch (error) {
            console.log(error, "fetchlist")
        }
    }

    let addConfig = async(product)=>{
        try {
            
            let obj = {
                "p_id":product.id
            }
            let data = await axios.post('https://stage-pre-order.gonoise.in/dashboard/preorder/product/add', obj)
            console.log(data, "data is ------------------------")
            if(data.data.status==="200"){
               return alert("Added to preorder sms")
            }
            else if(data.data.status==="401"){
                return alert("Product Id issue, not added for sms")
            }
            else if(data.data.status==="402"){
                return alert("Product already added for preorder sms, check config")
            }
        } catch (error) {
            console.log(error, "addconfig")
        }

    }

    return(
        <div>
            {products.length===0?(<h1>Loading</h1>):(
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

                       {products.map((product, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{product.id}</td>
                               <td>{product.title}</td>
                               <td>{product.product_type}</td>
                               <td><button onClick={()=>addConfig(product)}>Add</button></td>
                               </tr>
                           )
                       )}

                    </tbody>
                    </Table>
            )}
        </div>
    )
}

export default PreorderProductList
