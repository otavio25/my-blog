const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    data_list_titulo : (titulo) => {
        try {
            const query = knex.select('titulo', 'texto', 'classificacao').from('textos').where('titulo', titulo)
            return query
        } catch (error) {
            console.log(error.message)
        }
    },
    data_list_classificacao : (classificacao) => {
        
        try {
            const query = knex.select('titulo', 'texto', 'classificacao').from('textos').where('classificacao', classificacao)
            return query
        } catch (error) {
            console.log(error.message)
        }
    }
}