const express = require('express');
const routes = express.Router();
const Crud = require('./controller/crud.js');
//rotas 

routes.post('/create', Crud.Create);
routes.post('/read', Crud.Read);
routes.put('/update', Crud.Update);
routes.delete('/delete', Crud.Delete);
module.exports = routes;