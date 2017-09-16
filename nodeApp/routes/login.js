// 引入exprss模块和mongodb模块
let express = require('express');
let mongodb = require('mongodb');

// 创建路由
let router = express.Router();
// 创建客户端
let mongoCt = mongodb.MongoClient();

// 响应前端的post请求
router.post('/', (req,res) => {
    // 链接vue库
    mongoCt.connect('mongodb://localhost:27017/vue',(err,db) => {
        // 链接user集合
        let user = db.collection('user');
        // 从数据库中刷选数据,并以数组的形式返回
        user.find({username:req.body.username}).toArray((err,data) => {
            if(err){
                // 数据库报错
                res.status(500).send('database error from article');
            } else {
                // 如果data长度为0,则数据库中没有找到相关数据
                if(data.length == 0){
                    res.send({error:1,msg:'用户名不存在'});
                } else {
                    // 将数据库中的密码和用户输入的密码进行对比
                    if(data[0].password == req.body.password){
                        // 通过验证后,存session/cookie
                        req.session['username'] = data[0].username;
                        // 将数据返回给前端
                        res.send(data);
                    } else {
                        res.send({error:1,msg:'用户名或密码有误'});
                    }
                }
            }
        });
        db.close();
    });
});

module.exports = router;