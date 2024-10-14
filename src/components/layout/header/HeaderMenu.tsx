"use client";

import {
	ActionIcon,
	ActionIconProps,
	Burger,
	Menu,
	MenuDropdown,
	MenuLabel,
	MenuTarget,
	PolymorphicComponentProps,
} from "@mantine/core";
import { IconCode, IconHome, IconInfoCircle, IconNotebook } from "@tabler/icons-react";

import { HeaderMenuItem } from ".";
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
				<HeaderMenuItem
					icon={IconHome}
					title="Home"
					description="landing page"
					href="/"
				/>
				<HeaderMenuItem
					icon={IconCode}
					title="Projects"
					description="External-facing web applications"
					href="/projects"
				/>
				<HeaderMenuItem
					icon={IconNotebook}
					title="Blog"
					description="Discoveries, releases and how-to guides"
					href="/blog"
				/>
				<MenuLabel>Application</MenuLabel>
				<HeaderMenuItem
					icon={IconInfoCircle}
					title="Information"
					description="Development and application"
					href="/information"
				/>
			</MenuDropdown>
		</Menu>
	);
};

export default HeaderMenu;
