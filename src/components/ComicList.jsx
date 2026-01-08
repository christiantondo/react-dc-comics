import comics from "../data/comics"
import ComicCard from "../components/ComicCard"

function ComicList() {
    return <div className={`containerBoxed alignStart wrapper`} >

        {/* Funzione che inserisce le card all'interno del main */}
        {comics.map(comic => {
            return <ComicCard comic={comic} />
        })}

    </div>
}
export default ComicList