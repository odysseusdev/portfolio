type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	date: Date;
	content: string;
	preview?: boolean;
};

export default BlogPost;
