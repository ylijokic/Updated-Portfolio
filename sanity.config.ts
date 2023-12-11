import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import schemas from "@/sanity/schemas";

const config = defineConfig({
	projectId: "cxq2tyew",
	dataset: "production",
	title: "My Personal Website",
	apiVersion: "2023-12-10",
	basePath: "/admin",
	plugins: [deskTool()],
	schema: { types: schemas },
});

export default config;
