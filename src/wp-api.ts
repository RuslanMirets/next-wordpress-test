import { IPage, IPages, IPost, IPostPreview } from "./types";

async function fetchData(query: string) {
	const headers = { "Content-Type": "application/json" };

	const res = await fetch("https://dev.smirnov.school/graphql", {
		headers,
		method: "POST",
		body: JSON.stringify({
			query,
		}),
	});
	const json = await res.json();

	return json.data;
}

export async function getPosts() {
	const data = await fetchData(`
    query getPosts{
      posts(where: {categoryNotIn: "366"}) {
        nodes {
          slug
          title
          excerpt
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    } 	
  `);
	return data.posts.nodes as IPostPreview[];
}

export async function getPostBySlug(slug: string) {
	const data = await fetchData(`
    query getPostBySlug {
			post(id: "${slug}", idType: SLUG) {
				title
        content
			}
    } 	
  `);
	return data.post as IPost;
}

export async function getPages() {
	const data = await fetchData(`
    query getPosts{
      pages {
        nodes {
          slug
        }
      }
    } 	
  `);
	return data.pages.nodes as IPages[];
}

export async function getPageBySlug() {
	const data = await fetchData(`
    query getPageBySlug {
			page(id: "cgb", idType: URI) {
        title
        rm {
          introTitle
          introDesc
          workList {
            workListName
            workListImg {
              sourceUrl
            }
          }
        }
      }
    } 	
  `);
	return data.page as IPage;
}
