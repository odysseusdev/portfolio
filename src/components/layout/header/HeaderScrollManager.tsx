"use client";

import { Box, BoxComponentProps, PolymorphicComponentProps, useMantineTheme } from "@mantine/core";
import { useHeadroom, useWindowScroll } from "@mantine/hooks";

import React from "react";

type HeaderScrollManager = {} & PolymorphicComponentProps<"div", BoxComponentProps>;

const ScrollProvider = ({ children, ...props }: HeaderScrollManager) => {
	const theme = useMantineTheme();
	const [{ y }] = useWindowScroll();

	return (
		<Box
			className={y > 0 ? "blur" : undefined}
			// bg={y > 0 ? theme.colors.dark[8] : undefined}
			{...props}
		>
			{children}
		</Box>
	);
};

export default ScrollProvider;
