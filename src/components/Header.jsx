import style from "./Header.module.css"

function Header() {
	return (
		<header className={style.header}>
			<div className="containerBoxed flexContainer">
				<img src="/dc-logo.png" alt="DC Comics Logo" className={style.dcLogo} />

				<nav>
					<ul className={style.headerList}>
						<li>CHARACTERS</li>
						<li>COMICS</li>
						<li>MOVIES</li>
						<li>TV</li>
						<li>GAMES</li>
						<li>COLLECTIBLES</li>
						<li>VIDEOS</li>
						<li>FANS</li>
						<li>NEWS</li>
						<li>SHOP</li>
					</ul>
				</nav>
			</div>
		</header >
	)
}

export default Header