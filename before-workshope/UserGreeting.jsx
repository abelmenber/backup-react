// import { preprocessCSS } from "vite";

function UserGreeting(props){

    const welcomeMessage = <h1 className="Welcome-Message">Welcome {props.username} 😄</h1>

    const loginPrompt = <h2 className="Login-prompt">Please log in to continue 😪</h2>
    
    return(props.isLoggedIn ? welcomeMessage : loginPrompt);

}

// UserGreeting.protypees ={
//     isLoggedIn: proTypes.bool,
//     username: proTypes.string,
// }
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting