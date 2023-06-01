const knexfile = require('../../knexfile')
const knex = require('knex')(knexfile)

module.exports = {
    data_create : (titulo, texto, classificacao) => {
        try {
            const data = {
                titulo: titulo,
                texto: texto,
                classificacao: classificacao
            }
            const query = knex.insert(data).from('textos')

            return query
        } catch (error) {
            console.log(message.error)
        }
    }
}