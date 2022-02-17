import { Link } from 'react-router-dom';
import styles from './NavLink.module.css';

const NavLink = () => (
  <header className={styles.navheader}>
    <h1 className={styles.title}>Math Magician</h1>
    <nav className={styles.navlist}>
      <Link className={styles.links} to="/">Home |</Link>
      <Link className={styles.links} to="/about"> About |</Link>
      <Link className={styles.links} to="/Calculator"> Calculator</Link>
    </nav>
  </header>
);

export default NavLink;
