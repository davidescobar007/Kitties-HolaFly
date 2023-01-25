const status = require('../src/cats/routes');

module.exports = (app) => {
  app.use('/kittens', status);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
