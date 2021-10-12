import React from "react";
import { BrowserRouter,Route,Switch, Redirect } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ContactPage from '../Pages/ContactPage'
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../Pages/ProductDetailPage";
import ProductCategoryPage from "../Pages/ProductCategoryPage";
import Cart from "../Pages/Cart";

import { CartProvider } from "../context/CartContext";


export default function AppRouter(){
    return (
        <BrowserRouter>
            <CartProvider>
                <NavBar/>
                <Switch>
                    <Route exact path="/detalle/:productId" component={ProductDetailPage}/>
                    <Route exact path="/category/:categoryId" component={ProductCategoryPage}/>
                    <Route exact path="/contacto" component={ContactPage}/>
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="*"> <Redirect to="/"/></Route>
                </Switch>
            </CartProvider>
        </BrowserRouter>


    )
}
