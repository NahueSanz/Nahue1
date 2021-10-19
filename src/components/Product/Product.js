import React,{ useContext } from "react";
import './Product.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CartContext from "../../context/CartContext";

const Producto = (props) =>{

    const { produts, addItem } = useContext(CartContext);

    const addToCart = () =>{
        addItem(props);
    }

    return(
        <div className="container-producto">

            <div className="container-producto-img">
                <img src={props.img} alt="" className="imagen-producto" />
            </div>

            <div className="container-producto-data">
                <h2>{props.title}</h2>
                <h3>${props.price}</h3>
                <Button onClick={addToCart} variant="contained" color="primary" className="button-comprar" >Comprar</Button>
                <Link className="link-button" to={`/detalle/${props.id}`}><Button variant="contained" color="primary" className="button-comprar" >Ver</Button></Link>
            </div>

        </div>
    )
}

export default Producto;