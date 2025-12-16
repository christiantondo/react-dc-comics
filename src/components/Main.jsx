import style from "./Main.module.css"
import comics from "../data/comics"

function Main() {
	return (
		<main>
			<div className={style.jumbotron}>\</div>

			<div className={style.comicSection}>
				<div className={`containerBoxed alignCenter wrapper`} >

					{comics.map(comic => {
						return <div key={"fumetto id" + comic.id} className={`${style.card}`}>
							<img src={comic.thumb} alt="" className={style.cardThumb} />
							<p>{comic.title}</p>
						</div>
					})
					}

				</div>
			</div>
		</main >
	)
}

export default Main