var core = require("./core.js")

var appRouter = function (app) {
    
    app.get("/", function (req, res) {
        res.status(200).send({message: 'Welcome to our restful API'});
    });

    app.get("/team-status", function (req, res) {
        res.status(200).send(core.teamStatus());
    });

    app.get("/user-contributions", function (req, res) {
        res.status(200).send({message: 'Welcome to user-contributions'});
    });

    app.get("/pod-locations", function (req, res) {
        res.status(200).send({message: 'Welcome pod-locations'});
    });

    app.post("/add", function (req, res) {
       // console.log(req)
        var team = req.body.team;
        var user = req.body.user;
        var weight = req.body.weight;
        core.add(team, user,  weight)
        res.status(200).send({message: 'Welcome add'});
    });
}

module.exports = appRouter;