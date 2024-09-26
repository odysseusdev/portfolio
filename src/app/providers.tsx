"use client";

import theme, { cssVariablesResolver } from "@/lib/theme";

import { MantineProvider } from "@mantine/core";
import React from "react";

const Providers = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	return (
		<MantineProvider
			theme={theme}
			cssVariablesResolver={cssVariablesResolver}
			defaultColorScheme="dark"
		>
			{children}
		</MantineProvider>
	);
};

export default Providers;
