
function Button(){

    const style = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        margin: "0px 20px" ,
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(<button style={style}>Click me</button>)
}

export default Button