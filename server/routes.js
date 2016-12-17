function registerRoutes(server){
    server.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => {
            reply("I'm alive yo");
        }
    });
}

module.exports = {registerRoutes};