import Car from "./car";
function Garage(props){
    return(
        <>
        <Car color={props.paint}/>
        </>
    );
}
export default Garage;