import { useContext } from "react";
import { ThemeContext } from "../App";

function Homepage() {

    const { theme } = useContext(ThemeContext)

    return (
    <div className={`loading ${theme}`}>
    <h2>A</h2>
    <p>homepage</p>
    <p>goes</p>
    <p>here</p>
    </div>
    )
}

export default Homepage;