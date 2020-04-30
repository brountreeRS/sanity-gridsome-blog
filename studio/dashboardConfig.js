export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eab28b4ab24d601946bb25f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-3uc6nnrg',
                  apiId: 'c6f4243c-c550-487d-a9de-dba0f43fcf86'
                },
                {
                  buildHookId: '5eab28b5c0326802505a4d29',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-od8o4xrh',
                  apiId: '93c29d32-fa27-4e68-99eb-b7dbca65a204'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brountreeRS/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-od8o4xrh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
