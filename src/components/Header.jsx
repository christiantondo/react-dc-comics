import style from "./Header.module.css"

const links = [
	"CHARACTERS",
	"COMICS",
	"MOVIES",
	"TV",
	"GAMES",
	"COLLECTIBLES",
	"VIDEOS",
	"FANS",
	"NEWS",
	"SHOP"
]

function Header() {
	return (
		<header className={style.header}>
			<div className="containerBoxed flexContainer">
				<img src="/dc-logo.png" alt="DC Comics Logo" className={style.dcLogo} />

				<nav>
					<ul className={style.headerList}>
						{
							links.map(link => <li><a href="#">{link}</a></li>)
						}
					</ul>
				</nav>
			</div>
		</header >
	)
}

export default Header