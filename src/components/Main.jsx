import style from "./Main.module.css"
import comics from "../data/comics"

function Main() {
	return (
		<main>

			{/* Jumbotron con sfondo sotto all'header */}
			<div className={style.jumbotron}></div>

			{/* Sezione che contiene etichetta, card e bottone */}
			<div className={style.comicSection}>

				{/* Etichetta "Current series" */}
				<div className={`containerBoxed positionRelative`}>
					<h2 className={style.badge}>CURRENT SERIES</h2>
				</div>

				{/* Sezione delle card */}
				<div className={`containerBoxed alignStart wrapper`} >

					{/* Funzione che inserisce le card all'interno del main */}
					{comics.map(comic => {
						return <div key={"fumetto id:" + comic.id} className={`${style.card} cardAnimation`}>
							<img src={comic.thumb} alt="" className={style.cardThumb} />
							<p>{comic.title}</p>
						</div>
					})}

				</div>

				{/* Bottone "Load more" */}
				<div className={style.btnPosition}>
					<button className={style.btn}>LOAD MORE</button>
				</div>

			</div>

		</main >
	)
}

export default Main