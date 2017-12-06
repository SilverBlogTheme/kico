var gapType = [
    {max: 60, suffix: " 秒前"},
    {max: 3600, suffix: " 分钟前"},
    {max: 86400, suffix: " 小时前"},
    {max: 604800, suffix: " 天前"},
    {max: 2592000, suffix: " 周前"},
    {max: 31536000, suffix: " 个月前"}
];

timeSince = function (date) {
    var gap = (new Date().getTime() - date) / 1000;
    var i = 0;
    while (true) {
        if (gap >= ((i <= 0) ? 0 : gapType[i - 1].max) && gap < gapType[i].max) {
            return Math.floor(gap / ((i <= 0) ? 1 : gapType[i - 1].max)) + gapType[i].suffix;
        } else if (gap > gapType[gapType.length - 1].max || gap < 0 || i >= gapType.length) {
            var ds = new Date(date);
            return ds.getFullYear() + " 年 " + (ds.getMonth() + 1) + " 月 " + ds.getDate() + " 日";
        } else {
            i += 1;
        }
    }
}

var dateItem = document.getElementsByTagName("time");
for (var i in dateItem) {
    if (dateItem[i].innerHTML != "") {
        var enTime = new Date(dateItem[i].innerHTML);
        dateItem[i].title = enTime.getFullYear() + " 年 " + (enTime.getMonth() + 1) + " 月 " + enTime.getDate() + " 日";
        dateItem[i].innerHTML = timeSince(enTime.getTime());
    }
}

document.addEventListener('DOMContentLoaded', function() {
    hljs.initHighlightingOnLoad();
	bPlayer.scan();
}, false);
