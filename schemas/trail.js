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
            name: 'difficulty',
            title: 'Difficulty',
            type: 'string',
            options: {
                list: [
                    {title: 'Easy', value: 'easy'},
                    {title: 'Moderate', value: 'moderate'},
                    {title: 'Hard', value: 'hard'}
                ]
            } 
        },
        {
            name: 'distance',
            title: 'Distance',
            type: 'number'
        },
        {
            name: 'rating',
            title: 'Rating',
            type: 'rating',
            description: 'Rate this Trail out of 5 Stars'
        },
        {
            name: 'trailType',
            title: 'Trail Type',
            type: 'string',
            options: {
                list: [
                    {title: 'Out & Back', value: 'Out & Back'},
                    {title: 'Loop', value: 'Loop'},
                    {title: 'Point to Point', value: 'Point to Point'},
                ]
            }
        },
        {
            name: 'location',
            title: 'Location',
            type: 'geopoint'
        }
    ],
}