import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Navbar = () => {
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
    return (
    <nav>
        <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Contacts</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Contacts</Link></li>
            <li><Link to="/contact/create">Add New</Link></li>
        </ul>
        </div>
    </nav>
    );
}
export default Navbar;