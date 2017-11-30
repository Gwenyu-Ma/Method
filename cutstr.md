```javascript
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
```