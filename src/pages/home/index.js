// 获取应用实例
const dateUtil = require('../../utils/date.js');
const app = getApp();

Page({
    data: {
        days: '',
        weeks: '',
        months: '',
        years: '',
        list: [{
            status: 'underway',
            times: [{
                top: '0',
                text: '10:00',
            }, {
                top: '50%',
                text: '11:00',
            }, {
                top: '100%',
                text: '12:00',
            }, ],
            tasks: [{
                title: '有时，在一些数据字段被 setData 设',
                status: 2,
            }, {
                title: '有时，在一些数据字段被 setData 设',
                status: 2,
            }, ]
        }, {
            status: 'past',
            times: [{
                top: '0',
                text: '10:00',
            }, {
                top: '50%',
                text: '11:00',
            }, {
                top: '100%',
                text: '12:00',
            }, ],
            tasks: [{
                title: '有时，在一些数据字段被 setData 设',
                status: 2,
            }, {
                title: '有时，在一些数据字段被 setData 设',
                status: 2,
            }, ]
        }]
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const {
            days,
            weeks,
            months,
            years,
        } = this.getCurtDateInfo();
        this.setData({
            days,
            weeks: dateUtil.getWeekDesc(weeks),
            months: dateUtil.getMonthDesc(months),
            years,
        });
        console.log(new Date('2019-4-2'))
    },
    /**
     * 事件处理
     */
    goToAddTask() {
        wx.navigateTo({
            url: '/pages/task/add/add'
        })
    },
    /**
     * 操作处理
     */
    getCurtDateInfo() {
        const now = new Date();
        return {
            days: now.getDate(),
            weeks: now.getDay(),
            months: now.getMonth() + 1,
            years: now.getFullYear(),
        }
    },
    getTasksByDate(date) {
        const tasks = wx.getStorageSync('tasks') || {};
        return tasks[date] || [];
    },
})
