import "./globals.css";

import { APPSHELL_FOOTER_HEIGHT, APPSHELL_HEADER_HEIGHT } from "@/lib/constants";
import { AppShell, AppShellFooter, AppShellHeader, AppShellMain, ColorSchemeScript } from "@mantine/core";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import Providers from "./providers";

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
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<Providers>
					<AppShell
						header={{ height: APPSHELL_HEADER_HEIGHT }}
						styles={{ header: { backgroundColor: "transparent" } }}
						padding="md"
					>
						<AppShellHeader withBorder={false}>
							<Header />
						</AppShellHeader>
						<AppShellMain>{children}</AppShellMain>
						<Footer />
					</AppShell>
				</Providers>
			</body>
		</html>
	);
}
