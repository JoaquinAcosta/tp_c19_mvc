const express = require('express');
const app = express();

const port = 3030;
const mainRouter = require('./routers/main');

/* recursos estáticos*/
app.use(express.static('public'));

/* rutas */
app.use('/', mainRouter)


app.listen(port, () => console.log('Server running in http://localhost:' + port));