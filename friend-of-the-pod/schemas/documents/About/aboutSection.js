export default {
    name: 'aboutSection',
    type: 'document',
    title: 'About Section',
    fields: [
        {
            name: 'aboutText',
            type: 'text',
            title: 'About Text'
        }
    ],
    preview: {
        prepare() {
            return {
                title: 'About Section',
            }
        }
    }
}