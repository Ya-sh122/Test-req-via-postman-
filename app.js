// <----------app.js file--------->

const express = require('express');
const app = express();

const orderRouters = require('./routes/users');


app.use('/users', orderRouters);

app.listen(3000, ()=>{console.log('Server is running at port 3000')});


//<-----------users.js file---------->

const express = require('express');
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('User list');
})

routes.post('/',(req,res)=>{
    res.send('Update user list');
})

module.exports= routes;

