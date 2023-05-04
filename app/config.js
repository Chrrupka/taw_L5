const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://scoobychrupka:7qt2aic30C9ytqWg@cluster0.2a2ibrs.mongodb.net/?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
