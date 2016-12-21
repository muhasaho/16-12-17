function registerRoutes(server){
    server.route({
        method: "GET",
        path: "/",
        handler: (request, reply) => {
            reply.file("./server/static/index.html");
        }
    });

    server.route({
        method: "GET",
        path: "/static/{param*}",
        handler: {
            directory: {
                path: "./server/static",
                index: true,
            }
        }
    })
}

module.exports = {registerRoutes};