import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup,FormControl } from 'react-bootstrap';
import './App.css';
 import ListItems from './List';
 import { DEV_URL, endPoints } from './Constants.ts';
  import axios from 'axios';

class App extends Component {
  constructor(props){
       super(props);
       this.state={
         items:[],
         currentItem:{
           data:'',
           data_key:0
         }
         
       }
       this.handleInput = this.handleInput.bind(this);
       this.addItem = this.addItem.bind(this);
       this.deleteItem= this.deleteItem.bind(this);
       this.deleteAll = this.deleteAll.bind(this);
       this.Update = this.Update.bind(this);
       
       this.setUpdate=this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        data: e.target.value,
        data_key:Date.now()
      }
    });
  }

  deleteItem= (key,text_data) =>{
    
const filtereditems = this.state.items.filter(item =>
  item.data_key!==key);
  this.setState({
    items:filtereditems
  });

  
  const id=key;
   const response =  axios.delete('http://localhost:8000/api/delete/data/todolist/'+id);
    console.log(response);

  
  }

  setUpdate(text,key){
    const items = this.state.items;
    items.map(item =>{

       if(item.data_key === key){
            item.data=text;
        }
    })
    this.setState({
        items:items
    })
   }
   Update(text,key){
    const items = this.state.items;
    items.map(item =>{

       if(item.data_key === key){
            item.data=text;
            console.log(item.data)
        }
    })
    this.setState({
        items:items
    })

    const id=key;

    const Data={
        data: text,
        data_key:''
    } 
    const response =  axios.put('http://localhost:8000/api/update/data/todolist/'+id, Data);
    console.log(response);
  console.log(key)
  
   }

  deleteAll(){
    const deleteAll = this.state.items;
     deleteAll.length =0;
    this.setState({
      items:deleteAll,
      currentItem:{
        data:'',
        data_key:0
      }
    })
    const response =  axios.delete('http://localhost:8000/api/delete/data/todolist');

  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.data!==""){
      const newItems=[...this.state.items, newItem];
    this.setState({
      items:newItems,
      currentItem:{
        data:'',
        data_key:0
      }
    });
    console.log(this.state.items);
    
  }else{
    alert("write something")
}

try{
    const post_data = JSON.stringify(this.state.currentItem);
    console.log(post_data);
      const response =  axios.post('http://localhost:8000/api/add/data/todolist', post_data);
    console.log(response);}
    catch(e){
      console.log(e)}
      
  
  }
  
  
    
  
  render() {
    return (
      <div className="App">
       <form > 
       <InputGroup>
       
        <FormControl

        className="FormInput"
      placeholder="Enter the text"
      
      value={this.state.currentItem.data}
      onChange={this.handleInput}
    /> 
    <Button className="AddButton" onClick={this.addItem} >Add</Button>
    <Button className="DeleteAll" onClick={this.deleteAll} >Delete All</Button> </InputGroup>
    
    
         <ListItems items={this.state.items}
                  deleteItem={this.deleteItem}
                  setUpdate={this.setUpdate}
                  Update={this.Update}></ListItems> 
         
          
         </form>
      </div>
    );
  }
}

export default App;
