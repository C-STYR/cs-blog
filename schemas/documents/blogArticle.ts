export default {
  title: 'Blog Article',
  name: 'blogArticle',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        auto: true,
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'Indexable',
      name: 'indexable',
      type: 'boolean',
      description: 'toggle on/off to prevent being indexed on /blog',
      initialValue: true,
    },
    {
      title: 'Date Published',
      name: 'publishedDate',
      type: 'datetime',
      options: {
        auto: true, //does this work?
      },
    },
    {
      title: 'Body',
      name: 'body',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
        {name: 'code', title: 'Code Block', type: 'code', options: {withFilename: true}},
      ],
    },
  ],
}
