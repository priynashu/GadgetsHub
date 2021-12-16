import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import {TakeValue} from "./AddCustomer"
class TodoAppC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    //Another approach to handle this 
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

export const Todo = ()=>{
    var [valueArray,setValueArray]=useState([
      {id:1,name:'VIvek',email:'vivek@abc.com',phone:'89898989', address:'India'},
      {id:2,name:'Pari',email:'pari@abc.com',phone:'653423662', address:'Asia'},
      {id:3,name:'Rama', email:'rama@abc.com',phone:'653423662', address:'Asia'}
    ]);
    const initialState ={        
        id:0,
        name:'',
        email:'',
        phone:'',
        address:''}
        // let customers =;

    const [items,setItems]=useState(initialState)
    
    var {id,name,email,phone,address}=items

    var [text,setText]=useState();
    let handleSubmit=(e)=>{
        e.preventDefault();
        // console.log("submit",items);
        
        // setValueArray((prevValue)=>{return [...prevValue,text]})            
        setValueArray((prevValue)=>{return[...prevValue,items]})
        // console.log(valueArray);
        setItems({...initialState});
        console.log("id is ",id);
          
          if (!name.length) {
            return;
          }
          const newItem = {
            name,
            email,
            phone,
            address,
            id: Date.now()
          };
          console.log("new Item ID",newItem.id);
          let tempItems ;
          if(id != 0){ //edit 
            // here if the id is not 0 means it is edit bcoz in add initial state will be 0 already after submitting
            //
            newItem.id = id;
            for(var i= 0; i<valueArray.length;i++ ){
              if(valueArray[i].id == id){ //no render
                valueArray[i] =  newItem;// the matching id object will be changed by the current one
                break;
              }
            }
            tempItems = valueArray;
          }else{ //add
            tempItems = [newItem,...valueArray];
          }
          setValueArray(tempItems);
        
          // document.getElementById('name').focus();
        
        
    }
    const Copy=()=>{
      console.log("inside copy");
    }
    let handleChange=(e)=>{
        var value = e.target.name;
        setItems({...items,[e.target.id]:e.target.value})
        // setItems({...items,[id]:id+1})
        // console.log(e.target.value+" "+e.target.name);
        // console.log("change"+e.target.value);
        // var t=e.target.value;
        // setText(t);
    }
    
    function map(){
        if(!valueArray.length){
            return;
        }
        else{
          
        }
    }
    const doEdit=(name)=>{
      var editCustomer=valueArray.filter((item)=>(item.name==name))
      setItems(editCustomer[0])
      console.log("inside edit"+editCustomer[0].name);
    }
    
    const doDelete=(id)=>{
      console.log("inside delete",id);
      valueArray=valueArray.filter((item)=>{return(item.name!=id)})

      // valueArray=deleteArray;
      setValueArray(valueArray);
    }

    
    return<>
    <h1>TODO APP</h1>
    <TakeValue 
    handleSubmit={handleSubmit}
    handleChange={handleChange}
    items={items}
    />
    <div>
      {/* <ul>
        {valueArray.map((item)=>{return(<>
        <li>{item.name}</li><button onClick={()=>{
          // console.log(item.name)
          doDelete(item.name)
          ;}}>delete</button>
        </>)})}
      </ul> */}
  <table style={{width:'100%'}}>
  <thead>
  <tr>
    <th>#</th>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Address</th>
    <th></th>
    <th></th>
  </tr>
  </thead>
  <tbody>
  {valueArray.length>1&&valueArray.map(item => {  console.log(valueArray.length); return(
  <tr key={item.id}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.email}</td>
    <td>{item.phone}</td>
    <td>{item.address}</td>
    <td><button onClick={()=>{doEdit(item.name)}} >Edit</button></td>
    <td><button >Copy</button></td>
    <td><button onClick={()=>{doDelete(item.name)}}>Delete</button></td>
  </tr>
  )})}
  </tbody>
  </table>
  </div>
    </>
}

export default TodoAppC;