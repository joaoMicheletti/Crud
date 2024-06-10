const connection = require('../database/connection/connection.js');
module.exports = {
    async Create(req, res){
        const  {nome, idade, uf} = req.body;
        var Data = {
            nome, idade, uf
        };
        var conect = await connection('user').insert(Data);


        return res.json(conect);
    },
    async Read(req, res){
        const {id} = req.body;
        var conect = await connection('user').where('id', id).select('*');
        return res.json(conect);
    }, 
    async Update(req, res){
        const {id, nome, idade, uf} = req.body;
        var conect = await connection('user')
        .where('id', id)
        .update('nome', nome)
        .update('idade', idade)
        .update('uf', uf);
        return res.json(conect);
    },
    async Delete(req, res){
        const {id} = req.body;
        var conect = await connection('user').where('id', id).delete();
        return res.json(conect);     
    },
}