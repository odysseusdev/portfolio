import { APPSHELL_CONTAINER_SIZE, APPSHELL_HEADER_HEIGHT } from "@/lib/constants";
import { ActionIcon, Button, Container, ContainerProps, Group, Text } from "@mantine/core";

import { HeaderScrollManager } from ".";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {} & Omit<ContainerProps, "children">;

const Header = ({ ...props }: HeaderProps) => {
	return (
		<HeaderScrollManager>
			<Container
				size={APPSHELL_CONTAINER_SIZE}
				{...props}
			>
				<Group
					h={APPSHELL_HEADER_HEIGHT}
					justify="space-between"
					align="center"
				>
					<Button
						component={Link}
						variant="transparent"
						href="/"
						size="lg"
						px={0}
					>
						<Group gap="sm">
							<Image
								width={36}
								height={36}
								src="/favicon.ico"
								alt="Logo"
							/>

							<Text fw={700}>odysseus.</Text>
						</Group>
					</Button>
					<ActionIcon
						variant="transparent"
						size="lg"
					>
						<IconMenu2 />
					</ActionIcon>
				</Group>
			</Container>
		</HeaderScrollManager>
	);
};

export default Header;
