import style from "./Main.module.css"
import comics from "../data/comics"

function Main() {
	return (
		<main>
			<div className={style.jumbotron}>\</div>

			<div className={`containerBoxed alignCenter ${style.comicSection}`} >

				{comics.map(comic => {
					return <div key={"fumetto id" + comic.id} className={`wrapper ${style.card}`}>
						<img src={comic.thumb} alt="" className={style.cardThumb} />
						<h4>{comic.title}</h4>
					</div>
				})
				}

			</div>
		</main >
	)
}

export default Main