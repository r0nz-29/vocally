// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Documentation for book management system',
    version: '1.0.0',
    description:
      'This is a REST API application made with Express',
    license: {
      name: 'Licensed Under MIT',
      url: 'https://spdx.org/licenses/MIT.html',
    },
    contact: {
      name: 'Raunit Shrivastava',
      url: 'https://raunit.thedev.id',
    },
  },
  servers: [
    {
      url: 'http://localhost:8000',
      description: 'Development server',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./docs/api.js'],
};

const doc = swaggerJSDoc(options);

module.exports = doc;