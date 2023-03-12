const axios = require('axios')


exports.post_request = function (req, res) {
    
    axios.post("http://localhost:3000/toDo", req)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
}
