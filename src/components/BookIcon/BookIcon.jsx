import { FaBookReader } from "react-icons/fa";
import css from "./BookIcon.module.css";

export  default  function  BookIcon ( { name } ) {
   return (
     < div > 
      < FaBookReader className = {css["my-icon"]} size = {48} />  
      </div >   
  );
}