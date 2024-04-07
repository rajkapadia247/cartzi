// Actions - Updated 2024-04-07

module.exports = {
  port: process.env.PORT || 3000,
  environment: process.env.NODE_ENV || 'development',
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/cartzi'
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'your-secret-key',
    expiresIn: '24h'
  }
};