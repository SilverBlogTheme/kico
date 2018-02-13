timeSince = function (date) {
    var gap = (new Date().getTime() - date) / 1000;
    if (gap >= 0 && gap < 60) {
        return Math.floor(gap) + " 秒前";
    } else if (gap >= 60 && gap < 3600) {
        return Math.floor(gap / 60) + " 分钟前";
    } else if (gap >= 3600 && gap < 86400) {
        return Math.floor(gap / 3600) + " 小时前";
    } else if (gap >= 86400 && gap < 604800) {
        return Math.floor(gap / 86400) + " 天前";
    } else if (gap >= 604800 && gap < 2592000) {
        return Math.floor(gap / 604800) + " 周前";
    } else if (gap >= 2592000 && gap < 31536000) {
        return Math.floor(gap / 2592000) + " 个月前";
    } else {
        var ds = new Date(date);
        return ds.getFullYear() + " 年 " + (ds.getMonth() + 1) + " 月 " + ds.getDate() + " 日";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var dateItem = document.getElementsByTagName("time");
    for (var i in dateItem) {
        if (dateItem[i].innerHTML != "") {
            var enTime = new Date(dateItem[i].innerHTML);
            dateItem[i].title = enTime.getFullYear() + " 年 " + (enTime.getMonth() + 1) + " 月 " + enTime.getDate() + " 日";
            dateItem[i].innerHTML = timeSince(enTime.getTime());
        }
    }
    hljs.initHighlightingOnLoad();
}, false);
