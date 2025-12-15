import style from "./Footer.module.css"

function Footer() {
	return (
		<footer>
			<div className={style.listSection}>
				<div className="containerBoxed flexContainer alignCenter">
					<div>
						<ul>
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
					</div>

					<div>
						<img src="/dc-logo-bg.png" alt="" className={style.dcLogo} />
					</div>
				</div>
			</div>

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