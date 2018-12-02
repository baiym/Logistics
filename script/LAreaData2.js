//省级
var provs_data = [{"text": "\u5317\u4eac\u5e02", "value": "110000"}, {
        "text": "\u5929\u6d25\u5e02",
        "value": "120000"
    }, {"text": "\u6cb3\u5317\u7701", "value": "130000"}, {
        "text": "\u5c71\u897f\u7701",
        "value": "140000"
    }, {"text": "\u5185\u8499\u53e4\u81ea\u6cbb\u533a", "value": "150000"}, {
        "text": "\u8fbd\u5b81\u7701",
        "value": "210000"
    }, {"text": "\u5409\u6797\u7701", "value": "220000"}, {
        "text": "\u9ed1\u9f99\u6c5f\u7701",
        "value": "230000"
    }, {"text": "\u4e0a\u6d77\u5e02", "value": "310000"}, {
        "text": "\u6c5f\u82cf\u7701",
        "value": "320000"
    }, {"text": "\u6d59\u6c5f\u7701", "value": "330000"}, {
        "text": "\u5b89\u5fbd\u7701",
        "value": "340000"
    }, {"text": "\u798f\u5efa\u7701", "value": "350000"}, {
        "text": "\u6c5f\u897f\u7701",
        "value": "360000"
    }, {"text": "\u5c71\u4e1c\u7701", "value": "370000"}, {
        "text": "\u6cb3\u5357\u7701",
        "value": "410000"
    }, {"text": "\u6e56\u5317\u7701", "value": "420000"}, {
        "text": "\u6e56\u5357\u7701",
        "value": "430000"
    }, {"text": "\u5e7f\u4e1c\u7701", "value": "440000"}, {
        "text": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
        "value": "450000"
    }, {"text": "\u6d77\u5357\u7701", "value": "460000"}, {
        "text": "\u91cd\u5e86\u5e02",
        "value": "500000"
    }, {"text": "\u56db\u5ddd\u7701", "value": "510000"}, {
        "text": "\u8d35\u5dde\u7701",
        "value": "520000"
    }, {"text": "\u4e91\u5357\u7701", "value": "530000"}, {
        "text": "\u897f\u85cf\u81ea\u6cbb\u533a",
        "value": "540000"
    }, {"text": "\u9655\u897f\u7701", "value": "610000"}, {
        "text": "\u7518\u8083\u7701",
        "value": "620000"
    }, {"text": "\u9752\u6d77\u7701", "value": "630000"}, {
        "text": "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
        "value": "640000"
    }, {"text": "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a", "value": "650000"}, {
        "text": "\u53f0\u6e7e\u7701",
        "value": "710000"
    }, {
        "text": "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a",
        "value": "810000"
    }, {"text": "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a", "value": "820000"}],
    citys_data = {
        "110000": [{"text": "\u5e02\u8f96\u533a", "value": "110100"}, {"text": "\u53bf", "value": "110200"}],
        "120000": [{"text": "\u5e02\u8f96\u533a", "value": "120100"}, {"text": "\u53bf", "value": "120200"}],
        "130000": [{"text": "\u77f3\u5bb6\u5e84\u5e02", "value": "130100"}, {
            "text": "\u5510\u5c71\u5e02",
            "value": "130200"
        }, {"text": "\u79e6\u7687\u5c9b\u5e02", "value": "130300"}, {
            "text": "\u90af\u90f8\u5e02",
            "value": "130400"
        }, {"text": "\u90a2\u53f0\u5e02", "value": "130500"}, {
            "text": "\u4fdd\u5b9a\u5e02",
            "value": "130600"
        }, {"text": "\u5f20\u5bb6\u53e3\u5e02", "value": "130700"}, {
            "text": "\u627f\u5fb7\u5e02",
            "value": "130800"
        }, {"text": "\u6ca7\u5dde\u5e02", "value": "130900"}, {
            "text": "\u5eca\u574a\u5e02",
            "value": "131000"
        }, {"text": "\u8861\u6c34\u5e02", "value": "131100"}],
        "140000": [{"text": "\u592a\u539f\u5e02", "value": "140100"}, {
            "text": "\u5927\u540c\u5e02",
            "value": "140200"
        }, {"text": "\u9633\u6cc9\u5e02", "value": "140300"}, {
            "text": "\u957f\u6cbb\u5e02",
            "value": "140400"
        }, {"text": "\u664b\u57ce\u5e02", "value": "140500"}, {
            "text": "\u6714\u5dde\u5e02",
            "value": "140600"
        }, {"text": "\u664b\u4e2d\u5e02", "value": "140700"}, {
            "text": "\u8fd0\u57ce\u5e02",
            "value": "140800"
        }, {"text": "\u5ffb\u5dde\u5e02", "value": "140900"}, {
            "text": "\u4e34\u6c7e\u5e02",
            "value": "141000"
        }, {"text": "\u5415\u6881\u5e02", "value": "141100"}],
        "150000": [{"text": "\u547c\u548c\u6d69\u7279\u5e02", "value": "150100"}, {
            "text": "\u5305\u5934\u5e02",
            "value": "150200"
        }, {"text": "\u4e4c\u6d77\u5e02", "value": "150300"}, {
            "text": "\u8d64\u5cf0\u5e02",
            "value": "150400"
        }, {"text": "\u901a\u8fbd\u5e02", "value": "150500"}, {
            "text": "\u9102\u5c14\u591a\u65af\u5e02",
            "value": "150600"
        }, {"text": "\u547c\u4f26\u8d1d\u5c14\u5e02", "value": "150700"}, {
            "text": "\u5df4\u5f66\u6dd6\u5c14\u5e02",
            "value": "150800"
        }, {"text": "\u4e4c\u5170\u5bdf\u5e03\u5e02", "value": "150900"}, {
            "text": "\u5174\u5b89\u76df",
            "value": "152200"
        }, {"text": "\u9521\u6797\u90ed\u52d2\u76df", "value": "152500"}, {
            "text": "\u963f\u62c9\u5584\u76df",
            "value": "152900"
        }],
        "210000": [{"text": "\u6c88\u9633\u5e02", "value": "210100"}, {
            "text": "\u5927\u8fde\u5e02",
            "value": "210200"
        }, {"text": "\u978d\u5c71\u5e02", "value": "210300"}, {
            "text": "\u629a\u987a\u5e02",
            "value": "210400"
        }, {"text": "\u672c\u6eaa\u5e02", "value": "210500"}, {
            "text": "\u4e39\u4e1c\u5e02",
            "value": "210600"
        }, {"text": "\u9526\u5dde\u5e02", "value": "210700"}, {
            "text": "\u8425\u53e3\u5e02",
            "value": "210800"
        }, {"text": "\u961c\u65b0\u5e02", "value": "210900"}, {
            "text": "\u8fbd\u9633\u5e02",
            "value": "211000"
        }, {"text": "\u76d8\u9526\u5e02", "value": "211100"}, {
            "text": "\u94c1\u5cad\u5e02",
            "value": "211200"
        }, {"text": "\u671d\u9633\u5e02", "value": "211300"}, {"text": "\u846b\u82a6\u5c9b\u5e02", "value": "211400"}],
        "220000": [{"text": "\u957f\u6625\u5e02", "value": "220100"}, {
            "text": "\u5409\u6797\u5e02",
            "value": "220200"
        }, {"text": "\u56db\u5e73\u5e02", "value": "220300"}, {
            "text": "\u8fbd\u6e90\u5e02",
            "value": "220400"
        }, {"text": "\u901a\u5316\u5e02", "value": "220500"}, {
            "text": "\u767d\u5c71\u5e02",
            "value": "220600"
        }, {"text": "\u677e\u539f\u5e02", "value": "220700"}, {
            "text": "\u767d\u57ce\u5e02",
            "value": "220800"
        }, {"text": "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde", "value": "222400"}],
        "230000": [{"text": "\u54c8\u5c14\u6ee8\u5e02", "value": "230100"}, {
            "text": "\u9f50\u9f50\u54c8\u5c14\u5e02",
            "value": "230200"
        }, {"text": "\u9e21\u897f\u5e02", "value": "230300"}, {
            "text": "\u9e64\u5c97\u5e02",
            "value": "230400"
        }, {"text": "\u53cc\u9e2d\u5c71\u5e02", "value": "230500"}, {
            "text": "\u5927\u5e86\u5e02",
            "value": "230600"
        }, {"text": "\u4f0a\u6625\u5e02", "value": "230700"}, {
            "text": "\u4f73\u6728\u65af\u5e02",
            "value": "230800"
        }, {"text": "\u4e03\u53f0\u6cb3\u5e02", "value": "230900"}, {
            "text": "\u7261\u4e39\u6c5f\u5e02",
            "value": "231000"
        }, {"text": "\u9ed1\u6cb3\u5e02", "value": "231100"}, {
            "text": "\u7ee5\u5316\u5e02",
            "value": "231200"
        }, {"text": "\u5927\u5174\u5b89\u5cad\u5730\u533a", "value": "232700"}],
        "310000": [{"text": "\u5e02\u8f96\u533a", "value": "310100"}, {"text": "\u53bf", "value": "310200"}],
        "320000": [{"text": "\u5357\u4eac\u5e02", "value": "320100"}, {
            "text": "\u65e0\u9521\u5e02",
            "value": "320200"
        }, {"text": "\u5f90\u5dde\u5e02", "value": "320300"}, {
            "text": "\u5e38\u5dde\u5e02",
            "value": "320400"
        }, {"text": "\u82cf\u5dde\u5e02", "value": "320500"}, {
            "text": "\u5357\u901a\u5e02",
            "value": "320600"
        }, {"text": "\u8fde\u4e91\u6e2f\u5e02", "value": "320700"}, {
            "text": "\u6dee\u5b89\u5e02",
            "value": "320800"
        }, {"text": "\u76d0\u57ce\u5e02", "value": "320900"}, {
            "text": "\u626c\u5dde\u5e02",
            "value": "321000"
        }, {"text": "\u9547\u6c5f\u5e02", "value": "321100"}, {
            "text": "\u6cf0\u5dde\u5e02",
            "value": "321200"
        }, {"text": "\u5bbf\u8fc1\u5e02", "value": "321300"}],
        "330000": [{"text": "\u676d\u5dde\u5e02", "value": "330100"}, {
            "text": "\u5b81\u6ce2\u5e02",
            "value": "330200"
        }, {"text": "\u6e29\u5dde\u5e02", "value": "330300"}, {
            "text": "\u5609\u5174\u5e02",
            "value": "330400"
        }, {"text": "\u6e56\u5dde\u5e02", "value": "330500"}, {
            "text": "\u7ecd\u5174\u5e02",
            "value": "330600"
        }, {"text": "\u91d1\u534e\u5e02", "value": "330700"}, {
            "text": "\u8862\u5dde\u5e02",
            "value": "330800"
        }, {"text": "\u821f\u5c71\u5e02", "value": "330900"}, {
            "text": "\u53f0\u5dde\u5e02",
            "value": "331000"
        }, {"text": "\u4e3d\u6c34\u5e02", "value": "331100"}],
        "340000": [{"text": "\u5408\u80a5\u5e02", "value": "340100"}, {
            "text": "\u829c\u6e56\u5e02",
            "value": "340200"
        }, {"text": "\u868c\u57e0\u5e02", "value": "340300"}, {
            "text": "\u6dee\u5357\u5e02",
            "value": "340400"
        }, {"text": "\u9a6c\u978d\u5c71\u5e02", "value": "340500"}, {
            "text": "\u6dee\u5317\u5e02",
            "value": "340600"
        }, {"text": "\u94dc\u9675\u5e02", "value": "340700"}, {
            "text": "\u5b89\u5e86\u5e02",
            "value": "340800"
        }, {"text": "\u9ec4\u5c71\u5e02", "value": "341000"}, {
            "text": "\u6ec1\u5dde\u5e02",
            "value": "341100"
        }, {"text": "\u961c\u9633\u5e02", "value": "341200"}, {
            "text": "\u5bbf\u5dde\u5e02",
            "value": "341300"
        }, {"text": "\u516d\u5b89\u5e02", "value": "341500"}, {
            "text": "\u4eb3\u5dde\u5e02",
            "value": "341600"
        }, {"text": "\u6c60\u5dde\u5e02", "value": "341700"}, {"text": "\u5ba3\u57ce\u5e02", "value": "341800"}],
        "350000": [{"text": "\u798f\u5dde\u5e02", "value": "350100"}, {
            "text": "\u53a6\u95e8\u5e02",
            "value": "350200"
        }, {"text": "\u8386\u7530\u5e02", "value": "350300"}, {
            "text": "\u4e09\u660e\u5e02",
            "value": "350400"
        }, {"text": "\u6cc9\u5dde\u5e02", "value": "350500"}, {
            "text": "\u6f33\u5dde\u5e02",
            "value": "350600"
        }, {"text": "\u5357\u5e73\u5e02", "value": "350700"}, {
            "text": "\u9f99\u5ca9\u5e02",
            "value": "350800"
        }, {"text": "\u5b81\u5fb7\u5e02", "value": "350900"}],
        "360000": [{"text": "\u5357\u660c\u5e02", "value": "360100"}, {
            "text": "\u666f\u5fb7\u9547\u5e02",
            "value": "360200"
        }, {"text": "\u840d\u4e61\u5e02", "value": "360300"}, {
            "text": "\u4e5d\u6c5f\u5e02",
            "value": "360400"
        }, {"text": "\u65b0\u4f59\u5e02", "value": "360500"}, {
            "text": "\u9e70\u6f6d\u5e02",
            "value": "360600"
        }, {"text": "\u8d63\u5dde\u5e02", "value": "360700"}, {
            "text": "\u5409\u5b89\u5e02",
            "value": "360800"
        }, {"text": "\u5b9c\u6625\u5e02", "value": "360900"}, {
            "text": "\u629a\u5dde\u5e02",
            "value": "361000"
        }, {"text": "\u4e0a\u9976\u5e02", "value": "361100"}],
        "370000": [{"text": "\u6d4e\u5357\u5e02", "value": "370100"}, {
            "text": "\u9752\u5c9b\u5e02",
            "value": "370200"
        }, {"text": "\u6dc4\u535a\u5e02", "value": "370300"}, {
            "text": "\u67a3\u5e84\u5e02",
            "value": "370400"
        }, {"text": "\u4e1c\u8425\u5e02", "value": "370500"}, {
            "text": "\u70df\u53f0\u5e02",
            "value": "370600"
        }, {"text": "\u6f4d\u574a\u5e02", "value": "370700"}, {
            "text": "\u6d4e\u5b81\u5e02",
            "value": "370800"
        }, {"text": "\u6cf0\u5b89\u5e02", "value": "370900"}, {
            "text": "\u5a01\u6d77\u5e02",
            "value": "371000"
        }, {"text": "\u65e5\u7167\u5e02", "value": "371100"}, {
            "text": "\u83b1\u829c\u5e02",
            "value": "371200"
        }, {"text": "\u4e34\u6c82\u5e02", "value": "371300"}, {
            "text": "\u5fb7\u5dde\u5e02",
            "value": "371400"
        }, {"text": "\u804a\u57ce\u5e02", "value": "371500"}, {
            "text": "\u6ee8\u5dde\u5e02",
            "value": "371600"
        }, {"text": "\u83cf\u6cfd\u5e02", "value": "371700"}],
        "410000": [{"text": "\u90d1\u5dde\u5e02", "value": "410100"}, {
            "text": "\u5f00\u5c01\u5e02",
            "value": "410200"
        }, {"text": "\u6d1b\u9633\u5e02", "value": "410300"}, {
            "text": "\u5e73\u9876\u5c71\u5e02",
            "value": "410400"
        }, {"text": "\u5b89\u9633\u5e02", "value": "410500"}, {
            "text": "\u9e64\u58c1\u5e02",
            "value": "410600"
        }, {"text": "\u65b0\u4e61\u5e02", "value": "410700"}, {
            "text": "\u7126\u4f5c\u5e02",
            "value": "410800"
        }, {"text": "\u6fee\u9633\u5e02", "value": "410900"}, {
            "text": "\u8bb8\u660c\u5e02",
            "value": "411000"
        }, {"text": "\u6f2f\u6cb3\u5e02", "value": "411100"}, {
            "text": "\u4e09\u95e8\u5ce1\u5e02",
            "value": "411200"
        }, {"text": "\u5357\u9633\u5e02", "value": "411300"}, {
            "text": "\u5546\u4e18\u5e02",
            "value": "411400"
        }, {"text": "\u4fe1\u9633\u5e02", "value": "411500"}, {
            "text": "\u5468\u53e3\u5e02",
            "value": "411600"
        }, {
            "text": "\u9a7b\u9a6c\u5e97\u5e02",
            "value": "411700"
        }, {"text": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "419000"}],
        "420000": [{"text": "\u6b66\u6c49\u5e02", "value": "420100"}, {
            "text": "\u9ec4\u77f3\u5e02",
            "value": "420200"
        }, {"text": "\u5341\u5830\u5e02", "value": "420300"}, {
            "text": "\u5b9c\u660c\u5e02",
            "value": "420500"
        }, {"text": "\u8944\u9633\u5e02", "value": "420600"}, {
            "text": "\u9102\u5dde\u5e02",
            "value": "420700"
        }, {"text": "\u8346\u95e8\u5e02", "value": "420800"}, {
            "text": "\u5b5d\u611f\u5e02",
            "value": "420900"
        }, {"text": "\u8346\u5dde\u5e02", "value": "421000"}, {
            "text": "\u9ec4\u5188\u5e02",
            "value": "421100"
        }, {"text": "\u54b8\u5b81\u5e02", "value": "421200"}, {
            "text": "\u968f\u5dde\u5e02",
            "value": "421300"
        }, {
            "text": "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
            "value": "422800"
        }, {"text": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "429000"}],
        "430000": [{"text": "\u957f\u6c99\u5e02", "value": "430100"}, {
            "text": "\u682a\u6d32\u5e02",
            "value": "430200"
        }, {"text": "\u6e58\u6f6d\u5e02", "value": "430300"}, {
            "text": "\u8861\u9633\u5e02",
            "value": "430400"
        }, {"text": "\u90b5\u9633\u5e02", "value": "430500"}, {
            "text": "\u5cb3\u9633\u5e02",
            "value": "430600"
        }, {"text": "\u5e38\u5fb7\u5e02", "value": "430700"}, {
            "text": "\u5f20\u5bb6\u754c\u5e02",
            "value": "430800"
        }, {"text": "\u76ca\u9633\u5e02", "value": "430900"}, {
            "text": "\u90f4\u5dde\u5e02",
            "value": "431000"
        }, {"text": "\u6c38\u5dde\u5e02", "value": "431100"}, {
            "text": "\u6000\u5316\u5e02",
            "value": "431200"
        }, {
            "text": "\u5a04\u5e95\u5e02",
            "value": "431300"
        }, {"text": "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "value": "433100"}],
        "440000": [{"text": "\u5e7f\u5dde\u5e02", "value": "440100"}, {
            "text": "\u97f6\u5173\u5e02",
            "value": "440200"
        }, {"text": "\u6df1\u5733\u5e02", "value": "440300"}, {
            "text": "\u73e0\u6d77\u5e02",
            "value": "440400"
        }, {"text": "\u6c55\u5934\u5e02", "value": "440500"}, {
            "text": "\u4f5b\u5c71\u5e02",
            "value": "440600"
        }, {"text": "\u6c5f\u95e8\u5e02", "value": "440700"}, {
            "text": "\u6e5b\u6c5f\u5e02",
            "value": "440800"
        }, {"text": "\u8302\u540d\u5e02", "value": "440900"}, {
            "text": "\u8087\u5e86\u5e02",
            "value": "441200"
        }, {"text": "\u60e0\u5dde\u5e02", "value": "441300"}, {
            "text": "\u6885\u5dde\u5e02",
            "value": "441400"
        }, {"text": "\u6c55\u5c3e\u5e02", "value": "441500"}, {
            "text": "\u6cb3\u6e90\u5e02",
            "value": "441600"
        }, {"text": "\u9633\u6c5f\u5e02", "value": "441700"}, {
            "text": "\u6e05\u8fdc\u5e02",
            "value": "441800"
        }, {"text": "\u4e1c\u839e\u5e02", "value": "441900"}, {
            "text": "\u4e2d\u5c71\u5e02",
            "value": "442000"
        }, {"text": "\u6f6e\u5dde\u5e02", "value": "445100"}, {
            "text": "\u63ed\u9633\u5e02",
            "value": "445200"
        }, {"text": "\u4e91\u6d6e\u5e02", "value": "445300"}],
        "450000": [{"text": "\u5357\u5b81\u5e02", "value": "450100"}, {
            "text": "\u67f3\u5dde\u5e02",
            "value": "450200"
        }, {"text": "\u6842\u6797\u5e02", "value": "450300"}, {
            "text": "\u68a7\u5dde\u5e02",
            "value": "450400"
        }, {"text": "\u5317\u6d77\u5e02", "value": "450500"}, {
            "text": "\u9632\u57ce\u6e2f\u5e02",
            "value": "450600"
        }, {"text": "\u94a6\u5dde\u5e02", "value": "450700"}, {
            "text": "\u8d35\u6e2f\u5e02",
            "value": "450800"
        }, {"text": "\u7389\u6797\u5e02", "value": "450900"}, {
            "text": "\u767e\u8272\u5e02",
            "value": "451000"
        }, {"text": "\u8d3a\u5dde\u5e02", "value": "451100"}, {
            "text": "\u6cb3\u6c60\u5e02",
            "value": "451200"
        }, {"text": "\u6765\u5bbe\u5e02", "value": "451300"}, {"text": "\u5d07\u5de6\u5e02", "value": "451400"}],
        "460000": [{"text": "\u6d77\u53e3\u5e02", "value": "460100"}, {
            "text": "\u4e09\u4e9a\u5e02",
            "value": "460200"
        }, {
            "text": "\u4e09\u6c99\u5e02",
            "value": "460300"
        }, {"text": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "469000"}],
        "500000": [{"text": "\u5e02\u8f96\u533a", "value": "500100"}, {"text": "\u53bf", "value": "500200"}],
        "510000": [{"text": "\u6210\u90fd\u5e02", "value": "510100"}, {
            "text": "\u81ea\u8d21\u5e02",
            "value": "510300"
        }, {"text": "\u6500\u679d\u82b1\u5e02", "value": "510400"}, {
            "text": "\u6cf8\u5dde\u5e02",
            "value": "510500"
        }, {"text": "\u5fb7\u9633\u5e02", "value": "510600"}, {
            "text": "\u7ef5\u9633\u5e02",
            "value": "510700"
        }, {"text": "\u5e7f\u5143\u5e02", "value": "510800"}, {
            "text": "\u9042\u5b81\u5e02",
            "value": "510900"
        }, {"text": "\u5185\u6c5f\u5e02", "value": "511000"}, {
            "text": "\u4e50\u5c71\u5e02",
            "value": "511100"
        }, {"text": "\u5357\u5145\u5e02", "value": "511300"}, {
            "text": "\u7709\u5c71\u5e02",
            "value": "511400"
        }, {"text": "\u5b9c\u5bbe\u5e02", "value": "511500"}, {
            "text": "\u5e7f\u5b89\u5e02",
            "value": "511600"
        }, {"text": "\u8fbe\u5dde\u5e02", "value": "511700"}, {
            "text": "\u96c5\u5b89\u5e02",
            "value": "511800"
        }, {"text": "\u5df4\u4e2d\u5e02", "value": "511900"}, {
            "text": "\u8d44\u9633\u5e02",
            "value": "512000"
        }, {
            "text": "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde",
            "value": "513200"
        }, {
            "text": "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "513300"
        }, {"text": "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde", "value": "513400"}],
        "520000": [{"text": "\u8d35\u9633\u5e02", "value": "520100"}, {
            "text": "\u516d\u76d8\u6c34\u5e02",
            "value": "520200"
        }, {"text": "\u9075\u4e49\u5e02", "value": "520300"}, {
            "text": "\u5b89\u987a\u5e02",
            "value": "520400"
        }, {"text": "\u6bd5\u8282\u5e02", "value": "520500"}, {
            "text": "\u94dc\u4ec1\u5e02",
            "value": "520600"
        }, {
            "text": "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
            "value": "522300"
        }, {
            "text": "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde",
            "value": "522600"
        }, {"text": "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "value": "522700"}],
        "530000": [{"text": "\u6606\u660e\u5e02", "value": "530100"}, {
            "text": "\u66f2\u9756\u5e02",
            "value": "530300"
        }, {"text": "\u7389\u6eaa\u5e02", "value": "530400"}, {
            "text": "\u4fdd\u5c71\u5e02",
            "value": "530500"
        }, {"text": "\u662d\u901a\u5e02", "value": "530600"}, {
            "text": "\u4e3d\u6c5f\u5e02",
            "value": "530700"
        }, {"text": "\u666e\u6d31\u5e02", "value": "530800"}, {
            "text": "\u4e34\u6ca7\u5e02",
            "value": "530900"
        }, {
            "text": "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde",
            "value": "532300"
        }, {
            "text": "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde",
            "value": "532500"
        }, {
            "text": "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
            "value": "532600"
        }, {
            "text": "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde",
            "value": "532800"
        }, {
            "text": "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde",
            "value": "532900"
        }, {
            "text": "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde",
            "value": "533100"
        }, {
            "text": "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde",
            "value": "533300"
        }, {"text": "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde", "value": "533400"}],
        "540000": [{"text": "\u62c9\u8428\u5e02", "value": "540100"}, {
            "text": "\u660c\u90fd\u5730\u533a",
            "value": "542100"
        }, {"text": "\u5c71\u5357\u5730\u533a", "value": "542200"}, {
            "text": "\u65e5\u5580\u5219\u5730\u533a",
            "value": "542300"
        }, {"text": "\u90a3\u66f2\u5730\u533a", "value": "542400"}, {
            "text": "\u963f\u91cc\u5730\u533a",
            "value": "542500"
        }, {"text": "\u6797\u829d\u5730\u533a", "value": "542600"}],
        "610000": [{"text": "\u897f\u5b89\u5e02", "value": "610100"}, {
            "text": "\u94dc\u5ddd\u5e02",
            "value": "610200"
        }, {"text": "\u5b9d\u9e21\u5e02", "value": "610300"}, {
            "text": "\u54b8\u9633\u5e02",
            "value": "610400"
        }, {"text": "\u6e2d\u5357\u5e02", "value": "610500"}, {
            "text": "\u5ef6\u5b89\u5e02",
            "value": "610600"
        }, {"text": "\u6c49\u4e2d\u5e02", "value": "610700"}, {
            "text": "\u6986\u6797\u5e02",
            "value": "610800"
        }, {"text": "\u5b89\u5eb7\u5e02", "value": "610900"}, {"text": "\u5546\u6d1b\u5e02", "value": "611000"}],
        "620000": [{"text": "\u5170\u5dde\u5e02", "value": "620100"}, {
            "text": "\u5609\u5cea\u5173\u5e02",
            "value": "620200"
        }, {"text": "\u91d1\u660c\u5e02", "value": "620300"}, {
            "text": "\u767d\u94f6\u5e02",
            "value": "620400"
        }, {"text": "\u5929\u6c34\u5e02", "value": "620500"}, {
            "text": "\u6b66\u5a01\u5e02",
            "value": "620600"
        }, {"text": "\u5f20\u6396\u5e02", "value": "620700"}, {
            "text": "\u5e73\u51c9\u5e02",
            "value": "620800"
        }, {"text": "\u9152\u6cc9\u5e02", "value": "620900"}, {
            "text": "\u5e86\u9633\u5e02",
            "value": "621000"
        }, {"text": "\u5b9a\u897f\u5e02", "value": "621100"}, {
            "text": "\u9647\u5357\u5e02",
            "value": "621200"
        }, {
            "text": "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde",
            "value": "622900"
        }, {"text": "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde", "value": "623000"}],
        "630000": [{"text": "\u897f\u5b81\u5e02", "value": "630100"}, {
            "text": "\u6d77\u4e1c\u5e02",
            "value": "630200"
        }, {
            "text": "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632200"
        }, {
            "text": "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632300"
        }, {
            "text": "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632500"
        }, {
            "text": "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632600"
        }, {
            "text": "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde",
            "value": "632700"
        }, {"text": "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde", "value": "632800"}],
        "640000": [{"text": "\u94f6\u5ddd\u5e02", "value": "640100"}, {
            "text": "\u77f3\u5634\u5c71\u5e02",
            "value": "640200"
        }, {"text": "\u5434\u5fe0\u5e02", "value": "640300"}, {
            "text": "\u56fa\u539f\u5e02",
            "value": "640400"
        }, {"text": "\u4e2d\u536b\u5e02", "value": "640500"}],
        "650000": [{
            "text": "\u4e4c\u9c81\u6728\u9f50\u5e02",
            "value": "650100"
        }, {"text": "\u514b\u62c9\u739b\u4f9d\u5e02", "value": "650200"}, {
            "text": "\u5410\u9c81\u756a\u5730\u533a",
            "value": "652100"
        }, {
            "text": "\u54c8\u5bc6\u5730\u533a",
            "value": "652200"
        }, {
            "text": "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde",
            "value": "652300"
        }, {
            "text": "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde",
            "value": "652700"
        }, {
            "text": "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde",
            "value": "652800"
        }, {
            "text": "\u963f\u514b\u82cf\u5730\u533a",
            "value": "652900"
        }, {
            "text": "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde",
            "value": "653000"
        }, {"text": "\u5580\u4ec0\u5730\u533a", "value": "653100"}, {
            "text": "\u548c\u7530\u5730\u533a",
            "value": "653200"
        }, {
            "text": "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde",
            "value": "654000"
        }, {"text": "\u5854\u57ce\u5730\u533a", "value": "654200"}, {
            "text": "\u963f\u52d2\u6cf0\u5730\u533a",
            "value": "654300"
        }, {"text": "\u81ea\u6cbb\u533a\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "value": "659000"}],
        "710000": "",
        "810000": "",
        "820000": ""
    },
    dists_data = {
        "110100": [{"text": "\u4e1c\u57ce\u533a", "value": "110101"}, {
            "text": "\u897f\u57ce\u533a",
            "value": "110102"
        }, {"text": "\u671d\u9633\u533a", "value": "110105"}, {
            "text": "\u4e30\u53f0\u533a",
            "value": "110106"
        }, {"text": "\u77f3\u666f\u5c71\u533a", "value": "110107"}, {
            "text": "\u6d77\u6dc0\u533a",
            "value": "110108"
        }, {"text": "\u95e8\u5934\u6c9f\u533a", "value": "110109"}, {
            "text": "\u623f\u5c71\u533a",
            "value": "110111"
        }, {"text": "\u901a\u5dde\u533a", "value": "110112"}, {
            "text": "\u987a\u4e49\u533a",
            "value": "110113"
        }, {"text": "\u660c\u5e73\u533a", "value": "110114"}, {
            "text": "\u5927\u5174\u533a",
            "value": "110115"
        }, {"text": "\u6000\u67d4\u533a", "value": "110116"}, {"text": "\u5e73\u8c37\u533a", "value": "110117"}],
        "110200": [{"text": "\u5bc6\u4e91\u53bf", "value": "110228"}, {
            "text": "\u5ef6\u5e86\u53bf",
            "value": "110229"
        }],
        "120100": [{"text": "\u548c\u5e73\u533a", "value": "120101"}, {
            "text": "\u6cb3\u4e1c\u533a",
            "value": "120102"
        }, {"text": "\u6cb3\u897f\u533a", "value": "120103"}, {
            "text": "\u5357\u5f00\u533a",
            "value": "120104"
        }, {"text": "\u6cb3\u5317\u533a", "value": "120105"}, {
            "text": "\u7ea2\u6865\u533a",
            "value": "120106"
        }, {"text": "\u4e1c\u4e3d\u533a", "value": "120110"}, {
            "text": "\u897f\u9752\u533a",
            "value": "120111"
        }, {"text": "\u6d25\u5357\u533a", "value": "120112"}, {
            "text": "\u5317\u8fb0\u533a",
            "value": "120113"
        }, {"text": "\u6b66\u6e05\u533a", "value": "120114"}, {
            "text": "\u5b9d\u577b\u533a",
            "value": "120115"
        }, {"text": "\u6ee8\u6d77\u65b0\u533a", "value": "120116"}],
        "120200": [{"text": "\u5b81\u6cb3\u53bf", "value": "120221"}, {
            "text": "\u9759\u6d77\u53bf",
            "value": "120223"
        }, {"text": "\u84df\u53bf", "value": "120225"}],
        "130100": [{"text": "\u5e02\u8f96\u533a", "value": "130101"}, {
            "text": "\u957f\u5b89\u533a",
            "value": "130102"
        }, {"text": "\u6865\u4e1c\u533a", "value": "130103"}, {
            "text": "\u6865\u897f\u533a",
            "value": "130104"
        }, {"text": "\u65b0\u534e\u533a", "value": "130105"}, {
            "text": "\u4e95\u9649\u77ff\u533a",
            "value": "130107"
        }, {"text": "\u88d5\u534e\u533a", "value": "130108"}, {
            "text": "\u4e95\u9649\u53bf",
            "value": "130121"
        }, {"text": "\u6b63\u5b9a\u53bf", "value": "130123"}, {
            "text": "\u683e\u57ce\u53bf",
            "value": "130124"
        }, {"text": "\u884c\u5510\u53bf", "value": "130125"}, {
            "text": "\u7075\u5bff\u53bf",
            "value": "130126"
        }, {"text": "\u9ad8\u9091\u53bf", "value": "130127"}, {
            "text": "\u6df1\u6cfd\u53bf",
            "value": "130128"
        }, {"text": "\u8d5e\u7687\u53bf", "value": "130129"}, {
            "text": "\u65e0\u6781\u53bf",
            "value": "130130"
        }, {"text": "\u5e73\u5c71\u53bf", "value": "130131"}, {
            "text": "\u5143\u6c0f\u53bf",
            "value": "130132"
        }, {"text": "\u8d75\u53bf", "value": "130133"}, {
            "text": "\u8f9b\u96c6\u5e02",
            "value": "130181"
        }, {"text": "\u85c1\u57ce\u5e02", "value": "130182"}, {
            "text": "\u664b\u5dde\u5e02",
            "value": "130183"
        }, {"text": "\u65b0\u4e50\u5e02", "value": "130184"}, {"text": "\u9e7f\u6cc9\u5e02", "value": "130185"}],
        "130200": [{"text": "\u5e02\u8f96\u533a", "value": "130201"}, {
            "text": "\u8def\u5357\u533a",
            "value": "130202"
        }, {"text": "\u8def\u5317\u533a", "value": "130203"}, {
            "text": "\u53e4\u51b6\u533a",
            "value": "130204"
        }, {"text": "\u5f00\u5e73\u533a", "value": "130205"}, {
            "text": "\u4e30\u5357\u533a",
            "value": "130207"
        }, {"text": "\u4e30\u6da6\u533a", "value": "130208"}, {
            "text": "\u66f9\u5983\u7538\u533a",
            "value": "130209"
        }, {"text": "\u6ee6\u53bf", "value": "130223"}, {
            "text": "\u6ee6\u5357\u53bf",
            "value": "130224"
        }, {"text": "\u4e50\u4ead\u53bf", "value": "130225"}, {
            "text": "\u8fc1\u897f\u53bf",
            "value": "130227"
        }, {"text": "\u7389\u7530\u53bf", "value": "130229"}, {
            "text": "\u9075\u5316\u5e02",
            "value": "130281"
        }, {"text": "\u8fc1\u5b89\u5e02", "value": "130283"}],
        "130300": [{"text": "\u5e02\u8f96\u533a", "value": "130301"}, {
            "text": "\u6d77\u6e2f\u533a",
            "value": "130302"
        }, {"text": "\u5c71\u6d77\u5173\u533a", "value": "130303"}, {
            "text": "\u5317\u6234\u6cb3\u533a",
            "value": "130304"
        }, {"text": "\u9752\u9f99\u6ee1\u65cf\u81ea\u6cbb\u53bf", "value": "130321"}, {
            "text": "\u660c\u9ece\u53bf",
            "value": "130322"
        }, {"text": "\u629a\u5b81\u53bf", "value": "130323"}, {"text": "\u5362\u9f99\u53bf", "value": "130324"}],
        "130400": [{"text": "\u5e02\u8f96\u533a", "value": "130401"}, {
            "text": "\u90af\u5c71\u533a",
            "value": "130402"
        }, {"text": "\u4e1b\u53f0\u533a", "value": "130403"}, {
            "text": "\u590d\u5174\u533a",
            "value": "130404"
        }, {"text": "\u5cf0\u5cf0\u77ff\u533a", "value": "130406"}, {
            "text": "\u90af\u90f8\u53bf",
            "value": "130421"
        }, {"text": "\u4e34\u6f33\u53bf", "value": "130423"}, {
            "text": "\u6210\u5b89\u53bf",
            "value": "130424"
        }, {"text": "\u5927\u540d\u53bf", "value": "130425"}, {
            "text": "\u6d89\u53bf",
            "value": "130426"
        }, {"text": "\u78c1\u53bf", "value": "130427"}, {
            "text": "\u80a5\u4e61\u53bf",
            "value": "130428"
        }, {"text": "\u6c38\u5e74\u53bf", "value": "130429"}, {
            "text": "\u90b1\u53bf",
            "value": "130430"
        }, {"text": "\u9e21\u6cfd\u53bf", "value": "130431"}, {
            "text": "\u5e7f\u5e73\u53bf",
            "value": "130432"
        }, {"text": "\u9986\u9676\u53bf", "value": "130433"}, {
            "text": "\u9b4f\u53bf",
            "value": "130434"
        }, {"text": "\u66f2\u5468\u53bf", "value": "130435"}, {"text": "\u6b66\u5b89\u5e02", "value": "130481"}],
        "130500": [{"text": "\u5e02\u8f96\u533a", "value": "130501"}, {
            "text": "\u6865\u4e1c\u533a",
            "value": "130502"
        }, {"text": "\u6865\u897f\u533a", "value": "130503"}, {
            "text": "\u90a2\u53f0\u53bf",
            "value": "130521"
        }, {"text": "\u4e34\u57ce\u53bf", "value": "130522"}, {
            "text": "\u5185\u4e18\u53bf",
            "value": "130523"
        }, {"text": "\u67cf\u4e61\u53bf", "value": "130524"}, {
            "text": "\u9686\u5c27\u53bf",
            "value": "130525"
        }, {"text": "\u4efb\u53bf", "value": "130526"}, {
            "text": "\u5357\u548c\u53bf",
            "value": "130527"
        }, {"text": "\u5b81\u664b\u53bf", "value": "130528"}, {
            "text": "\u5de8\u9e7f\u53bf",
            "value": "130529"
        }, {"text": "\u65b0\u6cb3\u53bf", "value": "130530"}, {
            "text": "\u5e7f\u5b97\u53bf",
            "value": "130531"
        }, {"text": "\u5e73\u4e61\u53bf", "value": "130532"}, {
            "text": "\u5a01\u53bf",
            "value": "130533"
        }, {"text": "\u6e05\u6cb3\u53bf", "value": "130534"}, {
            "text": "\u4e34\u897f\u53bf",
            "value": "130535"
        }, {"text": "\u5357\u5bab\u5e02", "value": "130581"}, {"text": "\u6c99\u6cb3\u5e02", "value": "130582"}],
        "130600": [{"text": "\u5e02\u8f96\u533a", "value": "130601"}, {
            "text": "\u65b0\u5e02\u533a",
            "value": "130602"
        }, {"text": "\u5317\u5e02\u533a", "value": "130603"}, {
            "text": "\u5357\u5e02\u533a",
            "value": "130604"
        }, {"text": "\u6ee1\u57ce\u53bf", "value": "130621"}, {
            "text": "\u6e05\u82d1\u53bf",
            "value": "130622"
        }, {"text": "\u6d9e\u6c34\u53bf", "value": "130623"}, {
            "text": "\u961c\u5e73\u53bf",
            "value": "130624"
        }, {"text": "\u5f90\u6c34\u53bf", "value": "130625"}, {
            "text": "\u5b9a\u5174\u53bf",
            "value": "130626"
        }, {"text": "\u5510\u53bf", "value": "130627"}, {
            "text": "\u9ad8\u9633\u53bf",
            "value": "130628"
        }, {"text": "\u5bb9\u57ce\u53bf", "value": "130629"}, {
            "text": "\u6d9e\u6e90\u53bf",
            "value": "130630"
        }, {"text": "\u671b\u90fd\u53bf", "value": "130631"}, {
            "text": "\u5b89\u65b0\u53bf",
            "value": "130632"
        }, {"text": "\u6613\u53bf", "value": "130633"}, {
            "text": "\u66f2\u9633\u53bf",
            "value": "130634"
        }, {"text": "\u8821\u53bf", "value": "130635"}, {
            "text": "\u987a\u5e73\u53bf",
            "value": "130636"
        }, {"text": "\u535a\u91ce\u53bf", "value": "130637"}, {
            "text": "\u96c4\u53bf",
            "value": "130638"
        }, {"text": "\u6dbf\u5dde\u5e02", "value": "130681"}, {
            "text": "\u5b9a\u5dde\u5e02",
            "value": "130682"
        }, {"text": "\u5b89\u56fd\u5e02", "value": "130683"}, {"text": "\u9ad8\u7891\u5e97\u5e02", "value": "130684"}],
        "130700": [{"text": "\u5e02\u8f96\u533a", "value": "130701"}, {
            "text": "\u6865\u4e1c\u533a",
            "value": "130702"
        }, {"text": "\u6865\u897f\u533a", "value": "130703"}, {
            "text": "\u5ba3\u5316\u533a",
            "value": "130705"
        }, {"text": "\u4e0b\u82b1\u56ed\u533a", "value": "130706"}, {
            "text": "\u5ba3\u5316\u53bf",
            "value": "130721"
        }, {"text": "\u5f20\u5317\u53bf", "value": "130722"}, {
            "text": "\u5eb7\u4fdd\u53bf",
            "value": "130723"
        }, {"text": "\u6cbd\u6e90\u53bf", "value": "130724"}, {
            "text": "\u5c1a\u4e49\u53bf",
            "value": "130725"
        }, {"text": "\u851a\u53bf", "value": "130726"}, {
            "text": "\u9633\u539f\u53bf",
            "value": "130727"
        }, {"text": "\u6000\u5b89\u53bf", "value": "130728"}, {
            "text": "\u4e07\u5168\u53bf",
            "value": "130729"
        }, {"text": "\u6000\u6765\u53bf", "value": "130730"}, {
            "text": "\u6dbf\u9e7f\u53bf",
            "value": "130731"
        }, {"text": "\u8d64\u57ce\u53bf", "value": "130732"}, {"text": "\u5d07\u793c\u53bf", "value": "130733"}],
        "130800": [{"text": "\u5e02\u8f96\u533a", "value": "130801"}, {
            "text": "\u53cc\u6865\u533a",
            "value": "130802"
        }, {"text": "\u53cc\u6ee6\u533a", "value": "130803"}, {
            "text": "\u9e70\u624b\u8425\u5b50\u77ff\u533a",
            "value": "130804"
        }, {"text": "\u627f\u5fb7\u53bf", "value": "130821"}, {
            "text": "\u5174\u9686\u53bf",
            "value": "130822"
        }, {"text": "\u5e73\u6cc9\u53bf", "value": "130823"}, {
            "text": "\u6ee6\u5e73\u53bf",
            "value": "130824"
        }, {"text": "\u9686\u5316\u53bf", "value": "130825"}, {
            "text": "\u4e30\u5b81\u6ee1\u65cf\u81ea\u6cbb\u53bf",
            "value": "130826"
        }, {
            "text": "\u5bbd\u57ce\u6ee1\u65cf\u81ea\u6cbb\u53bf",
            "value": "130827"
        }, {"text": "\u56f4\u573a\u6ee1\u65cf\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf", "value": "130828"}],
        "130900": [{"text": "\u5e02\u8f96\u533a", "value": "130901"}, {
            "text": "\u65b0\u534e\u533a",
            "value": "130902"
        }, {"text": "\u8fd0\u6cb3\u533a", "value": "130903"}, {
            "text": "\u6ca7\u53bf",
            "value": "130921"
        }, {"text": "\u9752\u53bf", "value": "130922"}, {
            "text": "\u4e1c\u5149\u53bf",
            "value": "130923"
        }, {"text": "\u6d77\u5174\u53bf", "value": "130924"}, {
            "text": "\u76d0\u5c71\u53bf",
            "value": "130925"
        }, {"text": "\u8083\u5b81\u53bf", "value": "130926"}, {
            "text": "\u5357\u76ae\u53bf",
            "value": "130927"
        }, {"text": "\u5434\u6865\u53bf", "value": "130928"}, {
            "text": "\u732e\u53bf",
            "value": "130929"
        }, {"text": "\u5b5f\u6751\u56de\u65cf\u81ea\u6cbb\u53bf", "value": "130930"}, {
            "text": "\u6cca\u5934\u5e02",
            "value": "130981"
        }, {"text": "\u4efb\u4e18\u5e02", "value": "130982"}, {
            "text": "\u9ec4\u9a85\u5e02",
            "value": "130983"
        }, {"text": "\u6cb3\u95f4\u5e02", "value": "130984"}],
        "131000": [{"text": "\u5e02\u8f96\u533a", "value": "131001"}, {
            "text": "\u5b89\u6b21\u533a",
            "value": "131002"
        }, {"text": "\u5e7f\u9633\u533a", "value": "131003"}, {
            "text": "\u56fa\u5b89\u53bf",
            "value": "131022"
        }, {"text": "\u6c38\u6e05\u53bf", "value": "131023"}, {
            "text": "\u9999\u6cb3\u53bf",
            "value": "131024"
        }, {"text": "\u5927\u57ce\u53bf", "value": "131025"}, {
            "text": "\u6587\u5b89\u53bf",
            "value": "131026"
        }, {"text": "\u5927\u5382\u56de\u65cf\u81ea\u6cbb\u53bf", "value": "131028"}, {
            "text": "\u9738\u5dde\u5e02",
            "value": "131081"
        }, {"text": "\u4e09\u6cb3\u5e02", "value": "131082"}],
        "131100": [{"text": "\u5e02\u8f96\u533a", "value": "131101"}, {
            "text": "\u6843\u57ce\u533a",
            "value": "131102"
        }, {"text": "\u67a3\u5f3a\u53bf", "value": "131121"}, {
            "text": "\u6b66\u9091\u53bf",
            "value": "131122"
        }, {"text": "\u6b66\u5f3a\u53bf", "value": "131123"}, {
            "text": "\u9976\u9633\u53bf",
            "value": "131124"
        }, {"text": "\u5b89\u5e73\u53bf", "value": "131125"}, {
            "text": "\u6545\u57ce\u53bf",
            "value": "131126"
        }, {"text": "\u666f\u53bf", "value": "131127"}, {
            "text": "\u961c\u57ce\u53bf",
            "value": "131128"
        }, {"text": "\u5180\u5dde\u5e02", "value": "131181"}, {"text": "\u6df1\u5dde\u5e02", "value": "131182"}],
        "140100": [{"text": "\u5e02\u8f96\u533a", "value": "140101"}, {
            "text": "\u5c0f\u5e97\u533a",
            "value": "140105"
        }, {"text": "\u8fce\u6cfd\u533a", "value": "140106"}, {
            "text": "\u674f\u82b1\u5cad\u533a",
            "value": "140107"
        }, {"text": "\u5c16\u8349\u576a\u533a", "value": "140108"}, {
            "text": "\u4e07\u67cf\u6797\u533a",
            "value": "140109"
        }, {"text": "\u664b\u6e90\u533a", "value": "140110"}, {
            "text": "\u6e05\u5f90\u53bf",
            "value": "140121"
        }, {"text": "\u9633\u66f2\u53bf", "value": "140122"}, {
            "text": "\u5a04\u70e6\u53bf",
            "value": "140123"
        }, {"text": "\u53e4\u4ea4\u5e02", "value": "140181"}],
        "140200": [{"text": "\u5e02\u8f96\u533a", "value": "140201"}, {
            "text": "\u57ce\u533a",
            "value": "140202"
        }, {"text": "\u77ff\u533a", "value": "140203"}, {
            "text": "\u5357\u90ca\u533a",
            "value": "140211"
        }, {"text": "\u65b0\u8363\u533a", "value": "140212"}, {
            "text": "\u9633\u9ad8\u53bf",
            "value": "140221"
        }, {"text": "\u5929\u9547\u53bf", "value": "140222"}, {
            "text": "\u5e7f\u7075\u53bf",
            "value": "140223"
        }, {"text": "\u7075\u4e18\u53bf", "value": "140224"}, {
            "text": "\u6d51\u6e90\u53bf",
            "value": "140225"
        }, {"text": "\u5de6\u4e91\u53bf", "value": "140226"}, {"text": "\u5927\u540c\u53bf", "value": "140227"}],
        "140300": [{"text": "\u5e02\u8f96\u533a", "value": "140301"}, {
            "text": "\u57ce\u533a",
            "value": "140302"
        }, {"text": "\u77ff\u533a", "value": "140303"}, {
            "text": "\u90ca\u533a",
            "value": "140311"
        }, {"text": "\u5e73\u5b9a\u53bf", "value": "140321"}, {"text": "\u76c2\u53bf", "value": "140322"}],
        "140400": [{"text": "\u5e02\u8f96\u533a", "value": "140401"}, {
            "text": "\u57ce\u533a",
            "value": "140402"
        }, {"text": "\u90ca\u533a", "value": "140411"}, {
            "text": "\u957f\u6cbb\u53bf",
            "value": "140421"
        }, {"text": "\u8944\u57a3\u53bf", "value": "140423"}, {
            "text": "\u5c6f\u7559\u53bf",
            "value": "140424"
        }, {"text": "\u5e73\u987a\u53bf", "value": "140425"}, {
            "text": "\u9ece\u57ce\u53bf",
            "value": "140426"
        }, {"text": "\u58f6\u5173\u53bf", "value": "140427"}, {
            "text": "\u957f\u5b50\u53bf",
            "value": "140428"
        }, {"text": "\u6b66\u4e61\u53bf", "value": "140429"}, {
            "text": "\u6c81\u53bf",
            "value": "140430"
        }, {"text": "\u6c81\u6e90\u53bf", "value": "140431"}, {"text": "\u6f5e\u57ce\u5e02", "value": "140481"}],
        "140500": [{"text": "\u5e02\u8f96\u533a", "value": "140501"}, {
            "text": "\u57ce\u533a",
            "value": "140502"
        }, {"text": "\u6c81\u6c34\u53bf", "value": "140521"}, {
            "text": "\u9633\u57ce\u53bf",
            "value": "140522"
        }, {"text": "\u9675\u5ddd\u53bf", "value": "140524"}, {
            "text": "\u6cfd\u5dde\u53bf",
            "value": "140525"
        }, {"text": "\u9ad8\u5e73\u5e02", "value": "140581"}],
        "140600": [{"text": "\u5e02\u8f96\u533a", "value": "140601"}, {
            "text": "\u6714\u57ce\u533a",
            "value": "140602"
        }, {"text": "\u5e73\u9c81\u533a", "value": "140603"}, {
            "text": "\u5c71\u9634\u53bf",
            "value": "140621"
        }, {"text": "\u5e94\u53bf", "value": "140622"}, {
            "text": "\u53f3\u7389\u53bf",
            "value": "140623"
        }, {"text": "\u6000\u4ec1\u53bf", "value": "140624"}],
        "140700": [{"text": "\u5e02\u8f96\u533a", "value": "140701"}, {
            "text": "\u6986\u6b21\u533a",
            "value": "140702"
        }, {"text": "\u6986\u793e\u53bf", "value": "140721"}, {
            "text": "\u5de6\u6743\u53bf",
            "value": "140722"
        }, {"text": "\u548c\u987a\u53bf", "value": "140723"}, {
            "text": "\u6614\u9633\u53bf",
            "value": "140724"
        }, {"text": "\u5bff\u9633\u53bf", "value": "140725"}, {
            "text": "\u592a\u8c37\u53bf",
            "value": "140726"
        }, {"text": "\u7941\u53bf", "value": "140727"}, {
            "text": "\u5e73\u9065\u53bf",
            "value": "140728"
        }, {"text": "\u7075\u77f3\u53bf", "value": "140729"}, {"text": "\u4ecb\u4f11\u5e02", "value": "140781"}],
        "140800": [{"text": "\u5e02\u8f96\u533a", "value": "140801"}, {
            "text": "\u76d0\u6e56\u533a",
            "value": "140802"
        }, {"text": "\u4e34\u7317\u53bf", "value": "140821"}, {
            "text": "\u4e07\u8363\u53bf",
            "value": "140822"
        }, {"text": "\u95fb\u559c\u53bf", "value": "140823"}, {
            "text": "\u7a37\u5c71\u53bf",
            "value": "140824"
        }, {"text": "\u65b0\u7edb\u53bf", "value": "140825"}, {
            "text": "\u7edb\u53bf",
            "value": "140826"
        }, {"text": "\u57a3\u66f2\u53bf", "value": "140827"}, {
            "text": "\u590f\u53bf",
            "value": "140828"
        }, {"text": "\u5e73\u9646\u53bf", "value": "140829"}, {
            "text": "\u82ae\u57ce\u53bf",
            "value": "140830"
        }, {"text": "\u6c38\u6d4e\u5e02", "value": "140881"}, {"text": "\u6cb3\u6d25\u5e02", "value": "140882"}],
        "140900": [{"text": "\u5e02\u8f96\u533a", "value": "140901"}, {
            "text": "\u5ffb\u5e9c\u533a",
            "value": "140902"
        }, {"text": "\u5b9a\u8944\u53bf", "value": "140921"}, {
            "text": "\u4e94\u53f0\u53bf",
            "value": "140922"
        }, {"text": "\u4ee3\u53bf", "value": "140923"}, {
            "text": "\u7e41\u5cd9\u53bf",
            "value": "140924"
        }, {"text": "\u5b81\u6b66\u53bf", "value": "140925"}, {
            "text": "\u9759\u4e50\u53bf",
            "value": "140926"
        }, {"text": "\u795e\u6c60\u53bf", "value": "140927"}, {
            "text": "\u4e94\u5be8\u53bf",
            "value": "140928"
        }, {"text": "\u5ca2\u5c9a\u53bf", "value": "140929"}, {
            "text": "\u6cb3\u66f2\u53bf",
            "value": "140930"
        }, {"text": "\u4fdd\u5fb7\u53bf", "value": "140931"}, {
            "text": "\u504f\u5173\u53bf",
            "value": "140932"
        }, {"text": "\u539f\u5e73\u5e02", "value": "140981"}],
        "141000": [{"text": "\u5e02\u8f96\u533a", "value": "141001"}, {
            "text": "\u5c27\u90fd\u533a",
            "value": "141002"
        }, {"text": "\u66f2\u6c83\u53bf", "value": "141021"}, {
            "text": "\u7ffc\u57ce\u53bf",
            "value": "141022"
        }, {"text": "\u8944\u6c7e\u53bf", "value": "141023"}, {
            "text": "\u6d2a\u6d1e\u53bf",
            "value": "141024"
        }, {"text": "\u53e4\u53bf", "value": "141025"}, {
            "text": "\u5b89\u6cfd\u53bf",
            "value": "141026"
        }, {"text": "\u6d6e\u5c71\u53bf", "value": "141027"}, {
            "text": "\u5409\u53bf",
            "value": "141028"
        }, {"text": "\u4e61\u5b81\u53bf", "value": "141029"}, {
            "text": "\u5927\u5b81\u53bf",
            "value": "141030"
        }, {"text": "\u96b0\u53bf", "value": "141031"}, {
            "text": "\u6c38\u548c\u53bf",
            "value": "141032"
        }, {"text": "\u84b2\u53bf", "value": "141033"}, {
            "text": "\u6c7e\u897f\u53bf",
            "value": "141034"
        }, {"text": "\u4faf\u9a6c\u5e02", "value": "141081"}, {"text": "\u970d\u5dde\u5e02", "value": "141082"}],
        "141100": [{"text": "\u5e02\u8f96\u533a", "value": "141101"}, {
            "text": "\u79bb\u77f3\u533a",
            "value": "141102"
        }, {"text": "\u6587\u6c34\u53bf", "value": "141121"}, {
            "text": "\u4ea4\u57ce\u53bf",
            "value": "141122"
        }, {"text": "\u5174\u53bf", "value": "141123"}, {
            "text": "\u4e34\u53bf",
            "value": "141124"
        }, {"text": "\u67f3\u6797\u53bf", "value": "141125"}, {
            "text": "\u77f3\u697c\u53bf",
            "value": "141126"
        }, {"text": "\u5c9a\u53bf", "value": "141127"}, {
            "text": "\u65b9\u5c71\u53bf",
            "value": "141128"
        }, {"text": "\u4e2d\u9633\u53bf", "value": "141129"}, {
            "text": "\u4ea4\u53e3\u53bf",
            "value": "141130"
        }, {"text": "\u5b5d\u4e49\u5e02", "value": "141181"}, {"text": "\u6c7e\u9633\u5e02", "value": "141182"}],
        "150100": [{"text": "\u5e02\u8f96\u533a", "value": "150101"}, {
            "text": "\u65b0\u57ce\u533a",
            "value": "150102"
        }, {"text": "\u56de\u6c11\u533a", "value": "150103"}, {
            "text": "\u7389\u6cc9\u533a",
            "value": "150104"
        }, {"text": "\u8d5b\u7f55\u533a", "value": "150105"}, {
            "text": "\u571f\u9ed8\u7279\u5de6\u65d7",
            "value": "150121"
        }, {"text": "\u6258\u514b\u6258\u53bf", "value": "150122"}, {
            "text": "\u548c\u6797\u683c\u5c14\u53bf",
            "value": "150123"
        }, {"text": "\u6e05\u6c34\u6cb3\u53bf", "value": "150124"}, {"text": "\u6b66\u5ddd\u53bf", "value": "150125"}],
        "150200": [{"text": "\u5e02\u8f96\u533a", "value": "150201"}, {
            "text": "\u4e1c\u6cb3\u533a",
            "value": "150202"
        }, {"text": "\u6606\u90fd\u4ed1\u533a", "value": "150203"}, {
            "text": "\u9752\u5c71\u533a",
            "value": "150204"
        }, {"text": "\u77f3\u62d0\u533a", "value": "150205"}, {
            "text": "\u767d\u4e91\u9102\u535a\u77ff\u533a",
            "value": "150206"
        }, {"text": "\u4e5d\u539f\u533a", "value": "150207"}, {
            "text": "\u571f\u9ed8\u7279\u53f3\u65d7",
            "value": "150221"
        }, {
            "text": "\u56fa\u9633\u53bf",
            "value": "150222"
        }, {"text": "\u8fbe\u5c14\u7f55\u8302\u660e\u5b89\u8054\u5408\u65d7", "value": "150223"}],
        "150300": [{"text": "\u5e02\u8f96\u533a", "value": "150301"}, {
            "text": "\u6d77\u52c3\u6e7e\u533a",
            "value": "150302"
        }, {"text": "\u6d77\u5357\u533a", "value": "150303"}, {"text": "\u4e4c\u8fbe\u533a", "value": "150304"}],
        "150400": [{"text": "\u5e02\u8f96\u533a", "value": "150401"}, {
            "text": "\u7ea2\u5c71\u533a",
            "value": "150402"
        }, {"text": "\u5143\u5b9d\u5c71\u533a", "value": "150403"}, {
            "text": "\u677e\u5c71\u533a",
            "value": "150404"
        }, {"text": "\u963f\u9c81\u79d1\u5c14\u6c81\u65d7", "value": "150421"}, {
            "text": "\u5df4\u6797\u5de6\u65d7",
            "value": "150422"
        }, {"text": "\u5df4\u6797\u53f3\u65d7", "value": "150423"}, {
            "text": "\u6797\u897f\u53bf",
            "value": "150424"
        }, {"text": "\u514b\u4ec0\u514b\u817e\u65d7", "value": "150425"}, {
            "text": "\u7fc1\u725b\u7279\u65d7",
            "value": "150426"
        }, {"text": "\u5580\u5587\u6c81\u65d7", "value": "150428"}, {
            "text": "\u5b81\u57ce\u53bf",
            "value": "150429"
        }, {"text": "\u6556\u6c49\u65d7", "value": "150430"}],
        "150500": [{"text": "\u5e02\u8f96\u533a", "value": "150501"}, {
            "text": "\u79d1\u5c14\u6c81\u533a",
            "value": "150502"
        }, {
            "text": "\u79d1\u5c14\u6c81\u5de6\u7ffc\u4e2d\u65d7",
            "value": "150521"
        }, {"text": "\u79d1\u5c14\u6c81\u5de6\u7ffc\u540e\u65d7", "value": "150522"}, {
            "text": "\u5f00\u9c81\u53bf",
            "value": "150523"
        }, {"text": "\u5e93\u4f26\u65d7", "value": "150524"}, {
            "text": "\u5948\u66fc\u65d7",
            "value": "150525"
        }, {"text": "\u624e\u9c81\u7279\u65d7", "value": "150526"}, {
            "text": "\u970d\u6797\u90ed\u52d2\u5e02",
            "value": "150581"
        }],
        "150600": [{"text": "\u5e02\u8f96\u533a", "value": "150601"}, {
            "text": "\u4e1c\u80dc\u533a",
            "value": "150602"
        }, {"text": "\u8fbe\u62c9\u7279\u65d7", "value": "150621"}, {
            "text": "\u51c6\u683c\u5c14\u65d7",
            "value": "150622"
        }, {"text": "\u9102\u6258\u514b\u524d\u65d7", "value": "150623"}, {
            "text": "\u9102\u6258\u514b\u65d7",
            "value": "150624"
        }, {"text": "\u676d\u9526\u65d7", "value": "150625"}, {
            "text": "\u4e4c\u5ba1\u65d7",
            "value": "150626"
        }, {"text": "\u4f0a\u91d1\u970d\u6d1b\u65d7", "value": "150627"}],
        "150700": [{"text": "\u5e02\u8f96\u533a", "value": "150701"}, {
            "text": "\u6d77\u62c9\u5c14\u533a",
            "value": "150702"
        }, {"text": "\u624e\u8d49\u8bfa\u5c14\u533a", "value": "150703"}, {
            "text": "\u963f\u8363\u65d7",
            "value": "150721"
        }, {
            "text": "\u83ab\u529b\u8fbe\u74e6\u8fbe\u65a1\u5c14\u65cf\u81ea\u6cbb\u65d7",
            "value": "150722"
        }, {
            "text": "\u9102\u4f26\u6625\u81ea\u6cbb\u65d7",
            "value": "150723"
        }, {
            "text": "\u9102\u6e29\u514b\u65cf\u81ea\u6cbb\u65d7",
            "value": "150724"
        }, {
            "text": "\u9648\u5df4\u5c14\u864e\u65d7",
            "value": "150725"
        }, {
            "text": "\u65b0\u5df4\u5c14\u864e\u5de6\u65d7",
            "value": "150726"
        }, {"text": "\u65b0\u5df4\u5c14\u864e\u53f3\u65d7", "value": "150727"}, {
            "text": "\u6ee1\u6d32\u91cc\u5e02",
            "value": "150781"
        }, {"text": "\u7259\u514b\u77f3\u5e02", "value": "150782"}, {
            "text": "\u624e\u5170\u5c6f\u5e02",
            "value": "150783"
        }, {"text": "\u989d\u5c14\u53e4\u7eb3\u5e02", "value": "150784"}, {
            "text": "\u6839\u6cb3\u5e02",
            "value": "150785"
        }],
        "150800": [{"text": "\u5e02\u8f96\u533a", "value": "150801"}, {
            "text": "\u4e34\u6cb3\u533a",
            "value": "150802"
        }, {"text": "\u4e94\u539f\u53bf", "value": "150821"}, {
            "text": "\u78f4\u53e3\u53bf",
            "value": "150822"
        }, {"text": "\u4e4c\u62c9\u7279\u524d\u65d7", "value": "150823"}, {
            "text": "\u4e4c\u62c9\u7279\u4e2d\u65d7",
            "value": "150824"
        }, {"text": "\u4e4c\u62c9\u7279\u540e\u65d7", "value": "150825"}, {
            "text": "\u676d\u9526\u540e\u65d7",
            "value": "150826"
        }],
        "150900": [{"text": "\u5e02\u8f96\u533a", "value": "150901"}, {
            "text": "\u96c6\u5b81\u533a",
            "value": "150902"
        }, {"text": "\u5353\u8d44\u53bf", "value": "150921"}, {
            "text": "\u5316\u5fb7\u53bf",
            "value": "150922"
        }, {"text": "\u5546\u90fd\u53bf", "value": "150923"}, {
            "text": "\u5174\u548c\u53bf",
            "value": "150924"
        }, {"text": "\u51c9\u57ce\u53bf", "value": "150925"}, {
            "text": "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u524d\u65d7",
            "value": "150926"
        }, {
            "text": "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u4e2d\u65d7",
            "value": "150927"
        }, {
            "text": "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u540e\u65d7",
            "value": "150928"
        }, {"text": "\u56db\u5b50\u738b\u65d7", "value": "150929"}, {"text": "\u4e30\u9547\u5e02", "value": "150981"}],
        "152200": [{"text": "\u4e4c\u5170\u6d69\u7279\u5e02", "value": "152201"}, {
            "text": "\u963f\u5c14\u5c71\u5e02",
            "value": "152202"
        }, {
            "text": "\u79d1\u5c14\u6c81\u53f3\u7ffc\u524d\u65d7",
            "value": "152221"
        }, {
            "text": "\u79d1\u5c14\u6c81\u53f3\u7ffc\u4e2d\u65d7",
            "value": "152222"
        }, {"text": "\u624e\u8d49\u7279\u65d7", "value": "152223"}, {"text": "\u7a81\u6cc9\u53bf", "value": "152224"}],
        "152500": [{
            "text": "\u4e8c\u8fde\u6d69\u7279\u5e02",
            "value": "152501"
        }, {"text": "\u9521\u6797\u6d69\u7279\u5e02", "value": "152502"}, {
            "text": "\u963f\u5df4\u560e\u65d7",
            "value": "152522"
        }, {"text": "\u82cf\u5c3c\u7279\u5de6\u65d7", "value": "152523"}, {
            "text": "\u82cf\u5c3c\u7279\u53f3\u65d7",
            "value": "152524"
        }, {
            "text": "\u4e1c\u4e4c\u73e0\u7a46\u6c81\u65d7",
            "value": "152525"
        }, {"text": "\u897f\u4e4c\u73e0\u7a46\u6c81\u65d7", "value": "152526"}, {
            "text": "\u592a\u4ec6\u5bfa\u65d7",
            "value": "152527"
        }, {"text": "\u9576\u9ec4\u65d7", "value": "152528"}, {
            "text": "\u6b63\u9576\u767d\u65d7",
            "value": "152529"
        }, {"text": "\u6b63\u84dd\u65d7", "value": "152530"}, {"text": "\u591a\u4f26\u53bf", "value": "152531"}],
        "152900": [{
            "text": "\u963f\u62c9\u5584\u5de6\u65d7",
            "value": "152921"
        }, {"text": "\u963f\u62c9\u5584\u53f3\u65d7", "value": "152922"}, {
            "text": "\u989d\u6d4e\u7eb3\u65d7",
            "value": "152923"
        }],
        "210100": [{"text": "\u5e02\u8f96\u533a", "value": "210101"}, {
            "text": "\u548c\u5e73\u533a",
            "value": "210102"
        }, {"text": "\u6c88\u6cb3\u533a", "value": "210103"}, {
            "text": "\u5927\u4e1c\u533a",
            "value": "210104"
        }, {"text": "\u7687\u59d1\u533a", "value": "210105"}, {
            "text": "\u94c1\u897f\u533a",
            "value": "210106"
        }, {"text": "\u82cf\u5bb6\u5c6f\u533a", "value": "210111"}, {
            "text": "\u4e1c\u9675\u533a",
            "value": "210112"
        }, {"text": "\u6c88\u5317\u65b0\u533a", "value": "210113"}, {
            "text": "\u4e8e\u6d2a\u533a",
            "value": "210114"
        }, {"text": "\u8fbd\u4e2d\u53bf", "value": "210122"}, {
            "text": "\u5eb7\u5e73\u53bf",
            "value": "210123"
        }, {"text": "\u6cd5\u5e93\u53bf", "value": "210124"}, {"text": "\u65b0\u6c11\u5e02", "value": "210181"}],
        "210200": [{"text": "\u5e02\u8f96\u533a", "value": "210201"}, {
            "text": "\u4e2d\u5c71\u533a",
            "value": "210202"
        }, {"text": "\u897f\u5c97\u533a", "value": "210203"}, {
            "text": "\u6c99\u6cb3\u53e3\u533a",
            "value": "210204"
        }, {"text": "\u7518\u4e95\u5b50\u533a", "value": "210211"}, {
            "text": "\u65c5\u987a\u53e3\u533a",
            "value": "210212"
        }, {"text": "\u91d1\u5dde\u533a", "value": "210213"}, {
            "text": "\u957f\u6d77\u53bf",
            "value": "210224"
        }, {"text": "\u74e6\u623f\u5e97\u5e02", "value": "210281"}, {
            "text": "\u666e\u5170\u5e97\u5e02",
            "value": "210282"
        }, {"text": "\u5e84\u6cb3\u5e02", "value": "210283"}],
        "210300": [{"text": "\u5e02\u8f96\u533a", "value": "210301"}, {
            "text": "\u94c1\u4e1c\u533a",
            "value": "210302"
        }, {"text": "\u94c1\u897f\u533a", "value": "210303"}, {
            "text": "\u7acb\u5c71\u533a",
            "value": "210304"
        }, {"text": "\u5343\u5c71\u533a", "value": "210311"}, {
            "text": "\u53f0\u5b89\u53bf",
            "value": "210321"
        }, {"text": "\u5cab\u5ca9\u6ee1\u65cf\u81ea\u6cbb\u53bf", "value": "210323"}, {
            "text": "\u6d77\u57ce\u5e02",
            "value": "210381"
        }],
        "210400": [{"text": "\u5e02\u8f96\u533a", "value": "210401"}, {
            "text": "\u65b0\u629a\u533a",
            "value": "210402"
        }, {"text": "\u4e1c\u6d32\u533a", "value": "210403"}, {
            "text": "\u671b\u82b1\u533a",
            "value": "210404"
        }, {"text": "\u987a\u57ce\u533a", "value": "210411"}, {
            "text": "\u629a\u987a\u53bf",
            "value": "210421"
        }, {
            "text": "\u65b0\u5bbe\u6ee1\u65cf\u81ea\u6cbb\u53bf",
            "value": "210422"
        }, {"text": "\u6e05\u539f\u6ee1\u65cf\u81ea\u6cbb\u53bf", "value": "210423"}],
        "210500": [{"text": "\u5e02\u8f96\u533a", "value": "210501"}, {
            "text": "\u5e73\u5c71\u533a",
            "value": "210502"
        }, {"text": "\u6eaa\u6e56\u533a", "value": "210503"}, {
            "text": "\u660e\u5c71\u533a",
            "value": "210504"
        }, {"text": "\u5357\u82ac\u533a", "value": "210505"}, {
            "text": "\u672c\u6eaa\u6ee1\u65cf\u81ea\u6cbb\u53bf",
            "value": "210521"
        }, {"text": "\u6853\u4ec1\u6ee1\u65cf\u81ea\u6cbb\u53bf", "value": "210522"}],
        "210600": [{"text": "\u5e02\u8f96\u533a", "value": "210601"}, {
            "text": "\u5143\u5b9d\u533a",
            "value": "210602"
        }, {"text": "\u632f\u5174\u533a", "value": "210603"}, {
            "text": "\u632f\u5b89\u533a",
            "value": "210604"
        }, {"text": "\u5bbd\u7538\u6ee1\u65cf\u81ea\u6cbb\u53bf", "value": "210624"}, {
            "text": "\u4e1c\u6e2f\u5e02",
            "value": "210681"
        }, {"text": "\u51e4\u57ce\u5e02", "value": "210682"}],
        "210700": [{"text": "\u5e02\u8f96\u533a", "value": "210701"}, {
            "text": "\u53e4\u5854\u533a",
            "value": "210702"
        }, {"text": "\u51cc\u6cb3\u533a", "value": "210703"}, {
            "text": "\u592a\u548c\u533a",
            "value": "210711"
        }, {"text": "\u9ed1\u5c71\u53bf", "value": "210726"}, {
            "text": "\u4e49\u53bf",
            "value": "210727"
        }, {"text": "\u51cc\u6d77\u5e02", "value": "210781"}, {"text": "\u5317\u9547\u5e02", "value": "210782"}],
        "210800": [{"text": "\u5e02\u8f96\u533a", "value": "210801"}, {
            "text": "\u7ad9\u524d\u533a",
            "value": "210802"
        }, {"text": "\u897f\u5e02\u533a", "value": "210803"}, {
            "text": "\u9c85\u9c7c\u5708\u533a",
            "value": "210804"
        }, {"text": "\u8001\u8fb9\u533a", "value": "210811"}, {
            "text": "\u76d6\u5dde\u5e02",
            "value": "210881"
        }, {"text": "\u5927\u77f3\u6865\u5e02", "value": "210882"}],
        "210900": [{"text": "\u5e02\u8f96\u533a", "value": "210901"}, {
            "text": "\u6d77\u5dde\u533a",
            "value": "210902"
        }, {"text": "\u65b0\u90b1\u533a", "value": "210903"}, {
            "text": "\u592a\u5e73\u533a",
            "value": "210904"
        }, {"text": "\u6e05\u6cb3\u95e8\u533a", "value": "210905"}, {
            "text": "\u7ec6\u6cb3\u533a",
            "value": "210911"
        }, {
            "text": "\u961c\u65b0\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
            "value": "210921"
        }, {"text": "\u5f70\u6b66\u53bf", "value": "210922"}],
        "211000": [{"text": "\u5e02\u8f96\u533a", "value": "211001"}, {
            "text": "\u767d\u5854\u533a",
            "value": "211002"
        }, {"text": "\u6587\u5723\u533a", "value": "211003"}, {
            "text": "\u5b8f\u4f1f\u533a",
            "value": "211004"
        }, {"text": "\u5f13\u957f\u5cad\u533a", "value": "211005"}, {
            "text": "\u592a\u5b50\u6cb3\u533a",
            "value": "211011"
        }, {"text": "\u8fbd\u9633\u53bf", "value": "211021"}, {"text": "\u706f\u5854\u5e02", "value": "211081"}],
        "211100": [{"text": "\u5e02\u8f96\u533a", "value": "211101"}, {
            "text": "\u53cc\u53f0\u5b50\u533a",
            "value": "211102"
        }, {"text": "\u5174\u9686\u53f0\u533a", "value": "211103"}, {
            "text": "\u5927\u6d3c\u53bf",
            "value": "211121"
        }, {"text": "\u76d8\u5c71\u53bf", "value": "211122"}],
        "211200": [{"text": "\u5e02\u8f96\u533a", "value": "211201"}, {
            "text": "\u94f6\u5dde\u533a",
            "value": "211202"
        }, {"text": "\u6e05\u6cb3\u533a", "value": "211204"}, {
            "text": "\u94c1\u5cad\u53bf",
            "value": "211221"
        }, {"text": "\u897f\u4e30\u53bf", "value": "211223"}, {
            "text": "\u660c\u56fe\u53bf",
            "value": "211224"
        }, {"text": "\u8c03\u5175\u5c71\u5e02", "value": "211281"}, {"text": "\u5f00\u539f\u5e02", "value": "211282"}],
        "211300": [{"text": "\u5e02\u8f96\u533a", "value": "211301"}, {
            "text": "\u53cc\u5854\u533a",
            "value": "211302"
        }, {"text": "\u9f99\u57ce\u533a", "value": "211303"}, {
            "text": "\u671d\u9633\u53bf",
            "value": "211321"
        }, {
            "text": "\u5efa\u5e73\u53bf",
            "value": "211322"
        }, {
            "text": "\u5580\u5587\u6c81\u5de6\u7ffc\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
            "value": "211324"
        }, {"text": "\u5317\u7968\u5e02", "value": "211381"}, {"text": "\u51cc\u6e90\u5e02", "value": "211382"}],
        "211400": [{"text": "\u5e02\u8f96\u533a", "value": "211401"}, {
            "text": "\u8fde\u5c71\u533a",
            "value": "211402"
        }, {"text": "\u9f99\u6e2f\u533a", "value": "211403"}, {
            "text": "\u5357\u7968\u533a",
            "value": "211404"
        }, {"text": "\u7ee5\u4e2d\u53bf", "value": "211421"}, {
            "text": "\u5efa\u660c\u53bf",
            "value": "211422"
        }, {"text": "\u5174\u57ce\u5e02", "value": "211481"}],
        "220100": [{"text": "\u5e02\u8f96\u533a", "value": "220101"}, {
            "text": "\u5357\u5173\u533a",
            "value": "220102"
        }, {"text": "\u5bbd\u57ce\u533a", "value": "220103"}, {
            "text": "\u671d\u9633\u533a",
            "value": "220104"
        }, {"text": "\u4e8c\u9053\u533a", "value": "220105"}, {
            "text": "\u7eff\u56ed\u533a",
            "value": "220106"
        }, {"text": "\u53cc\u9633\u533a", "value": "220112"}, {
            "text": "\u519c\u5b89\u53bf",
            "value": "220122"
        }, {"text": "\u4e5d\u53f0\u5e02", "value": "220181"}, {
            "text": "\u6986\u6811\u5e02",
            "value": "220182"
        }, {"text": "\u5fb7\u60e0\u5e02", "value": "220183"}],
        "220200": [{"text": "\u5e02\u8f96\u533a", "value": "220201"}, {
            "text": "\u660c\u9091\u533a",
            "value": "220202"
        }, {"text": "\u9f99\u6f6d\u533a", "value": "220203"}, {
            "text": "\u8239\u8425\u533a",
            "value": "220204"
        }, {"text": "\u4e30\u6ee1\u533a", "value": "220211"}, {
            "text": "\u6c38\u5409\u53bf",
            "value": "220221"
        }, {"text": "\u86df\u6cb3\u5e02", "value": "220281"}, {
            "text": "\u6866\u7538\u5e02",
            "value": "220282"
        }, {"text": "\u8212\u5170\u5e02", "value": "220283"}, {"text": "\u78d0\u77f3\u5e02", "value": "220284"}],
        "220300": [{"text": "\u5e02\u8f96\u533a", "value": "220301"}, {
            "text": "\u94c1\u897f\u533a",
            "value": "220302"
        }, {"text": "\u94c1\u4e1c\u533a", "value": "220303"}, {
            "text": "\u68a8\u6811\u53bf",
            "value": "220322"
        }, {
            "text": "\u4f0a\u901a\u6ee1\u65cf\u81ea\u6cbb\u53bf",
            "value": "220323"
        }, {"text": "\u516c\u4e3b\u5cad\u5e02", "value": "220381"}, {"text": "\u53cc\u8fbd\u5e02", "value": "220382"}],
        "220400": [{"text": "\u5e02\u8f96\u533a", "value": "220401"}, {
            "text": "\u9f99\u5c71\u533a",
            "value": "220402"
        }, {"text": "\u897f\u5b89\u533a", "value": "220403"}, {
            "text": "\u4e1c\u4e30\u53bf",
            "value": "220421"
        }, {"text": "\u4e1c\u8fbd\u53bf", "value": "220422"}],
        "220500": [{"text": "\u5e02\u8f96\u533a", "value": "220501"}, {
            "text": "\u4e1c\u660c\u533a",
            "value": "220502"
        }, {"text": "\u4e8c\u9053\u6c5f\u533a", "value": "220503"}, {
            "text": "\u901a\u5316\u53bf",
            "value": "220521"
        }, {"text": "\u8f89\u5357\u53bf", "value": "220523"}, {
            "text": "\u67f3\u6cb3\u53bf",
            "value": "220524"
        }, {"text": "\u6885\u6cb3\u53e3\u5e02", "value": "220581"}, {"text": "\u96c6\u5b89\u5e02", "value": "220582"}],
        "220600": [{"text": "\u5e02\u8f96\u533a", "value": "220601"}, {
            "text": "\u6d51\u6c5f\u533a",
            "value": "220602"
        }, {"text": "\u6c5f\u6e90\u533a", "value": "220605"}, {
            "text": "\u629a\u677e\u53bf",
            "value": "220621"
        }, {
            "text": "\u9756\u5b87\u53bf",
            "value": "220622"
        }, {
            "text": "\u957f\u767d\u671d\u9c9c\u65cf\u81ea\u6cbb\u53bf",
            "value": "220623"
        }, {"text": "\u4e34\u6c5f\u5e02", "value": "220681"}],
        "220700": [{"text": "\u5e02\u8f96\u533a", "value": "220701"}, {
            "text": "\u5b81\u6c5f\u533a",
            "value": "220702"
        }, {
            "text": "\u524d\u90ed\u5c14\u7f57\u65af\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
            "value": "220721"
        }, {"text": "\u957f\u5cad\u53bf", "value": "220722"}, {
            "text": "\u4e7e\u5b89\u53bf",
            "value": "220723"
        }, {"text": "\u6276\u4f59\u5e02", "value": "220781"}],
        "220800": [{"text": "\u5e02\u8f96\u533a", "value": "220801"}, {
            "text": "\u6d2e\u5317\u533a",
            "value": "220802"
        }, {"text": "\u9547\u8d49\u53bf", "value": "220821"}, {
            "text": "\u901a\u6986\u53bf",
            "value": "220822"
        }, {"text": "\u6d2e\u5357\u5e02", "value": "220881"}, {"text": "\u5927\u5b89\u5e02", "value": "220882"}],
        "222400": [{"text": "\u5ef6\u5409\u5e02", "value": "222401"}, {
            "text": "\u56fe\u4eec\u5e02",
            "value": "222402"
        }, {"text": "\u6566\u5316\u5e02", "value": "222403"}, {
            "text": "\u73f2\u6625\u5e02",
            "value": "222404"
        }, {"text": "\u9f99\u4e95\u5e02", "value": "222405"}, {
            "text": "\u548c\u9f99\u5e02",
            "value": "222406"
        }, {"text": "\u6c6a\u6e05\u53bf", "value": "222424"}, {"text": "\u5b89\u56fe\u53bf", "value": "222426"}],
        "230100": [{"text": "\u5e02\u8f96\u533a", "value": "230101"}, {
            "text": "\u9053\u91cc\u533a",
            "value": "230102"
        }, {"text": "\u5357\u5c97\u533a", "value": "230103"}, {
            "text": "\u9053\u5916\u533a",
            "value": "230104"
        }, {"text": "\u5e73\u623f\u533a", "value": "230108"}, {
            "text": "\u677e\u5317\u533a",
            "value": "230109"
        }, {"text": "\u9999\u574a\u533a", "value": "230110"}, {
            "text": "\u547c\u5170\u533a",
            "value": "230111"
        }, {"text": "\u963f\u57ce\u533a", "value": "230112"}, {
            "text": "\u4f9d\u5170\u53bf",
            "value": "230123"
        }, {"text": "\u65b9\u6b63\u53bf", "value": "230124"}, {
            "text": "\u5bbe\u53bf",
            "value": "230125"
        }, {"text": "\u5df4\u5f66\u53bf", "value": "230126"}, {
            "text": "\u6728\u5170\u53bf",
            "value": "230127"
        }, {"text": "\u901a\u6cb3\u53bf", "value": "230128"}, {
            "text": "\u5ef6\u5bff\u53bf",
            "value": "230129"
        }, {"text": "\u53cc\u57ce\u5e02", "value": "230182"}, {
            "text": "\u5c1a\u5fd7\u5e02",
            "value": "230183"
        }, {"text": "\u4e94\u5e38\u5e02", "value": "230184"}],
        "230200": [{"text": "\u5e02\u8f96\u533a", "value": "230201"}, {
            "text": "\u9f99\u6c99\u533a",
            "value": "230202"
        }, {"text": "\u5efa\u534e\u533a", "value": "230203"}, {
            "text": "\u94c1\u950b\u533a",
            "value": "230204"
        }, {"text": "\u6602\u6602\u6eaa\u533a", "value": "230205"}, {
            "text": "\u5bcc\u62c9\u5c14\u57fa\u533a",
            "value": "230206"
        }, {
            "text": "\u78be\u5b50\u5c71\u533a",
            "value": "230207"
        }, {
            "text": "\u6885\u91cc\u65af\u8fbe\u65a1\u5c14\u65cf\u533a",
            "value": "230208"
        }, {"text": "\u9f99\u6c5f\u53bf", "value": "230221"}, {
            "text": "\u4f9d\u5b89\u53bf",
            "value": "230223"
        }, {"text": "\u6cf0\u6765\u53bf", "value": "230224"}, {
            "text": "\u7518\u5357\u53bf",
            "value": "230225"
        }, {"text": "\u5bcc\u88d5\u53bf", "value": "230227"}, {
            "text": "\u514b\u5c71\u53bf",
            "value": "230229"
        }, {"text": "\u514b\u4e1c\u53bf", "value": "230230"}, {
            "text": "\u62dc\u6cc9\u53bf",
            "value": "230231"
        }, {"text": "\u8bb7\u6cb3\u5e02", "value": "230281"}],
        "230300": [{"text": "\u5e02\u8f96\u533a", "value": "230301"}, {
            "text": "\u9e21\u51a0\u533a",
            "value": "230302"
        }, {"text": "\u6052\u5c71\u533a", "value": "230303"}, {
            "text": "\u6ef4\u9053\u533a",
            "value": "230304"
        }, {"text": "\u68a8\u6811\u533a", "value": "230305"}, {
            "text": "\u57ce\u5b50\u6cb3\u533a",
            "value": "230306"
        }, {"text": "\u9ebb\u5c71\u533a", "value": "230307"}, {
            "text": "\u9e21\u4e1c\u53bf",
            "value": "230321"
        }, {"text": "\u864e\u6797\u5e02", "value": "230381"}, {"text": "\u5bc6\u5c71\u5e02", "value": "230382"}],
        "230400": [{"text": "\u5e02\u8f96\u533a", "value": "230401"}, {
            "text": "\u5411\u9633\u533a",
            "value": "230402"
        }, {"text": "\u5de5\u519c\u533a", "value": "230403"}, {
            "text": "\u5357\u5c71\u533a",
            "value": "230404"
        }, {"text": "\u5174\u5b89\u533a", "value": "230405"}, {
            "text": "\u4e1c\u5c71\u533a",
            "value": "230406"
        }, {"text": "\u5174\u5c71\u533a", "value": "230407"}, {
            "text": "\u841d\u5317\u53bf",
            "value": "230421"
        }, {"text": "\u7ee5\u6ee8\u53bf", "value": "230422"}],
        "230500": [{"text": "\u5e02\u8f96\u533a", "value": "230501"}, {
            "text": "\u5c16\u5c71\u533a",
            "value": "230502"
        }, {"text": "\u5cad\u4e1c\u533a", "value": "230503"}, {
            "text": "\u56db\u65b9\u53f0\u533a",
            "value": "230505"
        }, {"text": "\u5b9d\u5c71\u533a", "value": "230506"}, {
            "text": "\u96c6\u8d24\u53bf",
            "value": "230521"
        }, {"text": "\u53cb\u8c0a\u53bf", "value": "230522"}, {
            "text": "\u5b9d\u6e05\u53bf",
            "value": "230523"
        }, {"text": "\u9976\u6cb3\u53bf", "value": "230524"}],
        "230600": [{"text": "\u5e02\u8f96\u533a", "value": "230601"}, {
            "text": "\u8428\u5c14\u56fe\u533a",
            "value": "230602"
        }, {"text": "\u9f99\u51e4\u533a", "value": "230603"}, {
            "text": "\u8ba9\u80e1\u8def\u533a",
            "value": "230604"
        }, {"text": "\u7ea2\u5c97\u533a", "value": "230605"}, {
            "text": "\u5927\u540c\u533a",
            "value": "230606"
        }, {"text": "\u8087\u5dde\u53bf", "value": "230621"}, {
            "text": "\u8087\u6e90\u53bf",
            "value": "230622"
        }, {
            "text": "\u6797\u7538\u53bf",
            "value": "230623"
        }, {"text": "\u675c\u5c14\u4f2f\u7279\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf", "value": "230624"}],
        "230700": [{"text": "\u5e02\u8f96\u533a", "value": "230701"}, {
            "text": "\u4f0a\u6625\u533a",
            "value": "230702"
        }, {"text": "\u5357\u5c94\u533a", "value": "230703"}, {
            "text": "\u53cb\u597d\u533a",
            "value": "230704"
        }, {"text": "\u897f\u6797\u533a", "value": "230705"}, {
            "text": "\u7fe0\u5ce6\u533a",
            "value": "230706"
        }, {"text": "\u65b0\u9752\u533a", "value": "230707"}, {
            "text": "\u7f8e\u6eaa\u533a",
            "value": "230708"
        }, {"text": "\u91d1\u5c71\u5c6f\u533a", "value": "230709"}, {
            "text": "\u4e94\u8425\u533a",
            "value": "230710"
        }, {"text": "\u4e4c\u9a6c\u6cb3\u533a", "value": "230711"}, {
            "text": "\u6c64\u65fa\u6cb3\u533a",
            "value": "230712"
        }, {"text": "\u5e26\u5cad\u533a", "value": "230713"}, {
            "text": "\u4e4c\u4f0a\u5cad\u533a",
            "value": "230714"
        }, {"text": "\u7ea2\u661f\u533a", "value": "230715"}, {
            "text": "\u4e0a\u7518\u5cad\u533a",
            "value": "230716"
        }, {"text": "\u5609\u836b\u53bf", "value": "230722"}, {"text": "\u94c1\u529b\u5e02", "value": "230781"}],
        "230800": [{"text": "\u5e02\u8f96\u533a", "value": "230801"}, {
            "text": "\u5411\u9633\u533a",
            "value": "230803"
        }, {"text": "\u524d\u8fdb\u533a", "value": "230804"}, {
            "text": "\u4e1c\u98ce\u533a",
            "value": "230805"
        }, {"text": "\u90ca\u533a", "value": "230811"}, {
            "text": "\u6866\u5357\u53bf",
            "value": "230822"
        }, {"text": "\u6866\u5ddd\u53bf", "value": "230826"}, {
            "text": "\u6c64\u539f\u53bf",
            "value": "230828"
        }, {"text": "\u629a\u8fdc\u53bf", "value": "230833"}, {
            "text": "\u540c\u6c5f\u5e02",
            "value": "230881"
        }, {"text": "\u5bcc\u9526\u5e02", "value": "230882"}],
        "230900": [{"text": "\u5e02\u8f96\u533a", "value": "230901"}, {
            "text": "\u65b0\u5174\u533a",
            "value": "230902"
        }, {"text": "\u6843\u5c71\u533a", "value": "230903"}, {
            "text": "\u8304\u5b50\u6cb3\u533a",
            "value": "230904"
        }, {"text": "\u52c3\u5229\u53bf", "value": "230921"}],
        "231000": [{"text": "\u5e02\u8f96\u533a", "value": "231001"}, {
            "text": "\u4e1c\u5b89\u533a",
            "value": "231002"
        }, {"text": "\u9633\u660e\u533a", "value": "231003"}, {
            "text": "\u7231\u6c11\u533a",
            "value": "231004"
        }, {"text": "\u897f\u5b89\u533a", "value": "231005"}, {
            "text": "\u4e1c\u5b81\u53bf",
            "value": "231024"
        }, {"text": "\u6797\u53e3\u53bf", "value": "231025"}, {
            "text": "\u7ee5\u82ac\u6cb3\u5e02",
            "value": "231081"
        }, {"text": "\u6d77\u6797\u5e02", "value": "231083"}, {
            "text": "\u5b81\u5b89\u5e02",
            "value": "231084"
        }, {"text": "\u7a46\u68f1\u5e02", "value": "231085"}],
        "231100": [{"text": "\u5e02\u8f96\u533a", "value": "231101"}, {
            "text": "\u7231\u8f89\u533a",
            "value": "231102"
        }, {"text": "\u5ae9\u6c5f\u53bf", "value": "231121"}, {
            "text": "\u900a\u514b\u53bf",
            "value": "231123"
        }, {"text": "\u5b59\u5434\u53bf", "value": "231124"}, {
            "text": "\u5317\u5b89\u5e02",
            "value": "231181"
        }, {"text": "\u4e94\u5927\u8fde\u6c60\u5e02", "value": "231182"}],
        "231200": [{"text": "\u5e02\u8f96\u533a", "value": "231201"}, {
            "text": "\u5317\u6797\u533a",
            "value": "231202"
        }, {"text": "\u671b\u594e\u53bf", "value": "231221"}, {
            "text": "\u5170\u897f\u53bf",
            "value": "231222"
        }, {"text": "\u9752\u5188\u53bf", "value": "231223"}, {
            "text": "\u5e86\u5b89\u53bf",
            "value": "231224"
        }, {"text": "\u660e\u6c34\u53bf", "value": "231225"}, {
            "text": "\u7ee5\u68f1\u53bf",
            "value": "231226"
        }, {"text": "\u5b89\u8fbe\u5e02", "value": "231281"}, {
            "text": "\u8087\u4e1c\u5e02",
            "value": "231282"
        }, {"text": "\u6d77\u4f26\u5e02", "value": "231283"}],
        "232700": [{"text": "\u547c\u739b\u53bf", "value": "232721"}, {
            "text": "\u5854\u6cb3\u53bf",
            "value": "232722"
        }, {"text": "\u6f20\u6cb3\u53bf", "value": "232723"}],
        "310100": [{"text": "\u9ec4\u6d66\u533a", "value": "310101"}, {
            "text": "\u5f90\u6c47\u533a",
            "value": "310104"
        }, {"text": "\u957f\u5b81\u533a", "value": "310105"}, {
            "text": "\u9759\u5b89\u533a",
            "value": "310106"
        }, {"text": "\u666e\u9640\u533a", "value": "310107"}, {
            "text": "\u95f8\u5317\u533a",
            "value": "310108"
        }, {"text": "\u8679\u53e3\u533a", "value": "310109"}, {
            "text": "\u6768\u6d66\u533a",
            "value": "310110"
        }, {"text": "\u95f5\u884c\u533a", "value": "310112"}, {
            "text": "\u5b9d\u5c71\u533a",
            "value": "310113"
        }, {"text": "\u5609\u5b9a\u533a", "value": "310114"}, {
            "text": "\u6d66\u4e1c\u65b0\u533a",
            "value": "310115"
        }, {"text": "\u91d1\u5c71\u533a", "value": "310116"}, {
            "text": "\u677e\u6c5f\u533a",
            "value": "310117"
        }, {"text": "\u9752\u6d66\u533a", "value": "310118"}, {"text": "\u5949\u8d24\u533a", "value": "310120"}],
        "310200": [{"text": "\u5d07\u660e\u53bf", "value": "310230"}],
        "320100": [{"text": "\u5e02\u8f96\u533a", "value": "320101"}, {
            "text": "\u7384\u6b66\u533a",
            "value": "320102"
        }, {"text": "\u79e6\u6dee\u533a", "value": "320104"}, {
            "text": "\u5efa\u90ba\u533a",
            "value": "320105"
        }, {"text": "\u9f13\u697c\u533a", "value": "320106"}, {
            "text": "\u6d66\u53e3\u533a",
            "value": "320111"
        }, {"text": "\u6816\u971e\u533a", "value": "320113"}, {
            "text": "\u96e8\u82b1\u53f0\u533a",
            "value": "320114"
        }, {"text": "\u6c5f\u5b81\u533a", "value": "320115"}, {
            "text": "\u516d\u5408\u533a",
            "value": "320116"
        }, {"text": "\u6ea7\u6c34\u533a", "value": "320117"}, {"text": "\u9ad8\u6df3\u533a", "value": "320118"}],
        "320200": [{"text": "\u5e02\u8f96\u533a", "value": "320201"}, {
            "text": "\u5d07\u5b89\u533a",
            "value": "320202"
        }, {"text": "\u5357\u957f\u533a", "value": "320203"}, {
            "text": "\u5317\u5858\u533a",
            "value": "320204"
        }, {"text": "\u9521\u5c71\u533a", "value": "320205"}, {
            "text": "\u60e0\u5c71\u533a",
            "value": "320206"
        }, {"text": "\u6ee8\u6e56\u533a", "value": "320211"}, {
            "text": "\u6c5f\u9634\u5e02",
            "value": "320281"
        }, {"text": "\u5b9c\u5174\u5e02", "value": "320282"}],
        "320300": [{"text": "\u5e02\u8f96\u533a", "value": "320301"}, {
            "text": "\u9f13\u697c\u533a",
            "value": "320302"
        }, {"text": "\u4e91\u9f99\u533a", "value": "320303"}, {
            "text": "\u8d3e\u6c6a\u533a",
            "value": "320305"
        }, {"text": "\u6cc9\u5c71\u533a", "value": "320311"}, {
            "text": "\u94dc\u5c71\u533a",
            "value": "320312"
        }, {"text": "\u4e30\u53bf", "value": "320321"}, {
            "text": "\u6c9b\u53bf",
            "value": "320322"
        }, {"text": "\u7762\u5b81\u53bf", "value": "320324"}, {
            "text": "\u65b0\u6c82\u5e02",
            "value": "320381"
        }, {"text": "\u90b3\u5dde\u5e02", "value": "320382"}],
        "320400": [{"text": "\u5e02\u8f96\u533a", "value": "320401"}, {
            "text": "\u5929\u5b81\u533a",
            "value": "320402"
        }, {"text": "\u949f\u697c\u533a", "value": "320404"}, {
            "text": "\u621a\u5885\u5830\u533a",
            "value": "320405"
        }, {"text": "\u65b0\u5317\u533a", "value": "320411"}, {
            "text": "\u6b66\u8fdb\u533a",
            "value": "320412"
        }, {"text": "\u6ea7\u9633\u5e02", "value": "320481"}, {"text": "\u91d1\u575b\u5e02", "value": "320482"}],
        "320500": [{"text": "\u5e02\u8f96\u533a", "value": "320501"}, {
            "text": "\u864e\u4e18\u533a",
            "value": "320505"
        }, {"text": "\u5434\u4e2d\u533a", "value": "320506"}, {
            "text": "\u76f8\u57ce\u533a",
            "value": "320507"
        }, {"text": "\u59d1\u82cf\u533a", "value": "320508"}, {
            "text": "\u5434\u6c5f\u533a",
            "value": "320509"
        }, {"text": "\u5e38\u719f\u5e02", "value": "320581"}, {
            "text": "\u5f20\u5bb6\u6e2f\u5e02",
            "value": "320582"
        }, {"text": "\u6606\u5c71\u5e02", "value": "320583"}, {"text": "\u592a\u4ed3\u5e02", "value": "320585"}],
        "320600": [{"text": "\u5e02\u8f96\u533a", "value": "320601"}, {
            "text": "\u5d07\u5ddd\u533a",
            "value": "320602"
        }, {"text": "\u6e2f\u95f8\u533a", "value": "320611"}, {
            "text": "\u901a\u5dde\u533a",
            "value": "320612"
        }, {"text": "\u6d77\u5b89\u53bf", "value": "320621"}, {
            "text": "\u5982\u4e1c\u53bf",
            "value": "320623"
        }, {"text": "\u542f\u4e1c\u5e02", "value": "320681"}, {
            "text": "\u5982\u768b\u5e02",
            "value": "320682"
        }, {"text": "\u6d77\u95e8\u5e02", "value": "320684"}],
        "320700": [{"text": "\u5e02\u8f96\u533a", "value": "320701"}, {
            "text": "\u8fde\u4e91\u533a",
            "value": "320703"
        }, {"text": "\u65b0\u6d66\u533a", "value": "320705"}, {
            "text": "\u6d77\u5dde\u533a",
            "value": "320706"
        }, {"text": "\u8d63\u6986\u53bf", "value": "320721"}, {
            "text": "\u4e1c\u6d77\u53bf",
            "value": "320722"
        }, {"text": "\u704c\u4e91\u53bf", "value": "320723"}, {"text": "\u704c\u5357\u53bf", "value": "320724"}],
        "320800": [{"text": "\u5e02\u8f96\u533a", "value": "320801"}, {
            "text": "\u6e05\u6cb3\u533a",
            "value": "320802"
        }, {"text": "\u6dee\u5b89\u533a", "value": "320803"}, {
            "text": "\u6dee\u9634\u533a",
            "value": "320804"
        }, {"text": "\u6e05\u6d66\u533a", "value": "320811"}, {
            "text": "\u6d9f\u6c34\u53bf",
            "value": "320826"
        }, {"text": "\u6d2a\u6cfd\u53bf", "value": "320829"}, {
            "text": "\u76f1\u7719\u53bf",
            "value": "320830"
        }, {"text": "\u91d1\u6e56\u53bf", "value": "320831"}],
        "320900": [{"text": "\u5e02\u8f96\u533a", "value": "320901"}, {
            "text": "\u4ead\u6e56\u533a",
            "value": "320902"
        }, {"text": "\u76d0\u90fd\u533a", "value": "320903"}, {
            "text": "\u54cd\u6c34\u53bf",
            "value": "320921"
        }, {"text": "\u6ee8\u6d77\u53bf", "value": "320922"}, {
            "text": "\u961c\u5b81\u53bf",
            "value": "320923"
        }, {"text": "\u5c04\u9633\u53bf", "value": "320924"}, {
            "text": "\u5efa\u6e56\u53bf",
            "value": "320925"
        }, {"text": "\u4e1c\u53f0\u5e02", "value": "320981"}, {"text": "\u5927\u4e30\u5e02", "value": "320982"}],
        "321000": [{"text": "\u5e02\u8f96\u533a", "value": "321001"}, {
            "text": "\u5e7f\u9675\u533a",
            "value": "321002"
        }, {"text": "\u9097\u6c5f\u533a", "value": "321003"}, {
            "text": "\u6c5f\u90fd\u533a",
            "value": "321012"
        }, {"text": "\u5b9d\u5e94\u53bf", "value": "321023"}, {
            "text": "\u4eea\u5f81\u5e02",
            "value": "321081"
        }, {"text": "\u9ad8\u90ae\u5e02", "value": "321084"}],
        "321100": [{"text": "\u5e02\u8f96\u533a", "value": "321101"}, {
            "text": "\u4eac\u53e3\u533a",
            "value": "321102"
        }, {"text": "\u6da6\u5dde\u533a", "value": "321111"}, {
            "text": "\u4e39\u5f92\u533a",
            "value": "321112"
        }, {"text": "\u4e39\u9633\u5e02", "value": "321181"}, {
            "text": "\u626c\u4e2d\u5e02",
            "value": "321182"
        }, {"text": "\u53e5\u5bb9\u5e02", "value": "321183"}],
        "321200": [{"text": "\u5e02\u8f96\u533a", "value": "321201"}, {
            "text": "\u6d77\u9675\u533a",
            "value": "321202"
        }, {"text": "\u9ad8\u6e2f\u533a", "value": "321203"}, {
            "text": "\u59dc\u5830\u533a",
            "value": "321204"
        }, {"text": "\u5174\u5316\u5e02", "value": "321281"}, {
            "text": "\u9756\u6c5f\u5e02",
            "value": "321282"
        }, {"text": "\u6cf0\u5174\u5e02", "value": "321283"}],
        "321300": [{"text": "\u5e02\u8f96\u533a", "value": "321301"}, {
            "text": "\u5bbf\u57ce\u533a",
            "value": "321302"
        }, {"text": "\u5bbf\u8c6b\u533a", "value": "321311"}, {
            "text": "\u6cad\u9633\u53bf",
            "value": "321322"
        }, {"text": "\u6cd7\u9633\u53bf", "value": "321323"}, {"text": "\u6cd7\u6d2a\u53bf", "value": "321324"}],
        "330100": [{"text": "\u5e02\u8f96\u533a", "value": "330101"}, {
            "text": "\u4e0a\u57ce\u533a",
            "value": "330102"
        }, {"text": "\u4e0b\u57ce\u533a", "value": "330103"}, {
            "text": "\u6c5f\u5e72\u533a",
            "value": "330104"
        }, {"text": "\u62f1\u5885\u533a", "value": "330105"}, {
            "text": "\u897f\u6e56\u533a",
            "value": "330106"
        }, {"text": "\u6ee8\u6c5f\u533a", "value": "330108"}, {
            "text": "\u8427\u5c71\u533a",
            "value": "330109"
        }, {"text": "\u4f59\u676d\u533a", "value": "330110"}, {
            "text": "\u6850\u5e90\u53bf",
            "value": "330122"
        }, {"text": "\u6df3\u5b89\u53bf", "value": "330127"}, {
            "text": "\u5efa\u5fb7\u5e02",
            "value": "330182"
        }, {"text": "\u5bcc\u9633\u5e02", "value": "330183"}, {"text": "\u4e34\u5b89\u5e02", "value": "330185"}],
        "330200": [{"text": "\u5e02\u8f96\u533a", "value": "330201"}, {
            "text": "\u6d77\u66d9\u533a",
            "value": "330203"
        }, {"text": "\u6c5f\u4e1c\u533a", "value": "330204"}, {
            "text": "\u6c5f\u5317\u533a",
            "value": "330205"
        }, {"text": "\u5317\u4ed1\u533a", "value": "330206"}, {
            "text": "\u9547\u6d77\u533a",
            "value": "330211"
        }, {"text": "\u911e\u5dde\u533a", "value": "330212"}, {
            "text": "\u8c61\u5c71\u53bf",
            "value": "330225"
        }, {"text": "\u5b81\u6d77\u53bf", "value": "330226"}, {
            "text": "\u4f59\u59da\u5e02",
            "value": "330281"
        }, {"text": "\u6148\u6eaa\u5e02", "value": "330282"}, {"text": "\u5949\u5316\u5e02", "value": "330283"}],
        "330300": [{"text": "\u5e02\u8f96\u533a", "value": "330301"}, {
            "text": "\u9e7f\u57ce\u533a",
            "value": "330302"
        }, {"text": "\u9f99\u6e7e\u533a", "value": "330303"}, {
            "text": "\u74ef\u6d77\u533a",
            "value": "330304"
        }, {"text": "\u6d1e\u5934\u53bf", "value": "330322"}, {
            "text": "\u6c38\u5609\u53bf",
            "value": "330324"
        }, {"text": "\u5e73\u9633\u53bf", "value": "330326"}, {
            "text": "\u82cd\u5357\u53bf",
            "value": "330327"
        }, {"text": "\u6587\u6210\u53bf", "value": "330328"}, {
            "text": "\u6cf0\u987a\u53bf",
            "value": "330329"
        }, {"text": "\u745e\u5b89\u5e02", "value": "330381"}, {"text": "\u4e50\u6e05\u5e02", "value": "330382"}],
        "330400": [{"text": "\u5e02\u8f96\u533a", "value": "330401"}, {
            "text": "\u5357\u6e56\u533a",
            "value": "330402"
        }, {"text": "\u79c0\u6d32\u533a", "value": "330411"}, {
            "text": "\u5609\u5584\u53bf",
            "value": "330421"
        }, {"text": "\u6d77\u76d0\u53bf", "value": "330424"}, {
            "text": "\u6d77\u5b81\u5e02",
            "value": "330481"
        }, {"text": "\u5e73\u6e56\u5e02", "value": "330482"}, {"text": "\u6850\u4e61\u5e02", "value": "330483"}],
        "330500": [{"text": "\u5e02\u8f96\u533a", "value": "330501"}, {
            "text": "\u5434\u5174\u533a",
            "value": "330502"
        }, {"text": "\u5357\u6d54\u533a", "value": "330503"}, {
            "text": "\u5fb7\u6e05\u53bf",
            "value": "330521"
        }, {"text": "\u957f\u5174\u53bf", "value": "330522"}, {"text": "\u5b89\u5409\u53bf", "value": "330523"}],
        "330600": [{"text": "\u5e02\u8f96\u533a", "value": "330601"}, {
            "text": "\u8d8a\u57ce\u533a",
            "value": "330602"
        }, {"text": "\u7ecd\u5174\u53bf", "value": "330621"}, {
            "text": "\u65b0\u660c\u53bf",
            "value": "330624"
        }, {"text": "\u8bf8\u66a8\u5e02", "value": "330681"}, {
            "text": "\u4e0a\u865e\u5e02",
            "value": "330682"
        }, {"text": "\u5d4a\u5dde\u5e02", "value": "330683"}],
        "330700": [{"text": "\u5e02\u8f96\u533a", "value": "330701"}, {
            "text": "\u5a7a\u57ce\u533a",
            "value": "330702"
        }, {"text": "\u91d1\u4e1c\u533a", "value": "330703"}, {
            "text": "\u6b66\u4e49\u53bf",
            "value": "330723"
        }, {"text": "\u6d66\u6c5f\u53bf", "value": "330726"}, {
            "text": "\u78d0\u5b89\u53bf",
            "value": "330727"
        }, {"text": "\u5170\u6eaa\u5e02", "value": "330781"}, {
            "text": "\u4e49\u4e4c\u5e02",
            "value": "330782"
        }, {"text": "\u4e1c\u9633\u5e02", "value": "330783"}, {"text": "\u6c38\u5eb7\u5e02", "value": "330784"}],
        "330800": [{"text": "\u5e02\u8f96\u533a", "value": "330801"}, {
            "text": "\u67ef\u57ce\u533a",
            "value": "330802"
        }, {"text": "\u8862\u6c5f\u533a", "value": "330803"}, {
            "text": "\u5e38\u5c71\u53bf",
            "value": "330822"
        }, {"text": "\u5f00\u5316\u53bf", "value": "330824"}, {
            "text": "\u9f99\u6e38\u53bf",
            "value": "330825"
        }, {"text": "\u6c5f\u5c71\u5e02", "value": "330881"}],
        "330900": [{"text": "\u5e02\u8f96\u533a", "value": "330901"}, {
            "text": "\u5b9a\u6d77\u533a",
            "value": "330902"
        }, {"text": "\u666e\u9640\u533a", "value": "330903"}, {
            "text": "\u5cb1\u5c71\u53bf",
            "value": "330921"
        }, {"text": "\u5d4a\u6cd7\u53bf", "value": "330922"}],
        "331000": [{"text": "\u5e02\u8f96\u533a", "value": "331001"}, {
            "text": "\u6912\u6c5f\u533a",
            "value": "331002"
        }, {"text": "\u9ec4\u5ca9\u533a", "value": "331003"}, {
            "text": "\u8def\u6865\u533a",
            "value": "331004"
        }, {"text": "\u7389\u73af\u53bf", "value": "331021"}, {
            "text": "\u4e09\u95e8\u53bf",
            "value": "331022"
        }, {"text": "\u5929\u53f0\u53bf", "value": "331023"}, {
            "text": "\u4ed9\u5c45\u53bf",
            "value": "331024"
        }, {"text": "\u6e29\u5cad\u5e02", "value": "331081"}, {"text": "\u4e34\u6d77\u5e02", "value": "331082"}],
        "331100": [{"text": "\u5e02\u8f96\u533a", "value": "331101"}, {
            "text": "\u83b2\u90fd\u533a",
            "value": "331102"
        }, {"text": "\u9752\u7530\u53bf", "value": "331121"}, {
            "text": "\u7f19\u4e91\u53bf",
            "value": "331122"
        }, {"text": "\u9042\u660c\u53bf", "value": "331123"}, {
            "text": "\u677e\u9633\u53bf",
            "value": "331124"
        }, {"text": "\u4e91\u548c\u53bf", "value": "331125"}, {
            "text": "\u5e86\u5143\u53bf",
            "value": "331126"
        }, {"text": "\u666f\u5b81\u7572\u65cf\u81ea\u6cbb\u53bf", "value": "331127"}, {
            "text": "\u9f99\u6cc9\u5e02",
            "value": "331181"
        }],
        "340100": [{"text": "\u5e02\u8f96\u533a", "value": "340101"}, {
            "text": "\u7476\u6d77\u533a",
            "value": "340102"
        }, {"text": "\u5e90\u9633\u533a", "value": "340103"}, {
            "text": "\u8700\u5c71\u533a",
            "value": "340104"
        }, {"text": "\u5305\u6cb3\u533a", "value": "340111"}, {
            "text": "\u957f\u4e30\u53bf",
            "value": "340121"
        }, {"text": "\u80a5\u4e1c\u53bf", "value": "340122"}, {
            "text": "\u80a5\u897f\u53bf",
            "value": "340123"
        }, {"text": "\u5e90\u6c5f\u53bf", "value": "340124"}, {"text": "\u5de2\u6e56\u5e02", "value": "340181"}],
        "340200": [{"text": "\u5e02\u8f96\u533a", "value": "340201"}, {
            "text": "\u955c\u6e56\u533a",
            "value": "340202"
        }, {"text": "\u5f0b\u6c5f\u533a", "value": "340203"}, {
            "text": "\u9e20\u6c5f\u533a",
            "value": "340207"
        }, {"text": "\u4e09\u5c71\u533a", "value": "340208"}, {
            "text": "\u829c\u6e56\u53bf",
            "value": "340221"
        }, {"text": "\u7e41\u660c\u53bf", "value": "340222"}, {
            "text": "\u5357\u9675\u53bf",
            "value": "340223"
        }, {"text": "\u65e0\u4e3a\u53bf", "value": "340225"}],
        "340300": [{"text": "\u5e02\u8f96\u533a", "value": "340301"}, {
            "text": "\u9f99\u5b50\u6e56\u533a",
            "value": "340302"
        }, {"text": "\u868c\u5c71\u533a", "value": "340303"}, {
            "text": "\u79b9\u4f1a\u533a",
            "value": "340304"
        }, {"text": "\u6dee\u4e0a\u533a", "value": "340311"}, {
            "text": "\u6000\u8fdc\u53bf",
            "value": "340321"
        }, {"text": "\u4e94\u6cb3\u53bf", "value": "340322"}, {"text": "\u56fa\u9547\u53bf", "value": "340323"}],
        "340400": [{"text": "\u5e02\u8f96\u533a", "value": "340401"}, {
            "text": "\u5927\u901a\u533a",
            "value": "340402"
        }, {"text": "\u7530\u5bb6\u5eb5\u533a", "value": "340403"}, {
            "text": "\u8c22\u5bb6\u96c6\u533a",
            "value": "340404"
        }, {"text": "\u516b\u516c\u5c71\u533a", "value": "340405"}, {
            "text": "\u6f58\u96c6\u533a",
            "value": "340406"
        }, {"text": "\u51e4\u53f0\u53bf", "value": "340421"}],
        "340500": [{"text": "\u5e02\u8f96\u533a", "value": "340501"}, {
            "text": "\u82b1\u5c71\u533a",
            "value": "340503"
        }, {"text": "\u96e8\u5c71\u533a", "value": "340504"}, {
            "text": "\u535a\u671b\u533a",
            "value": "340506"
        }, {"text": "\u5f53\u6d82\u53bf", "value": "340521"}, {
            "text": "\u542b\u5c71\u53bf",
            "value": "340522"
        }, {"text": "\u548c\u53bf", "value": "340523"}],
        "340600": [{"text": "\u5e02\u8f96\u533a", "value": "340601"}, {
            "text": "\u675c\u96c6\u533a",
            "value": "340602"
        }, {"text": "\u76f8\u5c71\u533a", "value": "340603"}, {
            "text": "\u70c8\u5c71\u533a",
            "value": "340604"
        }, {"text": "\u6fc9\u6eaa\u53bf", "value": "340621"}],
        "340700": [{"text": "\u5e02\u8f96\u533a", "value": "340701"}, {
            "text": "\u94dc\u5b98\u5c71\u533a",
            "value": "340702"
        }, {"text": "\u72ee\u5b50\u5c71\u533a", "value": "340703"}, {
            "text": "\u90ca\u533a",
            "value": "340711"
        }, {"text": "\u94dc\u9675\u53bf", "value": "340721"}],
        "340800": [{"text": "\u5e02\u8f96\u533a", "value": "340801"}, {
            "text": "\u8fce\u6c5f\u533a",
            "value": "340802"
        }, {"text": "\u5927\u89c2\u533a", "value": "340803"}, {
            "text": "\u5b9c\u79c0\u533a",
            "value": "340811"
        }, {"text": "\u6000\u5b81\u53bf", "value": "340822"}, {
            "text": "\u679e\u9633\u53bf",
            "value": "340823"
        }, {"text": "\u6f5c\u5c71\u53bf", "value": "340824"}, {
            "text": "\u592a\u6e56\u53bf",
            "value": "340825"
        }, {"text": "\u5bbf\u677e\u53bf", "value": "340826"}, {
            "text": "\u671b\u6c5f\u53bf",
            "value": "340827"
        }, {"text": "\u5cb3\u897f\u53bf", "value": "340828"}, {"text": "\u6850\u57ce\u5e02", "value": "340881"}],
        "341000": [{"text": "\u5e02\u8f96\u533a", "value": "341001"}, {
            "text": "\u5c6f\u6eaa\u533a",
            "value": "341002"
        }, {"text": "\u9ec4\u5c71\u533a", "value": "341003"}, {
            "text": "\u5fbd\u5dde\u533a",
            "value": "341004"
        }, {"text": "\u6b59\u53bf", "value": "341021"}, {
            "text": "\u4f11\u5b81\u53bf",
            "value": "341022"
        }, {"text": "\u9edf\u53bf", "value": "341023"}, {"text": "\u7941\u95e8\u53bf", "value": "341024"}],
        "341100": [{"text": "\u5e02\u8f96\u533a", "value": "341101"}, {
            "text": "\u7405\u740a\u533a",
            "value": "341102"
        }, {"text": "\u5357\u8c2f\u533a", "value": "341103"}, {
            "text": "\u6765\u5b89\u53bf",
            "value": "341122"
        }, {"text": "\u5168\u6912\u53bf", "value": "341124"}, {
            "text": "\u5b9a\u8fdc\u53bf",
            "value": "341125"
        }, {"text": "\u51e4\u9633\u53bf", "value": "341126"}, {
            "text": "\u5929\u957f\u5e02",
            "value": "341181"
        }, {"text": "\u660e\u5149\u5e02", "value": "341182"}],
        "341200": [{"text": "\u5e02\u8f96\u533a", "value": "341201"}, {
            "text": "\u988d\u5dde\u533a",
            "value": "341202"
        }, {"text": "\u988d\u4e1c\u533a", "value": "341203"}, {
            "text": "\u988d\u6cc9\u533a",
            "value": "341204"
        }, {"text": "\u4e34\u6cc9\u53bf", "value": "341221"}, {
            "text": "\u592a\u548c\u53bf",
            "value": "341222"
        }, {"text": "\u961c\u5357\u53bf", "value": "341225"}, {
            "text": "\u988d\u4e0a\u53bf",
            "value": "341226"
        }, {"text": "\u754c\u9996\u5e02", "value": "341282"}],
        "341300": [{"text": "\u5e02\u8f96\u533a", "value": "341301"}, {
            "text": "\u57c7\u6865\u533a",
            "value": "341302"
        }, {"text": "\u7800\u5c71\u53bf", "value": "341321"}, {
            "text": "\u8427\u53bf",
            "value": "341322"
        }, {"text": "\u7075\u74a7\u53bf", "value": "341323"}, {"text": "\u6cd7\u53bf", "value": "341324"}],
        "341500": [{"text": "\u5e02\u8f96\u533a", "value": "341501"}, {
            "text": "\u91d1\u5b89\u533a",
            "value": "341502"
        }, {"text": "\u88d5\u5b89\u533a", "value": "341503"}, {
            "text": "\u5bff\u53bf",
            "value": "341521"
        }, {"text": "\u970d\u90b1\u53bf", "value": "341522"}, {
            "text": "\u8212\u57ce\u53bf",
            "value": "341523"
        }, {"text": "\u91d1\u5be8\u53bf", "value": "341524"}, {"text": "\u970d\u5c71\u53bf", "value": "341525"}],
        "341600": [{"text": "\u5e02\u8f96\u533a", "value": "341601"}, {
            "text": "\u8c2f\u57ce\u533a",
            "value": "341602"
        }, {"text": "\u6da1\u9633\u53bf", "value": "341621"}, {
            "text": "\u8499\u57ce\u53bf",
            "value": "341622"
        }, {"text": "\u5229\u8f9b\u53bf", "value": "341623"}],
        "341700": [{"text": "\u5e02\u8f96\u533a", "value": "341701"}, {
            "text": "\u8d35\u6c60\u533a",
            "value": "341702"
        }, {"text": "\u4e1c\u81f3\u53bf", "value": "341721"}, {
            "text": "\u77f3\u53f0\u53bf",
            "value": "341722"
        }, {"text": "\u9752\u9633\u53bf", "value": "341723"}],
        "341800": [{"text": "\u5e02\u8f96\u533a", "value": "341801"}, {
            "text": "\u5ba3\u5dde\u533a",
            "value": "341802"
        }, {"text": "\u90ce\u6eaa\u53bf", "value": "341821"}, {
            "text": "\u5e7f\u5fb7\u53bf",
            "value": "341822"
        }, {"text": "\u6cfe\u53bf", "value": "341823"}, {
            "text": "\u7ee9\u6eaa\u53bf",
            "value": "341824"
        }, {"text": "\u65cc\u5fb7\u53bf", "value": "341825"}, {"text": "\u5b81\u56fd\u5e02", "value": "341881"}],
        "350100": [{"text": "\u5e02\u8f96\u533a", "value": "350101"}, {
            "text": "\u9f13\u697c\u533a",
            "value": "350102"
        }, {"text": "\u53f0\u6c5f\u533a", "value": "350103"}, {
            "text": "\u4ed3\u5c71\u533a",
            "value": "350104"
        }, {"text": "\u9a6c\u5c3e\u533a", "value": "350105"}, {
            "text": "\u664b\u5b89\u533a",
            "value": "350111"
        }, {"text": "\u95fd\u4faf\u53bf", "value": "350121"}, {
            "text": "\u8fde\u6c5f\u53bf",
            "value": "350122"
        }, {"text": "\u7f57\u6e90\u53bf", "value": "350123"}, {
            "text": "\u95fd\u6e05\u53bf",
            "value": "350124"
        }, {"text": "\u6c38\u6cf0\u53bf", "value": "350125"}, {
            "text": "\u5e73\u6f6d\u53bf",
            "value": "350128"
        }, {"text": "\u798f\u6e05\u5e02", "value": "350181"}, {"text": "\u957f\u4e50\u5e02", "value": "350182"}],
        "350200": [{"text": "\u5e02\u8f96\u533a", "value": "350201"}, {
            "text": "\u601d\u660e\u533a",
            "value": "350203"
        }, {"text": "\u6d77\u6ca7\u533a", "value": "350205"}, {
            "text": "\u6e56\u91cc\u533a",
            "value": "350206"
        }, {"text": "\u96c6\u7f8e\u533a", "value": "350211"}, {
            "text": "\u540c\u5b89\u533a",
            "value": "350212"
        }, {"text": "\u7fd4\u5b89\u533a", "value": "350213"}],
        "350300": [{"text": "\u5e02\u8f96\u533a", "value": "350301"}, {
            "text": "\u57ce\u53a2\u533a",
            "value": "350302"
        }, {"text": "\u6db5\u6c5f\u533a", "value": "350303"}, {
            "text": "\u8354\u57ce\u533a",
            "value": "350304"
        }, {"text": "\u79c0\u5c7f\u533a", "value": "350305"}, {"text": "\u4ed9\u6e38\u53bf", "value": "350322"}],
        "350400": [{"text": "\u5e02\u8f96\u533a", "value": "350401"}, {
            "text": "\u6885\u5217\u533a",
            "value": "350402"
        }, {"text": "\u4e09\u5143\u533a", "value": "350403"}, {
            "text": "\u660e\u6eaa\u53bf",
            "value": "350421"
        }, {"text": "\u6e05\u6d41\u53bf", "value": "350423"}, {
            "text": "\u5b81\u5316\u53bf",
            "value": "350424"
        }, {"text": "\u5927\u7530\u53bf", "value": "350425"}, {
            "text": "\u5c24\u6eaa\u53bf",
            "value": "350426"
        }, {"text": "\u6c99\u53bf", "value": "350427"}, {
            "text": "\u5c06\u4e50\u53bf",
            "value": "350428"
        }, {"text": "\u6cf0\u5b81\u53bf", "value": "350429"}, {
            "text": "\u5efa\u5b81\u53bf",
            "value": "350430"
        }, {"text": "\u6c38\u5b89\u5e02", "value": "350481"}],
        "350500": [{"text": "\u5e02\u8f96\u533a", "value": "350501"}, {
            "text": "\u9ca4\u57ce\u533a",
            "value": "350502"
        }, {"text": "\u4e30\u6cfd\u533a", "value": "350503"}, {
            "text": "\u6d1b\u6c5f\u533a",
            "value": "350504"
        }, {"text": "\u6cc9\u6e2f\u533a", "value": "350505"}, {
            "text": "\u60e0\u5b89\u53bf",
            "value": "350521"
        }, {"text": "\u5b89\u6eaa\u53bf", "value": "350524"}, {
            "text": "\u6c38\u6625\u53bf",
            "value": "350525"
        }, {"text": "\u5fb7\u5316\u53bf", "value": "350526"}, {
            "text": "\u91d1\u95e8\u53bf",
            "value": "350527"
        }, {"text": "\u77f3\u72ee\u5e02", "value": "350581"}, {
            "text": "\u664b\u6c5f\u5e02",
            "value": "350582"
        }, {"text": "\u5357\u5b89\u5e02", "value": "350583"}],
        "350600": [{"text": "\u5e02\u8f96\u533a", "value": "350601"}, {
            "text": "\u8297\u57ce\u533a",
            "value": "350602"
        }, {"text": "\u9f99\u6587\u533a", "value": "350603"}, {
            "text": "\u4e91\u9704\u53bf",
            "value": "350622"
        }, {"text": "\u6f33\u6d66\u53bf", "value": "350623"}, {
            "text": "\u8bcf\u5b89\u53bf",
            "value": "350624"
        }, {"text": "\u957f\u6cf0\u53bf", "value": "350625"}, {
            "text": "\u4e1c\u5c71\u53bf",
            "value": "350626"
        }, {"text": "\u5357\u9756\u53bf", "value": "350627"}, {
            "text": "\u5e73\u548c\u53bf",
            "value": "350628"
        }, {"text": "\u534e\u5b89\u53bf", "value": "350629"}, {"text": "\u9f99\u6d77\u5e02", "value": "350681"}],
        "350700": [{"text": "\u5e02\u8f96\u533a", "value": "350701"}, {
            "text": "\u5ef6\u5e73\u533a",
            "value": "350702"
        }, {"text": "\u987a\u660c\u53bf", "value": "350721"}, {
            "text": "\u6d66\u57ce\u53bf",
            "value": "350722"
        }, {"text": "\u5149\u6cfd\u53bf", "value": "350723"}, {
            "text": "\u677e\u6eaa\u53bf",
            "value": "350724"
        }, {"text": "\u653f\u548c\u53bf", "value": "350725"}, {
            "text": "\u90b5\u6b66\u5e02",
            "value": "350781"
        }, {"text": "\u6b66\u5937\u5c71\u5e02", "value": "350782"}, {
            "text": "\u5efa\u74ef\u5e02",
            "value": "350783"
        }, {"text": "\u5efa\u9633\u5e02", "value": "350784"}],
        "350800": [{"text": "\u5e02\u8f96\u533a", "value": "350801"}, {
            "text": "\u65b0\u7f57\u533a",
            "value": "350802"
        }, {"text": "\u957f\u6c40\u53bf", "value": "350821"}, {
            "text": "\u6c38\u5b9a\u53bf",
            "value": "350822"
        }, {"text": "\u4e0a\u676d\u53bf", "value": "350823"}, {
            "text": "\u6b66\u5e73\u53bf",
            "value": "350824"
        }, {"text": "\u8fde\u57ce\u53bf", "value": "350825"}, {"text": "\u6f33\u5e73\u5e02", "value": "350881"}],
        "350900": [{"text": "\u5e02\u8f96\u533a", "value": "350901"}, {
            "text": "\u8549\u57ce\u533a",
            "value": "350902"
        }, {"text": "\u971e\u6d66\u53bf", "value": "350921"}, {
            "text": "\u53e4\u7530\u53bf",
            "value": "350922"
        }, {"text": "\u5c4f\u5357\u53bf", "value": "350923"}, {
            "text": "\u5bff\u5b81\u53bf",
            "value": "350924"
        }, {"text": "\u5468\u5b81\u53bf", "value": "350925"}, {
            "text": "\u67d8\u8363\u53bf",
            "value": "350926"
        }, {"text": "\u798f\u5b89\u5e02", "value": "350981"}, {"text": "\u798f\u9f0e\u5e02", "value": "350982"}],
        "360100": [{"text": "\u5e02\u8f96\u533a", "value": "360101"}, {
            "text": "\u4e1c\u6e56\u533a",
            "value": "360102"
        }, {"text": "\u897f\u6e56\u533a", "value": "360103"}, {
            "text": "\u9752\u4e91\u8c31\u533a",
            "value": "360104"
        }, {"text": "\u6e7e\u91cc\u533a", "value": "360105"}, {
            "text": "\u9752\u5c71\u6e56\u533a",
            "value": "360111"
        }, {"text": "\u5357\u660c\u53bf", "value": "360121"}, {
            "text": "\u65b0\u5efa\u53bf",
            "value": "360122"
        }, {"text": "\u5b89\u4e49\u53bf", "value": "360123"}, {"text": "\u8fdb\u8d24\u53bf", "value": "360124"}],
        "360200": [{"text": "\u5e02\u8f96\u533a", "value": "360201"}, {
            "text": "\u660c\u6c5f\u533a",
            "value": "360202"
        }, {"text": "\u73e0\u5c71\u533a", "value": "360203"}, {
            "text": "\u6d6e\u6881\u53bf",
            "value": "360222"
        }, {"text": "\u4e50\u5e73\u5e02", "value": "360281"}],
        "360300": [{"text": "\u5e02\u8f96\u533a", "value": "360301"}, {
            "text": "\u5b89\u6e90\u533a",
            "value": "360302"
        }, {"text": "\u6e58\u4e1c\u533a", "value": "360313"}, {
            "text": "\u83b2\u82b1\u53bf",
            "value": "360321"
        }, {"text": "\u4e0a\u6817\u53bf", "value": "360322"}, {"text": "\u82a6\u6eaa\u53bf", "value": "360323"}],
        "360400": [{"text": "\u5e02\u8f96\u533a", "value": "360401"}, {
            "text": "\u5e90\u5c71\u533a",
            "value": "360402"
        }, {"text": "\u6d54\u9633\u533a", "value": "360403"}, {
            "text": "\u4e5d\u6c5f\u53bf",
            "value": "360421"
        }, {"text": "\u6b66\u5b81\u53bf", "value": "360423"}, {
            "text": "\u4fee\u6c34\u53bf",
            "value": "360424"
        }, {"text": "\u6c38\u4fee\u53bf", "value": "360425"}, {
            "text": "\u5fb7\u5b89\u53bf",
            "value": "360426"
        }, {"text": "\u661f\u5b50\u53bf", "value": "360427"}, {
            "text": "\u90fd\u660c\u53bf",
            "value": "360428"
        }, {"text": "\u6e56\u53e3\u53bf", "value": "360429"}, {
            "text": "\u5f6d\u6cfd\u53bf",
            "value": "360430"
        }, {"text": "\u745e\u660c\u5e02", "value": "360481"}, {"text": "\u5171\u9752\u57ce\u5e02", "value": "360482"}],
        "360500": [{"text": "\u5e02\u8f96\u533a", "value": "360501"}, {
            "text": "\u6e1d\u6c34\u533a",
            "value": "360502"
        }, {"text": "\u5206\u5b9c\u53bf", "value": "360521"}],
        "360600": [{"text": "\u5e02\u8f96\u533a", "value": "360601"}, {
            "text": "\u6708\u6e56\u533a",
            "value": "360602"
        }, {"text": "\u4f59\u6c5f\u53bf", "value": "360622"}, {"text": "\u8d35\u6eaa\u5e02", "value": "360681"}],
        "360700": [{"text": "\u5e02\u8f96\u533a", "value": "360701"}, {
            "text": "\u7ae0\u8d21\u533a",
            "value": "360702"
        }, {"text": "\u8d63\u53bf", "value": "360721"}, {
            "text": "\u4fe1\u4e30\u53bf",
            "value": "360722"
        }, {"text": "\u5927\u4f59\u53bf", "value": "360723"}, {
            "text": "\u4e0a\u72b9\u53bf",
            "value": "360724"
        }, {"text": "\u5d07\u4e49\u53bf", "value": "360725"}, {
            "text": "\u5b89\u8fdc\u53bf",
            "value": "360726"
        }, {"text": "\u9f99\u5357\u53bf", "value": "360727"}, {
            "text": "\u5b9a\u5357\u53bf",
            "value": "360728"
        }, {"text": "\u5168\u5357\u53bf", "value": "360729"}, {
            "text": "\u5b81\u90fd\u53bf",
            "value": "360730"
        }, {"text": "\u4e8e\u90fd\u53bf", "value": "360731"}, {
            "text": "\u5174\u56fd\u53bf",
            "value": "360732"
        }, {"text": "\u4f1a\u660c\u53bf", "value": "360733"}, {
            "text": "\u5bfb\u4e4c\u53bf",
            "value": "360734"
        }, {"text": "\u77f3\u57ce\u53bf", "value": "360735"}, {
            "text": "\u745e\u91d1\u5e02",
            "value": "360781"
        }, {"text": "\u5357\u5eb7\u5e02", "value": "360782"}],
        "360800": [{"text": "\u5e02\u8f96\u533a", "value": "360801"}, {
            "text": "\u5409\u5dde\u533a",
            "value": "360802"
        }, {"text": "\u9752\u539f\u533a", "value": "360803"}, {
            "text": "\u5409\u5b89\u53bf",
            "value": "360821"
        }, {"text": "\u5409\u6c34\u53bf", "value": "360822"}, {
            "text": "\u5ce1\u6c5f\u53bf",
            "value": "360823"
        }, {"text": "\u65b0\u5e72\u53bf", "value": "360824"}, {
            "text": "\u6c38\u4e30\u53bf",
            "value": "360825"
        }, {"text": "\u6cf0\u548c\u53bf", "value": "360826"}, {
            "text": "\u9042\u5ddd\u53bf",
            "value": "360827"
        }, {"text": "\u4e07\u5b89\u53bf", "value": "360828"}, {
            "text": "\u5b89\u798f\u53bf",
            "value": "360829"
        }, {"text": "\u6c38\u65b0\u53bf", "value": "360830"}, {"text": "\u4e95\u5188\u5c71\u5e02", "value": "360881"}],
        "360900": [{"text": "\u5e02\u8f96\u533a", "value": "360901"}, {
            "text": "\u8881\u5dde\u533a",
            "value": "360902"
        }, {"text": "\u5949\u65b0\u53bf", "value": "360921"}, {
            "text": "\u4e07\u8f7d\u53bf",
            "value": "360922"
        }, {"text": "\u4e0a\u9ad8\u53bf", "value": "360923"}, {
            "text": "\u5b9c\u4e30\u53bf",
            "value": "360924"
        }, {"text": "\u9756\u5b89\u53bf", "value": "360925"}, {
            "text": "\u94dc\u9f13\u53bf",
            "value": "360926"
        }, {"text": "\u4e30\u57ce\u5e02", "value": "360981"}, {
            "text": "\u6a1f\u6811\u5e02",
            "value": "360982"
        }, {"text": "\u9ad8\u5b89\u5e02", "value": "360983"}],
        "361000": [{"text": "\u5e02\u8f96\u533a", "value": "361001"}, {
            "text": "\u4e34\u5ddd\u533a",
            "value": "361002"
        }, {"text": "\u5357\u57ce\u53bf", "value": "361021"}, {
            "text": "\u9ece\u5ddd\u53bf",
            "value": "361022"
        }, {"text": "\u5357\u4e30\u53bf", "value": "361023"}, {
            "text": "\u5d07\u4ec1\u53bf",
            "value": "361024"
        }, {"text": "\u4e50\u5b89\u53bf", "value": "361025"}, {
            "text": "\u5b9c\u9ec4\u53bf",
            "value": "361026"
        }, {"text": "\u91d1\u6eaa\u53bf", "value": "361027"}, {
            "text": "\u8d44\u6eaa\u53bf",
            "value": "361028"
        }, {"text": "\u4e1c\u4e61\u53bf", "value": "361029"}, {"text": "\u5e7f\u660c\u53bf", "value": "361030"}],
        "361100": [{"text": "\u5e02\u8f96\u533a", "value": "361101"}, {
            "text": "\u4fe1\u5dde\u533a",
            "value": "361102"
        }, {"text": "\u4e0a\u9976\u53bf", "value": "361121"}, {
            "text": "\u5e7f\u4e30\u53bf",
            "value": "361122"
        }, {"text": "\u7389\u5c71\u53bf", "value": "361123"}, {
            "text": "\u94c5\u5c71\u53bf",
            "value": "361124"
        }, {"text": "\u6a2a\u5cf0\u53bf", "value": "361125"}, {
            "text": "\u5f0b\u9633\u53bf",
            "value": "361126"
        }, {"text": "\u4f59\u5e72\u53bf", "value": "361127"}, {
            "text": "\u9131\u9633\u53bf",
            "value": "361128"
        }, {"text": "\u4e07\u5e74\u53bf", "value": "361129"}, {
            "text": "\u5a7a\u6e90\u53bf",
            "value": "361130"
        }, {"text": "\u5fb7\u5174\u5e02", "value": "361181"}],
        "370100": [{"text": "\u5e02\u8f96\u533a", "value": "370101"}, {
            "text": "\u5386\u4e0b\u533a",
            "value": "370102"
        }, {"text": "\u5e02\u4e2d\u533a", "value": "370103"}, {
            "text": "\u69d0\u836b\u533a",
            "value": "370104"
        }, {"text": "\u5929\u6865\u533a", "value": "370105"}, {
            "text": "\u5386\u57ce\u533a",
            "value": "370112"
        }, {"text": "\u957f\u6e05\u533a", "value": "370113"}, {
            "text": "\u5e73\u9634\u53bf",
            "value": "370124"
        }, {"text": "\u6d4e\u9633\u53bf", "value": "370125"}, {
            "text": "\u5546\u6cb3\u53bf",
            "value": "370126"
        }, {"text": "\u7ae0\u4e18\u5e02", "value": "370181"}],
        "370200": [{"text": "\u5e02\u8f96\u533a", "value": "370201"}, {
            "text": "\u5e02\u5357\u533a",
            "value": "370202"
        }, {"text": "\u5e02\u5317\u533a", "value": "370203"}, {
            "text": "\u9ec4\u5c9b\u533a",
            "value": "370211"
        }, {"text": "\u5d02\u5c71\u533a", "value": "370212"}, {
            "text": "\u674e\u6ca7\u533a",
            "value": "370213"
        }, {"text": "\u57ce\u9633\u533a", "value": "370214"}, {
            "text": "\u80f6\u5dde\u5e02",
            "value": "370281"
        }, {"text": "\u5373\u58a8\u5e02", "value": "370282"}, {
            "text": "\u5e73\u5ea6\u5e02",
            "value": "370283"
        }, {"text": "\u83b1\u897f\u5e02", "value": "370285"}],
        "370300": [{"text": "\u5e02\u8f96\u533a", "value": "370301"}, {
            "text": "\u6dc4\u5ddd\u533a",
            "value": "370302"
        }, {"text": "\u5f20\u5e97\u533a", "value": "370303"}, {
            "text": "\u535a\u5c71\u533a",
            "value": "370304"
        }, {"text": "\u4e34\u6dc4\u533a", "value": "370305"}, {
            "text": "\u5468\u6751\u533a",
            "value": "370306"
        }, {"text": "\u6853\u53f0\u53bf", "value": "370321"}, {
            "text": "\u9ad8\u9752\u53bf",
            "value": "370322"
        }, {"text": "\u6c82\u6e90\u53bf", "value": "370323"}],
        "370400": [{"text": "\u5e02\u8f96\u533a", "value": "370401"}, {
            "text": "\u5e02\u4e2d\u533a",
            "value": "370402"
        }, {"text": "\u859b\u57ce\u533a", "value": "370403"}, {
            "text": "\u5cc4\u57ce\u533a",
            "value": "370404"
        }, {"text": "\u53f0\u513f\u5e84\u533a", "value": "370405"}, {
            "text": "\u5c71\u4ead\u533a",
            "value": "370406"
        }, {"text": "\u6ed5\u5dde\u5e02", "value": "370481"}],
        "370500": [{"text": "\u5e02\u8f96\u533a", "value": "370501"}, {
            "text": "\u4e1c\u8425\u533a",
            "value": "370502"
        }, {"text": "\u6cb3\u53e3\u533a", "value": "370503"}, {
            "text": "\u57a6\u5229\u53bf",
            "value": "370521"
        }, {"text": "\u5229\u6d25\u53bf", "value": "370522"}, {"text": "\u5e7f\u9976\u53bf", "value": "370523"}],
        "370600": [{"text": "\u5e02\u8f96\u533a", "value": "370601"}, {
            "text": "\u829d\u7f58\u533a",
            "value": "370602"
        }, {"text": "\u798f\u5c71\u533a", "value": "370611"}, {
            "text": "\u725f\u5e73\u533a",
            "value": "370612"
        }, {"text": "\u83b1\u5c71\u533a", "value": "370613"}, {
            "text": "\u957f\u5c9b\u53bf",
            "value": "370634"
        }, {"text": "\u9f99\u53e3\u5e02", "value": "370681"}, {
            "text": "\u83b1\u9633\u5e02",
            "value": "370682"
        }, {"text": "\u83b1\u5dde\u5e02", "value": "370683"}, {
            "text": "\u84ec\u83b1\u5e02",
            "value": "370684"
        }, {"text": "\u62db\u8fdc\u5e02", "value": "370685"}, {
            "text": "\u6816\u971e\u5e02",
            "value": "370686"
        }, {"text": "\u6d77\u9633\u5e02", "value": "370687"}],
        "370700": [{"text": "\u5e02\u8f96\u533a", "value": "370701"}, {
            "text": "\u6f4d\u57ce\u533a",
            "value": "370702"
        }, {"text": "\u5bd2\u4ead\u533a", "value": "370703"}, {
            "text": "\u574a\u5b50\u533a",
            "value": "370704"
        }, {"text": "\u594e\u6587\u533a", "value": "370705"}, {
            "text": "\u4e34\u6710\u53bf",
            "value": "370724"
        }, {"text": "\u660c\u4e50\u53bf", "value": "370725"}, {
            "text": "\u9752\u5dde\u5e02",
            "value": "370781"
        }, {"text": "\u8bf8\u57ce\u5e02", "value": "370782"}, {
            "text": "\u5bff\u5149\u5e02",
            "value": "370783"
        }, {"text": "\u5b89\u4e18\u5e02", "value": "370784"}, {
            "text": "\u9ad8\u5bc6\u5e02",
            "value": "370785"
        }, {"text": "\u660c\u9091\u5e02", "value": "370786"}],
        "370800": [{"text": "\u5e02\u8f96\u533a", "value": "370801"}, {
            "text": "\u5e02\u4e2d\u533a",
            "value": "370802"
        }, {"text": "\u4efb\u57ce\u533a", "value": "370811"}, {
            "text": "\u5fae\u5c71\u53bf",
            "value": "370826"
        }, {"text": "\u9c7c\u53f0\u53bf", "value": "370827"}, {
            "text": "\u91d1\u4e61\u53bf",
            "value": "370828"
        }, {"text": "\u5609\u7965\u53bf", "value": "370829"}, {
            "text": "\u6c76\u4e0a\u53bf",
            "value": "370830"
        }, {"text": "\u6cd7\u6c34\u53bf", "value": "370831"}, {
            "text": "\u6881\u5c71\u53bf",
            "value": "370832"
        }, {"text": "\u66f2\u961c\u5e02", "value": "370881"}, {
            "text": "\u5156\u5dde\u5e02",
            "value": "370882"
        }, {"text": "\u90b9\u57ce\u5e02", "value": "370883"}],
        "370900": [{"text": "\u5e02\u8f96\u533a", "value": "370901"}, {
            "text": "\u6cf0\u5c71\u533a",
            "value": "370902"
        }, {"text": "\u5cb1\u5cb3\u533a", "value": "370911"}, {
            "text": "\u5b81\u9633\u53bf",
            "value": "370921"
        }, {"text": "\u4e1c\u5e73\u53bf", "value": "370923"}, {
            "text": "\u65b0\u6cf0\u5e02",
            "value": "370982"
        }, {"text": "\u80a5\u57ce\u5e02", "value": "370983"}],
        "371000": [{"text": "\u5e02\u8f96\u533a", "value": "371001"}, {
            "text": "\u73af\u7fe0\u533a",
            "value": "371002"
        }, {"text": "\u6587\u767b\u5e02", "value": "371081"}, {
            "text": "\u8363\u6210\u5e02",
            "value": "371082"
        }, {"text": "\u4e73\u5c71\u5e02", "value": "371083"}],
        "371100": [{"text": "\u5e02\u8f96\u533a", "value": "371101"}, {
            "text": "\u4e1c\u6e2f\u533a",
            "value": "371102"
        }, {"text": "\u5c9a\u5c71\u533a", "value": "371103"}, {
            "text": "\u4e94\u83b2\u53bf",
            "value": "371121"
        }, {"text": "\u8392\u53bf", "value": "371122"}],
        "371200": [{"text": "\u5e02\u8f96\u533a", "value": "371201"}, {
            "text": "\u83b1\u57ce\u533a",
            "value": "371202"
        }, {"text": "\u94a2\u57ce\u533a", "value": "371203"}],
        "371300": [{"text": "\u5e02\u8f96\u533a", "value": "371301"}, {
            "text": "\u5170\u5c71\u533a",
            "value": "371302"
        }, {"text": "\u7f57\u5e84\u533a", "value": "371311"}, {
            "text": "\u6cb3\u4e1c\u533a",
            "value": "371312"
        }, {"text": "\u6c82\u5357\u53bf", "value": "371321"}, {
            "text": "\u90ef\u57ce\u53bf",
            "value": "371322"
        }, {"text": "\u6c82\u6c34\u53bf", "value": "371323"}, {
            "text": "\u82cd\u5c71\u53bf",
            "value": "371324"
        }, {"text": "\u8d39\u53bf", "value": "371325"}, {
            "text": "\u5e73\u9091\u53bf",
            "value": "371326"
        }, {"text": "\u8392\u5357\u53bf", "value": "371327"}, {
            "text": "\u8499\u9634\u53bf",
            "value": "371328"
        }, {"text": "\u4e34\u6cad\u53bf", "value": "371329"}],
        "371400": [{"text": "\u5e02\u8f96\u533a", "value": "371401"}, {
            "text": "\u5fb7\u57ce\u533a",
            "value": "371402"
        }, {"text": "\u9675\u53bf", "value": "371421"}, {
            "text": "\u5b81\u6d25\u53bf",
            "value": "371422"
        }, {"text": "\u5e86\u4e91\u53bf", "value": "371423"}, {
            "text": "\u4e34\u9091\u53bf",
            "value": "371424"
        }, {"text": "\u9f50\u6cb3\u53bf", "value": "371425"}, {
            "text": "\u5e73\u539f\u53bf",
            "value": "371426"
        }, {"text": "\u590f\u6d25\u53bf", "value": "371427"}, {
            "text": "\u6b66\u57ce\u53bf",
            "value": "371428"
        }, {"text": "\u4e50\u9675\u5e02", "value": "371481"}, {"text": "\u79b9\u57ce\u5e02", "value": "371482"}],
        "371500": [{"text": "\u5e02\u8f96\u533a", "value": "371501"}, {
            "text": "\u4e1c\u660c\u5e9c\u533a",
            "value": "371502"
        }, {"text": "\u9633\u8c37\u53bf", "value": "371521"}, {
            "text": "\u8398\u53bf",
            "value": "371522"
        }, {"text": "\u830c\u5e73\u53bf", "value": "371523"}, {
            "text": "\u4e1c\u963f\u53bf",
            "value": "371524"
        }, {"text": "\u51a0\u53bf", "value": "371525"}, {
            "text": "\u9ad8\u5510\u53bf",
            "value": "371526"
        }, {"text": "\u4e34\u6e05\u5e02", "value": "371581"}],
        "371600": [{"text": "\u5e02\u8f96\u533a", "value": "371601"}, {
            "text": "\u6ee8\u57ce\u533a",
            "value": "371602"
        }, {"text": "\u60e0\u6c11\u53bf", "value": "371621"}, {
            "text": "\u9633\u4fe1\u53bf",
            "value": "371622"
        }, {"text": "\u65e0\u68e3\u53bf", "value": "371623"}, {
            "text": "\u6cbe\u5316\u53bf",
            "value": "371624"
        }, {"text": "\u535a\u5174\u53bf", "value": "371625"}, {"text": "\u90b9\u5e73\u53bf", "value": "371626"}],
        "371700": [{"text": "\u5e02\u8f96\u533a", "value": "371701"}, {
            "text": "\u7261\u4e39\u533a",
            "value": "371702"
        }, {"text": "\u66f9\u53bf", "value": "371721"}, {
            "text": "\u5355\u53bf",
            "value": "371722"
        }, {"text": "\u6210\u6b66\u53bf", "value": "371723"}, {
            "text": "\u5de8\u91ce\u53bf",
            "value": "371724"
        }, {"text": "\u90d3\u57ce\u53bf", "value": "371725"}, {
            "text": "\u9104\u57ce\u53bf",
            "value": "371726"
        }, {"text": "\u5b9a\u9676\u53bf", "value": "371727"}, {"text": "\u4e1c\u660e\u53bf", "value": "371728"}],
        "410100": [{"text": "\u5e02\u8f96\u533a", "value": "410101"}, {
            "text": "\u4e2d\u539f\u533a",
            "value": "410102"
        }, {"text": "\u4e8c\u4e03\u533a", "value": "410103"}, {
            "text": "\u7ba1\u57ce\u56de\u65cf\u533a",
            "value": "410104"
        }, {"text": "\u91d1\u6c34\u533a", "value": "410105"}, {
            "text": "\u4e0a\u8857\u533a",
            "value": "410106"
        }, {"text": "\u60e0\u6d4e\u533a", "value": "410108"}, {
            "text": "\u4e2d\u725f\u53bf",
            "value": "410122"
        }, {"text": "\u5de9\u4e49\u5e02", "value": "410181"}, {
            "text": "\u8365\u9633\u5e02",
            "value": "410182"
        }, {"text": "\u65b0\u5bc6\u5e02", "value": "410183"}, {
            "text": "\u65b0\u90d1\u5e02",
            "value": "410184"
        }, {"text": "\u767b\u5c01\u5e02", "value": "410185"}],
        "410200": [{"text": "\u5e02\u8f96\u533a", "value": "410201"}, {
            "text": "\u9f99\u4ead\u533a",
            "value": "410202"
        }, {"text": "\u987a\u6cb3\u56de\u65cf\u533a", "value": "410203"}, {
            "text": "\u9f13\u697c\u533a",
            "value": "410204"
        }, {"text": "\u79b9\u738b\u53f0\u533a", "value": "410205"}, {
            "text": "\u91d1\u660e\u533a",
            "value": "410211"
        }, {"text": "\u675e\u53bf", "value": "410221"}, {
            "text": "\u901a\u8bb8\u53bf",
            "value": "410222"
        }, {"text": "\u5c09\u6c0f\u53bf", "value": "410223"}, {
            "text": "\u5f00\u5c01\u53bf",
            "value": "410224"
        }, {"text": "\u5170\u8003\u53bf", "value": "410225"}],
        "410300": [{"text": "\u5e02\u8f96\u533a", "value": "410301"}, {
            "text": "\u8001\u57ce\u533a",
            "value": "410302"
        }, {"text": "\u897f\u5de5\u533a", "value": "410303"}, {
            "text": "\u700d\u6cb3\u56de\u65cf\u533a",
            "value": "410304"
        }, {"text": "\u6da7\u897f\u533a", "value": "410305"}, {
            "text": "\u5409\u5229\u533a",
            "value": "410306"
        }, {"text": "\u6d1b\u9f99\u533a", "value": "410311"}, {
            "text": "\u5b5f\u6d25\u53bf",
            "value": "410322"
        }, {"text": "\u65b0\u5b89\u53bf", "value": "410323"}, {
            "text": "\u683e\u5ddd\u53bf",
            "value": "410324"
        }, {"text": "\u5d69\u53bf", "value": "410325"}, {
            "text": "\u6c5d\u9633\u53bf",
            "value": "410326"
        }, {"text": "\u5b9c\u9633\u53bf", "value": "410327"}, {
            "text": "\u6d1b\u5b81\u53bf",
            "value": "410328"
        }, {"text": "\u4f0a\u5ddd\u53bf", "value": "410329"}, {"text": "\u5043\u5e08\u5e02", "value": "410381"}],
        "410400": [{"text": "\u5e02\u8f96\u533a", "value": "410401"}, {
            "text": "\u65b0\u534e\u533a",
            "value": "410402"
        }, {"text": "\u536b\u4e1c\u533a", "value": "410403"}, {
            "text": "\u77f3\u9f99\u533a",
            "value": "410404"
        }, {"text": "\u6e5b\u6cb3\u533a", "value": "410411"}, {
            "text": "\u5b9d\u4e30\u53bf",
            "value": "410421"
        }, {"text": "\u53f6\u53bf", "value": "410422"}, {
            "text": "\u9c81\u5c71\u53bf",
            "value": "410423"
        }, {"text": "\u90cf\u53bf", "value": "410425"}, {
            "text": "\u821e\u94a2\u5e02",
            "value": "410481"
        }, {"text": "\u6c5d\u5dde\u5e02", "value": "410482"}],
        "410500": [{"text": "\u5e02\u8f96\u533a", "value": "410501"}, {
            "text": "\u6587\u5cf0\u533a",
            "value": "410502"
        }, {"text": "\u5317\u5173\u533a", "value": "410503"}, {
            "text": "\u6bb7\u90fd\u533a",
            "value": "410505"
        }, {"text": "\u9f99\u5b89\u533a", "value": "410506"}, {
            "text": "\u5b89\u9633\u53bf",
            "value": "410522"
        }, {"text": "\u6c64\u9634\u53bf", "value": "410523"}, {
            "text": "\u6ed1\u53bf",
            "value": "410526"
        }, {"text": "\u5185\u9ec4\u53bf", "value": "410527"}, {"text": "\u6797\u5dde\u5e02", "value": "410581"}],
        "410600": [{"text": "\u5e02\u8f96\u533a", "value": "410601"}, {
            "text": "\u9e64\u5c71\u533a",
            "value": "410602"
        }, {"text": "\u5c71\u57ce\u533a", "value": "410603"}, {
            "text": "\u6dc7\u6ee8\u533a",
            "value": "410611"
        }, {"text": "\u6d5a\u53bf", "value": "410621"}, {"text": "\u6dc7\u53bf", "value": "410622"}],
        "410700": [{"text": "\u5e02\u8f96\u533a", "value": "410701"}, {
            "text": "\u7ea2\u65d7\u533a",
            "value": "410702"
        }, {"text": "\u536b\u6ee8\u533a", "value": "410703"}, {
            "text": "\u51e4\u6cc9\u533a",
            "value": "410704"
        }, {"text": "\u7267\u91ce\u533a", "value": "410711"}, {
            "text": "\u65b0\u4e61\u53bf",
            "value": "410721"
        }, {"text": "\u83b7\u5609\u53bf", "value": "410724"}, {
            "text": "\u539f\u9633\u53bf",
            "value": "410725"
        }, {"text": "\u5ef6\u6d25\u53bf", "value": "410726"}, {
            "text": "\u5c01\u4e18\u53bf",
            "value": "410727"
        }, {"text": "\u957f\u57a3\u53bf", "value": "410728"}, {
            "text": "\u536b\u8f89\u5e02",
            "value": "410781"
        }, {"text": "\u8f89\u53bf\u5e02", "value": "410782"}],
        "410800": [{"text": "\u5e02\u8f96\u533a", "value": "410801"}, {
            "text": "\u89e3\u653e\u533a",
            "value": "410802"
        }, {"text": "\u4e2d\u7ad9\u533a", "value": "410803"}, {
            "text": "\u9a6c\u6751\u533a",
            "value": "410804"
        }, {"text": "\u5c71\u9633\u533a", "value": "410811"}, {
            "text": "\u4fee\u6b66\u53bf",
            "value": "410821"
        }, {"text": "\u535a\u7231\u53bf", "value": "410822"}, {
            "text": "\u6b66\u965f\u53bf",
            "value": "410823"
        }, {"text": "\u6e29\u53bf", "value": "410825"}, {
            "text": "\u6c81\u9633\u5e02",
            "value": "410882"
        }, {"text": "\u5b5f\u5dde\u5e02", "value": "410883"}],
        "410900": [{"text": "\u5e02\u8f96\u533a", "value": "410901"}, {
            "text": "\u534e\u9f99\u533a",
            "value": "410902"
        }, {"text": "\u6e05\u4e30\u53bf", "value": "410922"}, {
            "text": "\u5357\u4e50\u53bf",
            "value": "410923"
        }, {"text": "\u8303\u53bf", "value": "410926"}, {
            "text": "\u53f0\u524d\u53bf",
            "value": "410927"
        }, {"text": "\u6fee\u9633\u53bf", "value": "410928"}],
        "411000": [{"text": "\u5e02\u8f96\u533a", "value": "411001"}, {
            "text": "\u9b4f\u90fd\u533a",
            "value": "411002"
        }, {"text": "\u8bb8\u660c\u53bf", "value": "411023"}, {
            "text": "\u9122\u9675\u53bf",
            "value": "411024"
        }, {"text": "\u8944\u57ce\u53bf", "value": "411025"}, {
            "text": "\u79b9\u5dde\u5e02",
            "value": "411081"
        }, {"text": "\u957f\u845b\u5e02", "value": "411082"}],
        "411100": [{"text": "\u5e02\u8f96\u533a", "value": "411101"}, {
            "text": "\u6e90\u6c47\u533a",
            "value": "411102"
        }, {"text": "\u90fe\u57ce\u533a", "value": "411103"}, {
            "text": "\u53ec\u9675\u533a",
            "value": "411104"
        }, {"text": "\u821e\u9633\u53bf", "value": "411121"}, {"text": "\u4e34\u988d\u53bf", "value": "411122"}],
        "411200": [{"text": "\u5e02\u8f96\u533a", "value": "411201"}, {
            "text": "\u6e56\u6ee8\u533a",
            "value": "411202"
        }, {"text": "\u6e11\u6c60\u53bf", "value": "411221"}, {
            "text": "\u9655\u53bf",
            "value": "411222"
        }, {"text": "\u5362\u6c0f\u53bf", "value": "411224"}, {
            "text": "\u4e49\u9a6c\u5e02",
            "value": "411281"
        }, {"text": "\u7075\u5b9d\u5e02", "value": "411282"}],
        "411300": [{"text": "\u5e02\u8f96\u533a", "value": "411301"}, {
            "text": "\u5b9b\u57ce\u533a",
            "value": "411302"
        }, {"text": "\u5367\u9f99\u533a", "value": "411303"}, {
            "text": "\u5357\u53ec\u53bf",
            "value": "411321"
        }, {"text": "\u65b9\u57ce\u53bf", "value": "411322"}, {
            "text": "\u897f\u5ce1\u53bf",
            "value": "411323"
        }, {"text": "\u9547\u5e73\u53bf", "value": "411324"}, {
            "text": "\u5185\u4e61\u53bf",
            "value": "411325"
        }, {"text": "\u6dc5\u5ddd\u53bf", "value": "411326"}, {
            "text": "\u793e\u65d7\u53bf",
            "value": "411327"
        }, {"text": "\u5510\u6cb3\u53bf", "value": "411328"}, {
            "text": "\u65b0\u91ce\u53bf",
            "value": "411329"
        }, {"text": "\u6850\u67cf\u53bf", "value": "411330"}, {"text": "\u9093\u5dde\u5e02", "value": "411381"}],
        "411400": [{"text": "\u5e02\u8f96\u533a", "value": "411401"}, {
            "text": "\u6881\u56ed\u533a",
            "value": "411402"
        }, {"text": "\u7762\u9633\u533a", "value": "411403"}, {
            "text": "\u6c11\u6743\u53bf",
            "value": "411421"
        }, {"text": "\u7762\u53bf", "value": "411422"}, {
            "text": "\u5b81\u9675\u53bf",
            "value": "411423"
        }, {"text": "\u67d8\u57ce\u53bf", "value": "411424"}, {
            "text": "\u865e\u57ce\u53bf",
            "value": "411425"
        }, {"text": "\u590f\u9091\u53bf", "value": "411426"}, {"text": "\u6c38\u57ce\u5e02", "value": "411481"}],
        "411500": [{"text": "\u5e02\u8f96\u533a", "value": "411501"}, {
            "text": "\u6d49\u6cb3\u533a",
            "value": "411502"
        }, {"text": "\u5e73\u6865\u533a", "value": "411503"}, {
            "text": "\u7f57\u5c71\u53bf",
            "value": "411521"
        }, {"text": "\u5149\u5c71\u53bf", "value": "411522"}, {
            "text": "\u65b0\u53bf",
            "value": "411523"
        }, {"text": "\u5546\u57ce\u53bf", "value": "411524"}, {
            "text": "\u56fa\u59cb\u53bf",
            "value": "411525"
        }, {"text": "\u6f62\u5ddd\u53bf", "value": "411526"}, {
            "text": "\u6dee\u6ee8\u53bf",
            "value": "411527"
        }, {"text": "\u606f\u53bf", "value": "411528"}],
        "411600": [{"text": "\u5e02\u8f96\u533a", "value": "411601"}, {
            "text": "\u5ddd\u6c47\u533a",
            "value": "411602"
        }, {"text": "\u6276\u6c9f\u53bf", "value": "411621"}, {
            "text": "\u897f\u534e\u53bf",
            "value": "411622"
        }, {"text": "\u5546\u6c34\u53bf", "value": "411623"}, {
            "text": "\u6c88\u4e18\u53bf",
            "value": "411624"
        }, {"text": "\u90f8\u57ce\u53bf", "value": "411625"}, {
            "text": "\u6dee\u9633\u53bf",
            "value": "411626"
        }, {"text": "\u592a\u5eb7\u53bf", "value": "411627"}, {
            "text": "\u9e7f\u9091\u53bf",
            "value": "411628"
        }, {"text": "\u9879\u57ce\u5e02", "value": "411681"}],
        "411700": [{"text": "\u5e02\u8f96\u533a", "value": "411701"}, {
            "text": "\u9a7f\u57ce\u533a",
            "value": "411702"
        }, {"text": "\u897f\u5e73\u53bf", "value": "411721"}, {
            "text": "\u4e0a\u8521\u53bf",
            "value": "411722"
        }, {"text": "\u5e73\u8206\u53bf", "value": "411723"}, {
            "text": "\u6b63\u9633\u53bf",
            "value": "411724"
        }, {"text": "\u786e\u5c71\u53bf", "value": "411725"}, {
            "text": "\u6ccc\u9633\u53bf",
            "value": "411726"
        }, {"text": "\u6c5d\u5357\u53bf", "value": "411727"}, {
            "text": "\u9042\u5e73\u53bf",
            "value": "411728"
        }, {"text": "\u65b0\u8521\u53bf", "value": "411729"}],
        "419000": [{"text": "\u6d4e\u6e90\u5e02", "value": "419001"}],
        "420100": [{"text": "\u5e02\u8f96\u533a", "value": "420101"}, {
            "text": "\u6c5f\u5cb8\u533a",
            "value": "420102"
        }, {"text": "\u6c5f\u6c49\u533a", "value": "420103"}, {
            "text": "\u785a\u53e3\u533a",
            "value": "420104"
        }, {"text": "\u6c49\u9633\u533a", "value": "420105"}, {
            "text": "\u6b66\u660c\u533a",
            "value": "420106"
        }, {"text": "\u9752\u5c71\u533a", "value": "420107"}, {
            "text": "\u6d2a\u5c71\u533a",
            "value": "420111"
        }, {"text": "\u4e1c\u897f\u6e56\u533a", "value": "420112"}, {
            "text": "\u6c49\u5357\u533a",
            "value": "420113"
        }, {"text": "\u8521\u7538\u533a", "value": "420114"}, {
            "text": "\u6c5f\u590f\u533a",
            "value": "420115"
        }, {"text": "\u9ec4\u9642\u533a", "value": "420116"}, {"text": "\u65b0\u6d32\u533a", "value": "420117"}],
        "420200": [{"text": "\u5e02\u8f96\u533a", "value": "420201"}, {
            "text": "\u9ec4\u77f3\u6e2f\u533a",
            "value": "420202"
        }, {"text": "\u897f\u585e\u5c71\u533a", "value": "420203"}, {
            "text": "\u4e0b\u9646\u533a",
            "value": "420204"
        }, {"text": "\u94c1\u5c71\u533a", "value": "420205"}, {
            "text": "\u9633\u65b0\u53bf",
            "value": "420222"
        }, {"text": "\u5927\u51b6\u5e02", "value": "420281"}],
        "420300": [{"text": "\u5e02\u8f96\u533a", "value": "420301"}, {
            "text": "\u8305\u7bad\u533a",
            "value": "420302"
        }, {"text": "\u5f20\u6e7e\u533a", "value": "420303"}, {
            "text": "\u90e7\u53bf",
            "value": "420321"
        }, {"text": "\u90e7\u897f\u53bf", "value": "420322"}, {
            "text": "\u7af9\u5c71\u53bf",
            "value": "420323"
        }, {"text": "\u7af9\u6eaa\u53bf", "value": "420324"}, {
            "text": "\u623f\u53bf",
            "value": "420325"
        }, {"text": "\u4e39\u6c5f\u53e3\u5e02", "value": "420381"}],
        "420500": [{"text": "\u5e02\u8f96\u533a", "value": "420501"}, {
            "text": "\u897f\u9675\u533a",
            "value": "420502"
        }, {"text": "\u4f0d\u5bb6\u5c97\u533a", "value": "420503"}, {
            "text": "\u70b9\u519b\u533a",
            "value": "420504"
        }, {"text": "\u7307\u4ead\u533a", "value": "420505"}, {
            "text": "\u5937\u9675\u533a",
            "value": "420506"
        }, {"text": "\u8fdc\u5b89\u53bf", "value": "420525"}, {
            "text": "\u5174\u5c71\u53bf",
            "value": "420526"
        }, {
            "text": "\u79ed\u5f52\u53bf",
            "value": "420527"
        }, {
            "text": "\u957f\u9633\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
            "value": "420528"
        }, {
            "text": "\u4e94\u5cf0\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
            "value": "420529"
        }, {"text": "\u5b9c\u90fd\u5e02", "value": "420581"}, {
            "text": "\u5f53\u9633\u5e02",
            "value": "420582"
        }, {"text": "\u679d\u6c5f\u5e02", "value": "420583"}],
        "420600": [{"text": "\u5e02\u8f96\u533a", "value": "420601"}, {
            "text": "\u8944\u57ce\u533a",
            "value": "420602"
        }, {"text": "\u6a0a\u57ce\u533a", "value": "420606"}, {
            "text": "\u8944\u5dde\u533a",
            "value": "420607"
        }, {"text": "\u5357\u6f33\u53bf", "value": "420624"}, {
            "text": "\u8c37\u57ce\u53bf",
            "value": "420625"
        }, {"text": "\u4fdd\u5eb7\u53bf", "value": "420626"}, {
            "text": "\u8001\u6cb3\u53e3\u5e02",
            "value": "420682"
        }, {"text": "\u67a3\u9633\u5e02", "value": "420683"}, {"text": "\u5b9c\u57ce\u5e02", "value": "420684"}],
        "420700": [{"text": "\u5e02\u8f96\u533a", "value": "420701"}, {
            "text": "\u6881\u5b50\u6e56\u533a",
            "value": "420702"
        }, {"text": "\u534e\u5bb9\u533a", "value": "420703"}, {"text": "\u9102\u57ce\u533a", "value": "420704"}],
        "420800": [{"text": "\u5e02\u8f96\u533a", "value": "420801"}, {
            "text": "\u4e1c\u5b9d\u533a",
            "value": "420802"
        }, {"text": "\u6387\u5200\u533a", "value": "420804"}, {
            "text": "\u4eac\u5c71\u53bf",
            "value": "420821"
        }, {"text": "\u6c99\u6d0b\u53bf", "value": "420822"}, {"text": "\u949f\u7965\u5e02", "value": "420881"}],
        "420900": [{"text": "\u5e02\u8f96\u533a", "value": "420901"}, {
            "text": "\u5b5d\u5357\u533a",
            "value": "420902"
        }, {"text": "\u5b5d\u660c\u53bf", "value": "420921"}, {
            "text": "\u5927\u609f\u53bf",
            "value": "420922"
        }, {"text": "\u4e91\u68a6\u53bf", "value": "420923"}, {
            "text": "\u5e94\u57ce\u5e02",
            "value": "420981"
        }, {"text": "\u5b89\u9646\u5e02", "value": "420982"}, {"text": "\u6c49\u5ddd\u5e02", "value": "420984"}],
        "421000": [{"text": "\u5e02\u8f96\u533a", "value": "421001"}, {
            "text": "\u6c99\u5e02\u533a",
            "value": "421002"
        }, {"text": "\u8346\u5dde\u533a", "value": "421003"}, {
            "text": "\u516c\u5b89\u53bf",
            "value": "421022"
        }, {"text": "\u76d1\u5229\u53bf", "value": "421023"}, {
            "text": "\u6c5f\u9675\u53bf",
            "value": "421024"
        }, {"text": "\u77f3\u9996\u5e02", "value": "421081"}, {
            "text": "\u6d2a\u6e56\u5e02",
            "value": "421083"
        }, {"text": "\u677e\u6ecb\u5e02", "value": "421087"}],
        "421100": [{"text": "\u5e02\u8f96\u533a", "value": "421101"}, {
            "text": "\u9ec4\u5dde\u533a",
            "value": "421102"
        }, {"text": "\u56e2\u98ce\u53bf", "value": "421121"}, {
            "text": "\u7ea2\u5b89\u53bf",
            "value": "421122"
        }, {"text": "\u7f57\u7530\u53bf", "value": "421123"}, {
            "text": "\u82f1\u5c71\u53bf",
            "value": "421124"
        }, {"text": "\u6d60\u6c34\u53bf", "value": "421125"}, {
            "text": "\u8572\u6625\u53bf",
            "value": "421126"
        }, {"text": "\u9ec4\u6885\u53bf", "value": "421127"}, {
            "text": "\u9ebb\u57ce\u5e02",
            "value": "421181"
        }, {"text": "\u6b66\u7a74\u5e02", "value": "421182"}],
        "421200": [{"text": "\u5e02\u8f96\u533a", "value": "421201"}, {
            "text": "\u54b8\u5b89\u533a",
            "value": "421202"
        }, {"text": "\u5609\u9c7c\u53bf", "value": "421221"}, {
            "text": "\u901a\u57ce\u53bf",
            "value": "421222"
        }, {"text": "\u5d07\u9633\u53bf", "value": "421223"}, {
            "text": "\u901a\u5c71\u53bf",
            "value": "421224"
        }, {"text": "\u8d64\u58c1\u5e02", "value": "421281"}],
        "421300": [{"text": "\u5e02\u8f96\u533a", "value": "421301"}, {
            "text": "\u66fe\u90fd\u533a",
            "value": "421303"
        }, {"text": "\u968f\u53bf", "value": "421321"}, {"text": "\u5e7f\u6c34\u5e02", "value": "421381"}],
        "422800": [{"text": "\u6069\u65bd\u5e02", "value": "422801"}, {
            "text": "\u5229\u5ddd\u5e02",
            "value": "422802"
        }, {"text": "\u5efa\u59cb\u53bf", "value": "422822"}, {
            "text": "\u5df4\u4e1c\u53bf",
            "value": "422823"
        }, {"text": "\u5ba3\u6069\u53bf", "value": "422825"}, {
            "text": "\u54b8\u4e30\u53bf",
            "value": "422826"
        }, {"text": "\u6765\u51e4\u53bf", "value": "422827"}, {"text": "\u9e64\u5cf0\u53bf", "value": "422828"}],
        "429000": [{"text": "\u4ed9\u6843\u5e02", "value": "429004"}, {
            "text": "\u6f5c\u6c5f\u5e02",
            "value": "429005"
        }, {"text": "\u5929\u95e8\u5e02", "value": "429006"}, {
            "text": "\u795e\u519c\u67b6\u6797\u533a",
            "value": "429021"
        }],
        "430100": [{"text": "\u5e02\u8f96\u533a", "value": "430101"}, {
            "text": "\u8299\u84c9\u533a",
            "value": "430102"
        }, {"text": "\u5929\u5fc3\u533a", "value": "430103"}, {
            "text": "\u5cb3\u9e93\u533a",
            "value": "430104"
        }, {"text": "\u5f00\u798f\u533a", "value": "430105"}, {
            "text": "\u96e8\u82b1\u533a",
            "value": "430111"
        }, {"text": "\u671b\u57ce\u533a", "value": "430112"}, {
            "text": "\u957f\u6c99\u53bf",
            "value": "430121"
        }, {"text": "\u5b81\u4e61\u53bf", "value": "430124"}, {"text": "\u6d4f\u9633\u5e02", "value": "430181"}],
        "430200": [{"text": "\u5e02\u8f96\u533a", "value": "430201"}, {
            "text": "\u8377\u5858\u533a",
            "value": "430202"
        }, {"text": "\u82a6\u6dde\u533a", "value": "430203"}, {
            "text": "\u77f3\u5cf0\u533a",
            "value": "430204"
        }, {"text": "\u5929\u5143\u533a", "value": "430211"}, {
            "text": "\u682a\u6d32\u53bf",
            "value": "430221"
        }, {"text": "\u6538\u53bf", "value": "430223"}, {
            "text": "\u8336\u9675\u53bf",
            "value": "430224"
        }, {"text": "\u708e\u9675\u53bf", "value": "430225"}, {"text": "\u91b4\u9675\u5e02", "value": "430281"}],
        "430300": [{"text": "\u5e02\u8f96\u533a", "value": "430301"}, {
            "text": "\u96e8\u6e56\u533a",
            "value": "430302"
        }, {"text": "\u5cb3\u5858\u533a", "value": "430304"}, {
            "text": "\u6e58\u6f6d\u53bf",
            "value": "430321"
        }, {"text": "\u6e58\u4e61\u5e02", "value": "430381"}, {"text": "\u97f6\u5c71\u5e02", "value": "430382"}],
        "430400": [{"text": "\u5e02\u8f96\u533a", "value": "430401"}, {
            "text": "\u73e0\u6656\u533a",
            "value": "430405"
        }, {"text": "\u96c1\u5cf0\u533a", "value": "430406"}, {
            "text": "\u77f3\u9f13\u533a",
            "value": "430407"
        }, {"text": "\u84b8\u6e58\u533a", "value": "430408"}, {
            "text": "\u5357\u5cb3\u533a",
            "value": "430412"
        }, {"text": "\u8861\u9633\u53bf", "value": "430421"}, {
            "text": "\u8861\u5357\u53bf",
            "value": "430422"
        }, {"text": "\u8861\u5c71\u53bf", "value": "430423"}, {
            "text": "\u8861\u4e1c\u53bf",
            "value": "430424"
        }, {"text": "\u7941\u4e1c\u53bf", "value": "430426"}, {
            "text": "\u8012\u9633\u5e02",
            "value": "430481"
        }, {"text": "\u5e38\u5b81\u5e02", "value": "430482"}],
        "430500": [{"text": "\u5e02\u8f96\u533a", "value": "430501"}, {
            "text": "\u53cc\u6e05\u533a",
            "value": "430502"
        }, {"text": "\u5927\u7965\u533a", "value": "430503"}, {
            "text": "\u5317\u5854\u533a",
            "value": "430511"
        }, {"text": "\u90b5\u4e1c\u53bf", "value": "430521"}, {
            "text": "\u65b0\u90b5\u53bf",
            "value": "430522"
        }, {"text": "\u90b5\u9633\u53bf", "value": "430523"}, {
            "text": "\u9686\u56de\u53bf",
            "value": "430524"
        }, {"text": "\u6d1e\u53e3\u53bf", "value": "430525"}, {
            "text": "\u7ee5\u5b81\u53bf",
            "value": "430527"
        }, {"text": "\u65b0\u5b81\u53bf", "value": "430528"}, {
            "text": "\u57ce\u6b65\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "430529"
        }, {"text": "\u6b66\u5188\u5e02", "value": "430581"}],
        "430600": [{"text": "\u5e02\u8f96\u533a", "value": "430601"}, {
            "text": "\u5cb3\u9633\u697c\u533a",
            "value": "430602"
        }, {"text": "\u4e91\u6eaa\u533a", "value": "430603"}, {
            "text": "\u541b\u5c71\u533a",
            "value": "430611"
        }, {"text": "\u5cb3\u9633\u53bf", "value": "430621"}, {
            "text": "\u534e\u5bb9\u53bf",
            "value": "430623"
        }, {"text": "\u6e58\u9634\u53bf", "value": "430624"}, {
            "text": "\u5e73\u6c5f\u53bf",
            "value": "430626"
        }, {"text": "\u6c68\u7f57\u5e02", "value": "430681"}, {"text": "\u4e34\u6e58\u5e02", "value": "430682"}],
        "430700": [{"text": "\u5e02\u8f96\u533a", "value": "430701"}, {
            "text": "\u6b66\u9675\u533a",
            "value": "430702"
        }, {"text": "\u9f0e\u57ce\u533a", "value": "430703"}, {
            "text": "\u5b89\u4e61\u53bf",
            "value": "430721"
        }, {"text": "\u6c49\u5bff\u53bf", "value": "430722"}, {
            "text": "\u6fa7\u53bf",
            "value": "430723"
        }, {"text": "\u4e34\u6fa7\u53bf", "value": "430724"}, {
            "text": "\u6843\u6e90\u53bf",
            "value": "430725"
        }, {"text": "\u77f3\u95e8\u53bf", "value": "430726"}, {"text": "\u6d25\u5e02\u5e02", "value": "430781"}],
        "430800": [{"text": "\u5e02\u8f96\u533a", "value": "430801"}, {
            "text": "\u6c38\u5b9a\u533a",
            "value": "430802"
        }, {"text": "\u6b66\u9675\u6e90\u533a", "value": "430811"}, {
            "text": "\u6148\u5229\u53bf",
            "value": "430821"
        }, {"text": "\u6851\u690d\u53bf", "value": "430822"}],
        "430900": [{"text": "\u5e02\u8f96\u533a", "value": "430901"}, {
            "text": "\u8d44\u9633\u533a",
            "value": "430902"
        }, {"text": "\u8d6b\u5c71\u533a", "value": "430903"}, {
            "text": "\u5357\u53bf",
            "value": "430921"
        }, {"text": "\u6843\u6c5f\u53bf", "value": "430922"}, {
            "text": "\u5b89\u5316\u53bf",
            "value": "430923"
        }, {"text": "\u6c85\u6c5f\u5e02", "value": "430981"}],
        "431000": [{"text": "\u5e02\u8f96\u533a", "value": "431001"}, {
            "text": "\u5317\u6e56\u533a",
            "value": "431002"
        }, {"text": "\u82cf\u4ed9\u533a", "value": "431003"}, {
            "text": "\u6842\u9633\u53bf",
            "value": "431021"
        }, {"text": "\u5b9c\u7ae0\u53bf", "value": "431022"}, {
            "text": "\u6c38\u5174\u53bf",
            "value": "431023"
        }, {"text": "\u5609\u79be\u53bf", "value": "431024"}, {
            "text": "\u4e34\u6b66\u53bf",
            "value": "431025"
        }, {"text": "\u6c5d\u57ce\u53bf", "value": "431026"}, {
            "text": "\u6842\u4e1c\u53bf",
            "value": "431027"
        }, {"text": "\u5b89\u4ec1\u53bf", "value": "431028"}, {"text": "\u8d44\u5174\u5e02", "value": "431081"}],
        "431100": [{"text": "\u5e02\u8f96\u533a", "value": "431101"}, {
            "text": "\u96f6\u9675\u533a",
            "value": "431102"
        }, {"text": "\u51b7\u6c34\u6ee9\u533a", "value": "431103"}, {
            "text": "\u7941\u9633\u53bf",
            "value": "431121"
        }, {"text": "\u4e1c\u5b89\u53bf", "value": "431122"}, {
            "text": "\u53cc\u724c\u53bf",
            "value": "431123"
        }, {"text": "\u9053\u53bf", "value": "431124"}, {
            "text": "\u6c5f\u6c38\u53bf",
            "value": "431125"
        }, {"text": "\u5b81\u8fdc\u53bf", "value": "431126"}, {
            "text": "\u84dd\u5c71\u53bf",
            "value": "431127"
        }, {"text": "\u65b0\u7530\u53bf", "value": "431128"}, {
            "text": "\u6c5f\u534e\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "431129"
        }],
        "431200": [{"text": "\u5e02\u8f96\u533a", "value": "431201"}, {
            "text": "\u9e64\u57ce\u533a",
            "value": "431202"
        }, {"text": "\u4e2d\u65b9\u53bf", "value": "431221"}, {
            "text": "\u6c85\u9675\u53bf",
            "value": "431222"
        }, {"text": "\u8fb0\u6eaa\u53bf", "value": "431223"}, {
            "text": "\u6e86\u6d66\u53bf",
            "value": "431224"
        }, {"text": "\u4f1a\u540c\u53bf", "value": "431225"}, {
            "text": "\u9ebb\u9633\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "431226"
        }, {
            "text": "\u65b0\u6643\u4f97\u65cf\u81ea\u6cbb\u53bf",
            "value": "431227"
        }, {
            "text": "\u82b7\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf",
            "value": "431228"
        }, {
            "text": "\u9756\u5dde\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u53bf",
            "value": "431229"
        }, {"text": "\u901a\u9053\u4f97\u65cf\u81ea\u6cbb\u53bf", "value": "431230"}, {
            "text": "\u6d2a\u6c5f\u5e02",
            "value": "431281"
        }],
        "431300": [{"text": "\u5e02\u8f96\u533a", "value": "431301"}, {
            "text": "\u5a04\u661f\u533a",
            "value": "431302"
        }, {"text": "\u53cc\u5cf0\u53bf", "value": "431321"}, {
            "text": "\u65b0\u5316\u53bf",
            "value": "431322"
        }, {"text": "\u51b7\u6c34\u6c5f\u5e02", "value": "431381"}, {"text": "\u6d9f\u6e90\u5e02", "value": "431382"}],
        "433100": [{"text": "\u5409\u9996\u5e02", "value": "433101"}, {
            "text": "\u6cf8\u6eaa\u53bf",
            "value": "433122"
        }, {"text": "\u51e4\u51f0\u53bf", "value": "433123"}, {
            "text": "\u82b1\u57a3\u53bf",
            "value": "433124"
        }, {"text": "\u4fdd\u9756\u53bf", "value": "433125"}, {
            "text": "\u53e4\u4e08\u53bf",
            "value": "433126"
        }, {"text": "\u6c38\u987a\u53bf", "value": "433127"}, {"text": "\u9f99\u5c71\u53bf", "value": "433130"}],
        "440100": [{"text": "\u5e02\u8f96\u533a", "value": "440101"}, {
            "text": "\u8354\u6e7e\u533a",
            "value": "440103"
        }, {"text": "\u8d8a\u79c0\u533a", "value": "440104"}, {
            "text": "\u6d77\u73e0\u533a",
            "value": "440105"
        }, {"text": "\u5929\u6cb3\u533a", "value": "440106"}, {
            "text": "\u767d\u4e91\u533a",
            "value": "440111"
        }, {"text": "\u9ec4\u57d4\u533a", "value": "440112"}, {
            "text": "\u756a\u79ba\u533a",
            "value": "440113"
        }, {"text": "\u82b1\u90fd\u533a", "value": "440114"}, {
            "text": "\u5357\u6c99\u533a",
            "value": "440115"
        }, {"text": "\u841d\u5c97\u533a", "value": "440116"}, {
            "text": "\u589e\u57ce\u5e02",
            "value": "440183"
        }, {"text": "\u4ece\u5316\u5e02", "value": "440184"}],
        "440200": [{"text": "\u5e02\u8f96\u533a", "value": "440201"}, {
            "text": "\u6b66\u6c5f\u533a",
            "value": "440203"
        }, {"text": "\u6d48\u6c5f\u533a", "value": "440204"}, {
            "text": "\u66f2\u6c5f\u533a",
            "value": "440205"
        }, {"text": "\u59cb\u5174\u53bf", "value": "440222"}, {
            "text": "\u4ec1\u5316\u53bf",
            "value": "440224"
        }, {"text": "\u7fc1\u6e90\u53bf", "value": "440229"}, {
            "text": "\u4e73\u6e90\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "440232"
        }, {"text": "\u65b0\u4e30\u53bf", "value": "440233"}, {
            "text": "\u4e50\u660c\u5e02",
            "value": "440281"
        }, {"text": "\u5357\u96c4\u5e02", "value": "440282"}],
        "440300": [{"text": "\u5e02\u8f96\u533a", "value": "440301"}, {
            "text": "\u7f57\u6e56\u533a",
            "value": "440303"
        }, {"text": "\u798f\u7530\u533a", "value": "440304"}, {
            "text": "\u5357\u5c71\u533a",
            "value": "440305"
        }, {"text": "\u5b9d\u5b89\u533a", "value": "440306"}, {
            "text": "\u9f99\u5c97\u533a",
            "value": "440307"
        }, {"text": "\u76d0\u7530\u533a", "value": "440308"}],
        "440400": [{"text": "\u5e02\u8f96\u533a", "value": "440401"}, {
            "text": "\u9999\u6d32\u533a",
            "value": "440402"
        }, {"text": "\u6597\u95e8\u533a", "value": "440403"}, {"text": "\u91d1\u6e7e\u533a", "value": "440404"}],
        "440500": [{"text": "\u5e02\u8f96\u533a", "value": "440501"}, {
            "text": "\u9f99\u6e56\u533a",
            "value": "440507"
        }, {"text": "\u91d1\u5e73\u533a", "value": "440511"}, {
            "text": "\u6fe0\u6c5f\u533a",
            "value": "440512"
        }, {"text": "\u6f6e\u9633\u533a", "value": "440513"}, {
            "text": "\u6f6e\u5357\u533a",
            "value": "440514"
        }, {"text": "\u6f84\u6d77\u533a", "value": "440515"}, {"text": "\u5357\u6fb3\u53bf", "value": "440523"}],
        "440600": [{"text": "\u5e02\u8f96\u533a", "value": "440601"}, {
            "text": "\u7985\u57ce\u533a",
            "value": "440604"
        }, {"text": "\u5357\u6d77\u533a", "value": "440605"}, {
            "text": "\u987a\u5fb7\u533a",
            "value": "440606"
        }, {"text": "\u4e09\u6c34\u533a", "value": "440607"}, {"text": "\u9ad8\u660e\u533a", "value": "440608"}],
        "440700": [{"text": "\u5e02\u8f96\u533a", "value": "440701"}, {
            "text": "\u84ec\u6c5f\u533a",
            "value": "440703"
        }, {"text": "\u6c5f\u6d77\u533a", "value": "440704"}, {
            "text": "\u65b0\u4f1a\u533a",
            "value": "440705"
        }, {"text": "\u53f0\u5c71\u5e02", "value": "440781"}, {
            "text": "\u5f00\u5e73\u5e02",
            "value": "440783"
        }, {"text": "\u9e64\u5c71\u5e02", "value": "440784"}, {"text": "\u6069\u5e73\u5e02", "value": "440785"}],
        "440800": [{"text": "\u5e02\u8f96\u533a", "value": "440801"}, {
            "text": "\u8d64\u574e\u533a",
            "value": "440802"
        }, {"text": "\u971e\u5c71\u533a", "value": "440803"}, {
            "text": "\u5761\u5934\u533a",
            "value": "440804"
        }, {"text": "\u9ebb\u7ae0\u533a", "value": "440811"}, {
            "text": "\u9042\u6eaa\u53bf",
            "value": "440823"
        }, {"text": "\u5f90\u95fb\u53bf", "value": "440825"}, {
            "text": "\u5ec9\u6c5f\u5e02",
            "value": "440881"
        }, {"text": "\u96f7\u5dde\u5e02", "value": "440882"}, {"text": "\u5434\u5ddd\u5e02", "value": "440883"}],
        "440900": [{"text": "\u5e02\u8f96\u533a", "value": "440901"}, {
            "text": "\u8302\u5357\u533a",
            "value": "440902"
        }, {"text": "\u8302\u6e2f\u533a", "value": "440903"}, {
            "text": "\u7535\u767d\u53bf",
            "value": "440923"
        }, {"text": "\u9ad8\u5dde\u5e02", "value": "440981"}, {
            "text": "\u5316\u5dde\u5e02",
            "value": "440982"
        }, {"text": "\u4fe1\u5b9c\u5e02", "value": "440983"}],
        "441200": [{"text": "\u5e02\u8f96\u533a", "value": "441201"}, {
            "text": "\u7aef\u5dde\u533a",
            "value": "441202"
        }, {"text": "\u9f0e\u6e56\u533a", "value": "441203"}, {
            "text": "\u5e7f\u5b81\u53bf",
            "value": "441223"
        }, {"text": "\u6000\u96c6\u53bf", "value": "441224"}, {
            "text": "\u5c01\u5f00\u53bf",
            "value": "441225"
        }, {"text": "\u5fb7\u5e86\u53bf", "value": "441226"}, {
            "text": "\u9ad8\u8981\u5e02",
            "value": "441283"
        }, {"text": "\u56db\u4f1a\u5e02", "value": "441284"}],
        "441300": [{"text": "\u5e02\u8f96\u533a", "value": "441301"}, {
            "text": "\u60e0\u57ce\u533a",
            "value": "441302"
        }, {"text": "\u60e0\u9633\u533a", "value": "441303"}, {
            "text": "\u535a\u7f57\u53bf",
            "value": "441322"
        }, {"text": "\u60e0\u4e1c\u53bf", "value": "441323"}, {"text": "\u9f99\u95e8\u53bf", "value": "441324"}],
        "441400": [{"text": "\u5e02\u8f96\u533a", "value": "441401"}, {
            "text": "\u6885\u6c5f\u533a",
            "value": "441402"
        }, {"text": "\u6885\u53bf", "value": "441421"}, {
            "text": "\u5927\u57d4\u53bf",
            "value": "441422"
        }, {"text": "\u4e30\u987a\u53bf", "value": "441423"}, {
            "text": "\u4e94\u534e\u53bf",
            "value": "441424"
        }, {"text": "\u5e73\u8fdc\u53bf", "value": "441426"}, {
            "text": "\u8549\u5cad\u53bf",
            "value": "441427"
        }, {"text": "\u5174\u5b81\u5e02", "value": "441481"}],
        "441500": [{"text": "\u5e02\u8f96\u533a", "value": "441501"}, {
            "text": "\u57ce\u533a",
            "value": "441502"
        }, {"text": "\u6d77\u4e30\u53bf", "value": "441521"}, {
            "text": "\u9646\u6cb3\u53bf",
            "value": "441523"
        }, {"text": "\u9646\u4e30\u5e02", "value": "441581"}],
        "441600": [{"text": "\u5e02\u8f96\u533a", "value": "441601"}, {
            "text": "\u6e90\u57ce\u533a",
            "value": "441602"
        }, {"text": "\u7d2b\u91d1\u53bf", "value": "441621"}, {
            "text": "\u9f99\u5ddd\u53bf",
            "value": "441622"
        }, {"text": "\u8fde\u5e73\u53bf", "value": "441623"}, {
            "text": "\u548c\u5e73\u53bf",
            "value": "441624"
        }, {"text": "\u4e1c\u6e90\u53bf", "value": "441625"}],
        "441700": [{"text": "\u5e02\u8f96\u533a", "value": "441701"}, {
            "text": "\u6c5f\u57ce\u533a",
            "value": "441702"
        }, {"text": "\u9633\u897f\u53bf", "value": "441721"}, {
            "text": "\u9633\u4e1c\u53bf",
            "value": "441723"
        }, {"text": "\u9633\u6625\u5e02", "value": "441781"}],
        "441800": [{"text": "\u5e02\u8f96\u533a", "value": "441801"}, {
            "text": "\u6e05\u57ce\u533a",
            "value": "441802"
        }, {"text": "\u6e05\u65b0\u533a", "value": "441803"}, {
            "text": "\u4f5b\u5188\u53bf",
            "value": "441821"
        }, {
            "text": "\u9633\u5c71\u53bf",
            "value": "441823"
        }, {
            "text": "\u8fde\u5c71\u58ee\u65cf\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "441825"
        }, {"text": "\u8fde\u5357\u7476\u65cf\u81ea\u6cbb\u53bf", "value": "441826"}, {
            "text": "\u82f1\u5fb7\u5e02",
            "value": "441881"
        }, {"text": "\u8fde\u5dde\u5e02", "value": "441882"}],
        "441900": "",
        "442000": "",
        "445100": [{"text": "\u5e02\u8f96\u533a", "value": "445101"}, {
            "text": "\u6e58\u6865\u533a",
            "value": "445102"
        }, {"text": "\u6f6e\u5b89\u533a", "value": "445103"}, {"text": "\u9976\u5e73\u53bf", "value": "445122"}],
        "445200": [{"text": "\u5e02\u8f96\u533a", "value": "445201"}, {
            "text": "\u6995\u57ce\u533a",
            "value": "445202"
        }, {"text": "\u63ed\u4e1c\u533a", "value": "445203"}, {
            "text": "\u63ed\u897f\u53bf",
            "value": "445222"
        }, {"text": "\u60e0\u6765\u53bf", "value": "445224"}, {"text": "\u666e\u5b81\u5e02", "value": "445281"}],
        "445300": [{"text": "\u5e02\u8f96\u533a", "value": "445301"}, {
            "text": "\u4e91\u57ce\u533a",
            "value": "445302"
        }, {"text": "\u65b0\u5174\u53bf", "value": "445321"}, {
            "text": "\u90c1\u5357\u53bf",
            "value": "445322"
        }, {"text": "\u4e91\u5b89\u53bf", "value": "445323"}, {"text": "\u7f57\u5b9a\u5e02", "value": "445381"}],
        "450100": [{"text": "\u5e02\u8f96\u533a", "value": "450101"}, {
            "text": "\u5174\u5b81\u533a",
            "value": "450102"
        }, {"text": "\u9752\u79c0\u533a", "value": "450103"}, {
            "text": "\u6c5f\u5357\u533a",
            "value": "450105"
        }, {"text": "\u897f\u4e61\u5858\u533a", "value": "450107"}, {
            "text": "\u826f\u5e86\u533a",
            "value": "450108"
        }, {"text": "\u9095\u5b81\u533a", "value": "450109"}, {
            "text": "\u6b66\u9e23\u53bf",
            "value": "450122"
        }, {"text": "\u9686\u5b89\u53bf", "value": "450123"}, {
            "text": "\u9a6c\u5c71\u53bf",
            "value": "450124"
        }, {"text": "\u4e0a\u6797\u53bf", "value": "450125"}, {
            "text": "\u5bbe\u9633\u53bf",
            "value": "450126"
        }, {"text": "\u6a2a\u53bf", "value": "450127"}],
        "450200": [{"text": "\u5e02\u8f96\u533a", "value": "450201"}, {
            "text": "\u57ce\u4e2d\u533a",
            "value": "450202"
        }, {"text": "\u9c7c\u5cf0\u533a", "value": "450203"}, {
            "text": "\u67f3\u5357\u533a",
            "value": "450204"
        }, {"text": "\u67f3\u5317\u533a", "value": "450205"}, {
            "text": "\u67f3\u6c5f\u53bf",
            "value": "450221"
        }, {"text": "\u67f3\u57ce\u53bf", "value": "450222"}, {
            "text": "\u9e7f\u5be8\u53bf",
            "value": "450223"
        }, {"text": "\u878d\u5b89\u53bf", "value": "450224"}, {
            "text": "\u878d\u6c34\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "450225"
        }, {"text": "\u4e09\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf", "value": "450226"}],
        "450300": [{"text": "\u5e02\u8f96\u533a", "value": "450301"}, {
            "text": "\u79c0\u5cf0\u533a",
            "value": "450302"
        }, {"text": "\u53e0\u5f69\u533a", "value": "450303"}, {
            "text": "\u8c61\u5c71\u533a",
            "value": "450304"
        }, {"text": "\u4e03\u661f\u533a", "value": "450305"}, {
            "text": "\u96c1\u5c71\u533a",
            "value": "450311"
        }, {"text": "\u4e34\u6842\u533a", "value": "450312"}, {
            "text": "\u9633\u6714\u53bf",
            "value": "450321"
        }, {"text": "\u7075\u5ddd\u53bf", "value": "450323"}, {
            "text": "\u5168\u5dde\u53bf",
            "value": "450324"
        }, {"text": "\u5174\u5b89\u53bf", "value": "450325"}, {
            "text": "\u6c38\u798f\u53bf",
            "value": "450326"
        }, {"text": "\u704c\u9633\u53bf", "value": "450327"}, {
            "text": "\u9f99\u80dc\u5404\u65cf\u81ea\u6cbb\u53bf",
            "value": "450328"
        }, {"text": "\u8d44\u6e90\u53bf", "value": "450329"}, {
            "text": "\u5e73\u4e50\u53bf",
            "value": "450330"
        }, {"text": "\u8354\u6d66\u53bf", "value": "450331"}, {
            "text": "\u606d\u57ce\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "450332"
        }],
        "450400": [{"text": "\u5e02\u8f96\u533a", "value": "450401"}, {
            "text": "\u4e07\u79c0\u533a",
            "value": "450403"
        }, {"text": "\u957f\u6d32\u533a", "value": "450405"}, {
            "text": "\u9f99\u5729\u533a",
            "value": "450406"
        }, {"text": "\u82cd\u68a7\u53bf", "value": "450421"}, {
            "text": "\u85e4\u53bf",
            "value": "450422"
        }, {"text": "\u8499\u5c71\u53bf", "value": "450423"}, {"text": "\u5c91\u6eaa\u5e02", "value": "450481"}],
        "450500": [{"text": "\u5e02\u8f96\u533a", "value": "450501"}, {
            "text": "\u6d77\u57ce\u533a",
            "value": "450502"
        }, {"text": "\u94f6\u6d77\u533a", "value": "450503"}, {
            "text": "\u94c1\u5c71\u6e2f\u533a",
            "value": "450512"
        }, {"text": "\u5408\u6d66\u53bf", "value": "450521"}],
        "450600": [{"text": "\u5e02\u8f96\u533a", "value": "450601"}, {
            "text": "\u6e2f\u53e3\u533a",
            "value": "450602"
        }, {"text": "\u9632\u57ce\u533a", "value": "450603"}, {
            "text": "\u4e0a\u601d\u53bf",
            "value": "450621"
        }, {"text": "\u4e1c\u5174\u5e02", "value": "450681"}],
        "450700": [{"text": "\u5e02\u8f96\u533a", "value": "450701"}, {
            "text": "\u94a6\u5357\u533a",
            "value": "450702"
        }, {"text": "\u94a6\u5317\u533a", "value": "450703"}, {
            "text": "\u7075\u5c71\u53bf",
            "value": "450721"
        }, {"text": "\u6d66\u5317\u53bf", "value": "450722"}],
        "450800": [{"text": "\u5e02\u8f96\u533a", "value": "450801"}, {
            "text": "\u6e2f\u5317\u533a",
            "value": "450802"
        }, {"text": "\u6e2f\u5357\u533a", "value": "450803"}, {
            "text": "\u8983\u5858\u533a",
            "value": "450804"
        }, {"text": "\u5e73\u5357\u53bf", "value": "450821"}, {"text": "\u6842\u5e73\u5e02", "value": "450881"}],
        "450900": [{"text": "\u5e02\u8f96\u533a", "value": "450901"}, {
            "text": "\u7389\u5dde\u533a",
            "value": "450902"
        }, {"text": "\u798f\u7ef5\u533a", "value": "450903"}, {
            "text": "\u5bb9\u53bf",
            "value": "450921"
        }, {"text": "\u9646\u5ddd\u53bf", "value": "450922"}, {
            "text": "\u535a\u767d\u53bf",
            "value": "450923"
        }, {"text": "\u5174\u4e1a\u53bf", "value": "450924"}, {"text": "\u5317\u6d41\u5e02", "value": "450981"}],
        "451000": [{"text": "\u5e02\u8f96\u533a", "value": "451001"}, {
            "text": "\u53f3\u6c5f\u533a",
            "value": "451002"
        }, {"text": "\u7530\u9633\u53bf", "value": "451021"}, {
            "text": "\u7530\u4e1c\u53bf",
            "value": "451022"
        }, {"text": "\u5e73\u679c\u53bf", "value": "451023"}, {
            "text": "\u5fb7\u4fdd\u53bf",
            "value": "451024"
        }, {"text": "\u9756\u897f\u53bf", "value": "451025"}, {
            "text": "\u90a3\u5761\u53bf",
            "value": "451026"
        }, {"text": "\u51cc\u4e91\u53bf", "value": "451027"}, {
            "text": "\u4e50\u4e1a\u53bf",
            "value": "451028"
        }, {"text": "\u7530\u6797\u53bf", "value": "451029"}, {
            "text": "\u897f\u6797\u53bf",
            "value": "451030"
        }, {"text": "\u9686\u6797\u5404\u65cf\u81ea\u6cbb\u53bf", "value": "451031"}],
        "451100": [{"text": "\u5e02\u8f96\u533a", "value": "451101"}, {
            "text": "\u516b\u6b65\u533a",
            "value": "451102"
        }, {"text": "\u662d\u5e73\u53bf", "value": "451121"}, {
            "text": "\u949f\u5c71\u53bf",
            "value": "451122"
        }, {"text": "\u5bcc\u5ddd\u7476\u65cf\u81ea\u6cbb\u53bf", "value": "451123"}],
        "451200": [{"text": "\u5e02\u8f96\u533a", "value": "451201"}, {
            "text": "\u91d1\u57ce\u6c5f\u533a",
            "value": "451202"
        }, {"text": "\u5357\u4e39\u53bf", "value": "451221"}, {
            "text": "\u5929\u5ce8\u53bf",
            "value": "451222"
        }, {"text": "\u51e4\u5c71\u53bf", "value": "451223"}, {
            "text": "\u4e1c\u5170\u53bf",
            "value": "451224"
        }, {
            "text": "\u7f57\u57ce\u4eeb\u4f6c\u65cf\u81ea\u6cbb\u53bf",
            "value": "451225"
        }, {
            "text": "\u73af\u6c5f\u6bdb\u5357\u65cf\u81ea\u6cbb\u53bf",
            "value": "451226"
        }, {
            "text": "\u5df4\u9a6c\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "451227"
        }, {
            "text": "\u90fd\u5b89\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "451228"
        }, {"text": "\u5927\u5316\u7476\u65cf\u81ea\u6cbb\u53bf", "value": "451229"}, {
            "text": "\u5b9c\u5dde\u5e02",
            "value": "451281"
        }],
        "451300": [{"text": "\u5e02\u8f96\u533a", "value": "451301"}, {
            "text": "\u5174\u5bbe\u533a",
            "value": "451302"
        }, {"text": "\u5ffb\u57ce\u53bf", "value": "451321"}, {
            "text": "\u8c61\u5dde\u53bf",
            "value": "451322"
        }, {"text": "\u6b66\u5ba3\u53bf", "value": "451323"}, {
            "text": "\u91d1\u79c0\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "451324"
        }, {"text": "\u5408\u5c71\u5e02", "value": "451381"}],
        "451400": [{"text": "\u5e02\u8f96\u533a", "value": "451401"}, {
            "text": "\u6c5f\u5dde\u533a",
            "value": "451402"
        }, {"text": "\u6276\u7ee5\u53bf", "value": "451421"}, {
            "text": "\u5b81\u660e\u53bf",
            "value": "451422"
        }, {"text": "\u9f99\u5dde\u53bf", "value": "451423"}, {
            "text": "\u5927\u65b0\u53bf",
            "value": "451424"
        }, {"text": "\u5929\u7b49\u53bf", "value": "451425"}, {"text": "\u51ed\u7965\u5e02", "value": "451481"}],
        "460100": [{"text": "\u5e02\u8f96\u533a", "value": "460101"}, {
            "text": "\u79c0\u82f1\u533a",
            "value": "460105"
        }, {"text": "\u9f99\u534e\u533a", "value": "460106"}, {
            "text": "\u743c\u5c71\u533a",
            "value": "460107"
        }, {"text": "\u7f8e\u5170\u533a", "value": "460108"}],
        "460200": [{"text": "\u5e02\u8f96\u533a", "value": "460201"}],
        "460300": [{"text": "\u897f\u6c99\u7fa4\u5c9b", "value": "460321"}, {
            "text": "\u5357\u6c99\u7fa4\u5c9b",
            "value": "460322"
        }, {"text": "\u4e2d\u6c99\u7fa4\u5c9b\u7684\u5c9b\u7901\u53ca\u5176\u6d77\u57df", "value": "460323"}],
        "469000": [{"text": "\u4e94\u6307\u5c71\u5e02", "value": "469001"}, {
            "text": "\u743c\u6d77\u5e02",
            "value": "469002"
        }, {"text": "\u510b\u5dde\u5e02", "value": "469003"}, {
            "text": "\u6587\u660c\u5e02",
            "value": "469005"
        }, {"text": "\u4e07\u5b81\u5e02", "value": "469006"}, {
            "text": "\u4e1c\u65b9\u5e02",
            "value": "469007"
        }, {"text": "\u5b9a\u5b89\u53bf", "value": "469021"}, {
            "text": "\u5c6f\u660c\u53bf",
            "value": "469022"
        }, {"text": "\u6f84\u8fc8\u53bf", "value": "469023"}, {
            "text": "\u4e34\u9ad8\u53bf",
            "value": "469024"
        }, {
            "text": "\u767d\u6c99\u9ece\u65cf\u81ea\u6cbb\u53bf",
            "value": "469025"
        }, {
            "text": "\u660c\u6c5f\u9ece\u65cf\u81ea\u6cbb\u53bf",
            "value": "469026"
        }, {
            "text": "\u4e50\u4e1c\u9ece\u65cf\u81ea\u6cbb\u53bf",
            "value": "469027"
        }, {
            "text": "\u9675\u6c34\u9ece\u65cf\u81ea\u6cbb\u53bf",
            "value": "469028"
        }, {
            "text": "\u4fdd\u4ead\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "469029"
        }, {"text": "\u743c\u4e2d\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf", "value": "469030"}],
        "500100": [{"text": "\u4e07\u5dde\u533a", "value": "500101"}, {
            "text": "\u6daa\u9675\u533a",
            "value": "500102"
        }, {"text": "\u6e1d\u4e2d\u533a", "value": "500103"}, {
            "text": "\u5927\u6e21\u53e3\u533a",
            "value": "500104"
        }, {"text": "\u6c5f\u5317\u533a", "value": "500105"}, {
            "text": "\u6c99\u576a\u575d\u533a",
            "value": "500106"
        }, {"text": "\u4e5d\u9f99\u5761\u533a", "value": "500107"}, {
            "text": "\u5357\u5cb8\u533a",
            "value": "500108"
        }, {"text": "\u5317\u789a\u533a", "value": "500109"}, {
            "text": "\u7da6\u6c5f\u533a",
            "value": "500110"
        }, {"text": "\u5927\u8db3\u533a", "value": "500111"}, {
            "text": "\u6e1d\u5317\u533a",
            "value": "500112"
        }, {"text": "\u5df4\u5357\u533a", "value": "500113"}, {
            "text": "\u9ed4\u6c5f\u533a",
            "value": "500114"
        }, {"text": "\u957f\u5bff\u533a", "value": "500115"}, {
            "text": "\u6c5f\u6d25\u533a",
            "value": "500116"
        }, {"text": "\u5408\u5ddd\u533a", "value": "500117"}, {
            "text": "\u6c38\u5ddd\u533a",
            "value": "500118"
        }, {"text": "\u5357\u5ddd\u533a", "value": "500119"}],
        "500200": [{"text": "\u6f7c\u5357\u53bf", "value": "500223"}, {
            "text": "\u94dc\u6881\u53bf",
            "value": "500224"
        }, {"text": "\u8363\u660c\u53bf", "value": "500226"}, {
            "text": "\u74a7\u5c71\u53bf",
            "value": "500227"
        }, {"text": "\u6881\u5e73\u53bf", "value": "500228"}, {
            "text": "\u57ce\u53e3\u53bf",
            "value": "500229"
        }, {"text": "\u4e30\u90fd\u53bf", "value": "500230"}, {
            "text": "\u57ab\u6c5f\u53bf",
            "value": "500231"
        }, {"text": "\u6b66\u9686\u53bf", "value": "500232"}, {
            "text": "\u5fe0\u53bf",
            "value": "500233"
        }, {"text": "\u5f00\u53bf", "value": "500234"}, {
            "text": "\u4e91\u9633\u53bf",
            "value": "500235"
        }, {"text": "\u5949\u8282\u53bf", "value": "500236"}, {
            "text": "\u5deb\u5c71\u53bf",
            "value": "500237"
        }, {
            "text": "\u5deb\u6eaa\u53bf",
            "value": "500238"
        }, {
            "text": "\u77f3\u67f1\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
            "value": "500240"
        }, {
            "text": "\u79c0\u5c71\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "500241"
        }, {
            "text": "\u9149\u9633\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "500242"
        }, {"text": "\u5f6d\u6c34\u82d7\u65cf\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf", "value": "500243"}],
        "510100": [{"text": "\u5e02\u8f96\u533a", "value": "510101"}, {
            "text": "\u9526\u6c5f\u533a",
            "value": "510104"
        }, {"text": "\u9752\u7f8a\u533a", "value": "510105"}, {
            "text": "\u91d1\u725b\u533a",
            "value": "510106"
        }, {"text": "\u6b66\u4faf\u533a", "value": "510107"}, {
            "text": "\u6210\u534e\u533a",
            "value": "510108"
        }, {"text": "\u9f99\u6cc9\u9a7f\u533a", "value": "510112"}, {
            "text": "\u9752\u767d\u6c5f\u533a",
            "value": "510113"
        }, {"text": "\u65b0\u90fd\u533a", "value": "510114"}, {
            "text": "\u6e29\u6c5f\u533a",
            "value": "510115"
        }, {"text": "\u91d1\u5802\u53bf", "value": "510121"}, {
            "text": "\u53cc\u6d41\u53bf",
            "value": "510122"
        }, {"text": "\u90eb\u53bf", "value": "510124"}, {
            "text": "\u5927\u9091\u53bf",
            "value": "510129"
        }, {"text": "\u84b2\u6c5f\u53bf", "value": "510131"}, {
            "text": "\u65b0\u6d25\u53bf",
            "value": "510132"
        }, {"text": "\u90fd\u6c5f\u5830\u5e02", "value": "510181"}, {
            "text": "\u5f6d\u5dde\u5e02",
            "value": "510182"
        }, {"text": "\u909b\u5d03\u5e02", "value": "510183"}, {"text": "\u5d07\u5dde\u5e02", "value": "510184"}],
        "510300": [{"text": "\u5e02\u8f96\u533a", "value": "510301"}, {
            "text": "\u81ea\u6d41\u4e95\u533a",
            "value": "510302"
        }, {"text": "\u8d21\u4e95\u533a", "value": "510303"}, {
            "text": "\u5927\u5b89\u533a",
            "value": "510304"
        }, {"text": "\u6cbf\u6ee9\u533a", "value": "510311"}, {
            "text": "\u8363\u53bf",
            "value": "510321"
        }, {"text": "\u5bcc\u987a\u53bf", "value": "510322"}],
        "510400": [{"text": "\u5e02\u8f96\u533a", "value": "510401"}, {
            "text": "\u4e1c\u533a",
            "value": "510402"
        }, {"text": "\u897f\u533a", "value": "510403"}, {
            "text": "\u4ec1\u548c\u533a",
            "value": "510411"
        }, {"text": "\u7c73\u6613\u53bf", "value": "510421"}, {"text": "\u76d0\u8fb9\u53bf", "value": "510422"}],
        "510500": [{"text": "\u5e02\u8f96\u533a", "value": "510501"}, {
            "text": "\u6c5f\u9633\u533a",
            "value": "510502"
        }, {"text": "\u7eb3\u6eaa\u533a", "value": "510503"}, {
            "text": "\u9f99\u9a6c\u6f6d\u533a",
            "value": "510504"
        }, {"text": "\u6cf8\u53bf", "value": "510521"}, {
            "text": "\u5408\u6c5f\u53bf",
            "value": "510522"
        }, {"text": "\u53d9\u6c38\u53bf", "value": "510524"}, {"text": "\u53e4\u853a\u53bf", "value": "510525"}],
        "510600": [{"text": "\u5e02\u8f96\u533a", "value": "510601"}, {
            "text": "\u65cc\u9633\u533a",
            "value": "510603"
        }, {"text": "\u4e2d\u6c5f\u53bf", "value": "510623"}, {
            "text": "\u7f57\u6c5f\u53bf",
            "value": "510626"
        }, {"text": "\u5e7f\u6c49\u5e02", "value": "510681"}, {
            "text": "\u4ec0\u90a1\u5e02",
            "value": "510682"
        }, {"text": "\u7ef5\u7af9\u5e02", "value": "510683"}],
        "510700": [{"text": "\u5e02\u8f96\u533a", "value": "510701"}, {
            "text": "\u6daa\u57ce\u533a",
            "value": "510703"
        }, {"text": "\u6e38\u4ed9\u533a", "value": "510704"}, {
            "text": "\u4e09\u53f0\u53bf",
            "value": "510722"
        }, {"text": "\u76d0\u4ead\u53bf", "value": "510723"}, {
            "text": "\u5b89\u53bf",
            "value": "510724"
        }, {"text": "\u6893\u6f7c\u53bf", "value": "510725"}, {
            "text": "\u5317\u5ddd\u7f8c\u65cf\u81ea\u6cbb\u53bf",
            "value": "510726"
        }, {"text": "\u5e73\u6b66\u53bf", "value": "510727"}, {"text": "\u6c5f\u6cb9\u5e02", "value": "510781"}],
        "510800": [{"text": "\u5e02\u8f96\u533a", "value": "510801"}, {
            "text": "\u5229\u5dde\u533a",
            "value": "510802"
        }, {"text": "\u5143\u575d\u533a", "value": "510811"}, {
            "text": "\u671d\u5929\u533a",
            "value": "510812"
        }, {"text": "\u65fa\u82cd\u53bf", "value": "510821"}, {
            "text": "\u9752\u5ddd\u53bf",
            "value": "510822"
        }, {"text": "\u5251\u9601\u53bf", "value": "510823"}, {"text": "\u82cd\u6eaa\u53bf", "value": "510824"}],
        "510900": [{"text": "\u5e02\u8f96\u533a", "value": "510901"}, {
            "text": "\u8239\u5c71\u533a",
            "value": "510903"
        }, {"text": "\u5b89\u5c45\u533a", "value": "510904"}, {
            "text": "\u84ec\u6eaa\u53bf",
            "value": "510921"
        }, {"text": "\u5c04\u6d2a\u53bf", "value": "510922"}, {"text": "\u5927\u82f1\u53bf", "value": "510923"}],
        "511000": [{"text": "\u5e02\u8f96\u533a", "value": "511001"}, {
            "text": "\u5e02\u4e2d\u533a",
            "value": "511002"
        }, {"text": "\u4e1c\u5174\u533a", "value": "511011"}, {
            "text": "\u5a01\u8fdc\u53bf",
            "value": "511024"
        }, {"text": "\u8d44\u4e2d\u53bf", "value": "511025"}, {"text": "\u9686\u660c\u53bf", "value": "511028"}],
        "511100": [{"text": "\u5e02\u8f96\u533a", "value": "511101"}, {
            "text": "\u5e02\u4e2d\u533a",
            "value": "511102"
        }, {"text": "\u6c99\u6e7e\u533a", "value": "511111"}, {
            "text": "\u4e94\u901a\u6865\u533a",
            "value": "511112"
        }, {"text": "\u91d1\u53e3\u6cb3\u533a", "value": "511113"}, {
            "text": "\u728d\u4e3a\u53bf",
            "value": "511123"
        }, {"text": "\u4e95\u7814\u53bf", "value": "511124"}, {
            "text": "\u5939\u6c5f\u53bf",
            "value": "511126"
        }, {"text": "\u6c90\u5ddd\u53bf", "value": "511129"}, {
            "text": "\u5ce8\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "511132"
        }, {
            "text": "\u9a6c\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "511133"
        }, {"text": "\u5ce8\u7709\u5c71\u5e02", "value": "511181"}],
        "511300": [{"text": "\u5e02\u8f96\u533a", "value": "511301"}, {
            "text": "\u987a\u5e86\u533a",
            "value": "511302"
        }, {"text": "\u9ad8\u576a\u533a", "value": "511303"}, {
            "text": "\u5609\u9675\u533a",
            "value": "511304"
        }, {"text": "\u5357\u90e8\u53bf", "value": "511321"}, {
            "text": "\u8425\u5c71\u53bf",
            "value": "511322"
        }, {"text": "\u84ec\u5b89\u53bf", "value": "511323"}, {
            "text": "\u4eea\u9647\u53bf",
            "value": "511324"
        }, {"text": "\u897f\u5145\u53bf", "value": "511325"}, {"text": "\u9606\u4e2d\u5e02", "value": "511381"}],
        "511400": [{"text": "\u5e02\u8f96\u533a", "value": "511401"}, {
            "text": "\u4e1c\u5761\u533a",
            "value": "511402"
        }, {"text": "\u4ec1\u5bff\u53bf", "value": "511421"}, {
            "text": "\u5f6d\u5c71\u53bf",
            "value": "511422"
        }, {"text": "\u6d2a\u96c5\u53bf", "value": "511423"}, {
            "text": "\u4e39\u68f1\u53bf",
            "value": "511424"
        }, {"text": "\u9752\u795e\u53bf", "value": "511425"}],
        "511500": [{"text": "\u5e02\u8f96\u533a", "value": "511501"}, {
            "text": "\u7fe0\u5c4f\u533a",
            "value": "511502"
        }, {"text": "\u5357\u6eaa\u533a", "value": "511503"}, {
            "text": "\u5b9c\u5bbe\u53bf",
            "value": "511521"
        }, {"text": "\u6c5f\u5b89\u53bf", "value": "511523"}, {
            "text": "\u957f\u5b81\u53bf",
            "value": "511524"
        }, {"text": "\u9ad8\u53bf", "value": "511525"}, {
            "text": "\u73d9\u53bf",
            "value": "511526"
        }, {"text": "\u7b60\u8fde\u53bf", "value": "511527"}, {
            "text": "\u5174\u6587\u53bf",
            "value": "511528"
        }, {"text": "\u5c4f\u5c71\u53bf", "value": "511529"}],
        "511600": [{"text": "\u5e02\u8f96\u533a", "value": "511601"}, {
            "text": "\u5e7f\u5b89\u533a",
            "value": "511602"
        }, {"text": "\u524d\u950b\u533a", "value": "511603"}, {
            "text": "\u5cb3\u6c60\u53bf",
            "value": "511621"
        }, {"text": "\u6b66\u80dc\u53bf", "value": "511622"}, {
            "text": "\u90bb\u6c34\u53bf",
            "value": "511623"
        }, {"text": "\u534e\u84e5\u5e02", "value": "511681"}],
        "511700": [{"text": "\u5e02\u8f96\u533a", "value": "511701"}, {
            "text": "\u901a\u5ddd\u533a",
            "value": "511702"
        }, {"text": "\u8fbe\u5ddd\u533a", "value": "511703"}, {
            "text": "\u5ba3\u6c49\u53bf",
            "value": "511722"
        }, {"text": "\u5f00\u6c5f\u53bf", "value": "511723"}, {
            "text": "\u5927\u7af9\u53bf",
            "value": "511724"
        }, {"text": "\u6e20\u53bf", "value": "511725"}, {"text": "\u4e07\u6e90\u5e02", "value": "511781"}],
        "511800": [{"text": "\u5e02\u8f96\u533a", "value": "511801"}, {
            "text": "\u96e8\u57ce\u533a",
            "value": "511802"
        }, {"text": "\u540d\u5c71\u533a", "value": "511803"}, {
            "text": "\u8365\u7ecf\u53bf",
            "value": "511822"
        }, {"text": "\u6c49\u6e90\u53bf", "value": "511823"}, {
            "text": "\u77f3\u68c9\u53bf",
            "value": "511824"
        }, {"text": "\u5929\u5168\u53bf", "value": "511825"}, {
            "text": "\u82a6\u5c71\u53bf",
            "value": "511826"
        }, {"text": "\u5b9d\u5174\u53bf", "value": "511827"}],
        "511900": [{"text": "\u5e02\u8f96\u533a", "value": "511901"}, {
            "text": "\u5df4\u5dde\u533a",
            "value": "511902"
        }, {"text": "\u6069\u9633\u533a", "value": "511903"}, {
            "text": "\u901a\u6c5f\u53bf",
            "value": "511921"
        }, {"text": "\u5357\u6c5f\u53bf", "value": "511922"}, {"text": "\u5e73\u660c\u53bf", "value": "511923"}],
        "512000": [{"text": "\u5e02\u8f96\u533a", "value": "512001"}, {
            "text": "\u96c1\u6c5f\u533a",
            "value": "512002"
        }, {"text": "\u5b89\u5cb3\u53bf", "value": "512021"}, {
            "text": "\u4e50\u81f3\u53bf",
            "value": "512022"
        }, {"text": "\u7b80\u9633\u5e02", "value": "512081"}],
        "513200": [{"text": "\u6c76\u5ddd\u53bf", "value": "513221"}, {
            "text": "\u7406\u53bf",
            "value": "513222"
        }, {"text": "\u8302\u53bf", "value": "513223"}, {
            "text": "\u677e\u6f58\u53bf",
            "value": "513224"
        }, {"text": "\u4e5d\u5be8\u6c9f\u53bf", "value": "513225"}, {
            "text": "\u91d1\u5ddd\u53bf",
            "value": "513226"
        }, {"text": "\u5c0f\u91d1\u53bf", "value": "513227"}, {
            "text": "\u9ed1\u6c34\u53bf",
            "value": "513228"
        }, {"text": "\u9a6c\u5c14\u5eb7\u53bf", "value": "513229"}, {
            "text": "\u58e4\u5858\u53bf",
            "value": "513230"
        }, {"text": "\u963f\u575d\u53bf", "value": "513231"}, {
            "text": "\u82e5\u5c14\u76d6\u53bf",
            "value": "513232"
        }, {"text": "\u7ea2\u539f\u53bf", "value": "513233"}],
        "513300": [{"text": "\u5eb7\u5b9a\u53bf", "value": "513321"}, {
            "text": "\u6cf8\u5b9a\u53bf",
            "value": "513322"
        }, {"text": "\u4e39\u5df4\u53bf", "value": "513323"}, {
            "text": "\u4e5d\u9f99\u53bf",
            "value": "513324"
        }, {"text": "\u96c5\u6c5f\u53bf", "value": "513325"}, {
            "text": "\u9053\u5b5a\u53bf",
            "value": "513326"
        }, {"text": "\u7089\u970d\u53bf", "value": "513327"}, {
            "text": "\u7518\u5b5c\u53bf",
            "value": "513328"
        }, {"text": "\u65b0\u9f99\u53bf", "value": "513329"}, {
            "text": "\u5fb7\u683c\u53bf",
            "value": "513330"
        }, {"text": "\u767d\u7389\u53bf", "value": "513331"}, {
            "text": "\u77f3\u6e20\u53bf",
            "value": "513332"
        }, {"text": "\u8272\u8fbe\u53bf", "value": "513333"}, {
            "text": "\u7406\u5858\u53bf",
            "value": "513334"
        }, {"text": "\u5df4\u5858\u53bf", "value": "513335"}, {
            "text": "\u4e61\u57ce\u53bf",
            "value": "513336"
        }, {"text": "\u7a3b\u57ce\u53bf", "value": "513337"}, {"text": "\u5f97\u8363\u53bf", "value": "513338"}],
        "513400": [{
            "text": "\u897f\u660c\u5e02",
            "value": "513401"
        }, {"text": "\u6728\u91cc\u85cf\u65cf\u81ea\u6cbb\u53bf", "value": "513422"}, {
            "text": "\u76d0\u6e90\u53bf",
            "value": "513423"
        }, {"text": "\u5fb7\u660c\u53bf", "value": "513424"}, {
            "text": "\u4f1a\u7406\u53bf",
            "value": "513425"
        }, {"text": "\u4f1a\u4e1c\u53bf", "value": "513426"}, {
            "text": "\u5b81\u5357\u53bf",
            "value": "513427"
        }, {"text": "\u666e\u683c\u53bf", "value": "513428"}, {
            "text": "\u5e03\u62d6\u53bf",
            "value": "513429"
        }, {"text": "\u91d1\u9633\u53bf", "value": "513430"}, {
            "text": "\u662d\u89c9\u53bf",
            "value": "513431"
        }, {"text": "\u559c\u5fb7\u53bf", "value": "513432"}, {
            "text": "\u5195\u5b81\u53bf",
            "value": "513433"
        }, {"text": "\u8d8a\u897f\u53bf", "value": "513434"}, {
            "text": "\u7518\u6d1b\u53bf",
            "value": "513435"
        }, {"text": "\u7f8e\u59d1\u53bf", "value": "513436"}, {"text": "\u96f7\u6ce2\u53bf", "value": "513437"}],
        "520100": [{"text": "\u5e02\u8f96\u533a", "value": "520101"}, {
            "text": "\u5357\u660e\u533a",
            "value": "520102"
        }, {"text": "\u4e91\u5ca9\u533a", "value": "520103"}, {
            "text": "\u82b1\u6eaa\u533a",
            "value": "520111"
        }, {"text": "\u4e4c\u5f53\u533a", "value": "520112"}, {
            "text": "\u767d\u4e91\u533a",
            "value": "520113"
        }, {"text": "\u89c2\u5c71\u6e56\u533a", "value": "520115"}, {
            "text": "\u5f00\u9633\u53bf",
            "value": "520121"
        }, {"text": "\u606f\u70fd\u53bf", "value": "520122"}, {
            "text": "\u4fee\u6587\u53bf",
            "value": "520123"
        }, {"text": "\u6e05\u9547\u5e02", "value": "520181"}],
        "520200": [{"text": "\u949f\u5c71\u533a", "value": "520201"}, {
            "text": "\u516d\u679d\u7279\u533a",
            "value": "520203"
        }, {"text": "\u6c34\u57ce\u53bf", "value": "520221"}, {"text": "\u76d8\u53bf", "value": "520222"}],
        "520300": [{"text": "\u5e02\u8f96\u533a", "value": "520301"}, {
            "text": "\u7ea2\u82b1\u5c97\u533a",
            "value": "520302"
        }, {"text": "\u6c47\u5ddd\u533a", "value": "520303"}, {
            "text": "\u9075\u4e49\u53bf",
            "value": "520321"
        }, {"text": "\u6850\u6893\u53bf", "value": "520322"}, {
            "text": "\u7ee5\u9633\u53bf",
            "value": "520323"
        }, {
            "text": "\u6b63\u5b89\u53bf",
            "value": "520324"
        }, {
            "text": "\u9053\u771f\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "520325"
        }, {
            "text": "\u52a1\u5ddd\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "520326"
        }, {"text": "\u51e4\u5188\u53bf", "value": "520327"}, {
            "text": "\u6e44\u6f6d\u53bf",
            "value": "520328"
        }, {"text": "\u4f59\u5e86\u53bf", "value": "520329"}, {
            "text": "\u4e60\u6c34\u53bf",
            "value": "520330"
        }, {"text": "\u8d64\u6c34\u5e02", "value": "520381"}, {"text": "\u4ec1\u6000\u5e02", "value": "520382"}],
        "520400": [{"text": "\u5e02\u8f96\u533a", "value": "520401"}, {
            "text": "\u897f\u79c0\u533a",
            "value": "520402"
        }, {"text": "\u5e73\u575d\u53bf", "value": "520421"}, {
            "text": "\u666e\u5b9a\u53bf",
            "value": "520422"
        }, {
            "text": "\u9547\u5b81\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "520423"
        }, {
            "text": "\u5173\u5cad\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "520424"
        }, {"text": "\u7d2b\u4e91\u82d7\u65cf\u5e03\u4f9d\u65cf\u81ea\u6cbb\u53bf", "value": "520425"}],
        "520500": [{"text": "\u5e02\u8f96\u533a", "value": "520501"}, {
            "text": "\u4e03\u661f\u5173\u533a",
            "value": "520502"
        }, {"text": "\u5927\u65b9\u53bf", "value": "520521"}, {
            "text": "\u9ed4\u897f\u53bf",
            "value": "520522"
        }, {"text": "\u91d1\u6c99\u53bf", "value": "520523"}, {
            "text": "\u7ec7\u91d1\u53bf",
            "value": "520524"
        }, {
            "text": "\u7eb3\u96cd\u53bf",
            "value": "520525"
        }, {
            "text": "\u5a01\u5b81\u5f5d\u65cf\u56de\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "520526"
        }, {"text": "\u8d6b\u7ae0\u53bf", "value": "520527"}],
        "520600": [{"text": "\u5e02\u8f96\u533a", "value": "520601"}, {
            "text": "\u78a7\u6c5f\u533a",
            "value": "520602"
        }, {"text": "\u4e07\u5c71\u533a", "value": "520603"}, {
            "text": "\u6c5f\u53e3\u53bf",
            "value": "520621"
        }, {"text": "\u7389\u5c4f\u4f97\u65cf\u81ea\u6cbb\u53bf", "value": "520622"}, {
            "text": "\u77f3\u9621\u53bf",
            "value": "520623"
        }, {
            "text": "\u601d\u5357\u53bf",
            "value": "520624"
        }, {
            "text": "\u5370\u6c5f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "520625"
        }, {
            "text": "\u5fb7\u6c5f\u53bf",
            "value": "520626"
        }, {
            "text": "\u6cbf\u6cb3\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
            "value": "520627"
        }, {"text": "\u677e\u6843\u82d7\u65cf\u81ea\u6cbb\u53bf", "value": "520628"}],
        "522300": [{"text": "\u5174\u4e49\u5e02", "value": "522301"}, {
            "text": "\u5174\u4ec1\u53bf",
            "value": "522322"
        }, {"text": "\u666e\u5b89\u53bf", "value": "522323"}, {
            "text": "\u6674\u9686\u53bf",
            "value": "522324"
        }, {"text": "\u8d1e\u4e30\u53bf", "value": "522325"}, {
            "text": "\u671b\u8c1f\u53bf",
            "value": "522326"
        }, {"text": "\u518c\u4ea8\u53bf", "value": "522327"}, {"text": "\u5b89\u9f99\u53bf", "value": "522328"}],
        "522600": [{"text": "\u51ef\u91cc\u5e02", "value": "522601"}, {
            "text": "\u9ec4\u5e73\u53bf",
            "value": "522622"
        }, {"text": "\u65bd\u79c9\u53bf", "value": "522623"}, {
            "text": "\u4e09\u7a57\u53bf",
            "value": "522624"
        }, {"text": "\u9547\u8fdc\u53bf", "value": "522625"}, {
            "text": "\u5c91\u5de9\u53bf",
            "value": "522626"
        }, {"text": "\u5929\u67f1\u53bf", "value": "522627"}, {
            "text": "\u9526\u5c4f\u53bf",
            "value": "522628"
        }, {"text": "\u5251\u6cb3\u53bf", "value": "522629"}, {
            "text": "\u53f0\u6c5f\u53bf",
            "value": "522630"
        }, {"text": "\u9ece\u5e73\u53bf", "value": "522631"}, {
            "text": "\u6995\u6c5f\u53bf",
            "value": "522632"
        }, {"text": "\u4ece\u6c5f\u53bf", "value": "522633"}, {
            "text": "\u96f7\u5c71\u53bf",
            "value": "522634"
        }, {"text": "\u9ebb\u6c5f\u53bf", "value": "522635"}, {"text": "\u4e39\u5be8\u53bf", "value": "522636"}],
        "522700": [{"text": "\u90fd\u5300\u5e02", "value": "522701"}, {
            "text": "\u798f\u6cc9\u5e02",
            "value": "522702"
        }, {"text": "\u8354\u6ce2\u53bf", "value": "522722"}, {
            "text": "\u8d35\u5b9a\u53bf",
            "value": "522723"
        }, {"text": "\u74ee\u5b89\u53bf", "value": "522725"}, {
            "text": "\u72ec\u5c71\u53bf",
            "value": "522726"
        }, {"text": "\u5e73\u5858\u53bf", "value": "522727"}, {
            "text": "\u7f57\u7538\u53bf",
            "value": "522728"
        }, {"text": "\u957f\u987a\u53bf", "value": "522729"}, {
            "text": "\u9f99\u91cc\u53bf",
            "value": "522730"
        }, {"text": "\u60e0\u6c34\u53bf", "value": "522731"}, {
            "text": "\u4e09\u90fd\u6c34\u65cf\u81ea\u6cbb\u53bf",
            "value": "522732"
        }],
        "530100": [{"text": "\u5e02\u8f96\u533a", "value": "530101"}, {
            "text": "\u4e94\u534e\u533a",
            "value": "530102"
        }, {"text": "\u76d8\u9f99\u533a", "value": "530103"}, {
            "text": "\u5b98\u6e21\u533a",
            "value": "530111"
        }, {"text": "\u897f\u5c71\u533a", "value": "530112"}, {
            "text": "\u4e1c\u5ddd\u533a",
            "value": "530113"
        }, {"text": "\u5448\u8d21\u533a", "value": "530114"}, {
            "text": "\u664b\u5b81\u53bf",
            "value": "530122"
        }, {"text": "\u5bcc\u6c11\u53bf", "value": "530124"}, {
            "text": "\u5b9c\u826f\u53bf",
            "value": "530125"
        }, {"text": "\u77f3\u6797\u5f5d\u65cf\u81ea\u6cbb\u53bf", "value": "530126"}, {
            "text": "\u5d69\u660e\u53bf",
            "value": "530127"
        }, {
            "text": "\u7984\u529d\u5f5d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
            "value": "530128"
        }, {
            "text": "\u5bfb\u7538\u56de\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "530129"
        }, {"text": "\u5b89\u5b81\u5e02", "value": "530181"}],
        "530300": [{"text": "\u5e02\u8f96\u533a", "value": "530301"}, {
            "text": "\u9e92\u9e9f\u533a",
            "value": "530302"
        }, {"text": "\u9a6c\u9f99\u53bf", "value": "530321"}, {
            "text": "\u9646\u826f\u53bf",
            "value": "530322"
        }, {"text": "\u5e08\u5b97\u53bf", "value": "530323"}, {
            "text": "\u7f57\u5e73\u53bf",
            "value": "530324"
        }, {"text": "\u5bcc\u6e90\u53bf", "value": "530325"}, {
            "text": "\u4f1a\u6cfd\u53bf",
            "value": "530326"
        }, {"text": "\u6cbe\u76ca\u53bf", "value": "530328"}, {"text": "\u5ba3\u5a01\u5e02", "value": "530381"}],
        "530400": [{"text": "\u5e02\u8f96\u533a", "value": "530401"}, {
            "text": "\u7ea2\u5854\u533a",
            "value": "530402"
        }, {"text": "\u6c5f\u5ddd\u53bf", "value": "530421"}, {
            "text": "\u6f84\u6c5f\u53bf",
            "value": "530422"
        }, {"text": "\u901a\u6d77\u53bf", "value": "530423"}, {
            "text": "\u534e\u5b81\u53bf",
            "value": "530424"
        }, {"text": "\u6613\u95e8\u53bf", "value": "530425"}, {
            "text": "\u5ce8\u5c71\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "530426"
        }, {
            "text": "\u65b0\u5e73\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
            "value": "530427"
        }, {"text": "\u5143\u6c5f\u54c8\u5c3c\u65cf\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf", "value": "530428"}],
        "530500": [{"text": "\u5e02\u8f96\u533a", "value": "530501"}, {
            "text": "\u9686\u9633\u533a",
            "value": "530502"
        }, {"text": "\u65bd\u7538\u53bf", "value": "530521"}, {
            "text": "\u817e\u51b2\u53bf",
            "value": "530522"
        }, {"text": "\u9f99\u9675\u53bf", "value": "530523"}, {"text": "\u660c\u5b81\u53bf", "value": "530524"}],
        "530600": [{"text": "\u5e02\u8f96\u533a", "value": "530601"}, {
            "text": "\u662d\u9633\u533a",
            "value": "530602"
        }, {"text": "\u9c81\u7538\u53bf", "value": "530621"}, {
            "text": "\u5de7\u5bb6\u53bf",
            "value": "530622"
        }, {"text": "\u76d0\u6d25\u53bf", "value": "530623"}, {
            "text": "\u5927\u5173\u53bf",
            "value": "530624"
        }, {"text": "\u6c38\u5584\u53bf", "value": "530625"}, {
            "text": "\u7ee5\u6c5f\u53bf",
            "value": "530626"
        }, {"text": "\u9547\u96c4\u53bf", "value": "530627"}, {
            "text": "\u5f5d\u826f\u53bf",
            "value": "530628"
        }, {"text": "\u5a01\u4fe1\u53bf", "value": "530629"}, {"text": "\u6c34\u5bcc\u53bf", "value": "530630"}],
        "530700": [{"text": "\u5e02\u8f96\u533a", "value": "530701"}, {
            "text": "\u53e4\u57ce\u533a",
            "value": "530702"
        }, {
            "text": "\u7389\u9f99\u7eb3\u897f\u65cf\u81ea\u6cbb\u53bf",
            "value": "530721"
        }, {"text": "\u6c38\u80dc\u53bf", "value": "530722"}, {
            "text": "\u534e\u576a\u53bf",
            "value": "530723"
        }, {"text": "\u5b81\u8497\u5f5d\u65cf\u81ea\u6cbb\u53bf", "value": "530724"}],
        "530800": [{"text": "\u5e02\u8f96\u533a", "value": "530801"}, {
            "text": "\u601d\u8305\u533a",
            "value": "530802"
        }, {
            "text": "\u5b81\u6d31\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "530821"
        }, {
            "text": "\u58a8\u6c5f\u54c8\u5c3c\u65cf\u81ea\u6cbb\u53bf",
            "value": "530822"
        }, {
            "text": "\u666f\u4e1c\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "530823"
        }, {
            "text": "\u666f\u8c37\u50a3\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "530824"
        }, {
            "text": "\u9547\u6c85\u5f5d\u65cf\u54c8\u5c3c\u65cf\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
            "value": "530825"
        }, {
            "text": "\u6c5f\u57ce\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "530826"
        }, {
            "text": "\u5b5f\u8fde\u50a3\u65cf\u62c9\u795c\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
            "value": "530827"
        }, {
            "text": "\u6f9c\u6ca7\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
            "value": "530828"
        }, {"text": "\u897f\u76df\u4f64\u65cf\u81ea\u6cbb\u53bf", "value": "530829"}],
        "530900": [{"text": "\u5e02\u8f96\u533a", "value": "530901"}, {
            "text": "\u4e34\u7fd4\u533a",
            "value": "530902"
        }, {"text": "\u51e4\u5e86\u53bf", "value": "530921"}, {
            "text": "\u4e91\u53bf",
            "value": "530922"
        }, {"text": "\u6c38\u5fb7\u53bf", "value": "530923"}, {
            "text": "\u9547\u5eb7\u53bf",
            "value": "530924"
        }, {
            "text": "\u53cc\u6c5f\u62c9\u795c\u65cf\u4f64\u65cf\u5e03\u6717\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
            "value": "530925"
        }, {
            "text": "\u803f\u9a6c\u50a3\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
            "value": "530926"
        }, {"text": "\u6ca7\u6e90\u4f64\u65cf\u81ea\u6cbb\u53bf", "value": "530927"}],
        "532300": [{"text": "\u695a\u96c4\u5e02", "value": "532301"}, {
            "text": "\u53cc\u67cf\u53bf",
            "value": "532322"
        }, {"text": "\u725f\u5b9a\u53bf", "value": "532323"}, {
            "text": "\u5357\u534e\u53bf",
            "value": "532324"
        }, {"text": "\u59da\u5b89\u53bf", "value": "532325"}, {
            "text": "\u5927\u59da\u53bf",
            "value": "532326"
        }, {"text": "\u6c38\u4ec1\u53bf", "value": "532327"}, {
            "text": "\u5143\u8c0b\u53bf",
            "value": "532328"
        }, {"text": "\u6b66\u5b9a\u53bf", "value": "532329"}, {"text": "\u7984\u4e30\u53bf", "value": "532331"}],
        "532500": [{"text": "\u4e2a\u65e7\u5e02", "value": "532501"}, {
            "text": "\u5f00\u8fdc\u5e02",
            "value": "532502"
        }, {"text": "\u8499\u81ea\u5e02", "value": "532503"}, {
            "text": "\u5f25\u52d2\u5e02",
            "value": "532504"
        }, {"text": "\u5c4f\u8fb9\u82d7\u65cf\u81ea\u6cbb\u53bf", "value": "532523"}, {
            "text": "\u5efa\u6c34\u53bf",
            "value": "532524"
        }, {"text": "\u77f3\u5c4f\u53bf", "value": "532525"}, {
            "text": "\u6cf8\u897f\u53bf",
            "value": "532527"
        }, {"text": "\u5143\u9633\u53bf", "value": "532528"}, {
            "text": "\u7ea2\u6cb3\u53bf",
            "value": "532529"
        }, {
            "text": "\u91d1\u5e73\u82d7\u65cf\u7476\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
            "value": "532530"
        }, {"text": "\u7eff\u6625\u53bf", "value": "532531"}, {
            "text": "\u6cb3\u53e3\u7476\u65cf\u81ea\u6cbb\u53bf",
            "value": "532532"
        }],
        "532600": [{"text": "\u6587\u5c71\u5e02", "value": "532601"}, {
            "text": "\u781a\u5c71\u53bf",
            "value": "532622"
        }, {"text": "\u897f\u7574\u53bf", "value": "532623"}, {
            "text": "\u9ebb\u6817\u5761\u53bf",
            "value": "532624"
        }, {"text": "\u9a6c\u5173\u53bf", "value": "532625"}, {
            "text": "\u4e18\u5317\u53bf",
            "value": "532626"
        }, {"text": "\u5e7f\u5357\u53bf", "value": "532627"}, {"text": "\u5bcc\u5b81\u53bf", "value": "532628"}],
        "532800": [{"text": "\u666f\u6d2a\u5e02", "value": "532801"}, {
            "text": "\u52d0\u6d77\u53bf",
            "value": "532822"
        }, {"text": "\u52d0\u814a\u53bf", "value": "532823"}],
        "532900": [{
            "text": "\u5927\u7406\u5e02",
            "value": "532901"
        }, {"text": "\u6f3e\u6fde\u5f5d\u65cf\u81ea\u6cbb\u53bf", "value": "532922"}, {
            "text": "\u7965\u4e91\u53bf",
            "value": "532923"
        }, {"text": "\u5bbe\u5ddd\u53bf", "value": "532924"}, {
            "text": "\u5f25\u6e21\u53bf",
            "value": "532925"
        }, {
            "text": "\u5357\u6da7\u5f5d\u65cf\u81ea\u6cbb\u53bf",
            "value": "532926"
        }, {
            "text": "\u5dcd\u5c71\u5f5d\u65cf\u56de\u65cf\u81ea\u6cbb\u53bf",
            "value": "532927"
        }, {"text": "\u6c38\u5e73\u53bf", "value": "532928"}, {
            "text": "\u4e91\u9f99\u53bf",
            "value": "532929"
        }, {"text": "\u6d31\u6e90\u53bf", "value": "532930"}, {
            "text": "\u5251\u5ddd\u53bf",
            "value": "532931"
        }, {"text": "\u9e64\u5e86\u53bf", "value": "532932"}],
        "533100": [{"text": "\u745e\u4e3d\u5e02", "value": "533102"}, {
            "text": "\u8292\u5e02",
            "value": "533103"
        }, {"text": "\u6881\u6cb3\u53bf", "value": "533122"}, {
            "text": "\u76c8\u6c5f\u53bf",
            "value": "533123"
        }, {"text": "\u9647\u5ddd\u53bf", "value": "533124"}],
        "533300": [{"text": "\u6cf8\u6c34\u53bf", "value": "533321"}, {
            "text": "\u798f\u8d21\u53bf",
            "value": "533323"
        }, {
            "text": "\u8d21\u5c71\u72ec\u9f99\u65cf\u6012\u65cf\u81ea\u6cbb\u53bf",
            "value": "533324"
        }, {"text": "\u5170\u576a\u767d\u65cf\u666e\u7c73\u65cf\u81ea\u6cbb\u53bf", "value": "533325"}],
        "533400": [{"text": "\u9999\u683c\u91cc\u62c9\u53bf", "value": "533421"}, {
            "text": "\u5fb7\u94a6\u53bf",
            "value": "533422"
        }, {"text": "\u7ef4\u897f\u5088\u50f3\u65cf\u81ea\u6cbb\u53bf", "value": "533423"}],
        "540100": [{"text": "\u5e02\u8f96\u533a", "value": "540101"}, {
            "text": "\u57ce\u5173\u533a",
            "value": "540102"
        }, {"text": "\u6797\u5468\u53bf", "value": "540121"}, {
            "text": "\u5f53\u96c4\u53bf",
            "value": "540122"
        }, {"text": "\u5c3c\u6728\u53bf", "value": "540123"}, {
            "text": "\u66f2\u6c34\u53bf",
            "value": "540124"
        }, {"text": "\u5806\u9f99\u5fb7\u5e86\u53bf", "value": "540125"}, {
            "text": "\u8fbe\u5b5c\u53bf",
            "value": "540126"
        }, {"text": "\u58a8\u7af9\u5de5\u5361\u53bf", "value": "540127"}],
        "542100": [{"text": "\u660c\u90fd\u53bf", "value": "542121"}, {
            "text": "\u6c5f\u8fbe\u53bf",
            "value": "542122"
        }, {"text": "\u8d21\u89c9\u53bf", "value": "542123"}, {
            "text": "\u7c7b\u4e4c\u9f50\u53bf",
            "value": "542124"
        }, {"text": "\u4e01\u9752\u53bf", "value": "542125"}, {
            "text": "\u5bdf\u96c5\u53bf",
            "value": "542126"
        }, {"text": "\u516b\u5bbf\u53bf", "value": "542127"}, {
            "text": "\u5de6\u8d21\u53bf",
            "value": "542128"
        }, {"text": "\u8292\u5eb7\u53bf", "value": "542129"}, {
            "text": "\u6d1b\u9686\u53bf",
            "value": "542132"
        }, {"text": "\u8fb9\u575d\u53bf", "value": "542133"}],
        "542200": [{"text": "\u4e43\u4e1c\u53bf", "value": "542221"}, {
            "text": "\u624e\u56ca\u53bf",
            "value": "542222"
        }, {"text": "\u8d21\u560e\u53bf", "value": "542223"}, {
            "text": "\u6851\u65e5\u53bf",
            "value": "542224"
        }, {"text": "\u743c\u7ed3\u53bf", "value": "542225"}, {
            "text": "\u66f2\u677e\u53bf",
            "value": "542226"
        }, {"text": "\u63aa\u7f8e\u53bf", "value": "542227"}, {
            "text": "\u6d1b\u624e\u53bf",
            "value": "542228"
        }, {"text": "\u52a0\u67e5\u53bf", "value": "542229"}, {
            "text": "\u9686\u5b50\u53bf",
            "value": "542231"
        }, {"text": "\u9519\u90a3\u53bf", "value": "542232"}, {"text": "\u6d6a\u5361\u5b50\u53bf", "value": "542233"}],
        "542300": [{"text": "\u65e5\u5580\u5219\u5e02", "value": "542301"}, {
            "text": "\u5357\u6728\u6797\u53bf",
            "value": "542322"
        }, {"text": "\u6c5f\u5b5c\u53bf", "value": "542323"}, {
            "text": "\u5b9a\u65e5\u53bf",
            "value": "542324"
        }, {"text": "\u8428\u8fe6\u53bf", "value": "542325"}, {
            "text": "\u62c9\u5b5c\u53bf",
            "value": "542326"
        }, {"text": "\u6602\u4ec1\u53bf", "value": "542327"}, {
            "text": "\u8c22\u901a\u95e8\u53bf",
            "value": "542328"
        }, {"text": "\u767d\u6717\u53bf", "value": "542329"}, {
            "text": "\u4ec1\u5e03\u53bf",
            "value": "542330"
        }, {"text": "\u5eb7\u9a6c\u53bf", "value": "542331"}, {
            "text": "\u5b9a\u7ed3\u53bf",
            "value": "542332"
        }, {"text": "\u4ef2\u5df4\u53bf", "value": "542333"}, {
            "text": "\u4e9a\u4e1c\u53bf",
            "value": "542334"
        }, {"text": "\u5409\u9686\u53bf", "value": "542335"}, {
            "text": "\u8042\u62c9\u6728\u53bf",
            "value": "542336"
        }, {"text": "\u8428\u560e\u53bf", "value": "542337"}, {"text": "\u5c97\u5df4\u53bf", "value": "542338"}],
        "542400": [{"text": "\u90a3\u66f2\u53bf", "value": "542421"}, {
            "text": "\u5609\u9ece\u53bf",
            "value": "542422"
        }, {"text": "\u6bd4\u5982\u53bf", "value": "542423"}, {
            "text": "\u8042\u8363\u53bf",
            "value": "542424"
        }, {"text": "\u5b89\u591a\u53bf", "value": "542425"}, {
            "text": "\u7533\u624e\u53bf",
            "value": "542426"
        }, {"text": "\u7d22\u53bf", "value": "542427"}, {
            "text": "\u73ed\u6208\u53bf",
            "value": "542428"
        }, {"text": "\u5df4\u9752\u53bf", "value": "542429"}, {
            "text": "\u5c3c\u739b\u53bf",
            "value": "542430"
        }, {"text": "\u53cc\u6e56\u53bf", "value": "542431"}],
        "542500": [{"text": "\u666e\u5170\u53bf", "value": "542521"}, {
            "text": "\u672d\u8fbe\u53bf",
            "value": "542522"
        }, {"text": "\u5676\u5c14\u53bf", "value": "542523"}, {
            "text": "\u65e5\u571f\u53bf",
            "value": "542524"
        }, {"text": "\u9769\u5409\u53bf", "value": "542525"}, {
            "text": "\u6539\u5219\u53bf",
            "value": "542526"
        }, {"text": "\u63aa\u52e4\u53bf", "value": "542527"}],
        "542600": [{"text": "\u6797\u829d\u53bf", "value": "542621"}, {
            "text": "\u5de5\u5e03\u6c5f\u8fbe\u53bf",
            "value": "542622"
        }, {"text": "\u7c73\u6797\u53bf", "value": "542623"}, {
            "text": "\u58a8\u8131\u53bf",
            "value": "542624"
        }, {"text": "\u6ce2\u5bc6\u53bf", "value": "542625"}, {
            "text": "\u5bdf\u9685\u53bf",
            "value": "542626"
        }, {"text": "\u6717\u53bf", "value": "542627"}],
        "610100": [{"text": "\u5e02\u8f96\u533a", "value": "610101"}, {
            "text": "\u65b0\u57ce\u533a",
            "value": "610102"
        }, {"text": "\u7891\u6797\u533a", "value": "610103"}, {
            "text": "\u83b2\u6e56\u533a",
            "value": "610104"
        }, {"text": "\u705e\u6865\u533a", "value": "610111"}, {
            "text": "\u672a\u592e\u533a",
            "value": "610112"
        }, {"text": "\u96c1\u5854\u533a", "value": "610113"}, {
            "text": "\u960e\u826f\u533a",
            "value": "610114"
        }, {"text": "\u4e34\u6f7c\u533a", "value": "610115"}, {
            "text": "\u957f\u5b89\u533a",
            "value": "610116"
        }, {"text": "\u84dd\u7530\u53bf", "value": "610122"}, {
            "text": "\u5468\u81f3\u53bf",
            "value": "610124"
        }, {"text": "\u6237\u53bf", "value": "610125"}, {"text": "\u9ad8\u9675\u53bf", "value": "610126"}],
        "610200": [{"text": "\u5e02\u8f96\u533a", "value": "610201"}, {
            "text": "\u738b\u76ca\u533a",
            "value": "610202"
        }, {"text": "\u5370\u53f0\u533a", "value": "610203"}, {
            "text": "\u8000\u5dde\u533a",
            "value": "610204"
        }, {"text": "\u5b9c\u541b\u53bf", "value": "610222"}],
        "610300": [{"text": "\u5e02\u8f96\u533a", "value": "610301"}, {
            "text": "\u6e2d\u6ee8\u533a",
            "value": "610302"
        }, {"text": "\u91d1\u53f0\u533a", "value": "610303"}, {
            "text": "\u9648\u4ed3\u533a",
            "value": "610304"
        }, {"text": "\u51e4\u7fd4\u53bf", "value": "610322"}, {
            "text": "\u5c90\u5c71\u53bf",
            "value": "610323"
        }, {"text": "\u6276\u98ce\u53bf", "value": "610324"}, {
            "text": "\u7709\u53bf",
            "value": "610326"
        }, {"text": "\u9647\u53bf", "value": "610327"}, {
            "text": "\u5343\u9633\u53bf",
            "value": "610328"
        }, {"text": "\u9e9f\u6e38\u53bf", "value": "610329"}, {
            "text": "\u51e4\u53bf",
            "value": "610330"
        }, {"text": "\u592a\u767d\u53bf", "value": "610331"}],
        "610400": [{"text": "\u5e02\u8f96\u533a", "value": "610401"}, {
            "text": "\u79e6\u90fd\u533a",
            "value": "610402"
        }, {"text": "\u6768\u9675\u533a", "value": "610403"}, {
            "text": "\u6e2d\u57ce\u533a",
            "value": "610404"
        }, {"text": "\u4e09\u539f\u53bf", "value": "610422"}, {
            "text": "\u6cfe\u9633\u53bf",
            "value": "610423"
        }, {"text": "\u4e7e\u53bf", "value": "610424"}, {
            "text": "\u793c\u6cc9\u53bf",
            "value": "610425"
        }, {"text": "\u6c38\u5bff\u53bf", "value": "610426"}, {
            "text": "\u5f6c\u53bf",
            "value": "610427"
        }, {"text": "\u957f\u6b66\u53bf", "value": "610428"}, {
            "text": "\u65ec\u9091\u53bf",
            "value": "610429"
        }, {"text": "\u6df3\u5316\u53bf", "value": "610430"}, {
            "text": "\u6b66\u529f\u53bf",
            "value": "610431"
        }, {"text": "\u5174\u5e73\u5e02", "value": "610481"}],
        "610500": [{"text": "\u5e02\u8f96\u533a", "value": "610501"}, {
            "text": "\u4e34\u6e2d\u533a",
            "value": "610502"
        }, {"text": "\u534e\u53bf", "value": "610521"}, {
            "text": "\u6f7c\u5173\u53bf",
            "value": "610522"
        }, {"text": "\u5927\u8354\u53bf", "value": "610523"}, {
            "text": "\u5408\u9633\u53bf",
            "value": "610524"
        }, {"text": "\u6f84\u57ce\u53bf", "value": "610525"}, {
            "text": "\u84b2\u57ce\u53bf",
            "value": "610526"
        }, {"text": "\u767d\u6c34\u53bf", "value": "610527"}, {
            "text": "\u5bcc\u5e73\u53bf",
            "value": "610528"
        }, {"text": "\u97e9\u57ce\u5e02", "value": "610581"}, {"text": "\u534e\u9634\u5e02", "value": "610582"}],
        "610600": [{"text": "\u5e02\u8f96\u533a", "value": "610601"}, {
            "text": "\u5b9d\u5854\u533a",
            "value": "610602"
        }, {"text": "\u5ef6\u957f\u53bf", "value": "610621"}, {
            "text": "\u5ef6\u5ddd\u53bf",
            "value": "610622"
        }, {"text": "\u5b50\u957f\u53bf", "value": "610623"}, {
            "text": "\u5b89\u585e\u53bf",
            "value": "610624"
        }, {"text": "\u5fd7\u4e39\u53bf", "value": "610625"}, {
            "text": "\u5434\u8d77\u53bf",
            "value": "610626"
        }, {"text": "\u7518\u6cc9\u53bf", "value": "610627"}, {
            "text": "\u5bcc\u53bf",
            "value": "610628"
        }, {"text": "\u6d1b\u5ddd\u53bf", "value": "610629"}, {
            "text": "\u5b9c\u5ddd\u53bf",
            "value": "610630"
        }, {"text": "\u9ec4\u9f99\u53bf", "value": "610631"}, {"text": "\u9ec4\u9675\u53bf", "value": "610632"}],
        "610700": [{"text": "\u5e02\u8f96\u533a", "value": "610701"}, {
            "text": "\u6c49\u53f0\u533a",
            "value": "610702"
        }, {"text": "\u5357\u90d1\u53bf", "value": "610721"}, {
            "text": "\u57ce\u56fa\u53bf",
            "value": "610722"
        }, {"text": "\u6d0b\u53bf", "value": "610723"}, {
            "text": "\u897f\u4e61\u53bf",
            "value": "610724"
        }, {"text": "\u52c9\u53bf", "value": "610725"}, {
            "text": "\u5b81\u5f3a\u53bf",
            "value": "610726"
        }, {"text": "\u7565\u9633\u53bf", "value": "610727"}, {
            "text": "\u9547\u5df4\u53bf",
            "value": "610728"
        }, {"text": "\u7559\u575d\u53bf", "value": "610729"}, {"text": "\u4f5b\u576a\u53bf", "value": "610730"}],
        "610800": [{"text": "\u5e02\u8f96\u533a", "value": "610801"}, {
            "text": "\u6986\u9633\u533a",
            "value": "610802"
        }, {"text": "\u795e\u6728\u53bf", "value": "610821"}, {
            "text": "\u5e9c\u8c37\u53bf",
            "value": "610822"
        }, {"text": "\u6a2a\u5c71\u53bf", "value": "610823"}, {
            "text": "\u9756\u8fb9\u53bf",
            "value": "610824"
        }, {"text": "\u5b9a\u8fb9\u53bf", "value": "610825"}, {
            "text": "\u7ee5\u5fb7\u53bf",
            "value": "610826"
        }, {"text": "\u7c73\u8102\u53bf", "value": "610827"}, {
            "text": "\u4f73\u53bf",
            "value": "610828"
        }, {"text": "\u5434\u5821\u53bf", "value": "610829"}, {
            "text": "\u6e05\u6da7\u53bf",
            "value": "610830"
        }, {"text": "\u5b50\u6d32\u53bf", "value": "610831"}],
        "610900": [{"text": "\u5e02\u8f96\u533a", "value": "610901"}, {
            "text": "\u6c49\u6ee8\u533a",
            "value": "610902"
        }, {"text": "\u6c49\u9634\u53bf", "value": "610921"}, {
            "text": "\u77f3\u6cc9\u53bf",
            "value": "610922"
        }, {"text": "\u5b81\u9655\u53bf", "value": "610923"}, {
            "text": "\u7d2b\u9633\u53bf",
            "value": "610924"
        }, {"text": "\u5c9a\u768b\u53bf", "value": "610925"}, {
            "text": "\u5e73\u5229\u53bf",
            "value": "610926"
        }, {"text": "\u9547\u576a\u53bf", "value": "610927"}, {
            "text": "\u65ec\u9633\u53bf",
            "value": "610928"
        }, {"text": "\u767d\u6cb3\u53bf", "value": "610929"}],
        "611000": [{"text": "\u5e02\u8f96\u533a", "value": "611001"}, {
            "text": "\u5546\u5dde\u533a",
            "value": "611002"
        }, {"text": "\u6d1b\u5357\u53bf", "value": "611021"}, {
            "text": "\u4e39\u51e4\u53bf",
            "value": "611022"
        }, {"text": "\u5546\u5357\u53bf", "value": "611023"}, {
            "text": "\u5c71\u9633\u53bf",
            "value": "611024"
        }, {"text": "\u9547\u5b89\u53bf", "value": "611025"}, {"text": "\u67de\u6c34\u53bf", "value": "611026"}],
        "620100": [{"text": "\u5e02\u8f96\u533a", "value": "620101"}, {
            "text": "\u57ce\u5173\u533a",
            "value": "620102"
        }, {"text": "\u4e03\u91cc\u6cb3\u533a", "value": "620103"}, {
            "text": "\u897f\u56fa\u533a",
            "value": "620104"
        }, {"text": "\u5b89\u5b81\u533a", "value": "620105"}, {
            "text": "\u7ea2\u53e4\u533a",
            "value": "620111"
        }, {"text": "\u6c38\u767b\u53bf", "value": "620121"}, {
            "text": "\u768b\u5170\u53bf",
            "value": "620122"
        }, {"text": "\u6986\u4e2d\u53bf", "value": "620123"}],
        "620200": [{"text": "\u5e02\u8f96\u533a", "value": "620201"}],
        "620300": [{"text": "\u5e02\u8f96\u533a", "value": "620301"}, {
            "text": "\u91d1\u5ddd\u533a",
            "value": "620302"
        }, {"text": "\u6c38\u660c\u53bf", "value": "620321"}],
        "620400": [{"text": "\u5e02\u8f96\u533a", "value": "620401"}, {
            "text": "\u767d\u94f6\u533a",
            "value": "620402"
        }, {"text": "\u5e73\u5ddd\u533a", "value": "620403"}, {
            "text": "\u9756\u8fdc\u53bf",
            "value": "620421"
        }, {"text": "\u4f1a\u5b81\u53bf", "value": "620422"}, {"text": "\u666f\u6cf0\u53bf", "value": "620423"}],
        "620500": [{"text": "\u5e02\u8f96\u533a", "value": "620501"}, {
            "text": "\u79e6\u5dde\u533a",
            "value": "620502"
        }, {"text": "\u9ea6\u79ef\u533a", "value": "620503"}, {
            "text": "\u6e05\u6c34\u53bf",
            "value": "620521"
        }, {"text": "\u79e6\u5b89\u53bf", "value": "620522"}, {
            "text": "\u7518\u8c37\u53bf",
            "value": "620523"
        }, {
            "text": "\u6b66\u5c71\u53bf",
            "value": "620524"
        }, {"text": "\u5f20\u5bb6\u5ddd\u56de\u65cf\u81ea\u6cbb\u53bf", "value": "620525"}],
        "620600": [{"text": "\u5e02\u8f96\u533a", "value": "620601"}, {
            "text": "\u51c9\u5dde\u533a",
            "value": "620602"
        }, {"text": "\u6c11\u52e4\u53bf", "value": "620621"}, {
            "text": "\u53e4\u6d6a\u53bf",
            "value": "620622"
        }, {"text": "\u5929\u795d\u85cf\u65cf\u81ea\u6cbb\u53bf", "value": "620623"}],
        "620700": [{"text": "\u5e02\u8f96\u533a", "value": "620701"}, {
            "text": "\u7518\u5dde\u533a",
            "value": "620702"
        }, {
            "text": "\u8083\u5357\u88d5\u56fa\u65cf\u81ea\u6cbb\u53bf",
            "value": "620721"
        }, {"text": "\u6c11\u4e50\u53bf", "value": "620722"}, {
            "text": "\u4e34\u6cfd\u53bf",
            "value": "620723"
        }, {"text": "\u9ad8\u53f0\u53bf", "value": "620724"}, {"text": "\u5c71\u4e39\u53bf", "value": "620725"}],
        "620800": [{"text": "\u5e02\u8f96\u533a", "value": "620801"}, {
            "text": "\u5d06\u5cd2\u533a",
            "value": "620802"
        }, {"text": "\u6cfe\u5ddd\u53bf", "value": "620821"}, {
            "text": "\u7075\u53f0\u53bf",
            "value": "620822"
        }, {"text": "\u5d07\u4fe1\u53bf", "value": "620823"}, {
            "text": "\u534e\u4ead\u53bf",
            "value": "620824"
        }, {"text": "\u5e84\u6d6a\u53bf", "value": "620825"}, {"text": "\u9759\u5b81\u53bf", "value": "620826"}],
        "620900": [{"text": "\u5e02\u8f96\u533a", "value": "620901"}, {
            "text": "\u8083\u5dde\u533a",
            "value": "620902"
        }, {"text": "\u91d1\u5854\u53bf", "value": "620921"}, {
            "text": "\u74dc\u5dde\u53bf",
            "value": "620922"
        }, {
            "text": "\u8083\u5317\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
            "value": "620923"
        }, {
            "text": "\u963f\u514b\u585e\u54c8\u8428\u514b\u65cf\u81ea\u6cbb\u53bf",
            "value": "620924"
        }, {"text": "\u7389\u95e8\u5e02", "value": "620981"}, {"text": "\u6566\u714c\u5e02", "value": "620982"}],
        "621000": [{"text": "\u5e02\u8f96\u533a", "value": "621001"}, {
            "text": "\u897f\u5cf0\u533a",
            "value": "621002"
        }, {"text": "\u5e86\u57ce\u53bf", "value": "621021"}, {
            "text": "\u73af\u53bf",
            "value": "621022"
        }, {"text": "\u534e\u6c60\u53bf", "value": "621023"}, {
            "text": "\u5408\u6c34\u53bf",
            "value": "621024"
        }, {"text": "\u6b63\u5b81\u53bf", "value": "621025"}, {
            "text": "\u5b81\u53bf",
            "value": "621026"
        }, {"text": "\u9547\u539f\u53bf", "value": "621027"}],
        "621100": [{"text": "\u5e02\u8f96\u533a", "value": "621101"}, {
            "text": "\u5b89\u5b9a\u533a",
            "value": "621102"
        }, {"text": "\u901a\u6e2d\u53bf", "value": "621121"}, {
            "text": "\u9647\u897f\u53bf",
            "value": "621122"
        }, {"text": "\u6e2d\u6e90\u53bf", "value": "621123"}, {
            "text": "\u4e34\u6d2e\u53bf",
            "value": "621124"
        }, {"text": "\u6f33\u53bf", "value": "621125"}, {"text": "\u5cb7\u53bf", "value": "621126"}],
        "621200": [{"text": "\u5e02\u8f96\u533a", "value": "621201"}, {
            "text": "\u6b66\u90fd\u533a",
            "value": "621202"
        }, {"text": "\u6210\u53bf", "value": "621221"}, {
            "text": "\u6587\u53bf",
            "value": "621222"
        }, {"text": "\u5b95\u660c\u53bf", "value": "621223"}, {
            "text": "\u5eb7\u53bf",
            "value": "621224"
        }, {"text": "\u897f\u548c\u53bf", "value": "621225"}, {
            "text": "\u793c\u53bf",
            "value": "621226"
        }, {"text": "\u5fbd\u53bf", "value": "621227"}, {"text": "\u4e24\u5f53\u53bf", "value": "621228"}],
        "622900": [{"text": "\u4e34\u590f\u5e02", "value": "622901"}, {
            "text": "\u4e34\u590f\u53bf",
            "value": "622921"
        }, {"text": "\u5eb7\u4e50\u53bf", "value": "622922"}, {
            "text": "\u6c38\u9756\u53bf",
            "value": "622923"
        }, {"text": "\u5e7f\u6cb3\u53bf", "value": "622924"}, {
            "text": "\u548c\u653f\u53bf",
            "value": "622925"
        }, {
            "text": "\u4e1c\u4e61\u65cf\u81ea\u6cbb\u53bf",
            "value": "622926"
        }, {
            "text": "\u79ef\u77f3\u5c71\u4fdd\u5b89\u65cf\u4e1c\u4e61\u65cf\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf",
            "value": "622927"
        }],
        "623000": [{"text": "\u5408\u4f5c\u5e02", "value": "623001"}, {
            "text": "\u4e34\u6f6d\u53bf",
            "value": "623021"
        }, {"text": "\u5353\u5c3c\u53bf", "value": "623022"}, {
            "text": "\u821f\u66f2\u53bf",
            "value": "623023"
        }, {"text": "\u8fed\u90e8\u53bf", "value": "623024"}, {
            "text": "\u739b\u66f2\u53bf",
            "value": "623025"
        }, {"text": "\u788c\u66f2\u53bf", "value": "623026"}, {"text": "\u590f\u6cb3\u53bf", "value": "623027"}],
        "630100": [{"text": "\u5e02\u8f96\u533a", "value": "630101"}, {
            "text": "\u57ce\u4e1c\u533a",
            "value": "630102"
        }, {"text": "\u57ce\u4e2d\u533a", "value": "630103"}, {
            "text": "\u57ce\u897f\u533a",
            "value": "630104"
        }, {
            "text": "\u57ce\u5317\u533a",
            "value": "630105"
        }, {
            "text": "\u5927\u901a\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
            "value": "630121"
        }, {"text": "\u6e5f\u4e2d\u53bf", "value": "630122"}, {"text": "\u6e5f\u6e90\u53bf", "value": "630123"}],
        "630200": [{"text": "\u4e50\u90fd\u533a", "value": "630202"}, {
            "text": "\u5e73\u5b89\u53bf",
            "value": "630221"
        }, {
            "text": "\u6c11\u548c\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
            "value": "630222"
        }, {
            "text": "\u4e92\u52a9\u571f\u65cf\u81ea\u6cbb\u53bf",
            "value": "630223"
        }, {
            "text": "\u5316\u9686\u56de\u65cf\u81ea\u6cbb\u53bf",
            "value": "630224"
        }, {"text": "\u5faa\u5316\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf", "value": "630225"}],
        "632200": [{
            "text": "\u95e8\u6e90\u56de\u65cf\u81ea\u6cbb\u53bf",
            "value": "632221"
        }, {"text": "\u7941\u8fde\u53bf", "value": "632222"}, {
            "text": "\u6d77\u664f\u53bf",
            "value": "632223"
        }, {"text": "\u521a\u5bdf\u53bf", "value": "632224"}],
        "632300": [{"text": "\u540c\u4ec1\u53bf", "value": "632321"}, {
            "text": "\u5c16\u624e\u53bf",
            "value": "632322"
        }, {
            "text": "\u6cfd\u5e93\u53bf",
            "value": "632323"
        }, {"text": "\u6cb3\u5357\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf", "value": "632324"}],
        "632500": [{"text": "\u5171\u548c\u53bf", "value": "632521"}, {
            "text": "\u540c\u5fb7\u53bf",
            "value": "632522"
        }, {"text": "\u8d35\u5fb7\u53bf", "value": "632523"}, {
            "text": "\u5174\u6d77\u53bf",
            "value": "632524"
        }, {"text": "\u8d35\u5357\u53bf", "value": "632525"}],
        "632600": [{"text": "\u739b\u6c81\u53bf", "value": "632621"}, {
            "text": "\u73ed\u739b\u53bf",
            "value": "632622"
        }, {"text": "\u7518\u5fb7\u53bf", "value": "632623"}, {
            "text": "\u8fbe\u65e5\u53bf",
            "value": "632624"
        }, {"text": "\u4e45\u6cbb\u53bf", "value": "632625"}, {"text": "\u739b\u591a\u53bf", "value": "632626"}],
        "632700": [{"text": "\u7389\u6811\u5e02", "value": "632701"}, {
            "text": "\u6742\u591a\u53bf",
            "value": "632722"
        }, {"text": "\u79f0\u591a\u53bf", "value": "632723"}, {
            "text": "\u6cbb\u591a\u53bf",
            "value": "632724"
        }, {"text": "\u56ca\u8c26\u53bf", "value": "632725"}, {"text": "\u66f2\u9ebb\u83b1\u53bf", "value": "632726"}],
        "632800": [{"text": "\u683c\u5c14\u6728\u5e02", "value": "632801"}, {
            "text": "\u5fb7\u4ee4\u54c8\u5e02",
            "value": "632802"
        }, {"text": "\u4e4c\u5170\u53bf", "value": "632821"}, {
            "text": "\u90fd\u5170\u53bf",
            "value": "632822"
        }, {"text": "\u5929\u5cfb\u53bf", "value": "632823"}],
        "640100": [{"text": "\u5e02\u8f96\u533a", "value": "640101"}, {
            "text": "\u5174\u5e86\u533a",
            "value": "640104"
        }, {"text": "\u897f\u590f\u533a", "value": "640105"}, {
            "text": "\u91d1\u51e4\u533a",
            "value": "640106"
        }, {"text": "\u6c38\u5b81\u53bf", "value": "640121"}, {
            "text": "\u8d3a\u5170\u53bf",
            "value": "640122"
        }, {"text": "\u7075\u6b66\u5e02", "value": "640181"}],
        "640200": [{"text": "\u5e02\u8f96\u533a", "value": "640201"}, {
            "text": "\u5927\u6b66\u53e3\u533a",
            "value": "640202"
        }, {"text": "\u60e0\u519c\u533a", "value": "640205"}, {"text": "\u5e73\u7f57\u53bf", "value": "640221"}],
        "640300": [{"text": "\u5e02\u8f96\u533a", "value": "640301"}, {
            "text": "\u5229\u901a\u533a",
            "value": "640302"
        }, {"text": "\u7ea2\u5bfa\u5821\u533a", "value": "640303"}, {
            "text": "\u76d0\u6c60\u53bf",
            "value": "640323"
        }, {"text": "\u540c\u5fc3\u53bf", "value": "640324"}, {"text": "\u9752\u94dc\u5ce1\u5e02", "value": "640381"}],
        "640400": [{"text": "\u5e02\u8f96\u533a", "value": "640401"}, {
            "text": "\u539f\u5dde\u533a",
            "value": "640402"
        }, {"text": "\u897f\u5409\u53bf", "value": "640422"}, {
            "text": "\u9686\u5fb7\u53bf",
            "value": "640423"
        }, {"text": "\u6cfe\u6e90\u53bf", "value": "640424"}, {"text": "\u5f6d\u9633\u53bf", "value": "640425"}],
        "640500": [{"text": "\u5e02\u8f96\u533a", "value": "640501"}, {
            "text": "\u6c99\u5761\u5934\u533a",
            "value": "640502"
        }, {"text": "\u4e2d\u5b81\u53bf", "value": "640521"}, {"text": "\u6d77\u539f\u53bf", "value": "640522"}],
        "650100": [{"text": "\u5e02\u8f96\u533a", "value": "650101"}, {
            "text": "\u5929\u5c71\u533a",
            "value": "650102"
        }, {"text": "\u6c99\u4f9d\u5df4\u514b\u533a", "value": "650103"}, {
            "text": "\u65b0\u5e02\u533a",
            "value": "650104"
        }, {"text": "\u6c34\u78e8\u6c9f\u533a", "value": "650105"}, {
            "text": "\u5934\u5c6f\u6cb3\u533a",
            "value": "650106"
        }, {"text": "\u8fbe\u5742\u57ce\u533a", "value": "650107"}, {
            "text": "\u7c73\u4e1c\u533a",
            "value": "650109"
        }, {"text": "\u4e4c\u9c81\u6728\u9f50\u53bf", "value": "650121"}],
        "650200": [{"text": "\u5e02\u8f96\u533a", "value": "650201"}, {
            "text": "\u72ec\u5c71\u5b50\u533a",
            "value": "650202"
        }, {"text": "\u514b\u62c9\u739b\u4f9d\u533a", "value": "650203"}, {
            "text": "\u767d\u78b1\u6ee9\u533a",
            "value": "650204"
        }, {"text": "\u4e4c\u5c14\u79be\u533a", "value": "650205"}],
        "652100": [{"text": "\u5410\u9c81\u756a\u5e02", "value": "652101"}, {
            "text": "\u912f\u5584\u53bf",
            "value": "652122"
        }, {"text": "\u6258\u514b\u900a\u53bf", "value": "652123"}],
        "652200": [{
            "text": "\u54c8\u5bc6\u5e02",
            "value": "652201"
        }, {
            "text": "\u5df4\u91cc\u5764\u54c8\u8428\u514b\u81ea\u6cbb\u53bf",
            "value": "652222"
        }, {"text": "\u4f0a\u543e\u53bf", "value": "652223"}],
        "652300": [{"text": "\u660c\u5409\u5e02", "value": "652301"}, {
            "text": "\u961c\u5eb7\u5e02",
            "value": "652302"
        }, {"text": "\u547c\u56fe\u58c1\u53bf", "value": "652323"}, {
            "text": "\u739b\u7eb3\u65af\u53bf",
            "value": "652324"
        }, {"text": "\u5947\u53f0\u53bf", "value": "652325"}, {
            "text": "\u5409\u6728\u8428\u5c14\u53bf",
            "value": "652327"
        }, {"text": "\u6728\u5792\u54c8\u8428\u514b\u81ea\u6cbb\u53bf", "value": "652328"}],
        "652700": [{"text": "\u535a\u4e50\u5e02", "value": "652701"}, {
            "text": "\u963f\u62c9\u5c71\u53e3\u5e02",
            "value": "652702"
        }, {"text": "\u7cbe\u6cb3\u53bf", "value": "652722"}, {"text": "\u6e29\u6cc9\u53bf", "value": "652723"}],
        "652800": [{"text": "\u5e93\u5c14\u52d2\u5e02", "value": "652801"}, {
            "text": "\u8f6e\u53f0\u53bf",
            "value": "652822"
        }, {"text": "\u5c09\u7281\u53bf", "value": "652823"}, {
            "text": "\u82e5\u7f8c\u53bf",
            "value": "652824"
        }, {"text": "\u4e14\u672b\u53bf", "value": "652825"}, {
            "text": "\u7109\u8006\u56de\u65cf\u81ea\u6cbb\u53bf",
            "value": "652826"
        }, {"text": "\u548c\u9759\u53bf", "value": "652827"}, {
            "text": "\u548c\u7855\u53bf",
            "value": "652828"
        }, {"text": "\u535a\u6e56\u53bf", "value": "652829"}],
        "652900": [{"text": "\u963f\u514b\u82cf\u5e02", "value": "652901"}, {
            "text": "\u6e29\u5bbf\u53bf",
            "value": "652922"
        }, {"text": "\u5e93\u8f66\u53bf", "value": "652923"}, {
            "text": "\u6c99\u96c5\u53bf",
            "value": "652924"
        }, {"text": "\u65b0\u548c\u53bf", "value": "652925"}, {
            "text": "\u62dc\u57ce\u53bf",
            "value": "652926"
        }, {"text": "\u4e4c\u4ec0\u53bf", "value": "652927"}, {
            "text": "\u963f\u74e6\u63d0\u53bf",
            "value": "652928"
        }, {"text": "\u67ef\u576a\u53bf", "value": "652929"}],
        "653000": [{"text": "\u963f\u56fe\u4ec0\u5e02", "value": "653001"}, {
            "text": "\u963f\u514b\u9676\u53bf",
            "value": "653022"
        }, {"text": "\u963f\u5408\u5947\u53bf", "value": "653023"}, {"text": "\u4e4c\u6070\u53bf", "value": "653024"}],
        "653100": [{"text": "\u5580\u4ec0\u5e02", "value": "653101"}, {
            "text": "\u758f\u9644\u53bf",
            "value": "653121"
        }, {"text": "\u758f\u52d2\u53bf", "value": "653122"}, {
            "text": "\u82f1\u5409\u6c99\u53bf",
            "value": "653123"
        }, {"text": "\u6cfd\u666e\u53bf", "value": "653124"}, {
            "text": "\u838e\u8f66\u53bf",
            "value": "653125"
        }, {"text": "\u53f6\u57ce\u53bf", "value": "653126"}, {
            "text": "\u9ea6\u76d6\u63d0\u53bf",
            "value": "653127"
        }, {"text": "\u5cb3\u666e\u6e56\u53bf", "value": "653128"}, {
            "text": "\u4f3d\u5e08\u53bf",
            "value": "653129"
        }, {
            "text": "\u5df4\u695a\u53bf",
            "value": "653130"
        }, {"text": "\u5854\u4ec0\u5e93\u5c14\u5e72\u5854\u5409\u514b\u81ea\u6cbb\u53bf", "value": "653131"}],
        "653200": [{"text": "\u548c\u7530\u5e02", "value": "653201"}, {
            "text": "\u548c\u7530\u53bf",
            "value": "653221"
        }, {"text": "\u58a8\u7389\u53bf", "value": "653222"}, {
            "text": "\u76ae\u5c71\u53bf",
            "value": "653223"
        }, {"text": "\u6d1b\u6d66\u53bf", "value": "653224"}, {
            "text": "\u7b56\u52d2\u53bf",
            "value": "653225"
        }, {"text": "\u4e8e\u7530\u53bf", "value": "653226"}, {"text": "\u6c11\u4e30\u53bf", "value": "653227"}],
        "654000": [{"text": "\u4f0a\u5b81\u5e02", "value": "654002"}, {
            "text": "\u594e\u5c6f\u5e02",
            "value": "654003"
        }, {
            "text": "\u4f0a\u5b81\u53bf",
            "value": "654021"
        }, {
            "text": "\u5bdf\u5e03\u67e5\u5c14\u9521\u4f2f\u81ea\u6cbb\u53bf",
            "value": "654022"
        }, {"text": "\u970d\u57ce\u53bf", "value": "654023"}, {
            "text": "\u5de9\u7559\u53bf",
            "value": "654024"
        }, {"text": "\u65b0\u6e90\u53bf", "value": "654025"}, {
            "text": "\u662d\u82cf\u53bf",
            "value": "654026"
        }, {"text": "\u7279\u514b\u65af\u53bf", "value": "654027"}, {
            "text": "\u5c3c\u52d2\u514b\u53bf",
            "value": "654028"
        }],
        "654200": [{"text": "\u5854\u57ce\u5e02", "value": "654201"}, {
            "text": "\u4e4c\u82cf\u5e02",
            "value": "654202"
        }, {"text": "\u989d\u654f\u53bf", "value": "654221"}, {
            "text": "\u6c99\u6e7e\u53bf",
            "value": "654223"
        }, {"text": "\u6258\u91cc\u53bf", "value": "654224"}, {
            "text": "\u88d5\u6c11\u53bf",
            "value": "654225"
        }, {"text": "\u548c\u5e03\u514b\u8d5b\u5c14\u8499\u53e4\u81ea\u6cbb\u53bf", "value": "654226"}],
        "654300": [{"text": "\u963f\u52d2\u6cf0\u5e02", "value": "654301"}, {
            "text": "\u5e03\u5c14\u6d25\u53bf",
            "value": "654321"
        }, {"text": "\u5bcc\u8574\u53bf", "value": "654322"}, {
            "text": "\u798f\u6d77\u53bf",
            "value": "654323"
        }, {"text": "\u54c8\u5df4\u6cb3\u53bf", "value": "654324"}, {
            "text": "\u9752\u6cb3\u53bf",
            "value": "654325"
        }, {"text": "\u5409\u6728\u4e43\u53bf", "value": "654326"}],
        "659000": [{"text": "\u77f3\u6cb3\u5b50\u5e02", "value": "659001"}, {
            "text": "\u963f\u62c9\u5c14\u5e02",
            "value": "659002"
        }, {"text": "\u56fe\u6728\u8212\u514b\u5e02", "value": "659003"}, {
            "text": "\u4e94\u5bb6\u6e20\u5e02",
            "value": "659004"
        }]
    };