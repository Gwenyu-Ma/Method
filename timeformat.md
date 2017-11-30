```javascript
//倒计时
timerStart(data) {
  clearInterval(countTimer);
  let timeData = data;
  let time_num = Number(timeData);
  let timer = $('.timer');
  if (time_num <= 0) {
    clearInterval(countTimer);
    timer.html("00:00"); // 倒计时清空
    return;
  }
  countTimer = setInterval(() => {
    if (time_num <= 1) {
      clearInterval(countTimer);
      timer.html("00:00"); // 倒计时清空
    }
    time_num--;
    timer.html(this.timeFormat(time_num));
  }, 1000);
  timer.html(this.timeFormat(time_num));
}

//倒计时（时间格式化）
timeFormat(time_num) {
  let timeStr = "";
  let m = Math.floor(time_num / 60);
  let s = time_num % 60;
  if (m < 10) {
    timeStr += "0" + m;
  } else {
    timeStr += m;
  }
  timeStr += ":";
  if (s < 10) {
    timeStr += "0" + s;
  } else {
    timeStr += s;
  }
  return timeStr;
}
```