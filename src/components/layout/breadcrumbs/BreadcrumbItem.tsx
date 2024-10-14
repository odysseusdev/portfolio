import { Anchor, AnchorProps, PolymorphicComponentProps, Text, TextProps } from "@mantine/core";

import Link from "next/link";
import React from "react";

export type BreadcrumbItemProps = { title: string; href?: string } & Omit<
	PolymorphicComponentProps<typeof Link, AnchorProps> | PolymorphicComponentProps<"p", TextProps>,
	"href" | "children"
>;

const BreadcrumbItem = ({ title, href }: BreadcrumbItemProps) => {
	if (!href) {
		return (
			<Text
				c="dimmed"
				truncate
			>
				{title}
			</Text>
		);
	}

	return (
		<Anchor
			component={Link}
			href={href}
		>
			{title}
		</Anchor>
	);
};

export default BreadcrumbItem;
