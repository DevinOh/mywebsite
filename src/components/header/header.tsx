// src/components/header.tsx

import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
	return (
		<header className={styles.header}>
			<nav className={styles.navbar}>
				<ul className={styles.menu}>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
