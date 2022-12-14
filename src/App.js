import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { NotFound } from './Components/NotFound'
import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'
import { Wishlist } from './Components/Wishlist'


export const App = () => {
  return (

    <BrowserRouter>
      <Switch>
         {/* route to the home page */}
        <Route exact path="/" component = {Home}/>
        {/* route to the signup page */}
        <Route path="/signup" component={Signup}/>
        {/* route to the login page */}
        <Route path="/login" component={Login}/>
        {/* route to the add products page */}
        <Route path="/add-products" component={AddProducts}/>
        {/* route to the cart page */}
        <Route path="/cart" component={Cart}/>  
        {/* route to the wishlist page */}
        <Route path="/wishlist" component={Wishlist}/>  
        {/* route to the not found page */}
        <Route component={NotFound}/>        
      </Switch>
    </BrowserRouter>

  );
}

export default App
