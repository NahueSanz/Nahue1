import React,{useState} from "react";
import Button from '@material-ui/core/Button';


export default function ItemCount(props) {

    const [items, setItems] = useState(0);
    const [disableButtonPlus, setDisableButtonPlus] = useState(false);
    const [disableButtonMinus, setDisableButtonMinus] = useState(true);


    const sumar = () => {
        if(items < props.stock){
            setItems(items + 1);
            setDisableButtonMinus(false);
        }else{
            setDisableButtonPlus(true);
        }      
    }

    const restar = () => {
        if(items > 0){
            setItems(items - 1);
            setDisableButtonPlus(false);

        }else{
            setDisableButtonMinus(true);
        }      
    }

    return(

        <div>
        <Button  size="small" variant="contained" color="primary" disabled= {disableButtonMinus} onClick={restar}>-</Button>
        {items}
        <Button size ="small" variant="contained" color="secondary" disabled= {disableButtonPlus} onClick={sumar}>+</Button>
        </div>
    )
}


