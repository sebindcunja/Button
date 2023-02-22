import { useState,createContext } from "react";
import Child from "./child";
export const storevalue=createContext();


function Parent(){
    const [color,setColor]=useState("green")
    return(
        <>
        <h1>parent</h1>
        <input type="text" onChange={
            (e)=>{
                setColor(e.target.value);
            }
        }/>
        <storevalue.Provider value={{appcolor:color}}>
            <Child />
        </storevalue.Provider>
        </>

    )
}
export default Parent;