const CartoonController = require('../controllers/cartoon.controller');
 
module.exports = app => {
    app.get('/api/cartoons', CartoonController.findAllCartoons);
    app.get('/api/cartoons/:id', CartoonController.findOneCartoon);
    app.post('/api/cartoons', CartoonController.createNewCartoon);
    app.put('/api/cartoons/:id', CartoonController.updateCartoon);
    app.delete('/api/cartoons/:id', CartoonController.deleteCartoon);
}