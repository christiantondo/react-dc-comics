function Header() {
	return (
		<header>
			<div className="container-boxed flex-container">
				<img src="/dc-logo.png" alt="DC Comics Logo" className="dc-logo" />

				<nav>
					<ul className="header-list">
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
		</header>
	)
}

export default Header