require('dotenv').config();
const Hapi = require('hapi');
const routes = require("./routes");

// setup server
const server = new Hapi.Server();
server.connection({
    port: 8080,
});

// configure routes
routes.registerRoutes(server);

// start server
server.start((error) => {
    if (error){
        throw error
    }
    console.log(`Server running: ${server.info.uri}`);
});