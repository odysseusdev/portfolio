"use client";

import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

export type HeaderNavigationItemProps = {
	exact?: boolean;
} & PolymorphicComponentProps<typeof Link, ButtonProps>;

const HeaderNavigationItem = ({ exact = false, children, ...props }: HeaderNavigationItemProps) => {
	const pathname = usePathname();

	const active = exact ? pathname === props.href.toString() : pathname.startsWith(props.href.toString());

	return (
		<Button
			component={Link}
			variant={active ? "light" : "subtle"}
			{...props}
		>
			{children}
		</Button>
	);
};

export default HeaderNavigationItem;
