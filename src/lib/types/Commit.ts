type Commit = {
	url: string;
	sha: string;
	node_id: string;
	html_url: string;
	comments_url: string;
	commit: {
		url: string;
		author: {
			name: string;
			email: string;
			date: Date;
		};
		committer: {
			name: string;
			email: string;
			date: Date;
		};
		message: string;
		tree: {
			url: string;
			sha: string;
		};
	};
	comment_count: string;
	verification: {
		verified: boolean;
		reason: string;
		signature: string;
		payload: string;
	};
};

export default Commit;
