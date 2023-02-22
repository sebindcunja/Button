import './Homestyle.css';

function About(){
    const mystyle={
        color:"red",
        height : "200px",
        width : "200px",
        backgroundColor : "green",
        border : "1px solid red",
        borderRadius : "100%",
        textAlign:"center"
    }
    return(
        <>
        <div>
        <h1>About Us</h1>

        </div>
        {/* <div style={mystyle}><table><tr><td>hi</td></tr></table></div> */}
    </>        
    );
}
export default About;