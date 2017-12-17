var aContainer = document.getElementById("archive-container");
var request = new XMLHttpRequest();
request.open('POST', '/control/get_post_list', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
        var list = JSON.parse(request.responseText);
        var year = 0;
        var str = "";
        for (var i in list) {
            var t = new Date(list[i].time).getFullYear();
            if (t != year) {
                if (year != 0) {
                    str += '</ul>';
                }
                year = t;
                str += '<h2>' + year + ' 年</h2><ul>';
            }
            var arTime = new Date(list[i].time);
            str += '<li>' + (arTime.getMonth() + 1) + " 月 " + arTime.getDate() + " 日："
                + '<a href="/' + list[i].name + '">' + list[i].title + '</a></li>';
        }
        aContainer.innerHTML = str;
    } else {
        aContainer.innerHTML = "载入归档页面失败（" + request.status + "），请尝试刷新页面。";
    }
};

request.onerror = function () {
    aContainer.innerHTML = "载入归档页面失败，请尝试刷新页面。";
};

if (aContainer) {
    aContainer.innerHTML = "归档页面载入中 ...";
    request.send();
}
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

/* ----

# Kico Style Docs
# By: Dreamer-Paul
# Last Update: 2017.7.23

一个简洁、有趣的开源响应式框架，仅包含基础样式，需按照一定规则进行二次开发。

欢迎你加入缤奇，和我们一起改变世界。
本代码为缤奇保罗原创，并遵守 MIT 开源协议。保罗的个人博客：https://hi-paul.space

---- */

if (window.console && window.console.log) {
    console.log("\n %c Kico Style %c https://www.binkic.com \n\n", "color: #fff; background: #3498db; padding: 5px 0;", "background: #efefef; padding: 5px 0;");
}

// 菜单按钮
function nav_btn() {
    var nav_btn = document.getElementsByClassName('toggle-btn')[0];
    var nav_bar = document.getElementsByClassName('head-menu')[0];
    nav_btn.addEventListener("click", function () {
        nav_bar.classList.toggle("active");
        navtrans();
    });
}
nav_btn();

function navtrans() {
    var header = document.getElementsByTagName("header")[0];
    var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if (scroll > 0 || document.getElementById('head-menu').className.indexOf("active") != -1) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

// 页面滚动事件
window.onscroll = function () {
    navtrans();
};