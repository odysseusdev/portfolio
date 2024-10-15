import { Button, Group, Paper, PaperProps, PolymorphicComponentProps, Stack, Text } from "@mantine/core";

import { IconExternalLink } from "@tabler/icons-react";
import Link from "next/link";
import { Project } from "@/lib/types";
import React from "react";

export type ProjectCardProps = { project: Project } & PolymorphicComponentProps<"div", PaperProps>;

const ProjectCard = ({ project, ...props }: ProjectCardProps) => {
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
					{project.name}
				</Text>
				<Text
					style={{ flexGrow: 1 }}
					size="sm"
					c="dimmed"
				>
					{project.description}
				</Text>
				<Group
					justify="flex-end"
					gap="xs"
					mt="sm"
				>
					<Button
						component="a"
						href={project.url}
						variant="default"
						rightSection={<IconExternalLink size={16} />}
					>
						Visit site
					</Button>
					<Button
						component={Link}
						href={`/projects/${project.slug}`}
						variant="filled"
					>
						Read more
					</Button>
				</Group>
			</Stack>
		</Paper>
	);
};

export default ProjectCard;
