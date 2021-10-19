import React,{useState} from "react";
import Button from '@material-ui/core/Button';


export default function ItemCount(props) {

    return(

        <div>
        <Button  size="small" variant="contained" color="primary" onClick={props.onLess} >-</Button>
        {props.quantity}
        <Button size ="small" variant="contained" color="secondary" onClick={props.onAdd}>+</Button>
        </div>
    )
}


