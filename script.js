"use strict";

var today = new Date();
console.log(today);
var calendarDate = document.querySelector(".calendar-data");
var calendarMonth = document.querySelector(".calendar-month");
var calendarYear = document.querySelector("#year");
calendarMonth.innerHTML = String(today.getMonth() + 1);
var now = new Intl.DateTimeFormat("en-Au", { dateStyle: "long" }).format(today);
console.log(new Date().getDay());
calendarMonth.innerHTML = now.split(" ")[1];
calendarYear.innerHTML = today.getFullYear();
var weekDays = today.getDay();
var monthDays = new Date(2022, 1, -1).getDate();
var htmlDoc = " ";
console.log(typeof monthDays);
for (let i = -weekDays + 1; i < monthDays; i++) {
  if (i > 0) htmlDoc = htmlDoc + "<li>" + i + "</li>";
  else htmlDoc = htmlDoc + "<li> </li>";
}
calendarDate.innerHTML = htmlDoc;
console.log(htmlDoc);
//   var date = new Date();
//   var year = document.querySelector('#year');
//   var month = document.querySelector('.calendar-month');
//   var calendarData = document.querySelector('.calendar-data');
//   var prev = document.querySelector('.prev');
//   var next = document.querySelector('.next');
//   var monthArr = [
//     '一月',
//     '二月',
//     '三月',
//     '四月',
//     '五月',
//     '六月',
//     '七月',
//     '八月',
//     '九月',
//     '十月',
//     '十一月',
//     '十二月',
//   ];
//   var y, m, day, d, html, today;
//   calendar();

//   function calendar() {
//     y = date.getFullYear();
//     year.innerHTML = y + '年';

//     m = date.getMonth();
//     month.innerHTML = monthArr[m];
//     day = new Date(y, m, 1).getDay(); //获取每个月第一天是周几
//     d = new Date(y, m + 1, -1).getDate() + 1; //获取多少天
//     html = '';

//     //把每个月第一天之前的时间填充为空
//     for (var i = 0; i < day; i++) {
//       html += '<li> </li>';
//     }

//     for (var j = 1; j <= d; j++) {
//       if (
//         y == new Date().getFullYear() &&
//         m == new Date().getMonth() &&
//         j == date.getDate()
//       ) {
//         html += "<li class='on'>" + j + '</li>';
//       } else {
//         html += '<li>' + j + '</li>';
//       }
//     }
//     calendarData.innerHTML = html;
//   }

//   prev.onclick = function () {
//     date.setMonth(date.getMonth() - 1);
//     calendar();
//   };

//   next.onclick = function () {
//     date.setMonth(date.getMonth() + 1);
//     calendar();
//   };
