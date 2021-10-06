import React,{useEffect, useState} from "react";
import Product from "../Product/Product";
import './ListProducts.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import data from '../../Items/Data.json'
import { useParams } from "react-router";

export default function ListProducts(){

const categoryId = useParams();
const [products, setProducts] = useState([]);

useEffect(()=>{
    new Promise((resolve)=>{
        setTimeout(() => {
            resolve(data);
        },2000 );
    })

    .then((res)=>{

            categoryId.categoryId ? setProducts(res.Data.filter((info) => info.category === categoryId.categoryId)) : setProducts(res.Data);
    })
},[])

    return(
        <div className="contenedor-productos">
             
            {products.length ? (
               
                products.map((products)=>{//grid y el grid grandote arriba(div)
                    return <Product key = {products.id} id={products.id} title={products.title} price={products.price} img={products.img}/>
                   })

                    ):(
                    <Box className="circularProgress">
                        <CircularProgress />
                    </Box>
                    )}

            
        </div>

      )
}

// const [stock, setStock] = useState(0)
// const agregarStock = () => {
//     setStock(stock +1)
// }
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