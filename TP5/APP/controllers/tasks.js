var axios = require('axios')



module.exports.list = () => {
    return axios.get('http://localhost:3000/toDo')
        .then(response => response.data)
        .catch(error => console.log(error))
}


module.exports.add = (task) => {
    return axios.post('http://localhost:3000/toDo', task)
        .then(response => response.data)
        .catch(error => console.log(error))
}

module.exports.update = (task) => {
    return axios.patch('http://localhost:3000/toDo/' + task.id, task)
        .then(response => response.data)
        .catch(error => console.log(error))
}

module.exports.delete = (id) => {
    return axios.delete('http://localhost:3000/toDo/' + id)
        .then(response => response.data)
        .catch(error => console.log(error))
}