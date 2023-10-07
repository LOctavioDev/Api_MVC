require('./database');
const app = require('./app');

app.listen(app.get('PORT'), () => {
    console.log('Server on port' + app.get('PORT'));

});