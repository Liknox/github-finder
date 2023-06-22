import { useEffect, useState } from "react"
import MoonIcon from "../../assets/icon-moon.svg"
import SunIcon from "../../assets/icon-sun.svg"

import styles from "./ThemeSwitcher.module.scss"

export const ThemeSwitcher = () => {
	const isDarkFromLocal = localStorage.getItem("theme") === "true"
	const [isDark, setIsDark] = useState(isDarkFromLocal)
	const themeText = isDark ? "Light" : "Dark"
	const ThemeIcon = isDark ? SunIcon : MoonIcon

	useEffect((): void => {
		localStorage.setItem("theme", String(isDark))
		window.document.body.setAttribute("data-theme", isDark ? "dark" : "light")
	}, [isDark])

	return (
		<div className={styles.switcher} onClick={() => setIsDark(e => !e)}>
			<span>{themeText}</span>
			<div className={styles.icon}>
				<ThemeIcon />
			</div>
		</div>
	)
}
