var express = require('express'),
    app = express(),
    Mock = require('mockjs'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/auth/login', function (req, res) {
    if (req.body.mobile == '13600000000' && req.body.password == '1') {
        var data = {
            "code": 0,
            "msg": "登录成功",         //服务端返回的说明
            "data": {
                "username": "13600000000",         // 用户登录名称
                "mobile": "13600000000",           // 用户手机号
                "realname": "",                    // 用户真实名称
                "avatar": "",                      // 用户头像
                "access_token": "524924aa33f0146cc99ad00eb6487937",  // 用户新的访问令牌，后面用这个来获取数据
                "secret_key": "5eJjYX",            // 加密的密钥
                "expired_at": 1484734645           // token过期时间
            }
        }
    } else {
        var data = {
            "code": 99,
            "msg": "登录失败"
        }
    }
    res.send(JSON.stringify(data, null, 4));
});






app.post('/api/auth/register', function (req, res) {
    var data = {
        "code": 0,
        "msg": "注册成功",
        "data": {
            "mobile": "13600000003",
            "realname": "张三",
            "access_token": "7e3ffd63dc4d246fc25ad67751106022",
            "secret_key": "mI9W1h",
            "expired_at": 1484757366
        }
    }

    res.send(JSON.stringify(data, null, 4));
});

app.post('/api/common/send_sms', function (req, res) {
    var data = {
        "code": 0,
        "msg": "操作成功",
        "data": []
    }

    res.send(JSON.stringify(data, null, 4));
});

app.post('/api/common/verify_sms', function (req, res) {
    var data = {
        "code": 0,
        "msg": "操作成功",
        "data": []
    }

    res.send(JSON.stringify(data, null, 4));
});


app.post('/api/auth/perfect_info', function (req, res) {
    var data = { "code": 0, "msg": "\u6ce8\u518c\u6210\u529f", "data": { "access_token": "6273ac557d72d7d54bf2fbf214ce6af0", "secret_key": "YAaySF", "expired_at": 1485360195 } }

    res.send(JSON.stringify(data, null, 4));
});

app.get('/api/common/parent_items', function (req, res) {
    var data = {
        "code": 0,
        "msg": "操作成功！",
        "data": [
            {
                "id": 1,                        // 父亲关系ID,注册完善信息时请用此ID
                "member_id": 6,                 // 父母亲的成员ID，获取配偶列表时请用此ID
                "realname": "张辰骏",           // 父母亲名称
                "name": "张辰骏(爷爷:张晋福)",  // 父母亲完整路径名称（选择是请显示这个）
                "father_path_items": [],
                "mother_path_items": []
            },
            {
                "id": 2,
                "member_id": 7,
                "realname": "张东骏",
                "name": "张东骏(爷爷:张增旭)",
                "father_path_items": [],
                "mother_path_items": []
            },
            {
                "id": 3,
                "member_id": 8,
                "realname": "张茗赫",
                "name": "张茗赫(爷爷:张增旭)",
                "father_path_items": [],
                "mother_path_items": []
            }
        ]
    }

    res.send(JSON.stringify(data, null, 4));
});

app.get('/api/common/spouse_items', function (req, res) {
    var data = {
        "code": 0,
        "msg": "操作成功！",
        "data": [
            {
                "id": 6,          // 配偶ID（完善用户注册信息时，请使用此字段）
                "name": "高沛菡", // 配偶名称
                "kind": 2,        // 配偶类型，1-丈夫，2-妻子
                "number": 1       // 第几任
            }
        ]
    }

    res.send(JSON.stringify(data, null, 4));
});

app.get('/api/auth/member_info', function (req, res) {
    var data = {
        "code": 0,
        "msg": "操作成功！",
        "data": {
            "id": 1,                       // 会员ID
            "username": "13600000000",     // 会员登录名称
            "sn": "12322212313",           // 会员编号
            "old_sn": "12322212313",       // 会员旧编号
            "avatar": "http://zp.songheyi.com/1.jpg",  // 会员头像
            "mobile": "13600000000",       // 会员手机号
            "realname": "张增旭",          // 会员真实名称
            "sex": 0,                      // 性别，0-未设置，1-男，2-女
            "idno": "",                    // 身份证号
            "birthday": 0,                 // 出生日期
            "native_country_id": "",       // 籍贯所在国家
            "native_province_id": "",      // 籍贯所在省份
            "native_city_id": "",          // 籍贯所在城市
            "native_district_id": "",      // 籍贯所在地区
            "native_place": [],            // 籍贯名称（数组形式）
            "country_id": "",              // 当前所在国家
            "province_id": "",             // 当前所在省份
            "city_id": "",                 // 当前所在城市
            "district_id": "",             // 当前所在地区
            "region_name": [],             // 当前所属区域名称（数组形式）
            "family_id": 1,                // 所属家族ID
            "family_sn": "zhang.fujian",   // 所属家族编号
            "family_name": "福建张氏",     // 所属家族名称
            "is_ancestor": 0,              // 是否是始祖
            "generations": 98,             // 世系数
            "hierarchies_name": "",        // 辈分名称
            "rank": 1,                     // 排行
            "marital_status": 0,           // 婚姻状况，0-未设置，1-已婚,2-未婚,3-离异,4-丧偶
            "son_in_law": 0,               // 是否是上门女婿，0-否，1-是
            "two_parent": 0,               // 是否是双承,0-否,1-是
            "huzhu": "",                   // 户主名称
            "living": 0,                   // 是否健在
            "died_at": 0,                  // 去世时间
            "burial_city_id": "",          // 墓葬所属城市ID
            "burial_district_id": "",      // 墓葬所在地区ID
            "burial_region_name": "",      // 墓葬地区名称（数组形式）
            "burial_address": "",          // 墓葬详细地址
            "status": 1,                   // 成员状态,1-启用,2-禁用
            "audit_status": 1              // 用户审核状态1-待审核,2-审核通过,3-审核不通过
        }
    }

    res.send(JSON.stringify(data, null, 4));
});


app.get('/api/tree', function (req, res) {
    var data = {
        "code": 0,
        "msg": "操作成功！",
        "data": [
            {
                "name": "Top Level",
                "parent": "null",
                "children": [
                    {
                        "name": "Level 2: A",
                        "parent": "Top Level",
                        "children": [
                            {
                                "name": "Son of A",
                                "parent": "Level 2: A"
                            },
                            {
                                "name": "Daughter of A",
                                "parent": "Level 2: A"
                            }
                        ]
                    },
                    {
                        "name": "Level 2: B",
                        "parent": "Top Level"
                    }
                ]
            }
        ]
    }

    res.send(JSON.stringify(data, null, 4))
})



module.exports = app;
