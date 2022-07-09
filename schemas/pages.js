import { IoIosDocument } from "react-icons/io";

export default {
    name: 'pages',
    title: 'Pages',
    icon: IoIosDocument,
    type: 'document',
    fields: [
        {
            name: 'page',
            title: 'Page Title',
            type: 'string',
            description: 'The page this content will be on'
        },
        {
            name: 'hero',
            title: 'Hero',
            type: 'array',
            of: [
                { 
                    type: 'heading'
                },
                // { 
                //     name: 'subHeading',
                //     title: 'Sub Heading',
                //     type: 'string',
                //     validation: Rule => Rule.required()
                // },
                {
                    type: 'cta'
                }
            ],
            description: 'Only used for homepage and landing pages'
        },
        // {
        //     name: 'cta',
        //     title: 'CTA',
        //     type: 'string',
        //     description: 'What do you want users to do?',
        // }
    ],

    preview: {
        select: {
            title: 'page',
            subtitle: 'title',
        }
    }
};