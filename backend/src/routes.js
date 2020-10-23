const express = require('express');

const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/*
* Rota / Recurso
*/

/**
 * Metodos HTTP
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parametros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação): 
  * Route Params: Parâmetros utilizados para indentificar recursos
  * Request Body: Corpo da requsição, utilizado para criar ou alterar recursos 
  * 
  */

/**
 * Drive: SELECT * FROM users
 * Qyery Builder: table('user').select('*').where()
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;