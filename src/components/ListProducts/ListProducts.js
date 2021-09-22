import React,{useEffect, useState} from "react";
import Product from "../Product/Product";
import './ListProducts.css'



export default function ListProducts(){

const [products, setProducts] = useState([])
const getProducts = new Promise((resolve)=>{
    setTimeout(() => {
        const mockProducts = [
            {
                id:'1',
                price:'1900',
                title:'One Punch Man',
                stock:10,
                img:'https://i.pinimg.com/originals/d4/53/9b/d4539b9202dbc95a430c629348098a44.jpg'
            },
            {
                id:'2',
                price:'1800',
                title:'Dragon Ball Z',
                stock:5,
                img:'http://d3ugyf2ht6aenh.cloudfront.net/stores/615/862/products/dragon-ball-z1-7f0fff34caa7ade8bf15835907751344-640-0.jpg'
            },
            {
                id:'3',
                price:'1700',
                title:'Kimetsu no Yaiba',
                stock:7,
                img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/whatsapp-image-2021-06-29-at-5-16-18-pm1-572adfb22b7700699d16252320791576-1024-1024.jpeg'
            },
            {
                id:'4',
                price:'1700',
                title:'Kimetsu no Yaiba',
                stock:7,
                img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/whatsapp-image-2021-06-29-at-5-16-18-pm1-572adfb22b7700699d16252320791576-1024-1024.jpeg'
            },
            {
                id:'5',
                price:'1700',
                title:'Kimetsu no Yaiba',
                stock:7,
                img:'https://d3ugyf2ht6aenh.cloudfront.net/stores/402/355/products/whatsapp-image-2021-06-29-at-5-16-18-pm1-572adfb22b7700699d16252320791576-1024-1024.jpeg'
            },
            
        ]
        resolve(mockProducts);
    }, );//agregar delay cuando haya que entregar esta parte "2000" despues de la coma
})

useEffect(()=>{
    getProducts.then((res)=>{

        setProducts(res)

    })
})

    return(
         <div className="contenedor-productos">
             
             {products.length !==0 ? (
                  products.map((products)=>{//grid y el grid grandote arriba(div)
                    return <Product key = {products.id} title={products.title} price={products.price} stock={products.stock} img={products.img}/>
                     })

                     ):(
                         <div>Cargando...</div>
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