import React, { useContext } from 'react'
import '../styles/ProductInfo.scss'
import AppContext from '../context/AppContext'

const ProductInfo = ({ stateInfo,setModal }) => {

    const closeInfo = () => {
        setModal(false)
    }


    return (
        <div className="info-container">
            <aside className="info-product-detail">

                <div className='info-header'>
                    <div className="info-product-detail-close" onClick={closeInfo}>
                        <img src="" alt="close"  />
                    </div>
                    <img src={stateInfo?.images[0]} alt="bike" />
                </div>



                <div className="info-product-info">
                    <p>{stateInfo?.price}</p>
                    <p>Bike</p>
                    <p>{stateInfo?.description}</p>
                    <button className="info-primary-button info-add-to-cart-button">
                        <img src="" alt="add to cart" />
                        Add to cart
                    </button>
                </div>
            </aside>
        </div>

    )
}

export default ProductInfo