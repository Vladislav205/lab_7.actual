import { React, Component, Components } from 'react'

import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css'
const PAGE_WIDTH = 130

const DropdownClass = () => {
    const inputRef = React.useRef();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log("A name was submitted: " + inputRef.current.value);        
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" ref={inputRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  };
  
  export default DropdownClass;
// export const Carousel = ({ children }) => {
  

//   return (
    
//       <div>
//       <DropdownButton id="dropdown-basic-button" title="Show items">
//   <Dropdown.Item value="3" >3 items</Dropdown.Item>
//   <Dropdown.Item value="4">4 items</Dropdown.Item>
//   <Dropdown.Item value="5">5 items</Dropdown.Item>
//     </DropdownButton>
//     <input type="number" name="name" onChange={changeTransport(this.value)}   />
//     </div>
    
//   )
// }
