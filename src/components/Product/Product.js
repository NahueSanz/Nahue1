import React from "react";
import './Product.css'


/*Class component

class Product extends React.Component {
    render(){
            return(
                <div>
                    Componente tipo clase
                </div>
            )
    }
}*/

//Function component

const Producto = (props) =>{


    return(
        <>
            <div className="container-producto">
                <img src='https://assets.adidas.com/images/w_600,f_auto,q_auto/5d9232dcfdc0453f8169a953000648bb_9366/Remera_FreeLift_Sport_Prime_Lite_Negro_DU1374.jpg' className="imagen-producto" />
            </div>
            <h3>{props.title}</h3>
            <p>${props.price}</p>
            <button>Comprar</button>
        </>
    )
}

export default Producto;