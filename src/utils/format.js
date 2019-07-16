/**
 * 数据格式化处理
 */
const {
    getDateMinutes,
    minute2time,
} = require('./date');

function parseTasks(tasks) {
    const ignoreTimeTasks = [];
    const timeLineTasks = [];
    const nowMinutes = getDateMinutes();
    // 获取无限时任务
    tasks.forEach((task, index) => {
        if (task.isIgnoreTime) {
            ignoreTimeTasks.push(task);
        } else {
            let status = 'unstart';
            if (task.endTime < nowMinutes) {
                status = 'past';
            } else if (task.startTime < nowMinutes) {
                status = 'underway';
            }
            timeLineTasks.push({
                status,
                times: [{
                    top: '0',
                    text: minute2time(task.startTime, 'hh:mm')
                }, {
                    top: '100%',
                    text: minute2time(task.endTime, 'hh:mm'),
                }],
                tasks: [{
                    title: task.title,
                    status: task.status,
                }]
            });
        }
    });
    // 解析限时任务
    return {
        ignoreTimeTasks,
        timeLineTasks,
    };
}
exports.parseTasks = parseTasks;
