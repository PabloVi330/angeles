import React,{useContext} from 'react'
import AppContext from '../context/AppContext';

const ProductItem = ({product,setModal}) => {
const {setInfo,addToCart} = useContext(AppContext)
      
  const handleClick = (item) =>{
    console.log('levantando modal')
    setModal(true)
    setInfo(item)
  }

  const handdleClikAdd = (item) => {
    addToCart(item)
  } 


  return (
    <div className="product-card">
       <img src={product.images[0]} onClick={()=>handleClick(product)}/>
        <div className="product-info">
          <div>
            <p>{product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={()=>handdleClikAdd(product)}>
            <img src="{car}" />
          </figure>
        </div>
      </div>
  )
}

export default ProductItem