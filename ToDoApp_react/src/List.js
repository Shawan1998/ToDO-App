import React from 'react';
import './List.css';
import { Button } from 'react-bootstrap';


function ListItems(props){

   const items = props.items;
   const listItems = items.map(item =>{
     return (
      <div className="list" key={item.data_key}>
      <p><input type="text"  id={item.data_key} value={item.data}
                   
                   onChange={
                      (e) =>{
                          props.setUpdate(e.target.value, item.data_key)
                      }} 
                      ></input>
      
        
        <Button className="Del" onClick={()=>props.deleteItem(item.data_key,item.data)}>delete</Button>
        <Button className="show" onClick={()=>props.Update(item.data,item.data_key)}>update</Button>
      </p>
      
      
      </div>)
        
      }
     
    )
        return(
            
        <div>{listItems}</div>
        )
}

export default ListItems;