// miniprogram/pages/2/2.js
Page({
  data:{
  day:0,
  state:0
  },
  gobili: function () {
    wx.navigateTo({
      url: '../shufen/bilibili/bilibili'
    })
    this.setData({ state:1 })
  },
  ziliao: function () {
    wx.navigateTo({
      url: '../shufen/ziliao/ziliao'
    })
    this.setData({ state: 1 })
  },
  gogogo: function () {
    wx.navigateTo({
      url: '../investigation/investigation'
    })
  },
   gofangfa: function () {
    wx.navigateTo({
      url: '../shufen/fangfa/fangfa'
    })
    this.setData({ state: 1 })
  },

  daka: function () { this.setData({ day: this.data.day + 1 })
    this.setData({ state: 1 }) },


  upload:function (){
   
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //初始化数据库
    const db = wx.cloud.database()
    //向数据库添加一条记录
    db.collection('hello').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        day: this.data.day,
        tag: 1
      },


      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
      },
reload:function(){
  var _this = this;
  wx.cloud.callFunction({
    // 云函数名称
    name: 'search',
    // 传给云函数的参数
    data: {
      tag: 1
    },
    success: function (res) {
      console.log(res.result)
      _this.setData({
        day: res.result.data[0].day
      })
    },
    fail: console.error
  })


}

})
 
