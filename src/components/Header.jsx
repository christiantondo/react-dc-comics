import style from "./Header.module.css"

const links = [
	{
		id: 1,
		text: "CHARACTERS",
		url: "#"
	},
	{
		id: 2,
		text: "COMICS",
		url: "#"
	},
	{
		id: 3,
		text: "MOVIES",
		url: "#"
	},
	{
		id: 4,
		text: "TV",
		url: "#"
	},
	{
		id: 5,
		text: "GAMES",
		url: "#"
	},
	{
		id: 6,
		text: "COLLECTIBLES",
		url: "#"
	},
	{
		id: 7,
		text: "VIDEOS",
		url: "#"
	},
	{
		id: 8,
		text: "FANS",
		url: "#"
	},
	{
		id: 9,
		text: "NEWS",
		url: "#"
	},
	{
		id: 10,
		text: "SHOP",
		url: "#"
	}
]

function Header() {
	return (
		<header className={style.header}>
			<div className="containerBoxed flexContainer">
				<img src="/dc-logo.png" alt="DC Comics Logo" className={style.dcLogo} />

				<nav>
					<ul className={style.headerList}>
						{links.map((link, i) =>
							<li key={i}><a href={link.url}>{link.text}</a></li>)}
					</ul>
				</nav>
			</div>
		</header >
	)
}

export default Header