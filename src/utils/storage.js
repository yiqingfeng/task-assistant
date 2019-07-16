/**
 * wx storage 相关处理
 */
const _ = require('../libs/lodash');
const TASKS_KEY = 'tasks';

function getTasks() {
    return new Promise((resolve, reject) => {
        wx.getStorage({
            key: TASKS_KEY,
            success(res) {
                resolve(res.data || {});
            },
            fail(error) {
                console.log(error);
                resolve({});
            },
        });
    });
}
exports.getTasks = getTasks;

function addTask(task) {
    const {
        date,
    } = task;
    return new Promise((resolve, reject) => {
        getTasks()
            .then(tasks => {
                if (!tasks[date]) {
                    tasks[date] = [];
                }
                tasks[date].push(task);
                wx.setStorage({
                    key: TASKS_KEY,
                    data: tasks,
                    success() {
                        resolve();
                    },
                    fail(error) {
                        reject(error);
                    }
                })
            })
    });
}
exports.addTask = addTask;

function clearTasks() {
    return new Promise((resolve, reject) => {
        wx.setStorage({
            key: TASKS_KEY,
            data: {},
            success() {
                resolve();
            },
            fail(error) {
                reject(error);
            }
        })
    });
}
exports.clearTasks = clearTasks;

function parseTasks(tasks) {
    const ignoreTimeTasks = [];
    const timeLineTasks = [];
    let timeIndex = new Set();
    let startTimeList = {};
    let endTimeList = {};
    // 获取无限时任务
    tasks.forEach((task, index) => {
        if (task.isIgnoreTime) {
            ignoreTimeTasks.push(task);
        } else {
            startTimeList.push()
            tempList.push(task);
        }
    });
    // 解析限时任务

}
exports.parseTasks = parseTasks;
