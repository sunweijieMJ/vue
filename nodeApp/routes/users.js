// 引入exprss模块和mongodb模块
let express = require('express');
let mongodb = require('mongodb');

// 创建路由
let router = express.Router();
// 创建客户端
let mongoCt = mongodb.MongoClient();

router.get('/', (req,res,next) => {

    // 主路由下统一配置过了
    // res.setHeader('Access-Control-Allow-Credentials',true);

    // 如果后端没有对应的session,返回没有登录的信息
    if(!req.session['username']){
        res.send({error:1,msg:"没有登录"});
    } else {
        // 链接库
        mongoCt.connect('mongodb://localhost:27017/vue',(err,db) => {
            // 链接集合
            let user = db.collection('user');
            // 从数据库中找出该用户的信息,并以数组的形式返回
            user.find({username:req.session['username']}).toArray((err,data) => {
                if(err){
                    res.status(500).send('database error from users');
                } else {
                    res.send(data);
                }
            });
            // 关闭数据库
            db.close();
        });
    }
});

module.exports = router;