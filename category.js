const express = require('express');

router.get('/category', (request, response) => {
    const statement = `select id, title, description from Category`;
    const connection = db.connect();
    connection.query(statement, (error, categories) => {
        connection.end();
        response.send(utils.createResponse(error, categories));
    });

});