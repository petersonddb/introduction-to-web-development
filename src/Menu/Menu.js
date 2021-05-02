import './Menu.css';
import Link from '../Link/Link';

const Menu = () => {
  return (
    <nav className="menu">
      <ul>
        <Link to="/ticked-dates">
          <li className="active">Datas marcadas</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
