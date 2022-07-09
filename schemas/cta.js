export default {
    name: 'cta',
    title: 'Call to Action',
    type: 'object',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'This is only for internal reference'
        },
        {
            type: 'link',
            name: 'Link',
            description: 'Link to the page you want to direct to'
        },
        {
            name: 'linkText',
            title: 'Link Text',
            type: 'string',
            description: 'What do you want the link to say?',
            validation: Rule => Rule.min(10).error('Minimum of 10 characters').max(30).error('Keep this fairly short')
        }
    ],
}