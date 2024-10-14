type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	date: Date;
	favourite: boolean;
	content: string;
	preview?: boolean;
};

export default BlogPost;
