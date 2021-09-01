import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table, Modal, Button} from 'react-bootstrap';

function AppHome (){
    const [banner1, setBanner1] = useState({})

    const [banner2, setBanner2] = useState({})

    const [rId, setRId] = useState('')
    const [pId, setPId] = useState('')
    const [bId, setBId] = useState('')

    const [categoryArr, setCategoryArr] = useState([])
    
    const [slider, setSlider] = useState([])
    
    useEffect(()=>{
        HomeData()
    },[])

    let HomeData = async()=>{
        let req_headers = {
            "x-auth-secret":"0329b8ad3bce0bcfdda8ca65c37143c3ccc1e8ae0545da19898ca08bba8ed1a5"
        }
        let fetchdata = await axios.get('http://localhost:9000/mobile/category', {headers:req_headers})
        .then(data=>{
            console.log(data.data.data, "data----->");
            setBanner1(data.data.data.banner1)
            setBanner2(data.data.data.banner2)
            setRId(data.data.data.recommend_id)
            setBId(data.data.data.bestSelling_id)
            setPId(data.data.data.popular_id)
            setCategoryArr(data.data.data.category)
            setSlider(data.data.data.slider)
        })
        .catch(error=>{
            console.log("api get error in home app", error);
        })
    }

    let updateHome = async(e)=>{
        let req_headers = {
            "x-auth-secret":"0329b8ad3bce0bcfdda8ca65c37143c3ccc1e8ae0545da19898ca08bba8ed1a5"
        }
        let updPayload={
            category: categoryArr,
            recommend_id: rId,
            popular_id:pId,
            bestSelling_id: bId,
            banner1:banner1,
            banner2:banner2,
            slider:slider
        }
        let payloadString = JSON.stringify(updPayload)
        console.log(payloadString, "payload string si ----->")
        let updateData = await axios.post('http://localhost:9000/mobile/home', {headers:req_headers, payload:payloadString})
        .then(data=>{
            console.log(data, "dataß")
            console.log(data.data.status)
            if(data.data.status==="200"){
                HomeData()
            }

        })
        .catch(error=>{
            console.log("api issue in update app home", error)
        })
    }

    let updateSlider = async(e, type, index)=>{
        let tempArray = slider
        tempArray[index][type] = e.target.value
        setSlider(tempArray)
    }

    return(
        <div style={{width:"100%"}}>
                    <h1>Banner 1</h1>
                    <label>Img Url</label>
                    <input type="text" value={banner1.img} onChange={e=>setBanner1({img:e.target.value, handle:banner1.handle})}/>
                    <br/>
                    <label>Handle</label>
                    <input type="text" value={banner1.handle} onChange={e=>setBanner1({img:banner1.img, handle:e.target.value})}/>
                
                    <h1>Banner 2</h1>
                    <label>Img Url</label>
                    <input type="text" value={banner2.img} onChange={e=>setBanner2({img:e.target.value, handle:banner1.handle})}/>
                    <br/>
                    <label>Handle</label>
                    <input type="text" value={banner2.handle} onChange={e=>setBanner2({img:banner1.img, handle:e.target.value})}/>
                
                    <h1>Slider</h1>
                    <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Img Url</th>
                        <th>Handle</th>
                        <th>Add New</th>
                        </tr>
                    </thead>
                    <tbody>

                       {slider.map((slide, key)=>
                           (
                            <tr>
                                <td>{key+1}</td>
                               <td>{slide.img}</td>
                               <td>{slide.handle}</td>
                               <td><input type="text" placeholder="Enter New Image Url" onChange={e=>updateSlider(e, 'img', key)} /> <input type="text" placeholder="Enter New Handle" onChange={e=>updateSlider(e, 'handle', key)} /></td>
                               </tr>
                           )
                       )}

                    </tbody>
                    </Table>
                
            
            <button type="submit" onClick={e=>updateHome(e)}>Update</button>
        </div>
    )
}

export default AppHome