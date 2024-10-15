import { Button, ButtonProps, Group, PolymorphicComponentProps, Stack, Text } from "@mantine/core";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export type HeaderLogoProps = {} & PolymorphicComponentProps<typeof Link, ButtonProps>;

const HeaderLogo = () => {
	return (
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
				<Stack
					align="flex-start"
					gap={2}
				>
					<Text
						fw={700}
						lh={1.2}
					>
						odysseus.
					</Text>
					<Text
						size="xs"
						c="dimmed"
						lh={1}
					>
						Developer
					</Text>
				</Stack>
			</Group>
		</Button>
	);
};

export default HeaderLogo;
