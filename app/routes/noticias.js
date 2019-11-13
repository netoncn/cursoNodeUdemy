module.exports = function (app) {
  app.get('/noticias', function (req, res) {
    var mysql = require('mysql')
    var connection = mysql.createConnection({
      host: '192.185.223.161',
      user: 'heynerdc_pn',
      password: '123456',
      database: 'heynerdc_pn'
    })

    connection.query('SELECT * FROM noticias', function (error, result) {
      res.send(error || result)
    })

    // res.render('noticias/noticias')
  })
}
