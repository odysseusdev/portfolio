import { Urls } from ".";

type Project = {
	slug: string;
	name: string;
	description: string;
	url: string;
	repository: string;
	favourite: boolean;
	content: string;
	preview?: boolean;
};

export default Project;
