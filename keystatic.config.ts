// keystatic.config.ts
import { collection, config, fields } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local',
  },
  ui: { brand: { name: 'RA Site' } },
  collections: {
    communities: collection({
      label: 'Сообщества',
      slugField: 'title',
      path: 'src/content/communities/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({
          name: { label: 'Заголовок', validation: { length: { min: 3 } } },
        }),
        description: fields.text({
          label: 'Описание',
          multiline: true,
        }),
        soon: fields.text({
          label: 'Основано',
          defaultValue: '1999',
          description: '1999',
        }),
        logoImage: fields.image({
          label: 'Логотип сообщества',
          directory: 'src/assets/images/communities',
          publicPath: '../../assets/images/communities',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          description: 'Set this post as draft to prevent it from being published',
        }),
        links: fields.array(fields.url({ label: 'URL' })),
        content: fields.document({
          label: 'Контент',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
})
