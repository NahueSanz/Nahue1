import React,{useEffect, useState} from "react";
import ItemDetail from "../ItemDetail/ItemDetail"
import './ItemDetailContainer.css'

function ItemDetailContainer(){

    const [infoProduct, setInfoProduct] = useState(null)
    const getProduct = new Promise((resolve)=>{
        setTimeout(() => {
            const mockProduct ={
                    id:'1',
                    price:'1900',
                    title:'One Punch Man',
                    stock:10,
                    img:'https://i.pinimg.com/originals/d4/53/9b/d4539b9202dbc95a430c629348098a44.jpg',
                    descripcion: 'Remera del anime One Punch Man oferta limitada dsps le dedico un poco mas de css a esto, lo juro'
                }

            resolve (mockProduct);
        },2000 );//agregar delay cuando haya que entregar esta parte "2000" despues de la coma
    })
    
        useEffect(()=>{
            getProduct.then((res)=>{
    
                setInfoProduct(res)
    
             })
        },[])
    return(
        <div className="item-detail-container">
            {infoProduct && <ItemDetail data={infoProduct} />}
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