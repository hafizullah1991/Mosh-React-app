import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "San Deigo"];

  // items =[];
  const [selectedIndex, setSelectedIndex]=  useState(-1);
  console.log(selectedIndex, "selectedIndex")
  console.log(setSelectedIndex, "this is set")
  // fucntion for clicking event
  // const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <Fragment>
      <h1>List</h1>
      {/* there are two ways both correct */}
      {items.length === 0 ? "Item not found" : "null"}
      {items.length === 0 && <h3>Item not found</h3>}
      <ul className="list-group">
        {/* Nap: converting each item to an item of different type */}
        {items.map((item, index) => (
          <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} 
          onClick={()=>{ setSelectedIndex(index) }}>{item}</li>
          
        ))}

        {/* we use key= {item} because if we inspect it it shows warrning 
      each item should have unique key , in the future if we remove something
       so react have to know which one we wan tto remove. */}
        {/* {items.map((item, index)=>(
          <li className={selectedIndex ===index ? 'list-group-item active': 'list-group-item'} key={item}
        ))} */}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
