import style from "./Footer.module.css"

function Footer() {
	return (
		<footer>
			<div className={`${style.listSection}`}>
				<div className="containerBoxed flexContainer alignCenter">

					<div className={`flexContainer alignStart ${style.column}`}>
						<div>
							<h3 className={style.listTitleFontStyle}>DC COMICS</h3>
							<ul className={`${style.shopColumn}`}>
								<li>Characters</li>
								<li>Comics</li>
								<li>Movies</li>
								<li>TV</li>
								<li>Games</li>
								<li>Videos</li>
								<li>News</li>
							</ul>

							<h3 className={style.listTitleFontStyle}>SHOP</h3>
							<ul>
								<li>Shop DC</li>
								<li>Shop DC Collectibles</li>
							</ul>
						</div>

						<div>
							<h3 className={style.listTitleFontStyle}>DC</h3>
							<li>Terms Of Use</li>
							<li>Privacy Policy (New)</li>
							<li>Ad Choices</li>
							<li>Advertising</li>
							<li>Jobs</li>
							<li>Subscriptions</li>
							<li>Talent Workshops</li>
							<li>CPSC Certificates</li>
							<li>Ratings</li>
							<li>Shop Help</li>
							<li>Contact Us</li>

						</div>

						<div>
							<h3 className={style.listTitleFontStyle}>SITES</h3>
							<ul>
								<li>DC</li>
								<li>MAD Magazine</li>
								<li>DC Kids</li>
								<li>DC Universe</li>
								<li>DC Power Visa</li>
							</ul>
						</div>
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