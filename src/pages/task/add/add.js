const {
    formatDate,
    time2minute,
    afterHours,
} = require('../../../utils/date');
const {
    addTask
} = require('../../../utils/storage');

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
            endTime: formatDate(afterHours(now, 1), 'hh:mm'),
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
            showTimeError,
        } = this.data;
        let formFull = true;
        if (!title) {
            formFull = false;
        }
        if (showTimeError || (time2minute(startTime) > time2minute(endTime))) {
            formFull = false;
        }
        this.setData({
            formFull,
        });
        return formFull;
    },
    /**
     * ---------------------------------------------------------------
     * 事件处理
     * ---------------------------------------------------------------
     */
    bindShowTimeError(e) {
        wx.showModal({
            content: '结束时间不能在开始时间之前，请重新设置',
            showCancel: false,
            // success: function (res) {
            //     if (res.confirm) {
            //     }
            // }
        });
    },
    bindTitleChange(e) {
        this.setData({
            title: e.detail.value,
        });
        this.vaildateForm();
    },
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
        this.vaildateForm();
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
        this.vaildateForm();
    },
    submit() {
        if (!this.vaildateForm()) return;
        let {
            title,
            isIgnoreTime,
            date,
            startTime,
            endTime,
        } = this.data;
        startTime = time2minute(startTime);
        endTime = time2minute(endTime);
        addTask({
            title,
            isIgnoreTime,
            date,
            startTime,
            endTime,
            status: 1, // 1 未开始 2 已完成 3 已作废
        }).then(() => {
            wx.showToast({
                title: '添加成功',
                duration: 1000,
                complete() {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            });
        }).catch(err => {
            console.log(err);
            wx.showToast({
                icon: 'none',
                title: '添加失败',
                duration: 1000
            });
        })
    }
})
