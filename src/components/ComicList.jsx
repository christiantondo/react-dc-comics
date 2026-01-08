import comics from "../data/comics"
import cardStyle from "../components/ComicList.module.css"

function ComicList() {
    return <div className={`containerBoxed alignStart wrapper`} >

        {/* Funzione che inserisce le card all'interno del main */}
        {comics.map(comic => {
            return <div key={"fumetto id:" + comic.id} className={`${cardStyle.card} cardAnimation`}>
                <img src={comic.thumb} alt="" className={cardStyle.cardThumb} />
                <p>{comic.title}</p>
            </div>
        })}

    </div>
}
export default ComicList