import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../App';
import UsernameInput from './UsernameInput';

function Header() {

    const { theme, setTheme } = useContext(ThemeContext);

    function handleClick() {
        setTheme(currentTheme => {
            return currentTheme === 'light' ? 'dark':'light';
        })
    }

    return (
    <>
    <label className="switch">
        <input type="checkbox" onClick={handleClick}/>
        <span className="slider round"></span>
    </label>
    <h1 className={theme}>NC NEWS</h1>
    <Link to="/" className={`header ${theme}`}>Home</Link>
    <Link to="/articles" className={`header ${theme}`}>Articles</Link>
    <UsernameInput />
    </>
    )
}

export default Header;