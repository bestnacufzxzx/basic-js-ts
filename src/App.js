import React ,{ Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MenuBar from './Layout/MenuBar';
import Header from './Layout/Header';
import Containers from './containers/containers';
import Footer from './Layout/Footer';
// import Content from './Layout/Content';
import Profile from './components/Profile/profile';

export default class App extends Component{
  render(){
    return(  
      <BrowserRouter>
        <MenuBar></MenuBar>
        <Containers>
            <Header></Header>
              <Route exact path="/" component={Profile}/>
            <Footer></Footer>
        </Containers>
      </BrowserRouter>
    )
  }
}



