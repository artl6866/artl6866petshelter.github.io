const petController = require('../controllers/pets');

module.exports = function(app){
    // app.post('/new', petController.create);
    // app.get('/all', petController.index);
    // app.get('/getOne/:id', petController.getOne);
    // app.delete('/destroy/:id', petController.destroy);
    // app.put('/update', petController.update);
    app.post('/pet', petController.create);
    app.get('/pet', petController.getAll);
    app.get('/pet/:id/details', petController.getOne);
    app.delete('/pet/:id', petController.destroy)
    app.put('/pet', petController.update);
}

