import React,{useState} from "react";
import ItemCount from '../ItemCount/ItemCount'
import Button from '@material-ui/core/Button';
import './ItemDetail.css'
import { Link } from 'react-router-dom';

function ItemDetail(props){

    const [items, setItems] = useState(0);

    const onAdd = () =>{
        items < props.info.stock && setItems(items + 1);
    }
    const onLess = () =>{
        items !== 0 && setItems(items - 1);
    }

    return(
        <div className="detail-container">

            
          <div className="detail-container-img">
                <img src={props.info.img} alt="" className="imagen-producto" />
            </div>

            <div className="detail-container-data">
                <h2>{props.info.title}</h2>
                <h3>${props.info.price}</h3>
                <ItemCount onAdd = {onAdd} onLess={onLess} quantity={items}/>
                <Link className="link-button" to="/cart"><Button variant="contained" color="primary" className="button-comprar" >Comprar</Button></Link>
            </div>
        </div>
    )
}

export default ItemDetail;