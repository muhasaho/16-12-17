const path = require("path");
const url = require("url");
const fetch = require("node-fetch");
const token = process.env.LIFX_AUTH_TOKEN;
const apiRoot = process.env.LIFX_API_ROOT;
const groupId = process.env.LIFX_GROUP_ID;

function initialize(server, rootPath){
    server.route({
        path: rootPath,
        method: "GET",
        handler: (request, reply) => {
            reply("lifx module");
        }
    });

    // /lifx/toggle
    server.route({
        path: path.join(rootPath, "toggle"),
        method: "GET",
        handler: (request, reply) => {
            const toggleUrl = `${apiRoot}/lights/group_id:${groupId}/toggle`;
            fetch(toggleUrl, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            })
                .then(res => {return res.json()})
                .then(json => {reply(json)})
                .catch((err) =>{reply(new Error("Error"))});

        }
    })
}

module.exports = {initialize};