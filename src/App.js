import React from 'react';
import ReactDOM  from 'react-dom';
import { Switch, Route, Link } from "react-router-dom";
import {PersonClass,PersonFunc} from './components/Person'
import TodoAppC,{Todo} from './components/TodoApp';
import {Timer,TimerClass} from './components/Timer'
import PageNotFound from "./components/PageNotFound"
import Login from './pages/login';
import About from './pages/about';
import Menu from './components/Menu';

// import TimerClass from './timer'
const App=()=>{
    


    return <> 

    <h1 style={{color:"blue"}}>Hello World</h1> 

    
    <Menu/>
    <Switch>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/customer" component={Todo}/>
    <Route exact path="*" component={PageNotFound}/>

    </Switch>

    
    

    </>
}

export default App;
