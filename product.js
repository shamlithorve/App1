const express = require('express');
router.get('/product', (request, response) => {
    const statement = `select id, title, description, price, rating  from  Product`;
    const connection = db.connect();
    connection.query(statement, (error, products) => {
        connection.end();
        response.send(utils.createResponse(error, products));
    });
});