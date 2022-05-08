import { useEffect, useState, Children, cloneElement } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Dropdown, DropdownButton } from 'react-bootstrap';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const PAGE_WIDTH = 130

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([])
  const [offset, setOffset] = useState(0)
  const [transitionDuration, setTransitionDuration] = useState(300)
  const [selwidth, setValue]=useState(3);
 
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset=0;
      if(currentOffset===0)
      {
       newOffset = -(PAGE_WIDTH * (pages.length - selwidth))
        console.log(newOffset)
      }else{
       newOffset = currentOffset + PAGE_WIDTH
      console.log(newOffset)
      }
      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset=0;
      if(currentOffset===-(PAGE_WIDTH * (pages.length - selwidth)))
      {
       newOffset = 0;
        console.log(newOffset)
      }else{
        newOffset = currentOffset - PAGE_WIDTH
      }

      const maxOffset = -(PAGE_WIDTH * (pages.length - selwidth))
      console.log(pages.length)
      console.log(newOffset, maxOffset)
      return Math.max(newOffset, maxOffset)
    })
  }
const changeTransport = (val) =>{
  console.log(val.target.value);
  setTransitionDuration(val.target.value)
}
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
            height: '100%',
          },
        })
      })
    )
  }, [])

  return (
    <div className="main-container">
      <FaChevronLeft className="arrow" onClick={handleLeftArrowClick} />
      <div className="main_windows"> 
      <div className="window" style={{width: `${selwidth*130}px`}}>
        <div
          className="all-pages-container"
          style={{
            transform: `translateX(${offset}px)`,
            transitionDuration: `${transitionDuration}ms`,
          }}
        >
          {pages}
        </div>
        </div>
      <div className="main_window">  
      <DropdownButton id="dropdown-basic-button" title="Show items" onSelect={handleSelect} >
  <Dropdown.Item active eventKey="3" >3 items</Dropdown.Item>
  <Dropdown.Item eventKey="4" >4 items</Dropdown.Item>
  <Dropdown.Item eventKey="5" >5 items</Dropdown.Item>
    </DropdownButton>
    <input type="number" name="name"  defaultValue={300} step={10}
          onChange={changeTransport} /> 
    
    </div> 
    </div> 
      <FaChevronRight className="arrow" onClick={handleRightArrowClick} />
    </div>
  )
}
