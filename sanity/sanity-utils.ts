import { createClient, groq } from "next-sanity";

export async function getProjects() {
	const client = createClient({
		projectId: "cxq2tyew",
		dataset: "production",
		apiVersion: "2023-12-10",
	});

	return client.fetch(
		groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url, 
            content,
        }`
	);
}
