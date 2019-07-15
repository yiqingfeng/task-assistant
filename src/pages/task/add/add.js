const {
    formatDate,
} = require('../../../utils/date.js');

Page({
    /**
     * 页面的初始数据
     */
    data: {
        showTopTips: false,
        title: '',
        isIgnoreTime: false,
        date: '',
        showTimeError: false,
        startTime: '',
        endTime: '',
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const now = new Date();
        this.setData({
            date: formatDate(now, 'yyyy-MM-dd'),
            startTime: formatDate(now, 'hh:mm'),
            endTime: formatDate(now, 'hh:mm'),
        });
    },
    /**
     * ---------------------------------------------------------------
     * 事件处理
     * ---------------------------------------------------------------
     */
    bindDateChange(e) {
        this.setData({
            date: e.detail.value,
        });
    },
    bindStartTimeChange(e) {
        let startTime = e.detail.value;
        if (startTime > this.data.endTime) {

        }
        this.setData({
            startTime: e.detail.value,
        });
    },
    bindEndTimeChange(e) {
        this.setData({
            endTime: e.detail.value,
        });
    },
    submit() {

    }
})
