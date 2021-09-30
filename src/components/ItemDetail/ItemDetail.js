import React from "react";
import ItemCount from '../ItemCount/ItemCount'
import Button from '@material-ui/core/Button';
import './ItemDetail.css'

function ItemDetail(props){

    return(
        <div className="detail-container">
          <div className="detail-container-img">
                <img src={props.data.img} alt="" className="imagen-producto" />
            </div>

            <div className="detail-container-data">
                <h2>{props.data.title}</h2>
                <h3>${props.data.price}</h3>
                <ItemCount stock={props.data.stock}/>
                <Button variant="contained" color="primary" className="button-comprar" >Comprar</Button>
            </div>
        </div>
    )
}

export default ItemDetail;