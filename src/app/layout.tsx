import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "React Expense Tracker",
	description: "Tracks your expenses",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<div id="main-grid">{children}</div>
			</body>
		</html>
	);
}
