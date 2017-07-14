module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/react-inbox'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/react-inbox'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
