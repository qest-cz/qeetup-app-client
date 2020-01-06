module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: ['import-graphql'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: './src',
          alias: {
            utils: './src/utils',
            components: './src/components',
            constants: './src/constants',
            screens: './src/screens',
            gql: './src/gql',
          },
        },
      ],
    ],
  }
}
