module.exports = {
  host: process.env.HOST || '127.0.0.1',
  port:
    process.env.PORT || (process.env.NODE_ENV === 'development' ? 8081 : 3000),
  apiHost: process.env.PAIHOST || '127.0.0.1',
  apiPort: process.env.APIPORT || '3030',
  dbPort: '27017'
};
