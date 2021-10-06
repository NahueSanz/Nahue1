import React from "react";
import ItemCount from '../ItemCount/ItemCount'
import Button from '@material-ui/core/Button';
import './ItemDetail.css'

function ItemDetail(props){
    console.log(props.info)

    return(
        <div className="detail-container">

            
          <div className="detail-container-img">
                <img src={props.info.img} alt="" className="imagen-producto" />
            </div>

            <div className="detail-container-data">
                <h2>{props.info.title}</h2>
                <h3>${props.info.price}</h3>
                <ItemCount stock={props.info.stock}/>
                <Button variant="contained" color="primary" className="button-comprar" >Comprar</Button>
            </div>
        </div>
    )
}

export default ItemDetail;