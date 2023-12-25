import { NavLink } from 'react-router-dom'
import css from './Header.module.css'

const Header = () => {
	return (
		<header className={css.header}>
			<nav className={css.nav}>
				<ul className={css.list}>
					<li className={css.item}>
						<NavLink className={css.link} to='/'>Home</NavLink>
					</li>
					<li className={css.item}>
						<NavLink className={css.link} to='/movies'>Movies</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header