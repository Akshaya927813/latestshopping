import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from './Nav'

const View = () => {
    const [shop, changeshop] = useState(
        {"products": []}
    )

    const fetchData = () => {
        axios.get("https://dummyjson.com/products").then(
            (response) => {
                changeshop(response.data)
            }
        ).catch()
    }

    useEffect(( ) => {fetchData()},[])

    return (
        <div style={{
            backgroundImage: "url('https://t4.ftcdn.net/jpg/02/32/16/07/360_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100%", // adjust as needed
            width: "100%",
        }}> <Nav />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3 ">
                            
                                {
                                    shop.products.map(
                                        (data, index) => {
                                            return (
                                                <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                                <div class="card" >
                                                    <img src={data.thumbnail} class="card-img-top" alt="..."></img>
                                                        <div class="card-body">
                                                            <h5 class="card-title">{data.title}</h5>
                                                            <p class="card-text"><b>About :</b> {data.description}</p>
                                                            <p class="card-text"><b>Category :</b> {data.category} </p>
                                                            <p class="card-text"><b>Stock : </b>{data.stock} </p>
                                                            <p class="card-text"> <b>Rating : </b>  {data.rating}</p>
                                                            <p class="card-text"><b>Price : </b> {data.price} </p>
                                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                                        </div>
                                                </div>
                                                </div>
                                            )
                                        }
                                    )
                                }
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View