// miniprogram/pages/4/4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   state:0,
   a:0,
   b:0
  },
  michuan: function () {
    this.setData({ state: 1 })
  },

music: function () {
    this.setData({ state: 2 })
  },
  gomusic: function () {
    wx.navigateTo({
      url: '../shimian/music/music'
    })
  },
  gogogo: function () {
    wx.navigateTo({
      url: '../investigation/investigation'
    })
  },
  he:function () {
    this.setData({ a: this.data.a + 1 })
  },
  hehe: function () {
    this.setData({ b: this.data.b + 1 })
  },
  tingli:function() {
    wx.navigateTo({
      url: '../shimian/tingli/tingli'
    })
  },
  xiangsheng: function () {
    wx.navigateTo({
      url: '../shimian/xiangsheng/xiangsheng'
    })
  },
})