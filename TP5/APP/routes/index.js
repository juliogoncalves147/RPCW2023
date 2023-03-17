var express = require('express');
var router = express.Router();
var Task = require('../controllers/tasks')

/* GET home page. */
router.get('/', function(req, res, next) {
  Task.list().then(dados => {
      res.render('homepage', { d: dados });
}).catch(erro => {
      res.render('Erro Handler', { error: erro });
  });
});

router.post('/toDo', function(req, res, next) {
    const task = req.body;
    task.done = false;
    Task.add(req.body)
      .then(dados => {
        res.writeHead(302, {'Location': '/'});
        res.end();
      })
      .catch(erro => res.render('Erro Handler', { error: erro }));
});

router.post('/done', function(req, res, next) {
    const task = req.body;
    task.done = true;
    var date = new Date().toISOString().slice(0, 10);
    task.date = date;
    Task.update(req.body)
      .then(dados => {
        res.writeHead(302, {'Location': '/'});
        res.end();
      })
      .catch(erro => res.render('Erro Handler', { error: erro }));
});

router.post('/delete', function(req, res, next) {
    Task.delete(req.body.id)
      .then(dados => {
          res.writeHead(302, {'Location': '/'});
          res.end();
      })
      .catch(erro => res.render('Erro Handler', { error: erro }));
});

router.post('/notdone', function(req, res, next) {
    const task = req.body;
    task.done = false;
    Task.update(req.body)
      .then(dados => {
        res.writeHead(302, {'Location': '/'});
        res.end();
      })
      .catch(erro => res.render('Erro Handler', { error: erro }));
});

router.post('/edit', function(req, res, next) {
    Task.update(req.body)
      .then(dados => {
          res.writeHead(302, {'Location': '/'});
          res.end();
      })
      .catch(erro => res.render('Erro Handler', { error: erro }));
});

module.exports = router;
