import React from 'React';

function main () {
    // console.log(React);
    var cId = '5';
    var data = [
        {
            "id": "2",
            "name": "辽宁省",
            "parent_id": "0",
            "son": [
                {
                    "id": "3",
                    "name": "大连市",
                    "parent_id": "2",
                    "son": [
                        {
                            "id": "5",
                            "name": "大连火车站",
                            "parent_id": "3"
                        },
                        {
                            "id": "8",
                            "name": "大连北站",
                            "parent_id": "3"
                        },
                        {
                            "id": "22",
                            "name": "大连周水子国际机场",
                            "parent_id": "21"
                        },
                        {
                            "id": "881",
                            "name": "金州火车站",
                            "parent_id": "880"
                        },
                        {
                            "id": "1009",
                            "name": "杏树屯站",
                            "parent_id": "1008"
                        },
                        {
                            "id": "1013",
                            "name": "登沙河站",
                            "parent_id": "1012"
                        },
                        {
                            "id": "1039",
                            "name": "工厂",
                            "parent_id": "1038"
                        },
                        {
                            "id": "1132",
                            "name": "甘井子市民健身中心",
                            "parent_id": "1131"
                        }
                    ]
                },
                {
                    "id": "17",
                    "name": "庄河市",
                    "parent_id": "2",
                    "son": [
                        {
                            "id": "19",
                            "name": "庄河北站",
                            "parent_id": "18"
                        },
                        {
                            "id": "997",
                            "name": "花园口站",
                            "parent_id": "18"
                        }
                    ]
                },
                {
                    "id": "944",
                    "name": "营口市",
                    "parent_id": "2",
                    "son": [
                        {
                            "id": "947",
                            "name": "营口东站",
                            "parent_id": "945"
                        },
                        {
                            "id": "960",
                            "name": "鲅鱼圈站",
                            "parent_id": "959"
                        },
                        {
                            "id": "1026",
                            "name": "熊岳城站",
                            "parent_id": "1025"
                        }
                    ]
                },
                {
                    "id": "952",
                    "name": "盖州市",
                    "parent_id": "2",
                    "son": [
                        {
                            "id": "954",
                            "name": "盖州西站",
                            "parent_id": "953"
                        }
                    ]
                },
                {
                    "id": "965",
                    "name": "瓦房店市",
                    "parent_id": "2",
                    "son": [
                        {
                            "id": "967",
                            "name": "瓦房店西站",
                            "parent_id": "966"
                        },
                        {
                            "id": "1029",
                            "name": "瓦房店站",
                            "parent_id": "1028"
                        }
                    ]
                },
                {
                    "id": "970",
                    "name": "普兰店市",
                    "parent_id": "2",
                    "son": [
                        {
                            "id": "972",
                            "name": "普湾站",
                            "parent_id": "971"
                        },
                        {
                            "id": "1001",
                            "name": "城子坦站",
                            "parent_id": "1000"
                        },
                        {
                            "id": "1005",
                            "name": "皮口站",
                            "parent_id": "1004"
                        },
                        {
                            "id": "1032",
                            "name": "普兰店站",
                            "parent_id": "1031"
                        }
                    ]
                }
            ]
        },
        {
            "id": "52",
            "name": "江苏省",
            "parent_id": "0",
            "son": [
                {
                    "id": "53",
                    "name": "泰州市",
                    "parent_id": "52",
                    "son": [
                        {
                            "id": "55",
                            "name": "京泰客运站",
                            "parent_id": "54"
                        },
                        {
                            "id": "57",
                            "name": "泰州客运站",
                            "parent_id": "54"
                        },
                        {
                            "id": "1473",
                            "name": "泰兴汽车客运站",
                            "parent_id": "1472"
                        }
                    ]
                },
                {
                    "id": "60",
                    "name": "扬州市",
                    "parent_id": "52",
                    "son": [
                        {
                            "id": "62",
                            "name": "扬泰机场",
                            "parent_id": "61"
                        },
                        {
                            "id": "755",
                            "name": "扬州客运站（扬州客运站西站）",
                            "parent_id": "754"
                        },
                        {
                            "id": "1078",
                            "name": "扬州汽车客运东站",
                            "parent_id": "754"
                        }
                    ]
                },
                {
                    "id": "741",
                    "name": "南京市",
                    "parent_id": "52",
                    "son": [
                        {
                            "id": "743",
                            "name": "南京小红山汽车站",
                            "parent_id": "742"
                        },
                        {
                            "id": "1086",
                            "name": "南京南客运站",
                            "parent_id": "742"
                        },
                        {
                            "id": "782",
                            "name": "南京禄口机场",
                            "parent_id": "781"
                        }
                    ]
                }
            ]
        }
        ];
    


    function filterSon (data, cId) {
        let filterData = data.filter((item) => {
            return item.id === cId;
        })
        let itemObj = filterData.length && filterData[0];

        if (typeof itemObj === 'object') {

        } else {
            data.forEach((item) => {
                filterData(item.son, )
            })
        }
    }
}