import { Routes,Route,Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import "./Homestyle.css";
import photo from "../components/image/travel.png";

function Home(){
return(
    <>
    <div className="container">
        <div className="logo">
            <img src={photo} className="logo-img"/>
            <i className="logo-text">Travel</i>
        </div>
        <ul className="Naves">
            <li><h2>
                <Link to="">Home</Link></h2>
            </li>
            <li><h2>
                <Link to="/about">About</Link></h2>
            </li>
            <li><h2>
                <Link to="/contact">Contact</Link></h2>
            </li>
        </ul>
        
    </div>
    
 



    {/* <div style={{backgroundColor:"yellow"}}>
    <h1 style={{color:"blue"}}>Home Page</h1>
    </div> */}
<div class="p-3 mb-2 bg-primary text-white">.bg-primary</div>


    { <Routes>
        <Route path="/about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
    </Routes> }
    </>
)
}
export default Home;