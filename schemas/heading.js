export default {
    name: 'heading',
    title: 'Heading',
    type: 'object',
    fields: [
        {
            type: 'string',
            name: 'heading',
            title: 'Heading',
            validation: Rule => Rule.required()
        },
    ],
}