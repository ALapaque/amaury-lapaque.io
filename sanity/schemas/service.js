export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        {
            name: 'order',
            title: 'Order',
            type: 'number'
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'},]
        },
        {
            name: 'svg',
            title: 'Svg content',
            type: 'text'
        }
    ]
};
