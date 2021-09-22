import React,{Component, useState} from "react";
import Product from "../Product/Product";



export default function ListProducts(){

// const [stock, setStock] = useState(0)
// const agregarStock = () => {
//     setStock(stock +1)
// }

    return(
         <div>
            {/* <button onClick={agregarStock}>agregar stock</button>
            <h2>{stock}</h2> */}
            <Product title="Remera1" price="1700" />
            <Product title="Remera2" price="1950" />
          </div>

      )
}
/*
export default class ListProducts extends Component{

    constructor(props){
        super(props)
            this.state={
                stock: 0
            }
    }


    agregarstock =() =>{
        this.setState({stock: this.state.stock +1})
    }

    render(){
        return(
            <div>
                <button onClick={this.agregarstock}>agregar stock</button>
                <h2>{this.state.stock}</h2>
                <Product title="logo" price="1700" />
                <Product title="logo" price="1700" />

            </div>
        )
    }   
}*/