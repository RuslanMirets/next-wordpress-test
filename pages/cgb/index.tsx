import Layout from "@/src/components/Layout";
import { IPage } from "@/src/types";
import { getPageBySlug } from "@/src/wp-api";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";

interface IPageProps {
	page: IPage;
}

const CGB: NextPage<IPageProps> = ({ page }) => {
	return (
		<Layout>
			<h1>{page.title}</h1>
			<div>
				<h2
					className="h2"
					dangerouslySetInnerHTML={{ __html: page.rm.introTitle }}
				/>
				<div>
					<p>{page.rm.introDesc}</p>
				</div>
				<div className="grid grid-cols-4">
					{page.rm.workList.map((item) => (
						<div key={item.workListImg.sourceUrl}>
							<div>{item.workListName}</div>
							<div>
								<Image
									src={item.workListImg.sourceUrl}
									width={300}
									height={300}
									alt={item.workListName}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const page: IPage = await getPageBySlug();

	return {
		props: {
			page,
		},
	};
};

export default CGB;
