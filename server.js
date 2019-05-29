const express = require('express');
const productRouter = require('./product');
const categoryRouter = require('./category');
const app=express();
app.use(productRouter);
app.use(categoryRouter);
app.listen(3000,'0.0.0.0',() =>{
    console.log('server started on 3000');
});