import { FC } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import cl from "clsx";

interface IMenu {
	title: string;
	url: string;
}

const menu: IMenu[] = [
	{ title: "Главная", url: "/" },
	{ title: "Блог", url: "/blog" },
	{ title: "Основы CG", url: "/cgb" },
];

const Header: FC = () => {
	const { pathname } = useRouter();

	return (
		<header className={styles.root}>
			<div className="container">
				<div className={styles.container}>
					<nav className={styles.nav}>
						<ul className={styles.list}>
							{menu.map((item) => (
								<li key={item.url}>
									<Link
										className={cl(pathname === item.url && styles.active)}
										href={item.url}
									>
										{item.title}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
