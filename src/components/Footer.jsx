import style from "./Footer.module.css"
import { dccomicsList, shopList, dcList, sitesList } from "../data/footerLists"


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