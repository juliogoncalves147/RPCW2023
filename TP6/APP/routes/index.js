var express = require('express');
var router = express.Router();
var Person = require('../controllers/persons')

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.list()
    .then(alunos => {
      res.render('index', { slist: alunos, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção da lista de alunos"})
    })
});

/* GET Student Form. */
router.get('/persons/registo', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  res.render('addPersonForm', {d: data})
});

router.get('/persons/edit/:idAluno', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.getPerson(req.params.idAluno)
    .then(aluno => {
      res.render('updatePersonForm', {a: aluno, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
});

router.get('/persons/:idAluno', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.getPerson(req.params.idAluno)
    .then(aluno => {
      console.dir(aluno)
      res.render('person', { a: aluno, d: data });
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
});



/* GET Student Delete Form. */
router.get('/persons/delete/:idAluno', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16)
  Person.getPerson(req.params.idAluno)
    .then(aluno => {
      res.render('deletePersonForm', {a: aluno, d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
});

/* GET Delete Confirmation */
router.get('/persons/delete/:idAluno/confirm', (req,res)=>{
  Person.deletePerso(req.params.idAluno)
    .then(resposta => {
      res.redirect('/')
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na obtenção do registo de aluno"})
    })
})

router.post('/persons/registo', (req,res) => {
  var data = new Date().toISOString().substring(0, 16)
  Person.addPerson(req.body)
    .then(aluno => {  
      res.render('addPersonConfirm', {a: aluno})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro no armazenamento do registo de aluno"})
    })
})

router.post('/persons/edit', (req,res) => {
  var data = new Date().toISOString().substring(0, 16)
  Person.updatePerson(req.body)
    .then(aluno => {
      console.dir(aluno)
      res.render('updatePersonConfirm', {a: aluno , d: data})
    })
    .catch(erro => {
      res.render('error', {error: erro, message: "Erro na alteração do registo de aluno"})
    })
})



module.exports = router;
