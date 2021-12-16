import React,{useState} from "react"

var hideUnHide= (show)=>{

    console.log("inside function");
    if(show){
        return(<h3>I am here</h3>)
    }
}
const About = ()=>{
    
    const [show,setShow]=useState(true);
    return <>
    <button onClick={()=>{setShow((prev)=>(!prev))}}>Hide/Show</button>
    {hideUnHide(show)}
    </>
}

export default About;