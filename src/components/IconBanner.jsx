import style from "./IconBanner.module.css"

function IconBanner() {
    return (
        <div className={style.iconSection}>
            <div className={`containerBoxed ${style.iconSpacing}`} >

                <div className="flexItem">
                    <img className={style.iconStyle} src="/buy-comics-digital-comics.png" alt="" />
                    <p className={style.iconText}>DIGITAL COMICS</p>
                </div>

                <div className="flexItem">
                    <img className={style.iconStyle} src="/buy-comics-merchandise.png" alt="" />
                    <p className={style.iconText}>DC MERCHANDISE</p>
                </div>

                <div className="flexItem">
                    <img className={style.iconStyle} src="/buy-comics-shop-locator.png" alt="" />
                    <p className={style.iconText}>SUBSCRIPTION</p>
                </div>

                <div className="flexItem">
                    <img className={style.iconStyle} src="/buy-comics-subscriptions.png" alt="" />
                    <p className={style.iconText}>COMIC SHOP LOCATOR</p>
                </div>

                <div className="flexItem">
                    <img className={style.iconStyle} src="/buy-dc-power-visa.svg" alt="" />
                    <p className={style.iconText}>DC POWER VISA</p>
                </div>

            </div>
        </div >
    )
}

export default IconBanner