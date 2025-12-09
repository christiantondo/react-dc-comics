function Footer() {
	return (
		<footer>
			<div className="footer-icons-section">
				<div className="container-boxed icons-spacing">
					<div className="flex-item">
						<img className="icons-style" src="/buy-comics-digital-comics.png" alt="" />
						<p className="icons-text">DIGITAL COMICS</p>
					</div>

					<div className="flex-item">
						<img className="icons-style" src="/buy-comics-merchandise.png" alt="" />
						<p className="icons-text">DC MERCHANDISE</p>
					</div>

					<div className="flex-item">
						<img className="icons-style" src="/buy-comics-shop-locator.png" alt="" />
						<p className="icons-text">SUBSCRIPTION</p>
					</div>

					<div className="flex-item">
						<img className="icons-style" src="/buy-comics-subscriptions.png" alt="" />
						<p className="icons-text">COMIC SHOP LOCATOR</p>
					</div>

					<div className="flex-item">
						<img className="icons-style" src="/buy-comics-subscriptions.png" alt="" />
						<p className="icons-text">DC POWER VISA</p>
					</div>

				</div>
			</div>

			<div className="footer-list-section">
				<div className="container-boxed flex-container">
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

					<img src="/dc-logo-bg.png" alt="" id="dc-logo-list-bg" />
				</div>
			</div>

			<div className="footer-social-section">

				<div className="container-boxed align-center space-between">
					<div>
						<button>SIGN-UP NOW!</button>
					</div>

					<div>
						<p id="follow-us-style">FOLLOW US</p>

					</div>
				</div>

			</div>
		</footer>
	)
}

export default Footer