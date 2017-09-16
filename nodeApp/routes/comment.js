let express = require('express');
let mongodb = require('mongodb');

let router = express.Router();
let mongoCt = mongodb.MongoClient();

router.get('/', (req,res) => {
   mongoCt.connect ('mongodb://localhost:27017/vue',(err,db) => {
       let comment = db.collection('comment');
       comment.find().toArray((err,data) => {
           if(err){
               res.status(500).send('database error from comment');
           } else {
               res.send(data);
           }
       });
       db.close();
   });
});

router.post('/', (req,res) => {
    mongoCt.connect('mongodb://localhost:27017/vue',(err,db) => {
        let comment = db.collection('comment');
        comment.insert(req.body, (err,data) => {
            if(err){
                res.status(500).send('database error from comment');
            } else {
                res.send({error:0,msg:"评论成功"});
            }
        });
        db.close();
    });
});

module.exports = router;