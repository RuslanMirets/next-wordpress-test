export interface IPostPreview {
	slug: string;
	title: string;
	excertp: string;
	featuredImage: {
		node: {
			sourceUrl: string;
		};
	};
	date: string;
}

export interface IPost extends IPostPreview {
	content: string;
}
