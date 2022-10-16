import React from 'react';
import '../styles/Header.scss'
import { useState, useContext } from 'react'
import Menu from './Menu';
import MenuMobile from '../pages/MenuMobile';

import AppContext from '../context/AppContext';
import MyOrders from '../containers/MyOrders';

const Header = () => {
    const [toggle, settoggle] = useState(false)
    const [menu, setMenu] = useState(false)
    const [myOrders, setMyOrders] = useState(false)

    const { serch, state } = useContext(AppContext)

    const handleAccount = () => {
        settoggle(!toggle)
    }

    const handleMenu = () => {
        setMenu(!menu)
    }
    const handleMyOrders = () => {
        setMyOrders(!myOrders)
    }

    const serchInput = (e) => {
        serch(e.target.value)

    }

    return (
        <div>
            <nav>

                <img src="" alt="/menu-mobile" className="menu" onClick={handleMenu} />
                <div className="navbar-left">
                    <img src=""alt="logo" className="nav-logo" />
                    <ul>
                        <li>
                            <a href="/d"  >All</a>
                        </li>
                        <li>
                            <a href="/dd">Clothes</a>
                        </li>
                        <li>
                            <a href="/dd">Electronics</a>
                        </li>
                        <li>
                            <a href="/dddd">Furnitures</a>
                        </li>
                        <li>
                            <a href="/dddd">Toys</a>
                        </li>
                        <li>
                            <a href="/ddd" on>Others</a>
                        </li>
                    </ul>

                </div>

                <div className="navbar-right">
                    <ul>
                        <li className="navbar-email" onClick={handleAccount}>
                            villegas_P
                        </li>
                        <li className="navbar-shopping-cart" onClick={handleMyOrders}>
                            <img src=""alt="shopping cart" />
                           
                        </li>
                    </ul>
                </div>
                {toggle && <Menu />}
                {menu && <MenuMobile />}
                {myOrders && <MyOrders 
                  setMyOrders={setMyOrders}
                />}



            </nav>
            <nav>


                <div className="container-serch">
                    
                        <input type="text" className='search' placeholder='search' onChange={serchInput} />
                    
                </div>


            </nav>
        </div>

    )
}

export default Header