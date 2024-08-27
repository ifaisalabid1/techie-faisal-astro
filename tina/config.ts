import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public'
  },
  media: {
    tina: {
      mediaRoot: 'src/content/img',
      publicFolder: '../img'
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: 'articles',
        label: 'articles',
        path: 'src/content/articles',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            required: true
          },
          {
            type: 'string',
            name: 'description',
            label: 'Description',
            required: true
          },
          {
            type: 'string',
            name: 'url',
            label: 'Url',
            required: true
          },
          {
            type: 'string',
            name: 'tags',
            label: 'Tags',
            list: true,
            required: true
          },
          {
            type: 'string',
            name: 'author',
            label: 'Author',
            required: true
          },
          {
            type: 'image',
            name: 'image',
            label: 'Image',
            required: true
          },
          {
            type: 'datetime',
            name: 'pubDate',
            label: 'Publish Date',
            required: true
          },
          {
            type: 'string',
            name: 'relatedArticles',
            label: 'Related Articles',
            list: true,
            required: true
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true
          }
        ]
      }
    ]
  }
})
