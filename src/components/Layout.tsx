import { FC, PropsWithChildren } from "react";
import Header from "./header/Header";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div className="site">
			<Header />
			<main className="container">{children}</main>
		</div>
	);
};

export default Layout;
