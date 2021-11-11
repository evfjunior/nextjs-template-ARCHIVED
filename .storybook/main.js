module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: { builder: 'webpack5' },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
