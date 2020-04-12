import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from  './pages/sign-in-sign-up/sign-in-sign-up.component';


function App() {
    return (
      <div>
      <Header />
      <Switch>
      <Route exact  path='/' component={Homepage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route  path='/signIn' component={SignInSignUp}/>
      </Switch>

      </div>
    );
  }


export default App;
 