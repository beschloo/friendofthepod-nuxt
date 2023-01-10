// ./deskStructure.js

export const structure = (S) =>
  S.list()
    .title('About Section')
    .items([
      // Make a singleton of the document with ID “siteSettings”
      S.listItem()
        .title('About Section')
        .child(
          S.document().schemaType('aboutSection').documentId('aboutSection').title('About Section')
        ),
      // Add a visual divider
      S.divider(),
      S.listItem()
        .title('Podcasts')
        .child(
          S.document().schemaType('podcastSection').documentId('podcastSection').title('Podcasts')
        ),
      S.divider(),

      // Add the rest of the document types, but filter out the siteSettings type defined above
      ...S.documentTypeListItems().filter(
        (item) => !['aboutSection', 'podcastSection', 'podcast'].includes(item.getId())
      ),
    ])
