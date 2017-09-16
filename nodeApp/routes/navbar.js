let express = require('express');
let mongodb = require('mongodb');

let router = express.Router();
let mongoCt = mongodb.MongoClient();

router.get('/', (req,res) => {
    mongoCt.connect('mongodb://localhost:27017/vue', (err,db) => {
        let navbar = db.collection('navbar');
        navbar.find().toArray((err,data) => {
            if(err){
                res.status(500).send('database error from navbar');
            } else {
                res.send(data);
            }
        });
        db.close();
    });
});

module.exports = router;