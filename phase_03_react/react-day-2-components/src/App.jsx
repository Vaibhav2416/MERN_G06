import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard'

const App = () => {
  const products=[
    {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcKOw2WUc2sWYOqTheeFzztbP2wALbueWsIN2lTn9om-mmh4W7u_EzdlI&s=10",productPrice:"80000",productTitle:"Iphone"},
    {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcKOw2WUc2sWYOqTheeFzztbP2wALbueWsIN2lTn9om-mmh4W7u_EzdlI&s=10",productPrice:"90000",productTitle:"Samsung"},
    {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcKOw2WUc2sWYOqTheeFzztbP2wALbueWsIN2lTn9om-mmh4W7u_EzdlI&s=10",productPrice:"30000",productTitle:"Oppo"},
    {imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcKOw2WUc2sWYOqTheeFzztbP2wALbueWsIN2lTn9om-mmh4W7u_EzdlI&s=10",productPrice:"40000",productTitle:"Vivo"}
  ]

  return (
    <div style={{
      display:"flex",
      height:"100vH",
      flexDirection:"column",
      justifyContent:"space-between",
    }}>
      <Navbar />
      <div style={{
        display:"flex",
        justifyContent:"space-between"
      }}>
        {
          products.map((el)=>{
            return <ProductCard imageUrl={el.imageUrl}
                                productTitle={el.productTitle}
                                productPrice={el.productPrice}/>
          })
        }

      </div>
      <Footer />
    </div>
  )
}

export default App