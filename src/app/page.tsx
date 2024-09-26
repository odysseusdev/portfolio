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
			<Group>
				<Button variant="default">Default</Button>
				<Button variant="filled">Filled</Button>
				<Button variant="light">Light</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="subtle">Subtle</Button>
				<Button variant="transparent">Transparent</Button>
				<Button variant="white">White</Button>
			</Group>
			<Stack>
				{Array(3)
					.fill(0)
					.map((_, index) => (
						<Paper
							key={index}
							p="md"
							withBorder
						>
							<Stack gap="sm">
								<Text
									fw={700}
									size="lg"
								>
									Retro Rewind
								</Text>
								<Text component="h2">
									A web application to view active rooms and players in ZPL&apos;s Mario Kart Wii mod.
								</Text>
								<Group justify="flex-end">
									<Button variant="light">View</Button>
								</Group>
							</Stack>
						</Paper>
					))}
			</Stack>
		</Stack>
	);
};

export default RootPage;
