import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table} from 'react-bootstrap';

function ProductConfig (){
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState()
    useEffect(() => {
        // Update the document title using the browser API
        fetchConfigList()
      },[]);



    let fetchConfigList = async()=>{
        try {
            let data = await axios.get('http://localhost:9000/dashboard/list')
            console.log(data.data.data, "data")
                setProducts(data.data.data)
        } catch (error) {
            console.log(error, "fetchlist")
        }
    }

    // let updateConfig = async(product)=>{
    //     try {
    //         if(amount>parseInt(product.variants[0].price)){
    //             return alert('Pre book amount is greater than product price')
    //         }
    //         let obj = {
    //             "p_id":product.id,
    //             "amount":amount,
    //             "title": product.title
    //         }
    //         let data = await axios.post('/dashboard/add', obj)
    //         if(data.status==="200"){

    //         }
    //     } catch (error) {
    //         console.log(error, "addconfig")
    //     }

    // }

    let deleteConfig = async(id)=>{
        try {
            let data = await axios.delete(`http://localhost:9000/dashboard/remove/${id}`)
            console.log(data.data, "status delete is ")
            if(data.data.status==="200"){
                fetchConfigList()
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
                        <th>Title</th>
                        <th>Pre Booking Amount</th>
                        </tr>
                    </thead>
                    <tbody>

                       {products.map((product, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{product.p_id}</td>
                               <td>{product.title}</td>
                               <td>{product.pre_amount}</td>
                               {/* <td><input type="text" placeholder="Enter X-amount or %" value={product.pre_amount} onChange={(e)=>setAmount(e.target.value)}/></td> */}
                               {/* <td><button onClick={()=>updateConfig(product)}>Update</button></td> */}
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

export default ProductConfig
