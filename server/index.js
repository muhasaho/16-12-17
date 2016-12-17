const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({
    port: 8080,
});
server.start((error) => {
    if (error){
        throw error
    }
    console.log(`Server running: ${server.info.uri}`)
});