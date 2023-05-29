import { IPost } from "@/src/types";
import { getPostBySlug, getPosts } from "@/src/wp-api";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface IPostProps {
	post: IPost;
}

const PostPage: NextPage<IPostProps> = ({ post }) => {
	return (
		<div className="container">
			{post && (
				<article>
					<h1>{post.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</article>
			)}
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getPosts();

	// создаём массив путей для каждого поста
	const paths = posts.map((post) => ({
		params: { slug: post.slug },
	}));

	return {
		// возвращаем массив путей
		paths,
		// fallback может быть true, false или 'blocking'
		// подробней тут: <https://nextjs.org/docs/api-reference/data-fetching/get-static-paths>
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const slug = context.params?.slug as string;
	const post = await getPostBySlug(slug);

	return {
		props: {
			post,
		},
	};
};

export default PostPage;
