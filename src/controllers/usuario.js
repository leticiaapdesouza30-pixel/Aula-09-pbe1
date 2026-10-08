const con  = require('../db')

const listar = (req, res) => {
    const query = 'SELECT * FROM usuario;'
    con.query(query, (err, results) => {
        if(err) {
            console.error(err)
            res.status(500).json({ error: 'Erro ao buscar usuários'})
        }else{
            res.json(results)
        }
    })
}

module.exports = {
    listar
}