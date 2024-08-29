import { z, defineCollection, reference } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().default(true),
      title: z.string(),
      description: z.string(),
      url: z.string().url(),
      tags: z.array(z.string().toLowerCase()),
      author: z.string(),
      image: image(),
      pubDate: z.date(),
      relatedArticles: z.array(reference('articles')).optional()
    })
})

export const collections = {
  articles
}
