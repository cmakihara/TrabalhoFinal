const agendaRoutes = require('./agenda_routes');
const produtoRoutes = require('./produto_routes');
module.exports = function(app , pool){
  agendaRoutes(app,pool);
  produtoRoutes(app,pool);
};