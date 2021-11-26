import { FaPaw } from "react-icons/fa";

export default {
    name: 'about',
    title: 'About',
    icon: FaPaw,
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'stats',
            title: 'Stats',
            type: 'object',
            fields: [
                {name: 'breed', type: 'string', title: 'Breed'},
                {name: 'age', type: 'number', title: 'Age'},
                {name: 'birthday', type: 'date', title: 'Birthday', options: {
                    dateFormat: 'MM-DD',
                }},
                {name: 'toy', type: 'string', title: 'Favorite Toy'},
            ]
        },
        {
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'about',
            title: 'About',
            type: 'blockContent',
        },
    ],

    preview: {
        select: {
            title: 'name',
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