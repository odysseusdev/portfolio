import { APPSHELL_CONTAINER_SIZE, APPSHELL_FOOTER_HEIGHT } from "@/lib/constants";
import { ActionIcon, Container, Group, Text, Tooltip } from "@mantine/core";

import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<Container size={APPSHELL_CONTAINER_SIZE}>
			<Group
				h={APPSHELL_FOOTER_HEIGHT}
				justify="space-between"
				align="center"
			>
				<Text
					size="sm"
					c="dimmed"
				>
					&copy; odysseus. · 2024{year !== 2024 && ` - ${year}`} · All rights reserved.
				</Text>
				<Tooltip
					label="GitHub"
					position="top-end"
				>
					<ActionIcon
						component={Link}
						href="https://github.com/odysseusdev/portfolio"
						target="_blank"
						variant="transparent"
						size="sm"
						color="gray"
					>
						<IconBrandGithub size={16} />
					</ActionIcon>
				</Tooltip>
			</Group>
		</Container>
	);
};

export default Footer;
