// miniprogram/pages/3/3.js
Page({
data:{
  state:0
},
  gomusic: function () {
    wx.navigateTo({
      url: '../shilian/music/music'
    })
    this.setData({ state: 1 })
  },
  gotext: function () {
    wx.navigateTo({
      url: '../shilian/text/text'
    })
    this.setData({ state: 1 })
  },
  gogogo: function () {
    wx.navigateTo({
      url: '../investigation/investigation'
    })
  },
})