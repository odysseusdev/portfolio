import "./globals.css";

import { APPSHELL_FOOTER_HEIGHT, APPSHELL_HEADER_HEIGHT } from "@/lib/constants";
import { AppShell, AppShellFooter, AppShellHeader, AppShellMain, ColorSchemeScript } from "@mantine/core";

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
						footer={{ height: APPSHELL_FOOTER_HEIGHT }}
						padding="md"
					>
						<AppShellHeader>Header</AppShellHeader>
						<AppShellMain>{children}</AppShellMain>
						<AppShellFooter>Footer</AppShellFooter>
					</AppShell>
				</Providers>
			</body>
		</html>
	);
}
