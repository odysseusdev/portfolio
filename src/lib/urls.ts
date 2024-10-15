const github = (repository: string): string => `https://github.com/odysseusdev/${repository}`;

const release = (repository: string): string =>
	`https://api.github.com/repos/odysseusdev/${repository}/releases/latest?include_prereleases`;

const Urls = {
	github,
	release,
};

export default Urls;
