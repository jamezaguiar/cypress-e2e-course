import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <img src={logo} alt="A list" />
      <h1>My Cypress Course Tasks</h1>
    </header>
  );
}

export default Header;
