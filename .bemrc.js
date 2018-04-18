module.exports = {
  levels: [
    {
      layer: 'common',
      path: 'src/blocks',
      scheme: 'nested'
    },
    {
      layer: 'tablet',
      path: 'src/tablet',
      scheme: 'nested'
    },
    {
      layer: 'desktop',
      path: 'src/desktop',
      scheme: 'nested'
    }
  ],
  // remove sets to build one universal bundle for index.html
  sets: {
    mobile: 'common',
    tablet: 'common tablet',
    desktop: 'common tablet desktop',
  },
  modules: {
    'bem-tools': {
      plugins: {
        create: {
          levels: {
            'src/blocks': { default: true }
          },
          techs: ['js', 'css'],
          templates: {
            js: '.bem/templates/js.js'
          }
        }
      }
    }
  }
}
