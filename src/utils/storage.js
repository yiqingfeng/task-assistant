/**
 * wx storage 相关处理
 */
const _ = require('../libs/lodash');

const TASKS_KEY = 'tasks';

/**
 * 获取所有任务信息
 */
function getAllTasks() {
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
exports.getAllTasks = getAllTasks;

/**
 * 添加任务到任务列表
 */
function addTask(task) {
    const {
        date,
    } = task;
    return new Promise((resolve, reject) => {
        getAllTasks()
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

/**
 * 清理存储信息
 */
function clearStorage(type) {
    const keyMaps = {
        'tasks': TASKS_KEY,
    };
    // 清空所有 key
    if (type === 'all') {
        return new Promise((resolve, reject) => {
            wx.clearStorage({
                success() {
                    resolve();
                },
                fail(error) {
                    reject(error);
                }
            })
        });
    }

    if (!keyMaps[type]) {
        return new Promise((resolve, reject) => {
            reject({
                errMsg: '该清空不合法！',
            });
        });
    }
    // 清空指定key
    return new Promise((resolve, reject) => {
        wx.removeStorage({
            key: keyMaps[type],
            success() {
                resolve();
            },
            fail(error) {
                reject(error);
            }
        })
    });
}
exports.clearStorage = clearStorage;
