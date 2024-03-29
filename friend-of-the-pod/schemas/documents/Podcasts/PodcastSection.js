export default {
    name: 'podcastSection',
    title: 'Podcasts',
    type: 'document',
    fields: [
        {
            name: 'podcast',
            title: 'Podcast',
            type: 'array',
            of: [{ type: 'podcast' }],
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'Podcast Section',
            }
        }
    }
}