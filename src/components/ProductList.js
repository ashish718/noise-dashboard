import React, { useState, useEffect } from 'react';
import axios from 'axios'
import {Table} from 'react-bootstrap';

function ProductList (){
    const [products, setProducts] = useState([])
    const [amount, setAmount] = useState("")

    useEffect(() => {
        // Update the document title using the browser API
        fetchList()
      },[]);



    let fetchList = async()=>{
        try {
            let data = await axios.get(`${process.env.REACT_APP_BASE_URL}/dashboard/products`)
            console.log(data.data.data, "data")
                setProducts(data.data.data)
        } catch (error) {
            console.log(error, "fetchlist")
        }
    }

    let addConfig = async(product)=>{
        try {
            if (amount===""||parseInt(amount)===0) return alert('price 0 or balnak is not allowed')
            if(amount>parseInt(product.variants[0].price)){
                return alert('Pre book amount is greater than product price')
            }
            let obj = {
                "p_id":product.id,
                "amount":amount,
                "title": product.title
            }
            let data = await axios.post(`${process.env.REACT_APP_BASE_URL}/dashboard/add`, obj)
            if(data.status==="200"){

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
                               <td><input type="text" placeholder="Enter X-amount or %" onChange={(e)=>setAmount(e.target.value)}/></td>
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

export default ProductList
