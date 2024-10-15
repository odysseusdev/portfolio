import { Stack, Text, Title } from "@mantine/core";

import BlogPosts from "@/components/blog-posts/blog-posts";
import Hero from "@/components/layout/hero";
import Projects from "@/components/projects/projects";
import { getAllBlogPosts } from "@/lib/api/blog-posts";
import { getAllProjects } from "@/lib/api/projects";

const RootPage = () => {
	const projects = getAllProjects();
	const blogPosts = getAllBlogPosts();

	return (
		<>
			<Hero
				title="odysseus."
				description="Full-stack web developer with a focus on clean and intuitive user experiences"
			/>
			<Stack>
				<Title variant="h2">Projects</Title>
				<Text c="dimmed">All external-facing repositories developed and supported by odysseus.</Text>
				<Projects projects={projects.filter(project => project.favourite)} />
			</Stack>
			<Stack>
				<Title variant="h2">Blog posts</Title>
				<Text c="dimmed">Discoveries, releases and how-to guides on common development issues</Text>
				<BlogPosts blogPosts={blogPosts.slice(0, 3)} />
			</Stack>
		</>
	);
};

export default RootPage;
