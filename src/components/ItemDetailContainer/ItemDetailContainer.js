import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'
import data from '../../Items/Data.json'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useParams } from "react-router";


function ItemDetailContainer(){

    const categoryId = useParams();
    const [infoProduct, setInfoProduct] = useState([])

    useEffect(()=>{
        new Promise((resolve)=>{
            setTimeout(() => {
                resolve(data);
            },2000 );
        })
    
        .then((res)=>{
            
            categoryId ? setInfoProduct(res.Data.filter((info) => info.category === categoryId)) : setInfoProduct(res.Data);
        });
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



/*const [infoProduct, setInfoProduct] = useState();

    const getProduct = new Promise((resolve)=>{
        setTimeout(() => {
            const mockProduct = {
                            id:'1',
                            price:'1900',
                            title:'One Punch Man',
                            stock:10,
                            img:'https://i.pinimg.com/originals/d4/53/9b/d4539b9202dbc95a430c629348098a44.jpg'
                        }

                resolve(mockProduct);
            }, 2000 );
        })

    useEffect(()=>{
        getProduct.then((response)=>{
            setInfoProduct(response)
            })
        }, [])

    return(
        <div className="item-detail-container">
            {console.log("smtsmt: ", infoProduct)}
          <ItemDetail data={infoProduct}/>
        </div>
    );
}*/