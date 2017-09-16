let express = require('express');
let mongodb = require('mongodb');

let router = express.Router();
let mongoCt = mongodb.MongoClient();

router.get('/', (req,res) => {
    mongoCt.connect('mongodb://localhost:27017/vue',(err,db) => {
        let index = db.collection('index');
        index.find().toArray((err,data) => {
            if(err){
                res.status(500).send('database error from article');
            } else {
                res.send(data);
            }
        });
        db.close();
    });
});

module.exports = router;