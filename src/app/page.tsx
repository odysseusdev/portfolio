import Image from "next/image";

const RootPage = () => {
	return (
		<>
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
			{Array(32)
				.fill(0)
				.map((_, index) => (
					<p key={index}>Content [Line {index + 1}]</p>
				))}
		</>
	);
};

export default RootPage;
