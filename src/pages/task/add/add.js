const {
    formatDate,
    time2minute,
    minute2time,
} = require('../../../utils/date.js');
const _ = require('../../../libs/lodash');

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
        formFull: false,
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
     * 表单完整性验证
     */
    vaildateForm() {
        const {
            title,
            startTime,
            endTime,
        } = this.data;
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
    bindIsIgnoreTimeChange(e) {
        this.setData({
            isIgnoreTime: e.detail.value,
        })
    },
    bindStartTimeChange(e) {
        let startTime = e.detail.value;
        let endTime = this.data.endTime;
        let showTimeError = false;
        if (time2minute(startTime) > time2minute(endTime)) {
            showTimeError = true;
        }
        this.setData({
            startTime,
            showTimeError,
        });
    },
    bindEndTimeChange(e) {
        let startTime = this.data.startTime;
        let endTime = e.detail.value;
        let showTimeError = false;
        if (time2minute(startTime) > time2minute(endTime)) {
            showTimeError = true;
        }
        this.setData({
            endTime,
            showTimeError,
        });
    },
    submit() {
        console.log('12');
    }
})
