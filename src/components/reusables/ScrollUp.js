import React,{useState,useEffect} from "react";
import {faArrowUp} from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../scss/styles.scss";
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
<div className="scroll-to-top rounded"  style={{display: visible ? 'inline' : 'none'}}  onClick={scrollToTop}>
     <FontAwesomeIcon icon={faArrowUp} 
    />
</div>
  
  );
}
  
export default ScrollButton;