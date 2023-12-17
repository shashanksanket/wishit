module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], // Define your global path here
          alias: {
            '@components': './components',
            '@screens': './screens',
            '@utils': './utils',
            '@images': './assets/images',
            '@' : "./"
            // Add more aliases as needed
          },
        },
      ],
    ],
  };
};
