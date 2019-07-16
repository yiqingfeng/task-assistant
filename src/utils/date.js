/**
 * 时间相关处理
 */
const MINUTES_IN_A_HOUR = 60;

/**
 * 获取给定的日期信息
 */
function getDateInfo(date) {
    const now = date || new Date();
    return {
        days: now.getDate(),
        weeks: now.getDay(),
        months: now.getMonth() + 1,
        years: now.getFullYear(),
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
    };
}
exports.getDateInfo = getDateInfo;

/**
 * 获取周对应的描述
 */
function getWeekDesc(week) {
    const weekMaps = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
    return weekMaps[week] || '';
}
exports.getWeekDesc = getWeekDesc;

/**
 * 获取月份对应的描述
 */
function getMonthDesc(month) {
    const monthMaps = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
    return monthMaps[month - 1] || '';
}
exports.getMonthDesc = getMonthDesc;

/**
 * 格式化日期
 */
function formatDate(date, formatStr) {
    const info = getDateInfo(date);
    let result = formatStr || '';
    return result.replace('yyyy', info.years)
        .replace('MM', info.months)
        .replace('dd', info.days)
        .replace('EE', getWeekDesc(info.weeks))
        .replace('hh', info.hours)
        .replace('mm', info.minutes)
        .replace('ss', info.seconds);
}
exports.formatDate = formatDate;

/**
 * 多少小时后
 */
function afterHours(date, hours) {
    const nDate = new Date(date.getTime());
    nDate.setHours(nDate.getHours() + (hours || 1));
    return nDate;
}
exports.afterHours = afterHours;

/**
 * 时刻转换成分
 */

function time2minute(str) {
    const exp = /^(\d{1,2})\D{1,2}(\d{1,2})$/;
    const matchs = str.match(exp);
    if (matchs) {
        return matchs[1] * MINUTES_IN_A_HOUR + +matchs[2];
    }
    return 0;
}
exports.time2minute = time2minute;

/**
 * 分装换成时刻
 */
function minute2time(minutes, formatStr) {
    const hours = Math.floor(minutes / MINUTES_IN_A_HOUR);
    const minute = minutes % MINUTES_IN_A_HOUR;
    let result = formatStr || '';
    return result.replace('hh', hours)
        .replace('mm', minute);
}
exports.minute2time = minute2time;

/**
 * 获取给定时间的分钟（当前天）
 */
function getDateMinutes(date) {
    const {
        hours,
        minutes,
    } = getDateInfo(date);
    return hours * MINUTES_IN_A_HOUR + minutes;
}
exports.getDateMinutes = getDateMinutes;
