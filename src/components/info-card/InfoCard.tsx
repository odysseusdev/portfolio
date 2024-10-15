import { Paper, PaperProps, PolymorphicComponentProps, Stack, Text } from "@mantine/core";

import React from "react";

export type InfoCardProps = { title: string; description: string } & PolymorphicComponentProps<"div", PaperProps>;

const InfoCard = ({ title, description, ...props }: InfoCardProps) => {
	return (
		<Paper
			px="lg"
			py="md"
			withBorder
			{...props}
		>
			<Stack
				h="100%"
				gap="sm"
			>
				<Text
					style={{ flexBasis: 0, flexGrow: 1 }}
					component="h2"
					fw={700}
					size="lg"
				>
					{title}
				</Text>
				<Text
					style={{ flexGrow: 1 }}
					size="sm"
					c="dimmed"
				>
					{description}
				</Text>
			</Stack>
		</Paper>
	);
};

export default InfoCard;
