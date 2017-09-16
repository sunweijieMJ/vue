let express = require('express');
let mongodb = require('mongodb');

let router = express.Router();
let mongoCt = mongodb.MongoClient();

router.get('/', (req,res) => {

    mongoCt.connect('mongodb://localhost:27017/vue',(err,db) => {
        let detail = db.collection('detail');
        detail.find().toArray((err,data) => {
            if(err){
                console.log(err);
            } else {
                res.send(data);
            }
        });
        db.close();
    });
});

module.exports = router;