import style from "./Footer.module.css"

/* Array di oggetti ovvero i contenuti delle liste */
const dccomicsList = [
	{
		id: 1,
		text: "Characters",
		url: "#"
	},
	{
		id: 2,
		text: "Comics",
		url: "#"
	},
	{
		id: 3,
		text: "Movies",
		url: "#"
	},
	{
		id: 4,
		text: "TV",
		url: "#"
	},
	{
		id: 5,
		text: "Games",
		url: "#"
	},
	{
		id: 6,
		text: "Videos",
		url: "#"
	},
	{
		id: 7,
		text: "News",
		url: "#"
	},
]
const shopList = [
	{
		id: 1,
		text: "Shop DC",
		url: "#"
	},
	{
		id: 2,
		text: "Shop DC Collectibles",
		url: "#"
	},
]
const dcList = [
	{
		id: 1,
		text: "Terms of Use",
		url: "#"
	},
	{
		id: 2,
		text: "Privacy Policy (New)",
		url: "#"
	},
	{
		id: 3,
		text: "Ad Choices",
		url: "#"
	},
	{
		id: 4,
		text: "Advertising",
		url: "#"
	},
	{
		id: 5,
		text: "Jobs",
		url: "#"
	},
	{
		id: 6,
		text: "Subscriptions",
		url: "#"
	},
	{
		id: 7,
		text: "Talent Workshops",
		url: "#"
	},
	{
		id: 8,
		text: "CPSC Certificates",
		url: "#"
	},
	{
		id: 9,
		text: "Ratings",
		url: "#"
	},
	{
		id: 10,
		text: "Shop Help",
		url: "#"
	},
	{
		id: 11,
		text: "Contact Us",
		url: "#"
	},
]
const sitesList = [
	{
		id: 1,
		text: "DC",
		url: "#"
	},
	{
		id: 2,
		text: "MAD Magazine",
		url: "#"
	},
	{
		id: 3,
		text: "DC Kids",
		url: "#"
	},
	{
		id: 4,
		text: "DC Universe",
		url: "#"
	},
	{
		id: 5,
		text: "DC Power Visa",
		url: "#"
	},
]

function Footer() {
	return (
		<footer className={style.footer}>

			{/* Sezione a sinistra con le varie liste */}
			<div className={`${style.listSection}`}>

				<div className="containerBoxed flexContainer alignCenter">

					<div className={`flexContainer alignStart ${style.column}`}>

						<div>

							<h3 className={style.listTitleFontStyle}>DC COMICS</h3>
							<ul className={`${style.shopColumn}`}>
								{dccomicsList.map((link) => <li key={"List link id:" + link.id} className={style.listDotOff}><a href={link.url} className={style.listElementStyle}>{link.text}</a></li>)}
							</ul>

							<h3 className={style.listTitleFontStyle}>SHOP</h3>
							<ul>
								{shopList.map((link) => <li key={"List link id:" + link.id} className={style.listDotOff}><a href={link.url} className={style.listElementStyle}>{link.text}</a></li>)}
							</ul>

						</div>

						<div>

							<h3 className={style.listTitleFontStyle}>DC</h3>
							{dcList.map((link) => <li key={"List link id:" + link.id} className={style.listDotOff}><a href={link.url} className={style.listElementStyle}>{link.text}</a></li>)}

						</div>

						<div>

							<h3 className={style.listTitleFontStyle}>SITES</h3>
							<ul>
								{sitesList.map((link) => <li key={"List link id:" + link.id} className={style.listDotOff}><a href={link.url} className={style.listElementStyle}>{link.text}</a></li>)}
							</ul>

						</div>

					</div>


					{/* Sezione a destra con il logo in grande inserito in background */}
					<div>
						<img src="/dc-logo-bg.png" alt="" className={style.dcLogo} />
					</div>

				</div>

			</div>


			{/* Sezione con il bottone e le icone dei social */}
			<div className={style.socialSection}>

				<div className="containerBoxed alignCenter spaceBetween">
					<div>
						<button className={style.button}>SIGN-UP NOW!</button>
					</div>

					<div className="flexItem alignCenter">

						<p className={style.followusStyle}>FOLLOW US</p>

						<a href="https://www.facebook.com/dc/?brand_redir=248819758864166" target="blank">
							<img src="/footer-facebook.png" className={style.socialIcon} alt="" />
						</a>

						<a href="https://maps.app.goo.gl/Bz7eRmazYGsZM1qA7" target="blank">
							<img src="/footer-periscope.png" className={style.socialIcon} alt="" />
						</a>

						<a href="https://it.pinterest.com/dccomics/" target="blank">
							<img src="/footer-pinterest.png" className={style.socialIcon} alt="" />
						</a>

						<a href="https://x.com/DCOfficial" target="blank">
							<img src="/footer-twitter.png" className={style.socialIcon} alt="" />
						</a>

						<a href="https://www.youtube.com/@dcofficial" target="blank">
							<img src="/footer-youtube.png" className={style.socialIcon} alt="" />
						</a>

					</div>

				</div>

			</div>

		</footer >
	)
}

export default Footer