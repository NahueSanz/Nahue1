import React from "react";
import { BrowserRouter,Route,Switch, Redirect } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ContactPage from '../Pages/ContactPage'
import NavBar from "../components/NavBar/NavBar";
import ProductDetailPage from "../Pages/ProductDetailPage";

export default function AppRouter(){
    return (
        <BrowserRouter>
                <NavBar/>
            <Switch>
                <Route path="/detalle/:productId" component={ProductDetailPage}/>
                <Route path="/category/:categoryId" component={ProductDetailPage}/>
                <Route exact path="/contacto" component={ContactPage}/>
                <Route exact path="/" component={HomePage}/>
                <Route path="*"> <Redirect to="/"/></Route>
            </Switch>
        </BrowserRouter>


    )
}


//          <ListProducts/>
//          <ItemDetailContainer/>