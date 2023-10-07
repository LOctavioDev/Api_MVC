const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://octaviodevtech:octavio112020@clusteroctavio.n8a1lsl.mongodb.net/dsmdb?retryWrites=true&w=majority')

.then(db=>console.log('Mongodb atlas connected'))
.catch(err=>console.error(err));

