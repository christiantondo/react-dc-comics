import style from "./Main.module.css"

function Main() {
	return (
		<main className={style.main}>
			<div className={`${style.containerBoxed} ${style.alignCenter}`} >
				<h2> --&gt; Content goes here &lt;-- </h2>
			</div>
		</main >
	)
}

export default Main