import style from "./Main.module.css"
import comics from "../data/comics"

function Main() {
	return (
		<main >
			<div className={style.jumbotron}>\</div>

			<div className={`${style.containerBoxed} ${style.alignCenter} ${style.comicSection}`} >

				{comics.map(comic => {
					return <div>{comic.title}</div>
				})
				}

			</div>
		</main >
	)
}

export default Main