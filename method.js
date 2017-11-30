//截取固定长度字符串
cutstr(str, len) {
  let str_length = 0,
    str_len = str.length,
    str_cut = "";
  for (let i = 0; i < str_len; i++) {
    let a = str.charAt(i);
    str_length++;
    if (escape(a).length > 4) {
      //中文字符的长度经编码之后大于4
      str_length++;
    }
    str_cut = str_cut + a;
    if (str_length >= len) {
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回源字符串；
  if (str_length < len) {
    return str;
  }
}

/* 倒计时 */
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

/* 倒计时（时间格式化） */
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