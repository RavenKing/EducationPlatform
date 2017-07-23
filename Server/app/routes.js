// app/routes.js
var Pilot = require('./models/pilots');
var Document = require('./models/documents');
var Course = require('./models/Courses');
var Company = require('./models/Company');
var Workflow = require('./models/WorkFlow');
var Agency = require('./models/Agency');
var mongoose = require('mongoose');
var User = require('./models/User')



module.exports = function(app) {

    // pilots operations
    app.get('/api/agencys', function(req, res) {

        console.log(req.query);

        Agency.find(req.query, function(err, pilots) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(pilots); // return all nerds in JSON format
        });

    });


    app.post('/api/agencys', function(req, res) {
        console.log(req.body)
        var newOne = new Agency(req.body);
        newOne.save(function(err) {
            if (err) {
                console.log(err);
                res.send(false);
            }
        })
        res.send(true);

    });

    app.put('/api/pilots', function(req, res) {
        console.log(req.body)
        var query = req.body.target;
        var updatepart = req.body.updatepart;
        Pilot.findOneAndUpdate(query, updatepart, function(err, data) {
            if (err)
                res.send(err);
            res.send("update success");
        });
    });

    app.delete('/api/pilots', function(req, res) {
        console.log(req.body)
        var query = req.body.target;
        Pilot.findOneAndRemove(query, function(err, data) {
            if (err)
                res.send(err);
            res.send("delete success");
        });
    });

    //end of pilot operations



    //users
    app.get('/api/users', function(req, res) {
        User.find(req.query, function(err, pilots) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(pilots); // return all nerds in JSON format
        });

    });

    app.post('/api/users', function(req, res) {
        console.log(req.body);
        var newOne = new User(req.body);
        newOne.save(function(err) {
            if (err) {
                console.log(err);
                res.send(false);
            }
        })
        res.send(true);
    });



    app.post('/api/login', function(req, res) {
            var query = req.body;
            User.findOne(query, function(err, data) {
                if (data == null) {
                    res.send('未找到该用户');
                } else {
                    if (data.password == req.body.password) {
                        res.json(data);
                    } else
                        res.send("密码错误");
                }

            })

        });
    //company 




    app.post('/api/companys', function(req, res) {
        var newOne = new Company(req.body);
        newOne.save(function(err) {
            if (err) {
                console.log(err);
                res.send(false);
            }
        })
        res.send(true);

    });

    app.put('/api/companys', function(req, res) {
        var query = req.body.target;
        var updatepart = req.body.updatepart;
        Company.findOneAndUpdate(query, updatepart, function(err, data) {
            if (err)
                res.send(err);
            res.send("update success");
        });
    });

    app.delete('/api/companys', function(req, res) {
        console.log(req.body)
        var query = req.body.target;
        Company.findOneAndRemove(query, function(err, data) {
            if (err)
                res.send(err);
            res.send("delete success");
        });
    });

    //end of companys


    // Workflow
    app.get('/api/workflows', function(req, res) {
        Workflow.find(req.query, function(err, pilots) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err)
                res.send(err);
            res.json(pilots); // return all nerds in JSON format
        });

    });


    app.post('/api/workflows', function(req, res) {
        var newOne = new Workflow(req.body);
        newOne.save(function(err) {
            if (err) {
                console.log(err);
                res.send(false);
            }
        })
        res.send(true);

    });

    app.put('/api/workflows', function(req, res) {
        var query = req.body.target;
        var updatepart = req.body.updatepart;
        Workflow.findOneAndUpdate(query, updatepart, function(err, data) {
            if (err)
                res.send(err);
            res.send("update success");
        });
    });

    app.delete('/api/workflows', function(req, res) {
        console.log(req.body)
        var query = req.body.target;
        Workflow.findOneAndRemove(query, function(err, data) {
            if (err)
                res.send(err);
            res.send("delete success");
        });
    });




    // end of workflows


    app.get('*', function(req, res) {
        res.render('index'); // load our public/index.html file
    });




};