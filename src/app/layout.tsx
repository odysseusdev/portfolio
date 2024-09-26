import "./globals.css";

import Header from "@/components/layout/header";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Providers from "./providers";

const nunito = Nunito({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
	title: "odysseus.",
	description: "odysseus.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Providers>
					<Header />
					<main className="flex flex-col gap-4 p-6">{children}</main>
				</Providers>
			</body>
		</html>
	);
}
