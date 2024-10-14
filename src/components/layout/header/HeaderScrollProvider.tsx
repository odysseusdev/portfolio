"use client";

import { Box, BoxComponentProps, PolymorphicComponentProps } from "@mantine/core";
import { useHeadroom, useWindowScroll } from "@mantine/hooks";

import React from "react";

type HeaderScrollProviderProps = {} & PolymorphicComponentProps<"div", BoxComponentProps>;

const HeaderScrollProvider = ({ children, ...props }: HeaderScrollProviderProps) => {
	const [{ y }] = useWindowScroll();

	return (
		<Box
			style={{
				backgroundColor: "rgba(255, 255, 255, 0.7)",
				borderBottom: "calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-gray-3)",
			}}
			className={y > 0 ? "blur" : undefined}
			{...props}
		>
			{children}
		</Box>
	);
};

export default HeaderScrollProvider;
