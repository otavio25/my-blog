const model = require('../model/listagem_textos_model')

module.exports = {
    get_titulo : async(req, res) => {
        try {
            const {titulo} = req.query

            if(titulo === null || titulo === ""){
                return res.status(400).json({error: 'É necessário atribuir um valor para o campo título.'})
            }
            const texto = await model.data_list_titulo(titulo)

            if(texto.length > 0){
                return res.status(200).json(texto.shift())
            }
            else{
                return res.status(404).json({error: 'Dados não encontrados'})
            }
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor'})
        }
    },
    get_classificacao : async(req, res) => {
        try {
            const {classificacao} = req.query

            if(classificacao === null || classificacao === ""){
                return res.status(400).json({error: 'É necessário atribuir um valor para o campo título.'})
            }
            const textos = await model.data_list_classificacao(classificacao)

            if(textos.length > 0){
                return res.status(200).json(textos)
            }
            else{
                return res.status(404).json({error: 'Dados não encontrados'})
            }
        } catch (error) {
            console.log(error.message)
            return res.status(500).json({error: 'Erro no servidor'})
        }
    }
}