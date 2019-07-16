// 获取应用实例
const {
    getDateInfo,
    getWeekDesc,
    getMonthDesc,
} = require('../../utils/date.js');
const {
    getAllTasks,
} = require('../../utils/storage');
const {
    parseTasks,
} = require('../../utils/format');

const app = getApp();

Page({
    data: {
        days: '',
        weeks: '',
        months: '',
        years: '',
        ignoreTimeTasks: [],
        timeLineTasks: [],
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },
    onShow() {
        const {
            days,
            weeks,
            months,
            years,
        } = getDateInfo();
        this.getTasksByDate(`${years}-${months}-${days}`)
            .then(({ignoreTimeTasks, timeLineTasks}) => {
                console.log(timeLineTasks);
                this.setData({
                    days,
                    weeks: getWeekDesc(weeks),
                    months: getMonthDesc(months),
                    years,
                    ignoreTimeTasks,
                    timeLineTasks,
                });
            })
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
    getTasksByDate(date) {
        return new Promise((resolve, reject) => {
            getAllTasks()
                .then(data => {
                    resolve(parseTasks(data[date] || []));
                });
        });
    },

})
