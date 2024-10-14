import { Box, MenuItem, MenuItemProps, PolymorphicComponentProps, Text } from "@mantine/core";
import { Icon, IconInfoCircle, IconProps } from "@tabler/icons-react";

import Link from "next/link";
import React from "react";

export type HeaderMenuItemProps = {
	icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
	title: string;
	description: string;
} & Omit<PolymorphicComponentProps<typeof Link, MenuItemProps>, "leftSection" | "children">;

const HeaderMenuItem = ({ icon: HeaderMenuItemIcon, title, description, ...props }: HeaderMenuItemProps) => {
	return (
		<MenuItem
			component={Link}
			style={{ alignItems: "flex-start" }}
			leftSection={
				<HeaderMenuItemIcon
					style={{ marginTop: 2 }}
					size={18}
				/>
			}
			{...props}
		>
			<Box>
				<Text size="sm">{title}</Text>
				<Text
					size="xs"
					c="dimmed"
				>
					{description}
				</Text>
			</Box>
		</MenuItem>
	);
};

export default HeaderMenuItem;
