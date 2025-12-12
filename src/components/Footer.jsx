function Footer() {
	return (
		<footer>
			<div className="footer-list-section">
				<div className="container-boxed flex-container align-center">
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
						<img src="/dc-logo-bg.png" alt="" id="dc-logo-list-bg" />
					</div>
				</div>
			</div>

			<div className="footer-social-section">

				<div className="container-boxed align-center space-between">
					<div>
						<button>SIGN-UP NOW!</button>
					</div>

					<div className="flex-item align-center">

						<p id="follow-us-style">FOLLOW US</p>
						<img src="/footer-facebook.png" className="social-icons" alt="" />
						<img src="/footer-periscope.png" className="social-icons" alt="" />
						<img src="/footer-pinterest.png" className="social-icons" alt="" />
						<img src="/footer-twitter.png" className="social-icons" alt="" />
						<img src="/footer-youtube.png" className="social-icons" alt="" />
					</div>
				</div>

			</div>
		</footer>
	)
}

export default Footer