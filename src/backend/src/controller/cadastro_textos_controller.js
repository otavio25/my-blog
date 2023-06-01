const model = require("../model/cadastro_textos_model")

module.exports = {
    post : async(req, res) => {
        try {
            const {titulo, texto, classificacao} = req.body
            if(titulo === null || titulo === "" || texto === null || texto === ""){
                return res.status(400).json({message: 'Os campos precisam ser preenchidos.'})
            }
            const resultado = await model.data_create(titulo, texto, classificacao)
            console.log(resultado)
            return res.status(201).json({message: 'Dados cadastrados com sucesso.'})
        } catch (error) {
            console.log(error.message)
        }
    }
}