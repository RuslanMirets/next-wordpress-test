import { IPostPreview } from "@/src/types";
import { getPosts } from "@/src/wp-api";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface IHomeProps {
	posts: IPostPreview[];
}

const BlogPage: NextPage<IHomeProps> = ({ posts }) => {
	return (
		<div>
			{posts.map((post) => (
				<div key={post.slug}>
					<Link href={`blog/${post.slug}`}>{post.title}</Link>
				</div>
			))}
			<div>
				<Image
					src="/c734fe2d7d109e8899f86084d2cba652.jpg"
					width={600}
					height={200}
					alt="Image"
				/>
			</div>
		</div>
	);
};

// тип GetServerSideProps экспортируем из 'next'
export const getServerSideProps: GetServerSideProps = async () => {
	// тип IPostPreview[] переменной posts можно не указывать,
	// т.к. мы явно указали в getPost какого типа данные мы возвращаем
	const posts: IPostPreview[] = await getPosts();

	return {
		props: {
			posts,
		},
	};
};

export default BlogPage;
