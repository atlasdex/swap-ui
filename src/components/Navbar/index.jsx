import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navlink}>
        <Link className={styles.link} to="/">
          Swap
        </Link>
      </div>
      <div className={styles.navlink}>
        <Link className={styles.link} to="/pools">
          Pools
        </Link>
      </div>
      <div className={styles.navlink}>
        <Link className={styles.link} to="/bridge">
          Bridge
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
