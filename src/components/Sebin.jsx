import { useState } from "react";
function FavC() {
    var [color, setColor] = useState("");
    return(
        <>
       
        <h1>My favorite color is {color}</h1>
        
        <button type="button" onClick={() =>setColor("blue")}>Blue

        </button><br></br>
        <button type="button" onClick={() =>setColor("red")}>Red

        </button>
        
        </>
    )
}
export default FavC;