import React,{useEffect, useState} from "react";
import Product from "../Product/Product";
import './ListProducts.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router";
import db from '../../firebase';
import { getFirestore, collection, getDocs } from "@firebase/firestore";


export default function ListProducts(){

const categoryId = useParams();
const [products, setProducts] = useState([]);

async function getProducts(db){
    const productosCol = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCol);
    const productosList = productosSnapshot.docs.map(doc => doc.data());
    return setProducts(productosList);
}

useEffect(()=>{
    getProducts(db);
},[])

    // .then((res)=>{

    //         categoryId.categoryId ? setProducts(res.Data.filter((info) => info.category === categoryId.categoryId)) : setProducts(res.Data);
    // })
// },[])

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
