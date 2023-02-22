import React, {useContext} from "react";
import { storevalue } from "./parent";
function Child(){
    const {appcolor}=useContext(storevalue);
    return(
        <>
        <h1 style={{color:appcolor}}>child</h1>
        <h2>{appcolor}</h2>
        </>
    )
}
export default Child;