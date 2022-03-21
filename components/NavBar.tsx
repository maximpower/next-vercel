import { ActiveLink } from "./ActiveLink";

import styles from "./NavBar.module.css";

interface ActiveLink {
	text: string;
	href: string;
}

const menuItems: ActiveLink[] = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "About",
		href: "/about",
	},
	{
		text: "Contact",
		href: "/contact",
	},
	{
		text: "Pricing",
		href: "/pricing",
	},
];

export const NavBar = () => {
	return (
		<nav className={styles["menu-container"]}>
			{menuItems.map(({ href, text }) => (
				<ActiveLink key={href} text={text} href={href} />
			))}
		</nav>
	);
};
