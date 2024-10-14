import { Button, Center, Grid, GridCol, Stack, StackProps, Text, Title } from "@mantine/core";

import Link from "next/link";
import { Project } from "@/lib/types";
import ProjectCard from "../project-card";
import React from "react";

export type ProjectsProps = { projects: Project[] };

const Projects = ({ projects }: ProjectsProps) => {
	if (!projects || projects.length === 0) {
		return <Text>No projects found.</Text>;
	}
	return (
		<Grid>
			{projects.map(project => (
				<GridCol
					key={project.slug}
					span={{ base: 12, sm: 6, lg: 4 }}
				>
					<ProjectCard
						h="100%"
						project={project}
					/>
				</GridCol>
			))}
			<GridCol span={{ base: 12, sm: 6, lg: 4 }}>
				<Center
					h="100%"
					py="lg"
				>
					<Button
						component={Link}
						href="/projects"
						variant="light"
					>
						View more projects..
					</Button>
				</Center>
			</GridCol>
		</Grid>
	);
};

export default Projects;
