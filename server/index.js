require('dotenv').config();
const Hapi = require('hapi');
const routes = require("./routes");
const lifxModule = require('./lifx');
const inertPlugin = require("inert");

// setup server
const server = new Hapi.Server();
server.connection({
    port: 8080,
});

server.register([inertPlugin], (error) => {
    if (error){
        console.error(`Failed to load plugin: ${error}`);
        throw error;
    }

    // configure routes
    routes.registerRoutes(server);
    lifxModule.initialize(server, "/lifx");
});


// start server
server.start((error) => {
    if (error){
        throw error
    }
    console.log(`Server running: ${server.info.uri}`);
});