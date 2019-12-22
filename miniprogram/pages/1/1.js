// miniprogram/pages/1/1.js
Page({
data:{
state:0,
more:0
},

images:function(){
this.setData({state:1})
},

 videos: function () {
    this.setData({ state:2 })
  },

  texts: function () {
    this.setData({ state:3 })
  },
  what: function () {
    this.setData({ state: 4 })
  },

  more:function(){
this.setData({more:this.data.more+1})

  },

  gobilibili:function() {
    wx.navigateTo({
      url: '../qiangpozheng/bilibili/bilibili'
    })
    },
  gotiktok:function() {
    wx.navigateTo({
      url: '../qiangpozheng/tiktok/tiktok'
    })
    },
  goaiqiyi: function () {
    wx.navigateTo({
      url: '../qiangpozheng/tencent/tencent'
    })
  },
  gobaidu: function () {
    wx.navigateTo({
      url: '../qiangpozheng/baidu/baidu'
    })
  },
  gosecond: function () {
    wx.navigateTo({
      url: '../qiangpozheng/second/second'
    })
  },
  go: function () {
    wx.navigateTo({
      url: '../qiangpozheng/music/music'
    })
  },
  gogogo: function () {
    wx.navigateTo({
      url: '../investigation/investigation'
    })
  },
})
