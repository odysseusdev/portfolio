import Image from "next/image";

const RootPage = () => {
	return (
		<main>
			<Image
				width={128}
				height={128}
				src="/favicon.ico"
				alt="Profile picture"
			/>
			<h1>odysseus.</h1>
			<p>
				This will be the landing page for users visiting <a href="https://odysseusdev.app">odysseusdev.app</a>.
			</p>
		</main>
	);
};

export default RootPage;
