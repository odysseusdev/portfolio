"use client";

import {
	ActionIcon,
	ActionIconProps,
	Burger,
	Menu,
	MenuDropdown,
	MenuItem,
	MenuLabel,
	MenuTarget,
	PolymorphicComponentProps,
} from "@mantine/core";
import { IconCode, IconHome, IconInfoCircle, IconNotebook, IconSettings } from "@tabler/icons-react";

import Link from "next/link";
import React from "react";
import { useDisclosure } from "@mantine/hooks";

export type HeaderMenuProps = {} & PolymorphicComponentProps<"div", ActionIconProps>;

const HeaderMenu = ({ ...props }: HeaderMenuProps) => {
	const [opened, { toggle }] = useDisclosure();

	return (
		<Menu
			opened={opened}
			onChange={toggle}
		>
			<MenuTarget>
				<ActionIcon
					component="div"
					variant="subtle"
					size="lg"
					{...props}
				>
					<Burger
						opened={opened}
						onClick={toggle}
						size={20}
					/>
				</ActionIcon>
			</MenuTarget>
			<MenuDropdown>
				<MenuLabel>Pages</MenuLabel>
				<MenuItem
					component={Link}
					href="/"
					leftSection={<IconHome size={18} />}
				>
					Home
				</MenuItem>
				<MenuItem
					component={Link}
					href="/projects"
					leftSection={<IconCode size={18} />}
				>
					Projects
				</MenuItem>
				<MenuItem
					component={Link}
					href="/blog"
					leftSection={<IconNotebook size={18} />}
				>
					Blog
				</MenuItem>
				<MenuLabel>Application</MenuLabel>
				<MenuItem leftSection={<IconSettings size={18} />}>Settings</MenuItem>
				<MenuItem leftSection={<IconInfoCircle size={18} />}>About</MenuItem>
			</MenuDropdown>
		</Menu>
	);
};

export default HeaderMenu;
