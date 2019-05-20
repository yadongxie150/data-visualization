const data = [
  {
    year: "1991",
    value: 8,
  },
  {
    year: "1992",
    value: 4,
  },
  {
    year: "1993",
    value: 3.5,
  },
  {
    year: "1994",
    value: 5,
  },
  {
    year: "1995",
    value: 4.9,
  },
  {
    year: "1996",
    value: 10,
  },
  {
    year: "1997",
    value: 7,
  },
]

const stackData = [
  {
    year: '1991',
    money: 12,
    stack: '广告1', // 根据第一份数据的stack确定顺序
  },
  {
    year: '1991',
    money: 18,
    stack: '广告2',
  },
  {
    year: '1991',
    money: 40,
    stack: '广告3',
  },
  {
    year: '1992',
    money: 15,
    stack: '广告1',
  },
  {
    year: '1992',
    money: 20,
    stack: '广告2',
  },
  {
    year: '1992',
    money: 30,
    stack: '广告3',
  },
  {
    year: '1993',
    money: 18,
    stack: '广告1',
  },
  {
    year: '1993',
    money: 40,
    stack: '广告2',
  },
  {
    year: '1993',
    money: 22,
    stack: '广告3',
  },
  {
    year: '1994',
    money: 10,
    stack: '广告1',
  },
  {
    year: '1994',
    money: 60,
    stack: '广告2',
  },
  {
    year: '1994',
    money: 24,
    stack: '广告3',
  },
]

const treeData = [
  {
    name: 'node1',
    value: 100,
    children: [
      {
        name: 'node11',
        value: 10,
      },
      {
        name: 'node12',
        value: 60,
        children: [
          {
            name: 'node121',
            value: 10,
          },
          {
            name: 'node122',
            value: 30,
          },
        ],
      },
    ],
  },
  {
    name: 'node2',
    value: 200,
    children: [
      {
        name: 'node21',
        value: 100,
        children: [
          {
            name: 'node211',
            value: 30,
          },
        ],
      },
      {
        name: 'node22',
        value: 100,
      },
    ],
  },
  {
    name: 'node3',
    value: 160,
  },
]

const mapData = [{ "name": "广东", "value": 0.14 }, { "name": "北京", "value": 0.08 }, { "name": "江苏", "value": 0.08 }, { "name": "上海", "value": 0.07 }, { "name": "浙江", "value": 0.06 }, { "name": "四川", "value": 0.05 }, { "name": "山东", "value": 0.05 }, { "name": "湖北", "value": 0.05 }, { "name": "海外", "value": 0.04 }, { "name": "河南", "value": 0.04 }, { "name": "陕西", "value": 0.03 }, { "name": "湖南", "value": 0.03 }, { "name": "安徽", "value": 0.03 }, { "name": "河北", "value": 0.03 }, { "name": "福建", "value": 0.03 }, { "name": "重庆", "value": 0.02 }, { "name": "江西", "value": 0.02 }, { "name": "山西", "value": 0.02 }, { "name": "广西", "value": 0.02 }, { "name": "辽宁", "value": 0.02 }, { "name": "云南", "value": 0.01 }, { "name": "内蒙古", "value": 0.01 }, { "name": "新疆", "value": 0.01 }, { "name": "甘肃", "value": 0.01 }, { "name": "黑龙江", "value": 0.01 }, { "name": "贵州", "value": 0.01 }, { "name": "吉林", "value": 0.01 }, { "name": "天津", "value": 0.01 }, { "name": "海南", "value": 0.0 }, { "name": "香港", "value": 0.0 }, { "name": "宁夏", "value": 0.0 }, { "name": "青海", "value": 0.0 }, { "name": "台湾", "value": 0.0 }, { "name": "西藏", "value": 0.0 }, { "name": "澳门", "value": 0.0 }]

export {
  data,
  stackData,
  treeData,
  mapData,
}
