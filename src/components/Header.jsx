import { Link } from 'react-router-dom';

function Header() {
    return (
    <>
    <h1>NC NEWS</h1>
    <Link to="/" className='header'>Home</Link>
    <Link to="/articles" className='header'>Articles</Link>
    </>
    )
}

export default Header;