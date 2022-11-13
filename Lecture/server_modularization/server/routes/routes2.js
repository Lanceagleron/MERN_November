// console.log("hello")

const { json } = require("express");

// a = 3;

// module.exports = a;
// module.exports.x = 3;
// module.exports.message = "hi";

const users = [
    { firstName: "Reimu",  lastName: "Hakurei"    },
    { firstName: "Marisa", lastName: "Kirisame"   },
    { firstName: "Sanae",  lastName: "Kochiya"    },
    { firstName: "Sakuya", lastName: "Izayoi"     },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

module.exports = (app) => {

    //! app routes in a server bust start with /api
    app.get("/api/demo", (req, res) => {
        console.log("inside '/api/demo")
        res.json({message: "ok"})
    })

    //READ ALL
    app.get("/api/users", (req,res) => {
        // whatever we send here is what React axios will recieve in the .then
        res.json(users)
    })

    //READ ONE
    app.get("/api/users/:idx", (req,res) => {
        console.log(req.params.idx)
        console.log(users[req.params.idx])
        res.json({
            idRequested: req.params.idx,
            data: users[req.params.idx]
        })
    })

    // CREATE
    app.post("/api/users", (req,res) => {
        console.log(req.body);
        users.push(req.body)
        res.json({
            message: "ok"
        })

    })
}




