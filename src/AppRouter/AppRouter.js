import React from "react";
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ContactPage from '../Pages/ContactPage'
import NotFoundPage from "../Pages/NotFound";
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../Pages/ProductDetailPage";

export default function AppRouter(){
    return (
        <BrowserRouter>
                <NavBar/>
            <Switch>
                <Route path="/detalle/:productId" component={ProductDetailPage}/>
                <Route exact path="/contacto" component={ContactPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*" component={NotFoundPage}/>
            </Switch>
        </BrowserRouter>


    )
}


//          <ListProducts/>
//          <ItemDetailContainer/>