import style from "./IconBanner.module.css"
import bannerIcons from "../data/bannerIcons"

function IconBanner() {
    return (
        <div className={style.iconSection}>

            <div className={`containerBoxed ${style.iconSpacing}`} >

                {bannerIcons.map((icon =>
                    <div key={"Icon id:" + icon.id} className="flexItem">
                        <img className={style.iconStyle} src={icon.src} alt="" />
                        <p className={style.iconText}>{icon.text}</p>
                    </div>
                ))}

            </div>

        </div >
    )
}

export default IconBanner