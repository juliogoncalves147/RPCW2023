var Person = require('../models/persons');

module.exports.list = () => {
    return Person
        .find()
        .sort({nome: 1})
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        })
}

module.exports.getPerson = id => {
    return Person.findOne({id: id})
                .then(data => {
                    return data
                })
                .catch(erro => {
                    return erro
                })
}

module.exports.addPerson = a => {
    return Person.create(a)
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.updatePerson = a => {
    return Person.updateOne({id: a.id}, a)
        .then(resposta => {
            console.dir(resposta)
            return resposta
        })
        .catch(erro => {
            return erro
        })
}

module.exports.deletePerson = id => {
    return Person.deleteOne({id: id})
        .then(resposta => {
            return resposta
        })
        .catch(erro => {
            return erro
        })
}