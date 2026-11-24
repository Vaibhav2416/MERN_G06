import React from 'react'

const ProductCard = ({imageUrl,productTitle,productPrice}) => {
  return (
    <div style={{
        width:"200px",
        height:"200px",
        border:"1px solid red"
    }}>
        <img width="90px" height="100px" src={imageUrl} alt="" />
        <h3>Title: {productTitle} </h3>
        <p>Price: {productPrice}</p>
    </div>
  )
}

export default ProductCard