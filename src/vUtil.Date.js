/**
 * @author: Miller
 */
vUtil.Date = {
    //获取当前时间
    getCurrentTime: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var hours = today.getHours();
        var minutes = today.getMinutes();
        var seconds = today.getSeconds();
        var timeString = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;
        return timeString;
    },
    //获取当前 年-月-日
    getCurrentDate: function () {
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var dateString = year + "-" + month + "-" + day;
        return dateString;
    },
    //获取当前年份
    getCurrentYear: function () {
        var today = new Date();
        var year = today.getFullYear();
        return year.toString();
    },
    //获取当前月份
    getCurrentMonth: function () {
        var today = new Date();
        var month = today.getMonth() + 1;
        return month.toString();
    },
    //获取当前日期
    getCurrentDay: function () {
        var today = new Date();
        var date = today.getDate();
        return date.toString();
    },
    //获取当前星期几--0是星期天
    getCurrentWeek: function () {
        var today = new Date();
        var week = today.getDay();
        return week.toString();
    },
    //获取某个月的天数，从0开始
    getDaysOfMonth: function (year, month) {
        return [31, (this.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    /**日期格式化，第一个参数为日期，第二个参数为日期格式化的格式，返回一个格式化后的字符串*/
    dateFormat: function (date, format) {
        var times = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
            "S": date.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in times) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + times[k]).substr(("" + times[k]).length));
            }
        }
        return format;
    },

    /*
     * 比较时间大小
     * time1>time2 return 1
     * time1<time2 return -1
     * time1==time2 return 0
     */
    compareTime: function (time1, time2) {
        if (Date.parse(time1.replace(/-/g, "/")) > Date.parse(time2.replace(/-/g, "/"))) {
            return 1;
        } else if (Date.parse(time1.replace(/-/g, "/")) < Date.parse(time2.replace(/-/g, "/"))) {
            return -1;
        } else if (Date.parse(time1.replace(/-/g, "/")) == Date.parse(time2.replace(/-/g, "/"))) {
            return 0;
        }
    },
};