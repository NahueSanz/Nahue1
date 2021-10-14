import React, { useState, useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CartContext from "../context/CartContext";
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.css'


export default function Cart(){

    const {products} = useContext(CartContext);

    const [state, setState] = React.useState({
        right: false
      });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown') {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    const list = (anchor) => (
        <Box
          sx={{ width: 350 }}
          onClick={toggleDrawer(anchor, false)}
        >
          <div className= 'cart-widget-title'>
                <p>Carrito de Compras</p>
                <Button onClick={toggleDrawer} color='primary'>
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
        </Box>
      );

    return <div className='cart-buttnav'>

        <Button onClick={toggleDrawer('right', true)}>
            <ShoppingCartIcon fontSize="medium" color='primary'/>
        </Button>
                <Drawer
                    anchor= 'right'
                    open={state['right']}
                    onClose={toggleDrawer('right', false)}
                >
                 {list('right')}
                 </Drawer>


    </div>

}