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
            return ds.getFullYear() + " 年 " + ds.getMonth() + " 月 " + ds.getDay() + " 日";
        } else {
            i += 1;
        }
    }
}

var uri = new URL(location.href);
var nav_div = document.getElementById("head-menu");
var links = nav_div.getElementsByTagName("a");
var index = 0;
var url_path = uri.pathname;
if (url_path !== "") {
    for (let i = links.length; i--;) {
        if (links[i].href.indexOf(url_path) !== -1 && url_path !== "/") {
            index = i;
            break;
        }
    }
}

links[index].parentNode.className = 'active';

var dateItem = document.getElementsByTagName("time");
for (let i in dateItem) {
    if (dateItem[i].innerHTML != "") {
        let enTime = new Date(dateItem[i].innerHTML);
        dateItem[i].title = enTime.getFullYear() + " 年 " + enTime.getMonth() + " 月 " + enTime.getDay() + " 日 " + enTime.getHours().toFixed(2) + ":" + enTime.getMinutes().toFixed(2);
        dateItem[i].innerHTML = timeSince(enTime.getTime());
    }
}

hljs.initHighlightingOnLoad();
