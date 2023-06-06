import { useEffect, useState } from "react"
import MoonIcon from "../../assets/icon-moon.svg"
import SunIcon from "../../assets/icon-sun.svg"

import styles from "./ThemeSwitcher.module.scss"

export const ThemeSwitcher = () => {
	const [isDark, setIsDark] = useState(false)
	const themeText = isDark ? "Light" : "Dark"
	const ThemeIcon = isDark ? SunIcon : MoonIcon

	useEffect((): void => {
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
