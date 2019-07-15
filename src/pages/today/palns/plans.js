// pages/today/palns/plans.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        status: 'underway',
        times: [
          {
            top: '0',
            text: '10:00',
          },
          {
            top: '50%',
            text: '11:00',
          },
          {
            top: '100%',
            text: '12:00',
          },
        ],
        tasks: [
          {
            title: '有时，在一些数据字段被 setData 设',
            status: 2,
          },
          {
            title: '有时，在一些数据字段被 setData 设',
            status: 2,
          },
        ]
      },
      {
        status: 'past',
        times: [
          {
            top: '0',
            text: '10:00',
          },
          {
            top: '50%',
            text: '11:00',
          },
          {
            top: '100%',
            text: '12:00',
          },
        ],
        tasks: [
          {
            title: '有时，在一些数据字段被 setData 设',
            status: 2,
          },
          {
            title: '有时，在一些数据字段被 setData 设',
            status: 2,
          },
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})