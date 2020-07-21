import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Product(){
    const { id } = useParams()
    const url = `https://5f08bc41445d080016691c85.mockapi.io/products/${id}`  // http://5f08bc41445d080016691c85.mockapi.io/products?page=1&limit=10

    let product = useAxiosGet(url)

    let content = null



    if(product.error){
        content = <p>
            There was an error please refresh or try again later.
        </p>
    }

    if(product.loading){
        content = <Loader />
    }

    if(product.data){
         content = 
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>
            <div>
                <img 
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return(
            <div>
                {content}
            </div>
        )
    
}

export default Product