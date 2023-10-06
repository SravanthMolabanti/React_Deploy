import "./style.css"
function F1()
{
    const mystyle={
        color:"blue",
        backgroundColor:"orange"
    }
    return(
        <div>
            <h1 style={{color:"red"}}>Inline styling</h1>
            <h1 style={mystyle}>Internal style</h1>
            <h1 class="c1">External style</h1>
        </div>
    );
}
export default F1;