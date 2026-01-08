import style from "./Main.module.css"
import Card from "../components/Card"

function Main() {
	return <main>

		{/* Jumbotron con sfondo sotto all'header */}
		<div className={style.jumbotron}></div>

		{/* Sezione che contiene etichetta, card e bottone */}
		<div className={style.comicSection}>

			{/* Etichetta "Current series" */}
			<div className={`containerBoxed positionRelative`}>
				<h2 className={style.badge}>CURRENT SERIES</h2>
			</div>

			{/* Sezione delle card */}
			<div className="wrapper">
				<Card />
			</div>

			{/* Bottone "Load more" */}
			<div className={style.btnPosition}>
				<button className={style.btn}>LOAD MORE</button>
			</div>

		</div>

	</main >

}

export default Main