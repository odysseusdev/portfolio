import "./globals.css";

import { APPSHELL_CONTAINER_SIZE, APPSHELL_HEADER_HEIGHT } from "@/lib/constants";
import { AppShell, AppShellHeader, AppShellMain, ColorSchemeScript, Container, Group, Stack } from "@mantine/core";

import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import type { Metadata } from "next";
import Providers from "../components/providers";

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
						p={{ base: "xs", xs: "md", sm: "sm", md: "lg" }}
					>
						<AppShellHeader>
							<Header />
						</AppShellHeader>
						<AppShellMain>
							<Container
								size={APPSHELL_CONTAINER_SIZE}
								py={{ base: "md", xl: "lg" }}
							>
								<Stack gap="xl">{children}</Stack>
							</Container>
						</AppShellMain>
						<footer>
							<Footer />
						</footer>
					</AppShell>
				</Providers>
			</body>
		</html>
	);
}
