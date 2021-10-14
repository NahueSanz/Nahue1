import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import './CartWidget.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export default function CartWidget({ toggleDrawer, close, show }) {

    const {products} = useContext(CartContext);

    const list = (anchor) => (
        <Box
          sx={{ width: 250 }}
          onClick={toggleDrawer(anchor, false)}
        >
          {/*poner aca codigo de lo que quiero que muestre el box*/}
        </Box>
      );



    return (
        <div className= {`cart-widget-${show ? 'active' : ''}`}>
            <div className= 'cart-widget-title'>
                <h4>Carrito de compras</h4>
                <Button onClick={close} color='primary'>
                    <CloseIcon/>
                </Button>
            </div>
            {products.map((product) =>{
                return(
                    <div className="cart-widget-product" key={product.id}>
                        <div className="cart-widget-img">
                            <img src={product.img} alt="" className="imagen-producto" />
                        </div>
                        <div className="cart-widget-data">
                            <p>{product.title}</p>
                            <p>${product.price}</p>
                        </div>
                        <div className='conteiner-action'>
                            <Button>
                                <DeleteIcon/>
                            </Button>
                        </div> 
                    </div>

                )
            })}

        </div>
    )
}