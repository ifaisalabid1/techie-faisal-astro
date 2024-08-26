import { z, defineCollection, reference } from 'astro:content'

const articles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.string(),
      tags: z.array(z.string().toLowerCase()),
      author: z.string(),
      image: image(),
      pubDate: z.date(),
      relatedArticles: z.array(reference('articles')).optional()
    })
})

const featuredArticles = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
      image: image(),
      pubDate: z.date()
    })
})

export const collections = {
  articles,
  featuredArticles
}
