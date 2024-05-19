import { useContext } from "react";
import { ThemeContext } from "../App";

function Loading() {

    const { theme } = useContext(ThemeContext)

    return (
        <h2 className={`loading ${theme}`}>🐢 Loading... 🐢</h2>
    )
}


export default Loading;