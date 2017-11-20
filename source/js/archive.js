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
            str += '<li>' + (arTime.getMonth() + 1) + " 月 " + (arTime.getDay() + 1) + " 日："
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