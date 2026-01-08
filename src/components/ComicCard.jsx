import style from "../components/ComicCard.module.css"

function ComicCard(props) {

    const comic = props.comic

    return <div key={"fumetto id:" + comic.id} className={`${style.card} cardAnimation`}>
        <img src={comic.thumb} alt="" className={style.cardThumb} />
        <p>{comic.title}</p>
    </div>
}

export default ComicCard