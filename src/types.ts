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

export interface IPages {
	slug: string;
}

export interface IPage {
	title: string;
	rm: {
		introTitle: string;
		introDesc: string;
		workList: [{ workListName: string; workListImg: { sourceUrl: string } }];
	};
}
