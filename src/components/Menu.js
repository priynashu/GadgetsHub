import React from "react";
import { Switch, Route, Link } from "react-router-dom";

const Menu = ()=>{

    return <div><Link to={"/login"}>Login</Link>&nbsp;|&nbsp;
    <Link to={'/customer'}>Customer</Link>&nbsp;|&nbsp;
    <Link to={"/about"}>About</Link></div>
}
export default Menu;