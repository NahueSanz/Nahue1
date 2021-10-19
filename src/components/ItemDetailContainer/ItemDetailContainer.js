import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router";
import db from '../../firebase';
import { collection, getDoc, getDocs, doc } from "@firebase/firestore";


function ItemDetailContainer(){

    const categoryId = useParams();
    const [infoProduct, setInfoProduct] = useState([]);

    async function getProducts(db){
        const productosCol = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCol);
        const productosList = productosSnapshot.docs.map(doc => doc.data());
        const productosID = productosSnapshot.docs.map(doc => doc.id);
        console.log("productos traidos: ", productosID);
        return setInfoProduct(productosList);
    }

    async function getProduct(db){
        console.log("id: ", infoProduct.id);
        const docRef = doc(db, 'productos',"tEpeyg952atx8q0E7uEA");
        const docSnap = await getDoc(docRef);

        if(docSnap.exists()){
            console.log("Document data: ", docSnap.data());
        } else {
            console.log("No such document!")
        }
    }

    useEffect(()=>{
        getProducts(db);
        getProduct(db);        
    },[]);

    return(
        <div className="item-detail-container">
            {infoProduct.length ? (
               
               infoProduct.map((infoProduct)=>{//grid y el grid grandote arriba(div)
                   return <ItemDetail key = {infoProduct.id} info={infoProduct}/>
                  })

                   ):(
                   <Box className="circularProgress">
                       <CircularProgress />
                   </Box>
                   )}
            <div className="descripcion-producto">
                <h1>{infoProduct && infoProduct.descripcion}</h1>
            </div>
        </div>
    );
}

export default ItemDetailContainer;