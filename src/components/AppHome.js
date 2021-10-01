import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Modal, Button } from 'react-bootstrap';

function AppHome() {
    const [banner1, setBanner1] = useState({})

    const [banner2, setBanner2] = useState({})

    const [rId, setRId] = useState('')
    const [pId, setPId] = useState('')
    const [bId, setBId] = useState('')

    const [categoryArr, setCategoryArr] = useState([])

    const [slider, setSlider] = useState([])

    useEffect(() => {
        HomeData()
    }, [])

    let HomeData = async () => {
        let req_headers = {
            "x-auth-secret": process.env.REACT_APP_X_SECRET
        }
        let fetchdata = await axios
            .get(`${process.env.REACT_APP_BASE_URL}/mobile/category`, { headers: req_headers })
            .then(data => {
                console.log(data.data.data, "data----->");
                setBanner1(data.data.data.banner1)
                setBanner2(data.data.data.banner2)
                setRId(data.data.data.recommend_id)
                setBId(data.data.data.bestSelling_id)
                setPId(data.data.data.popular_id)
                setCategoryArr(data.data.data.category)
                setSlider(data.data.data.slider)
            })
            .catch(error => {
                console.log("api get error in home app", error);
            })
    }

    let updateHome = async (e) => {
        let req_headers = {
            "x-auth-secret": process.env.REACT_APP_X_SECRET
        }
        let updPayload = {
            category: categoryArr,
            recommend_id: rId,
            popular_id: pId,
            bestSelling_id: bId,
            banner1: banner1,
            banner2: banner2,
            slider: slider
        }
        let payloadString = JSON.stringify(updPayload)
        console.log(payloadString, "payload string si ----->")
        let updateData = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/mobile/home`,
            headers: req_headers,
            data: { payload: payloadString }
        })
            // .post('https://stage-pre-order.gonoise.in/mobile/home', { headers: req_headers, payload: payloadString })
            .then(data => {
                console.log(data, "dataß")
                console.log(data.data.status)
                if (data.data.status === "200") {
                    HomeData()
                    alert("updated");
                }

            })
            .catch(error => {
                console.log("api issue in update app home", error)
            })
    }

    let updateSlider = async (e, type, index) => {
        let tempArray = slider
        tempArray[index][type] = e.target.value
        setSlider(tempArray)
    }

    return (
        <div style={{ width: "100%" }}>
            <div className="banner">
                <div>
                    <h1 className="font-weight-bold">Banner 1</h1>
                    <label className="mb-2 mt-2">ImgUrl :</label>
                    <input type="text" style={{ width: "70%" }} value={banner1.img} onChange={e => setBanner1({ img: e.target.value, handle: banner1.handle, url:banner1.url||"" })} />
                    <br />
                    <img style={{ width: "80%", borderRadius: 8 }} src={banner1.img} alt="banner" />
                    <br />
                    <label className="mr-2 mt-4">Product Handle :</label>
                    <input type="text" style={{ width: "70%" }} value={banner1.handle} onChange={e => setBanner1({ img: banner1.img, handle: e.target.value, url:banner1.url||"" })} />
                    <br/>
                    <label className="mr-2 mt-4">Page Url :</label>
                    <input type="text" style={{ width: "70%" }} value={banner1.url} onChange={e => setBanner1({ img: banner1.img, handle: banner1.handle, url:e.target.value })} />
                </div>
                <div>
                    <h1 className="font-weight-bold">Banner 2</h1>
                    <label className="mb-2 mt-2">Img Url :</label>
                    <input type="text" style={{ width: "70%" }} value={banner2.img} onChange={e => setBanner2({ img: e.target.value, handle: banner2.handle ,url:banner2.url||""})} />
                    <br />
                    <img style={{ width: "80%", borderRadius: 8 }} src={banner2.img} alt="banner2" />
                    <br />
                    <label className="mr-2 mt-4">Product Handle :</label>
                    <input type="text" style={{ width: "70%" }} value={banner2.handle} onChange={e => setBanner2({ img: banner2.img, handle: e.target.value, url:banner2.url||"" })} />
                    <br/>
                    <label className="mr-2 mt-4">Page Url :</label>
                    <input type="text" style={{ width: "70%" }} value={banner2.url} onChange={e => setBanner2({ img: banner2.img, handle:banner2.handle ,url: e.target.value })} />
                </div>
            </div>

            <h1 className="font-weight-bold">Slider</h1>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Img Url</th>
                        <th>Url</th>
                        <th >Handle</th>
                        <th >Add New</th>
                    </tr>
                </thead>
                <tbody>

                    {slider.map((slide, key) =>
                    (
                        <tr>
                            <td>{key + 1}</td>
                            <td><img style={{ width: "90%", borderRadius: 5 }} src={slide.img} alt="" /></td>
                            <td>{slide.img}</td>
                            <td>{slide.url}</td>
                            <td>{slide.handle}</td>
                            <td><input className="mb-2" type="text" placeholder="Enter New Image Url" onChange={e => updateSlider(e, 'img', key)} />
                            <input className="mb-2" type="text" placeholder="Enter New Handle" onChange={e => updateSlider(e, 'handle', key)} />
                            <input type="text" placeholder="Enter New Url" onChange={e => updateSlider(e, 'url', key)} />
                            </td>
                        </tr>
                    )
                    )}

                </tbody>
            </Table>


            <button type="submit" onClick={e => updateHome(e)}>Update</button>
        </div>
    )
}

export default AppHome