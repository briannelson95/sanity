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
            name: 'location',
            title: 'Location',
            type: 'geopoint',
        },
        {
            name: 'people',
            title: 'Who I Hiked With',
            type: 'array',
            of: [{type: 'string'}]
        },
        {
            name: 'mileage',
            title: 'Mileage',
            type: 'number'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'trailHiked.name',
            subtitle: 'mileage',
        }
    }
}