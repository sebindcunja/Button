import { useState } from "react";
function Contact(){
    var [fn,setFn]=useState("");
    var [email,setEmail]=useState("");
    var [mb,setMb]=useState("");
    var [address,setAd]=useState("");
    return(
        <>
              <center>                                                                                                                                                                              
        <h1>Contact Us</h1><br></br>
        <form>
            <p>
                <label>Fullname:</label>
                <input type="text" name="fname" onChange={
                    (e)=>{
                        setFn(e.target.value);
                    }
                } />
                {fn}
                
            </p>
            <p>
                <label>Email:</label>
                <input type="email" name="em1" onChange={
                    (en )=>{
                        setEmail(en.target.value);
                    }
                }  />
                {email}
            </p>
            <p>
                <label>Mobile Number:</label>
                <input type="tel" name="mb"  onChange={
                    (ev)=>{
                        setMb(ev.target.value);
                    }
                }/>
                {mb}
            </p>
            <p>
                <label>Address:</label>
                 <textarea name="address" id="" onChange={
                (e)=>{
                    setAd(e.target.value)
                }
                 } cols="30" rows="10"> </textarea>
                 {address}
            </p>
                 <button type="button">
                Send
                 </button>
                 
        </form>
        </center>   
        <br></br>
        <br />
        <br />
        </>
    );
}
export default Contact;