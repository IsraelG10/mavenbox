module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        uri: env('MAVENBOXDB'),
      },
      options: {
        ssl: true,
      },
    },
  },
});
