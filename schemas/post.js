import { FaRegFileAlt } from 'react-icons/fa'

export default {
  name: 'post',
  title: 'Post',
  icon: FaRegFileAlt,
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'date',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
          {
              name: 'alt',
              title: 'Alternative Text',
              type: 'string'
          }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
