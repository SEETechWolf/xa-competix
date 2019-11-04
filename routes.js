var core = require("./core.js")

var appRouter = function (app) {
    
    app.get("/", function (req, res) {
        res.status(200).send({message: 'Welcome to our restful API\n /team-status\n /user-contributions\n /pod-locations'});
    });

    app.get("/team-status", function (req, res) {
        res.status(200).send(core.teamStatus());
    });

    app.get("/user-contributions", function (req, res) {
        res.status(200).send(core.userContributions());
    });

    app.get("/pod-locations", function (req, res) {
        res.status(200).send(core.allData());
    });

    app.post("/add", function (req, res) {
        console.log(req)
        var team = req.body.team;
        var user = req.body.user;
        var weight = req.body.weight;
        var node = req.socket.remoteAddress;
        var podid = req.body.podid;
        core.add(team, user,  weight, node, podid)
        res.status(200).send({message: 'OK'});
    });
}

module.exports = appRouter;