import { defineCollection, z } from 'astro:content'

const communities = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().max(160).optional(),
      soon: z.string().default('Неизвестно'),
      links: z.array(z.string()).optional(),
      pubDate: z.coerce.date().optional(),
      draft: z.boolean().default(false),
      logoImage: image().optional(),
    }),
})
const groups = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date().optional(),
      logoImage: image().optional(),
    }),
})

export const collections = { communities, groups }
