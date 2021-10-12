import { Button } from "@material-ui/core";
import React, { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Cart(){

    const [showCart,setShowCart] = useState(false);

    const handleCart = () =>{

        !showCart ? setShowCart(true) : setShowCart(false);

    }

    return <div className='cart-buttnav'>

        <Button variant = 'outlined' onClick={handleCart}>
        <ShoppingCartIcon fontSize="medium" color='primary'/>
        </Button>
        <CartWidget show={showCart} close={handleCart}/>

    </div>

}