import { FaWalking } from 'react-icons/fa'

export default {
    name: 'hikes',
    title: "Hikes",
    type: 'document',
    icon: FaWalking,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'date'
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
            name: 'number',
            title: 'Hike Number',
            type: 'number'
        },
        {
            name: 'trailHiked',
            title: 'Trail Hiked',
            type: 'reference',
            to: {type: 'trail'},
        },
        {
            name: 'people',
            title: 'Who I Hiked With',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
        {
            name: 'mainImage',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'trailHiked.name',
            hikeNumber: 'number',
        },
        prepare(selection) {
            const {title, hikeNumber} = selection
            return {
                title: title,
                subtitle: `Hike Number: ${hikeNumber ? hikeNumber : 'unknown'}`
            }
        }
    }
}