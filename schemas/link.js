export default {
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        {
            name: 'link',
            title: 'External Link or Slug',
            type: 'array',
            of: [
                { type: 'url' },
                { type: 'slug' },
            ],
            description: 'Only the first will be used, do not set more than 1. URL is for eternal pages, slug is for anything internal.'
        },
    ],
}