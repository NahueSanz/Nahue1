import React, {createContext, useEffect, useState} from "react";

const CartContext = createContext();

const CartProvider = ({children}) =>{

    const [products,setProducts] = useState([]);
    const [productAmount,setProductAmount] = useState(0);
    const [totalPrice,setTotalPrice] = useState(0);
    
    function isInCart(id){
        return products.filter(i => i.id === id).length > 0 ? true : false
    }

    const addItem = (product) =>{
        if(isInCart(product.id)){
            console.log("ya esta en el carro", product);
        }
        else{
            products.push(product);
            // setProducts([...products]);
        }    
    }

    const removeItem = (product) =>{

        console.log(product)

        const cartElem = products.filter(i => i.id !== product) || []
        setProducts([...cartElem]) 
    }

    const clear = () =>{
        setProducts([]);
    }

    useEffect(() =>{
        let count = 0;
        let total = 0;
        products.forEach(product => {

            total += (product.item)

        })

    })
    
    const data = {
        products,
        addItem,
        clear,
        removeItem
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider};
export default CartContext;