import { APPSHELL_CONTAINER_SIZE, APPSHELL_HEADER_HEIGHT } from "@/lib/constants";
import { ActionIcon, Container, ContainerProps, Group, Menu, MenuDropdown, MenuItem, MenuTarget } from "@mantine/core";
import { HeaderLogo, HeaderMenu, HeaderNavigationItem, HeaderScrollProvider } from ".";
import { IconDotsVertical, IconInfoCircle, IconSettings } from "@tabler/icons-react";

import React from "react";

type HeaderProps = {} & Omit<ContainerProps, "children">;

const Header = ({ ...props }: HeaderProps) => {
	return (
		<HeaderScrollProvider>
			<Container
				size={APPSHELL_CONTAINER_SIZE}
				{...props}
			>
				<Group
					h={APPSHELL_HEADER_HEIGHT}
					justify="space-between"
				>
					<HeaderLogo />
					<Group visibleFrom="sm">
						<HeaderNavigationItem
							href="/"
							exact
						>
							Home
						</HeaderNavigationItem>
						<HeaderNavigationItem href="/projects">Projects</HeaderNavigationItem>
						<HeaderNavigationItem href="/blog">Blog</HeaderNavigationItem>
					</Group>
					<Menu position="bottom-end">
						<MenuTarget>
							<ActionIcon
								variant="subtle"
								size="lg"
								visibleFrom="sm"
							>
								<IconDotsVertical size={20} />
							</ActionIcon>
						</MenuTarget>
						<MenuDropdown>
							<MenuItem leftSection={<IconSettings size={18} />}>Settings</MenuItem>
							<MenuItem leftSection={<IconInfoCircle size={18} />}>About</MenuItem>
						</MenuDropdown>
					</Menu>
					<HeaderMenu hiddenFrom="sm" />
				</Group>
			</Container>
		</HeaderScrollProvider>
	);
};

export default Header;
