import { FaMountain } from 'react-icons/fa'


export default {
    name: 'trail',
    title: 'Trail',
    type: 'document',
    icon: FaMountain,
    fields: [
        {
            name: 'name',
            title: 'Trail Name',
            type: 'string',
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'rating',
            description: 'Rate this Trail out of 5 Stars'
        },
    ],
}