function Navmenu(props){
var list=props.items;
const uplist=list.map((numr)=>{
    return <li>{numr}</li>
});
return (
    <>
    <ul>{uplist}</ul>
    </>
);
}
export default Navmenu;