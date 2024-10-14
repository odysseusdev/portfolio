import { Box, Button, Center, Container, Group, Image, Paper, Stack } from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { getAllProjects, getProjectBySlug } from "@/lib/api/projects";

import { APPSHELL_HEADER_HEIGHT } from "@/lib/constants";
import Breadcrumbs from "@/components/layout/breadcrumbs";
import Hero from "@/components/layout/hero";
import { Metadata } from "next";
import React from "react";
import ReleaseBadge from "@/components/projects/release-badge";
import Urls from "@/lib/urls";
import { markdownToHtml } from "@/lib/markdown";
import { notFound } from "next/navigation";

export type ProjectPageParams = {
	params: { slug: string };
};

const ProjectPage = async ({ params }: ProjectPageParams) => {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		return notFound();
	}

	const content = await markdownToHtml(project.content || "");

	return (
		<>
			<Breadcrumbs
				items={[{ title: "Home", href: "/" }, { title: "Projects", href: "/projects" }, { title: project.name }]}
			/>
			<Hero
				title={project.name}
				description={project.description}
			/>
			<Container
				w="100%"
				size="xs"
				p={0}
			>
				<Stack gap="xl">
					<Group grow>
						<Button
							component="a"
							href={project.url}
							target="_blank"
							rightSection={<IconExternalLink size={16} />}
						>
							Visit
						</Button>
						<Button
							component="a"
							href={Urls.github(project.repository)}
							target="_blank"
							variant="default"
							leftSection={<IconBrandGithub size={16} />}
						>
							Github
						</Button>
					</Group>
					<Group justify="center">
						<ReleaseBadge repository={project.repository} />
					</Group>
				</Stack>
			</Container>

			<Box dangerouslySetInnerHTML={{ __html: content }} />
		</>
	);
};

export default ProjectPage;

export const generateMetadata = ({ params }: ProjectPageParams): Metadata => {
	const project = getProjectBySlug(params.slug);

	if (!project) {
		return notFound();
	}

	const title: string = `${project.name.toLowerCase()} · projects · odysseus.`;

	return {
		title,
	};
};

export const generateStaticParams = async () => {
	const projects = getAllProjects();

	return projects.map(project => ({ slug: project.slug }));
};
