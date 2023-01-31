import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "abe73f23-d496-4c00-a498-d82925b497a2", // Get this from tina.io
  token: "ff985be20f9172b068d585af5f08124036430979", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "admin",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "admin",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
