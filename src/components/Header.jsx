import style from "./Header.module.css"

// Array di oggetti ovvero i link della navbar con id, text e url
const navLinks = [
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

// Funzione che stampa gli oggetti dell'array sovrastante all'interno della navbar
function Header() {
	return (
		<header className={style.header}>

			{/* Sezione che contiene logo e testi della navbar */}
			<div className="containerBoxed flexContainer">

				{/* Logo header DC Comics */}
				<img src="/dc-logo.png" alt="DC Comics Logo" className={style.dcLogo} />

				{/* Navbar con i link */}
				<nav>

					<ul className={style.headerList}>

						{/* Funzione che inserisce ogni singolo oggetto nell'header */}
						{navLinks.map((link, i) =>
							<li key={i}><a href={link.url} className={style.navLink}>{link.text}</a></li>
						)}
					</ul>

				</nav>

			</div>

		</header >
	)
}

export default Header