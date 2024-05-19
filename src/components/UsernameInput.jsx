import { useContext, useState } from "react";
import { LoginContext } from "../contexts/Login";


function UsernameInput() {

    const [username, setUsername] = useState("");
    const { user, setUser } = useContext(LoginContext);

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handleUsernameSubmit(event) {
        event.preventDefault();
        setUser(username);
        setUsername("");
    }

    function handleLogout() {
        setUser("");
    }

    if (user) {
        return (
            <>
            <div>Logged in as {user}. 
            <button onClick={handleLogout}>Logout</button>
            </div>
            </>
        )}
    else { return (
        <form onSubmit={handleUsernameSubmit}>
            <label htmlFor="username" placerholder="Write your username">Username: </label>
            <input id="username" onChange={handleUsernameChange} value={username}></input>
            <button>Login</button>
        </form>
    )}
}

export default UsernameInput;