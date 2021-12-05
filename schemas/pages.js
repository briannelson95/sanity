import { IoIosDocument } from "react-icons/io";

export default {
    name: 'pages',
    title: 'Pages',
    icon: IoIosDocument,
    type: 'document',
    fields: [
        {
            name: 'page',
            title: 'Page',
            type: 'string',
            description: 'The page this content will be on'
        },
        {
            name: 'title',
            title: 'H1 Title',
            type: 'string',
            description: 'What is the title of the homepage?',
        },
        {
            name: 'subtitle',
            title: 'subtitle',
            type: 'string',
            description: 'Your tagline'
        },
        {
            name: 'cta',
            title: 'CTA',
            type: 'string',
            description: 'What do you want users to do?',
        }
    ],

    preview: {
        select: {
            title: 'page',
            subtitle: 'title',
        }
    }
};