import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Expense Tracker",
	description: "Tracks your expenses while you're on the go",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div
					id="main-grid"
					className="grid gap-4 grid-span-4 md:grid-cols-6 lg:grid-cols-12"
				>
					{children}
				</div>
			</body>
		</html>
	);
}
