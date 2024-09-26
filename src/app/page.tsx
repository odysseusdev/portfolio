import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";

import Image from "next/image";

const RootPage = () => {
	return (
		<Stack>
			<Image
				width={128}
				height={128}
				src="/favicon.ico"
				alt="Profile picture"
			/>
			<Title>odysseus.</Title>
			<Text c="dimmed">
				This will be the landing page for users visiting <a href="https://odysseusdev.app">odysseusdev.app</a>.
			</Text>
			<Stack>
				{Array(8)
					.fill(0)
					.map((_, index) => (
						<Paper
							key={index}
							px="lg"
							py="md"
							withBorder
						>
							<Text
								component="h2"
								fw={700}
								size="xl"
							>
								Retro Rewind
							</Text>
							<Text
								size="sm"
								c="dimmed"
							>
								A web application to view active rooms and players in ZPL&apos;s Mario Kart Wii mod.
							</Text>
							<Group justify="flex-end">
								<Button variant="filled">View</Button>
							</Group>
						</Paper>
					))}
			</Stack>
		</Stack>
	);
};

export default RootPage;
