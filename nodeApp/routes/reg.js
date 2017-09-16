// 引入exprss模块和mongodb模块
let express = require('express');
let mongodb = require('mongodb');

// 创建路由
let router = express.Router();
// 创建客户端
let mongoCt = mongodb.MongoClient();

router.post('/', (req,res,next) => {
    // 链接库
    mongoCt.connect('mongodb://localhost:27017/vue',(err,db) => {
        // 链接集合
        let user = db.collection('user');
        // 从数据库中筛选数据并转化为数组
        user.find({username:req.body.username}).toArray((err,data) => {
            if(err){
                console.log(err);
                res.status(500).send('database error from reg');
            } else {
                // 如果数据库返回数据,说明用户名已存在
                if(data.length != 0){
                    res.send({error:1,msg:"用户名已存在"});
                } else {
                    // 定义语句,向数据库中插入一条用户信息
                    let json = {username:req.body.username,password:req.body.password};
                    user.insert(json, (err,result) => {
                        if(err){
                            res.status(500).send('database error from reg');
                        } else {
                            // 注册成功后返回相应信息,以便前端做出判断
                            res.send({error:0,msg:"注册成功"});
                        }
                    });
                }
            }
        });
        // ***注: 注册请求时不能关闭数据库
        // db.close();
    });
});

module.exports = router;