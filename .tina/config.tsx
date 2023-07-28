import React from 'react';
import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "abe73f23-d496-4c00-a498-d82925b497a2", // Get this from tina.io
  token: "ff985be20f9172b068d585af5f08124036430979", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "./",
  },
  media: {
    tina: {
      mediaRoot: "/assets/images",
      publicFolder: "./",
    },
  },
schema: {
  collections: [
    //test main pages
    {
      name: "mainpage",
      label: "Main pages",
      path: "/",
      match: {
        include:'*',
        exclude:'markdown kitchen sink',
      },
      //  Named 'md' and not 'markdown' as that is a depracated with Tina.io. Using 'markdown' breaks some of the features such as adding content to the body
      format: "md",
      // As Jekyll posts require a date at the beginning, this code automatically adds it.
      defaultItem: () => {
        return {
          layout: 'page',
        }
      },
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
          },
        },
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
    //end test

    //exhibitions
    {
      name: "exhibitions",
      label: "Exhibitions",
      path: "_exhibitions",
      match: {
        include: "*",
      },
      //  Named 'md' and not 'markdown' as that is a depracated with Tina.io. Using 'markdown' breaks some of the features such as adding content to the body
      format: "md",
      // As Jekyll posts require a date at the beginning, this code automatically adds it.
      defaultItem: () => {
        return {
          grand_parent: 'Exhibitions',
          layout: 'page',
        }
      },
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
          },
        },
      },
      fields: [
        {
          name: "layout",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
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
          label: "Year",
          required: true,
          options: [
            {
              value: "2022",
              label: "2022"
            },
            {
              value: "2023",
              label: "2023"
            },
          ],
        },
        {
          name: "grand_parent",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
        {
          type: "rich-text",
          name: "body",
          label: "Body",
          isBody: true,
        },
      ],
    },

    // Makerspace
    {
      name: "makerspace_equipment",
      label: "Makerspace pages",
      path: "makerspace",
      match: {
        include: '*',
      },
      format: "md",
      defaultItem: () => {
        return {
          grand_parent: 'makerspace_equipment',
          layout: 'page',
        }
      },
      fields: [
        {
          name: "layout",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
        {
          name: "grand_parent",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
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
          required: false,
          options: [
            {
              value: "Fabrication",
              label: "Fabrication"
            },
            {
              value: "Multimedia",
              label: "Multimedia"
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

    // Wood and Metal Workshop
    {
      name: "workshop_equipment",
      label: "Workshop Equipment",
      path: "_equipment/workshop",
      format: "md",
      defaultItem: () => {
        return {
          grand_parent: 'Workshop 202',
          layout: 'page',
        }
      },
      fields: [
        {
          name: "layout",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
        {
          name: "grand_parent",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
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
          options: [
            {
              value: "metal",
              label: "Metal Working"
            },
            {
              value: "wood",
              label: "Wood Working"
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

    // Fashion
    {
      name: "fashion_equipment",
      label: "Fashion",
      path: "_equipment/fashion",
      format: "md",
      defaultItem: () => {
        return {
          parent: 'Fashion 212',
          layout: 'page',
        }
      },
      fields: [
        {
          name: "layout",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
        {
          name: "parent",
          type: "string",
          ui: {
            component: () => {
                return <> </>
            }
          }
        },
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