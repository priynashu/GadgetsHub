import React,{useEffect, useState} from 'react';
import ReactDOM  from 'react-dom';

    
   export class TimerClass extends React.Component{
       constructor(){
           super()
           console.log("TimerClass constructor");
       }
       state={seconds:0};
       tick() {
        this.setState(prevState => ({
          seconds: prevState.seconds + 1
        }));
      }
       componentDidMount(){ //4
        console.log(">> After mounting timer componentDidMount");
        this.interval = setInterval(() => this.tick(), 1000);
      }
    
      componentWillMount(){ // 2
        console.log(">> before mounting timer componentDidMount");
      }
      componentWillUnmount() {
        console.log(">>componentWillUnmount");
        clearInterval(this.interval);
      }
        

        
         doIncrement = ()=>{                
            // this.state.count=this.state.count+1;
            console.log(">> Timer"+this.state.count);
            const value=this.setState({count:++this.state.count});
            
            
            // this.forceUpdate();    
        }
         fun =()=>{setInterval(this.doIncrement, 1000)};
         clear=()=>{}
         render(){ // this return html  // 3
            console.log(">> render");
            return(
              <div>
              <h5>Class Timer</h5>
                Seconds: {this.state.seconds} <br/><br/>
                Sample: {this.sample} <br/><br/>
                <button onClick={this.doIncrement}> Increment</button>&nbsp;
                <button onClick={()=>{this.componentWillUnmount()}}> Stop</button>&nbsp;
                <button onClick={()=>{this.setState({seconds:0})}}> Reset to 0</button>&nbsp;
                <button onClick={()=>{this.componentDidMount()}}> Start</button>
            </div>
            )
          }
    }

    export const Timer = ({name})=>{
            var [count,setCount]=useState(0);
            var [tInterval,setTInterval]=useState(0);
            const doIncrement = ()=>{
                
                
              setCount(count+1)
                //  console.log(count);                
            }
            
                const set = ()=>{var inter=setInterval(doIncrement,1000)}
                var restartTimer=()=>{
                  console.log(">>restartTimer");
                  var interval = setInterval(()=>{
                    //setCount(function(a){return a+1})
                    setCount((prevValue)=>prevValue+1);
                  }, 1000);
                  setTInterval(interval);
                }
                
                var stopTimer = ()=>{
                  
                  clearInterval(tInterval);
                }
                var resetTimer = ()=>{
                  setCount(0)
                }

              useEffect(()=>{
                console.log("On mount"+name);
                restartTimer();
                  return ()=>{
                    console.log("Unmount");// it will run when we unMount
                  }
        
              },[]);
        return <>
        <h5>Second Timer {name}</h5>
        <h5>{count}</h5>

         <button>Increment</button>&nbsp;&nbsp;
          <button onClick={stopTimer}>Stop</button>    
         <button onClick={resetTimer}>Reset</button>&nbsp;&nbsp;
         <button onClick={restartTimer}>Start</button>
         </>
    }
    



