import { useState } from "react";
function Countwrap({children}){
    const[count,setcount]=useState(0);  
    

    return(
        children[{count,setcount}]
    );
}
export default Countwrap;