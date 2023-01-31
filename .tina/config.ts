import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "abe73f23-d496-4c00-a498-d82925b497a2", // Get this from tina.io
  token: "ff985be20f9172b068d585af5f08124036430979", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "",
    },
  },
  schema: {
    collections: [
      {
        name: "exhibitions",
        label: "Exhibitions",
        path: "_exhibitions/2023",
        //  Named 'md' and not 'markdown' as that is a depracated with Tina.io. Using 'markdown' breaks some of the features such as adding content to the body
        format: "md",
        // defaultItem: () => {
        //   return {
        //     // Return a default title and the current date as the default date
        //     layout: 'page',
        //   }
        // },
        // As Jekyll posts require a date at the beginning, this code automatically adds it.
        ui: {
          filename: {
            readonly: false,
            slugify: values => {
              const date = new Date();
              const day = date.getDate();
              const month = date.getMonth() + 1;
              const year = date.getFullYear();
        
              let currentDate = `${year}-${month}-${day}`;
        
              return `${currentDate}-${values?.title?.toLowerCase().replace(/ /g, '-')}`
            }
          }
        },
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
      {
        name: "equipment",
        label: "Equipment",
        path: "_equipment",
        format: "md",
        // defaultItem: () => {
        //  return {
        //     layout: "page",
        //     grand_parent: "Equipment"
        //  }
        // },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "parent",
            label: "Sub Category",
            required: true,
            list: true,
            options: [
              {
                value: "Fabrication",
                label: "Fabrication"
              },
              {
                value: "Multimedia",
                label: "Multimedia"
              },
              {
                value: "Other",
                label: "Other"
              },
            ],
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