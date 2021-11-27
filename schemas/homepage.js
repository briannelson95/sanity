export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Homepage Title',
            type: 'string',
            description: 'What is the title of the homepage?',
        },
        {
            name: 'image',
            title: 'Homepage Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};