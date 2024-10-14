import Breadcrumbs from "@/components/layout/breadcrumbs";
import Hero from "@/components/layout/hero";
import { Metadata } from "next";
import Projects from "@/components/projects/projects";
import React from "react";
import { getAllProjects } from "@/lib/api/projects";

export const metadata: Metadata = {
	title: "projects · odysseus.",
};

const ProjectsPage = () => {
	const projects = getAllProjects();

	return (
		<>
			<Breadcrumbs items={[{ title: "Home", href: "/" }, { title: "Projects" }]} />
			<Hero
				title="Projects"
				description="All external-facing repositories developed and supported by odysseus."
			/>
			<Projects
				projects={projects}
				hideViewMore
			/>
		</>
	);
};

export default ProjectsPage;
