import React from 'react'
import ReactDOM from 'react-dom'

    export class PersonClass extends React.Component{
         doLogin = ()=>{
            alert("login first");
        }
            render(){
            return <>
            <h2>My name is {this.props.name}</h2>
            <h2>Email is {this.props.email}</h2>
            <h2>Phone number is {this.props.number}</h2>
            <input type="button" value="Login" onClick={this.doLogin}></input>
            </>
        }
    }
 export const PersonFunc = ({name,email,number})=>{
    const doLogin = ()=>{
        alert("login first");
    }
    return <>
    <h2>My name is {name}</h2>
    <h2>Email is {email}</h2>
    <h2>Phone number is {number}</h2>
    <input type="button" value="Login" onClick={doLogin}></input>
    </>
}

