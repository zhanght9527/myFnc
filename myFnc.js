/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let myFnc = {
  // 去除空格  type 1 - 所有空格  2 - 前后空格  3 - 前空格 4 - 后空格
  // trim('  1235asd',1)
  // result：1235asd
  trim (str, type) {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '')
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '')
      case 3:
        return str.replace(/(^\s*)/g, '')
      case 4:
        return str.replace(/(\s*$)/g, '')
      default:
        return str
    }
  },
  // 字符串循环复制
  // repeatStr(str->字符串, count->次数)
  // repeatStr('123',3)
  // "result：123123123"
  repeatStr (str, count) {
    return str.repeat(count)
  },
  // 检测字符串
  // checkType('165226226326','phone')
  // result：false
  checkType (str, type) {
    switch (type) {
      case 'email':
        return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
      case 'phone':
        return /^1[3|4|5|7|8][0-9]{9}$/.test(str)
      case 'tel':
        return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
      case 'number':
        return /^[0-9]$/.test(str)
      case 'english':
        return /^[a-zA-Z]+$/.test(str)
      case 'text':
        return /^\w+$/.test(str)
      case 'chinese':
        return /^[\u4E00-\u9FA5]+$/.test(str)
      case 'lower':
        return /^[a-z]+$/.test(str)
      case 'upper':
        return /^[A-Z]+$/.test(str)
      default:
        return true
    }
  },
  // 检测密码强度
  // checkPwd('12asdASAD')
  // result：3(强度等级为3)
  checkPwd (str) {
    let nowLv = 0
    if (str.length < 6) {
      return nowLv
    }
    if (/[0-9]/.test(str)) {
      nowLv++
    }
    if (/[a-z]/.test(str)) {
      nowLv++
    }
    if (/[A-Z]/.test(str)) {
      nowLv++
    }
    return nowLv
  },
  // 随机码
  // count取值范围2-36

  // randomWord(10)
  // result："2584316588472575"

  // randomWord(14)
  // result："9b405070dd00122640c192caab84537"

  // randomWord(36)
  // result："83vhdx10rmjkyb9"
  randomWord (count) {
    return Math.random().toString(count).substring(2)
  },
  // 格式化处理字符串
  // ecDo.formatText('1234asda567asd890')
  // result："12,34a,sda,567,asd,890"
  // ecDo.formatText('1234asda567asd890',4,' ')
  // result："1 234a sda5 67as d890"
  // ecDo.formatText('1234asda567asd890',4,'-')
  // result："1-234a-sda5-67as-d890"
  formatText (str, size = 3, delimiter = ',') {
    let regText = '\\B(?=(\\w{' + size + '})+(?!\\w))'
    let reg = new RegExp(regText, 'g')
    return str.replace(reg, delimiter)
  },
  // 找出最长单词 (Find the Longest word in a String)
  // longestWord('Find the Longest word in a String')
  // result：7
  // longestWord('Find|the|Longest|word|in|a|String','|')
  // result：7
  longestWord (str, splitType = /\s+/g) {
    let _max = 0
    let _item = ''
    let strArr = str.split(splitType)
    strArr.forEach(item => {
      if (_max < item.length) {
        _max = item.length
        _item = item
      }
    })
    return {el: _item, max: _max}
  },
  // 数组去重
  removeRepeatArray (arr) {
    //  return arr.filter(function (item, index, self) {
    //    return self.indexOf(item) === index;
    //  });
    // es6
    return [...new Set(arr)]
  },
  // 数组顺序打乱
  upsetArr (arr) {
    return arr.sort(() => {
      return Math.random() - 0.5
    })
  },
  // 数组最大值
  // 这一块的封装，主要是针对数字类型的数组
  maxArr (arr) {
    return Math.max.apply(null, arr)
  },
  // 数组最小值
  minArr (arr) {
    return Math.min.apply(null, arr)
  },
  // 这一块的封装，主要是针对数字类型的数组
  // 数组求和
  sumArr (arr) {
    return arr.reduce((pre, cur) => pre + cur)
  },
  // 数组平均值,小数点可能会有很多位，这里不做处理，处理了使用就不灵活了！
  covArr (arr) {
    return this.sumArr(arr) / arr.length
  },
  // 从数组中随机获取元素
  randomOne (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  },
  // 筛选数组
  // 删除值为'val'的数组元素
  // removeArrayForValue(['test','test1','test2','test','aaa'],'test','%')
  // result：["aaa"]   带有'test'的都删除
  // removeArrayForValue(['test','test1','test2','test','aaa'],'test')
  // result：["test1", "test2", "aaa"]  // 数组元素的值全等于'test'才被删除
  removeArrayForValue (arr, val, type) {
    return arr.filter(item => type ? item.indexOf(val) === -1 : item !== val)
  },
  // 获取对象数组某些项
  // let arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
  // getOptionArray(arr,'a,c')
  // result：[{a:1,c:9},{a:2,c:5},{a:5,c:underfind},{a:4,c:5},{a:4,c:7}]
  // getOptionArray(arr,'b',1)
  // result：[2, 3, 9, 2, 5]
  getOptionArray (arr, keys) {
    let newArr = []
    if (!keys) {
      return arr
    }
    let _keys = keys.split(',')
    let newArrOne = {}
    // 是否只是需要获取某一项的值
    if (_keys.length === 1) {
      for (let i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i][keys])
      }
      return newArr
    }
    for (let i = 0, len = arr.length; i < len; i++) {
      newArrOne = {}
      for (let j = 0, len1 = _keys.length; j < len1; j++) {
        newArrOne[_keys[j]] = arr[i][_keys[j]]
      }
      newArr.push(newArrOne)
    }
    return newArr
  },
  // 排除数组某些项
  // let arr=[{a:1,b:2,c:9},{a:2,b:3,c:5},{a:5,b:9},{a:4,b:2,c:5},{a:4,b:5,c:7}]
  // filterOptionArray(arr,'a')
  // result：[{b:2,c:9},{b:3,c:5},{b:9},{b:2,c:5},{b:5,c:7}]
  // filterOptionArray(arr,'a,c')
  // result：[{b:2},{b:3},{b:9},{b:2},{b:5}]
  filterOptionArray (arr, keys) {
    let newArr = []
    let _keys = keys.split(',')
    let newArrOne = {}
    for (let i = 0, len = arr.length; i < len; i++) {
      newArrOne = {}
      for (let key in arr[i]) {
        // 如果key不存在排除keys里面,添加数据
        if (_keys.indexOf(key) === -1) {
          newArrOne[key] = arr[i][key]
        }
      }
      newArr.push(newArrOne)
    }
    return newArr
  },
  // 适配rem
  setFontSize (_client) {
    let doc = document
    let win = window
    let docEl = doc.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    let recalc = function () {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      // 如果屏幕大于750（750是根据我效果图设置的，具体数值参考效果图），就设置clientWidth=750，防止font-size会超过100px
      if (clientWidth > _client) {
        clientWidth = _client
      }
      // 设置根元素font-size大小
      docEl.style.fontSize = 100 * (clientWidth / _client) + 'px'
    }
    // 屏幕大小改变，或者横竖屏切换时，触发函数
    win.addEventListener(resizeEvt, recalc, false)
    // 文档加载完成时，触发函数
    doc.addEventListener('DOMContentLoaded', recalc, false)
  },
  // 到某一个时间的倒计时
  // getEndTime('2017/7/22 16:0:0')
  // result："剩余时间6天 2小时 28 分钟20 秒"
  getEndTime (endTime) {
    let startDate = new Date() // 开始时间，当前时间
    let endDate = new Date(endTime) // 结束时间，需传入时间参数
    let t = endDate.getTime() - startDate.getTime() // 时间差的毫秒数
    let d = 0
    let h = 0
    let m = 0
    let s = 0
    if (t >= 0) {
      d = Math.floor(t / 1000 / 3600 / 24)
      h = Math.floor(t / 1000 / 60 / 60 % 24)
      m = Math.floor(t / 1000 / 60 % 60)
      s = Math.floor(t / 1000 % 60)
    }
    return {d, h, m, s}
  },
  // 随机返回一个范围的数字
  randomNumber (n1, n2) {
    // randomNumber(5,10)
    // 返回5-10的随机整数，包括5，10
    if (arguments.length === 2) {
      return Math.round(n1 + Math.random() * (n2 - n1))
    } else if (arguments.length === 1) {
    // randomNumber(10)
    // 返回0-10的随机整数，包括0，10
      return Math.round(Math.random() * n1)
    } else {
    // randomNumber()
    // 返回0-255的随机整数，包括0，255
      return Math.round(Math.random() * 255)
    }
  },
  // 设置url参数
  // setUrlPrmt({'a':1,'b':2})
  // result：a=1&b=2
  setUrlPrmt (obj) {
    let _rs = []
    for (let p in obj) {
      if (obj[p] != null && obj[p] !== '') {
        _rs.push(p + '=' + obj[p])
      }
    }
    return _rs.join('&')
  },
  // 获取url参数
  // getUrlPrmt('segmentfault.com/write?draftId=122000011938')
  // result：Object{draftId: "122000011938"}
  getUrlPrmt (url) {
    url = url !== '' ? url : window.location.href
    let _pa = url.substring(url.indexOf('?') + 1)
    let _arrS = _pa.split('&')
    let _rs = {}
    for (let i = 0, _len = _arrS.length; i < _len; i++) {
      let pos = _arrS[i].indexOf('=')
      if (pos === -1) {
        continue
      }
      let name = _arrS[i].substring(0, pos)
      let value = window.decodeURIComponent(_arrS[i].substring(pos + 1))
      _rs[name] = value
    }
    return _rs
  },
  // 清除对象中值为空的属性
  // filterParams({a:'',b:null,c:"010",d:123})
  // Object {c: "010", d: 123}
  filterParams (obj) {
    let _newPar = {}
    for (let key in obj) {
      if ((obj[key] === 0 || obj[key] === false || obj[key]) && obj[key].toString().replace(/(^\s*)|(\s*$)/g, '') !== '') {
        _newPar[key] = obj[key]
      }
    }
    return _newPar
  },
  // 手机类型判断
  browserInfo (type) {
    switch (type) {
      case 'android':
        return navigator.userAgent.toLowerCase().indexOf('android') !== -1
      case 'iphone':
        return navigator.userAgent.toLowerCase().indexOf('iphone') !== -1
      case 'ipad':
        return navigator.userAgent.toLowerCase().indexOf('ipad') !== -1
      case 'weixin':
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1
      default:
        return navigator.userAgent.toLowerCase()
    }
  },
  // 函数节流
  // let count=0;
  // function fn1(){
  //   count++;
  //   console.log(count)
  // }
  // 100ms内连续触发的调用，后一个调用会把前一个调用的等待处理掉，但每隔200ms至少执行一次
  // document.onmousemove=delayFn(fn1,100,200)
  delayFn (fn, delay, mustDelay) {
    let timer = null
    let tStart = +new Date()
    return function () {
      let _this = this
      let args = arguments
      let tCur = +new Date()
      // 先清理上一次的调用触发（上一次调用触发事件不执行）
      clearTimeout(timer)
      // 如果不存触发时间，那么当前的时间就是触发时间
      if (!tStart) {
        tStart = tCur
      }
      // 如果当前时间-触发时间大于最大的间隔时间（mustDelay），触发一次函数运行函数
      if (tCur - tStart >= mustDelay) {
        fn.apply(_this, args)
        tStart = tCur
      } else {
      // 否则延迟执行
        timer = setTimeout(() => {
          fn.apply(_this, args)
        }, delay)
      }
    }
  },
  // 设置cookie
  setCookie (name, value, iDay) {
    let oDate = new Date()
    oDate.setDate(oDate.getDate() + iDay)
    document.cookie = name + '=' + value + ';expires=' + oDate
  },
  // 获取cookie
  getCookie (name) {
    let arr = document.cookie.split('; ')
    let arr2
    for (let i = 0; i < arr.length; i++) {
      arr2 = arr[i].split('=')
      if (arr2[0] === name) {
        return arr2[1]
      }
    }
    return ''
  },
  // 删除cookie
  removeCookie (name) {
    this.setCookie(name, 1, -1)
  },
  // 检测对象是否有哪个类名
  hasClass (obj, classStr) {
    if (obj.className && this.trim(obj.className, 1) !== '') {
      let arr = obj.className.split(/\s+/) // 这个正则表达式是因为class可以有多个,判断是否包含
      return arr.indexOf(classStr) !== -1
    } else {
      return false
    }
  },
  // 添加类名
  addClass (obj, classStr) {
    if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length >= 1) {
      for (let i = 0, len = obj.length; i < len; i++) {
        if (!this.hasClass(obj[i], classStr)) {
          obj[i].className += ' ' + classStr
        }
      }
    } else {
      if (!this.hasClass(obj, classStr)) {
        obj.className += ' ' + classStr
      }
    }
  },
  // 删除类名
  removeClass (obj, classStr) {
    let reg
    if ((this.istype(obj, 'array') || this.istype(obj, 'elements')) && obj.length > 1) {
      for (let i = 0, len = obj.length; i < len; i++) {
        if (this.hasClass(obj[i], classStr)) {
          reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)')
          obj[i].className = obj[i].className.replace(reg, '')
        }
      }
    } else {
      if (this.hasClass(obj, classStr)) {
        reg = new RegExp('(\\s|^)' + classStr + '(\\s|$)')
        obj.className = obj.className.replace(reg, '')
      }
    }
  },
  // 替换类名("被替换的类名","替换的类名")
  replaceClass (obj, newName, oldName) {
    this.removeClass(obj, oldName)
    this.addClass(obj, newName)
  },
  // 获取兄弟节点
  // ecDo.siblings(obj,'#id')
  siblings (obj, opt) {
    let a = [] // 定义一个数组，用来存o的兄弟元素
    let p = obj.previousSibling
    while (p) { // 先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 p表示previousSibling
      if (p.nodeType === 1) {
        a.push(p)
      }
      p = p.previousSibling // 最后把上一个节点赋给p
    }
    a.reverse() // 把顺序反转一下 这样元素的顺序就是按先后的了
    let n = obj.nextSibling // 再取o的弟弟
    while (n) { // 判断有没有下一个弟弟结点 n是nextSibling的意思
      if (n.nodeType === 1) {
        a.push(n)
      }
      n = n.nextSibling
    }
    if (opt) {
      let _opt = opt.substr(1)
      let b = [] // 定义一个数组，用于储存过滤a的数组
      if (opt[0] === '.') {
        b = a.filter(item => item.className === _opt)
      } else if (opt[0] === '#') {
        b = a.filter(item => item.id === _opt)
      } else {
        b = a.filter(item => item.tagName.toLowerCase() === opt)
      }
      return b
    }
    return a
  },
  // 设置样式
  css (obj, json) {
    for (let attr in json) {
      obj.style[attr] = json[attr]
    }
  },
  // 设置HTML内容
  html (obj) {
    if (arguments.length === 1) {
      return obj.innerHTML
    } else if (arguments.length === 2) {
      obj.innerHTML = arguments[1]
    }
  },
  // 设置HTML内容
  text (obj) {
    if (arguments.length === 1) {
      return obj.innerHTML
    } else if (arguments.length === 2) {
      obj.innerHTML = this.filterStr(arguments[1], 'html')
    }
  },
  // 显示隐藏
  show (obj) {
    let blockArr = ['div', 'li', 'ul', 'ol', 'dl', 'table', 'article', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'hr', 'header', 'footer', 'details', 'summary', 'section', 'aside', '']
    if (blockArr.indexOf(obj.tagName.toLocaleLowerCase()) === -1) {
      obj.style.display = 'inline'
    } else {
      obj.style.display = 'block'
    }
  },
  hide (obj) {
    obj.style.display = 'none'
  },
  // 自动适配浏览器前缀
  // const transform = prefixStyle('transform')
  // this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px,0,0)`
  prefixStyle (style) {
    let elementStyle = document.createElement('div').style
    let vender = (() => {
      let transformNames = {
        webkit: 'webkitTransform',
        Moz: 'MozTransform',
        O: 'OTransform',
        ms: 'msTransform',
        standard: 'transform'
      }
      for (let key in transformNames) {
        if (elementStyle[transformNames[key]] !== undefined) {
          return key
        }
      }
      return false
    })()
    if (vender === false) {
      return false
    }
    if (vender === 'standard') {
      return style
    }
    return vender + style.charAt(0).toUpperCase() + style.substr(1)
  },
  /* 封装ajax函数
   * @param {string}obj.type http连接的方式，包括POST和GET两种方式
   * @param {string}obj.url 发送请求的url
   * @param {boolean}obj.async 是否为异步请求，true为异步的，false为同步的
   * @param {object}obj.data 发送的参数，格式为对象类型
   * @param {function}obj.success ajax发送并接收成功调用的回调函数
   * @param {function}obj.error ajax发送失败或者接收失败调用的回调函数
   */
  /* ajax({
   *   type:'get',
   *   url:'xxx',
   *   data:{
   *     id:'111'
   *   },
   *   success:function(res){
   *     console.log(res)
   *   }
   * })
  */
  ajax (obj) {
    obj = Object.assign({
      type: 'POST',
      url: '',
      async: true,
      data: null,
      success () {},
      error () {}
    }, obj)
    obj.type = obj.type.toUpperCase()
    let xmlHttp = null
    if (XMLHttpRequest) {
      xmlHttp = new XMLHttpRequest()
    } else {
      xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    let params = []
    for (let key in obj.data) {
      params.push(key + '=' + obj.data[key])
    }
    let postData = params.join('&')
    if (obj.type.toUpperCase() === 'POST') {
      xmlHttp.open(obj.type, obj.url, obj.async)
      xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
      xmlHttp.send(postData)
    } else if (obj.type.toUpperCase() === 'GET') {
      xmlHttp.open(obj.type, `${obj.url}?${postData}`, obj.async)
      xmlHttp.send(null)
    }
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        obj.success(xmlHttp.responseText)
      } else {
        obj.error(xmlHttp.responseText)
      }
    }
  },
}
